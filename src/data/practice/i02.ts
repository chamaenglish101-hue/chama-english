import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Passado simples: verbos irregulares — 10 perguntas. */
export const I02_PRACTICE: LessonPracticeContent = {
  id: "i02",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "They ___ to the party last Friday.",
      hint: "Eles foram à festa na sexta passada.",
      options: ["went", "goed", "gone", "did go"],
      answer: 0,
      explanation:
        "“Go” é irregular: o passado é “went”. E depois de “did” o verbo voltaria à base, nunca “did go” no afirmativo.",
    },
    {
      kind: "completar",
      prompt: "I ___ a great book last week.",
      hint: "Li um livro ótimo na semana passada.",
      options: ["read", "readed", "reads", "red"],
      answer: 0,
      explanation:
        "“Read” não muda na escrita, só na pronúncia: no passado soa “red”. “Red” com “e” não existe como verbo escrito.",
    },
    {
      kind: "traduzir",
      prompt: "Ela comprou um celular novo no mês passado.",
      bank: [
        "She",
        "bought",
        "a",
        "new",
        "phone",
        "last",
        "month",
        "buyed",
        "did",
      ],
      answer: ["She", "bought", "a", "new", "phone", "last", "month"],
      explanation:
        "“Buy” vira “bought”. Como “bought” já está no passado, não entra auxiliar nenhum.",
    },
    {
      kind: "traduzir",
      prompt: "Não vimos o filme, vimos uma série.",
      bank: [
        "We",
        "didn't",
        "see",
        "the",
        "movie",
        "we",
        "saw",
        "a",
        "series",
        "seen",
      ],
      answer: [
        "We",
        "didn't",
        "see",
        "the",
        "movie",
        "we",
        "saw",
        "a",
        "series",
      ],
      explanation:
        "Na negativa o passado fica no auxiliar: “didn't see”. No afirmativo seguinte, o verbo vai ao passado: “we saw”.",
    },
    {
      kind: "falar",
      prompt: "I went to the beach on Sunday and I took a lot of photos.",
      pt: "Fui à praia no domingo e tirei muitas fotos.",
      tip: "“Went” e “took” são irregulares: nada de “-ed”. Ouça o “w” de “went” e o “t” final de “took”.",
    },
    {
      kind: "falar",
      prompt: "She bought a new phone and she got a good price.",
      pt: "Ela comprou um celular novo e conseguiu um bom preço.",
      tip: "“Bought” tem o “gh” mudo: soa “bot”. E “got” termina em “t” seco.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to take / took",
      options: [
        "pegar, levar / peguei",
        "falar / falei",
        "trazer / trouxe",
        "achar / achei",
      ],
      answer: 0,
      explanation:
        "“Take” é pegar ou levar; o passado “took” aparece em “I took the bus” (peguei o ônibus).",
    },
    {
      kind: "ouvirPalavra",
      audio: "to see / saw",
      options: [
        "ver / vi",
        "dizer / disse",
        "serrar / serrei",
        "sentar / sentei",
      ],
      answer: 0,
      explanation:
        "“Saw” é o passado de “see”. Cuidado: “saw” também significa “serra” como substantivo, mas o contexto decide.",
    },
    {
      kind: "ouvirFrase",
      audio: "She bought a new phone last month.",
      pt: "Ela comprou um celular novo no mês passado.",
      options: [
        "She bought a new phone last month.",
        "She bought a new phone last week.",
        "She brought a new phone last month.",
        "He bought a new phone last month.",
      ],
      answer: 0,
      explanation:
        "“Bought” com som de “bot” e “last month” no fim. “Brought” é “trouxe”, que muda o sentido por completo.",
    },
    {
      kind: "ouvirFrase",
      audio: "I went to the beach on Sunday.",
      pt: "Fui à praia no domingo.",
      options: [
        "I went to the beach on Sunday.",
        "I went to the beach on Monday.",
        "I go to the beach on Sunday.",
        "I went to the mountains on Sunday.",
      ],
      answer: 0,
      explanation:
        "Ouça “went” no passado e “Sunday” no fim. “Go” no presente indicaria hábito, não um fato do domingo passado.",
    },
  ],
}
