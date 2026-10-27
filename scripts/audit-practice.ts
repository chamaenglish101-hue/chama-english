/**
 * Runs the practice content through its integrity checks and prints every problem.
 *
 *   pnpm practice:audit
 *
 * The questions are hand-written across 130 lessons, so the likely mistake is a
 * mistyped answer index or a question kind out of order — not a crash. This prints all
 * of them at once, so a lesson can be checked while it is being written.
 */

import { CATALOG } from "../src/data/catalog.ts"
import { PRACTICE_LESSONS } from "../src/data/practice/index.ts"
import { auditLesson } from "../src/lib/exercises.ts"

const published = new Set(PRACTICE_LESSONS.map((lesson) => lesson.id))
let problems = 0

for (const lesson of PRACTICE_LESSONS) {
  const found = auditLesson(lesson)
  if (found.length === 0) {
    console.log(`ok   ${lesson.id} — 10 perguntas`)
    continue
  }
  problems += found.length
  console.log(`ERRO ${lesson.id}`)
  for (const problem of found) console.log(`       ${problem}`)
}

const missing = CATALOG.filter((lesson) => !published.has(lesson.id)).length
console.log(
  `\n${PRACTICE_LESSONS.length} lições publicadas · ${missing} ainda por escrever · ${problems} problemas`,
)

if (problems > 0) process.exitCode = 1
