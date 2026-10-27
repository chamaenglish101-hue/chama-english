import "@tanstack/react-start/server-only"
import { eq } from "drizzle-orm"

import { withDatabase } from "#/db/index.ts"
import { subscriptions } from "#/db/schema/billing.ts"
import {
  EMPTY_BILLING_STATUS,
  ONCE_PLAN,
  hasFullAccess,
  type BillingStatus,
  type OnceMethod,
  type SubscriptionStatus,
} from "#/lib/billing.ts"
import { getHappySeedsUser } from "#/lib/happyseeds-platform-auth/server.ts"
import { getPublicOrigin } from "#/lib/happyseeds-platform-auth/server.ts"
import { getStripe, stripeConfigured, usingTestKey } from "#/lib/stripe.ts"

export interface SubscriptionRow {
  userId: string
  stripeCustomerId: string
  subscriptionId: string | null
  priceId: string | null
  status: SubscriptionStatus
  cancelAtPeriodEnd: boolean
  currentPeriodEnd: Date | null
  pixPeriodEnd: Date | null
}

/**
 * The entitlement row is the only source of truth the app reads. Pages never
 * ask Stripe whether someone may study — the webhook keeps this row current.
 */
export async function readSubscription(
  userId: string,
): Promise<SubscriptionRow | null> {
  const rows = await withDatabase((database) =>
    database
      .select({
        userId: subscriptions.userId,
        stripeCustomerId: subscriptions.stripeCustomerId,
        subscriptionId: subscriptions.subscriptionId,
        priceId: subscriptions.priceId,
        status: subscriptions.status,
        cancelAtPeriodEnd: subscriptions.cancelAtPeriodEnd,
        currentPeriodEnd: subscriptions.currentPeriodEnd,
        pixPeriodEnd: subscriptions.pixPeriodEnd,
      })
      .from(subscriptions)
      .where(eq(subscriptions.userId, userId))
      .limit(1),
  )

  const row = rows[0]
  if (!row) return null
  return { ...row, status: (row.status as SubscriptionStatus) ?? null }
}

/**
 * A one-time payment can only be offered with a method the account can really
 * charge with. Pix is the preferred one, but this account answers every Pix
 * attempt with "the payment method type pix is invalid", and only the account
 * owner can turn it on in the Dashboard — the API cannot. Boleto is accepted
 * today, so the app probes once, in priority order, and remembers the winner
 * instead of asking on every page view.
 */
const ONCE_PROBE_TTL_MS = 10 * 60 * 1000
let onceProbe: {
  method: OnceMethod | null
  checkedAt: number
  /** Which candidate list produced this answer, so a key change is not reused. */
  cacheKey: string
} | null = null

function onceCandidates(): OnceMethod[] {
  return usingTestKey() ? ["boleto"] : ["pix", "boleto"]
}

/**
 * The remembered answer, if it is still fresh. Returns `undefined` — not `null`
 * — when there is nothing to answer with, so "we know it is unavailable" stays
 * distinct from "we have not asked yet".
 */
export function cachedOnceMethod(): OnceMethod | null | undefined {
  if (
    onceProbe &&
    onceProbe.cacheKey === onceCandidates().join(",") &&
    Date.now() - onceProbe.checkedAt < ONCE_PROBE_TTL_MS
  ) {
    return onceProbe.method
  }
  return undefined
}

export function rememberOnceMethod(
  method: OnceMethod | null,
): OnceMethod | null {
  onceProbe = {
    method,
    checkedAt: Date.now(),
    cacheKey: onceCandidates().join(","),
  }
  return method
}

export async function probeMethod(method: OnceMethod): Promise<boolean> {
  try {
    const intent = await getStripe().paymentIntents.create({
      amount: ONCE_PLAN.amountCents,
      currency: ONCE_PLAN.currency,
      payment_method_types: [method],
      description: "Verificação de disponibilidade do meio de pagamento",
    })
    // Nobody is ever charged by this probe: it is abandoned right away.
    await getStripe()
      .paymentIntents.cancel(intent.id)
      .catch(() => undefined)
    return true
  } catch {
    return false
  }
}

