import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Presente contínuo: acontecendo agora — 10 perguntas. */
export const I03_PRACTICE: LessonPracticeContent = {
  id: "i03",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "They ___ dinner at the moment.",
      hint: "Eles estão preparando o jantar no momento.",
      options: ["are cooking", "cook", "cooks", "cooked"],
      answer: 0,
      explanation:
        "“At the moment” indica ação em andamento: verbo to be + “-ing”. Com “they” usamos “are”.",
    },
    {
      kind: "completar",
      prompt: "She ___ working today. She's on vacation.",
      hint: "Ela não está trabalhando hoje. Está de férias.",
      options: ["isn't", "doesn't", "aren't", "not"],
      answer: 0,
      explanation:
        "A negativa do contínuo é feita no verbo to be: “she isn't working”. “Doesn't” pertence ao presente simples.",
    },
    {
      kind: "traduzir",
      prompt: "O que você está fazendo agora mesmo?",
      bank: ["What", "are", "you", "doing", "right", "now", "do", "is"],
      answer: ["What", "are", "you", "doing", "right", "now"],
      explanation:
        "Em “What are you doing?”, o verbo to be vem antes do sujeito e o verbo principal fica em “-ing”.",
    },
    {
      kind: "traduzir",
      prompt: "Estou esperando o ônibus no momento.",
      bank: [
        "I'm",
        "waiting",
        "for",
        "the",
        "bus",
        "at",
        "the",
        "moment",
        "wait",
      ],
      answer: ["I'm", "waiting", "for", "the", "bus", "at", "the", "moment"],
      explanation:
        "“To wait for” é sempre com “for”. E o contínuo pede “I'm waiting”, não “I wait”.",
    },
    {
      kind: "falar",
      prompt: "I'm studying English right now, so I can't talk.",
      pt: "Estou estudando inglês agora mesmo, então não posso falar.",
      tip: "“Studying” tem três sílabas, com o acento em “STÂ-din”. Ligue “I'm studying” numa só respiração.",
    },
    {
      kind: "falar",
      prompt: "What are you doing? — I'm waiting for the bus.",
      pt: "O que você está fazendo? — Estou esperando o ônibus.",
      tip: "Na pergunta, o “are” é fraco e rápido: “uót-a-ju-DU-in”. A entonação sobe no “doing”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "right now",
      options: ["agora mesmo", "mais tarde", "à direita", "todo dia"],
      answer: 0,
      explanation:
        "“Right now” reforça o agora: “agora mesmo”. É o marcador que sempre puxa o presente contínuo.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to wait for",
      options: ["esperar por", "acordar", "andar", "desistir"],
      answer: 0,
      explanation:
        "“Wait for” nunca aparece sem o “for” quando há um objeto: “wait for the bus”, “wait for me”.",
    },
    {
      kind: "ouvirFrase",
      audio: "She isn't working today.",
      pt: "Ela não está trabalhando hoje.",
      options: [
        "She isn't working today.",
        "She doesn't work today.",
        "She isn't working tomorrow.",
        "He isn't working today.",
      ],
      answer: 0,
      explanation:
        "“Isn't working” é o contínuo; “doesn't work” seria o hábito. A diferença de sentido é grande.",
    },
    {
      kind: "ouvirFrase",
      audio: "What are you doing right now?",
      pt: "O que você está fazendo agora mesmo?",
      options: [
        "What are you doing right now?",
        "What do you do right now?",
        "What are you doing tonight?",
        "Where are you going right now?",
      ],
      answer: 0,
      explanation:
        "Ouça “doing” em “-ing” e “right now” no fim. “What do you do?” pergunta a profissão, não a ação.",
    },
  ],
}
