/**
 * Grading for the ten questions of a lesson.
 *
 * Every question is graded the same way: an answer goes in, a verdict comes out.
 * Keeping that shape uniform is what lets one screen render five very different
 * question kinds without separate branches of answer-checking logic.
 *
 * The speaking questions are the exception, and they are the reason this file exists
 * at all. A phone in a noisy room, a browser without a microphone, a learner who
 * denied the permission — none of that may cost a strike or block the lesson. So a
 * speaking question can be *skipped*, and skipping counts as done without counting as
 * wrong. The rest of the lesson is fully graded.
 */

import type { Exercise } from "#/lib/exercises.ts"

export type Verdict = "correct" | "wrong" | "skipped"

export interface AnswerRecord {
  kind: Exercise["kind"]
  verdict: Verdict
  /** What the learner answered, kept as text for the progress log. */
  given: string
  /** Whether this question is a speaking one, i.e. skippable. */
  skippable: boolean
}

/** True when the question asks the learner to speak, so it can be skipped. */
export function isSkippable(exercise: Exercise): boolean {
  return exercise.kind === "falar"
}

function normalise(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9'\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

/**
 * Grades a multiple-choice style question.
 *
 * Choices arrive as the index the learner tapped, so a mismatched index is a wrong
 * answer rather than a crash.
 */
export function gradeChoice(
  exercise: Exercise,
  optionIndex: number | null,
): Verdict {
  if (optionIndex === null) return "wrong"
  switch (exercise.kind) {
    case "completar":
    case "ouvirPalavra":
    case "ouvirFrase":
      return optionIndex === exercise.answer ? "correct" : "wrong"
    default:
      return "wrong"
  }
}

/**
 * Grades a built sentence.
 *
 * The order of the tapped words is the answer, and word order is exactly what these
 * questions teach, so an out-of-order sentence is wrong even when every word is
 * present. Punctuation and capitals, on the other hand, are forgiven: the learner
 * taps words, not commas.
 */
export function gradeTranslation(
  exercise: Exercise,
  picked: string[],
): Verdict {
  if (exercise.kind !== "traduzir") return "wrong"
  if (picked.length !== exercise.answer.length) return "wrong"
  const matches = exercise.answer.every(
    (word, index) => normalise(word) === normalise(picked[index] ?? ""),
  )
  return matches ? "correct" : "wrong"
}

/**
 * Grades a spoken sentence from the transcript the microphone produced.
 *
 * `score` comes from `matchTranscript`, which already forgives connecting words and
 * plural endings. The threshold is deliberately kind: this is a pronunciation drill,
 * not an accent test, and a learner who is understood should move on.
 */
export function gradeSpeech(score: number): Verdict {
  return score >= 0.6 ? "correct" : "wrong"
}

export interface AttemptSummary {
  correct: number
  wrong: number
  skipped: number
  /** Questions answered, i.e. everything except the skipped ones, plus skips. */
  answered: number
  total: number
  /** 0–100, counting skipped questions as neither hit nor miss. */
  accuracy: number
}

/**
 * Summarises what happened in a lesson.
 *
 * Skipped questions are held out of the accuracy figure rather than counted as
 * misses: a learner on a phone without a microphone can still finish a lesson with a
 * perfect score on everything they were able to answer.
 */
export function summarise(records: AnswerRecord[]): AttemptSummary {
  const correct = records.filter(
    (record) => record.verdict === "correct",
  ).length
  const wrong = records.filter((record) => record.verdict === "wrong").length
  const skipped = records.filter(
    (record) => record.verdict === "skipped",
  ).length
  const graded = correct + wrong
  return {
    correct,
    wrong,
    skipped,
    answered: records.length,
    total: records.length,
    accuracy: graded ? Math.round((correct / graded) * 100) : 0,
  }
}

/** Feedback shown right after an answer, in the learner's language. */
export interface Feedback {
  tone: "correct" | "wrong" | "skipped"
  title: string
  detail: string
}

export function feedbackFor(
  exercise: Exercise,
  record: AnswerRecord,
): Feedback {
  if (record.verdict === "skipped") {
    return {
      tone: "skipped",
      title: "Pergunta pulada",
      detail:
        "Sem problema — esta pergunta não conta como erro. Você pode voltar a ela quando estiver em um lugar mais silencioso.",
    }
  }

  const right = record.verdict === "correct"
  const explanation =
    exercise.kind === "falar" ? exercise.tip : exercise.explanation

  if (right) {
    return {
      tone: "correct",
      title: exercise.kind === "falar" ? "Boa pronúncia!" : "Isso mesmo!",
      detail: explanation,
    }
  }

  return {
    tone: "wrong",
    title: exercise.kind === "falar" ? "Quase lá" : "Não foi essa",
    detail: explanation,
  }
}

/** The correct answer written out, revealed with the feedback. */
export function correctAnswerText(exercise: Exercise): string {
  switch (exercise.kind) {
    case "completar":
      return exercise.prompt.replace(
        "___",
        exercise.options[exercise.answer] ?? "",
      )
    case "traduzir":
      return exercise.answer.join(" ")
    case "falar":
      return exercise.prompt
    case "ouvirPalavra":
      return exercise.options[exercise.answer] ?? ""
    case "ouvirFrase":
      return exercise.audio
  }
}
