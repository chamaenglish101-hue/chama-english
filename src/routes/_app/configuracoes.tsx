import { Link, createFileRoute, useRouter } from "@tanstack/react-router"
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  Clock,
  Flame,
  GraduationCap,
  Heart,
  LoaderCircle,
  Lock,
  LogOut,
  Sparkles,
  Trash2,
  TriangleAlert,
  Trophy,
  User,
  Volume2,
  Zap,
} from "lucide-react"
import { useEffect, useState } from "react"

import { SectionTitle, ThemeToggle } from "#/components/app-shell.tsx"
import { Chama } from "#/components/mascot.tsx"
import {
  LEVELS,
  TOTAL_LESSONS,
  TOTAL_MINUTES,
  type Level,
} from "#/data/catalog.ts"
import {
  SPOKEN_VOICE_LABEL,
  loadRecordedAudio,
  recordingProgress,
  speakEnglish,
  stopSpeaking,
} from "#/lib/audio.ts"
import {
  PLAN_PRICE_LABEL,
  formatPeriodEnd,
  freeLessonTotal,
  subscriptionStatusLabel,
} from "#/lib/billing.ts"
import {
  XP_PER_LEVEL,
  computeStats,
  computeStats as statsOf,
  eraseEverything,
  formatMinutes,
  resetProgress,
  saveProfile,
  saveSettings,
  useAppState,
  useHydrated,
} from "#/lib/progress.ts"
import { cn } from "#/lib/utils.ts"

export const Route = createFileRoute("/_app/configuracoes")({
  component: SettingsPage,
})

const GOALS = [10, 15, 20, 30, 45] as const

