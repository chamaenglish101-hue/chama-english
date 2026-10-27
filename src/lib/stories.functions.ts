import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"

import {
  STORIES,
  allPreviews,
  type StoryPreview,
} from "#/data/stories/index.ts"
import type { Story } from "#/data/stories/types.ts"
import { loadBillingStatus } from "#/lib/billing.server.ts"

/**
 * The reading room is the newest part of the paid plan, so both endpoints below
 * answer the same question first — is this person entitled? — against the
 * entitlement row on the server. Nothing here trusts the browser.
 */

export interface StoriesIndex {
  entitled: boolean
  /** False when the app has no Stripe keys yet, so checkout cannot be offered. */
  stripeReady: boolean
  signedIn: boolean
  stories: StoryPreview[]
}

export type StoryView =
  | {
      status: "locked"
      entitled: boolean
      stripeReady: boolean
      signedIn: boolean
    }
  | { status: "missing" }
  | { status: "ready"; story: Story; nextId: string | null }

/** The shelves: titles, levels, series sizes and how many words each one explains. */
export const loadStories = createServerFn({ method: "GET" }).handler(
  async (): Promise<StoriesIndex> => {
    const billing = await loadBillingStatus(getRequest())
    return {
      entitled: billing.entitled,
      stripeReady: billing.stripeReady,
      signedIn: billing.signedIn,
      stories: allPreviews(),
    }
  },
)

/** One story, text and glossary included — only for someone allowed to read it. */
export const loadStory = createServerFn({ method: "GET" })
  .validator((input: { storyId: string }) => ({
    storyId: String(input?.storyId ?? ""),
  }))
  .handler(async ({ data }): Promise<StoryView> => {
    const billing = await loadBillingStatus(getRequest())
    const gate = {
      entitled: billing.entitled,
      stripeReady: billing.stripeReady,
      signedIn: billing.signedIn,
    }

    if (!billing.entitled) return { status: "locked", ...gate }

    const story = STORIES.find((item) => item.id === data.storyId)
    if (!story) return { status: "missing" }

    const index = STORIES.findIndex((item) => item.id === story.id)
    const next = STORIES[index + 1]

    return { status: "ready", story, nextId: next ? next.id : null }
  })
