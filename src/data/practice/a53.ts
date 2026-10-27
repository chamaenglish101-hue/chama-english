import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Podcasts e palestras longas — 10 perguntas. */
export const A53_PRACTICE: LessonPracticeContent = {
  id: "a53",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Let's ___ that and come back to it later.",
      hint: "Vamos deixar isso de lado e voltar depois.",
      options: ["park", "stop", "leave off", "put away"],
      answer: 0,
      explanation:
        "“To park something” é deixar um assunto de lado de propósito, para retomá-lo depois.",
    },
    {
      kind: "completar",
      prompt: "Sorry, could you ___ that again a bit slower?",
      hint: "Desculpe, pode repetir um pouco mais devagar?",
      options: ["say", "tell", "speak", "talk"],
      answer: 0,
      explanation:
        "“Say that again” é a fórmula para pedir repetição; “tell” exigiria um objeto indireto.",
    },
    {
      kind: "traduzir",
      prompt: "Onde estávamos? Ah sim, o modelo de precificação.",
      bank: [
        "Where",
        "were",
        "we",
        "Ah",
        "yes",
        "the",
        "pricing",
        "model",
        "was",
        "models",
      ],
      answer: ["Where", "were", "we", "Ah", "yes", "the", "pricing", "model"],
      explanation:
        "“Where were we?” é a expressão fixa para retomar o fio depois de uma digressão.",
    },
    {
      kind: "traduzir",
      prompt: "Vamos deixar isso de lado e voltar depois.",
      bank: [
        "Let's",
        "park",
        "that",
        "and",
        "come",
        "back",
        "to",
        "it",
        "later",
        "parks",
        "coming",
      ],
      answer: [
        "Let's",
        "park",
        "that",
        "and",
        "come",
        "back",
        "to",
        "it",
        "later",
      ],
      explanation:
        "“Let's park that” evita perder o raciocínio quando a digressão fica longa demais.",
    },
    {
      kind: "falar",
      prompt: "Where were we? Ah yes, the pricing model.",
      pt: "Onde estávamos? Ah sim, o modelo de precificação.",
      tip: "Suba o tom em “Where were we?” e caia em “Ah yes”: é a volta ao fio da conversa.",
    },
    {
      kind: "falar",
      prompt: "Let's park that and come back to it later.",
      pt: "Vamos deixar isso de lado e voltar depois.",
      tip: "Ligue “park that and” numa só batida, como fazem os nativos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to keep track",
      options: [
        "acompanhar, manter-se a par",
        "manter o trilho",
        "guardar o registro físico",
        "marcar o tempo",
      ],
      answer: 0,
      explanation:
        "“To keep track” é não perder o fio do que está sendo dito ao longo de uma fala longa.",
    },
    {
      kind: "ouvirPalavra",
      audio: "tangent",
      options: ["digressão", "tangente matemática", "tentativa", "contato"],
      answer: 0,
      explanation:
        "Em conversa, “tangent” é o desvio do assunto principal — comum em podcasts de entrevista.",
    },
    {
      kind: "ouvirFrase",
      audio: "Let's park that and come back to it later.",
      pt: "Vamos deixar isso de lado e voltar depois.",
      options: [
        "Let's park that and come back to it later.",
        "Let's park that and come back to it latter.",
        "Let's park that and came back to it later.",
        "Let's parked that and come back to it later.",
      ],
      answer: 0,
      explanation:
        "Depois de “Let's” vem o verbo base, e o advérbio correto é “later”, não “latter”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Sorry, could you say that again a bit slower?",
      pt: "Desculpe, pode repetir um pouco mais devagar?",
      options: [
        "Sorry, could you say that again a bit slower?",
        "Sorry, could you tell that again a bit slower?",
        "Sorry, could you say that again a bit more slow?",
        "Sorry, could you say that again a bit slower more?",
      ],
      answer: 0,
      explanation:
        "“Say that again” é a collocation certa, e o comparativo é “a bit slower”.",
    },
  ],
}
