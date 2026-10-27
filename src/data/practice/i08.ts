import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** too e enough: excesso e suficiência — 10 perguntas. */
export const I08_PRACTICE: LessonPracticeContent = {
  id: "i08",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "This coffee is ___ hot to drink right now.",
      hint: "Este café está quente demais para beber agora.",
      options: ["too", "enough", "too much", "much"],
      answer: 0,
      explanation:
        "Excesso antes do adjetivo usa “too”: “too hot to drink”. “Too much” só com substantivos.",
    },
    {
      kind: "completar",
      prompt: "The apartment is big ___ for the three of us.",
      hint: "O apartamento é grande o suficiente para nós três.",
      options: ["enough", "too", "much", "many"],
      answer: 0,
      explanation:
        "“Enough” vem sempre depois do adjetivo: “big enough”. Antes do adjetivo só “too” aparece.",
    },
    {
      kind: "traduzir",
      prompt: "Tem gente demais aqui, não consigo ouvir nada.",
      bank: [
        "There",
        "are",
        "too",
        "many",
        "people",
        "here",
        "I",
        "can't",
        "hear",
        "anything",
        "much",
        "enough",
      ],
      answer: [
        "There",
        "are",
        "too",
        "many",
        "people",
        "here",
        "I",
        "can't",
        "hear",
        "anything",
      ],
      explanation:
        "“People” é contável no plural, então a quantidade excessiva é “too many”. Com incontáveis seria “too much”.",
    },
    {
      kind: "traduzir",
      prompt: "Ela não é experiente o bastante para esse cargo.",
      bank: [
        "She",
        "isn't",
        "experienced",
        "enough",
        "for",
        "this",
        "role",
        "too",
        "much",
      ],
      answer: ["She", "isn't", "experienced", "enough", "for", "this", "role"],
      explanation:
        "A forma negativa é “not + adjetivo + enough”: a ordem de “enough” nunca muda.",
    },
    {
      kind: "falar",
      prompt: "This coffee is too hot to drink right now.",
      pt: "Este café está quente demais para beber agora.",
      tip: "“Too hot” liga em “tu-RÓT”, com o “h” aspirado. O “t” de “too” é forte e curto.",
    },
    {
      kind: "falar",
      prompt: "The apartment is big enough for the three of us.",
      pt: "O apartamento é grande o suficiente para nós três.",
      tip: "“Enough” soa “i-NÂF”, com o “gh” virando “f”. O acento cai na segunda sílaba.",
    },
    {
      kind: "ouvirPalavra",
      audio: "too much",
      options: [
        "demais (incontável)",
        "muitos (contável)",
        "suficiente",
        "muito pouco",
      ],
      answer: 0,
      explanation:
        "“Too much” acompanha incontáveis: “too much sugar”. Para contáveis, “too many”: “too many people”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "not old enough",
      options: [
        "não é velho o bastante",
        "é velho demais",
        "é bem velho",
        "não é tão velho assim",
      ],
      answer: 0,
      explanation:
        "“Not + adjetivo + enough” significa falta: ele não tem a idade mínima necessária.",
    },
    {
      kind: "ouvirFrase",
      audio: "This coffee is too hot to drink.",
      pt: "Este café está quente demais para beber.",
      options: [
        "This coffee is too hot to drink.",
        "This coffee is hot enough to drink.",
        "This coffee is too hot to eat.",
        "This coffee is very hot to drink.",
      ],
      answer: 0,
      explanation:
        "“Too hot” indica problema, não intensidade neutra. “Very” não carrega esse sentido de impeditivo.",
    },
    {
      kind: "ouvirFrase",
      audio: "She isn't experienced enough for this role.",
      pt: "Ela não é experiente o bastante para esse cargo.",
      options: [
        "She isn't experienced enough for this role.",
        "She isn't too experienced for this role.",
        "She is experienced enough for this role.",
        "She isn't experienced enough for this job.",
      ],
      answer: 0,
      explanation:
        "Ouça “enough” depois do adjetivo e o “isn't” antes: os dois juntos formam a ideia de falta de experiência.",
    },
  ],
}
