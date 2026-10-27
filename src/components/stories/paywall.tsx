import { Link } from "@tanstack/react-router"
import {
  ArrowRight,
  BookOpen,
  Languages,
  Library,
  Lock,
  Sparkles,
  Volume2,
  Wallet,
} from "lucide-react"

import { Chama } from "#/components/mascot.tsx"
import { PLAN_PERIOD_LABEL, PLAN_PRICE_LABEL } from "#/lib/billing.ts"

const PERKS = [
  {
    icon: <Library className="size-4" />,
    title: "30 histórias em 5 coleções",
    text: "Séries com começo, meio e fim: Ana chegando a Toronto, Bruno no bairro novo, Helena no escritório e o encontro das três.",
  },
  {
    icon: <Languages className="size-4" />,
    title: "Dicionário dentro do texto",
    text: "Toque em qualquer palavra e veja o significado em português, com a explicação de uso quando a palavra engana.",
  },
  {
    icon: <Volume2 className="size-4" />,
    title: "Pronúncia na hora",
    text: "Ouça a palavra sozinha ou a frase inteira em inglês, quantas vezes quiser, antes de seguir a leitura.",
  },
  {
    icon: <BookOpen className="size-4" />,
    title: "Do iniciante ao avançado",
    text: "Frases curtas no presente para começar e, no fim, ironia, phrasal verbs e vocabulário de trabalho.",
  },
]

/**
 * The reading room's own paywall. Lessons and stories are both part of the plan,
 * but the reason to pay for this one is the dictionary, so the card sells that.
 */
export function StoriesPaywall({
  lockedTitle,
  from,
}: {
  lockedTitle?: string
  from?: string
}) {
  return (
    <section className="card-soft flame-bg flex flex-col gap-5 p-5">
      <div className="flex items-start gap-4">
        <Chama size={92} mood="animado" />
        <div className="min-w-0">
          <p className="text-primary flex items-center gap-1.5 text-[11px] font-extrabold tracking-wide uppercase">
            <Lock className="size-3.5" /> Sala de leitura do plano completo
          </p>
          <h1 className="font-display mt-1.5 text-2xl leading-tight font-extrabold">
            {lockedTitle
              ? `“${lockedTitle}” está na sala de leitura`
              : "As histórias fazem parte do plano completo"}
          </h1>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Ler em inglês é o passo que mais muda o seu ouvido. Cada episódio
            leva de 3 a 5 minutos e tem dicionário embutido, para você não parar
            a cada palavra.
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
            <Sparkles className="text-primary mr-1 inline size-3.5" />
            Inclui as 130 lições, os quizzes e as histórias.
          </p>
        </div>
        <Link
          to="/assinatura"
          search={from ? { de: from } : {}}
          className="brand-gradient tap-target inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-[#07131f] transition-transform active:scale-[0.98]"
        >
          <Wallet className="size-4" /> Quero ler as histórias
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
