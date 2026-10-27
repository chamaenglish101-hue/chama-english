import { createFileRoute } from "@tanstack/react-router"
import "@tanstack/react-start"
import { env } from "cloudflare:workers"
import type Stripe from "stripe"

import { fulfillStripeEvent } from "#/lib/stripe-events.ts"
import { getStripe } from "#/lib/stripe.ts"

/**
 * Stripe calls this directly, so it must be a server route: server functions
 * carry CSRF protection that Stripe cannot satisfy.
 */
export const Route = createFileRoute("/api/stripe/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const webhookSecret = env.STRIPE_WEBHOOK_SECRET
        if (!webhookSecret) {
          console.error("stripe.webhook.missing_secret")
          return new Response("webhook secret is not configured", {
            status: 500,
          })
        }

        const signature = request.headers.get("stripe-signature")
        if (!signature)
          return new Response("missing signature", { status: 400 })

        // Raw body, byte for byte: JSON.parse first and the HMAC never matches.
        const payload = await request.text()

        let event: Stripe.Event
        try {
          // Async only — the Worker build signs through SubtleCrypto.
          event = await getStripe().webhooks.constructEventAsync(
            payload,
            signature,
            webhookSecret,
          )
        } catch (error) {
          console.error("stripe.webhook.invalid_signature", {
            message: (error as Error).message,
          })
          return new Response("invalid signature", { status: 400 })
        }

        try {
          await fulfillStripeEvent(event)
        } catch (error) {
          console.error("stripe.webhook.failed", {
            eventId: event.id,
            eventType: event.type,
            message: (error as Error).message,
          })
          // 5xx makes Stripe retry with backoff; do not swallow it as a 200.
          return new Response("handler failed", { status: 500 })
        }

        return Response.json({ received: true })
      },
    },
  },
})
