import { createServerFn } from "@tanstack/react-start"

import { fetchBillingStatus } from "#/lib/billing.functions.ts"
import type { BillingStatus } from "#/lib/billing.ts"
import { resolveCurrentUser } from "#/lib/happyseeds-platform-auth/session.server.ts"

export const fetchCurrentUser = createServerFn({ method: "GET" }).handler(
  async () => resolveCurrentUser(),
)

export type CurrentUser = Awaited<ReturnType<typeof fetchCurrentUser>>

export interface AuthRouteContext {
  user: CurrentUser
  /** Plan status for this visit; resolved with the user so pages never re-ask. */
  billing: BillingStatus | null
}

export const initialAuthRouteContext: AuthRouteContext = {
  user: null,
  billing: null,
}

/**
 * Resolves who is signed in and, for a signed-in person, their plan status in
 * the same pass. Both answers are then reused by every page in the app, so a
 * click inside the app costs no server round trip at all — which is what made
 * navigation feel slow before.
 *
 * This is a caching decision, not a security one: every server operation that
 * reads or changes paid content checks the entitlement for itself.
 */
export async function loadAuthRouteContext(): Promise<AuthRouteContext> {
  const user = await fetchCurrentUser()
  if (!user) return { user: null, billing: null }

  try {
    const billing = await fetchBillingStatus()
    return { user, billing }
  } catch (error) {
    // The plan is not what decides whether the app opens: every page that reads
    // paid content checks the entitlement for itself on the server. So a failure
    // here must not take the whole visit down — the screens that show the plan
    // fetch it again on their own, and that fetch is the one allowed to fail.
    console.error("billing.router_context.failed", error)
    return { user, billing: null }
  }
}
