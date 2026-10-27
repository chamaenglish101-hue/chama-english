import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Combinações naturais: make, take, do, have — 10 perguntas. */
export const I36_PRACTICE: LessonPracticeContent = {
  id: "i36",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Let's ___ a plan for the next quarter.",
      hint: "Vamos fazer um plano para o próximo trimestre.",
      options: ["make", "do", "take", "give"],
      answer: 0,
      explanation:
        "Planos se fazem: “make a plan”. “Do a plan” não é combinação natural em inglês.",
    },
    {
      kind: "completar",
      prompt: "She ___ breakfast at seven every day.",
      hint: "Ela toma café da manhã às sete todos os dias.",
      options: ["has", "makes", "takes", "does"],
      answer: 0,
      explanation:
        "Refeições usam “have”: “have breakfast”, “have lunch”, “have dinner”.",
    },
    {
      kind: "traduzir",
      prompt: "Vou tomar um banho rápido e sair.",
      bank: [
        "I'm",
        "going",
        "to",
        "take",
        "a",
        "quick",
        "shower",
        "and",
        "go",
        "out",
        "have",
        "make",
      ],
      answer: [
        "I'm",
        "going",
        "to",
        "take",
        "a",
        "quick",
        "shower",
        "and",
        "go",
        "out",
      ],
      explanation:
        "Banho é “take a shower”. E o adjetivo “quick” vem antes do substantivo, sem “-ly”.",
    },
    {
      kind: "traduzir",
      prompt: "Precisamos fazer negócios com essa empresa.",
      bank: [
        "We",
        "need",
        "to",
        "do",
        "business",
        "with",
        "this",
        "company",
        "make",
        "in",
      ],
      answer: ["We", "need", "to", "do", "business", "with", "this", "company"],
      explanation:
        "Negócios se fazem com “do”: “do business with”. “Make business” seria tradução literal.",
    },
    {
      kind: "falar",
      prompt: "I usually take a break at noon.",
      pt: "Normalmente faço uma pausa ao meio-dia.",
      tip: "“Take a break” liga em “TÊIK-a-BRÊIK”. A pausa e o risco também usam “take”.",
    },
    {
      kind: "falar",
      prompt: "Can I have a look at the contract?",
      pt: "Posso dar uma olhada no contrato?",
      tip: "O “h” de “have” quase desaparece: “ca-nai-áa-LÚK”. Fale como um bloco só.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to do the dishes",
      options: [
        "lavar a louça",
        "fazer os pratos",
        "comprar pratos",
        "guardar a louça",
      ],
      answer: 0,
      explanation:
        "Tarefas domésticas usam “do”: “do the dishes”, “do the laundry”, “do the homework”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to have a meeting",
      options: [
        "ter uma reunião",
        "fazer uma reunião longa",
        "participar de uma festa",
        "marcar um almoço",
      ],
      answer: 0,
      explanation:
        "“Have a meeting” é a combinação consagrada para reuniões. “Make a meeting” não é usado.",
    },
    {
      kind: "ouvirFrase",
      audio: "We need to make a decision today.",
      pt: "Precisamos tomar uma decisão hoje.",
      options: [
        "We need to make a decision today.",
        "We need to take a decision today.",
        "We need to make a decision this week.",
        "We need to do a decision today.",
      ],
      answer: 0,
      explanation:
        "Decisão se “makes”. É a combinação que mais denuncia quem traduz do português.",
    },
    {
      kind: "ouvirFrase",
      audio: "I usually take a break at noon.",
      pt: "Normalmente faço uma pausa ao meio-dia.",
      options: [
        "I usually take a break at noon.",
        "I usually make a break at noon.",
        "I usually take a break at night.",
        "I usually have a break at noon.",
      ],
      answer: 0,
      explanation:
        "“Take a break” é a combinação natural e “at noon” é ao meio-dia, exatamente a hora da pausa.",
    },
  ],
}
