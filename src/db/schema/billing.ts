import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core"

/**
 * One row per paying person, keyed by the platform session's OpenID. The app
 * reads this — never the Stripe API — to decide whether a lesson is unlocked.
 */
export const subscriptions = pgTable("subscriptions", {
  userId: text("user_id").primaryKey(),
  stripeCustomerId: text("stripe_customer_id").notNull(),
  subscriptionId: text("subscription_id"),
  priceId: text("price_id"),
  /** trialing | active | past_due | canceled | unpaid | incomplete… */
  status: text("status"),
  cancelAtPeriodEnd: boolean("cancel_at_period_end").notNull().default(false),
  currentPeriodEnd: timestamp("current_period_end", { withTimezone: true }),
  /**
   * Pix is a one-time payment, so the paid window is tracked separately from the
   * card subscription: access lasts while this timestamp is in the future.
   */
  pixPeriodEnd: timestamp("pix_period_end", { withTimezone: true }),
  /** The last Pix Checkout session that was paid, kept for support. */
  lastPixSessionId: text("last_pix_session_id"),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
})

/** One row per processed Stripe event. The primary key is the dedup lock. */
export const stripeWebhookEvents = pgTable("stripe_webhook_events", {
  eventId: text("event_id").primaryKey(),
  eventType: text("event_type").notNull(),
  receivedAt: timestamp("received_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
})
