import { CATALOG } from "#/data/catalog.ts"

/**
 * The single paid plan. Amount and currency live here and travel to Stripe
 * only from server code — the browser sends nothing but "assinar".
 */
export const MONTHLY_PLAN = {
  name: "Chama English — Assinatura mensal",
  description:
    "Acesso completo às 130 lições enquanto a assinatura estiver ativa.",
  amountCents: 1500,
  currency: "brl",
  interval: "month" as const,
} as const

export const PLAN_PRICE_LABEL = "R$ 15"
export const PLAN_PERIOD_LABEL = "por mês"

/**
 * The second way to pay is a one-time payment: the person pays once and studies
 * for 30 days. The first choice of method here is Pix, and when the payment
 * account cannot charge with Pix yet, the same one-off purchase is offered as a
 * boleto instead — the price, the window and the granted access are identical.
 * Stripe does not renew either of them automatically, so buying again simply
 * adds another window on top of whatever is left.
 */
export const ONCE_PLAN = {
  name: "Chama English — 30 dias",
  description: "Acesso completo às 130 lições por 30 dias, pago uma vez.",
  amountCents: 1500,
  currency: "brl",
  days: 30,
} as const

export const ONCE_PRICE_LABEL = "R$ 15"
export const ONCE_PERIOD_LABEL = "por 30 dias"

/** Marks a one-time payment session, so the webhook knows what it grants. */
export const ONCE_CHECKOUT_KIND = "pix_30d"

/** The payment methods this account can actually charge with, in priority order. */
export const ONCE_METHODS = {
  pix: {
    label: "Pix",
    priceLabel: ONCE_PRICE_LABEL,
    periodLabel: ONCE_PERIOD_LABEL,
  },
  boleto: {
    label: "Boleto",
    priceLabel: ONCE_PRICE_LABEL,
    periodLabel: ONCE_PERIOD_LABEL,
  },
} as const

export type OnceMethod = keyof typeof ONCE_METHODS

/** What the free part of the course covers: the first 10 beginner lessons. */
export const FREE_LESSON_COUNT = 10

export const FREE_LESSON_IDS: readonly string[] = CATALOG.filter(
  (lesson) => lesson.level === "iniciante" && lesson.order <= FREE_LESSON_COUNT,
).map((lesson) => lesson.id)

const FREE_LESSON_SET = new Set(FREE_LESSON_IDS)

export type SubscriptionStatus =
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "unpaid"
  | "incomplete"
  | "incomplete_expired"
  | "paused"
  | null

/** What the interface needs to know about the current person's plan. */
export interface BillingStatus {
  signedIn: boolean
  entitled: boolean
  status: SubscriptionStatus
  cancelAtPeriodEnd: boolean
  /** ISO string, or null when there is no paid period yet. */
  currentPeriodEnd: string | null
  hasCustomer: boolean
  /** False when the server has no Stripe key yet — checkout cannot be offered. */
  stripeReady: boolean
  /** One-time payment window: access end as ISO string, or null. */
  pixPeriodEnd: string | null
  /** True when access comes from a one-time payment still inside its window. */
  pixActive: boolean
  /** Which method the payment account can really charge for a one-time payment. */
  onceMethod: OnceMethod | null
  /** True when there is a card subscription behind the Stripe portal. */
  hasCardSubscription: boolean
}

export const EMPTY_BILLING_STATUS: BillingStatus = {
  signedIn: false,
  entitled: false,
  status: null,
  cancelAtPeriodEnd: false,
  currentPeriodEnd: null,
  hasCustomer: false,
  stripeReady: false,
  pixPeriodEnd: null,
  pixActive: false,
  onceMethod: null,
  hasCardSubscription: false,
}

/** Entitlement in one place: the app grants access only for these two states. */
export function isEntitled(status: SubscriptionStatus | undefined): boolean {
  return status === "active" || status === "trialing"
}

export interface AccessInput {
  status?: SubscriptionStatus | undefined
  pixPeriodEnd?: Date | string | null | undefined
}

function asTime(value: Date | string | null | undefined): number | null {
  if (!value) return null
  const date = value instanceof Date ? value : new Date(value)
  const time = date.getTime()
  return Number.isNaN(time) ? null : time
}

/**
 * The whole access rule: a live card subscription, or a Pix payment whose 30 days
 * have not run out yet. Every page and every lesson check reads this.
 */
export function hasFullAccess(input: AccessInput): boolean {
  if (isEntitled(input.status)) return true
  const end = asTime(input.pixPeriodEnd)
  return end !== null && end > Date.now()
}

/**
 * Where the next one-time window ends. Paying again while the current window is
 * still open adds 30 days instead of restarting them.
 */
export function nextPixPeriodEnd(
  current: Date | string | null | undefined,
  from: Date = new Date(),
): Date {
  const start = Math.max(asTime(current) ?? 0, from.getTime())
  return new Date(start + ONCE_PLAN.days * 24 * 60 * 60 * 1000)
}

/**
 * Pix is only chargeable once the payment account is enabled for it, and this
 * account is not: Stripe answers every Pix attempt with "the payment method type
 * pix is invalid". The account owner unlocks it in the Dashboard, not through the
 * API, so the app detects the refusal and quietly offers a boleto instead — the
 * same R$ 15 for the same 30 days — rather than showing a plan the person cannot
 * pay for.
 */
export function isPixUnavailableMessage(message: string): boolean {
  const text = message.toLowerCase()
  if (text.includes("no valid payment method types")) return true
  return (
    text.includes("pix") &&
    (text.includes("invalid") ||
      text.includes("activated") ||
      text.includes("not supported") ||
      text.includes("unsupported"))
  )
}

export function isLessonFree(lessonId: string): boolean {
  return FREE_LESSON_SET.has(lessonId)
}

export function isLessonUnlocked(lessonId: string, entitled: boolean): boolean {
  return entitled || isLessonFree(lessonId)
}

export function freeLessonTotal(): number {
  return FREE_LESSON_IDS.length
}

const STATUS_LABELS: Record<string, string> = {
  trialing: "Em período de teste",
  active: "Assinatura ativa",
  past_due: "Pagamento atrasado",
  canceled: "Assinatura cancelada",
  unpaid: "Pagamento não realizado",
  incomplete: "Pagamento não concluído",
  incomplete_expired: "Pagamento expirado",
  paused: "Assinatura pausada",
}

export function subscriptionStatusLabel(
  status: SubscriptionStatus | undefined,
): string {
  if (!status) return "Sem assinatura"
  return STATUS_LABELS[status] ?? status
}

export function formatPeriodEnd(
  value: string | null | undefined,
): string | null {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}
