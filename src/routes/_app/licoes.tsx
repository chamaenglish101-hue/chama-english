import { Link, createFileRoute } from "@tanstack/react-router"
import {
  ArrowRight,
  Bookmark,
  Check,
  ChevronRight,
  Lock,
  Search,
  Sparkles,
} from "lucide-react"
import type { ReactNode } from "react"
import { useState } from "react"

import { SectionTitle } from "#/components/app-shell.tsx"
import { Chama } from "#/components/mascot.tsx"
import {
  CATALOG,
  FOCUS_ICON,
  LEVELS,
  type Level,
  isLevel,
} from "#/data/catalog.ts"
import { FREE_LESSON_IDS, isLessonUnlocked } from "#/lib/billing.ts"
import { computeStats, toggleBookmark, useAppState } from "#/lib/progress.ts"
import { cn } from "#/lib/utils.ts"

export const Route = createFileRoute("/_app/licoes")({
  validateSearch: (search: Record<string, unknown>): { nivel?: Level } => ({
    nivel: isLevel(String(search.nivel))
      ? (String(search.nivel) as Level)
      : undefined,
  }),
  component: LessonsPage,
})

function LessonsPage() {
  const state = useAppState()
  const stats = computeStats(state)
  const { nivel } = Route.useSearch()
  const { billing } = Route.useRouteContext()
  const [query, setQuery] = useState("")
  const activeLevel = nivel ?? state.profile.level

  const term = query.trim().toLowerCase()
  const lessons = CATALOG.filter((lesson) => lesson.level === activeLevel)
  const filtered = term
    ? lessons.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(term) ||
          lesson.summary.toLowerCase().includes(term),
      )
    : lessons
  const levelStat = stats.byLevel.find((item) => item.id === activeLevel)
  const levelMeta = LEVELS.find((item) => item.id === activeLevel) ?? LEVELS[0]
  const nextPending = lessons.find(
    (lesson) =>
      !state.lessons[lesson.id]?.completed &&
      isLessonUnlocked(lesson.id, billing.entitled),
  )

  return (
    <div className="flex flex-col gap-6">
      <header className="card-soft flame-bg flex items-center gap-4 p-5">
        <Chama
          size={92}
          mood={levelStat?.percent === 100 ? "comemorando" : "feliz"}
        />
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-extrabold">Suas lições</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {CATALOG.length} lições em 3 níveis, do zero ao avançado. Você
            concluiu <strong className="text-foreground">{stats.done}</strong>{" "}
            até agora.
            {billing.entitled
              ? " Todas liberadas pela sua assinatura."
              : ` ${FREE_LESSON_IDS.length} iniciantes são grátis; o resto pede assinatura.`}
          </p>
        </div>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {LEVELS.map((level) => {
          const stat = stats.byLevel.find((item) => item.id === level.id)
          const active = level.id === activeLevel
          return (
            <Link
              key={level.id}
              to="/licoes"
              search={{ nivel: level.id }}
              className={cn(
                "tap-target flex shrink-0 flex-col rounded-2xl border px-4 py-2.5 text-left transition-colors",
                active
                  ? "border-primary/50 bg-primary/12 text-primary"
                  : "border-border bg-card text-muted-foreground hover:bg-muted",
              )}
            >
              <span className="text-sm font-extrabold">{level.label}</span>
              <span className="text-[11px] font-semibold">
                {stat?.done ?? 0}/{level.total} · {level.cefr}
              </span>
            </Link>
          )
        })}
      </div>

      <label className="card-soft flex items-center gap-3 px-4 py-3">
        <Search className="size-4 shrink-0 text-muted-foreground" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar lição (ex: present perfect, aeroporto…)"
          className="w-full bg-transparent text-sm font-semibold outline-none placeholder:font-normal placeholder:text-muted-foreground"
          aria-label="Buscar lição"
        />
      </label>

      <section>
        <SectionTitle hint={`${levelStat?.percent ?? 0}% concluído`}>
          {levelMeta.label} · {levelMeta.cefr}
        </SectionTitle>
        <p className="mb-4 text-sm text-muted-foreground">
          {levelMeta.tagline}
        </p>

        {filtered.length === 0 ? (
          <div className="card-soft p-6 text-center">
            <p className="font-display font-extrabold">
              Nenhuma lição encontrada
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tente outra palavra, como “verbos”, “hotel” ou “pronúncia”.
            </p>
          </div>
        ) : (
          <ol className="flex flex-col gap-3">
            {filtered.map((lesson) => {
              const progress = state.lessons[lesson.id]
              const done = progress?.completed ?? false
              const bookmarked = state.bookmarks.includes(lesson.id)
              const isNext = nextPending?.id === lesson.id
              const locked = !isLessonUnlocked(lesson.id, billing.entitled)

              return (
                <li key={lesson.id}>
                  <div
                    className={cn(
                      "card-soft card-tap flex items-center gap-3 p-4",
                      done && "border-success/40",
                      isNext && "border-primary/50",
                      locked && "border-border/60 bg-card/60",
                    )}
                  >
                    <LessonRowLink lessonId={lesson.id} locked={locked}>
                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-extrabold",
                          locked
                            ? "bg-muted text-muted-foreground"
                            : done
                              ? "bg-success/15 text-success"
                              : isNext
                                ? "brand-gradient text-[#07131f]"
                                : "bg-muted text-muted-foreground",
                        )}
                      >
                        {locked ? (
                          <Lock className="size-4" />
                        ) : done ? (
                          <Check className="size-5" />
                        ) : (
                          lesson.order
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-muted-foreground">
                            {FOCUS_ICON[lesson.focus]} {lesson.focus} ·{" "}
                            {lesson.minutes} min
                          </span>
                          {isNext && (
                            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-extrabold text-primary">
                              PRÓXIMA
                            </span>
                          )}
                          {locked && (
                            <span className="bg-warning/15 text-warning inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold">
                              <Lock className="size-3" /> ASSINATURA
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block font-display font-extrabold">
                          {lesson.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                          {lesson.summary}
                        </span>
                        {done && progress && (
                          <span className="mt-1 block text-[11px] font-bold text-success">
                            Concluída · acertos na prática: {progress.score}%
                          </span>
                        )}
                      </span>
                    </LessonRowLink>

                    <div className="flex shrink-0 flex-col items-center gap-1">
                      <button
                        type="button"
                        onClick={() => toggleBookmark(lesson.id)}
                        aria-label={
                          bookmarked ? "Remover dos salvos" : "Salvar lição"
                        }
                        aria-pressed={bookmarked}
                        className={cn(
                          "flex size-9 items-center justify-center rounded-xl border transition-colors",
                          bookmarked
                            ? "border-warning/40 bg-warning/15 text-warning"
                            : "border-border text-muted-foreground hover:bg-muted",
                        )}
                      >
                        <Bookmark className="size-4" />
                      </button>
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        )}
      </section>

      <section className="card-soft flex flex-col items-start gap-3 p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="size-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            Termine o nível {levelMeta.label} e o próximo se abre com o
            vocabulário que você já domina.
          </p>
        </div>
        <Link
          to="/quiz"
          search={{ nivel: activeLevel }}
          className="tap-target inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-bold hover:bg-muted"
        >
          Testar neste nível <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  )
}

/**
 * Rows for lessons the plan does not cover lead to the subscription screen,
 * so nobody taps into a lesson they cannot read.
 */
function LessonRowLink({
  lessonId,
  locked,
  children,
}: {
  lessonId: string
  locked: boolean
  children: ReactNode
}) {
  const className = "tap-target flex min-w-0 flex-1 items-center gap-3"

  if (locked) {
    return (
      <Link to="/assinatura" search={{ de: lessonId }} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <Link
      to="/estudar/$licaoId"
      params={{ licaoId: lessonId }}
      className={className}
    >
      {children}
    </Link>
  )
}
