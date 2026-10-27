import { useGSAP } from "@gsap/react"
import { Link, createFileRoute } from "@tanstack/react-router"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  BadgeCheck,
  Bookmark,
  Calendar,
  Check,
  Flame,
  GraduationCap,
  Lightbulb,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Wallet,
  Zap,
} from "lucide-react"
import { useRef } from "react"

import { SectionTitle, StatTile } from "#/components/app-shell.tsx"
import { Chama } from "#/components/mascot.tsx"
import { LEVELS, type Level, lessonById } from "#/data/catalog.ts"
import {
  PLAN_PRICE_LABEL,
  freeLessonTotal,
  isLessonUnlocked,
} from "#/lib/billing.ts"
import {
  XP_PER_LEVEL,
  computeStats,
  dayKey,
  formatMinutes,
  greetingFor,
  nextLesson,
  studiedToday,
  useAppState,
} from "#/lib/progress.ts"
import { cn } from "#/lib/utils.ts"

export const Route = createFileRoute("/_app/")({ component: HomePage })

const LEVEL_ACCENT: Record<
  Level,
  { bar: string; chip: string; emoji: string; soft: string }
> = {
  iniciante: {
    bar: "from-cyan to-flame-1",
    chip: "bg-cyan/15 text-cyan",
    soft: "from-cyan/20",
    emoji: "🌱",
  },
  intermediario: {
    bar: "from-flame-1 to-flame-2",
    chip: "bg-flame-1/15 text-flame-1",
    soft: "from-flame-1/20",
    emoji: "🚀",
  },
  avancado: {
    bar: "from-flame-2 to-flame-3",
    chip: "bg-flame-3/15 text-flame-3",
    soft: "from-flame-3/20",
    emoji: "🏆",
  },
}

