import {
  ArrowRight,
  Check,
  LoaderCircle,
  Mic,
  MicOff,
  RotateCcw,
  SkipForward,
  Volume2,
  X,
} from "lucide-react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { Chama } from "#/components/mascot.tsx"
import { AUDIO_PROMPTS } from "#/lib/audio-prompts.ts"
import {
  LISTEN_ERRORS,
  listenOnce,
  matchTranscript,
  scoreVerdict,
  speakEnglish,
  speechInputSupported,
  stopSpeaking,
  type Listening,
} from "#/lib/audio.ts"
import {
  kindMeta,
  type Exercise,
  type LessonPracticeContent,
} from "#/lib/exercises.ts"
import {
  correctAnswerText,
  feedbackFor,
  gradeSpeech,
  gradeTranslation,
  isSkippable,
  summarise,
  type AnswerRecord,
} from "#/lib/grading.ts"
import { cn } from "#/lib/utils.ts"

/* --------------------------------------------------------------- the drill */

interface PracticeProps {
  practice: LessonPracticeContent
  /** Whether the learner's preferences show the Portuguese support text. */
  showTranslation: boolean
  /** Called once the last question is answered, with the final result. */
  onFinish: (summary: ReturnType<typeof summarise>) => void
  /** Increment to start over from question one. */
  restartToken?: number
}

/**
 * The twelve questions of a lesson, one at a time.
 *
 * Six very different activities run through one screen. Everything that differs
 * between them — how an answer is given, whether there is audio, whether the
 * microphone is needed — lives in the question component, while this shell owns the
 * part that must stay identical: which question is current, what the learner
 * answered, and what happens when the lesson ends.
 */
