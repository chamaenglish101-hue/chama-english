import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Artigos a, an, the — 10 perguntas. */
export const B06_PRACTICE: LessonPracticeContent = {
  id: "b06",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "I bought ___ umbrella and a bag.",
      hint: "Comprei um guarda-chuva e uma bolsa.",
      options: ["an", "a", "the", "some"],
      answer: 0,
      explanation:
        "“Umbrella” começa com som de vogal, então pede “an”. A regra é o som, não a letra: “an hour” também vale.",
    },
    {
      kind: "completar",
      prompt: "I studied at ___ university in São Paulo.",
      hint: "Estudei em uma universidade em São Paulo.",
      options: ["a", "an", "the", "any"],
      answer: 0,
      explanation:
        "“University” começa com som de “yu”, uma semivogal. Por isso vai “a”, e não “an”.",
    },
    {
      kind: "traduzir",
      prompt: "A professora está na porta.",
      bank: ["The", "teacher", "is", "at", "the", "door", "a"],
      answer: ["The", "teacher", "is", "at", "the", "door"],
      explanation:
        "“The” marca algo específico: uma professora que as duas pessoas conhecem, e uma porta certa.",
    },
    {
      kind: "traduzir",
      prompt: "Ela adora café de manhã.",
      bank: ["She", "loves", "coffee", "in", "the", "morning", "at"],
      answer: ["She", "loves", "coffee", "in", "the", "morning"],
      explanation:
        "“Coffee” no geral não leva artigo. Mas “in the morning” sempre leva “the” — é hora do dia.",
    },
    {
      kind: "falar",
      prompt: "I bought an umbrella and a bag.",
      pt: "Comprei um guarda-chuva e uma bolsa.",
      tip: "Ligue “an umbrella” como “a-nambréla”: o “n” atravessa para a vogal seguinte.",
    },
    {
      kind: "falar",
      prompt: "The teacher is at the door.",
      pt: "A professora está na porta.",
      tip: "O “th” de the tem voz: coloque a língua entre os dentes e vibre. “De” não serve.",
    },

    {
      kind: "ouvirPalavra",
      audio: "an hour",
      options: ["uma hora", "um dia", "uma semana", "um minuto"],
      answer: 0,
      explanation:
        "“Hour” começa com som de vogal porque o “h” é mudo: por isso vai “an”, e não “a”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "a university",
      options: [
        "uma universidade",
        "uma empresa",
        "uma biblioteca",
        "uma escola",
      ],
      answer: 0,
      explanation:
        "“University” começa com som de “yu”, então usa “a”. O artigo segue o som, nunca a letra.",
    },
    {
      kind: "ouvirFrase",
      audio: "The teacher is at the door.",
      pt: "A professora está na porta.",
      options: [
        "The teacher is at the door.",
        "The teacher is at the board.",
        "A teacher is at the door.",
        "The teacher is on the phone.",
      ],
      answer: 0,
      explanation:
        "Repare no “the” inicial e em “door”. “A teacher” falaria de alguém desconhecido.",
    },
    {
      kind: "ouvirFrase",
      audio: "I bought an umbrella and a bag.",
      pt: "Comprei um guarda-chuva e uma bolsa.",
      options: [
        "I bought an umbrella and a bag.",
        "I bought a umbrella and an bag.",
        "I bought an umbrella and a hat.",
        "I brought an umbrella and a bag.",
      ],
      answer: 0,
      explanation:
        "Só uma opção está correta no inglês falado: “an umbrella” e “a bag”. As outras erram o artigo ou o verbo.",
    },
  ],
}
