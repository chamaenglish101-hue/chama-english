import { Link, createFileRoute, useRouter } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarClock,
  Check,
  CircleAlert,
  CreditCard,
  Flame,
  Info,
  LoaderCircle,
  Lock,
  QrCode,
  RefreshCw,
  Sparkles,
  TriangleAlert,
  Wallet,
} from "lucide-react"
import { useEffect, useState } from "react"

import { SectionTitle } from "#/components/app-shell.tsx"
import { Chama } from "#/components/mascot.tsx"
import { lessonById } from "#/data/catalog.ts"
import {
  fetchBillingStatus,
  openBillingPortal,
  refreshBillingStatus,
  startOnceCheckout,
  startSubscriptionCheckout,
} from "#/lib/billing.functions.ts"
import {
  PLAN_PERIOD_LABEL,
  PLAN_PRICE_LABEL,
  ONCE_METHODS,
  ONCE_PERIOD_LABEL,
  ONCE_PRICE_LABEL,
  FREE_LESSON_IDS,
  formatPeriodEnd,
  subscriptionStatusLabel,
} from "#/lib/billing.ts"
import { cn } from "#/lib/utils.ts"

type CheckoutFlag = "sucesso" | "cancelado"

export const Route = createFileRoute("/_app/assinatura")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { de?: string; checkout?: CheckoutFlag } => ({
    de: typeof search.de === "string" ? search.de : undefined,
    checkout:
      search.checkout === "sucesso" || search.checkout === "cancelado"
        ? search.checkout
        : undefined,
  }),
  /**
   * This is the one screen that needs the full answer — including which one-time
   * method the account can charge with — so it is the one screen that asks for it.
   * Marking it here also means an arriving payment is re-read by the router on the
   * way back from the checkout, instead of relying on a page-load side effect.
   */
  loader: () => fetchBillingStatus(),
  staleTime: 0,
  component: SubscriptionPage,
})

const FAILURE_COPY = {
  unauthenticated: "Sua sessão expirou. Entre de novo para continuar.",
  unconfigured:
    "O pagamento ainda não está configurado neste ambiente. Fale com o suporte para liberar a assinatura.",
  failed:
    "Não conseguimos abrir o checkout agora. Tente de novo em alguns instantes.",
  no_customer:
    "Ainda não existe uma assinatura para gerenciar. Assine primeiro para abrir o gerenciamento.",
} as const

