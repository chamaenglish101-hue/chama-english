import { QueryClient } from "@tanstack/react-query"

import { initialAuthRouteContext } from "#/lib/happyseeds-platform-auth/session.ts"

export function getContext() {
  const queryClient = new QueryClient()

  return {
    queryClient,
    ...initialAuthRouteContext,
  }
}
export default function TanstackQueryProvider() {}
