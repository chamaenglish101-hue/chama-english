import { Link, createFileRoute } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Check,
  CircleAlert,
  Lightbulb,
  LoaderCircle,
  Lock,
  Mic,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react"
import { useState } from "react"

import { SectionTitle } from "#/components/app-shell.tsx"
import { LessonPractice } from "#/components/lesson/practice.tsx"
import { Chama } from "#/components/mascot.tsx"
import { PaywallCard } from "#/components/paywall.tsx"
import {
  CATALOG,
  levelInfo,
  lessonById,
  type LessonMeta,
} from "#/data/catalog.ts"
import type { LessonContent } from "#/data/lessons/types.ts"
import { isLessonUnlocked } from "#/lib/billing.ts"
import type { LessonPracticeContent } from "#/lib/exercises.ts"
import { loadLesson } from "#/lib/lesson.functions.ts"
import { completeLesson, toggleBookmark, useAppState } from "#/lib/progress.ts"
import { cn } from "#/lib/utils.ts"

export const Route = createFileRoute("/_app/estudar/$licaoId")({
  // The lesson's teaching content is fetched from the server, which decides
  // whether this person may read it. Paid lessons never reach the browser.
  loader: ({ params }) => loadLesson({ data: { licaoId: params.licaoId } }),
  pendingComponent: LessonLoading,
  component: LessonPage,
})

function LessonLoading() {
  return (
    <div className="card-soft flex items-center gap-3 p-5">
      <LoaderCircle className="text-primary size-5 animate-spin" />
      <p className="text-muted-foreground text-sm font-semibold">
        Abrindo a lição…
      </p>
    </div>
  )
}

