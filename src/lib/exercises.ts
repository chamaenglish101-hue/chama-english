/**
 * The five practice question kinds of the Chama English lessons.
 *
 * Every lesson asks the same ten questions, in the same order:
 *
 *   1–2  completar    complete the sentence by picking the missing piece
 *   3–4  traduzir     write the English for a Portuguese sentence
 *   5–6  falar        read an English sentence out loud
 *   7–8  ouvirPalavra hear one English word and pick its Portuguese meaning
 *   9–10 ouvirFrase   hear an English sentence and pick the sentence that was said
 *
 * Ordering questions in those blocks keeps a lesson rhythm predictable — the learner
 * always meets the quiet reading tasks before the listening ones, and the two speaking
 * tasks land in the middle where energy is highest.
 *
 * There is no "which picture shows this sentence?" question: it asked the learner to
 * guess a scene instead of practising the language, and the photos were the only part
 * of a lesson that could be missing or mismatched.
 *
 * The audio is spoken by the device itself (`speechSynthesis`, `en-US`). Nothing is
 * pre-recorded: any sentence in any lesson can be listened to without shipping audio
 * files, and a fix to a sentence is a fix to its audio too.
 */

import type { Level } from "#/data/catalog.ts"

/* ----------------------------------------------------------------- vocabulary */

/* ------------------------------------------------------------- question kinds */

/** 1–2: complete the sentence. */
export interface CompleteExercise {
  kind: "completar"
  /** The sentence with one blank written as `___`. */
  prompt: string
  /** Optional Portuguese gloss of the whole sentence, in learner-friendly form. */
  hint?: string
  options: string[]
  /** Index of the right option in `options`. */
  answer: number
  explanation: string
}

/** 3–4: translate from Portuguese into English. */
export interface TranslateExercise {
  kind: "traduzir"
  /** The Portuguese sentence to translate. */
  prompt: string
  /** Words the learner taps to build the answer. */
  bank: string[]
  /** The right answer, as whole words, in order. */
  answer: string[]
  explanation: string
}

/** 5–6: read an English sentence out loud. */
export interface SpeakExercise {
  kind: "falar"
  /** Sentence the learner must say. */
  prompt: string
  /** Portuguese gloss, so the sentence is understood before it is spoken. */
  pt: string
  /** One practical pronunciation pointer: the sound that trips Brazilians up. */
  tip: string
}

/** 7–8: hear an English word and pick its Portuguese meaning. */
export interface WordExercise {
  kind: "ouvirPalavra"
  /** The word that is spoken. */
  audio: string
  /** Portuguese/English choices; exactly one is the right meaning. */
  options: string[]
  answer: number
  explanation: string
}

/** 9–10: hear an English sentence and pick what was said. */
export interface SentenceExercise {
  kind: "ouvirFrase"
  /** The sentence that is spoken. */
  audio: string
  /** Portuguese gloss of `audio`, revealed with the result. */
  pt: string
  /** Four English sentences; exactly one is `audio`. */
  options: string[]
  answer: number
  explanation: string
}

export type Exercise =
  | CompleteExercise
  | TranslateExercise
  | SpeakExercise
  | WordExercise
  | SentenceExercise

/* -------------------------------------------------------------- presentation */

export interface ExerciseKindMeta {
  id: Exercise["kind"]
  /** Portuguese name shown as the question's eyebrow. */
  label: string
  /** One-line instruction, in the learner's language. */
  instruction: string
}

export const EXERCISE_KINDS: ExerciseKindMeta[] = [
  {
    id: "completar",
    label: "Completar",
    instruction: "Escolha a palavra que fecha a frase.",
  },
  {
    id: "traduzir",
    label: "Traduzir",
    instruction: "Monte a frase em inglês tocando nas palavras.",
  },
  {
    id: "falar",
    label: "Falar em voz alta",
    instruction: "Ouça e repita a frase. O microfone confere a pronúncia.",
  },
  {
    id: "ouvirPalavra",
    label: "Ouvir a palavra",
    instruction: "Ouça a palavra e escolha o significado.",
  },
  {
    id: "ouvirFrase",
    label: "Ouvir a frase",
    instruction: "Ouça e escolha a frase que foi dita.",
  },
]

