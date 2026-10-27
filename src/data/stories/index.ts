import { STORIES_A } from "#/data/stories/stories-a.ts"
import { STORIES_A2 } from "#/data/stories/stories-a2.ts"
import { STORIES_B } from "#/data/stories/stories-b.ts"
import { STORIES_B2 } from "#/data/stories/stories-b2.ts"
import { STORIES_C2 } from "#/data/stories/stories-c2.ts"
import { STORIES_D2 } from "#/data/stories/stories-d2.ts"
import { COLLECTIONS, type Story } from "#/data/stories/types.ts"

/**
 * Every story, in reading order. Server-only: the reading room is part of the paid
 * plan, so this list never reaches the browser — the preview endpoint sends only
 * what a story looks like from the outside.
 */
export const STORIES: Story[] = [
  ...STORIES_A,
  ...STORIES_A2,
  ...STORIES_B,
  ...STORIES_B2,
  ...STORIES_C2,
  ...STORIES_D2,
]

/**
 * A story's public shape: everything the shelves need, without a single line of
 * the text. The full paragraphs and the glossary arrive only when someone opens
 * the story.
 */
export interface StoryPreview {
  id: string
  collection: (typeof COLLECTIONS)[number]["id"]
  episode: number
  level: Story["level"]
  title: string
  tagline: string
  minutes: number
  cast: string
  /** Words explained inside the story, for the "12 palavras para tocar" hint. */
  glossarySize: number
  /** Longest episode of the collection, needed to draw the series progress. */
  collectionSize: number
}

function collectionSizes(): Map<string, number> {
  const sizes = new Map<string, number>()
  for (const story of STORIES) {
    sizes.set(story.collection, (sizes.get(story.collection) ?? 0) + 1)
  }
  return sizes
}

const SIZES = collectionSizes()

export function previewOf(story: Story): StoryPreview {
  return {
    id: story.id,
    collection: story.collection,
    episode: story.episode,
    level: story.level,
    title: story.title,
    tagline: story.tagline,
    minutes: story.minutes,
    cast: story.cast,
    glossarySize: story.glossary.length,
    collectionSize: SIZES.get(story.collection) ?? story.episode,
  }
}

/** Every story as a preview, in reading order. */
export function allPreviews(): StoryPreview[] {
  return STORIES.map(previewOf)
}

export type { Story } from "#/data/stories/types.ts"
export { COLLECTIONS } from "#/data/stories/types.ts"
