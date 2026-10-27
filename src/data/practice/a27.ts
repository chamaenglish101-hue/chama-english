import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Collocations de alto nível — 10 perguntas. */
export const A27_PRACTICE: LessonPracticeContent = {
  id: "a27",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "We need to ___ this concern with the client.",
      hint: "Precisamos levantar essa preocupação com o cliente.",
      options: ["raise", "rise", "lift", "put"],
      answer: 0,
      explanation:
        "“Raise a concern” é levantar uma preocupação. “Rise” é intransitivo e não aceita objeto.",
    },
    {
      kind: "completar",
      prompt: "She played a ___ role in the project.",
      hint: "Ela teve um papel fundamental no projeto.",
      options: ["key", "big", "strong", "high"],
      answer: 0,
      explanation:
        "A collocation consagrada é “play a key role”. “A big role” existe, mas perde a força de “key”.",
    },
    {
      kind: "traduzir",
      prompt: "Finalmente chegamos a um acordo.",
      bank: ["We", "finally", "reached", "an", "agreement", "arrived", "made"],
      answer: ["We", "finally", "reached", "an", "agreement"],
      explanation:
        "Em inglês um acordo se “reaches”, não se “arrives”: o verbo certo é “reach an agreement”.",
    },
    {
      kind: "traduzir",
      prompt: "Precisamos cumprir o prazo.",
      bank: ["We", "need", "to", "meet", "the", "deadline", "reach", "make"],
      answer: ["We", "need", "to", "meet", "the", "deadline"],
      explanation:
        "Prazos se cumprem com “meet a deadline”. “Reach” combina com acordo e conclusão, não com prazo.",
    },
    {
      kind: "falar",
      prompt: "We need to raise this concern with the client.",
      pt: "Precisamos levantar essa preocupação com o cliente.",
      tip: "“Raise” tem som de “z”: “rêiz”. Diferente de “rise”, que não aparece aqui.",
    },
    {
      kind: "falar",
      prompt: "She played a key role in the project.",
      pt: "Ela teve um papel fundamental no projeto.",
      tip: "Concentre o peso em “key”: é o adjetivo que dá força à collocation inteira.",
    },
    {
      kind: "ouvirPalavra",
      audio: "meet a deadline",
      options: [
        "cumprir um prazo",
        "marcar um prazo",
        "estender o prazo",
        "perder o prazo",
      ],
      answer: 0,
      explanation:
        "“Meet a deadline” é entregar dentro do prazo combinado — collocation fixa do mundo profissional.",
    },
    {
      kind: "ouvirPalavra",
      audio: "reach an agreement",
      options: [
        "chegar a um acordo",
        "assinar um documento",
        "romper o contrato",
        "fazer uma proposta",
      ],
      answer: 0,
      explanation:
        "“Reach an agreement” é o verbo natural para negociações que terminam bem.",
    },
    {
      kind: "ouvirFrase",
      audio: "We need to raise this concern with the client.",
      pt: "Precisamos levantar essa preocupação com o cliente.",
      options: [
        "We need to raise this concern with the client.",
        "We need to rise this concern with the client.",
        "We need to raise this concern to the client.",
        "We need raising this concern with the client.",
      ],
      answer: 0,
      explanation:
        "“Raise” é transitivo e “with” acompanha a pessoa com quem se trata o assunto.",
    },
    {
      kind: "ouvirFrase",
      audio: "We finally reached an agreement.",
      pt: "Finalmente chegamos a um acordo.",
      options: [
        "We finally reached an agreement.",
        "We finally arrived an agreement.",
        "We finally reached a agreement.",
        "We finally reached to an agreement.",
      ],
      answer: 0,
      explanation:
        "O verbo é “reach” sem preposição, e “an agreement” usa “an” por causa do som de vogal.",
    },
  ],
}
