import { Link } from "@tanstack/react-router"
import {
  ArrowRight,
  BookOpen,
  Check,
  Flame,
  Infinity as InfinityIcon,
  Lock,
  Sparkles,
  Wallet,
} from "lucide-react"

import { Chama } from "#/components/mascot.tsx"
import { PLAN_PERIOD_LABEL, PLAN_PRICE_LABEL } from "#/lib/billing.ts"

const PERKS = [
  {
    icon: <BookOpen className="size-4" />,
    title: "As 130 lições liberadas",
    text: "Todas as lições do intermediário e do avançado, e as iniciantes depois da décima.",
  },
  {
    icon: <Sparkles className="size-4" />,
    title: "Aula completa em cada lição",
    text: "Objetivo, explicação, exemplos com tradução, vocabulário-chave e prática corrigida na hora.",
  },
  {
    icon: <InfinityIcon className="size-4" />,
    title: "Sem prazo para terminar",
    text: "Acesso completo enquanto a assinatura estiver ativa, no celular e no computador.",
  },
]

/**
 * The screen every locked lesson leads to. It explains what the paid part
 * covers and gives one clear way forward.
 */
export function PaywallCard({
  lessonTitle,
  from,
}: {
  lessonTitle?: string
  from?: string
}) {
  return (
    <section className="card-soft flame-bg flex flex-col gap-5 p-5">
      <div className="flex items-start gap-4">
        <Chama size={92} mood="animado" />
        <div className="min-w-0">
          <p className="text-primary flex items-center gap-1.5 text-[11px] font-extrabold tracking-wide uppercase">
            <Lock className="size-3.5" /> Conteúdo do curso completo
          </p>
          <h1 className="font-display mt-1.5 text-2xl leading-tight font-extrabold">
            {lessonTitle
              ? `“${lessonTitle}” faz parte do plano completo`
              : "Esta parte do curso faz parte do plano completo"}
          </h1>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            As 10 primeiras lições iniciantes são grátis. Da décima primeira em
            diante — e em todos os outros níveis — o acesso faz parte da
            assinatura.
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {PERKS.map((perk) => (
          <li
            key={perk.title}
            className="border-border bg-card/70 flex items-start gap-3 rounded-2xl border p-4"
          >
            <span className="bg-primary/15 text-primary mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl">
              {perk.icon}
            </span>
            <span className="min-w-0">
              <span className="font-display block font-extrabold">
                {perk.title}
              </span>
              <span className="text-muted-foreground block text-sm leading-relaxed">
                {perk.text}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="border-border bg-card/70 flex flex-col gap-4 rounded-2xl border p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display flex items-baseline gap-2">
            <span className="brand-text text-3xl font-extrabold">
              {PLAN_PRICE_LABEL}
            </span>
            <span className="text-muted-foreground text-sm font-bold">
              {PLAN_PERIOD_LABEL}
            </span>
          </p>
          <p className="text-muted-foreground mt-1 text-xs font-semibold">
            <Check className="text-success mr-1 inline size-3.5" />
            Cancele quando quiser, direto na sua conta. Sem fidelidade.
          </p>
        </div>
        <Link
          to="/assinatura"
          search={from ? { de: from } : {}}
          className="brand-gradient tap-target inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f] transition-transform active:scale-[0.98]"
        >
          <Wallet className="size-4" /> Quero o curso completo
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <p className="text-muted-foreground flex items-start gap-2 text-xs leading-relaxed">
        <Flame className="text-primary mt-0.5 size-3.5 shrink-0" />
        Seu progresso nas lições grátis continua salvo. Assinando, você retoma
        da lição em que parou.
      </p>
    </section>
  )
}
