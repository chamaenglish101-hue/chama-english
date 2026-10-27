import { HappySeedsInspector } from "@happyseeds/devtools/react"
import "@happyseeds/devtools/runtime"
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router"
import type { ErrorComponentProps } from "@tanstack/react-router"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"

import { loadRecordedAudio, unlockAudio } from "#/lib/audio.ts"
import { loadAuthRouteContext } from "#/lib/happyseeds-platform-auth/session.ts"
import { registerPwa } from "#/pwa.ts"
import type { MyRouterContext } from "#/router.tsx"

import appCss from "../styles.css?url"

/**
 * Umami analytics. Loads only in a production build and only once both values
 * are configured, so a dev session or an unconfigured app ships no tracker.
 *
 * `import.meta.env.PROD` is statically false in every other build, including
 * `build:dev`, so the tag never renders there. The configured values still sit
 * in the bundle either way — a VITE_ variable is public by definition, so
 * neither of these may hold anything secret.
 */
const UMAMI_SCRIPT_URL = import.meta.env.VITE_UMAMI_SCRIPT_URL ?? ""
const UMAMI_WEBSITE_ID = (import.meta.env.VITE_UMAMI_WEBSITE_ID ?? "").trim()
const UMAMI_ENABLED =
  import.meta.env.PROD && UMAMI_SCRIPT_URL !== "" && UMAMI_WEBSITE_ID !== ""

export const Route = createRootRouteWithContext<MyRouterContext>()({
  /**
   * The single source of client auth state. Children read `context.user`; the
   * protected layout turns a missing person into a redirect to /login.
   */
  beforeLoad: loadAuthRouteContext,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5",
      },
      { name: "color-scheme", content: "dark light" },
      { name: "theme-color", content: "#0B1220" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "Chama English" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { title: "Chama English — inglês para brasileiros" },
      {
        name: "description",
        content:
          "Aprenda inglês do zero ao avançado com 130 lições educativas, exercícios com correção imediata e a Chama, sua mascote. Instale no celular e estude com o progresso salvo no seu aparelho.",
      },
      {
        property: "og:title",
        content: "Chama English — inglês para brasileiros",
      },
      {
        property: "og:description",
        content:
          "130 lições de inglês do nível iniciante ao avançado, com exercícios, quiz e progresso salvo no seu aparelho.",
      },
      {
        name: "keywords",
        content:
          "aprender inglês, inglês para brasileiros, curso de inglês, lições de inglês, inglês iniciante, inglês avançado, quiz de inglês",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Chama English" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.json" },
      {
        rel: "icon",
        href: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      {
        rel: "icon",
        href: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  }),
  shellComponent: RootDocument,
  errorComponent: RootError,
})

/**
 * Registra o service worker no navegador para o app instalado abrir rápido e
 * mostrar a tela de aviso quando não houver internet.
 */
function PwaRegistration() {
  useEffect(() => {
    registerPwa()
  }, [])

  return null
}

/**
 * Loads the app's English voice once, for every screen.
 *
 * The reading room, the lessons and the drills all play sentences, and each of them
 * mounts on its own. Loading the catalog of Cherry's recordings here is what makes the
 * same voice speak everywhere, including after a page reload, on any device.
 */
function VoicePreference() {
  useEffect(() => {
    void loadRecordedAudio()

    // O primeiro toque em qualquer lugar libera o som, inclusive depois de um recarregar.
    const unlock = () => unlockAudio()
    const options = { capture: true, passive: true } as const
    window.addEventListener("pointerdown", unlock, options)
    window.addEventListener("keydown", unlock, options)
    return () => {
      window.removeEventListener("pointerdown", unlock, options)
      window.removeEventListener("keydown", unlock, options)
    }
  }, [])

  return null
}

function RootError({ reset }: ErrorComponentProps) {
  const router = useRouter()

  return (
    <main
      key="root-error"
      className="fixed inset-0 flex items-center justify-center overflow-hidden bg-background px-4"
    >
      <section className="flex w-full max-w-md flex-col items-center text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Algo impediu a exibição da tela.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => {
              void router.invalidate()
              reset()
            }}
          >
            Tentar de novo
          </button>
          <a
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href="/"
          >
            Ir para o início
          </a>
        </div>
      </section>
    </main>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  // Browser extensions decorate <html>/<body> before React hydrates. The
  // suppression is element-local — mismatches inside the app still warn.
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <PwaRegistration />
        <VoicePreference />
        <HappySeedsInspector />
        {UMAMI_ENABLED && (
          <script
            async
            src={UMAMI_SCRIPT_URL}
            data-website-id={UMAMI_WEBSITE_ID}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
