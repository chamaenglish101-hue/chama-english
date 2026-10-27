const AUTH_COMPLETE_MESSAGE = "happyseeds:auth-complete"
const DEFAULT_TIMEOUT_MS = 120_000
/**
 * A popup to the platform's authorize screen is a chain of one redirect per
 * document, and the platform keeps a pending login for a short while. When the
 * chain dies — a third-party cookie rule, a bare error document in the popup —
 * nobody is coming back to tell us, so the wait cannot be indefinite.
 */
const DEFAULT_ATTEMPT_MS = 45_000
/** How long an opened window is allowed to stay a blank error document. */
const ERROR_PAGE_GRACE_MS = 1_500

export interface HappySeedsLoginCallbacks {
  onComplete: () => void
  onClosed: () => void
  onTimeout: () => void
  timeoutMs?: number
  /** How long one attempt may spend before the caller should try the same tab. */
  attemptMs?: number
}

export function normalizeHappySeedsNext(
  value: string | null | undefined,
): string {
  if (!value?.startsWith("/") || value.startsWith("//") || value.includes("\\"))
    return "/"
  try {
    const base = new URL("https://happyseeds.invalid")
    const destination = new URL(value, base)
    if (destination.origin !== base.origin) return "/"
    return `${destination.pathname}${destination.search}${destination.hash}`
  } catch {
    return "/"
  }
}

/**
 * The address that starts the platform's sign-in. Opened as a popup, and also
 * used as the same-tab destination when the browser will not open one.
 */
export function happySeedsLoginUrl(next = "/"): string {
  return `/api/auth/login?next=${encodeURIComponent(normalizeHappySeedsNext(next))}`
}

/**
 * Opens the same-origin login route in a popup.
 *
 * Must be called synchronously from a real click: Google OAuth may not render
 * inside the HappySeeds preview iframe, and a popup opened outside a user
 * gesture is blocked. A `null` return means blocked — the caller sends the
 * person to `happySeedsLoginUrl()` in the same tab instead, which needs no
 * popup and no opener.
 *
 * Every terminal callback must leave the UI's loading state. Completion and
 * closure are only refresh signals; authentication is proven when the root
 * route context reloads the verified session.
 */
export function openHappySeedsLogin(
  callbacks: HappySeedsLoginCallbacks,
  next = "/",
): Window | null {
  const width = 500
  const height = 650
  const left = Math.max(
    0,
    Math.round(window.screenX + (window.outerWidth - width) / 2),
  )
  const top = Math.max(
    0,
    Math.round(window.screenY + (window.outerHeight - height) / 2),
  )
  const popup = window.open(
    happySeedsLoginUrl(next),
    `happyseeds_auth_${crypto.randomUUID()}`,
    `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`,
  )
  if (!popup) return null
  const opened: Window = popup

  let settled = false
  let closedCheck: number | undefined
  let timeout: number | undefined
  let attempt: number | undefined
  let errorGrace: number | undefined

  function finish(callback: () => void): void {
    if (settled) return
    settled = true
    if (closedCheck !== undefined) window.clearInterval(closedCheck)
    if (timeout !== undefined) window.clearTimeout(timeout)
    if (attempt !== undefined) window.clearTimeout(attempt)
    if (errorGrace !== undefined) window.clearTimeout(errorGrace)
    window.removeEventListener("message", receiveCompletion)
    callback()
  }

  function receiveCompletion(event: MessageEvent): void {
    if (
      event.origin !== window.location.origin ||
      event.source !== popup ||
      event.data?.type !== AUTH_COMPLETE_MESSAGE
    ) {
      return
    }
    finish(callbacks.onComplete)
  }

  /**
   * A window that failed to start its redirect — a closed connection, a
   * privacy error — shows a bare document with no stylesheet and no script of
   * ours. Waiting out the full timeout on that screen is a worse answer than
   * saying so, so the failure is noticed early by looking for our own app there.
   */
  function abandonAttempt(): void {
    finish(callbacks.onTimeout)
  }

  window.addEventListener("message", receiveCompletion)

  // A blank document has no URL to read, and reading location across origins
  // throws — both cases mean the redirect never happened.
  function stillLoadingTarget(): boolean {
    try {
      const href = opened.location.href
      if (!href || href === "about:blank") return true
      if (opened.location.origin !== window.location.origin) return false
      // The app's own document is the one the framework streams its hydration
      // into; anything else on our origin is an error page, not our page.
      return Boolean(
        opened.document?.querySelector?.("script[data-tsr-stream-part]"),
      )
    } catch {
      return false
    }
  }

  closedCheck = window.setInterval(() => {
    try {
      if (!popup.closed) return
      finish(callbacks.onClosed)
    } catch {
      // Cross-Origin-Opener-Policy can make the popup handle unreadable. The timeout still terminates the wait.
    }
  }, 500)

  // Give the popup a moment to navigate before judging what it shows: the first
  // tick sees about:blank while the document is still being replaced.
  errorGrace = window.setTimeout(() => {
    errorGrace = undefined
    if (!settled && !stillLoadingTarget()) abandonAttempt()
  }, ERROR_PAGE_GRACE_MS)

  attempt = window.setTimeout(
    () => finish(callbacks.onTimeout),
    callbacks.attemptMs ?? DEFAULT_ATTEMPT_MS,
  )
  timeout = window.setTimeout(
    () => finish(callbacks.onTimeout),
    callbacks.timeoutMs ?? DEFAULT_TIMEOUT_MS,
  )
  return popup
}