const KIND_BY_ID = new Map(EXERCISE_KINDS.map((meta) => [meta.id, meta]))

export function kindMeta(kind: Exercise["kind"]): ExerciseKindMeta {
  return KIND_BY_ID.get(kind) ?? EXERCISE_KINDS[0]
}

/* --------------------------------------------------------------- the lesson */

/** Expected order of the ten questions, as kind ids. */
export const LESSON_BLUEPRINT: Exercise["kind"][] = [
  "completar",
  "completar",
  "traduzir",
  "traduzir",
  "falar",
  "falar",
  "ouvirPalavra",
  "ouvirPalavra",
  "ouvirFrase",
  "ouvirFrase",
]

export const QUESTIONS_PER_LESSON = LESSON_BLUEPRINT.length

export interface LessonPracticeContent {
  id: string
  level: Level
  exercises: Exercise[]
}

/**
 * Checks a lesson's ten questions before they reach a learner.
 *
 * The content is hand-written across 130 lessons, so a mistyped answer index or a
 * question kind out of order is the likely bug — not a crash. This runs on the lesson
 * data itself and reports every problem at once, so a broken lesson is caught while
 * writing it instead of in front of a learner.
 */
export function auditLesson(content: LessonPracticeContent): string[] {
  const problems: string[] = []
  const at = (index: number) => `${content.id} pergunta ${index + 1}`

  if (content.exercises.length !== QUESTIONS_PER_LESSON) {
    problems.push(
      `${content.id}: tem ${content.exercises.length} perguntas, esperado ${QUESTIONS_PER_LESSON}`,
    )
  }

  content.exercises.forEach((exercise, index) => {
    const expected = LESSON_BLUEPRINT[index]
    if (expected && exercise.kind !== expected) {
      problems.push(`${at(index)}: tipo ${exercise.kind}, esperado ${expected}`)
    }

    switch (exercise.kind) {
      case "completar": {
        if (!exercise.prompt.includes("___")) {
          problems.push(`${at(index)}: falta o espaço ___ na frase`)
        }
        if (exercise.options.length !== 4) {
          problems.push(
            `${at(index)}: ${exercise.options.length} opções, esperado 4`,
          )
        }
        if (!exercise.options[exercise.answer]) {
          problems.push(`${at(index)}: resposta fora das opções`)
        }
        if (new Set(exercise.options).size !== exercise.options.length) {
          problems.push(`${at(index)}: opções repetidas`)
        }
        break
      }
      case "traduzir": {
        if (exercise.answer.length < 2) {
          problems.push(`${at(index)}: resposta curta demais para montar`)
        }
        const bank = [...exercise.bank]
        for (const word of exercise.answer) {
          const found = bank.indexOf(word)
          if (found < 0) {
            problems.push(`${at(index)}: a palavra “${word}” não está no banco`)
          } else {
            bank.splice(found, 1)
          }
        }
        if (bank.length === 0) {
          problems.push(
            `${at(index)}: o banco não tem distratores — a resposta fica óbvia`,
          )
        }
        break
      }
      case "falar": {
        if (!exercise.prompt.trim()) problems.push(`${at(index)}: frase vazia`)
        if (!exercise.pt.trim()) problems.push(`${at(index)}: falta a tradução`)
        break
      }
      case "ouvirPalavra": {
        if (exercise.options.length !== 4) {
          problems.push(
            `${at(index)}: ${exercise.options.length} opções, esperado 4`,
          )
        }
        if (!exercise.options[exercise.answer]) {
          problems.push(`${at(index)}: resposta fora das opções`)
        }
        break
      }
      case "ouvirFrase": {
        if (exercise.options.length !== 4) {
          problems.push(
            `${at(index)}: ${exercise.options.length} opções, esperado 4`,
          )
        }
        if (!exercise.options[exercise.answer]) {
          problems.push(`${at(index)}: resposta fora das opções`)
        }
        if (exercise.options[exercise.answer] !== exercise.audio) {
          problems.push(
            `${at(index)}: a resposta marcada não é a frase do áudio`,
          )
        }
        if (new Set(exercise.options).size !== exercise.options.length) {
          problems.push(`${at(index)}: frases repetidas nas opções`)
        }
        break
      }
    }
  })

  return problems
}
