import { createFileRoute } from "@tanstack/react-router"
import "@tanstack/react-start"
import { handleHappySeedsLogout } from "#/lib/happyseeds-platform-auth/server.ts"
import { resetResolvedUserCache } from "#/lib/happyseeds-platform-auth/session.server.ts"

export const Route = createFileRoute("/api/auth/logout")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const response = await handleHappySeedsLogout(request)
        // The session cookie is gone from here on, so the remembered identity
        // must go with it. Without this the next page could still be answered
        // with the person who just left.
        resetResolvedUserCache()
        return response
      },
    },
  },
})
