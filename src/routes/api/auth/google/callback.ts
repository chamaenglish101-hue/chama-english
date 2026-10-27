import { createFileRoute } from "@tanstack/react-router"
import "@tanstack/react-start"
import { handleHappySeedsCallback } from "#/lib/happyseeds-platform-auth/server.ts"

/**
 * The callback path is fixed — HappySeeds redirects here after Google. Pass a
 * second argument to `handleHappySeedsCallback` to upsert a local user row by
 * OpenID when the app persists user-owned data.
 *
 * The popup sends the completion message to its opener before the response is
 * returned, so the message part must be awaited before the HTML is written. See
 * `src/lib/auth-popup.ts` for why.
 */
export const Route = createFileRoute("/api/auth/google/callback")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const response = await handleHappySeedsCallback(request)
        const { withPopupCompletionPage } = await import("#/lib/auth-popup.ts")
        return withPopupCompletionPage(response, request)
      },
    },
  },
})
