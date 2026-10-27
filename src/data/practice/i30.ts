import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Combinações naturais de palavras (collocations) — 10 perguntas. */
export const I30_PRACTICE: LessonPracticeContent = {
  id: "i30",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "We need to ___ a decision today.",
      hint: "Precisamos tomar uma decisão hoje.",
      options: ["make", "take", "do", "have"],
      answer: 0,
      explanation:
        "Em inglês a decisão se faz: “make a decision”. “Take a decision” não é a combinação natural.",
    },
    {
      kind: "completar",
      prompt: "I usually ___ a break at noon.",
      hint: "Normalmente faço uma pausa ao meio-dia.",
      options: ["take", "make", "do", "give"],
      answer: 0,
      explanation:
        "A combinação é “take a break”. “Make a break” não existe em inglês.",
    },
    {
      kind: "traduzir",
      prompt: "Posso dar uma olhada no contrato?",
      bank: [
        "Can",
        "I",
        "have",
        "a",
        "look",
        "at",
        "the",
        "contract",
        "see",
        "make",
      ],
      answer: ["Can", "I", "have", "a", "look", "at", "the", "contract"],
      explanation:
        "“Have a look at” é a combinação natural. “Give a look” seria tradução literal do português.",
    },
    {
      kind: "traduzir",
      prompt: "Faço o dever de casa e depois lavo a louça.",
      bank: [
        "I",
        "do",
        "my",
        "homework",
        "and",
        "then",
        "I",
        "do",
        "the",
        "dishes",
        "make",
        "wash",
      ],
      answer: [
        "I",
        "do",
        "my",
        "homework",
        "and",
        "then",
        "I",
        "do",
        "the",
        "dishes",
      ],
      explanation:
        "“Do” acompanha tarefas: “do homework”, “do the dishes”. Comida seria “make lunch”.",
    },
    {
      kind: "falar",
      prompt: "We need to make a decision today.",
      pt: "Precisamos tomar uma decisão hoje.",
      tip: "“Make a decision” liga em “MÊIK-a-di-SÍ-shon”. Nunca diga “take a decision”.",
    },
    {
      kind: "falar",
      prompt: "Can I have a look at the contract?",
      pt: "Posso dar uma olhada no contrato?",
      tip: "“Have a look at” corre como “ré-va-LÚK-et”. O “h” de “have” é quase mudo na fala rápida.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to make a decision",
      options: [
        "tomar uma decisão",
        "levar uma decisão",
        "decidir por alguém",
        "refazer uma escolha",
      ],
      answer: 0,
      explanation:
        "Em inglês, decisões, planos e erros se “fazem”: “make a decision”, “make a plan”, “make a mistake”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to take a shower",
      options: [
        "tomar banho",
        "levar um chuveiro",
        "ligar o chuveiro",
        "tomar banho de sol",
      ],
      answer: 0,
      explanation:
        "Com banho, pausa e risco, usa-se “take”: “take a shower”, “take a break”, “take a risk”.",
    },
    {
      kind: "ouvirFrase",
      audio: "We need to make a decision today.",
      pt: "Precisamos tomar uma decisão hoje.",
      options: [
        "We need to make a decision today.",
        "We need to take a decision today.",
        "We need to do a decision today.",
        "We need to make a decision tomorrow.",
      ],
      answer: 0,
      explanation:
        "Ouça “make a decision”. É a armadilha preferida de quem traduz do português: “take a decision” não existe.",
    },
    {
      kind: "ouvirFrase",
      audio: "Can I have a look at the contract?",
      pt: "Posso dar uma olhada no contrato?",
      options: [
        "Can I have a look at the contract?",
        "Can I give a look at the contract?",
        "Can I have a look on the contract?",
        "Can I have a look at the contact?",
      ],
      answer: 0,
      explanation:
        "A combinação é “have a look at”. E “contract” e “contact” soam parecidos, mas são palavras bem diferentes.",
    },
  ],
}
