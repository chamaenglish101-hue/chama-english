import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Reclamar de forma firme e educada — 10 perguntas. */
export const I28_PRACTICE: LessonPracticeContent = {
  id: "i28",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I'm ___ there's a problem with my order.",
      hint: "Receio que haja um problema com meu pedido.",
      options: ["afraid", "fear", "scared of", "sorry"],
      answer: 0,
      explanation:
        "“I'm afraid there's a problem” é a abertura educada para uma reclamação. “Scared of” seria medo real.",
    },
    {
      kind: "completar",
      prompt: "The item arrived ___, and I need a replacement.",
      hint: "O item chegou danificado e preciso de uma substituição.",
      options: ["damaged", "damage", "damaging", "to damage"],
      answer: 0,
      explanation:
        "“Arrived” pede um adjetivo ou particípio: “arrived damaged”. “Damage” sozinho é o substantivo.",
    },
    {
      kind: "traduzir",
      prompt: "Isso causou um atraso no nosso projeto.",
      bank: [
        "That",
        "caused",
        "a",
        "delay",
        "in",
        "our",
        "project",
        "delay",
        "on",
        "causes",
      ],
      answer: ["That", "caused", "a", "delay", "in", "our", "project"],
      explanation:
        "Descrever o impacto é a segunda etapa da reclamação: fato, impacto e pedido claro.",
    },
    {
      kind: "traduzir",
      prompt: "Quando posso esperar uma solução?",
      bank: [
        "When",
        "can",
        "I",
        "expect",
        "a",
        "solution",
        "What",
        "wait",
        "long",
      ],
      answer: ["When", "can", "I", "expect", "a", "solution"],
      explanation:
        "“Expect” é esperar no sentido de prever. “Wait” seria aguardar fisicamente, outro sentido.",
    },
    {
      kind: "falar",
      prompt: "I'm afraid there's a problem with my order.",
      pt: "Receio que haja um problema com meu pedido.",
      tip: "“I'm afraid” soa “aim-a-FRÊID”. É a fórmula que abre reclamações sem soar agressivo.",
    },
    {
      kind: "falar",
      prompt: "When can I expect a solution?",
      pt: "Quando posso esperar uma solução?",
      tip: "A entonação cai no fim: isso transmite firmeza sem agressividade. Fale devagar e com clareza.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I'm afraid",
      options: [
        "receio, lamento informar",
        "tenho medo",
        "sinto muito por algo grave",
        "estou com pressa",
      ],
      answer: 0,
      explanation:
        "Em atendimento, “I'm afraid” só amacia a notícia ruim. Não tem nada a ver com medo de verdade.",
    },
    {
      kind: "ouvirPalavra",
      audio: "Unfortunately",
      options: ["infelizmente", "sem sorte", "por acaso", "com certeza"],
      answer: 0,
      explanation:
        "“Unfortunately” abre a notícia negativa e mantém o tom formal, muito usada em e-mails de atendimento.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm afraid there's a problem with my order.",
      pt: "Receio que haja um problema com meu pedido.",
      options: [
        "I'm afraid there's a problem with my order.",
        "I'm afraid there's a problem with my room.",
        "I fear there's a problem with my order.",
        "I'm afraid there is a problem in my order.",
      ],
      answer: 0,
      explanation:
        "“A problem with my order” usa “with”. A mudança de “afraid” para “fear” soaria muito mais dramática.",
    },
    {
      kind: "ouvirFrase",
      audio: "The item arrived damaged and I need a replacement.",
      pt: "O item chegou danificado e preciso de uma substituição.",
      options: [
        "The item arrived damaged and I need a replacement.",
        "The item arrived damage and I need a replacement.",
        "The item arrived late and I need a replacement.",
        "The item arrived damaged and I need a refund.",
      ],
      answer: 0,
      explanation:
        "“Arrived damaged” é a combinação correta. “Refund” pediria reembolso, uma solução diferente da troca.",
    },
  ],
}
