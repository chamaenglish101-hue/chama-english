import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Sotaques diferentes do inglês — 10 perguntas. */
export const A54_PRACTICE: LessonPracticeContent = {
  id: "a54",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "Australian English has a very different ___ from American English.",
      hint: "O inglês australiano tem um ritmo muito diferente do americano.",
      options: ["rhythm", "rithm", "rhythms", "rhythmic"],
      answer: 0,
      explanation:
        "“Rhythm” é o substantivo; “rhythmic” seria o adjetivo e não caberia depois de “different”.",
    },
    {
      kind: "completar",
      prompt: "What catches people out is speed, not the ___ itself.",
      hint: "O que pega as pessoas é a velocidade, não o próprio sotaque.",
      options: ["accent", "accented", "accenting", "accents"],
      answer: 0,
      explanation:
        "Aqui “accent” é o substantivo no singular, retomando “sotaque” como conceito.",
    },
    {
      kind: "traduzir",
      prompt:
        "Não entendo o sotaque indiano, mas ele costuma manter o ritmo regular.",
      bank: [
        "I",
        "can't",
        "follow",
        "the",
        "Indian",
        "accent",
        "but",
        "it",
        "tends",
        "to",
        "keep",
        "a",
        "regular",
        "rhythm",
        "tend",
        "keeps",
      ],
      answer: [
        "I",
        "can't",
        "follow",
        "the",
        "Indian",
        "accent",
        "but",
        "it",
        "tends",
        "to",
        "keep",
        "a",
        "regular",
        "rhythm",
      ],
      explanation:
        "“To follow an accent” é entender o que se ouve; “tends to keep” concorda com “it”.",
    },
    {
      kind: "traduzir",
      prompt: "O que pega as pessoas é a velocidade, não o próprio sotaque.",
      bank: [
        "What",
        "catches",
        "people",
        "out",
        "is",
        "speed",
        "not",
        "the",
        "accent",
        "itself",
        "catch",
        "catcher",
      ],
      answer: [
        "What",
        "catches",
        "people",
        "out",
        "is",
        "speed",
        "not",
        "the",
        "accent",
        "itself",
      ],
      explanation:
        "“To catch someone out” é pegar de surpresa; a estrutura “What… is…” destaca a causa.",
    },
    {
      kind: "falar",
      prompt: "What catches people out is speed, not the accent itself.",
      pt: "O que pega as pessoas é a velocidade, não o próprio sotaque.",
      tip: "Acentue “SPEED” e reduza o resto: a frase existe para contrapor duas causas.",
    },
    {
      kind: "falar",
      prompt:
        "I can't follow the Indian accent, but it tends to keep a regular rhythm.",
      pt: "Não entendo o sotaque indiano, mas ele costuma manter o ritmo regular.",
      tip: "Em “can't follow”, ligue as palavras e diga “cãn-fólou” numa batida só.",
    },
    {
      kind: "ouvirPalavra",
      audio: "accent",
      options: [
        "sotaque",
        "acento escrito",
        "tonalidade de cor",
        "ênfase na frase",
      ],
      answer: 0,
      explanation:
        "“Accent” é o modo de pronunciar típico de uma região — a palavra escrita com acento é “stress mark”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to catch",
      options: [
        "conseguir ouvir e entender",
        "pegar um objeto no ar",
        "pegar uma doença",
        "capturar alguém",
      ],
      answer: 0,
      explanation:
        "No contexto de audição, “to catch” significa perceber e compreender o que foi dito.",
    },
    {
      kind: "ouvirFrase",
      audio: "What catches people out is speed, not the accent itself.",
      pt: "O que pega as pessoas é a velocidade, não o próprio sotaque.",
      options: [
        "What catches people out is speed, not the accent itself.",
        "What catch people out is speed, not the accent itself.",
        "What catches people out are speed, not the accent itself.",
        "What catches people out is speed, not the accent it self.",
      ],
      answer: 0,
      explanation:
        "“What” pede o verbo no singular (“catches”, “is”), e “itself” se escreve junto.",
    },
    {
      kind: "ouvirFrase",
      audio: "You don't need to imitate the accent, only to understand it.",
      pt: "Você não precisa imitar o sotaque, só entendê-lo.",
      options: [
        "You don't need to imitate the accent, only to understand it.",
        "You don't need imitate the accent, only to understand it.",
        "You don't need to imitate the accent, only understand it to.",
        "You doesn't need to imitate the accent, only to understand it.",
      ],
      answer: 0,
      explanation:
        "Depois de “need to” vem o infinitivo, e “you” sempre usa “don't”, nunca “doesn't”.",
    },
  ],
}
