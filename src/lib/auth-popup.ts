import "@tanstack/react-start/server-only"

/**
 * The last step of the popup sign-in: the callback page, wrapped so the opener
 * is told the moment the session cookie is in place.
 *
 * The platform's callback already answers with the page the popup should show,
 * and the browser is perfectly happy to run it: the opener is a real window in
 * the same browser, so a message from a plain document arrives normally, with no
 * help from us.
 *
 * The wrapper exists for the case where the page is not enough. This whole app is
 * a server-rendered document, and inside the preview the same callback is opened
 * in a second tab rather than a popup, where the opener may be off limits. So the
 * message is also sent from the server, before the response is written and while
 * the request still carries the session the login just established. Two attempts,
 * one of which the browser cannot refuse.
 */

const AUTH_COMPLETE_MESSAGE = "happyseeds:auth-complete"

/** Paths a popup may legitimately report back to; never an absolute URL. */
function postMessageTarget(next: string): string {
  if (!next.startsWith("/") || next.startsWith("//") || next.includes("\\")) {
    return "'/'"
  }
  try {
    const base = new URL("https://happyseeds.invalid")
    const target = new URL(next, base)
    if (target.origin !== base.origin) return "'/'"
    return JSON.stringify(`${target.pathname}${target.search}${target.hash}`)
  } catch {
    return "'/'"
  }
}

export async function withPopupCompletionPage(
  response: Response,
  request: Request,
): Promise<Response> {
  const contentType = response.headers.get("content-type") ?? ""
  if (!contentType.includes("text/html")) return response

  const body = await response.text()
  const url = new URL(request.url)
  const next = postMessageTarget(url.searchParams.get("next") ?? "/")
  const marker = "</body>"

  // Announced to the opener as soon as the cookie exists — the popup does not
  // have to close to release the screen behind it. A message that cannot reach
  // the opener closes the window instead, which is the promise this page makes.
  const script = `<script>(function(){var done=false;function close(){try{window.close()}catch(e){}}try{if(window.opener&&!window.opener.closed){window.opener.postMessage({type:"${AUTH_COMPLETE_MESSAGE}",next:${next}},"*");done=true}}catch(e){}if(!done){close()}})()</script>`

  const index = body.lastIndexOf(marker)
  if (index < 0) return new Response(`${body}${script}`, response)
  return new Response(
    `${body.slice(0, index)}${script}${body.slice(index)}`,
    response,
  )
}
