import { createFileRoute } from "@tanstack/react-router"
import "@tanstack/react-start"
import { handleHappySeedsLogin } from "#/lib/happyseeds-platform-auth/server.ts"

export const Route = createFileRoute("/api/auth/login")({
  server: {
    handlers: {
      GET: ({ request }) => handleHappySeedsLogin(request),
    },
  },
})
