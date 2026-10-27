import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Reclamações formais e cartas de resolução — 10 perguntas. */
export const A30_PRACTICE: LessonPracticeContent = {
  id: "a30",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I must express my ___ with the service provided.",
      hint: "Preciso expressar minha decepção com o serviço prestado.",
      options: [
        "disappointment",
        "disappointed",
        "disappoint",
        "disappointing",
      ],
      answer: 0,
      explanation:
        "“Express my disappointment” exige o substantivo para completar a fórmula da reclamação formal.",
    },
    {
      kind: "completar",
      prompt: "I expect a full ___ within ten business days.",
      hint: "Espero o reembolso integral em dez dias úteis.",
      options: ["refund", "refunds", "refunded", "refunding"],
      answer: 0,
      explanation:
        "“A full refund” é a expressão fixa para reembolso integral, e o artigo pede o singular.",
    },
    {
      kind: "traduzir",
      prompt:
        "Pedimos sinceras desculpas pelo transtorno e processamos seu reembolso.",
      bank: [
        "We",
        "sincerely",
        "apologize",
        "for",
        "the",
        "inconvenience",
        "and",
        "have",
        "processed",
        "your",
        "refund",
        "apologizes",
        "processing",
      ],
      answer: [
        "We",
        "sincerely",
        "apologize",
        "for",
        "the",
        "inconvenience",
        "and",
        "have",
        "processed",
        "your",
        "refund",
      ],
      explanation:
        "“Apologize for the inconvenience” é a fórmula padrão, e o presente perfeito “have processed” confirma a ação concluída.",
    },
    {
      kind: "traduzir",
      prompt: "Espero o reembolso integral em dez dias úteis.",
      bank: [
        "I",
        "expect",
        "a",
        "full",
        "refund",
        "within",
        "ten",
        "business",
        "days",
        "in",
        "refunds",
      ],
      answer: [
        "I",
        "expect",
        "a",
        "full",
        "refund",
        "within",
        "ten",
        "business",
        "days",
      ],
      explanation:
        "“Within” indica o prazo-limite com firmeza, e “business days” são os dias úteis.",
    },
    {
      kind: "falar",
      prompt: "I must express my disappointment with the service provided.",
      pt: "Preciso expressar minha decepção com o serviço prestado.",
      tip: "“Disappointment” tem cinco sílabas: dis-a-PÓIN-ment. Fale devagar, sem engolir o meio.",
    },
    {
      kind: "falar",
      prompt: "We sincerely apologize for the inconvenience.",
      pt: "Pedimos sinceras desculpas pelo transtorno.",
      tip: "“Sincerely” soa “sin-SÍR-li”. O “apologize” corre em “a-PÓ-lo-djaiz”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "inconvenience",
      options: [
        "transtorno",
        "inconveniente pequeno",
        "incompetência",
        "indisponibilidade",
      ],
      answer: 0,
      explanation:
        "“Inconvenience” é o substantivo formal para o transtorno causado ao cliente.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to process a refund",
      options: [
        "processar um reembolso",
        "pedir reembolso",
        "recusar o reembolso",
        "estornar o pagamento manualmente",
      ],
      answer: 0,
      explanation:
        "“Process a refund” é a ação do atendimento: dar andamento ao reembolso no sistema.",
    },
    {
      kind: "ouvirFrase",
      audio: "I must express my disappointment with the service provided.",
      pt: "Preciso expressar minha decepção com o serviço prestado.",
      options: [
        "I must express my disappointment with the service provided.",
        "I must express my disappointed with the service provided.",
        "I must express my disappointment with the service providing.",
        "I must expressing my disappointment with the service provided.",
      ],
      answer: 0,
      explanation:
        "Depois de “express my” vem o substantivo “disappointment”, e “provided” é a passiva reduzida que qualifica o serviço.",
    },
    {
      kind: "ouvirFrase",
      audio: "I expect a full refund within ten business days.",
      pt: "Espero o reembolso integral em dez dias úteis.",
      options: [
        "I expect a full refund within ten business days.",
        "I expect a full refund in ten business days.",
        "I expect full refund within ten business days.",
        "I expect a full refund within ten business day.",
      ],
      answer: 0,
      explanation:
        "“Within” marca prazo, o artigo “a” é obrigatório e “days” fica no plural com “ten”.",
    },
  ],
}
