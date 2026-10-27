import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Atendimento ao cliente com empatia — 10 perguntas. */
export const A43_PRACTICE: LessonPracticeContent = {
  id: "a43",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I'm really sorry about this — let me see what I can do ___ now.",
      hint: "Sinto muito por isso — deixe-me ver o que posso fazer agora.",
      options: ["right", "just", "very", "even"],
      answer: 0,
      explanation:
        "“Right now” promete ação imediata, o que acalma o cliente mais do que uma explicação longa.",
    },
    {
      kind: "completar",
      prompt: "It looks like the parcel is ___ at customs.",
      hint: "Parece que o pacote está parado na alfândega.",
      options: ["stuck", "stick", "sticking", "sticks"],
      answer: 0,
      explanation:
        "“Stuck at customs” descreve o estado do pacote. O cliente precisa saber onde está, não a teoria da logística.",
    },
    {
      kind: "traduzir",
      prompt: "Vou estornar hoje e enviar o e-mail de confirmação.",
      bank: [
        "I'll",
        "refund",
        "it",
        "today",
        "and",
        "send",
        "you",
        "the",
        "confirmation",
        "email",
        "refunds",
        "confirms",
      ],
      answer: [
        "I'll",
        "refund",
        "it",
        "today",
        "and",
        "send",
        "you",
        "the",
        "confirmation",
        "email",
      ],
      explanation:
        "Duas promessas concretas com prazo — a fórmula que mais reduz reclamações seguintes.",
    },
    {
      kind: "traduzir",
      prompt: "Sinto muito por isso — deixe-me ver o que posso fazer agora.",
      bank: [
        "I'm",
        "really",
        "sorry",
        "about",
        "this",
        "let",
        "me",
        "see",
        "what",
        "I",
        "can",
        "do",
        "right",
        "now",
        "sees",
      ],
      answer: [
        "I'm",
        "really",
        "sorry",
        "about",
        "this",
        "let",
        "me",
        "see",
        "what",
        "I",
        "can",
        "do",
        "right",
        "now",
      ],
      explanation:
        "A empatia vem antes da solução. “Let me see what I can do” mostra disponibilidade real.",
    },
    {
      kind: "falar",
      prompt:
        "I'm really sorry about this — let me see what I can do right now.",
      pt: "Sinto muito por isso — deixe-me ver o que posso fazer agora.",
      tip: "Abaixe o tom em “sorry” e acelere em “right now”: acolhe e mostra ação ao mesmo tempo.",
    },
    {
      kind: "falar",
      prompt: "I'll refund it today and send you the confirmation email.",
      pt: "Vou estornar hoje e enviar o e-mail de confirmação.",
      tip: "“I'll refund it” bem ligado, como “ail-ri-FÂN-dit”. O “today” precisa soar firme.",
    },
    {
      kind: "ouvirPalavra",
      audio: "stuck at customs",
      options: [
        "parado na alfândega",
        "atrasado na transportadora",
        "enviado para outro país",
        "aguardando pagamento",
      ],
      answer: 0,
      explanation:
        "“Stuck at customs” é a explicação mais comum para atrasos internacionais e o cliente logo entende.",
    },
    {
      kind: "ouvirPalavra",
      audio: "let me see what I can do",
      options: [
        "deixe-me ver o que posso fazer",
        "deixe-me ver o produto",
        "vou ver mais tarde",
        "eu já fiz o possível",
      ],
      answer: 0,
      explanation:
        "A frase compra tempo sem prometer o impossível e sinaliza que você está agindo.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "I'm really sorry about this — let me see what I can do right now.",
      pt: "Sinto muito por isso — deixe-me ver o que posso fazer agora.",
      options: [
        "I'm really sorry about this — let me see what I can do right now.",
        "I'm really sorry for this — let me see what I can do right now.",
        "I'm really sorry about this — let me to see what I can do right now.",
        "I'm really sorry about this — let me see what can I do right now.",
      ],
      answer: 0,
      explanation:
        "A preposição é “sorry about”, “let me” não leva “to” e a oração embutida não inverte sujeito e verbo.",
    },
    {
      kind: "ouvirFrase",
      audio: "It looks like the parcel is stuck at customs.",
      pt: "Parece que o pacote está parado na alfândega.",
      options: [
        "It looks like the parcel is stuck at customs.",
        "It looks like the parcel stuck at customs.",
        "It looks like the parcel is sticking at customs.",
        "It look like the parcel is stuck at customs.",
      ],
      answer: 0,
      explanation:
        "“Looks” concorda com “it”, e o estado atual pede “is stuck” com o particípio.",
    },
  ],
}
