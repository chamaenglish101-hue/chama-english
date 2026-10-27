import { createFileRoute } from "@tanstack/react-router"
import "@tanstack/react-start"
import { handleHappySeedsMe } from "#/lib/happyseeds-platform-auth/server.ts"

export const Route = createFileRoute("/api/auth/me")({
  server: {
    handlers: {
      GET: ({ request }) => handleHappySeedsMe(request),
    },
  },
})
