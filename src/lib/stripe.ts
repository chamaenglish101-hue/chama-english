import "@tanstack/react-start/server-only"
import { env } from "cloudflare:workers"
import Stripe from "stripe"

/** True when the server can talk to Stripe at all. Never exposes the value. */
export function stripeConfigured(): boolean {
  return Boolean(env.STRIPE_SECRET_KEY)
}

export function webhookConfigured(): boolean {
  return Boolean(env.STRIPE_WEBHOOK_SECRET)
}

/**
 * True while the deployed key is a test key (`sk_test_…`).
 *
 * Test mode does not merely lack real money: Brazilian Pix in test mode returns a
 * QR code that is a simulated one — its copy-and-paste string is a placeholder
 * (`123456789br.gov.bcb.pix…`) rather than a real EMV payload, so a bank app
 * cannot pay it, and no Pix account is ever enabled for a test key. Offering that
 * screen to a real person is exactly the "simular compra" experience we must
 * never show, so the app reads the prefix and refuses to present Pix as payable.
 *
 * The prefix is a public fact about the key, not the key itself; nothing here
 * logs or exposes the secret.
 */
export function usingTestKey(): boolean {
  return (env.STRIPE_SECRET_KEY ?? "").startsWith("sk_test_")
}

/**
 * Request-scoped Stripe client. Keep the construction inside the function:
 * Worker bindings are unavailable at module scope, and a module-scope secret
 * leaks into the client bundle.
 */
export function getStripe(): Stripe {
  const secretKey = env.STRIPE_SECRET_KEY
  if (!secretKey) throw new Error("STRIPE_SECRET_KEY is not set")

  return new Stripe(secretKey, {
    apiVersion: "2026-07-29.dahlia",
    maxNetworkRetries: 2,
    timeout: 20_000,
  })
}
