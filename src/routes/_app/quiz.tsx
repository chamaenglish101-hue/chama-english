import { Link, createFileRoute } from "@tanstack/react-router"
import { ArrowRight, Check, RotateCcw, Sparkles, Trophy, X } from "lucide-react"
import { useState } from "react"

import { Chama } from "#/components/mascot.tsx"
import { LEVELS, type Level, isLevel } from "#/data/catalog.ts"
import { type QuizQuestion, drawQuestions } from "#/data/quiz-bank.ts"
import { recordQuiz, useAppState } from "#/lib/progress.ts"
import { cn } from "#/lib/utils.ts"

export const Route = createFileRoute("/_app/quiz")({
  validateSearch: (search: Record<string, unknown>): { nivel?: Level } => ({
    nivel: isLevel(String(search.nivel))
      ? (String(search.nivel) as Level)
      : undefined,
  }),
  component: QuizPage,
})

type Phase = "intro" | "playing" | "done"

interface AnswerRecord {
  question: QuizQuestion
  picked: number
  correct: boolean
}

const AMOUNTS = [5, 10, 15] as const

function QuizPage() {
  const state = useAppState()
  const { nivel } = Route.useSearch()
  const level = nivel ?? state.profile.level
  const [phase, setPhase] = useState<Phase>("intro")
  const [amount, setAmount] = useState<number>(5)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])

  const levelMeta = LEVELS.find((item) => item.id === level) ?? LEVELS[0]
  const current = questions[index]
  const correctCount = answers.filter((answer) => answer.correct).length
  const score = questions.length
    ? Math.round((correctCount / questions.length) * 100)
    : 0

  function start() {
    setQuestions(drawQuestions(level, amount))
    setAnswers([])
    setIndex(0)
    setPicked(null)
    setPhase("playing")
  }

  function choose(optionIndex: number) {
    if (picked !== null || !current) return
    setPicked(optionIndex)
    setAnswers((previous) => [
      ...previous,
      {
        question: current,
        picked: optionIndex,
        correct: optionIndex === current.answer,
      },
    ])
  }

  function next() {
    if (index + 1 >= questions.length) {
      const total = questions.length
      const hits = answers.filter((answer) => answer.correct).length
      recordQuiz(level, hits, total)
      setPhase("done")
      return
    }
    setIndex((previous) => previous + 1)
    setPicked(null)
  }

  /* ------------------------------------------------------------- intro */
  if (phase === "intro") {
    return (
      <div className="flex flex-col gap-6">
        <header className="card-soft flame-bg flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-2xl font-extrabold">
              Quiz de fixação
            </h1>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Perguntas de múltipla escolha com correção imediata e explicação
              em português. Cada acerto vale 6 XP.
            </p>
          </div>
          <Chama size={112} mood="animado" />
        </header>

        <section className="card-soft p-5">
          <p className="font-display font-extrabold">1. Escolha o nível</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            {LEVELS.map((item) => (
              <Link
                key={item.id}
                to="/quiz"
                search={{ nivel: item.id }}
                className={cn(
                  "tap-target rounded-2xl border px-4 py-3 transition-colors",
                  item.id === level
                    ? "border-primary/50 bg-primary/12"
                    : "border-border bg-card hover:bg-muted",
                )}
              >
                <span className="block font-display font-extrabold">
                  {item.label}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  {item.cefr} · {item.tagline}
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-6 font-display font-extrabold">
            2. Quantas perguntas?
          </p>
          <div className="mt-3 flex gap-2">
            {AMOUNTS.map((quantity) => (
              <button
                key={quantity}
                type="button"
                onClick={() => setAmount(quantity)}
                aria-pressed={amount === quantity}
                className={cn(
                  "tap-target rounded-2xl border px-4 py-2 text-sm font-extrabold transition-colors",
                  amount === quantity
                    ? "border-primary/50 bg-primary/12 text-primary"
                    : "border-border bg-card text-muted-foreground hover:bg-muted",
                )}
              >
                {quantity} perguntas
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={start}
            className="brand-gradient tap-target mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f] transition-transform active:scale-[0.98]"
          >
            Começar quiz <ArrowRight className="size-4" />
          </button>
        </section>
      </div>
    )
  }

  /* ------------------------------------------------------------ result */
  if (phase === "done") {
    const mistakes = answers.filter((answer) => !answer.correct)
    const perfect = score === 100

    return (
      <div className="flex flex-col gap-6">
        <section className="card-soft flame-bg flex flex-col items-center gap-3 p-6 text-center">
          <Chama
            size={132}
            mood={perfect ? "comemorando" : score >= 60 ? "feliz" : "triste"}
          />
          <p className="font-display text-3xl font-extrabold">{score}%</p>
          <p className="text-sm text-muted-foreground">
            Você acertou {correctCount} de {questions.length} perguntas no nível{" "}
            {levelMeta.label}.
          </p>
          {state.settings.celebration && (
            <p className="flex items-center gap-1.5 text-xs font-extrabold text-primary">
              <Sparkles className="size-3.5" /> +{correctCount * 6} XP
              adicionados ao seu progresso
            </p>
          )}
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={start}
              className="brand-gradient tap-target inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f]"
            >
              Jogar de novo <RotateCcw className="size-4" />
            </button>
            <Link
              to="/licoes"
              search={{ nivel: level }}
              className="tap-target inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-bold hover:bg-muted"
            >
              Estudar as lições <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {mistakes.length > 0 && (
          <section className="card-soft p-5">
            <h2 className="font-display text-lg font-extrabold">
              Revise seus erros ({mistakes.length})
            </h2>
            <ul className="mt-4 flex flex-col gap-4">
              {mistakes.map((answer) => (
                <li
                  key={answer.question.id}
                  className="rounded-2xl border border-border p-4"
                >
                  <p className="text-sm font-bold">{answer.question.prompt}</p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-destructive">
                    <X className="mt-0.5 size-4 shrink-0" />
                    Sua resposta: {answer.question.options[answer.picked]}
                  </p>
                  <p className="mt-1 flex items-start gap-2 text-sm text-success">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    Correta: {answer.question.options[answer.question.answer]}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {answer.question.explanation}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Link
          to="/configuracoes"
          className="card-soft card-tap tap-target flex items-center gap-3 p-4"
        >
          <Trophy className="size-5 shrink-0 text-warning" />
          <span className="flex-1 text-sm text-muted-foreground">
            Veja seu histórico completo de quizzes nas configurações.
          </span>
          <ArrowRight className="size-4 text-muted-foreground" />
        </Link>
      </div>
    )
  }

  /* ----------------------------------------------------------- playing */
  const progress = Math.round((index / questions.length) * 100)
  const isCorrect = picked !== null && picked === current?.answer

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="brand-gradient h-full rounded-full transition-all duration-300"
            style={{ width: `${Math.max(progress, 4)}%` }}
          />
        </div>
        <span className="text-xs font-extrabold text-muted-foreground">
          {index + 1}/{questions.length}
        </span>
      </div>

      <section className="card-soft p-5">
        <p className="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
          {levelMeta.label}
        </p>
        <h1 className="font-display mt-1 text-xl leading-snug font-extrabold">
          {current?.prompt}
        </h1>

        <div className="mt-5 flex flex-col gap-2.5">
          {current?.options.map((option, optionIndex) => {
            const chosen = picked === optionIndex
            const isRight = optionIndex === current.answer
            const reveal = picked !== null
            return (
              <button
                key={option}
                type="button"
                onClick={() => choose(optionIndex)}
                disabled={reveal}
                className={cn(
                  "tap-target flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-bold transition-colors",
                  !reveal &&
                    "border-border bg-card hover:border-primary/40 hover:bg-primary/8",
                  reveal &&
                    isRight &&
                    "border-success/60 bg-success/15 text-success",
                  reveal &&
                    chosen &&
                    !isRight &&
                    "border-destructive/60 bg-destructive/12 text-destructive",
                  reveal &&
                    !chosen &&
                    !isRight &&
                    "border-border bg-card opacity-60",
                )}
              >
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-xl border text-xs font-extrabold",
                    reveal && isRight && "border-success/50",
                    reveal && chosen && !isRight && "border-destructive/50",
                  )}
                >
                  {reveal && isRight ? (
                    <Check className="size-4" />
                  ) : reveal && chosen ? (
                    <X className="size-4" />
                  ) : (
                    String.fromCharCode(65 + optionIndex)
                  )}
                </span>
                <span className="flex-1">{option}</span>
              </button>
            )
          })}
        </div>

        {picked !== null && current && (
          <div
            className={cn(
              "mt-5 rounded-2xl border p-4",
              isCorrect
                ? "border-success/40 bg-success/10"
                : "border-destructive/40 bg-destructive/10",
            )}
          >
            <p
              className={cn(
                "flex items-center gap-2 text-sm font-extrabold",
                isCorrect ? "text-success" : "text-destructive",
              )}
            >
              {isCorrect ? (
                <Check className="size-4" />
              ) : (
                <X className="size-4" />
              )}
              {isCorrect ? "Isso mesmo!" : "Quase — veja o porquê:"}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {current.explanation}
            </p>
            <button
              type="button"
              onClick={next}
              className="brand-gradient tap-target mt-4 inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold text-[#07131f]"
            >
              {index + 1 >= questions.length
                ? "Ver resultado"
                : "Próxima pergunta"}
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </section>

      <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
        <span>Acertos: {correctCount}</span>
        <button
          type="button"
          onClick={() => setPhase("intro")}
          className="tap-target rounded-xl px-3 py-1.5 hover:bg-muted"
        >
          Sair do quiz
        </button>
      </div>
    </div>
  )
}