export function LessonPractice({
  practice,
  showTranslation,
  onFinish,
  restartToken = 0,
}: PracticeProps) {
  const exercises = practice.exercises
  const [index, setIndex] = useState(0)
  const [records, setRecords] = useState<AnswerRecord[]>([])
  const [lastRecord, setLastRecord] = useState<AnswerRecord | null>(null)

  // Starting over has to reset everything, including a half-answered question.
  useEffect(() => {
    setIndex(0)
    setRecords([])
    setLastRecord(null)
  }, [restartToken, practice.id])

  const exercise = exercises[index]

  const record = useCallback(
    (verdict: AnswerRecord["verdict"], given: string) => {
      if (!exercise) return
      const entry: AnswerRecord = {
        kind: exercise.kind,
        verdict,
        given,
        skippable: isSkippable(exercise),
      }
      setLastRecord(entry)
      setRecords((previous) => [...previous, entry])
    },
    [exercise],
  )

  function advance() {
    if (!exercise) return
    setLastRecord(null)
    if (index >= exercises.length - 1) return
    setIndex(index + 1)
  }

  // The closing result is reported once, when the last question of the lesson has
  // been answered and the learner moves on.
  useEffect(() => {
    if (!lastRecord) return
    if (index !== exercises.length - 1) return
    if (records.length !== exercises.length) return
    onFinish(summarise(records))
    // Fires only on the final answer; the callback identity is the caller's business.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, lastRecord, records.length])

  if (!exercise) return null

  const meta = kindMeta(exercise.kind)
  const feedback = lastRecord ? feedbackFor(exercise, lastRecord) : null
  const isLast = index === exercises.length - 1

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-muted-foreground text-xs font-extrabold tracking-wide uppercase">
          Pergunta {index + 1} de {exercises.length} · {meta.label}
        </p>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {exercises.map((item, dotIndex) => (
            <span
              key={`${item.kind}-${dotIndex}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                dotIndex < index
                  ? "bg-primary w-4"
                  : dotIndex === index
                    ? "bg-primary w-6"
                    : "bg-muted w-2",
              )}
            />
          ))}
        </div>
      </div>

      <Question
        key={`${practice.id}-${index}`}
        exercise={exercise}
        showTranslation={showTranslation}
        answered={lastRecord}
        onAnswer={record}
      />

      {feedback && lastRecord && (
        <div
          className={cn(
            "rounded-2xl border p-4",
            feedback.tone === "correct" && "border-success/40 bg-success/10",
            feedback.tone === "wrong" && "border-warning/40 bg-warning/10",
            feedback.tone === "skipped" && "border-border bg-muted",
          )}
        >
          <p
            className={cn(
              "font-display flex items-center gap-2 text-sm font-extrabold",
              feedback.tone === "correct" && "text-success",
              feedback.tone === "wrong" && "text-warning",
              feedback.tone === "skipped" && "text-muted-foreground",
            )}
          >
            {feedback.tone === "correct" && <Check className="size-4" />}
            {feedback.tone === "wrong" && <X className="size-4" />}
            {feedback.tone === "skipped" && <MicOff className="size-4" />}
            {feedback.title}
          </p>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
            {feedback.detail}
          </p>
          {lastRecord.verdict === "wrong" && (
            <p className="mt-2 text-sm font-semibold">
              Resposta certa:{" "}
              <span className="font-display">
                {correctAnswerText(exercise)}
              </span>
            </p>
          )}
          <button
            type="button"
            onClick={advance}
            className="brand-gradient tap-target mt-4 inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold text-[#07131f]"
          >
            {isLast ? "Ver meu resultado" : "Próxima pergunta"}
            <ArrowRight className="size-4" />
          </button>
        </div>
      )}

      {lastRecord && (
        <p className="text-muted-foreground text-center text-xs">
          Cada resposta fica registrada no seu progresso. Sem pular etapas.
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------ one question */

interface QuestionProps {
  exercise: Exercise
  showTranslation: boolean
  answered: AnswerRecord | null
  onAnswer: (verdict: AnswerRecord["verdict"], given: string) => void
}

function Question({
  exercise,
  showTranslation,
  answered,
  onAnswer,
}: QuestionProps) {
  switch (exercise.kind) {
    case "completar":
      return (
        <ChoiceQuestion
          exercise={exercise}
          heading={exercise.prompt}
          sub={showTranslation ? exercise.hint : undefined}
          options={exercise.options}
          answered={answered}
          onAnswer={onAnswer}
          lettered
        />
      )
    case "ouvirPalavra":
      return (
        <ListenQuestion
          audio={exercise.audio}
          prompt={AUDIO_PROMPTS.chooseMeaning}
          options={exercise.options}
          answer={exercise.answer}
          answered={answered}
          onAnswer={onAnswer}
          lettered
        />
      )
    case "ouvirFrase":
      return (
        <ListenQuestion
          audio={exercise.audio}
          prompt={AUDIO_PROMPTS.whichSentence}
          options={exercise.options}
          answer={exercise.answer}
          answered={answered}
          onAnswer={onAnswer}
        />
      )
    case "traduzir":
      return (
        <TranslateQuestion
          exercise={exercise}
          showTranslation={showTranslation}
          answered={answered}
          onAnswer={onAnswer}
        />
      )
    case "falar":
      return (
        <SpeakQuestion
          exercise={exercise}
          showTranslation={showTranslation}
          answered={answered}
          onAnswer={onAnswer}
        />
      )
  }
}

/* ---------------------------------------------------------- multiple choice */

interface BlankParts {
  before: string
  after: string
}

function blankParts(sentence: string): BlankParts {
  const [before = sentence, after = ""] = sentence.split("___")
  return { before, after }
}

/** The four choices with the missing word filled back into the sentence. */
function completeSentence(sentence: string, word: string): string {
  const { before, after } = blankParts(sentence)
  return `${before}${word}${after}`.replace(/\s+/g, " ").trim()
}

interface ChoiceQuestionProps {
  exercise: Exercise
  heading: string
  sub?: string
  options: string[]
  answered: AnswerRecord | null
  onAnswer: (verdict: AnswerRecord["verdict"], given: string) => void
  lettered?: boolean
}

function ChoiceQuestion({
  exercise,
  heading,
  sub,
  options,
  answered,
  onAnswer,
  lettered,
}: ChoiceQuestionProps) {
  const right = "answer" in exercise ? exercise.answer : -1
  const isBlank = exercise.kind === "completar" && heading.includes("___")
  // The missing word of a complete-the-sentence question, read from the lesson data.
  const blank =
    exercise.kind === "completar" ? exercise.options[exercise.answer] : ""

  return (
    <div>
      {isBlank ? (
        <h2 className="font-display text-lg leading-snug font-extrabold">
          {blankParts(heading).before}
          <span
            className={cn(
              "mx-1 inline-block min-w-16 border-b-2 text-center",
              answered
                ? "border-success text-success"
                : "border-primary text-primary",
            )}
          >
            {answered ? blank : " "}
          </span>
          {blankParts(heading).after}
        </h2>
      ) : (
        <h2 className="font-display text-lg leading-snug font-extrabold">
          {heading}
        </h2>
      )}
      {sub && <p className="text-muted-foreground mt-2 text-sm">{sub}</p>}
      {isBlank && answered && (
        <p className="text-success mt-2 text-sm font-semibold">
          {completeSentence(heading, blank)}
        </p>
      )}

      <ul className="mt-4 flex flex-col gap-2">
        {options.map((option, index) => {
          const isRight = index === right
          const picked = answered?.given === option
          return (
            <li key={option}>
              <button
                type="button"
                onClick={() => onAnswer(isRight ? "correct" : "wrong", option)}
                disabled={answered !== null}
                className={cn(
                  "tap-target flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                  !answered && "border-border bg-card hover:bg-muted",
                  answered && isRight && "border-success/50 bg-success/12",
                  answered &&
                    picked &&
                    !isRight &&
                    "border-destructive/50 bg-destructive/12",
                  answered &&
                    !isRight &&
                    !picked &&
                    "border-border bg-card opacity-60",
                )}
              >
                {lettered && (
                  <span className="font-display bg-muted flex size-7 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold uppercase">
                    {String.fromCharCode(65 + index)}
                  </span>
                )}
                <span className="flex-1">
                  {isBlank && answered
                    ? completeSentence(heading, option)
                    : option}
                </span>
                {answered && isRight && (
                  <Check className="text-success size-4 shrink-0" />
                )}
                {answered && picked && !isRight && (
                  <X className="text-destructive size-4 shrink-0" />
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ---------------------------------------------------------------- listening */

interface ListenQuestionProps {
  audio: string
  prompt: string
  options: string[]
  answer: number
  answered: AnswerRecord | null
  onAnswer: (verdict: AnswerRecord["verdict"], given: string) => void
  lettered?: boolean
}

/**
 * A question answered by ear.
 *
 * The sentence is never written before the answer — that is the whole exercise. A
 * visible replay button sits next to the audio for the learner who needs a second
 * pass, and the sentence appears the moment the answer is in, so the spelling can be
 * checked against what was heard.
 */
function ListenQuestion({
  audio,
  prompt,
  options,
  answer,
  answered,
  onAnswer,
  lettered,
}: ListenQuestionProps) {
  const [state, setState] = useState<"idle" | "playing" | "unavailable">("idle")
  const [plays, setPlays] = useState(0)

  const play = useCallback(() => {
    setState("playing")
    const ok = speakEnglish(audio, { onEnd: () => setState("idle") })
    if (!ok) {
      setState("unavailable")
      return
    }
    setPlays((count) => count + 1)
  }, [audio])

  // The question speaks itself once on arrival: the learner should not have to hunt
  // for the play button before knowing what is being asked.
  useEffect(() => {
    const timer = window.setTimeout(play, 450)
    return () => {
      window.clearTimeout(timer)
      stopSpeaking()
    }
  }, [play])

  const right = answer

  return (
    <div>
      <div className="border-primary/30 bg-primary/8 flex flex-col items-center gap-3 rounded-2xl border p-5">
        <button
          type="button"
          onClick={play}
          aria-label="Ouvir de novo"
          className="brand-gradient tap-target flex size-20 items-center justify-center rounded-full text-[#07131f]"
        >
          {state === "playing" ? (
            <LoaderCircle className="size-9 animate-spin" />
          ) : (
            <Volume2 className="size-9" />
          )}
        </button>
        <p className="text-primary text-sm font-extrabold">
          {state === "playing"
            ? "Tocando…"
            : plays > 0
              ? "Ouvir de novo"
              : "Ouvir"}
        </p>
        <p className="text-muted-foreground text-center text-sm font-semibold">
          {prompt}
        </p>
        {state === "unavailable" && (
          <p className="text-warning text-center text-xs font-semibold">
            A gravação desta frase ainda está chegando. A frase está escrita
            abaixo, e as opções continuam valendo.
          </p>
        )}
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {options.map((option, index) => {
          const isRight = index === right
          const picked = answered?.given === option
          return (
            <li key={option}>
              <button
                type="button"
                onClick={() => onAnswer(isRight ? "correct" : "wrong", option)}
                disabled={answered !== null}
                className={cn(
                  "tap-target flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors",
                  !answered && "border-border bg-card hover:bg-muted",
                  answered && isRight && "border-success/50 bg-success/12",
                  answered &&
                    picked &&
                    !isRight &&
                    "border-destructive/50 bg-destructive/12",
                  answered &&
                    !isRight &&
                    !picked &&
                    "border-border bg-card opacity-60",
                )}
              >
                {lettered && (
                  <span className="font-display bg-muted flex size-7 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold uppercase">
                    {String.fromCharCode(65 + index)}
                  </span>
                )}
                <span className="flex-1">{option}</span>
                {answered && isRight && (
                  <Check className="text-success size-4 shrink-0" />
                )}
                {answered && picked && !isRight && (
                  <X className="text-destructive size-4 shrink-0" />
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ---------------------------------------------------------------- translating */

function TranslateQuestion({
  exercise,
  showTranslation,
  answered,
  onAnswer,
}: {
  exercise: Extract<Exercise, { kind: "traduzir" }>
  showTranslation: boolean
  answered: AnswerRecord | null
  onAnswer: (verdict: AnswerRecord["verdict"], given: string) => void
}) {
  const [picked, setPicked] = useState<number[]>([])
  const done = answered !== null

  const words = picked.map((index) => exercise.bank[index])
  const remaining = exercise.bank
    .map((word, index) => ({ word, index }))
    .filter((entry) => !picked.includes(entry.index))

  function finish(next: number[]) {
    const sentence = next.map((index) => exercise.bank[index])
    onAnswer(gradeTranslation(exercise, sentence), sentence.join(" "))
  }

  return (
    <div>
      <h2 className="font-display text-lg leading-snug font-extrabold">
        {exercise.prompt}
      </h2>
      {showTranslation && (
        <p className="text-muted-foreground mt-1 text-sm">
          Toque nas palavras na ordem certa, do inglês.
        </p>
      )}

      <div className="border-border bg-background mt-4 flex min-h-16 flex-wrap items-center gap-2 rounded-2xl border border-dashed p-3">
        {words.length === 0 && (
          <span className="text-muted-foreground text-sm">
            Monte a frase aqui
          </span>
        )}
        {picked.map((bankIndex, position) => (
          <button
            key={`${bankIndex}-${position}`}
            type="button"
            disabled={done}
            onClick={() => {
              const next = picked.filter((_, index) => index !== position)
              setPicked(next)
            }}
            className={cn(
              "font-display tap-target rounded-xl border px-3 py-1.5 text-sm font-bold",
              done
                ? answered?.verdict === "correct"
                  ? "border-success/50 bg-success/12 text-success"
                  : "border-destructive/50 bg-destructive/12 text-destructive"
                : "border-primary/40 bg-primary/10 text-primary",
            )}
          >
            {exercise.bank[bankIndex]}
          </button>
        ))}
      </div>

      <ul className="mt-3 flex flex-wrap gap-2">
        {remaining.map((entry) => (
          <li key={`${entry.word}-${entry.index}`}>
            <button
              type="button"
              disabled={done}
              onClick={() => {
                const next = [...picked, entry.index]
                setPicked(next)
                if (next.length === exercise.answer.length) finish(next)
              }}
              className="tap-target hover:bg-muted rounded-xl border border-border bg-card px-3 py-1.5 text-sm font-bold"
            >
              {entry.word}
            </button>
          </li>
        ))}
      </ul>

      {!done && (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setPicked([])}
            className="text-muted-foreground tap-target inline-flex items-center gap-1.5 text-xs font-bold"
          >
            <RotateCcw className="size-3.5" /> Limpar
          </button>
          {words.length > 0 && (
            <button
              type="button"
              onClick={() => finish(picked)}
              className="tap-target border-border bg-card inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold"
            >
              Conferir assim
            </button>
          )}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ speaking */

function SpeakQuestion({
  exercise,
  showTranslation,
  answered,
  onAnswer,
}: {
  exercise: Extract<Exercise, { kind: "falar" }>
  showTranslation: boolean
  answered: AnswerRecord | null
  onAnswer: (verdict: AnswerRecord["verdict"], given: string) => void
}) {
  const [listening, setListening] = useState<Listening | null>(null)
  const [transcript, setTranscript] = useState<string | null>(null)
  const [problem, setProblem] = useState<string | null>(null)
  const [result, setResult] = useState<{
    score: number
    missed: string | null
  } | null>(null)
  const [checked, setChecked] = useState(false)
  const activeRef = useRef<Listening | null>(null)

  const canListen = useMemo(() => speechInputSupported(), [])
  const done = answered !== null
  const busy = listening !== null

  // A microphone left open when moving to the next question is exactly the surprise
  // a learner should never get.
  useEffect(() => {
    return () => {
      activeRef.current?.abort()
      stopSpeaking()
    }
  }, [])

  function stop() {
    activeRef.current?.stop()
    activeRef.current = null
    setListening(null)
  }

  function start() {
    setProblem(null)
    setTranscript(null)
    setResult(null)

    const session = listenOnce({
      onResult: (said) => {
        activeRef.current = null
        setListening(null)
        setTranscript(said)
        const match = matchTranscript(exercise.prompt, said)
        setResult({ score: match.score, missed: match.missed })
        setChecked(true)
        onAnswer(gradeSpeech(match.score), said)
      },
      onError: (reason) => {
        activeRef.current = null
        setListening(null)
        setProblem(LISTEN_ERRORS[reason])
      },
    })

    if (session) {
      activeRef.current = session
      setListening(session)
      // The sentence is spoken first so the learner hears the model before repeating.
      window.setTimeout(() => speakEnglish(exercise.prompt), 150)
    }
  }

  function retry() {
    setChecked(false)
    setTranscript(null)
    setResult(null)
    setProblem(null)
  }

  const verdict = result ? scoreVerdict(result.score) : null

  return (
    <div>
      <h2 className="font-display text-lg leading-snug font-extrabold">
        {exercise.prompt}
      </h2>
      {showTranslation && (
        <p className="text-muted-foreground mt-1 text-sm">{exercise.pt}</p>
      )}

      <div className="border-border bg-background mt-4 flex flex-col items-center gap-3 rounded-2xl border p-5">
        <button
          type="button"
          onClick={() => speakEnglish(exercise.prompt)}
          className="tap-target border-border bg-card inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-bold"
        >
          <Volume2 className="size-4" /> Ouvir o modelo
        </button>

        {canListen ? (
          <>
            <button
              type="button"
              onClick={busy ? stop : start}
              disabled={done || checked}
              className={cn(
                "tap-target flex size-20 items-center justify-center rounded-full text-[#07131f]",
                busy ? "bg-warning" : "brand-gradient",
                (done || checked) && "opacity-50",
              )}
              aria-label={busy ? "Parar de ouvir" : "Falar agora"}
            >
              {busy ? (
                <MicOff className="size-9" />
              ) : (
                <Mic className="size-9" />
              )}
            </button>
            <p className="text-muted-foreground text-sm font-bold">
              {busy
                ? "Ouvindo… fale agora"
                : checked
                  ? "Verificado"
                  : "Toque e fale"}
            </p>
          </>
        ) : (
          <div className="bg-muted flex items-start gap-3 rounded-2xl p-4">
            <MicOff className="text-warning mt-0.5 size-4 shrink-0" />
            <p className="text-muted-foreground text-sm">
              Este navegador não ouve pelo microfone. Use “Ouvir o modelo”,
              repita em voz alta e siga adiante: ela não conta como erro.
            </p>
          </div>
        )}
      </div>

      {(transcript || result) && (
        <div
          className={cn(
            "mt-3 rounded-2xl border p-4",
            verdict === "great" && "border-success/40 bg-success/10",
            verdict === "close" && "border-warning/40 bg-warning/10",
            verdict === "retry" && "border-destructive/40 bg-destructive/10",
          )}
        >
          <p className="text-muted-foreground text-xs font-bold uppercase">
            O que o microfone ouviu
          </p>
          <p className="font-display mt-1 text-sm font-bold">
            “{transcript ?? "—"}”
          </p>
          {result && (
            <p className="text-muted-foreground mt-2 text-sm">
              {verdict === "great" && "Excelente: entendemos a frase inteira."}
              {verdict === "close" &&
                (result.missed
                  ? `Faltou pouco. Cuide da palavra “${result.missed}” e repita.`
                  : "Faltou pouco. Repita devagar, palavra por palavra.")}
              {verdict === "retry" &&
                (result.missed
                  ? `Vamos treinar: comece pela palavra “${result.missed}”.`
                  : "Tente de novo mais perto do microfone.")}
            </p>
          )}
        </div>
      )}

      {problem && (
        <div className="border-warning/40 bg-warning/10 mt-3 rounded-2xl border p-4">
          <p className="text-warning text-sm font-bold">
            Não conseguimos ouvir
          </p>
          <p className="text-muted-foreground mt-1 text-sm">{problem}</p>
        </div>
      )}

      <div className="bg-muted mt-3 flex items-start gap-3 rounded-2xl p-4">
        <Chama size={44} mood="pensando" float={false} />
        <p className="text-muted-foreground text-sm leading-relaxed">
          <span className="text-foreground font-bold">Dica de pronúncia: </span>
          {exercise.tip}
        </p>
      </div>

      {!done && (
        <div className="mt-3 flex flex-wrap gap-2">
          {checked && <RetryButton onRetry={retry} />}
          <button
            type="button"
            onClick={() => {
              activeRef.current?.abort()
              activeRef.current = null
              setListening(null)
              stopSpeaking()
              onAnswer("skipped", "")
            }}
            className="tap-target border-border bg-card inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold"
          >
            <SkipForward className="size-3.5" /> Pular esta pergunta
          </button>
        </div>
      )}

      {!canListen && !done && (
        <p className="text-muted-foreground mt-2 text-xs">
          Sem microfone o exercício vira treino de escuta e repetição em voz
          alta, e a pergunta é registrada como pulada — nunca como erro.
        </p>
      )}
    </div>
  )
}

function RetryButton({ onRetry }: { onRetry: () => void }) {
  return (
    <button
      type="button"
      onClick={onRetry}
      className="tap-target border-border bg-card inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold"
    >
      <RotateCcw className="size-3.5" /> Tentar de novo
    </button>
  )
}
