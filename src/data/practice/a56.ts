import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Ritmo e acento tônico — 10 perguntas. */
export const A56_PRACTICE: LessonPracticeContent = {
  id: "a56",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "She's a ___ holder, and they ___ everything.",
      hint: "Ela é detentora de recorde, e eles gravam tudo.",
      options: [
        "REcord / reCORD",
        "reCORD / REcord",
        "record / record",
        "REcord / REcord",
      ],
      answer: 0,
      explanation:
        "Substantivos de duas sílabas acentuam a primeira (REcord); verbos, a segunda (reCORD).",
    },
    {
      kind: "completar",
      prompt: "It's not about the money, it's about the ___.",
      hint: "Não é sobre o dinheiro, é sobre o tempo.",
      options: ["TIME", "time", "TIME's", "timing"],
      answer: 0,
      explanation:
        "Em “It's not about X, it's about Y”, o acento forte recai no contraste — aqui, em “TIME”.",
    },
    {
      kind: "traduzir",
      prompt: "Eu teria te contado se você tivesse perguntado.",
      bank: [
        "I",
        "would've",
        "told",
        "you",
        "if",
        "you",
        "had",
        "asked",
        "would",
        "ask",
      ],
      answer: ["I", "would've", "told", "you", "if", "you", "had", "asked"],
      explanation:
        "A terceira condicional reduz “would have” a “would've” e usa o past perfect na condição.",
    },
    {
      kind: "traduzir",
      prompt: "Não é sobre o dinheiro, é sobre o tempo.",
      bank: [
        "It's",
        "not",
        "about",
        "the",
        "money",
        "it's",
        "about",
        "the",
        "time",
        "It",
        "times",
      ],
      answer: [
        "It's",
        "not",
        "about",
        "the",
        "money",
        "it's",
        "about",
        "the",
        "time",
      ],
      explanation:
        "A estrutura contrastiva repete “it's about” e deixa forte só a palavra final de cada bloco.",
    },
    {
      kind: "falar",
      prompt: "I would've told you if you had asked.",
      pt: "Eu teria te contado se você tivesse perguntado.",
      tip: "Concentre a força em “TOLD” e “ASKED”; o resto sai rápido e fraco.",
    },
    {
      kind: "falar",
      prompt: "It's not about the money, it's about the time.",
      pt: "Não é sobre o dinheiro, é sobre o tempo.",
      tip: "Marque “MONEY” e “TIME”: o inglês se apoia em batidas fortes, não em sílabas iguais.",
    },
    {
      kind: "ouvirPalavra",
      audio: "stress",
      options: [
        "acento tônico",
        "estresse emocional",
        "pressão no trabalho",
        "alongamento",
      ],
      answer: 0,
      explanation:
        "Em fonética, “stress” é a sílaba pronunciada com mais força e duração dentro da palavra ou frase.",
    },
    {
      kind: "ouvirPalavra",
      audio: "rhythm",
      options: ["ritmo", "rima", "melodia cantada", "compasso musical"],
      answer: 0,
      explanation:
        "“Rhythm” descreve a alternância entre sílabas fortes e fracas que dá a cadência do inglês.",
    },
    {
      kind: "ouvirFrase",
      audio: "It's not about the money, it's about the time.",
      pt: "Não é sobre o dinheiro, é sobre o tempo.",
      options: [
        "It's not about the money, it's about the time.",
        "It's no about the money, it's about the time.",
        "It's not about money, it's about the time.",
        "It's not about the money, it's about time.",
      ],
      answer: 0,
      explanation:
        "A estrutura paralela exige o artigo nas duas partes: “about the money”, “about the time”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I would've told you if you had asked.",
      pt: "Eu teria te contado se você tivesse perguntado.",
      options: [
        "I would've told you if you had asked.",
        "I would've tell you if you had asked.",
        "I would told you if you had asked.",
        "I would've told you if you have asked.",
      ],
      answer: 0,
      explanation:
        "A terceira condicional pede “would've” + particípio e “had asked” na condição.",
    },
  ],
}
