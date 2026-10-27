import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

import { AppShell } from "#/components/app-shell.tsx"
import { fetchBillingStatus } from "#/lib/billing.functions.ts"

/**
 * Everything inside this layout needs a signed-in person. The guard is UX
 * only — every protected server operation rechecks the session itself.
 *
 * The plan status is resolved once per entry into the app and then reused for
 * every page inside it. The read is the fast one: it touches our own row and
 * never waits on Stripe, so no payment provider can delay a page. The screens
 * that show the payment methods ask for the full answer themselves — see
 * `/_app/assinatura`.
 */
export const Route = createFileRoute("/_app")({
  beforeLoad: async ({ context, location }) => {
    if (!context.user) {
      throw redirect({
        to: "/login",
        search: { next: location.href },
      })
    }

    // The root guard already resolved the plan for this visit; reuse it.
    if (context.billing) {
      return { user: context.user, billing: context.billing }
    }

    const billing = await fetchBillingStatus()
    return { user: context.user, billing }
  },
  component: AppLayout,
})

function AppLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}
