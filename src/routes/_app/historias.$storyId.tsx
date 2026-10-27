import { Link, createFileRoute } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CircleAlert,
  Languages,
  Lightbulb,
  LoaderCircle,
  RotateCcw,
  Trophy,
} from "lucide-react"
import { useState } from "react"

import { SectionTitle } from "#/components/app-shell.tsx"
import { Chama } from "#/components/mascot.tsx"
import { StoriesPaywall } from "#/components/stories/paywall.tsx"
import { StoryReader } from "#/components/stories/reader.tsx"
import {
  STORY_LEVEL_LABEL,
  storyReadKey,
  type Story,
} from "#/data/stories/types.ts"
import { completeStory, useAppState } from "#/lib/progress.ts"
import { loadStory } from "#/lib/stories.functions.ts"
import { cn } from "#/lib/utils.ts"

export const Route = createFileRoute("/_app/historias/$storyId")({
  loader: ({ params }) => loadStory({ data: { storyId: params.storyId } }),
  pendingComponent: StoryLoading,
  component: StoryPage,
})

function StoryLoading() {
  return (
    <div className="card-soft flex items-center gap-3 p-5">
      <LoaderCircle className="text-primary size-5 animate-spin" />
      <p className="text-muted-foreground text-sm font-semibold">
        Abrindo a história…
      </p>
    </div>
  )
}

function StoryPage() {
  const view = Route.useLoaderData()

  if (view.status === "locked") {
    return (
      <div className="flex flex-col gap-6">
        <Link
          to="/historias"
          className="tap-target text-muted-foreground inline-flex w-fit items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft className="size-4" /> Sala de leitura
        </Link>
        <StoriesPaywall from="historias" />
      </div>
    )
  }

  if (view.status === "missing") {
    return (
      <div className="flex flex-col gap-6">
        <Link
          to="/historias"
          className="tap-target text-muted-foreground inline-flex w-fit items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft className="size-4" /> Sala de leitura
        </Link>
        <section className="card-soft flex items-start gap-4 p-5">
          <CircleAlert className="text-warning size-6 shrink-0" />
          <div>
            <h1 className="font-display text-xl font-extrabold">
              Não encontramos esta história
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              O endereço pode estar incompleto. Escolha um episódio na sala de
              leitura para continuar.
            </p>
            <Link
              to="/historias"
              className="brand-gradient tap-target mt-4 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f]"
            >
              Ver as histórias <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <StoryBody key={view.story.id} story={view.story} nextId={view.nextId} />
  )
}

function StoryBody({ story, nextId }: { story: Story; nextId: string | null }) {
  const state = useAppState()
  const alreadyRead = state.lessons[storyReadKey(story.id)]?.completed ?? false
  const [answer, setAnswer] = useState<number | null>(null)
  const [gained, setGained] = useState(0)
  const [done, setDone] = useState(false)

  function finish(option: number) {
    setAnswer(option)
    setGained(completeStory(story.id, story.episode))
    setDone(true)
  }

  const correct = answer === story.question.answer

  return (
    <div className="flex flex-col gap-6 pb-40 md:pb-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/historias"
          className="tap-target text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft className="size-4" /> Sala de leitura
        </Link>
        {alreadyRead && (
          <span className="bg-success/15 text-success inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-extrabold">
            <Check className="size-3.5" /> já lida
          </span>
        )}
      </div>

      <header className="card-soft flame-bg flex flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold tracking-wide uppercase">
          <span className="bg-primary/15 text-primary rounded-full px-3 py-1">
            episódio {story.episode}
          </span>
          <span className="bg-iris/15 text-iris rounded-full px-3 py-1">
            {STORY_LEVEL_LABEL[story.level]}
          </span>
          <span className="bg-muted text-muted-foreground rounded-full px-3 py-1">
            {story.minutes} min
          </span>
          <span className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-full px-3 py-1">
            <Languages className="size-3" /> {story.glossary.length} palavras
          </span>
        </div>
        <div>
          <h1 className="font-display text-2xl leading-tight font-extrabold">
            {story.title}
          </h1>
          <p className="text-muted-foreground mt-1 text-sm font-semibold italic">
            {story.tagline}
          </p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {story.blurb}
        </p>
        <p className="text-muted-foreground text-[11px] font-bold tracking-wide uppercase">
          {story.cast}
        </p>
      </header>

      <section className="card-soft p-5">
        <SectionTitle hint="a história em inglês">Leitura</SectionTitle>
        <StoryReader story={story} />
      </section>

      <section
        className={cn("card-soft p-5", done && correct && "border-success/40")}
      >
        <SectionTitle hint="uma pergunta no fim">
          Entendi a história?
        </SectionTitle>

        {!done ? (
          <div className="flex flex-col gap-2">
            <p className="font-display text-[15px] font-bold">
              {story.question.prompt}
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {story.question.options.map((option, index) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => finish(index)}
                    className="tap-target hover:border-primary/40 hover:bg-muted border-border bg-card flex w-full items-start gap-3 rounded-2xl border p-4 text-left text-sm font-semibold transition-colors"
                  >
                    <span className="bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Chama size={88} mood={correct ? "comemorando" : "animado"} />
              <div>
                <p className="font-display text-lg font-extrabold">
                  {correct ? "Isso mesmo." : "Quase — veja a resposta certa."}
                </p>
                <p className="text-muted-foreground text-sm">
                  {correct
                    ? `História concluída · +${gained} XP`
                    : "A leitura vale mesmo assim: o episódio já está registrado."}
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              {story.question.options.map((option, index) => {
                const isAnswer = index === story.question.answer
                const isChosen = index === answer
                return (
                  <li
                    key={option}
                    className={cn(
                      "flex items-start gap-3 rounded-2xl border p-4 text-sm",
                      isAnswer
                        ? "border-success/50 bg-success/10"
                        : isChosen
                          ? "border-warning/50 bg-warning/10"
                          : "border-border bg-card",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold",
                        isAnswer
                          ? "bg-success/20 text-success"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold">{option}</span>
                      {isAnswer && (
                        <span className="text-success mt-1 block text-xs font-bold">
                          resposta certa
                        </span>
                      )}
                      {isChosen && !isAnswer && (
                        <span className="text-warning mt-1 block text-xs font-bold">
                          o que você marcou
                        </span>
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
            <div className="bg-muted flex items-start gap-3 rounded-2xl p-4">
              <Lightbulb className="text-primary mt-0.5 size-4 shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {story.question.explanation}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setAnswer(null)
                  setDone(false)
                }}
                className="tap-target hover:bg-muted border-border bg-card inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-bold"
              >
                <RotateCcw className="size-4" /> Responder de novo
              </button>
              {nextId && (
                <Link
                  to="/historias/$storyId"
                  params={{ storyId: nextId }}
                  className="brand-gradient tap-target inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold text-[#07131f]"
                >
                  Próximo episódio <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          </div>
        )}
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/historias"
          className="tap-target hover:bg-muted border-border bg-card inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-bold"
        >
          <BookOpen className="size-4" /> Todas as histórias
        </Link>
        <Link
          to="/quiz"
          className="tap-target text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-bold"
        >
          <Trophy className="size-4" /> Treinar no quiz
        </Link>
      </footer>
    </div>
  )
}
