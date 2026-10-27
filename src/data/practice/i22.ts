import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Saúde: sintomas, dor e orientações médicas — 10 perguntas. */
export const I22_PRACTICE: LessonPracticeContent = {
  id: "i22",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I have a sore ___ and a fever since yesterday.",
      hint: "Estou com dor de garganta e febre desde ontem.",
      options: ["throat", "neck", "mouth", "chest"],
      answer: 0,
      explanation:
        "“Sore throat” é dor de garganta. “Sore” acompanha a parte do corpo que dói.",
    },
    {
      kind: "completar",
      prompt: "My back has ___ hurting for a week.",
      hint: "Minhas costas doem há uma semana.",
      options: ["been", "being", "be", "was"],
      answer: 0,
      explanation:
        "“Has been hurting” mostra que a dor começou antes e continua até agora — perfeito com “for a week”.",
    },
    {
      kind: "traduzir",
      prompt: "Sou alérgico a penicilina.",
      bank: [
        "I'm",
        "allergic",
        "to",
        "penicillin",
        "allergic of",
        "have",
        "allergy",
      ],
      answer: ["I'm", "allergic", "to", "penicillin"],
      explanation:
        "A preposição é sempre “to”: “allergic to”. Sempre avise isso antes de qualquer medicação.",
    },
    {
      kind: "traduzir",
      prompt: "Tome este remédio duas vezes ao dia, depois das refeições.",
      bank: [
        "Take",
        "this",
        "medicine",
        "twice",
        "a",
        "day",
        "after",
        "meals",
        "two",
        "in",
      ],
      answer: [
        "Take",
        "this",
        "medicine",
        "twice",
        "a",
        "day",
        "after",
        "meals",
      ],
      explanation:
        "“Tome” aqui é “take”. E “duas vezes ao dia” é “twice a day”, sem preposição antes de “day”.",
    },
    {
      kind: "falar",
      prompt: "I have a sore throat and a fever.",
      pt: "Estou com dor de garganta e febre.",
      tip: "“Sore throat” soa “sór-rôut”, com o “th” entre os dentes. “Fever” é “FÍ-ver”.",
    },
    {
      kind: "falar",
      prompt: "I'm allergic to penicillin.",
      pt: "Sou alérgico a penicilina.",
      tip: "“Allergic to” liga em “a-LÉR-djik-tu”. O acento cai na segunda sílaba.",
    },
    {
      kind: "ouvirPalavra",
      audio: "a headache",
      options: [
        "dor de cabeça",
        "dor de estômago",
        "dor de dente",
        "dor nas costas",
      ],
      answer: 0,
      explanation:
        "“Headache” é uma palavra só e significa dor de cabeça: “I have a headache”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "twice a day",
      options: [
        "duas vezes ao dia",
        "dois dias",
        "duas vezes por semana",
        "de dois em dois dias",
      ],
      answer: 0,
      explanation:
        "“Once a day” é uma vez; “twice a day”, duas. Essa é a instrução mais comum em receitas médicas.",
    },
    {
      kind: "ouvirFrase",
      audio: "My back has been hurting for a week.",
      pt: "Minhas costas doem há uma semana.",
      options: [
        "My back has been hurting for a week.",
        "My back hurts for a week.",
        "My back is hurting a week ago.",
        "My back has been hurting for a month.",
      ],
      answer: 0,
      explanation:
        "“Has been hurting” mais “for a week” mostra a duração que continua até o momento da consulta.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm allergic to penicillin.",
      pt: "Sou alérgico a penicilina.",
      options: [
        "I'm allergic to penicillin.",
        "I'm allergic of penicillin.",
        "I'm allergy to penicillin.",
        "I'm allergic to aspirine.",
      ],
      answer: 0,
      explanation:
        "A combinação correta é “allergic to”. “Allergy” é o substantivo e não entra nessa frase.",
    },
  ],
}
