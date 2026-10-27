import { useGSAP } from "@gsap/react"
import { createFileRoute, useRouter } from "@tanstack/react-router"
import gsap from "gsap"
import { BookOpen, Flame, LoaderCircle, ShieldCheck, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { ThemeToggle } from "#/components/app-shell.tsx"
import { Chama } from "#/components/mascot.tsx"
import {
  happySeedsLoginUrl,
  normalizeHappySeedsNext,
  openHappySeedsLogin,
} from "#/lib/happyseeds-platform-auth/popup.ts"
import { cn } from "#/lib/utils.ts"

type LoginState = "idle" | "pending" | "blocked" | "timed-out" | "failed"

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>): { next?: string } => ({
    next:
      typeof search.next === "string"
        ? normalizeHappySeedsNext(search.next)
        : undefined,
  }),
  component: LoginPage,
})

function LoginPage() {
  const { user } = Route.useRouteContext()
  const { next: rawNext } = Route.useSearch()
  const safeNext = rawNext ?? "/"
  const router = useRouter()
  const scope = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<LoginState>("idle")

  useEffect(() => {
    if (user) void router.navigate({ to: safeNext, replace: true })
  }, [user, router, safeNext])

  useGSAP(
    () => {
      const reduced = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)",
      ).matches
      if (reduced) return

      gsap.from("[data-login-rise]", {
        y: 22,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      })
      gsap.from("[data-login-mascot]", {
        scale: 0.86,
        autoAlpha: 0,
        duration: 0.6,
        ease: "back.out(1.6)",
        delay: 0.1,
      })
    },
    { scope },
  )

  const pending = state === "pending"

  function startLogin() {
    /**
     * Must run synchronously inside the click handler: a popup opened outside a
     * user gesture is blocked. Completion and closure are only refresh signals —
     * the verified person from the root route context is the sole proof of
     * sign-in, so nothing here polls for a session.
     */
    const revalidate = () => {
      void router.invalidate().then(
        () => setState("idle"),
        () => setState("failed"),
      )
    }

    /**
     * When the popup cannot get the person to Google and back, the same address
     * is opened in this tab instead: no popup, no opener, nothing to block. It
     * costs the in-app screen, which is exactly what the fallback is for.
     */
    const fallbackToSameTab = () => {
      window.location.assign(happySeedsLoginUrl(safeNext))
    }

    const opened = openHappySeedsLogin(
      {
        onComplete: revalidate,
        onClosed: revalidate,
        onTimeout: fallbackToSameTab,
      },
      safeNext,
    )

    if (!opened) {
      setState("blocked")
      fallbackToSameTab()
      return
    }
    setState("pending")
  }

  return (
    <div
      ref={scope}
      className="app-frame flame-bg safe-top safe-bottom relative flex min-h-[100dvh] flex-col items-center justify-center px-4 py-10"
    >
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <section className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <div data-login-mascot>
            <Chama size={132} mood={pending ? "pensando" : "feliz"} />
          </div>
          <h1
            data-login-rise
            className="font-display mt-3 text-3xl font-extrabold tracking-tight"
          >
            Chama<span className="brand-text"> English</span>
          </h1>
          <p
            data-login-rise
            className="mt-2 text-sm leading-relaxed text-muted-foreground"
          >
            Entre para desbloquear as 130 lições de inglês e manter seu
            progresso salvo.
          </p>
        </div>

        <ul data-login-rise className="mt-6 flex flex-col gap-2">
          {[
            { icon: BookOpen, text: "130 lições do iniciante ao avançado" },
            { icon: Zap, text: "Exercícios corrigidos na hora" },
            { icon: Flame, text: "Sequência de estudo e conquistas" },
          ].map((item) => (
            <li
              key={item.text}
              className="card-soft flex items-center gap-3 px-3.5 py-3"
            >
              <span className="bg-primary/12 text-primary flex size-8 shrink-0 items-center justify-center rounded-xl">
                <item.icon className="size-4" />
              </span>
              <span className="text-sm font-semibold">{item.text}</span>
            </li>
          ))}
        </ul>

        <div data-login-rise className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={startLogin}
            disabled={pending}
            className={cn(
              "tap-target flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-bold shadow-sm transition-colors",
              "hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60",
            )}
          >
            {pending ? (
              <LoaderCircle className="size-5 animate-spin" />
            ) : (
              <GoogleMark className="size-5" />
            )}
            {state === "pending"
              ? "Conclua o login na janela aberta…"
              : "Entrar com Google"}
          </button>

          {state === "blocked" && (
            <p className="text-warning text-xs leading-relaxed font-semibold">
              O navegador bloqueou a janela de login.{" "}
              <a href={happySeedsLoginUrl(safeNext)} className="underline">
                Toque aqui para entrar nesta mesma página
              </a>
              .
            </p>
          )}

          <p aria-live="polite" className="min-h-4 text-xs leading-relaxed">
            {state === "timed-out" && (
              <span className="text-muted-foreground font-semibold">
                O login demorou demais para responder. Tente entrar de novo.
              </span>
            )}
            {state === "failed" && (
              <span className="text-destructive font-semibold">
                Não conseguimos confirmar sua conta Google. Tente entrar de
                novo.
              </span>
            )}
          </p>
        </div>

        <div
          data-login-rise
          className="text-muted-foreground mt-5 flex items-start gap-2 text-[11px] leading-relaxed"
        >
          <ShieldCheck className="mt-0.5 size-3.5 shrink-0" />
          <p>
            Usamos apenas seu nome, e-mail e foto do Google para identificar sua
            conta. Nada é publicado e você pode sair quando quiser.
          </p>
        </div>
      </section>
    </div>
  )
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <path
        fill="#EA4335"
        d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.5 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6c1.9-5.6 7.1-9.7 13.6-9.7z"
      />
      <path
        fill="#4285F4"
        d="M46.1 24.6c0-1.6-.1-2.8-.4-4.1H24v8.4h12.5c-.3 2.1-1.6 5.2-4.7 7.3l7.6 5.9c4.5-4.2 6.7-10.3 6.7-17.5z"
      />
      <path
        fill="#FBBC05"
        d="M10.4 28.7A14.6 14.6 0 0 1 9.6 24c0-1.6.3-3.2.8-4.7l-7.8-6A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.8-6z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2 1.4-4.7 2.4-8.3 2.4-6.5 0-11.7-4.1-13.6-9.7l-7.8 6C6.5 42.6 14.6 48 24 48z"
      />
    </svg>
  )
}
