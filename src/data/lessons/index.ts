import { ADVANCED_1 } from "./advanced-1.ts"
import { ADVANCED_2 } from "./advanced-2.ts"
import { ADVANCED_3 } from "./advanced-3.ts"
import { ADVANCED_4 } from "./advanced-4.ts"
import { ADVANCED_5 } from "./advanced-5.ts"
import { ADVANCED_6 } from "./advanced-6.ts"
import { BEGINNER_1 } from "./beginner-1.ts"
import { BEGINNER_2 } from "./beginner-2.ts"
import { INTERMEDIATE_1 } from "./intermediate-1.ts"
import { INTERMEDIATE_2 } from "./intermediate-2.ts"
import { INTERMEDIATE_3 } from "./intermediate-3.ts"
import { INTERMEDIATE_4 } from "./intermediate-4.ts"
import type { LessonContent } from "./types.ts"

export type {
  LessonContent,
  LessonExample,
  LessonPractice,
  LessonVocab,
} from "./types.ts"

/** Every written lesson, in catalog order. */
const ALL: LessonContent[] = [
  ...BEGINNER_1,
  ...BEGINNER_2,
  ...INTERMEDIATE_1,
  ...INTERMEDIATE_2,
  ...INTERMEDIATE_3,
  ...INTERMEDIATE_4,
  ...ADVANCED_1,
  ...ADVANCED_2,
  ...ADVANCED_3,
  ...ADVANCED_4,
  ...ADVANCED_5,
  ...ADVANCED_6,
]

const BY_ID = new Map(ALL.map((lesson) => [lesson.id, lesson]))

/** Teaching content for a lesson id, or undefined when nothing is written. */
export const lessonContent = (id: string): LessonContent | undefined =>
  BY_ID.get(id)

export const WRITTEN_LESSONS = ALL.length
