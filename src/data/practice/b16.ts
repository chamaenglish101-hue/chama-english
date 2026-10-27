import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Like, love, hate + -ing — 10 perguntas. */
export const B16_PRACTICE: LessonPracticeContent = {
  id: "b16",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "I like ___ books at night before sleeping.",
      hint: "Gosto de ler livros à noite antes de dormir.",
      options: ["reading", "read", "to reading", "reads"],
      answer: 0,
      explanation:
        "Depois de “like” o próximo verbo toma forma: ou “-ing” ou “to”. “Reading” é a escolha mais natural na fala.",
    },
    {
      kind: "completar",
      prompt: "She loves ___ to music on the bus.",
      hint: "Ela adora ouvir música no ônibus.",
      options: ["listening", "listen", "listens", "to listening"],
      answer: 0,
      explanation:
        "“Loves” leva o “-s” da terceira pessoa, e o verbo seguinte fica em “-ing”: loves listening.",
    },
    {
      kind: "traduzir",
      prompt: "Eu adoro cozinhar para a minha família.",
      bank: [
        "I",
        "love",
        "cooking",
        "for",
        "my",
        "family",
        "cook",
        "to cooking",
      ],
      answer: ["I", "love", "cooking", "for", "my", "family"],
      explanation:
        "“I love cooking” — o verbo do gosto seguido do outro verbo em “-ing”. Nunca “I love cook”.",
    },
    {
      kind: "traduzir",
      prompt: "Você gosta de viajar? — Sim, adoro.",
      bank: [
        "Do",
        "you",
        "like",
        "traveling",
        "Yes",
        "I",
        "love",
        "it",
        "Are",
        "travel",
      ],
      answer: ["Do", "you", "like", "traveling", "Yes", "I", "love", "it"],
      explanation:
        "A pergunta usa “do” porque “like” é verbo comum: “Do you like…?”. Na resposta, “it” substitui “traveling”.",
    },
    {
      kind: "falar",
      prompt: "I love listening to music, but I hate getting up early.",
      pt: "Adoro ouvir música, mas detesto acordar cedo.",
      tip: "“Getting” tem dois “t” seguidos, curtos. Ligue “hate getting” como “rêit-GUÉ-rin”, sem pausa.",
    },
    {
      kind: "falar",
      prompt: "Do you like traveling? — Yes, I love it.",
      pt: "Você gosta de viajar? — Sim, adoro.",
      tip: "Na pergunta o “do” é fraco e rápido. A entonação sobe em “traveling” e desce na resposta.",
    },

    {
      kind: "ouvirPalavra",
      audio: "to enjoy",
      options: ["curtir, gostar de", "entrar", "trabalhar", "enviar"],
      answer: 0,
      explanation:
        "“Enjoy” é curtir. Depois dele vem verbo em “-ing”: “I enjoy reading”. Não se diz “I enjoy to read”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to hate",
      options: ["odiar, detestar", "esperar", "ajudar", "esquentar"],
      answer: 0,
      explanation:
        "“Hate” é detestar. Cuidado com o “h” aspirado: não soa como “ate”, que é “comeu”.",
    },
    {
      kind: "ouvirFrase",
      audio: "She hates getting up early.",
      pt: "Ela detesta acordar cedo.",
      options: [
        "She hates getting up early.",
        "She hates getting up late.",
        "He hates getting up early.",
        "She likes getting up early.",
      ],
      answer: 0,
      explanation:
        "“Hates” com “s” final marca a terceira pessoa, e “early” é a palavra que fecha o sentido.",
    },
    {
      kind: "ouvirFrase",
      audio: "I love cooking for my family.",
      pt: "Eu adoro cozinhar para a minha família.",
      options: [
        "I love cooking for my family.",
        "I love cooking with my family.",
        "I love eating with my family.",
        "I love cooking for my friends.",
      ],
      answer: 0,
      explanation:
        "Ouça “for” antes de “my family”, indicando que ela cozinha em favor deles, e não junto com eles.",
    },
  ],
}