function LessonPage() {
  const { licaoId } = Route.useParams()
  const state = useAppState()
  const meta = lessonById(licaoId)
  const view = Route.useLoaderData()

  if (!meta || view.status === "missing") {
    return (
      <div className="flex flex-col gap-6">
        <Link
          to="/estudar"
          className="tap-target text-muted-foreground inline-flex w-fit items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft className="size-4" /> Modo estudar
        </Link>
        <section className="card-soft flex items-start gap-4 p-5">
          <CircleAlert className="text-warning size-6 shrink-0" />
          <div>
            <h1 className="font-display text-xl font-extrabold">
              Não encontramos esta lição
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              O endereço pode estar incompleto. Escolha uma lição na trilha para
              continuar estudando.
            </p>
            <Link
              to="/licoes"
              className="brand-gradient tap-target mt-4 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f]"
            >
              Ver as 130 lições <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  if (view.status === "locked") {
    return (
      <div className="flex flex-col gap-6">
        <Link
          to="/estudar"
          className="tap-target text-muted-foreground inline-flex w-fit items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft className="size-4" /> Modo estudar
        </Link>
        <PaywallCard lessonTitle={meta.title} from={meta.id} />
      </div>
    )
  }

  const content = view.content
  const practice = view.practice
  const progress = state.lessons[meta.id]

  return (
    <LessonBody
      key={meta.id}
      meta={meta}
      content={content}
      practice={practice}
      completed={progress?.completed ?? false}
      score={progress?.score ?? 0}
      bookmarked={state.bookmarks.includes(meta.id)}
      showTranslation={state.settings.showTranslation}
    />
  )
}

interface LessonBodyProps {
  meta: LessonMeta
  content: LessonContent
  practice: LessonPracticeContent | null
  completed: boolean
  score: number
  bookmarked: boolean
  showTranslation: boolean
}

function LessonBody({
  meta,
  content,
  practice,
  completed,
  score,
  bookmarked,
  showTranslation,
}: LessonBodyProps) {
  const [restartToken, setRestartToken] = useState(0)
  const [result, setResult] = useState<{
    correct: number
    wrong: number
    skipped: number
    accuracy: number
  } | null>(null)
  const [gained, setGained] = useState(0)
  const [done, setDone] = useState(false)

  const level = levelInfo(meta.level)
  const nextLesson =
    CATALOG[CATALOG.findIndex((lesson) => lesson.id === meta.id) + 1]
  const { billing } = Route.useRouteContext()
  const nextLocked = nextLesson
    ? !isLessonUnlocked(nextLesson.id, billing.entitled)
    : false

  function restart() {
    setResult(null)
    setGained(0)
    setDone(false)
    setRestartToken((token) => token + 1)
  }

  return (
    <div className="flex flex-col gap-6 pb-4">
      {/* --------------------------------------------------------- topo */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/estudar"
          className="tap-target text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft className="size-4" /> Modo estudar
        </Link>
        <button
          type="button"
          onClick={() => toggleBookmark(meta.id)}
          className={cn(
            "tap-target inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-bold transition-colors",
            bookmarked
              ? "border-warning/50 bg-warning/12 text-warning"
              : "border-border bg-card hover:bg-muted",
          )}
        >
          {bookmarked ? (
            <BookmarkCheck className="size-4" />
          ) : (
            <Bookmark className="size-4" />
          )}
          {bookmarked ? "Salva" : "Salvar lição"}
        </button>
      </div>

      {/* ------------------------------------------------------- cabeçalho */}
      <header className="card-soft flame-bg flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold tracking-wide uppercase">
            <span className="bg-primary/15 text-primary rounded-full px-3 py-1">
              {level.label}
            </span>
            <span className="bg-iris/15 text-iris rounded-full px-3 py-1">
              {meta.focus}
            </span>
            <span className="bg-muted text-muted-foreground rounded-full px-3 py-1">
              {meta.minutes} min
            </span>
            {completed && (
              <span className="bg-success/15 text-success inline-flex items-center gap-1 rounded-full px-3 py-1">
                <Check className="size-3" /> concluída · {score}%
              </span>
            )}
          </div>
          <h1 className="font-display mt-3 text-2xl leading-tight font-extrabold">
            {meta.title}
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">{meta.summary}</p>
        </div>
        <Chama size={110} mood={completed ? "comemorando" : "animado"} />
      </header>

      {/* ---------------------------------------------------------- objetivo */}
      <section className="card-soft p-5">
        <SectionTitle hint="o que você leva daqui">
          Objetivo da lição
        </SectionTitle>
        <p className="text-sm font-semibold">{content.objective}</p>
        <ul className="mt-4 flex flex-col gap-2">
          {content.keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm">
              <Target className="text-primary mt-0.5 size-4 shrink-0" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------- explicação */}
      <section className="card-soft p-5">
        <SectionTitle hint="entenda a regra">Explicação</SectionTitle>
        <div className="flex flex-col gap-3">
          {content.explanation.map((paragraph) => (
            <p
              key={paragraph}
              className="text-muted-foreground text-sm leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- exemplos */}
      <section>
        <SectionTitle hint={`${content.examples.length} frases`}>
          Exemplos em contexto
        </SectionTitle>
        <ul className="flex flex-col gap-2">
          {content.examples.map((example) => (
            <li key={example.en} className="card-soft p-4">
              <p className="font-display text-[15px] font-bold">{example.en}</p>
              {showTranslation && (
                <p className="text-muted-foreground mt-1 text-sm">
                  {example.pt}
                </p>
              )}
              {example.note && (
                <p className="text-primary mt-2 text-xs font-semibold">
                  {example.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------- vocabulário */}
      <section className="card-soft p-5">
        <SectionTitle hint="para memorizar">Vocabulário-chave</SectionTitle>
        <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {content.vocab.map((item) => (
            <div
              key={item.en}
              className="border-border bg-background flex items-center justify-between gap-3 rounded-xl border px-3 py-2"
            >
              <dt className="font-display text-sm font-extrabold">{item.en}</dt>
              <dd className="text-muted-foreground truncate text-xs font-semibold">
                {item.pt}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------------ prática */}
      {practice ? (
        <section className="card-soft border-primary/30 p-5">
          <SectionTitle
            hint={`${practice.exercises.length} perguntas · ${
              new Set(practice.exercises.map((item) => item.kind)).size
            } ${new Set(practice.exercises.map((item) => item.kind)).size === 1 ? "atividade" : "atividades"}`}
          >
            Prática corrigida
          </SectionTitle>

          {!done ? (
            <LessonPractice
              practice={practice}
              showTranslation={showTranslation}
              restartToken={restartToken}
              onFinish={(summary) => {
                setResult(summary)
                setGained(
                  completeLesson(
                    meta.id,
                    summary.correct,
                    summary.correct + summary.wrong,
                  ),
                )
                setDone(true)
              }}
            />
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Chama
                  size={92}
                  mood={
                    (result?.accuracy ?? 0) >= 80
                      ? "comemorando"
                      : (result?.accuracy ?? 0) >= 50
                        ? "feliz"
                        : "animado"
                  }
                />
                <div>
                  <p className="font-display text-xl font-extrabold">
                    {result?.accuracy ?? 0}% de acertos
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {result?.correct ?? 0} certas · {result?.wrong ?? 0} erradas
                    {(result?.skipped ?? 0) > 0 &&
                      ` · ${result?.skipped} pulada${(result?.skipped ?? 0) > 1 ? "s" : ""}`}{" "}
                    · +{gained} XP
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {(result?.accuracy ?? 0) >= 80
                      ? "Excelente. Você pode seguir para a próxima lição."
                      : "Vale reler os exemplos e refazer a prática para fixar melhor."}
                  </p>
                </div>
              </div>
              {(result?.skipped ?? 0) > 0 && (
                <p className="text-muted-foreground bg-muted flex items-start gap-2 rounded-2xl p-3 text-xs">
                  <Mic className="mt-0.5 size-3.5 shrink-0" />
                  As perguntas de fala puladas não entram como erro. Volte a
                  elas quando o microfone estiver disponível.
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={restart}
                  className="tap-target hover:bg-muted inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-bold"
                >
                  <RotateCcw className="size-4" /> Refazer prática
                </button>
                {nextLesson &&
                  (nextLocked ? (
                    <Link
                      to="/assinatura"
                      search={{ de: nextLesson.id }}
                      className="brand-gradient tap-target inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold text-[#07131f]"
                    >
                      <Lock className="size-4" /> Liberar a próxima lição
                    </Link>
                  ) : (
                    <Link
                      to="/estudar/$licaoId"
                      params={{ licaoId: nextLesson.id }}
                      className="brand-gradient tap-target inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold text-[#07131f]"
                    >
                      Próxima lição <ArrowRight className="size-4" />
                    </Link>
                  ))}
                <Link
                  to="/quiz"
                  className="tap-target hover:bg-muted inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-bold"
                >
                  <Trophy className="size-4" /> Treinar no quiz
                </Link>
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="card-soft p-5">
          <SectionTitle hint="em preparação">Prática corrigida</SectionTitle>
          <p className="text-muted-foreground text-sm leading-relaxed">
            As perguntas desta lição estão sendo preparadas. Enquanto isso,
            releia os exemplos, ouça cada frase em voz alta e siga para a
            próxima lição da trilha.
          </p>
        </section>
      )}

      {/* ---------------------------------------------------- fecho e dica */}
      <section className="card-soft p-5">
        <SectionTitle hint="resumo">Conclusão</SectionTitle>
        <p className="font-display text-sm font-bold">{content.takeaway}</p>
        <div className="bg-muted mt-4 flex items-start gap-3 rounded-2xl p-4">
          <Lightbulb className="text-primary mt-0.5 size-4 shrink-0" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            {content.tip}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ rodapé */}
      <section className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/estudar"
          className="tap-target hover:bg-muted inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-bold"
        >
          <ArrowLeft className="size-4" /> Voltar para o modo estudar
        </Link>
        {nextLesson &&
          (nextLocked ? (
            <Link
              to="/assinatura"
              search={{ de: nextLesson.id }}
              className="tap-target text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-bold"
            >
              <Lock className="size-4" /> {nextLesson.title}
            </Link>
          ) : (
            <Link
              to="/estudar/$licaoId"
              params={{ licaoId: nextLesson.id }}
              className="tap-target text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-bold"
            >
              <Sparkles className="size-4" /> {nextLesson.title}
              <ArrowRight className="size-4" />
            </Link>
          ))}
      </section>
    </div>
  )
}
