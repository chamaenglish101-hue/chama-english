import { Link, createFileRoute } from "@tanstack/react-router"
import {
  ArrowRight,
  Bookmark,
  Check,
  Clock,
  Flame,
  GraduationCap,
  Lightbulb,
  RotateCcw,
  Target,
  Trophy,
} from "lucide-react"

import { SectionTitle } from "#/components/app-shell.tsx"
import { Chama } from "#/components/mascot.tsx"
import { PaywallCard } from "#/components/paywall.tsx"
import { LEVELS, lessonById } from "#/data/catalog.ts"
import { isLessonUnlocked } from "#/lib/billing.ts"
import {
  computeStats,
  currentStreak,
  formatMinutes,
  nextLesson,
  studiedToday,
  useAppState,
} from "#/lib/progress.ts"
import { cn } from "#/lib/utils.ts"

export const Route = createFileRoute("/_app/estudar/")({ component: StudyPage })

function StudyPage() {
  const state = useAppState()
  const stats = computeStats(state)
  const { billing } = Route.useRouteContext()
  const upcoming = nextLesson(state)
  const upcomingLocked = upcoming
    ? !isLessonUnlocked(upcoming.id, billing.entitled)
    : false
  const streak = currentStreak(state)

  const completed = Object.entries(state.lessons)
    .filter(([, progress]) => progress.completed)
    .sort((a, b) => (a[1].at < b[1].at ? 1 : -1))
    .map(([id, progress]) => ({ lesson: lessonById(id), progress }))
    .filter(
      (
        item,
      ): item is {
        lesson: NonNullable<ReturnType<typeof lessonById>>
        progress: typeof item.progress
      } => Boolean(item.lesson),
    )

  const weak = completed.filter((item) => item.progress.score < 80).slice(0, 3)
  const bookmarked = state.bookmarks
    .map((id) => lessonById(id))
    .filter((lesson) => lesson !== undefined)

  return (
    <div className="flex flex-col gap-6">
      <header className="card-soft flame-bg flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-extrabold">Modo estudar</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {studiedToday(state)
              ? "Você já estudou hoje. Que tal revisar o que ficou para trás?"
              : "Comece pela próxima lição da sua trilha e mantenha a chama acesa."}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="flex items-center gap-1.5 rounded-full bg-warning/15 px-3 py-1.5 text-warning">
              <Flame className="size-3.5" /> {streak} dias seguidos
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-primary">
              <Clock className="size-3.5" /> {formatMinutes(stats.minutes)}{" "}
              estudados
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-iris/15 px-3 py-1.5 text-iris">
              <Target className="size-3.5" /> meta de {state.profile.dailyGoal}{" "}
              min/dia
            </span>
          </div>
        </div>
        <Chama size={120} mood={streak >= 3 ? "comemorando" : "feliz"} />
      </header>

      {upcoming && upcomingLocked ? (
        // The trail only reaches this point after the free lessons are done, so
        // the honest thing is to explain the plan instead of hiding the button.
        <PaywallCard lessonTitle={upcoming.title} from={upcoming.id} />
      ) : upcoming ? (
        <section className="card-soft flex flex-col gap-4 border-primary/40 p-5 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-extrabold tracking-wider text-primary uppercase">
              {stats.done === 0 ? "Comece por aqui" : "Continuar de onde parou"}
            </p>
            <h2 className="font-display mt-1 text-xl font-extrabold">
              {upcoming.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {upcoming.summary}
            </p>
            <p className="mt-2 text-xs font-bold text-muted-foreground">
              {LEVELS.find((level) => level.id === upcoming.level)?.label} ·{" "}
              {upcoming.focus} · {upcoming.minutes} min
            </p>
          </div>
          <Link
            to="/estudar/$licaoId"
            params={{ licaoId: upcoming.id }}
            className="brand-gradient tap-target inline-flex shrink-0 items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f] transition-transform active:scale-[0.98]"
          >
            Estudar agora <ArrowRight className="size-4" />
          </Link>
        </section>
      ) : (
        <section className="card-soft flex items-center gap-4 p-5">
          <Trophy className="size-6 shrink-0 text-warning" />
          <p className="text-sm text-muted-foreground">
            Você concluiu todas as 130 lições. Continue treinando com o Quiz
            para não perder o ritmo.
          </p>
        </section>
      )}

      <section>
        <SectionTitle hint={`${stats.done} concluídas`}>
          Revisar o que já estudou
        </SectionTitle>
        {completed.length === 0 ? (
          <div className="card-soft flex items-center gap-4 p-5">
            <GraduationCap className="size-6 shrink-0 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Assim que você concluir a primeira lição, ela aparece aqui para
              revisão rápida — com o vocabulário e os exemplos marcados.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {completed.slice(0, 5).map(({ lesson, progress }) => (
              <li key={lesson.id}>
                <Link
                  to="/estudar/$licaoId"
                  params={{ licaoId: lesson.id }}
                  className="card-soft card-tap tap-target flex items-center gap-3 p-4"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-success/15 text-success">
                    <Check className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display font-bold">
                      {lesson.title}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {lesson.focus} · acertos na prática: {progress.score}%
                    </span>
                  </span>
                  <RotateCcw className="size-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {weak.length > 0 && (
        <section>
          <SectionTitle hint="vale reforçar">Precisa de atenção</SectionTitle>
          <ul className="flex flex-col gap-2">
            {weak.map(({ lesson, progress }) => (
              <li key={lesson.id}>
                <Link
                  to="/estudar/$licaoId"
                  params={{ licaoId: lesson.id }}
                  className="card-soft card-tap tap-target flex items-center gap-3 p-4"
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-xl font-display text-xs font-extrabold",
                      "bg-warning/15 text-warning",
                    )}
                  >
                    {progress.score}%
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display font-bold">
                      {lesson.title}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      Revise os exemplos e refaça a prática
                    </span>
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {bookmarked.length > 0 && (
        <section>
          <SectionTitle hint={`${bookmarked.length} salvas`}>
            Lições salvas
          </SectionTitle>
          <ul className="flex flex-col gap-2">
            {bookmarked.map((lesson) => (
              <li key={lesson.id}>
                <Link
                  to="/estudar/$licaoId"
                  params={{ licaoId: lesson.id }}
                  className="card-soft card-tap tap-target flex items-center gap-3 p-4"
                >
                  <Bookmark className="size-4 shrink-0 text-warning" />
                  <span className="min-w-0 flex-1 truncate font-display font-bold">
                    {lesson.title}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="card-soft flex items-start gap-3 p-5">
        <Lightbulb className="size-5 shrink-0 text-primary" />
        <div>
          <p className="font-display font-extrabold">Como aproveitar melhor</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Leia o objetivo da lição, estude os exemplos em voz alta, faça a
            prática e fique atento à explicação de cada resposta — é ali que o
            aprendizado acontece. Depois, refaça as lições com nota abaixo de
            80%.
          </p>
        </div>
      </section>
    </div>
  )
}
