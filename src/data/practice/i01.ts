import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Passado simples: verbos regulares — 10 perguntas. */
export const I01_PRACTICE: LessonPracticeContent = {
  id: "i01",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "She ___ TV last night after dinner.",
      hint: "Ela assistiu TV ontem à noite depois do jantar.",
      options: ["watched", "watch", "watching", "was watch"],
      answer: 0,
      explanation:
        "Passado simples de “watch” é “watched”. “Last night” fecha o fato no passado.",
    },
    {
      kind: "completar",
      prompt: "___ you finish the report yesterday?",
      hint: "Você terminou o relatório ontem?",
      options: ["Did", "Do", "Were", "Have"],
      answer: 0,
      explanation:
        "Pergunta no passado simples usa “did” no início e o verbo volta à forma base: “Did you finish?”",
    },
    {
      kind: "traduzir",
      prompt: "Trabalhei em casa ontem.",
      bank: ["I", "worked", "from", "home", "yesterday", "work", "did"],
      answer: ["I", "worked", "from", "home", "yesterday"],
      explanation:
        "“Worked” já marca o passado, então não se usa “did”. A forma é igual para todas as pessoas.",
    },
    {
      kind: "traduzir",
      prompt: "Nós visitamos meus pais no fim de semana passado.",
      bank: [
        "We",
        "visited",
        "my",
        "parents",
        "last",
        "weekend",
        "visit",
        "in",
      ],
      answer: ["We", "visited", "my", "parents", "last", "weekend"],
      explanation:
        "“Last weekend” não leva preposição. E o verbo regular ganha “-ed”: visit → visited.",
    },
    {
      kind: "falar",
      prompt: "I worked from home yesterday and I finished everything.",
      pt: "Trabalhei em casa ontem e terminei tudo.",
      tip: "O “-ed” final soa como “t” depois de som surdo: “uórkt”, “fínisht”. Não diga “uór-ked”.",
    },
    {
      kind: "falar",
      prompt: "Did you call me this morning? — Yes, I called twice.",
      pt: "Você me ligou hoje de manhã? — Sim, liguei duas vezes.",
      tip: "Na pergunta, “did you” junta em “díd-ju”. Na resposta, o “-ed” de “called” soa como “d”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "two days ago",
      options: [
        "dois dias atrás",
        "em dois dias",
        "duas vezes",
        "às duas horas",
      ],
      answer: 0,
      explanation:
        "“Ago” conta para trás a partir de agora: “two days ago” é dois dias atrás. Para o futuro seria “in two days”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "last weekend",
      options: [
        "no fim de semana passado",
        "no próximo fim de semana",
        "durante a semana",
        "todo fim de semana",
      ],
      answer: 0,
      explanation:
        "“Last” marca o passado. Em “next weekend” o sentido se inverte — e nenhum dos dois leva preposição.",
    },
    {
      kind: "ouvirFrase",
      audio: "Did you finish the report?",
      pt: "Você terminou o relatório?",
      options: [
        "Did you finish the report?",
        "Do you finish the report?",
        "Did you finish the project?",
        "Did she finish the report?",
      ],
      answer: 0,
      explanation:
        "“Did” já marca o passado, então o verbo fica em “finish”, sem “-ed”. É o erro mais comum nessa pergunta.",
    },
    {
      kind: "ouvirFrase",
      audio: "We visited my parents last weekend.",
      pt: "Visitamos meus pais no fim de semana passado.",
      options: [
        "We visited my parents last weekend.",
        "We visited my parents this weekend.",
        "We invited my parents last weekend.",
        "They visited my parents last weekend.",
      ],
      answer: 0,
      explanation:
        "Ouça “last” no fim e “visited” com o “-ed”. “Invited” muda o sentido e “this” muda o tempo.",
    },
  ],
}