/**
 * Asks Stripe, in priority order, which one-time method this account accepts.
 *
 * Pix with a test key is never offered, even though Stripe accepts the API call:
 * in test mode the QR code is a simulated one that no bank app can pay. Answering
 * "pix" there would send the person to exactly the fake-payment screen this app
 * must never show, so the test key is treated as "Pix not available" and the
 * purchase falls back to boleto. Switching to a real key is the only thing that
 * turns Pix on — no code change needed.
 */
export async function probeOnceMethod(): Promise<OnceMethod | null> {
  for (const candidate of onceCandidates()) {
    if (await probeMethod(candidate)) return candidate
  }
  return null
}

/**
 * Which one-time method to offer: Pix when the account can really charge with it,
 * otherwise boleto, which this account accepts today. Answers from memory while
 * the probe is fresh, so the checkout page never waits on Stripe twice.
 */
export async function onceMethod(): Promise<OnceMethod | null> {
  if (!stripeConfigured()) return null

  const known = cachedOnceMethod()
  if (known !== undefined) return known

  return rememberOnceMethod(await probeOnceMethod())
}

/**
 * The page-facing plan status: our own row, plus a payment method that is only
 * awaited when the caller has one to hand.
 *
 * Kept separate from `loadBillingStatus` so the router can resolve the plan
 * without waiting on Stripe — see `billing.read.server.ts`.
 */
export function readBillingStatusFor(
  userId: string,
  stripeReady: boolean,
  method: Promise<OnceMethod | null>,
): Promise<BillingStatus> {
  return readOwnStatus(userId, stripeReady, method)
}

async function readOwnStatus(
  userId: string,
  stripeReady: boolean,
  method: Promise<OnceMethod | null>,
): Promise<BillingStatus> {
  const row = await readSubscription(userId)
  const pixPeriodEnd = row?.pixPeriodEnd ?? null
  const pixTime = pixPeriodEnd?.getTime() ?? null

  return {
    signedIn: true,
    entitled: hasFullAccess({
      status: row?.status,
      pixPeriodEnd,
    }),
    status: row?.status ?? null,
    cancelAtPeriodEnd: row?.cancelAtPeriodEnd ?? false,
    currentPeriodEnd: row?.currentPeriodEnd?.toISOString() ?? null,
    hasCustomer: Boolean(row?.stripeCustomerId),
    stripeReady,
    pixPeriodEnd: pixPeriodEnd?.toISOString() ?? null,
    pixActive: pixTime !== null && pixTime > Date.now(),
    onceMethod: stripeReady ? await method : null,
    hasCardSubscription: Boolean(row?.subscriptionId) || Boolean(row?.status),
  }
}

export async function loadBillingStatus(
  request: Request,
): Promise<BillingStatus> {
  const stripeReady = stripeConfigured()
  const user = await getHappySeedsUser(request)
  if (!user) return { ...EMPTY_BILLING_STATUS, stripeReady }

  return readOwnStatus(
    user.openid,
    stripeReady,
    stripeReady ? onceMethod() : Promise.resolve(null),
  )
}

/**
 * One customer per person, forever. Creating a second one splits their cards,
 * invoices and portal history, so the stored id always wins.
 */
export async function resolveCustomerId(
  userId: string,
  email: string | null,
): Promise<string> {
  const existing = await readSubscription(userId)
  if (existing?.stripeCustomerId) return existing.stripeCustomerId

  const customer = await getStripe().customers.create(
    { ...(email ? { email } : {}), metadata: { userId } },
    { idempotencyKey: `customer:${userId}` },
  )

  // This row starts with no status and no paid window, so it grants nothing:
  // `hasFullAccess` only says yes to a live subscription or an unexpired
  // one-time window. Creating the customer must never look like a purchase.
  await withDatabase((database) =>
    database
      .insert(subscriptions)
      .values({ userId, stripeCustomerId: customer.id })
      .onConflictDoNothing(),
  )

  return customer.id
}

export async function findCustomerId(userId: string): Promise<string | null> {
  const row = await readSubscription(userId)
  return row?.stripeCustomerId ?? null
}

/**
 * The browser-visible origin: the preview host and the deployed Worker differ,
 * so `success_url` and `return_url` are never hardcoded.
 */
export function requestOrigin(request: Request): string {
  try {
    return getPublicOrigin(request)
  } catch {
    return new URL(request.url).origin
  }
}
