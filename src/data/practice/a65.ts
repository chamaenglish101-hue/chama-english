import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Narrativa: alternar tempos ao contar histórias — 10 perguntas. */
export const A65_PRACTICE: LessonPracticeContent = {
  id: "a65",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I was walking home when I ___ an old colleague.",
      hint: "Eu estava voltando para casa quando encontrei um antigo colega.",
      options: ["ran into", "run into", "running into", "runs into"],
      answer: 0,
      explanation:
        "O past continuous monta o cenário e o past simple traz o evento que interrompe: “when I ran into”.",
    },
    {
      kind: "completar",
      prompt: "By the time we arrived, the meeting ___ already started.",
      hint: "Quando chegamos, a reunião já tinha começado.",
      options: ["had", "has", "have", "was"],
      answer: 0,
      explanation:
        "O past perfect (“had started”) marca o que aconteceu antes de outro ponto no passado.",
    },
    {
      kind: "traduzir",
      prompt: "Eu estava voltando para casa quando encontrei um antigo colega.",
      bank: [
        "I",
        "was",
        "walking",
        "home",
        "when",
        "I",
        "ran",
        "into",
        "an",
        "old",
        "colleague",
        "walk",
        "runs",
      ],
      answer: [
        "I",
        "was",
        "walking",
        "home",
        "when",
        "I",
        "ran",
        "into",
        "an",
        "old",
        "colleague",
      ],
      explanation:
        "A combinação “was walking… when I ran into” é a espinha dorsal da narrativa em inglês.",
    },
    {
      kind: "traduzir",
      prompt: "Quando chegamos, a reunião já tinha começado.",
      bank: [
        "By",
        "the",
        "time",
        "we",
        "arrived",
        "the",
        "meeting",
        "had",
        "already",
        "started",
        "arrive",
        "start",
      ],
      answer: [
        "By",
        "the",
        "time",
        "we",
        "arrived",
        "the",
        "meeting",
        "had",
        "already",
        "started",
      ],
      explanation:
        "“By the time + past simple” exige o past perfect na oração principal.",
    },
    {
      kind: "falar",
      prompt: "I was walking home when I ran into an old colleague.",
      pt: "Eu estava voltando para casa quando encontrei um antigo colega.",
      tip: "Estenda “walking” e corte seco em “ran into”: o contraste faz a cena acontecer.",
    },
    {
      kind: "falar",
      prompt: "By the time we arrived, the meeting had already started.",
      pt: "Quando chegamos, a reunião já tinha começado.",
      tip: "Acento em “arrived” e “ALready started”: são os dois marcos de tempo da história.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to run into someone",
      options: [
        "encontrar alguém por acaso",
        "bater o carro em alguém",
        "correr atrás de alguém",
        "esbarrar de propósito",
      ],
      answer: 0,
      explanation:
        "Na narrativa oral, “to run into someone” é encontrar alguém sem planejamento.",
    },
    {
      kind: "ouvirPalavra",
      audio: "by the time",
      options: [
        "quando, no momento em que",
        "até o horário combinado",
        "no prazo",
        "de vez em quando",
      ],
      answer: 0,
      explanation:
        "“By the time” situa um evento em relação a outro já concluído no passado.",
    },
    {
      kind: "ouvirFrase",
      audio: "I was walking home when I ran into an old colleague.",
      pt: "Eu estava voltando para casa quando encontrei um antigo colega.",
      options: [
        "I was walking home when I ran into an old colleague.",
        "I walked home when I ran into an old colleague.",
        "I was walking home when I run into an old colleague.",
        "I was walking home when I ran in an old colleague.",
      ],
      answer: 0,
      explanation:
        "O cenário fica no past continuous (“was walking”) e o evento, no past simple (“ran into”).",
    },
    {
      kind: "ouvirFrase",
      audio: "By the time we arrived, the meeting had already started.",
      pt: "Quando chegamos, a reunião já tinha começado.",
      options: [
        "By the time we arrived, the meeting had already started.",
        "By the time we arrived, the meeting has already started.",
        "By the time we arrive, the meeting had already started.",
        "By the time we arrived, the meeting had already start.",
      ],
      answer: 0,
      explanation:
        "As duas orações ficam no passado: “arrived” no simple past e “had started” no past perfect.",
    },
  ],
}
