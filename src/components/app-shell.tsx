import { Link, useRouterState } from "@tanstack/react-router"
import {
  BookOpen,
  Flame,
  GraduationCap,
  Home,
  Library,
  Monitor,
  Moon,
  Settings,
  Sun,
  Trophy,
} from "lucide-react"
import { useTheme } from "next-themes"
import type { ReactNode } from "react"

import { Chama } from "#/components/mascot.tsx"
import { useHydrated } from "#/lib/progress.ts"
import { cn } from "#/lib/utils.ts"

const TABS = [
  { to: "/", label: "Início", icon: Home },
  { to: "/licoes", label: "Lições", icon: BookOpen },
  { to: "/estudar", label: "Estudar", icon: GraduationCap },
  { to: "/historias", label: "Histórias", icon: Library },
  { to: "/quiz", label: "Quiz", icon: Trophy },
  { to: "/configuracoes", label: "Config.", icon: Settings },
] as const

function isActiveTab(path: string, to: string): boolean {
  if (to === "/") return path === "/"
  if (to === "/licoes")
    return path.startsWith("/licoes") || path.startsWith("/licao")
  return path.startsWith(to)
}

export function useActivePath(): string {
  return useRouterState({ select: (state) => state.location.pathname })
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="tap-target flex items-center gap-2 rounded-2xl px-1 py-1"
      aria-label="Chama English — início"
    >
      <Chama size={compact ? 30 : 36} float={false} mood="feliz" />
      <span className="font-display text-lg font-extrabold tracking-tight">
        Chama<span className="brand-text"> English</span>
      </span>
    </Link>
  )
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const hydrated = useHydrated()
  const active = hydrated ? (theme ?? "system") : "system"

  const options = [
    { id: "light", icon: Sun, label: "Tema claro" },
    { id: "dark", icon: Moon, label: "Tema escuro" },
    { id: "system", icon: Monitor, label: "Tema do sistema" },
  ] as const

  return (
    <div
      role="group"
      aria-label="Escolher tema"
      className="tap-target flex items-center gap-1 rounded-full border border-border bg-muted/70 p-1"
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setTheme(option.id)}
          aria-label={option.label}
          aria-pressed={active === option.id}
          className={cn(
            "flex size-7 items-center justify-center rounded-full transition-colors",
            active === option.id
              ? "bg-card text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <option.icon className="size-3.5" />
        </button>
      ))}
    </div>
  )
}

function DesktopNav() {
  const path = useActivePath()
  return (
    <nav aria-label="Navegação principal" className="flex items-center gap-1">
      {TABS.map((tab) => {
        const active = isActiveTab(path, tab.to)
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={cn(
              "tap-target flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
              active
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
            aria-current={active ? "page" : undefined}
          >
            <tab.icon className="size-4" />
            {tab.label}
          </Link>
        )
      })}
    </nav>
  )
}

function BottomTabBar() {
  const path = useActivePath()
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
    >
      <div className="safe-bottom border-t border-border/70 bg-card/95 supports-[backdrop-filter]:bg-card/80 backdrop-blur-lg">
        <ul className="grid grid-cols-6">
          {TABS.map((tab) => {
            const active = isActiveTab(path, tab.to)
            return (
              <li key={tab.to}>
                <Link
                  to={tab.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "tap-target flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-[10px] leading-none font-bold transition-colors",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-2xl transition-all",
                      active && "bg-primary/15",
                    )}
                  >
                    <tab.icon className="size-5" />
                  </span>
                  <span>{tab.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

/**
 * App frame shared by every route: safe-area aware container, desktop top nav
 * and a mobile-only bottom tab bar.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-frame flame-bg">
      <header className="safe-top sticky top-0 z-30 hidden border-b border-border/60 bg-background/85 backdrop-blur-lg md:block">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6">
          <BrandLockup />
          <DesktopNav />
          <ThemeToggle />
        </div>
      </header>

      <main className="safe-x mx-auto w-full max-w-5xl flex-1 px-4 pt-4 pb-28 md:px-6 md:pt-8 md:pb-16">
        {children}
      </main>

      <BottomTabBar />
    </div>
  )
}

export function SectionTitle({
  children,
  hint,
}: {
  children: ReactNode
  hint?: string
}) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <h2 className="font-display text-xl font-extrabold tracking-tight">
        {children}
      </h2>
      {hint && (
        <p className="text-xs font-semibold text-muted-foreground">{hint}</p>
      )}
    </div>
  )
}

export function StatTile({
  icon,
  value,
  label,
  tone = "brand",
}: {
  icon: ReactNode
  value: string
  label: string
  tone?: "brand" | "iris" | "success" | "warning"
}) {
  const tones = {
    brand: "text-primary bg-primary/12",
    iris: "text-iris bg-iris/12",
    success: "text-success bg-success/12",
    warning: "text-warning bg-warning/12",
  } as const

  return (
    <div className="card-soft flex items-center gap-3 p-3">
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-xl",
          tones[tone],
        )}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-lg leading-tight font-extrabold">
          {value}
        </span>
        <span className="block truncate text-[11px] font-semibold text-muted-foreground">
          {label}
        </span>
      </span>
    </div>
  )
}

export function FlameMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "brand-gradient flex size-10 items-center justify-center rounded-2xl text-[#07131f]",
        className,
      )}
    >
      <Flame className="size-5" />
    </span>
  )
}
