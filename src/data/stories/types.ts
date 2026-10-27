import { z } from "zod"

/**
 * Stories are the premium reading room: serialised fiction with a built-in
 * dictionary. Everything here is data — the reader screen only knows how to
 * render a story, look up one word, and remember where the person stopped.
 *
 * Glosses are written by hand for the words learners actually stumble on, and
 * every story is short enough to finish in one sitting (3–6 minutes), because a
 * story that is never finished teaches nothing.
 */

export const STORY_LEVELS = ["iniciante", "intermediario", "avancado"] as const
export type StoryLevel = (typeof STORY_LEVELS)[number]

export const STORY_LEVEL_LABEL: Record<StoryLevel, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
}

export const STORY_LEVEL_TAGLINE: Record<StoryLevel, string> = {
  iniciante: "Frases curtas, presente simples e vocabulário do dia a dia",
  intermediario: "Narração no passado, diálogos e phrasal verbs comuns",
  avancado: "Idioms, ironia e vocabulário de trabalho e cultura",
}

export const COLLECTIONS = [
  {
    id: "primeiros-passos",
    name: "Primeiros passos",
    tagline: "Histórias curtas para quem está começando a ler em inglês",
    accent: "cyan",
  },
  {
    id: "cidade-grande",
    name: "Cidade grande",
    tagline: "Quem se muda para longe sempre leva a própria história na mala",
    accent: "brand",
  },
  {
    id: "vida-de-escritorio",
    name: "Vida de escritório",
    tagline: "Reuniões, prazos e as conversas que ninguém marcou na agenda",
    accent: "iris",
  },
  {
    id: "mesa-de-bar",
    name: "Mesa de bar",
    tagline: "Piada, ironia e gíria com quem fala inglês de verdade",
    accent: "warning",
  },
  {
    id: "mesh",
    name: "Séries que se cruzam",
    tagline:
      "O encontro das três séries: Helena, Bruno e Ana descobrem que estudaram a mesma língua na mesma cidade",
    accent: "success",
  },
] as const

export type CollectionId = (typeof COLLECTIONS)[number]["id"]

export interface GlossaryEntry {
  /** The headword exactly as it appears in the story, lowercase. */
  word: string
  /** Portuguese meaning, short enough to read in one look. */
  meaning: string
  /** Optional note about register, grammar or usage. */
  note?: string
}

export interface Story {
  id: string
  collection: CollectionId
  /** Position of this episode inside its collection, starting at 1. */
  episode: number
  level: StoryLevel
  title: string
  /** English subtitle shown under the title. */
  tagline: string
  minutes: number
  /** Who is telling the story, in Portuguese, one line. */
  cast: string
  /** What happens, in Portuguese — shown before the person starts reading. */
  blurb: string
  /** One line per paragraph, in order. */
  paragraphs: string[]
  glossary: GlossaryEntry[]
  /** Question the reader answers when the episode ends. */
  question: {
    prompt: string
    options: string[]
    answer: number
    explanation: string
  }
}

/** The token the reader can look up: headword plus the options for a form. */
export function lookupForms(headword: string): string[] {
  const forms = new Set([headword.toLowerCase()])
  if (headword.endsWith("y") && headword.length > 3) {
    forms.add(`${headword.slice(0, -1)}ies`)
    forms.add(`${headword.slice(0, -1)}ied`)
  }
  if (headword.endsWith("e")) {
    forms.add(`${headword}d`)
    forms.add(`${headword.slice(0, -1)}ing`)
  }
  forms.add(`${headword}s`)
  forms.add(`${headword}ed`)
  forms.add(`${headword}ing`)
  return [...forms]
}

/**
 * Every word in a story that has a glossary entry, expanded into all the surface
 * forms the text may use. The reader builds one map instead of searching the
 * glossary on every tap.
 */
export function glossaryIndex(story: Story): Map<string, GlossaryEntry> {
  const index = new Map<string, GlossaryEntry>()
  for (const entry of story.glossary) {
    for (const form of lookupForms(entry.word)) index.set(form, entry)
  }
  return index
}

export const storyById = (stories: Story[], id: string): Story | undefined =>
  stories.find((story) => story.id === id)

export const collectionName = (id: CollectionId): string =>
  COLLECTIONS.find((collection) => collection.id === id)?.name ?? id

/** Reading-progress key, kept apart from the lesson progress keys. */
export const storyReadKey = (storyId: string) => `story:${storyId}`

export const storySchema = z.object({
  id: z.string(),
  title: z.string(),
  paragraphs: z.array(z.string()).min(3),
})
