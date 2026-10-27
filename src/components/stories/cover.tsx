import type { Level } from "#/data/catalog.ts"
import { cn } from "#/lib/utils.ts"

/**
 * A book cover drawn by the app, not photographed.
 *
 * The reading room runs to thirty episodes, and thirty stock pictures would make
 * the shelves look like a stock library. Instead every cover is the story's own
 * shelf, level and title set on a warm gradient — the colour tells the level, and
 * the strip on the left is the collection's spine, the way episodes sit side by
 * side on the same shelf.
 */

const LEVEL_STYLE: Record<Level, string> = {
  iniciante: "from-cyan/25 via-card to-card text-cyan",
  intermediario: "from-iris/25 via-card to-card text-iris",
  avancado: "from-primary/25 via-card to-card text-primary",
}

const SPINE_STYLE: Record<string, string> = {
  "primeiros-passos": "bg-cyan",
  "cidade-grande": "bg-primary",
  "vida-de-escritorio": "bg-iris",
  "mesa-de-bar": "bg-warning",
  mesh: "bg-success",
}

export function StoryCover({
  title,
  tagline,
  collection,
  level,
  episode,
  minutes,
  className,
}: {
  title: string
  tagline: string
  collection: string
  level: Level
  episode: number
  minutes: number
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br p-4",
        LEVEL_STYLE[level],
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-1.5",
          SPINE_STYLE[collection] ?? "bg-primary",
        )}
      />
      <span
        aria-hidden
        className="font-display text-foreground/5 absolute -right-3 -bottom-5 text-6xl font-extrabold"
      >
        {String(episode).padStart(2, "0")}
      </span>

      <div className="relative flex h-full flex-col justify-between gap-6 pl-2">
        <span className="bg-background/70 text-muted-foreground w-fit rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide uppercase">
          episódio {episode}
        </span>
        <span>
          <span className="font-display block text-[15px] leading-tight font-extrabold">
            {title}
          </span>
          <span className="text-muted-foreground mt-1 block text-[11px] font-semibold">
            {tagline}
          </span>
          <span className="text-muted-foreground mt-2 block text-[10px] font-bold">
            {minutes} min de leitura
          </span>
        </span>
      </div>
    </div>
  )
}
