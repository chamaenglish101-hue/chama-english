import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Expressões idiomáticas do dia a dia — 10 perguntas. */
export const A24_PRACTICE: LessonPracticeContent = {
  id: "a24",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I'm ___ this week, can we talk on Friday?",
      hint: "Estou atolado esta semana, podemos falar na sexta?",
      options: ["swamped", "swept", "swapped", "swallowed"],
      answer: 0,
      explanation:
        "“Swamped” descreve estar atolado de trabalho, com mais tarefas do que tempo disponível.",
    },
    {
      kind: "completar",
      prompt: "It took a while, but I got the ___ of it.",
      hint: "Levou um tempo, mas peguei o jeito.",
      options: ["hang", "hand", "hold", "head"],
      answer: 0,
      explanation:
        "“Get the hang of it” é pegar o jeito de algo depois de praticar um pouco.",
    },
    {
      kind: "traduzir",
      prompt: "Vamos encarar e contratar mais gente.",
      bank: [
        "Let's",
        "bite",
        "the",
        "bullet",
        "and",
        "hire",
        "more",
        "people",
        "bit",
        "hiring",
      ],
      answer: [
        "Let's",
        "bite",
        "the",
        "bullet",
        "and",
        "hire",
        "more",
        "people",
      ],
      explanation:
        "“Bite the bullet” é decidir encarar algo difícil em vez de adiar indefinidamente.",
    },
    {
      kind: "traduzir",
      prompt: "Estou atolado esta semana, podemos falar na sexta?",
      bank: [
        "I'm",
        "swamped",
        "this",
        "week",
        "can",
        "we",
        "talk",
        "on",
        "Friday",
        "am",
        "talks",
      ],
      answer: [
        "I'm",
        "swamped",
        "this",
        "week",
        "can",
        "we",
        "talk",
        "on",
        "Friday",
      ],
      explanation:
        "“Swamped” é informal e muito usado em e-mails curtos para justificar a demora nas respostas.",
    },
    {
      kind: "falar",
      prompt: "I'm swamped this week, can we talk on Friday?",
      pt: "Estou atolado esta semana, podemos falar na sexta?",
      tip: "“Swamped” soa “suómpt”. O “this week” sai rápido e o “can we” encosta como “cãn-ui”.",
    },
    {
      kind: "falar",
      prompt: "It took a while, but I got the hang of it.",
      pt: "Levou um tempo, mas peguei o jeito.",
      tip: "“Got the hang of it” flui em “gát-da-rén-gov-it”. Mantenha tudo ligado como uma frase só.",
    },
    {
      kind: "ouvirPalavra",
      audio: "on the fence",
      options: [
        "indeciso",
        "apoiando a decisão",
        "em cima do muro literal",
        "fora do assunto",
      ],
      answer: 0,
      explanation:
        "“On the fence” descreve quem ainda não se decidiu entre duas opções.",
    },
    {
      kind: "ouvirPalavra",
      audio: "bite the bullet",
      options: [
        "encarar, tomar a decisão difícil",
        "morder a bala literalmente",
        "desistir no meio",
        "comer rápido",
      ],
      answer: 0,
      explanation:
        "“Bite the bullet” significa aceitar o custo de uma decisão difícil e seguir em frente.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm swamped this week, can we talk on Friday?",
      pt: "Estou atolado esta semana, podemos falar na sexta?",
      options: [
        "I'm swamped this week, can we talk on Friday?",
        "I'm swamped this week, can we talk in Friday?",
        "I'm swamp this week, can we talk on Friday?",
        "I'm swamped this week, we can talk on Friday?",
      ],
      answer: 0,
      explanation:
        "“Swamped” é o adjetivo, e dias da semana usam “on”. A pergunta precisa do auxiliar “can” antes de “we”.",
    },
    {
      kind: "ouvirFrase",
      audio: "It took a while, but I got the hang of it.",
      pt: "Levou um tempo, mas peguei o jeito.",
      options: [
        "It took a while, but I got the hang of it.",
        "It took a while, but I got the hand of it.",
        "It took a while, but I get the hang of it.",
        "It took a while, but I got hang of it.",
      ],
      answer: 0,
      explanation:
        "A expressão é fixa: “the hang of it”, com “hang” e o artigo. No passado, “got” acompanha “took”.",
    },
  ],
}
