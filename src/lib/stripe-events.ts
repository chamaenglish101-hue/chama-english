import "@tanstack/react-start/server-only"
import { eq } from "drizzle-orm"
import type Stripe from "stripe"

import { withDatabase } from "#/db/index.ts"
import { subscriptions, stripeWebhookEvents } from "#/db/schema/billing.ts"
import { ONCE_CHECKOUT_KIND, nextPixPeriodEnd } from "#/lib/billing.ts"

/**
 * The webhook is the only place that grants or removes access. Everything here
 * runs inside one transaction: claiming the event and writing the entitlement
 * either both happen or neither does, so a Stripe retry can always recover.
 */
export async function fulfillStripeEvent(event: Stripe.Event): Promise<void> {
  await withDatabase((database) =>
    database.transaction(async (tx) => {
      // The insert *is* the lock: "select then insert" races against a parallel
      // redelivery, and sharing the transaction with the fulfilment means a
      // thrown handler rolls the claim back.
      const claimed = await tx
        .insert(stripeWebhookEvents)
        .values({ eventId: event.id, eventType: event.type })
        .onConflictDoNothing()
        .returning({ eventId: stripeWebhookEvents.eventId })

      if (claimed.length === 0) {
        console.info("stripe.webhook.duplicate", { eventId: event.id })
        return
      }

      switch (event.type) {
        case "customer.subscription.created":
        case "customer.subscription.updated":
        case "customer.subscription.deleted": {
          const subscription = event.data.object
          const customerId = String(subscription.customer)

          // The metadata set at checkout is the fast path; the customer column
          // is the safety net for an event that arrives without it.
          let userId: string | null = subscription.metadata.userId ?? null
          if (!userId) {
            const rows = await tx
              .select({ userId: subscriptions.userId })
              .from(subscriptions)
              .where(eq(subscriptions.stripeCustomerId, customerId))
              .limit(1)
            userId = rows[0]?.userId ?? null
          }
          if (!userId) {
            console.warn("stripe.webhook.subscription_without_user", {
              eventId: event.id,
              subscriptionId: subscription.id,
            })
            return
          }

          // Period bounds live on the item, not the subscription, in this API
          // version. Stripe timestamps are seconds.
          const item = subscription.items.data[0]
          const status =
            event.type === "customer.subscription.deleted"
              ? "canceled"
              : subscription.status

          await tx
            .insert(subscriptions)
            .values({
              userId,
              stripeCustomerId: customerId,
              subscriptionId: subscription.id,
              priceId: item?.price.id ?? null,
              status,
              cancelAtPeriodEnd: subscription.cancel_at_period_end,
              currentPeriodEnd: item
                ? new Date(item.current_period_end * 1000)
                : null,
              updatedAt: new Date(),
            })
            .onConflictDoUpdate({
              target: subscriptions.userId,
              set: {
                stripeCustomerId: customerId,
                subscriptionId: subscription.id,
                priceId: item?.price.id ?? null,
                status,
                cancelAtPeriodEnd: subscription.cancel_at_period_end,
                currentPeriodEnd: item
                  ? new Date(item.current_period_end * 1000)
                  : null,
                updatedAt: new Date(),
              },
            })

          console.info("stripe.webhook.subscription_synced", {
            eventId: event.id,
            eventType: event.type,
            subscriptionId: subscription.id,
            status,
          })
          return
        }

        case "checkout.session.completed":
        case "checkout.session.async_payment_succeeded": {
          const session = event.data.object
          const userId =
            session.metadata?.userId ?? session.client_reference_id ?? null
          const customerId = session.customer ? String(session.customer) : null

          // A one-time purchase (Pix, or boleto when Pix is unavailable) opens a
          // 30-day window on top of whatever is left, and never touches the card
          // subscription columns.
          if (session.mode === "payment") {
            // `paid` is the confirmation that is worth money — and the only one
            // that grants anything. Pix and boleto both arrive as
            // `checkout.session.completed` with `unpaid` while the person still
            // owes, and only become `paid` on the later
            // `checkout.session.async_payment_succeeded`. A canceled, expired or
            // abandoned Pix therefore never reaches the grant below: it either
            // stays `unpaid` or arrives as `checkout.session.expired`, which this
            // handler does not treat as a grant at all.
            if (
              session.metadata?.kind !== ONCE_CHECKOUT_KIND ||
              session.payment_status !== "paid"
            ) {
              console.info("stripe.webhook.payment_not_granted", {
                eventId: event.id,
                sessionId: session.id,
                eventType: event.type,
                paymentStatus: session.payment_status,
              })
              return
            }

            if (!userId || !customerId) {
              console.warn("stripe.webhook.once_without_user", {
                eventId: event.id,
                sessionId: session.id,
              })
              return
            }

            const rows = await tx
              .select({ pixPeriodEnd: subscriptions.pixPeriodEnd })
              .from(subscriptions)
              .where(eq(subscriptions.userId, userId))
              .limit(1)

            const pixPeriodEnd = nextPixPeriodEnd(rows[0]?.pixPeriodEnd ?? null)

            await tx
              .insert(subscriptions)
              .values({
                userId,
                stripeCustomerId: customerId,
                pixPeriodEnd,
                lastPixSessionId: session.id,
                updatedAt: new Date(),
              })
              .onConflictDoUpdate({
                target: subscriptions.userId,
                set: {
                  stripeCustomerId: customerId,
                  pixPeriodEnd,
                  lastPixSessionId: session.id,
                  updatedAt: new Date(),
                },
              })

            console.info("stripe.webhook.once_granted", {
              eventId: event.id,
              sessionId: session.id,
              userId,
              pixPeriodEnd: pixPeriodEnd.toISOString(),
            })
            return
          }

          // Card checkout: the entitlement itself arrives with the subscription
          // events; this is the trail that ties a checkout back to a person.
          console.info("stripe.webhook.checkout_completed", {
            eventId: event.id,
            sessionId: session.id,
            userId: userId ?? undefined,
            customerId: customerId ?? undefined,
          })
          return
        }

        case "invoice.paid":
        case "invoice.payment_failed": {
          // Renewals and dunning also move the subscription, which lands as a
          // `customer.subscription.updated`; keep the trail for support.
          console.info("stripe.webhook.invoice", {
            eventId: event.id,
            eventType: event.type,
          })
          return
        }

        default:
          // Unknown types are acknowledged, not treated as errors.
          console.info("stripe.webhook.ignored", { eventType: event.type })
          return
      }
    }),
  )
}
