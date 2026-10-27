export interface LessonExample {
  en: string
  pt: string
  note?: string
}

export interface LessonVocab {
  en: string
  pt: string
}

export interface LessonPractice {
  prompt: string
  options: string[]
  answer: number
  explanation: string
}

/**
 * The teaching content of one lesson. Titles, levels and durations live in
 * `#/data/catalog.ts`; the two are joined by `id`.
 */
export interface LessonContent {
  id: string
  objective: string
  keyPoints: string[]
  explanation: string[]
  examples: LessonExample[]
  vocab: LessonVocab[]
  practice: LessonPractice[]
  takeaway: string
  tip: string
}
