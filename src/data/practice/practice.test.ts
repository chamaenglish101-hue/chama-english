/**
 * Integration checks for the practice content.
 *
 * The lesson questions are hand-written, so the failure mode is never a crash — it is
 * a wrong answer index, a lesson of eight questions instead of ten, or a question kind
 * that drifted out of the usual order. Checks like that belong in the test suite, not
 * in a learner's afternoon.
 *
 *   node --test src/data/practice/practice.test.ts
 */

import assert from "node:assert/strict"
import { test } from "node:test"

import { matchTranscript, scoreVerdict } from "#/lib/audio.ts"
import {
  LESSON_BLUEPRINT,
  QUESTIONS_PER_LESSON,
  auditLesson,
} from "#/lib/exercises.ts"
import {
  gradeChoice,
  gradeTranslation,
  feedbackFor,
  summarise,
} from "#/lib/grading.ts"
import type { AnswerRecord } from "#/lib/grading.ts"

import { PRACTICE_LESSONS } from "./index.ts"

test("as perguntas fixas de cada lição batem com o roteiro", () => {
  for (const lesson of PRACTICE_LESSONS) {
    const kinds = lesson.exercises.map((exercise) => exercise.kind)
    // Speaking questions need a microphone; the rest must always be there.
    const fixed = kinds.filter((kind) => kind !== "falar")
    const expected = LESSON_BLUEPRINT.filter((kind) => kind !== "falar")
    assert.deepEqual(fixed, expected, `lição ${lesson.id}`)
    assert.equal(kinds.length, LESSON_BLUEPRINT.length, `lição ${lesson.id}`)
  }
})

test("toda lição tem dez perguntas e nenhuma pergunta de imagem", () => {
  for (const lesson of PRACTICE_LESSONS) {
    assert.equal(lesson.exercises.length, 10, `lição ${lesson.id}`)
    assert.ok(
      !lesson.exercises.some(
        (exercise) => (exercise.kind as string) === "imagem",
      ),
      `lição ${lesson.id} não pode pedir para adivinhar a imagem`,
    )
    assert.deepEqual(
      auditLesson(lesson),
      [],
      `lição ${lesson.id} não pode ter problemas`,
    )
  }
})

test("a lição b01 não tem nenhum problema de conteúdo", () => {
  const lesson = PRACTICE_LESSONS.find((entry) => entry.id === "b01")
  assert.ok(lesson, "a lição b01 precisa existir")
  assert.deepEqual(auditLesson(lesson), [])
})

test("o cenário completo da lição fecha em 8 respostas e 2 falas", () => {
  const lesson = PRACTICE_LESSONS[0]
  const records: AnswerRecord[] = lesson.exercises.map((exercise) => ({
    kind: exercise.kind,
    verdict: exercise.kind === "falar" ? "skipped" : "correct",
    given: "",
    skippable: exercise.kind === "falar",
  }))
  const total = summarise(records)
  assert.equal(total.total, QUESTIONS_PER_LESSON)
  assert.equal(total.correct, 8)
  assert.equal(total.skipped, 2)
  assert.equal(total.accuracy, 100)
})

test("o motor de correção reprova resposta fora de ordem e aprova a certa", () => {
  const lesson = PRACTICE_LESSONS[0]
  const translation = lesson.exercises.find(
    (exercise) => exercise.kind === "traduzir",
  )
  assert.ok(translation)
  assert.equal(
    gradeTranslation(translation, ["Hello", "I", "am", "Ana"]),
    "correct",
  )
  assert.equal(
    gradeTranslation(translation, ["I", "am", "Hello", "Ana"]),
    "wrong",
  )
  assert.equal(gradeTranslation(translation, ["Hello", "I", "am"]), "wrong")

  const choice = lesson.exercises.find(
    (exercise) => exercise.kind === "completar",
  )
  assert.ok(choice)
  assert.equal(gradeChoice(choice, choice.answer), "correct")
  assert.equal(gradeChoice(choice, 3), "wrong")
  assert.equal(gradeChoice(choice, null), "wrong")
})

test("a fala é aceita com sotaque, mesmo sem as palavras de ligação", () => {
  const said = "how do you spell your name"
  const match = matchTranscript("How do you spell your name?", said)
  assert.equal(match.perfect, true)
  assert.equal(scoreVerdict(match.score), "great")

  const swapped = matchTranscript(
    "How do you spell your name?",
    "how do i spell your name",
  )
  assert.equal(
    scoreVerdict(swapped.score),
    "great",
    "trocar uma palavra fraca não derruba",
  )

  const shortened = matchTranscript(
    "How do you spell your name?",
    "how spell name",
  )
  assert.equal(
    scoreVerdict(shortened.score),
    "close",
    "frase pela metade não passa",
  )

  const skippedContraction = matchTranscript(
    "Sorry, I didn't catch that. Can you repeat, please?",
    "sorry i catch that can you repeat please",
  )
  assert.equal(
    scoreVerdict(skippedContraction.score),
    "great",
    "contração engolida pelo reconhecimento é perdoada",
  )

  const half = matchTranscript(
    "Sorry, I didn't catch that. Can you repeat, please?",
    "can you repeat please",
  )
  assert.equal(
    scoreVerdict(half.score),
    "retry",
    "só metade da frase não passa",
  )

  const wrong = matchTranscript(
    "How do you spell your name?",
    "hello my friend",
  )
  assert.equal(scoreVerdict(wrong.score), "retry")
})

test("a opção errada da fala não conta como erro", () => {
  const lesson = PRACTICE_LESSONS[0]
  const speaking = lesson.exercises.find(
    (exercise) => exercise.kind === "falar",
  )
  assert.ok(speaking)
  const feedback = feedbackFor(speaking, {
    kind: "falar",
    verdict: "skipped",
    given: "",
    skippable: true,
  })
  assert.equal(feedback.tone, "skipped")
  assert.match(feedback.detail, /não conta como erro/)
})
