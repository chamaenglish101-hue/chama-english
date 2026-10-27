import { QueryClient } from "@tanstack/react-query"
import {
  createRouter as createTanStackRouter,
  ErrorComponent,
} from "@tanstack/react-router"
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query"

import type { AuthRouteContext } from "#/lib/happyseeds-platform-auth/session.ts"

import { getContext } from "./integrations/tanstack-query/root-provider"
import { routeTree } from "./routeTree.gen"

export interface MyRouterContext extends AuthRouteContext {
  queryClient: QueryClient
}

export function getRouter() {
  const context = getContext()

  const router = createTanStackRouter({
    routeTree,
    context,
    scrollRestoration: true,
    // The next page starts loading on touch or hover, so its data is usually
    // already there by the time the tap lands. What was prefetched is kept for
    // a few minutes instead of being thrown away on the first render.
    defaultPreload: "intent",
    defaultPreloadStaleTime: 5 * 60_000,
    defaultPendingMs: 150,
    defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  })

  setupRouterSsrQueryIntegration({ router, queryClient: context.queryClient })

  return router
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
