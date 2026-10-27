declare namespace Cloudflare {
  interface Env {
    DATABASE_URL?: string
    /** Stripe server API key. Server-only; never read in client code. */
    STRIPE_SECRET_KEY?: string
    /** Stripe webhook signing secret, for the endpoint's signature check. */
    STRIPE_WEBHOOK_SECRET?: string
  }
}
