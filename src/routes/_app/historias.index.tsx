import { Link, createFileRoute } from "@tanstack/react-router"
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  Languages,
  Library,
  Lock,
  Search,
  Sparkles,
} from "lucide-react"
import { useState } from "react"

import { SectionTitle } from "#/components/app-shell.tsx"
import { Chama } from "#/components/mascot.tsx"
import { StoryCover } from "#/components/stories/cover.tsx"
import { StoriesPaywall } from "#/components/stories/paywall.tsx"
import type { StoryPreview } from "#/data/stories/index.ts"
import {
  COLLECTIONS,
  STORY_LEVEL_LABEL,
  STORY_LEVEL_TAGLINE,
  storyReadKey,
  type CollectionId,
} from "#/data/stories/types.ts"
import { useAppState, useHydrated } from "#/lib/progress.ts"
import { loadStories } from "#/lib/stories.functions.ts"
import { cn } from "#/lib/utils.ts"

export const Route = createFileRoute("/_app/historias/")({
  // Titles and levels come from the server so the shelves and the paywall stay in
  // step with what the account is actually allowed to open.
  loader: () => loadStories(),
  component: StoriesPage,
})

function StoriesPage() {
  const { stories, entitled } = Route.useLoaderData()
  const state = useAppState()
  const hydrated = useHydrated()
  const [query, setQuery] = useState("")
  const [shelf, setShelf] = useState<CollectionId | "todas">("todas")

  const readIds = new Set(
    stories
      .filter((story) => state.lessons[storyReadKey(story.id)]?.completed)
      .map((story) => story.id),
  )
  const available = stories.filter((story) => !readIds.has(story.id))
  const next = available[0] ?? stories[0]

  const term = query.trim().toLowerCase()
  const shelves = shelvesFor(stories, shelf, term)
  const totalWords = stories.reduce((sum, story) => sum + story.glossarySize, 0)
  const totalMinutes = stories.reduce((sum, story) => sum + story.minutes, 0)

  return (
    <div className="flex flex-col gap-6 pb-4">
      <header className="card-soft flame-bg flex items-center gap-4 p-5">
        <Chama size={92} mood={entitled ? "feliz" : "animado"} />
        <div className="min-w-0">
          <h1 className="font-display flex flex-wrap items-center gap-2 text-2xl font-extrabold">
            Sala de leitura
            <span className="bg-primary/15 text-primary rounded-full px-3 py-1 text-[10px] font-extrabold tracking-wide uppercase">
              {entitled ? "liberada" : "assinatura"}
            </span>
          </h1>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
            {stories.length} histórias em {COLLECTIONS.length} coleções, de 3 a
            5 minutos cada. Toque em qualquer palavra para ver o significado em
            português e ouvir a pronúncia em inglês.
          </p>
        </div>
      </header>

      {!entitled && <StoriesPaywall />}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StoryStat
          icon={<Library className="size-4" />}
          value={`${stories.length}`}
          label="histórias"
        />
        <StoryStat
          icon={<BookOpen className="size-4" />}
          value={`${COLLECTIONS.length}`}
          label="coleções"
        />
        <StoryStat
          icon={<Languages className="size-4" />}
          value={`${totalWords}`}
          label="palavras explicadas"
        />
        <StoryStat
          icon={<Clock className="size-4" />}
          value={`${totalMinutes}`}
          label="minutos de leitura"
        />
      </div>

      {entitled && hydrated && next && (
        <section className="card-soft border-primary/40 p-5">
          <SectionTitle hint="continue por aqui">
            {readIds.size === 0 ? "Comece pela primeira" : "Continue a leitura"}
          </SectionTitle>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <StoryCover
              title={next.title}
              tagline={next.tagline}
              collection={next.collection}
              level={next.level}
              episode={next.episode}
              minutes={next.minutes}
              className="w-full sm:w-56"
            />
            <div className="min-w-0 flex-1">
              <p className="text-muted-foreground text-xs font-bold tracking-wide uppercase">
                {collectionNameOf(next.collection)} · episódio {next.episode} de{" "}
                {next.collectionSize} · {STORY_LEVEL_LABEL[next.level]}
              </p>
              <p className="font-display mt-1 text-lg font-extrabold">
                {next.title}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">{next.cast}</p>
              <p className="text-muted-foreground mt-2 text-sm">
                {readIds.size} de {stories.length} já lidas
                {readIds.size > 0 &&
                  ` · ${Math.round((readIds.size / stories.length) * 100)}%`}
              </p>
              <Link
                to="/historias/$storyId"
                params={{ storyId: next.id }}
                className="brand-gradient tap-target mt-3 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f]"
              >
                {readIds.size === 0 ? "Abrir a história" : "Ler agora"}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <label className="card-soft flex items-center gap-3 px-4 py-3">
        <Search className="text-muted-foreground size-4 shrink-0" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar história (ex: aeroporto, escritório, café…)"
          className="placeholder:text-muted-foreground w-full bg-transparent text-sm font-semibold outline-none placeholder:font-normal"
          aria-label="Buscar história"
        />
      </label>

      <div className="flex gap-2 overflow-x-auto pb-1">
        <ShelfChip
          active={shelf === "todas"}
          onClick={() => setShelf("todas")}
          title="Todas"
          subtitle={`${stories.length} histórias`}
        />
        {COLLECTIONS.map((collection) => {
          const count = stories.filter(
            (story) => story.collection === collection.id,
          ).length
          return (
            <ShelfChip
              key={collection.id}
              active={shelf === collection.id}
              onClick={() => setShelf(collection.id)}
              title={collection.name}
              subtitle={`${count} episódios`}
            />
          )
        })}
      </div>

      {shelves.map((group) => (
        <section key={group.id}>
          <SectionTitle hint={group.tagline}>{group.name}</SectionTitle>
          {group.stories.length === 0 ? (
            <div className="card-soft p-6 text-center">
              <p className="font-display font-extrabold">
                Nada encontrado aqui
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                Tente outra palavra, como “café”, “reunião” ou “voo”.
              </p>
            </div>
          ) : (
            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.stories.map((story) => {
                const done = readIds.has(story.id)
                return (
                  <li key={story.id}>
                    <StoryCard story={story} done={done} entitled={entitled} />
                  </li>
                )
              })}
            </ol>
          )}
        </section>
      ))}

      <section className="card-soft flex flex-col items-start gap-3 p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="text-primary size-5 shrink-0" />
          <p className="text-muted-foreground text-sm">
            Cada história lida conta no seu XP e na sua sequência, igual às
            lições.
          </p>
        </div>
        {entitled ? (
          <Link
            to="/licoes"
            className="tap-target hover:bg-muted inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-bold"
          >
            Ver as 130 lições <ArrowRight className="size-4" />
          </Link>
        ) : (
          <Link
            to="/assinatura"
            className="brand-gradient tap-target inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold text-[#07131f]"
          >
            <Lock className="size-4" /> Assinar por R$ 15/mês
          </Link>
        )}
      </section>
    </div>
  )
}

function collectionNameOf(id: CollectionId): string {
  return COLLECTIONS.find((collection) => collection.id === id)?.name ?? id
}

function shelvesFor(
  stories: StoryPreview[],
  shelf: CollectionId | "todas",
  term: string,
): { id: string; name: string; tagline: string; stories: StoryPreview[] }[] {
  const match = (story: StoryPreview) =>
    !term ||
    story.title.toLowerCase().includes(term) ||
    story.tagline.toLowerCase().includes(term) ||
    story.cast.toLowerCase().includes(term)

  const groups = COLLECTIONS.filter(
    (collection) => shelf === "todas" || collection.id === shelf,
  ).map((collection) => ({
    id: collection.id as string,
    name: collection.name,
    tagline: collection.tagline,
    stories: stories.filter(
      (story) => story.collection === collection.id && match(story),
    ),
  }))

  // A search across every shelf is easier to read as one list than as four that
  // mostly say "nada encontrado".
  if (term && shelf === "todas") {
    const found = stories.filter(match)
    return [
      {
        id: "busca",
        name: `Resultados para “${term}”`,
        tagline: `${found.length} ${found.length === 1 ? "história" : "histórias"}`,
        stories: found,
      },
    ]
  }

  return groups
}

function StoryStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="card-soft flex items-center gap-3 p-3">
      <span className="bg-primary/12 text-primary flex size-9 shrink-0 items-center justify-center rounded-xl">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="font-display block text-lg leading-tight font-extrabold">
          {value}
        </span>
        <span className="text-muted-foreground block truncate text-[11px] font-semibold">
          {label}
        </span>
      </span>
    </div>
  )
}

