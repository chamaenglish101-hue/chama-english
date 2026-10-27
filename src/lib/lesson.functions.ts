import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"

import { lessonById } from "#/data/catalog.ts"
// The written lessons are server-only: importing them here keeps every paid
// lesson out of the browser bundle until an entitled request asks for one.
import { lessonContent } from "#/data/lessons/index.ts"
import type { LessonContent } from "#/data/lessons/types.ts"
import { practiceFor } from "#/data/practice/index.ts"
import { loadBillingStatus } from "#/lib/billing.server.ts"
import { isLessonUnlocked } from "#/lib/billing.ts"
import type { LessonPracticeContent } from "#/lib/exercises.ts"

export type LessonView =
  | { status: "missing" }
  | { status: "locked" }
  | {
      status: "ready"
      content: LessonContent
      practice: LessonPracticeContent | null
    }

/**
 * Hands over one lesson's teaching content and its twelve questions, and only to
 * someone allowed to read it. The check runs on the server against the entitlement
 * row, so the paywall does not depend on the browser behaving.
 */
export const loadLesson = createServerFn({ method: "GET" })
  .validator((input: { licaoId: string }) => ({
    licaoId: String(input?.licaoId ?? ""),
  }))
  .handler(async ({ data }): Promise<LessonView> => {
    const meta = lessonById(data.licaoId)
    if (!meta) return { status: "missing" }

    const billing = await loadBillingStatus(getRequest())
    if (!isLessonUnlocked(meta.id, billing.entitled))
      return { status: "locked" }

    const content = lessonContent(meta.id)
    if (!content) return { status: "missing" }

    return { status: "ready", content, practice: practiceFor(meta.id) }
  })
