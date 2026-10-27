import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Presente simples x contínuo — 10 perguntas. */
export const I04_PRACTICE: LessonPracticeContent = {
  id: "i04",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I ___ coffee every morning before work.",
      hint: "Bebo café todas as manhãs antes do trabalho.",
      options: ["drink", "am drinking", "drinks", "drinking"],
      answer: 0,
      explanation:
        "“Every morning” indica hábito, então o presente simples: “I drink”. O contínuo seria para agora.",
    },
    {
      kind: "completar",
      prompt: "Look! It ___ outside. Take an umbrella.",
      hint: "Olha! Está chovendo lá fora. Leva um guarda-chuva.",
      options: ["is raining", "rains", "rained", "rain"],
      answer: 0,
      explanation:
        "“Look!” aponta para o que acontece neste instante, então usamos o contínuo: “it is raining”.",
    },
    {
      kind: "traduzir",
      prompt: "Normalmente pego o metrô, mas hoje estou pegando um táxi.",
      bank: [
        "I",
        "usually",
        "take",
        "the",
        "subway",
        "but",
        "today",
        "I'm",
        "taking",
        "a",
        "taxi",
        "am",
      ],
      answer: [
        "I",
        "usually",
        "take",
        "the",
        "subway",
        "but",
        "today",
        "I'm",
        "taking",
        "a",
        "taxi",
      ],
      explanation:
        "O advérbio de frequência pede o simples (“usually take”), e “today” como exceção pede o contínuo (“I'm taking”).",
    },
    {
      kind: "traduzir",
      prompt: "Ela trabalha em um banco. Agora está falando com um cliente.",
      bank: [
        "She",
        "works",
        "at",
        "a",
        "bank",
        "right",
        "now",
        "she's",
        "talking",
        "to",
        "a",
        "client",
        "talk",
      ],
      answer: [
        "She",
        "works",
        "at",
        "a",
        "bank",
        "right",
        "now",
        "she's",
        "talking",
        "to",
        "a",
        "client",
      ],
      explanation:
        "Fato permanente no simples (“works”) e ação do momento no contínuo (“she's talking”).",
    },
    {
      kind: "falar",
      prompt: "I usually take the subway, but today I'm taking a taxi.",
      pt: "Normalmente pego o metrô, mas hoje estou pegando um táxi.",
      tip: "“Usually” soa “iú-ju-a-li”, rápido. O contraste de tempos aparece na entonação: simples primeiro, contínuo depois.",
    },
    {
      kind: "falar",
      prompt: "Do you speak Spanish? — I'm learning it these days.",
      pt: "Você fala espanhol? — Estou aprendendo nesses dias.",
      tip: "“Do you” junta em “dju”. Na resposta, “I'm learning” não pode virar “I learn”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "usually",
      options: ["normalmente", "nunca", "às vezes", "raramente"],
      answer: 0,
      explanation:
        "“Usually” é o hábito mais forte que “sometimes”. Ele costuma vir antes do verbo: “I usually work”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "these days",
      options: [
        "nesses dias, atualmente",
        "naqueles dias",
        "todos os dias",
        "daqui a dias",
      ],
      answer: 0,
      explanation:
        "“These days” indica um período atual e temporário — combina bem com o presente contínuo.",
    },
    {
      kind: "ouvirFrase",
      audio: "I usually take the subway, but today I'm taking a taxi.",
      pt: "Normalmente pego o metrô, mas hoje estou pegando um táxi.",
      options: [
        "I usually take the subway, but today I'm taking a taxi.",
        "I usually take the bus, but today I'm taking a taxi.",
        "I usually take the subway, but today I'm taking the bus.",
        "I always take the subway, but today I'm taking a taxi.",
      ],
      answer: 0,
      explanation:
        "A frase mistura os dois tempos de propósito: “usually take” contrasta com “today I'm taking”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Look! It's raining outside.",
      pt: "Olha! Está chovendo lá fora.",
      options: [
        "Look! It's raining outside.",
        "Look! It rains outside.",
        "Look! It's snowing outside.",
        "Look! It's raining tomorrow.",
      ],
      answer: 0,
      explanation:
        "“It's raining” com “-ing” descreve o agora. “Snowing” é nevar, e “tomorrow” não combina com o contínuo de agora.",
    },
  ],
}
