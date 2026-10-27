import "@tanstack/react-start/server-only"
import { getRequest } from "@tanstack/react-start/server"

import { getHappySeedsUser } from "#/lib/happyseeds-platform-auth/server.ts"

/**
 * The signed-in person, resolved once per browser session.
 *
 * Asking the platform who is signed in costs about 120ms, and the router guard,
 * the layout and the page all want the same answer. Answering from memory after
 * the first check keeps the person's identity identical for the whole visit while
 * removing a round trip from every page change. Nothing that grants access relies
 * on this: paid content and billing are rechecked on the server for every request
 * that actually reads or changes them.
 */
const SESSION_TTL_MS = 30_000

/** The session cookie name, read here only to notice that it changed. */
const SESSION_COOKIE = "__Host-happyseeds_session"

interface ResolvedUser {
  /** Stable per-app identifier — the key every owned row is scoped on. */
  id: string
  email: string | null
  displayName: string | null
  avatarUrl: string | null
  sessionExpiresAt: string | null
}

/**
 * The cached answer is only valid for the person who asked for it, so the cookie
 * that identifies that person is stored next to it. Without this, signing out and
 * signing in as somebody else inside the same 30 seconds reuses the previous
 * person's identity for a while — the wrong name on screen, and the wrong
 * account's plan. Comparing the two cookies costs nothing and closes that hole.
 */
let cached: {
  user: ResolvedUser | null
  at: number
  token: string | null
} | null = null

function sessionToken(request: Request): string | null {
  const cookies = request.headers.get("cookie")
  if (!cookies) return null
  for (const entry of cookies.split(";")) {
    const separator = entry.indexOf("=")
    if (separator < 0) continue
    if (entry.slice(0, separator).trim() === SESSION_COOKIE) {
      return entry.slice(separator + 1).trim()
    }
  }
  return null
}

/**
 * A signed-out visitor is never served from memory, and any other request clears
 * it. This is the safety net for the sign-out flow — the endpoint that clears the
 * cookie calls this itself — so a stale "still signed in" answer cannot survive
 * the moment somebody leaves the account.
 */
export function resetResolvedUserCache(): void {
  cached = null
}

export async function resolveCurrentUser(): Promise<ResolvedUser | null> {
  const request = getRequest()
  const token = sessionToken(request)

  if (!token) {
    cached = null
    return null
  }

  if (
    cached &&
    cached.token === token &&
    Date.now() - cached.at < SESSION_TTL_MS
  ) {
    return cached.user
  }

  const user = await getHappySeedsUser(request)
  const resolved: ResolvedUser | null = user
    ? {
        id: user.openid,
        email: user.email ?? null,
        displayName: user.display_name ?? null,
        avatarUrl: user.avatar_url ?? null,
        sessionExpiresAt: user.session_expires_at ?? null,
      }
    : null

  cached = { user: resolved, at: Date.now(), token }
  return resolved
}
