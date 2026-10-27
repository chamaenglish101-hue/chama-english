import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"

import { loadBillingStatusFast } from "#/lib/billing.read.server.ts"
import {
  findCustomerId,
  loadBillingStatus,
  onceMethod,
  requestOrigin,
  resolveCustomerId,
} from "#/lib/billing.server.ts"
import { type BillingStatus } from "#/lib/billing.ts"
import { MONTHLY_PLAN, ONCE_CHECKOUT_KIND, ONCE_PLAN } from "#/lib/billing.ts"
import { getHappySeedsUser } from "#/lib/happyseeds-platform-auth/server.ts"
import { getStripe, stripeConfigured, usingTestKey } from "#/lib/stripe.ts"

export const fetchBillingStatus = createServerFn({ method: "GET" }).handler(
  async (): Promise<BillingStatus> => loadBillingStatusFast(getRequest()),
)

/**
 * Re-reads the plan right after a payment, so the page the person lands on
 * shows the access they just paid for instead of the state from before the
 * checkout.
 */
export const refreshBillingStatus = createServerFn({ method: "POST" }).handler(
  async (): Promise<BillingStatus> => loadBillingStatus(getRequest()),
)

export type CheckoutResult =
  | { ok: true; url: string }
  | { ok: false; reason: "unauthenticated" | "unconfigured" | "failed" }

/**
 * Creates the hosted Checkout session. The browser sends nothing but the click:
 * the amount, the currency and the plan all come from the server.
 */
export const startSubscriptionCheckout = createServerFn({
  method: "POST",
}).handler(async (): Promise<CheckoutResult> => {
  const request = getRequest()
  const user = await getHappySeedsUser(request)
  if (!user) return { ok: false, reason: "unauthenticated" }
  if (!stripeConfigured()) return { ok: false, reason: "unconfigured" }

  try {
    const customerId = await resolveCustomerId(user.openid, user.email ?? null)
    const origin = requestOrigin(request)

    const session = await getStripe().checkout.sessions.create(
      {
        mode: "subscription",
        customer: customerId,
        client_reference_id: user.openid,
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: MONTHLY_PLAN.currency,
              unit_amount: MONTHLY_PLAN.amountCents,
              recurring: { interval: MONTHLY_PLAN.interval },
              product_data: {
                name: MONTHLY_PLAN.name,
                description: MONTHLY_PLAN.description,
              },
            },
          },
        ],
        subscription_data: { metadata: { userId: user.openid } },
        locale: "pt-BR",
        success_url: `${origin}/assinatura?checkout=sucesso`,
        cancel_url: `${origin}/assinatura?checkout=cancelado`,
      },
      {
        // A double click inside the same few minutes reuses one session; an
        // attempt later on gets a fresh one, so a returning customer is never
        // handed a stale, already-completed checkout.
        idempotencyKey: `subscribe:${user.openid}:${Math.floor(Date.now() / 600_000)}`,
      },
    )

    if (!session.url) return { ok: false, reason: "failed" }
    return { ok: true, url: session.url }
  } catch (error) {
    const failure = error as Error & { code?: string }
    console.error("stripe.checkout.failed", {
      message: failure.message,
      code: failure.code,
    })
    return { ok: false, reason: "failed" }
  }
})

export type OnceCheckoutResult =
  | { ok: true; url: string }
  | {
      ok: false
      reason: "unauthenticated" | "unconfigured" | "no_method" | "failed"
    }

/**
 * The one-time purchase of R$ 15 that opens a 30-day window. Stripe cannot
 * renew Pix or boleto automatically, so this is a separate session in `payment`
 * mode, never a change to the card plan: the method is the one the account can
 * really charge with, decided on the server.
 */
export const startOnceCheckout = createServerFn({ method: "POST" }).handler(
  async (): Promise<OnceCheckoutResult> => {
    const request = getRequest()
    const user = await getHappySeedsUser(request)
    if (!user) return { ok: false, reason: "unauthenticated" }
    if (!stripeConfigured()) return { ok: false, reason: "unconfigured" }

    const method = await onceMethod()
    if (!method) return { ok: false, reason: "no_method" }

    // Safety net behind `onceMethod`: with a test key Stripe happily accepts a Pix
    // intent and hands back a simulated QR code, which is the fake-payment screen
    // nobody should ever reach. Refuse here too, where the charge is actually
    // created, so no path can route around it.
    if (method === "pix" && usingTestKey()) {
      console.error("stripe.once_checkout.pix_in_test_mode")
      return { ok: false, reason: "no_method" }
    }

    try {
      const customerId = await resolveCustomerId(
        user.openid,
        user.email ?? null,
      )
      const origin = requestOrigin(request)

      const session = await getStripe().checkout.sessions.create(
        {
          mode: "payment",
          customer: customerId,
          client_reference_id: user.openid,
          payment_method_types: [method],
          line_items: [
            {
              quantity: 1,
              price_data: {
                currency: ONCE_PLAN.currency,
                unit_amount: ONCE_PLAN.amountCents,
                product_data: {
                  name: ONCE_PLAN.name,
                  description: ONCE_PLAN.description,
                },
              },
            },
          ],
          payment_intent_data: {
            metadata: { userId: user.openid, kind: ONCE_CHECKOUT_KIND },
          },
          metadata: { userId: user.openid, kind: ONCE_CHECKOUT_KIND },
          locale: "pt-BR",
          success_url: `${origin}/assinatura?checkout=sucesso`,
          cancel_url: `${origin}/assinatura?checkout=cancelado`,
        },
        {
          // A double click inside the same few minutes reuses one session, so a
          // second boleto is never generated for the same purchase.
          idempotencyKey: `once:${method}:${user.openid}:${Math.floor(Date.now() / 300_000)}`,
        },
      )

      if (!session.url) return { ok: false, reason: "failed" }
      return { ok: true, url: session.url }
    } catch (error) {
      const failure = error as Error & { code?: string }
      console.error("stripe.once_checkout.failed", {
        method,
        message: failure.message,
        code: failure.code,
      })
      return { ok: false, reason: "failed" }
    }
  },
)

export type PortalResult =
  | { ok: true; url: string }
  | {
      ok: false
      reason: "unauthenticated" | "unconfigured" | "no_customer" | "failed"
    }

/**
 * The customer portal is the whole self-service surface: card, invoices and
 * cancellation. The customer id is read from the session's own row, never sent
 * by the browser.
 */
export const openBillingPortal = createServerFn({ method: "POST" }).handler(
  async (): Promise<PortalResult> => {
    const request = getRequest()
    const user = await getHappySeedsUser(request)
    if (!user) return { ok: false, reason: "unauthenticated" }
    if (!stripeConfigured()) return { ok: false, reason: "unconfigured" }

    const customerId = await findCustomerId(user.openid)
    if (!customerId) return { ok: false, reason: "no_customer" }

    try {
      const session = await getStripe().billingPortal.sessions.create({
        customer: customerId,
        return_url: `${requestOrigin(request)}/assinatura`,
        locale: "pt-BR",
      })
      return { ok: true, url: session.url }
    } catch (error) {
      const failure = error as Error & { code?: string }
      console.error("stripe.portal.failed", {
        message: failure.message,
        code: failure.code,
      })
      return { ok: false, reason: "failed" }
    }
  },
)