function SettingsPage() {
  const state = useAppState()
  const hydrated = useHydrated()
  const router = useRouter()
  const { user, billing } = Route.useRouteContext()
  const stats = computeStats(state)
  const periodEnd = formatPeriodEnd(billing.currentPeriodEnd)
  const planDetail = [
    billing.status
      ? subscriptionStatusLabel(billing.status)
      : "Sem assinatura ativa",
    periodEnd
      ? `${billing.cancelAtPeriodEnd ? "acesso até" : "renova em"} ${periodEnd}`
      : null,
  ]
    .filter(Boolean)
    .join(" · ")
  const [nameDraft, setNameDraft] = useState<string | null>(null)
  const name = nameDraft ?? state.profile.name
  const [saved, setSaved] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [dialog, setDialog] = useState<"reset" | "erase" | null>(null)

  function submitName() {
    saveProfile({ name: name.trim().slice(0, 28) })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2200)
  }

  /**
   * Signing out has to feel instant, so the two things that can make it slow are
   * both taken off the critical path: the two requests to the server run together
   * instead of one after the other, and the screen stops waiting on the router
   * refresh — the half-second window while the app re-checks who is still signed
   * in no longer holds the button on "Saindo…".
   */
  async function signOut() {
    setLeaving(true)

    let response: Response
    try {
      const [me] = await Promise.all([
        fetch("/api/auth/me", { headers: { accept: "application/json" } }),
        // Warms the browser connection to the sign-out route while the CSRF token
        // is still on its way, so the second call is not a cold start.
        fetch("/api/auth/logout", { method: "OPTIONS" }).catch(() => undefined),
      ])
      if (!me.ok) {
        setLeaving(false)
        return
      }
      const payload = (await me.json()) as { csrf_token?: string }
      response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: payload.csrf_token
          ? { "X-CSRF-Token": payload.csrf_token }
          : undefined,
      })
    } catch {
      setLeaving(false)
      return
    }

    if (!response.ok) {
      setLeaving(false)
      return
    }

    // Ahead of the refresh, not after it: the redirect is what the person saw
    // themselves ask for, and it must not queue behind a background re-check.
    void router.navigate({ to: "/login", replace: true })
    void router.invalidate()
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="card-soft flame-bg flex items-center gap-4 p-5">
        <Chama size={96} mood={stats.done > 0 ? "feliz" : "animado"} />
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-extrabold">
            Configurações e perfil
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Nível {stats.level} · {stats.xp} XP · {stats.done} de{" "}
            {TOTAL_LESSONS} lições concluídas.
          </p>
        </div>
      </header>

      {/* ------------------------------------------------------- conta */}
      <section className="card-soft p-5">
        <SectionTitle hint="login com Google">Sua conta</SectionTitle>
        <div className="flex items-center gap-3">
          <span className="bg-primary/15 text-primary flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt=""
                referrerPolicy="no-referrer"
                className="size-12 object-cover"
              />
            ) : (
              <User className="size-5" />
            )}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display truncate text-sm font-extrabold">
              {user?.displayName ?? "Conta conectada"}
            </p>
            <p className="text-muted-foreground truncate text-xs font-semibold">
              {user?.email ?? ""}
            </p>
          </div>
        </div>
        <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
          Seu progresso continua salvo neste aparelho. Se você sair, ele
          continua aqui para a próxima vez que entrar.
        </p>
        <button
          type="button"
          onClick={() => void signOut()}
          disabled={leaving}
          className="tap-target hover:bg-muted mt-3 inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 text-sm font-bold disabled:opacity-60"
        >
          {leaving ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <LogOut className="size-4" />
          )}
          {leaving ? "Saindo…" : "Sair da conta"}
        </button>
      </section>

      {/* ------------------------------------------------------- plano */}
      <section className="card-soft p-5">
        <SectionTitle hint="assinatura mensal">Seu plano</SectionTitle>
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-2xl",
              billing.entitled
                ? "bg-success/15 text-success"
                : "bg-warning/15 text-warning",
            )}
          >
            {billing.entitled ? (
              <BadgeCheck className="size-5" />
            ) : (
              <Lock className="size-5" />
            )}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-sm font-extrabold">
              {billing.entitled ? "Acesso completo liberado" : "Plano gratuito"}
            </p>
            <p className="text-muted-foreground text-xs font-semibold">
              {billing.entitled
                ? planDetail
                : `${freeLessonTotal()} lições iniciantes liberadas`}
            </p>
          </div>
        </div>
        <Link
          to="/assinatura"
          className="brand-gradient tap-target mt-3 inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-extrabold text-[#07131f]"
        >
          <Sparkles className="size-4" />
          {billing.entitled
            ? "Gerenciar assinatura"
            : `Assinar por ${PLAN_PRICE_LABEL} por mês`}
        </Link>
      </section>

      {/* ------------------------------------------------------- perfil */}
      <section className="card-soft p-5">
        <SectionTitle hint="salvo neste aparelho">Seu perfil</SectionTitle>
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <User className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <label
              className="text-[11px] font-extrabold tracking-wide text-muted-foreground uppercase"
              htmlFor="nome"
            >
              Como a Chama deve te chamar?
            </label>
            <input
              id="nome"
              value={name}
              onChange={(event) => setNameDraft(event.target.value)}
              onBlur={submitName}
              maxLength={28}
              placeholder="Seu nome"
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-semibold outline-none focus:border-primary"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={submitName}
          className="tap-target mt-3 inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 text-sm font-bold hover:bg-muted"
        >
          {saved ? (
            <>
              <Check className="size-4 text-success" /> Nome salvo
            </>
          ) : (
            "Salvar nome"
          )}
        </button>

        <div className="mt-5">
          <p className="text-[11px] font-extrabold tracking-wide text-muted-foreground uppercase">
            Seu nível atual
          </p>
          <div className="mt-2 grid gap-2 md:grid-cols-3">
            {LEVELS.map((level) => (
              <button
                key={level.id}
                type="button"
                onClick={() => saveProfile({ level: level.id as Level })}
                aria-pressed={state.profile.level === level.id}
                className={cn(
                  "tap-target rounded-2xl border px-4 py-3 text-left transition-colors",
                  state.profile.level === level.id
                    ? "border-primary/50 bg-primary/12"
                    : "border-border bg-card hover:bg-muted",
                )}
              >
                <span className="block font-display font-extrabold">
                  {level.label}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  {level.cefr} · {level.total} lições
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[11px] font-extrabold tracking-wide text-muted-foreground uppercase">
            Meta diária de estudo
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {GOALS.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => saveProfile({ dailyGoal: goal })}
                aria-pressed={state.profile.dailyGoal === goal}
                className={cn(
                  "tap-target rounded-2xl border px-4 py-2 text-sm font-extrabold transition-colors",
                  state.profile.dailyGoal === goal
                    ? "border-primary/50 bg-primary/12 text-primary"
                    : "border-border bg-card text-muted-foreground hover:bg-muted",
                )}
              >
                {goal} min
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ aparência/estudo */}
      <section className="card-soft p-5">
        <SectionTitle hint="modo escuro automático">Aparência</SectionTitle>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-display font-extrabold">Tema do aplicativo</p>
            <p className="text-sm text-muted-foreground">
              A opção “Sistema” segue o modo escuro do seu Android, iPhone ou
              computador.
            </p>
          </div>
          {hydrated ? (
            <ThemeToggle />
          ) : (
            <div className="h-9 w-28 rounded-full border border-border bg-muted/70" />
          )}
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <PreferenceRow
            title="Mostrar tradução dos exemplos"
            description="Nas lições, exibe a tradução em português abaixo de cada frase em inglês."
            enabled={state.settings.showTranslation}
            onToggle={() =>
              saveSettings({ showTranslation: !state.settings.showTranslation })
            }
          />
          <PreferenceRow
            title="Comemorações e XP"
            description="Mostra a Chama comemorando e o resumo de pontos ao terminar quiz e lições."
            enabled={state.settings.celebration}
            onToggle={() =>
              saveSettings({ celebration: !state.settings.celebration })
            }
          />
        </div>
      </section>

      {/* ------------------------------------------------------- voz inglesa */}
      <section className="card-soft p-5">
        <SectionTitle hint="já vem com o app, sem instalar nada">
          Voz em inglês
        </SectionTitle>
        <VoicePicker />
      </section>

      {/* ---------------------------------------------------- progresso */}
      <section className="card-soft p-5">
        <SectionTitle hint="tudo local, nada em nuvem">
          Seu progresso
        </SectionTitle>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <MiniStat
            icon={<Zap className="size-4" />}
            value={`${stats.xp} XP`}
            label={`Nível ${stats.level}`}
          />
          <MiniStat
            icon={<Flame className="size-4" />}
            value={`${stats.streak} dias`}
            label="Sequência atual"
          />
          <MiniStat
            icon={<Clock className="size-4" />}
            value={formatMinutes(stats.minutes)}
            label="Tempo somado"
          />
          <MiniStat
            icon={<Trophy className="size-4" />}
            value={`${stats.quizzesTaken}`}
            label="Quizzes feitos"
          />
        </div>

        <div className="mt-5 flex flex-col gap-2">
          {stats.byLevel.map((level) => (
            <div key={level.id} className="flex items-center gap-3">
              <span className="w-28 shrink-0 text-xs font-extrabold">
                {level.label}
              </span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="brand-gradient h-full rounded-full"
                  style={{ width: `${Math.max(level.percent, 2)}%` }}
                />
              </div>
              <span className="w-16 shrink-0 text-right text-xs font-bold text-muted-foreground">
                {level.done}/{level.total}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Faltam {Math.max(XP_PER_LEVEL - stats.xpIntoLevel, 0)} XP para o nível{" "}
          {stats.level + 1} de proficiência. São {TOTAL_MINUTES} minutos de
          conteúdo nas {TOTAL_LESSONS} lições.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setDialog("reset")}
            className="tap-target inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-bold hover:bg-muted"
          >
            <GraduationCap className="size-4" /> Zerar progresso
          </button>
          <button
            type="button"
            onClick={() => setDialog("erase")}
            className="tap-target inline-flex items-center gap-2 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-2.5 text-sm font-bold text-destructive hover:bg-destructive/15"
          >
            <Trash2 className="size-4" /> Apagar perfil e dados
          </button>
        </div>
      </section>

      {/* ------------------------------------------------------ histórico */}
      {state.quizzes.length > 0 && (
        <section className="card-soft p-5">
          <SectionTitle hint={`${state.quizzes.length} registros`}>
            Últimos quizzes
          </SectionTitle>
          <ul className="flex flex-col gap-2">
            {state.quizzes.slice(0, 6).map((quiz) => {
              const percent = quiz.total
                ? Math.round((quiz.correct / quiz.total) * 100)
                : 0
              return (
                <li
                  key={quiz.id}
                  className="flex items-center gap-3 rounded-xl border border-border px-3 py-2"
                >
                  <span
                    className={cn(
                      "flex size-9 items-center justify-center rounded-xl font-display text-xs font-extrabold",
                      percent >= 80
                        ? "bg-success/15 text-success"
                        : percent >= 50
                          ? "bg-warning/15 text-warning"
                          : "bg-destructive/12 text-destructive",
                    )}
                  >
                    {percent}%
                  </span>
                  <span className="flex-1 text-sm font-bold">
                    {LEVELS.find((level) => level.id === quiz.level)?.label}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {quiz.correct}/{quiz.total} ·{" "}
                    {new Date(quiz.at).toLocaleDateString("pt-BR")}
                  </span>
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {/* --------------------------------------------------------- sobre */}
      <section className="card-soft p-5">
        <SectionTitle>Sobre o app</SectionTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Chama English é um curso completo em português para quem quer aprender
          inglês: 20 lições iniciantes, 40 intermediárias e 70 avançadas, com
          explicações, exemplos e prática corrigida na hora. Tudo funciona no
          navegador do celular e no computador, com o progresso salvo no seu
          aparelho.
        </p>
        <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
          <Heart className="mt-0.5 size-3.5 shrink-0 text-destructive" />
          Sua conta vem do login com Google — usamos apenas nome, e-mail e foto
          para identificar você. O progresso fica salvo neste aparelho, então
          apagar o perfil é uma ação local e definitiva.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/licoes"
            className="tap-target inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 text-sm font-bold hover:bg-muted"
          >
            <BookOpen className="size-4" /> Ir para as lições
          </Link>
          <Link
            to="/estudar"
            className="tap-target inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 text-sm font-bold hover:bg-muted"
          >
            Estudar agora <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------- instalar no celular */}
      <section className="card-soft p-5">
        <SectionTitle>Instalar no celular</SectionTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">
          O Chama English abre como um app de verdade: com ícone na tela inicial
          e em tela cheia, sem barra de endereço. Não precisa baixar nada na
          loja.
        </p>
        <ol className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>
            <span className="font-bold text-foreground">Android (Chrome):</span>{" "}
            toque no menu ⋮ e escolha “Instalar aplicativo” ou “Adicionar à tela
            inicial”.
          </li>
          <li>
            <span className="font-bold text-foreground">iPhone (Safari):</span>{" "}
            toque em Compartilhar e depois em “Adicionar à Tela de Início”.
          </li>
        </ol>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Depois de instalado, o app abre direto do ícone e mostra um aviso
          amigável quando você estiver sem internet.
        </p>
      </section>

      {dialog && (
        <ConfirmDialog
          tone={dialog === "erase" ? "danger" : "warning"}
          title={
            dialog === "erase"
              ? "Apagar perfil e dados deste aparelho?"
              : "Zerar todo o progresso?"
          }
          description={
            dialog === "erase"
              ? "Isso remove seu nome, preferências, XP, sequência de dias, lições concluídas e histórico de quizzes. Não é possível desfazer."
              : "Suas lições concluídas, XP, sequência e histórico de quizzes voltam ao início. Seu nome e suas preferências são mantidos."
          }
          confirmLabel={
            dialog === "erase" ? "Sim, apagar tudo" : "Sim, zerar progresso"
          }
          onCancel={() => setDialog(null)}
          onConfirm={() => {
            if (dialog === "erase") {
              eraseEverything()
            } else {
              resetProgress()
            }
            setDialog(null)
          }}
        />
      )}
    </div>
  )
}

function MiniStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-border p-3">
      <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-muted-foreground uppercase">
        {icon} {label}
      </span>
      <span className="mt-1 block font-display text-lg font-extrabold">
        {value}
      </span>
    </div>
  )
}

/**
 * A única voz inglesa do app: a Cherry, gravada no servidor.
 *
 * Antes havia uma lista de vozes para escolher; agora o inglês é sempre a mesma
 * gravação, então esta tela só mostra qual é e deixa ouvir um exemplo.
 */
/** Frases do começo do curso, usadas para o exemplo da voz. */
const SAMPLE_LINES = [
  "How do you spell your name?",
  "Can you repeat, please?",
  "This is my brother and his wife.",
  "I wake up at six and I have breakfast.",
]

function VoicePicker() {
  const [progress, setProgress] = useState<{
    ready: number
    total: number
  } | null>(null)
  const [testing, setTesting] = useState(false)

  // Leaving the screen must not leave a voice talking to an empty page.
  useEffect(() => stopSpeaking, [])

  useEffect(() => {
    let alive = true
    void loadRecordedAudio().then(() => {
      if (alive) setProgress(recordingProgress())
    })
    return () => {
      alive = false
    }
  }, [])

  function preview() {
    // Uma fala do próprio curso: tem gravação garantida, então o exemplo sempre soa.
    const index = Math.floor(Math.random() * SAMPLE_LINES.length)
    setTesting(true)
    const started = speakEnglish(SAMPLE_LINES[index], {
      onEnd: () => setTesting(false),
    })
    if (!started) setTesting(false)
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Seu inglês é sempre a voz da Cherry, gravada e tocada pelo próprio site.
        Ela funciona em qualquer aparelho, sem instalar nada e sem depender da
        voz que o seu celular ou computador tem.
      </p>
      {progress && progress.total > 0 && (
        <p className="text-xs font-semibold text-muted-foreground">
          {progress.ready >= progress.total
            ? "Todas as falas do curso já têm voz."
            : `A voz está sendo gravada: ${progress.ready} de ${progress.total} falas já tocam. As demais aparecem escritas até chegarem.`}
        </p>
      )}

      <button
        type="button"
        onClick={preview}
        aria-pressed
        className="tap-target border-primary/50 bg-primary/12 flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors hover:bg-primary/16"
      >
        <span className="bg-primary/20 text-primary flex size-9 shrink-0 items-center justify-center rounded-xl">
          <Volume2 className="size-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="font-display block truncate text-sm font-extrabold">
            {SPOKEN_VOICE_LABEL}
          </span>
          <span className="text-muted-foreground block text-xs font-semibold">
            {testing
              ? "Tocando agora…"
              : "Sua voz nas lições · toque para ouvir"}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          {progress && progress.ready > 0 && (
            <span className="text-muted-foreground text-[11px] font-bold tabular-nums">
              {progress.ready} falas
            </span>
          )}
          <Check className="text-primary size-5" />
        </span>
      </button>
    </div>
  )
}

function PreferenceRow({
  title,
  description,
  enabled,
  onToggle,
}: {
  title: string
  description: string
  enabled: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-border p-4">
      <div className="min-w-0">
        <p className="font-display font-extrabold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={title}
        onClick={onToggle}
        className={cn(
          "tap-target relative h-7 w-12 shrink-0 rounded-full border transition-colors",
          enabled
            ? "border-primary/50 bg-primary/30"
            : "border-border bg-muted",
        )}
      >
        <span
          className={cn(
            "absolute top-1 size-5 rounded-full transition-all",
            enabled ? "left-6 bg-primary" : "left-1 bg-muted-foreground",
          )}
        />
      </button>
    </div>
  )
}

function ConfirmDialog({
  title,
  description,
  confirmLabel,
  tone,
  onCancel,
  onConfirm,
}: {
  title: string
  description: string
  confirmLabel: string
  tone: "warning" | "danger"
  onCancel: () => void
  onConfirm: () => void
}) {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onCancel()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onCancel])

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-background/70 p-4 backdrop-blur-sm md:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        className="safe-bottom card-soft w-full max-w-md p-5 shadow-2xl"
      >
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-2xl",
              tone === "danger"
                ? "bg-destructive/12 text-destructive"
                : "bg-warning/15 text-warning",
            )}
          >
            <TriangleAlert className="size-5" />
          </span>
          <div>
            <h2
              id="confirm-title"
              className="font-display text-lg font-extrabold"
            >
              {title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 md:flex-row md:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="tap-target rounded-2xl border border-border bg-card px-4 py-3 text-sm font-bold hover:bg-muted"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            autoFocus
            className={cn(
              "tap-target rounded-2xl px-4 py-3 text-sm font-extrabold transition-colors",
              tone === "danger"
                ? "bg-destructive text-white hover:bg-destructive/90"
                : "brand-gradient text-[#07131f]",
            )}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export const settingsStatsHelper = statsOf