function HomePage() {
  const state = useAppState()
  const stats = computeStats(state)
  const rootRef = useRef<HTMLDivElement>(null)
  const { billing } = Route.useRouteContext()
  const upcoming = nextLesson(state)
  const upcomingLocked = upcoming
    ? !isLessonUnlocked(upcoming.id, billing.entitled)
    : false
  const today = dayKey()
  const minutesToday = Object.entries(state.lessons)
    .filter(([, progress]) => progress.at.slice(0, 10) === today)
    .reduce((sum, [id]) => sum + (lessonById(id)?.minutes ?? 0), 0)
  const goal = Math.max(state.profile.dailyGoal, 5)
  const goalPercent = Math.min(100, Math.round((minutesToday / goal) * 100))
  const keptStreak = studiedToday(state)
  const name = state.profile.name.trim()

  const lastWeek = Array.from({ length: 7 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - index))
    const key = dayKey(date)
    return {
      key,
      label: date
        .toLocaleDateString("pt-BR", { weekday: "narrow" })
        .toUpperCase(),
      studied: state.days.includes(key),
    }
  })

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
      const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]")

      if (reduced) {
        gsap.set(blocks, { autoAlpha: 1, y: 0 })
        gsap.set("[data-bar]", { scaleX: 1 })
        return
      }

      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: block, start: "top 92%", once: true },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>("[data-bar]").forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 95%", once: true },
          },
        )
      })
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="flex flex-col gap-8">
      {/* ------------------------------------------------------------ hero */}
      <section className="card-soft flame-bg relative overflow-hidden p-5 md:p-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="order-2 min-w-0 flex-1 md:order-1">
            <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              {greetingFor()}
              {name ? `, ${name}` : ""}!
            </p>
            <h1 className="font-display mt-1 text-2xl leading-tight font-extrabold text-balance md:text-4xl">
              {keptStreak
                ? "A chama está acesa hoje também 🔥"
                : "Vamos acender a chama do seu inglês?"}
            </h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {upcoming
                ? upcomingLocked
                  ? `Sua próxima lição é “${upcoming.title}” — ela faz parte do curso completo.`
                  : `Sua próxima lição é “${upcoming.title}” — ${upcoming.minutes} minutos para avançar no nível ${LEVELS.find((level) => level.id === upcoming.level)?.label}.`
                : "Você concluiu todas as lições. Hora de revisar com o Quiz!"}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {upcoming &&
                (upcomingLocked ? (
                  <Link
                    to="/assinatura"
                    search={{ de: upcoming.id }}
                    className="brand-gradient tap-target inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f] shadow-lg shadow-flame-1/25 transition-transform active:scale-[0.98]"
                  >
                    <Wallet className="size-4" /> Liberar o curso completo
                    <ArrowRight className="size-4" />
                  </Link>
                ) : (
                  <Link
                    to="/estudar/$licaoId"
                    params={{ licaoId: upcoming.id }}
                    className="brand-gradient tap-target inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f] shadow-lg shadow-flame-1/25 transition-transform active:scale-[0.98]"
                  >
                    {stats.done === 0 ? "Começar agora" : "Continuar lição"}
                    <ArrowRight className="size-4" />
                  </Link>
                ))}
              <Link
                to="/licoes"
                className="tap-target inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-bold transition-colors hover:bg-muted"
              >
                Ver todas as 130 lições
              </Link>
            </div>
          </div>

          <div className="order-1 flex shrink-0 items-end justify-center gap-3 md:order-2">
            <div className="relative max-w-[190px] rounded-2xl border border-border bg-card/90 px-3 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
              {stats.streak > 1
                ? `${stats.streak} dias seguidos! Não quebre a corrente.`
                : "Faça uma lição por dia e eu fico cada vez maior."}
              <span className="absolute -right-1 bottom-2 size-3 rotate-45 border-r border-b border-border bg-card/90" />
            </div>
            <Chama
              mood={
                stats.streak >= 3
                  ? "comemorando"
                  : stats.done === 0
                    ? "animado"
                    : "feliz"
              }
              size={148}
            />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- stats */}
      <section data-reveal className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatTile
          icon={<Zap className="size-4" />}
          value={`${stats.xp} XP`}
          label={`Nível ${stats.level} de proficiência`}
        />
        <StatTile
          icon={<Flame className="size-4" />}
          value={`${stats.streak} dias`}
          label={`Recorde: ${stats.bestStreak} dias`}
          tone="warning"
        />
        <StatTile
          icon={<GraduationCap className="size-4" />}
          value={`${stats.done}/130`}
          label="Lições concluídas"
          tone="iris"
        />
        <StatTile
          icon={<TrendingUp className="size-4" />}
          value={formatMinutes(stats.minutes)}
          label="Tempo de estudo somado"
          tone="success"
        />
      </section>

      {/* ------------------------------------------------------- daily goal */}
      <section data-reveal className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
        <div className="card-soft p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <SectionTitle hint={`${minutesToday} de ${goal} min`}>
                Meta de hoje
              </SectionTitle>
              <p className="text-sm text-muted-foreground">
                {goalPercent >= 100
                  ? "Meta batida! A Chama está orgulhosa. 🎉"
                  : `Faltam ${Math.max(goal - minutesToday, 0)} minutos para fechar o dia.`}
              </p>
            </div>
            <span
              className={cn(
                "flex size-14 shrink-0 items-center justify-center rounded-full border-4 font-display text-sm font-extrabold",
                goalPercent >= 100
                  ? "border-success/40 text-success"
                  : "border-primary/30 text-primary",
              )}
            >
              {goalPercent}%
            </span>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-muted">
            <div
              className="brand-gradient h-full origin-left rounded-full"
              style={{ width: `${Math.max(goalPercent, 3)}%` }}
              data-bar
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-2">
            <p className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
              <Calendar className="size-3.5" /> Últimos 7 dias
            </p>
            <div className="flex items-center gap-1.5">
              {lastWeek.map((day) => (
                <span
                  key={day.key}
                  title={day.studied ? "Você estudou" : "Sem estudo"}
                  className={cn(
                    "flex size-7 items-center justify-center rounded-xl text-[10px] font-extrabold",
                    day.studied
                      ? "brand-gradient text-[#07131f]"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {day.studied ? <Check className="size-3.5" /> : day.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="card-soft flex items-center gap-4 p-5">
          <Chama
            size={104}
            mood={goalPercent >= 100 ? "comemorando" : "pensando"}
          />
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary uppercase">
              <Lightbulb className="size-3.5" /> Dica da Chama
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Estude em blocos curtos: 15 minutos por dia rendem mais que três
              horas no domingo. Fale em voz alta cada exemplo — o ouvido aprende
              junto com a boca.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- plano */}
      <section
        data-reveal
        className={cn(
          "card-soft flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between",
          billing.entitled ? "border-success/40" : "border-primary/30",
        )}
      >
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-2xl",
              billing.entitled
                ? "bg-success/15 text-success"
                : "bg-primary/15 text-primary",
            )}
          >
            {billing.entitled ? (
              <BadgeCheck className="size-5" />
            ) : (
              <Lock className="size-5" />
            )}
          </span>
          <div className="min-w-0">
            <p className="font-display font-extrabold">
              {billing.entitled
                ? "Assinatura ativa: as 130 lições liberadas"
                : `Plano gratuito: ${freeLessonTotal()} lições iniciantes`}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {billing.entitled
                ? "Você pode trocar o cartão ou cancelar quando quiser."
                : `As outras lições fazem parte da assinatura de ${PLAN_PRICE_LABEL} por mês.`}
            </p>
          </div>
        </div>
        <Link
          to="/assinatura"
          className={
            billing.entitled
              ? "tap-target inline-flex shrink-0 items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-bold hover:bg-muted"
              : "brand-gradient tap-target inline-flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-extrabold text-[#07131f]"
          }
        >
          <Wallet className="size-4" />
          {billing.entitled ? "Gerenciar assinatura" : "Ver o plano completo"}
        </Link>
      </section>

      {/* ----------------------------------------------------------- levels */}
      <section data-reveal>
        <SectionTitle hint="20 + 40 + 70 lições">Trilha completa</SectionTitle>
        <div className="grid gap-3 md:grid-cols-3">
          {LEVELS.map((level) => {
            const stat = stats.byLevel.find((item) => item.id === level.id)
            const accent = LEVEL_ACCENT[level.id]
            const done = stat?.done ?? 0
            const percent = stat?.percent ?? 0
            return (
              <div
                key={level.id}
                className={cn(
                  "card-soft card-tap tap-target relative overflow-hidden bg-gradient-to-b to-transparent p-5",
                  accent.soft,
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[11px] font-extrabold",
                      accent.chip,
                    )}
                  >
                    {level.cefr}
                  </span>
                  <span className="text-2xl" aria-hidden="true">
                    {accent.emoji}
                  </span>
                </div>
                <h3 className="font-display mt-3 text-lg font-extrabold">
                  {level.label}
                </h3>
                <p className="text-xs font-semibold text-muted-foreground">
                  {level.english} · {level.total} lições
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {level.tagline}
                </p>

                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full origin-left rounded-full bg-gradient-to-r",
                      accent.bar,
                    )}
                    style={{ width: `${Math.max(percent, 2)}%` }}
                    data-bar
                  />
                </div>
                <p className="mt-2 text-xs font-bold text-muted-foreground">
                  {done} de {level.total} concluídas · {percent}%
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <Link
                    to="/licoes"
                    search={{ nivel: level.id }}
                    className="tap-target inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-bold transition-colors hover:bg-muted"
                  >
                    Abrir nível <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* --------------------------------------------------------- shortcuts */}
      <section data-reveal className="grid gap-3 md:grid-cols-3">
        <Link
          to="/quiz"
          className="card-soft card-tap tap-target flex items-center gap-4 p-5"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl bg-warning/15 text-warning">
            <Trophy className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display font-extrabold">
              Quiz rápido
            </span>
            <span className="block text-xs font-semibold text-muted-foreground">
              {stats.quizzesTaken
                ? `${stats.quizzesTaken} quizzes feitos · melhor nota ${stats.bestQuizScore}%`
                : "Teste o que você já aprendeu em 5 perguntas"}
            </span>
          </span>
          <ArrowRight className="size-4 text-muted-foreground" />
        </Link>

        <Link
          to="/estudar"
          className="card-soft card-tap tap-target flex items-center gap-4 p-5"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl bg-iris/15 text-iris">
            <Target className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display font-extrabold">
              Modo estudar
            </span>
            <span className="block text-xs font-semibold text-muted-foreground">
              Revisão rápida e vocabulário salvo
            </span>
          </span>
          <ArrowRight className="size-4 text-muted-foreground" />
        </Link>

        <Link
          to="/configuracoes"
          className="card-soft card-tap tap-target flex items-center gap-4 p-5"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl bg-success/15 text-success">
            <Bookmark className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display font-extrabold">
              {name ? `Perfil de ${name}` : "Personalize seu estudo"}
            </span>
            <span className="block text-xs font-semibold text-muted-foreground">
              Nome, meta diária, tema e dados locais
            </span>
          </span>
          <ArrowRight className="size-4 text-muted-foreground" />
        </Link>
      </section>

      <section
        data-reveal
        className="card-soft flex flex-col items-center gap-3 p-6 text-center"
      >
        <Sparkles className="size-5 text-primary" />
        <p className="max-w-xl text-sm text-muted-foreground">
          Seu progresso é salvo neste aparelho, então você continua exatamente
          de onde parou, no ônibus ou em casa. Ao chegar em {XP_PER_LEVEL} XP
          você sobe de nível e a Chama ganha um novo acessório.
        </p>
      </section>
    </div>
  )
}