function SubscriptionPage() {
  // The plan this screen shows was read by this route's own loader, so a slow or
  // unavailable payment provider can never hold the rest of the app.
  const billing = Route.useLoaderData()
  const { de, checkout } = Route.useSearch()
  const router = useRouter()
  const once =
    billing.onceMethod !== null ? ONCE_METHODS[billing.onceMethod] : null
  const [busy, setBusy] = useState<"checkout" | "once" | "portal" | null>(null)
  const [error, setError] = useState<string | null>(null)

  const returning = checkout === "sucesso"
  const waitingForWebhook = returning && !billing.entitled
  const origin = de ? lessonById(de) : undefined

  // The webhook can land after the browser comes back, so a fresh payment is
  // confirmed by re-reading the server, never by the redirect itself.
  useEffect(() => {
    if (!waitingForWebhook) return
    const timer = window.setTimeout(() => {
      void refreshBillingStatus().then(() => router.invalidate())
    }, 2500)
    return () => window.clearTimeout(timer)
  }, [waitingForWebhook, router, billing.status])

  async function openTab(
    run: () => Promise<
      { ok: true; url: string } | { ok: false; reason: string }
    >,
    kind: "checkout" | "once" | "portal",
  ) {
    setError(null)
    setBusy(kind)
    // Opened synchronously on the click — a window.open after an await is what
    // popup blockers kill.
    const tab = window.open("about:blank", "_blank")
    try {
      const result = await run()
      if (result.ok) {
        if (tab) tab.location.href = result.url
        else window.location.href = result.url
        return
      }
      if (tab) tab.close()
      setError(
        FAILURE_COPY[result.reason as keyof typeof FAILURE_COPY] ??
          FAILURE_COPY.failed,
      )
    } catch {
      if (tab) tab.close()
      setError(FAILURE_COPY.failed)
    } finally {
      setBusy(null)
    }
  }

  const periodEnd = formatPeriodEnd(billing.currentPeriodEnd)

  return (
    <div className="flex flex-col gap-6">
      <header className="card-soft flame-bg flex items-center gap-4 p-5">
        <Chama size={96} mood={billing.entitled ? "comemorando" : "animado"} />
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-extrabold">
            Sua assinatura
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            {billing.entitled
              ? "Curso completo liberado. Bom estudo!"
              : `As ${FREE_LESSON_IDS.length} primeiras lições iniciantes são grátis. O resto do curso fica por ${PLAN_PRICE_LABEL} ${PLAN_PERIOD_LABEL} no cartão, ou ${ONCE_PRICE_LABEL} ${ONCE_PERIOD_LABEL} à vista.`}
          </p>
        </div>
      </header>

      {returning && (
        <section
          className={cn(
            "card-soft flex items-start gap-3 p-4",
            waitingForWebhook ? "border-warning/40" : "border-success/40",
          )}
        >
          {waitingForWebhook ? (
            <LoaderCircle className="text-warning mt-0.5 size-5 shrink-0 animate-spin" />
          ) : (
            <BadgeCheck className="text-success mt-0.5 size-5 shrink-0" />
          )}
          <div className="min-w-0 flex-1">
            <p className="font-display font-extrabold">
              {waitingForWebhook
                ? "Confirmando seu pagamento…"
                : "Pagamento confirmado"}
            </p>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
              {waitingForWebhook
                ? "Se você concluiu o pagamento, a liberação chega em alguns segundos. Esta tela se atualiza sozinha."
                : "Sua assinatura está ativa e todas as lições estão liberadas."}
            </p>
            {waitingForWebhook && (
              <button
                type="button"
                onClick={() => void router.invalidate()}
                className="tap-target hover:bg-muted mt-3 inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2 text-sm font-bold"
              >
                <RefreshCw className="size-4" /> Conferir agora
              </button>
            )}
          </div>
        </section>
      )}

      {checkout === "cancelado" && (
        <section className="card-soft flex items-start gap-3 p-4">
          <Info className="text-muted-foreground mt-0.5 size-5 shrink-0" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            A compra foi interrompida e nada foi cobrado. Você pode assinar
            quando quiser.
          </p>
        </section>
      )}

      {/*
        A Pix that was never paid stays unpaid until Stripe confirms it, and the
        person can land here without a confirmation. Saying so plainly is what
        keeps the paywall honest: nothing was granted, and this screen never
        pretends otherwise.
      */}
      {returning &&
        !billing.entitled &&
        !waitingForWebhook &&
        billing.onceMethod && (
          <section className="card-soft border-warning/40 flex items-start gap-3 p-4">
            <CircleAlert className="text-warning mt-0.5 size-5 shrink-0" />
            <div className="min-w-0">
              <p className="font-display font-extrabold">
                Pagamento ainda não confirmado
              </p>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {billing.onceMethod === "pix"
                  ? "O Pix só é confirmado depois que a Stripe avisa o app. Se você já pagou, a liberação chega em alguns segundos."
                  : "O boleto só é confirmado depois que a Stripe avisa o app. Se você já pagou, a liberação chega em até dois dias úteis."}{" "}
                Enquanto isso, as lições pagas continuam bloqueadas.
              </p>
            </div>
          </section>
        )}

      {waitingForWebhook && (
        <section className="card-soft flex items-start gap-3 p-4">
          <Info className="text-muted-foreground mt-0.5 size-5 shrink-0" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            {billing.onceMethod === "pix"
              ? "Pagou no Pix e o QR Code já não está mais na tela? Pode fechar esta página: a confirmação vem do Stripe, não do navegador."
              : "Emitiu o boleto? Pode fechar esta página: o acesso é liberado quando o Stripe confirmar o pagamento, não pelo navegador."}
          </p>
        </section>
      )}

      {!billing.stripeReady && (
        <section className="card-soft border-warning/40 flex items-start gap-3 p-4">
          <TriangleAlert className="text-warning mt-0.5 size-5 shrink-0" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            O pagamento ainda não está ligado neste ambiente, então os botões de
            assinar ficam indisponíveis para ninguém ser levado a uma compra que
            não conclui. Assim que a chave do Stripe for adicionada, a
            assinatura passa a funcionar sem nenhuma outra mudança.
          </p>
        </section>
      )}

      {/* --------------------------------------------------- estado do plano */}
      <section className="card-soft p-5">
        <SectionTitle
          hint={subscriptionStatusLabel(billing.status)}
          {...(billing.entitled ? { hint: "plano completo" } : {})}
        >
          Situação do plano
        </SectionTitle>

        {billing.entitled ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-success/15 text-success inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold">
                <Check className="size-3.5" /> Curso completo liberado
              </span>
              {billing.cancelAtPeriodEnd && (
                <span className="bg-warning/15 text-warning inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold">
                  <CalendarClock className="size-3.5" /> Termina no fim do
                  período
                </span>
              )}
              {billing.pixActive && !billing.hasCardSubscription && (
                <span className="bg-primary/15 text-primary inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold">
                  <QrCode className="size-3.5" /> Pago à vista
                </span>
              )}
            </div>
            {periodEnd && (
              <p className="text-muted-foreground flex items-start gap-2 text-sm leading-relaxed">
                <CalendarClock className="mt-0.5 size-4 shrink-0" />
                {billing.cancelAtPeriodEnd
                  ? `Seu acesso vai até ${periodEnd}. Depois disso as lições pagas voltam a ficar bloqueadas.`
                  : `A próxima cobrança é em ${periodEnd}. Você pode cancelar antes disso sem multa.`}
              </p>
            )}
            <p className="text-muted-foreground flex items-start gap-2 text-sm leading-relaxed">
              <CreditCard className="mt-0.5 size-4 shrink-0" />
              Trocar cartão, ver recibos ou cancelar é só clicar em “Gerenciar
              assinatura” — a página segura do Stripe cuida de tudo.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {billing.status
                ? `Sua assinatura está com a situação “${subscriptionStatusLabel(billing.status)}”, então as lições pagas continuam bloqueadas.`
                : "Você ainda não tem assinatura. As lições pagas ficam bloqueadas até a assinatura ser confirmada."}
            </p>
            {billing.status === "past_due" && (
              <div className="border-warning/40 bg-warning/10 flex items-start gap-3 rounded-2xl border p-4">
                <CircleAlert className="text-warning mt-0.5 size-4 shrink-0" />
                <p className="text-sm leading-relaxed">
                  O último pagamento não foi aprovado. Atualize o cartão no
                  gerenciamento para liberar o acesso de novo.
                </p>
              </div>
            )}
            <ul className="flex flex-col gap-2">
              {[
                "As 130 lições com explicação, exemplos e prática corrigida",
                "Vocabulário-chave e dica de fixação em cada lição",
                `No cartão: ${PLAN_PRICE_LABEL} ${PLAN_PERIOD_LABEL}, cancelando quando quiser`,
                once
                  ? `No ${once.label}: ${ONCE_PRICE_LABEL} ${ONCE_PERIOD_LABEL}, sem renovação automática`
                  : `À vista, sem renovação automática: ${ONCE_PRICE_LABEL} ${ONCE_PERIOD_LABEL}`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="text-success mt-0.5 size-4 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {error && (
          <p className="border-destructive/40 bg-destructive/10 text-destructive mt-4 rounded-2xl border p-3 text-sm font-semibold">
            {error}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {!billing.entitled && (
            <button
              type="button"
              onClick={() =>
                void openTab(() => startSubscriptionCheckout(), "checkout")
              }
              disabled={busy !== null || !billing.stripeReady}
              className="brand-gradient tap-target inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f] transition-transform active:scale-[0.98] disabled:opacity-60"
            >
              {busy === "checkout" ? (
                <LoaderCircle className="size-4 animate-spin" />
              ) : (
                <Wallet className="size-4" />
              )}
              {busy === "checkout"
                ? "Abrindo o pagamento…"
                : `Assinar por ${PLAN_PRICE_LABEL} ${PLAN_PERIOD_LABEL}`}
            </button>
          )}

          {!billing.entitled && billing.stripeReady && once && (
            <button
              type="button"
              onClick={() => void openTab(() => startOnceCheckout(), "once")}
              disabled={busy !== null}
              className="tap-target hover:bg-muted inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-bold disabled:opacity-60"
            >
              {busy === "once" ? (
                <LoaderCircle className="size-4 animate-spin" />
              ) : (
                <QrCode className="size-4" />
              )}
              {busy === "once"
                ? "Abrindo o pagamento…"
                : `Pagar ${once.priceLabel} no ${once.label}`}
            </button>
          )}

          {billing.hasCustomer && (
            <button
              type="button"
              onClick={() => void openTab(() => openBillingPortal(), "portal")}
              disabled={busy !== null || !billing.stripeReady}
              className="tap-target hover:bg-muted inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-bold disabled:opacity-60"
            >
              {busy === "portal" ? (
                <LoaderCircle className="size-4 animate-spin" />
              ) : (
                <CreditCard className="size-4" />
              )}
              {busy === "portal" ? "Abrindo…" : "Gerenciar assinatura"}
            </button>
          )}

          {origin && (
            <Link
              to="/estudar/$licaoId"
              params={{ licaoId: origin.id }}
              className="tap-target text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-bold"
            >
              <ArrowLeft className="size-4" /> Voltar para a lição
            </Link>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------ o que é grátis */}
      <section className="card-soft p-5">
        <SectionTitle hint="sem pagar nada">O que já é grátis</SectionTitle>
        <p className="text-muted-foreground text-sm leading-relaxed">
          As {FREE_LESSON_IDS.length} primeiras lições iniciantes ficam
          liberadas para sempre, com a mesma aula completa: explicação, exemplos
          com tradução, vocabulário e prática corrigida.
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {FREE_LESSON_IDS.slice(0, 4).map((id) => {
            const lesson = lessonById(id)
            if (!lesson) return null
            return (
              <li key={id}>
                <Link
                  to="/estudar/$licaoId"
                  params={{ licaoId: id }}
                  className="border-border bg-card card-tap tap-target flex items-center gap-3 rounded-2xl border px-4 py-3"
                >
                  <span className="bg-primary/15 text-primary flex size-8 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold">
                    {lesson.order}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-bold">
                    {lesson.title}
                  </span>
                  <ArrowRight className="text-muted-foreground size-4 shrink-0" />
                </Link>
              </li>
            )
          })}
        </ul>
        <Link
          to="/licoes"
          search={{ nivel: "iniciante" }}
          className="tap-target mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          <BookOpen className="size-4" /> Ver a trilha iniciante completa
          <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* ------------------------------------------------------------ rodapé */}
      <section className="card-soft flex items-start gap-3 p-5">
        <Lock className="text-primary mt-0.5 size-5 shrink-0" />
        <div>
          <p className="font-display font-extrabold">Pagamento seguro</p>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
            A cobrança é processada pelo Stripe. Não guardamos os dados do seu
            cartão nem as chaves do seu Pix: eles ficam só com o Stripe, e o app
            recebe apenas a confirmação de que o pagamento foi aprovado.
          </p>
          {!billing.entitled && billing.stripeReady && !once && (
            <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
              O pagamento à vista por Pix ainda não está liberado nesta conta. O
              Stripe abre o Pix apenas para contas com histórico de cobrança
              aprovado — é uma trava do Stripe, não do app. Enquanto isso, a
              assinatura no cartão funciona normalmente.
            </p>
          )}
          <p className="text-muted-foreground mt-3 flex items-center gap-1.5 text-xs font-bold">
            <Sparkles className="size-3.5 text-primary" />
            <Flame className="size-3.5 text-warning" />
            {lessonById(FREE_LESSON_IDS[0])?.title ?? "Lição 1"} é um bom
            começo.
          </p>
        </div>
      </section>
    </div>
  )
}
