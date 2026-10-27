import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** No aeroporto: check-in, embarque e imigração — 10 perguntas. */
export const I20_PRACTICE: LessonPracticeContent = {
  id: "i20",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I'd like to ___ in, please. Here's my passport.",
      hint: "Gostaria de fazer o check-in, por favor. Aqui está meu passaporte.",
      options: ["check", "checked", "checking", "checks"],
      answer: 0,
      explanation:
        "“I'd like to check in” é a frase padrão. Depois de “to”, o verbo fica na forma base.",
    },
    {
      kind: "completar",
      prompt: "I have one bag to ___ and one carry-on.",
      hint: "Tenho uma mala para despachar e uma bagagem de mão.",
      options: ["check", "checked", "checking", "check-in"],
      answer: 0,
      explanation:
        "“To check a bag” é despachar a mala. O “check-in” com hífen é o balcão, não a ação da frase.",
    },
    {
      kind: "traduzir",
      prompt: "Estou aqui de férias por dez dias.",
      bank: [
        "I'm",
        "here",
        "on",
        "vacation",
        "for",
        "ten",
        "days",
        "in",
        "holidays",
      ],
      answer: ["I'm", "here", "on", "vacation", "for", "ten", "days"],
      explanation:
        "“On vacation” é a expressão fixa em inglês americano. Na pergunta de imigração, vá direto ao motivo e ao tempo.",
    },
    {
      kind: "traduzir",
      prompt: "Onde fica o portão de embarque?",
      bank: [
        "Where",
        "is",
        "the",
        "boarding",
        "gate",
        "What",
        "port",
        "to board",
      ],
      answer: ["Where", "is", "the", "boarding", "gate"],
      explanation:
        "“Boarding gate” é a combinação correta. “Port” em inglês é porto, não portão.",
    },
    {
      kind: "falar",
      prompt: "I'm here on vacation for ten days.",
      pt: "Estou aqui de férias por dez dias.",
      tip: "“On vacation” liga em “on-va-CÊI-shon”. Diga o tempo de estadia de forma clara e direta.",
    },
    {
      kind: "falar",
      prompt: "Where is the boarding gate?",
      pt: "Onde fica o portão de embarque?",
      tip: "“Boarding gate” soa “BÓR-din-guêit”, e o “d” de “boarding” é bem suave.",
    },
    {
      kind: "ouvirPalavra",
      audio: "boarding pass",
      options: [
        "cartão de embarque",
        "passaporte",
        "etiqueta de bagagem",
        "portão de embarque",
      ],
      answer: 0,
      explanation:
        "“Boarding pass” é o cartão de embarque. O portão é “boarding gate” — mesma família, objetos diferentes.",
    },
    {
      kind: "ouvirPalavra",
      audio: "carry-on",
      options: [
        "bagagem de mão",
        "bagagem despachada",
        "mala extra",
        "carinho de bagagem",
      ],
      answer: 0,
      explanation:
        "“Carry-on” é a bagagem de mão. A despachada é “checked bag” ou “checked luggage”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm here on vacation for ten days.",
      pt: "Estou aqui de férias por dez dias.",
      options: [
        "I'm here on vacation for ten days.",
        "I'm here on business for ten days.",
        "I'm here on vacation for two days.",
        "I'm here in vacation for ten days.",
      ],
      answer: 0,
      explanation:
        "Ouça “vacation” e “ten days”. O número muda tudo na imigração, e a preposição é sempre “on vacation”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Where is the boarding gate?",
      pt: "Onde fica o portão de embarque?",
      options: [
        "Where is the boarding gate?",
        "Where is the boarding pass?",
        "Where is the baggage claim?",
        "When is the boarding gate?",
      ],
      answer: 0,
      explanation:
        "“Gate” e “pass” são palavras próximas, mas objetos bem diferentes. “Baggage claim” é a esteira de bagagens.",
    },
  ],
}
