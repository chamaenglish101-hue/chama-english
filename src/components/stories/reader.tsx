import { Volume2, X } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

import {
  glossaryIndex,
  type GlossaryEntry,
  type Story,
} from "#/data/stories/types.ts"
import { speakEnglish, stopSpeaking } from "#/lib/audio.ts"
import { cn } from "#/lib/utils.ts"

/**
 * The reader: a story is a wall of English, and every word in it is a door.
 *
 * Tapping a word opens a small panel with the Portuguese meaning and a button that
 * says the word in English. Words the story actually explains are underlined, so a
 * learner can tell at a glance where an answer exists — and the reading mode can be
 * narrowed to just those words for a first pass through a hard text.
 */

type Mode = "todas" | "explicadas"

/** One paragraph split into tappable tokens, punctuation included. */
function tokenize(paragraph: string): string[] {
  return paragraph.split(/\s+/).filter(Boolean)
}

function cleanWord(token: string): string {
  return token
    .toLowerCase()
    .replace(/^[^a-z']+/, "")
    .replace(/[^a-z']+$/, "")
}

function lookup(
  index: Map<string, GlossaryEntry>,
  token: string,
): GlossaryEntry | undefined {
  const word = cleanWord(token)
  if (!word) return undefined
  return index.get(word)
}

export function StoryReader({ story }: { story: Story }) {
  const [mode, setMode] = useState<Mode>("todas")
  const [selected, setSelected] = useState<string | null>(null)
  const index = useMemo(() => glossaryIndex(story), [story])

  // Changing how the text looks moves every word on the page, so the panel closes
  // with the mode that opened it instead of pointing at the wrong word.
  function changeMode(next: Mode) {
    stopSpeaking()
    setSelected(null)
    setMode(next)
  }

  // Leaving the page must not leave a voice talking to an empty screen.
  useEffect(() => stopSpeaking, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-muted-foreground text-xs font-semibold">
          {mode === "todas"
            ? "Toque em qualquer palavra para ver o significado e ouvir a pronúncia."
            : "Só as palavras explicadas desta história estão destacadas."}
        </p>
        <div
          role="group"
          aria-label="Modo de leitura"
          className="border-border bg-muted/70 flex shrink-0 items-center gap-1 rounded-full p-1"
        >
          {(
            [
              { id: "todas", label: "Todas as palavras" },
              { id: "explicadas", label: "Só as explicadas" },
            ] as const
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => changeMode(option.id)}
              aria-pressed={mode === option.id}
              className={cn(
                "tap-target rounded-full px-3 py-1.5 text-[11px] font-extrabold transition-colors",
                mode === option.id
                  ? "bg-card text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {story.paragraphs.map((paragraph, position) => (
          <p
            key={`${position}-${paragraph.slice(0, 12)}`}
            className="text-[17px] leading-[1.9] font-medium"
          >
            {tokenize(paragraph).map((token, tokenIndex) => {
              const entry = lookup(index, token)
              const known = Boolean(entry)
              const hidden = mode === "explicadas" && !known
              const active = selected === `${position}-${tokenIndex}`

              if (!cleanWord(token)) {
                return (
                  <span key={tokenIndex} className={hidden ? "opacity-30" : ""}>
                    {token}{" "}
                  </span>
                )
              }

              return (
                <span key={tokenIndex}>
                  <button
                    type="button"
                    onClick={() =>
                      setSelected(active ? null : `${position}-${tokenIndex}`)
                    }
                    className={cn(
                      "cursor-pointer rounded-md px-0.5 text-left transition-colors",
                      hidden && "opacity-30",
                      known
                        ? "decoration-primary/60 underline decoration-2 underline-offset-4"
                        : "hover:bg-muted",
                      active && "bg-primary/15 decoration-primary",
                    )}
                  >
                    {token}
                  </button>{" "}
                </span>
              )
            })}
          </p>
        ))}
      </div>

      {selected && (
        <WordPanel
          index={index}
          selected={selected}
          story={story}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}

/**
 * The dictionary panel. It stays pinned to the bottom of the screen because the
 * reader is always mid-paragraph when a word is tapped: moving the text to make
 * room would move the word being read.
 */
function WordPanel({
  story,
  index,
  selected,
  onClose,
}: {
  story: Story
  index: Map<string, GlossaryEntry>
  selected: string
  onClose: () => void
}) {
  const [position, tokenIndex] = selected.split("-").map(Number)
  const token = tokenize(story.paragraphs[position] ?? "")[tokenIndex] ?? ""
  const word = cleanWord(token)
  const entry = index.get(word)
  const [speaking, setSpeaking] = useState(false)
  const timer = useRef<number | null>(null)

  function say(text: string) {
    setSpeaking(true)
    const started = speakEnglish(text, { onEnd: () => setSpeaking(false) })
    if (!started) setSpeaking(false)
  }

  useEffect(() => {
    // A panel that disappears while the voice is still talking is the one thing a
    // learner cannot recover from, so the timer is cleared with the panel.
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  return (
    <div className="bg-background/80 fixed inset-x-0 bottom-16 z-40 px-3 pb-3 backdrop-blur-sm md:bottom-0">
      <div
        role="dialog"
        aria-label={`Significado de ${word}`}
        className="border-primary/40 bg-card mx-auto flex w-full max-w-2xl flex-col gap-3 rounded-2xl border p-4 shadow-lg"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-display text-xl leading-tight font-extrabold">
              {word}
            </p>
            <p className="text-muted-foreground mt-0.5 text-[11px] font-bold tracking-wide uppercase">
              em inglês
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="tap-target text-muted-foreground hover:text-foreground -mt-1 -mr-1 flex size-8 items-center justify-center rounded-full"
          >
            <X className="size-4" />
          </button>
        </div>

        {entry ? (
          <div>
            <p className="text-[15px] font-bold">{entry.meaning}</p>
            {entry.note && (
              <p className="text-muted-foreground mt-1 text-xs font-semibold">
                {entry.note}
              </p>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm leading-relaxed">
            Esta palavra não está no dicionário desta história. Toque em uma
            palavra sublinhada para ver o significado em português.
          </p>
        )}

        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground text-[11px] font-bold tracking-wide uppercase">
            pronúncia em inglês
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => say(word)}
              className={cn(
                "tap-target border-border bg-background inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-bold",
                speaking ? "text-primary" : "hover:bg-muted",
              )}
            >
              <Volume2 className="size-4" /> Ouvir a palavra
            </button>
            <button
              type="button"
              onClick={() =>
                say(`${story.tagline}. ${story.paragraphs[position]}`)
              }
              className="tap-target border-border bg-background hover:bg-muted inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-bold"
            >
              <Volume2 className="size-4" /> Ouvir a frase
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
