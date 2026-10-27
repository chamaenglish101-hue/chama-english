import "@tanstack/react-start/server-only"
import { getRequest } from "@tanstack/react-start/server"

import {
  probeOnceMethod,
  readBillingStatusFor,
  rememberOnceMethod,
} from "#/lib/billing.server.ts"
import {
  EMPTY_BILLING_STATUS,
  type BillingStatus,
  type OnceMethod,
} from "#/lib/billing.ts"
import { getHappySeedsUser } from "#/lib/happyseeds-platform-auth/server.ts"
import { stripeConfigured } from "#/lib/stripe.ts"

/**
 * Everything a page needs to know about the plan, and nothing that can be slow.
 *
 * `loadBillingStatus` is the full answer: it also asks Stripe which one-time
 * method this account can charge with, and that probe costs a round trip to
 * Stripe plus a second one to cancel the intent it creates. The router runs this
 * on the way into the app, so a slow or unreachable Stripe would hold the first
 * screen — the payment method does not belong on that path.
 *
 * Here the plan is read from our own row only, and the last known method is
 * answered from memory. The method is discovered by the checkout itself, which
 * asks `loadBillingStatus` when the person actually presses pay.
 */
export async function loadBillingStatusFast(
  request: Request,
): Promise<BillingStatus> {
  const stripeReady = stripeConfigured()
  const user = await getHappySeedsUser(request)
  if (!user) return { ...EMPTY_BILLING_STATUS, stripeReady }

  return readBillingStatusFor(user.openid, stripeReady, Promise.resolve(null))
}

/**
 * Stage two of the same read, for whoever wants the payment method on screen
 * before the person reaches the checkout: the probe is remembered so the
 * checkout reuses it instead of asking Stripe twice.
 */
export async function loadOnceMethod(): Promise<OnceMethod | null> {
  if (!stripeConfigured()) return rememberOnceMethod(null)
  return rememberOnceMethod(await probeOnceMethod())
}

/**
 * The page-facing status, with the payment method resolved on request.
 */
export async function fetchBillingStatusFast(): Promise<BillingStatus> {
  return loadBillingStatusFast(getRequest())
}