function ShelfChip({
  active,
  onClick,
  title,
  subtitle,
}: {
  active: boolean
  onClick: () => void
  title: string
  subtitle: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "tap-target flex shrink-0 flex-col rounded-2xl border px-4 py-2.5 text-left transition-colors",
        active
          ? "border-primary/50 bg-primary/12 text-primary"
          : "border-border bg-card text-muted-foreground hover:bg-muted",
      )}
    >
      <span className="text-sm font-extrabold">{title}</span>
      <span className="text-[11px] font-semibold">{subtitle}</span>
    </button>
  )
}

function StoryCard({
  story,
  done,
  entitled,
}: {
  story: StoryPreview
  done: boolean
  entitled: boolean
}) {
  const body = (
    <div
      className={cn(
        "card-soft card-tap h-full gap-3 p-4",
        done && "border-success/40",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-muted-foreground text-[11px] font-extrabold tracking-wide uppercase">
          {STORY_LEVEL_LABEL[story.level]}
        </span>
        {done ? (
          <span className="bg-success/15 text-success inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold">
            <Check className="size-3" /> LIDA
          </span>
        ) : (
          !entitled && (
            <span className="bg-warning/15 text-warning inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold">
              <Lock className="size-3" /> ASSINATURA
            </span>
          )
        )}
      </div>

      <StoryCover
        title={story.title}
        tagline={story.tagline}
        collection={story.collection}
        level={story.level}
        episode={story.episode}
        minutes={story.minutes}
        className="min-h-36"
      />

      <div className="min-w-0">
        <p className="text-muted-foreground text-[11px] font-semibold">
          {story.cast}
        </p>
        <p className="text-muted-foreground mt-1 text-[11px] font-bold">
          {STORY_LEVEL_TAGLINE[story.level]}
        </p>
        <p className="text-primary mt-2 inline-flex items-center gap-1.5 text-[11px] font-extrabold">
          <Languages className="size-3.5" /> {story.glossarySize} palavras para
          tocar
        </p>
      </div>
    </div>
  )

  if (!entitled) {
    return (
      <Link
        to="/assinatura"
        search={{ de: story.id }}
        className="tap-target block h-full"
      >
        {body}
      </Link>
    )
  }

  return (
    <Link
      to="/historias/$storyId"
      params={{ storyId: story.id }}
      className="tap-target block h-full"
    >
      {body}
    </Link>
  )
}
