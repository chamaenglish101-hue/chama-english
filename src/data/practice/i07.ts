import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Comparativos e superlativos — 10 perguntas. */
export const I07_PRACTICE: LessonPracticeContent = {
  id: "i07",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "This phone is ___ than that one.",
      hint: "Este celular é mais barato que aquele.",
      options: ["cheaper", "cheapest", "more cheap", "cheap"],
      answer: 0,
      explanation:
        "Adjetivo curto comparando dois itens: “cheaper than”. “More cheap” não existe.",
    },
    {
      kind: "completar",
      prompt: "That was ___ meal of the whole trip.",
      hint: "Aquela foi a melhor refeição da viagem inteira.",
      options: ["the best", "the better", "best", "more good"],
      answer: 0,
      explanation:
        "Superlativo de “good” é “the best”, e o “the” é obrigatório antes do superlativo.",
    },
    {
      kind: "traduzir",
      prompt: "São Paulo é mais cheia que Curitiba.",
      bank: [
        "São",
        "Paulo",
        "is",
        "more",
        "crowded",
        "than",
        "Curitiba",
        "most",
        "that",
      ],
      answer: ["São", "Paulo", "is", "more", "crowded", "than", "Curitiba"],
      explanation:
        "Adjetivo longo (duas sílabas ou mais) usa “more” e a comparação fecha com “than”, não “that”.",
    },
    {
      kind: "traduzir",
      prompt: "Este é o restaurante mais caro da cidade.",
      bank: [
        "This",
        "is",
        "the",
        "most",
        "expensive",
        "restaurant",
        "in",
        "the",
        "city",
        "more",
      ],
      answer: [
        "This",
        "is",
        "the",
        "most",
        "expensive",
        "restaurant",
        "in",
        "the",
        "city",
      ],
      explanation:
        "Superlativo longo é “the most expensive”. E, dentro de um lugar, usamos “in the city”.",
    },
    {
      kind: "falar",
      prompt: "This phone is cheaper than that one, but mine is the fastest.",
      pt: "Este celular é mais barato que aquele, mas o meu é o mais rápido.",
      tip: "“Cheaper than” liga como uma palavra: “CHÍ-per-dan”. “Fastest” termina com “-est” bem marcado.",
    },
    {
      kind: "falar",
      prompt: "São Paulo is more crowded than Curitiba.",
      pt: "São Paulo é mais cheia que Curitiba.",
      tip: "O acento de “crowded” cai na primeira sílaba: “CRÁU-did”. “More” soa curto, sem ênfase.",
    },
    {
      kind: "ouvirPalavra",
      audio: "better / the best",
      options: [
        "melhor / o melhor",
        "pior / o pior",
        "maior / o maior",
        "mais / o mais",
      ],
      answer: 0,
      explanation:
        "“Good” é irregular: “better” compara dois itens e “the best” aponta o extremo do grupo.",
    },
    {
      kind: "ouvirPalavra",
      audio: "worse / the worst",
      options: [
        "pior / o pior",
        "melhor / o melhor",
        "mais caro / o mais caro",
        "menor / o menor",
      ],
      answer: 0,
      explanation:
        "“Bad” também é irregular: “worse than” para comparar e “the worst” para o pior de todos.",
    },
    {
      kind: "ouvirFrase",
      audio: "This phone is cheaper than that one.",
      pt: "Este celular é mais barato que aquele.",
      options: [
        "This phone is cheaper than that one.",
        "This phone is cheaper than this one.",
        "This phone is the cheapest of all.",
        "This phone is more cheap than that one.",
      ],
      answer: 0,
      explanation:
        "Ouça “cheaper than” no meio e o contraste “this … that”. “The cheapest” seria o extremo do grupo.",
    },
    {
      kind: "ouvirFrase",
      audio: "That was the best meal of the trip.",
      pt: "Aquela foi a melhor refeição da viagem.",
      options: [
        "That was the best meal of the trip.",
        "That was the better meal of the trip.",
        "That was the best meal of the week.",
        "That was the worst meal of the trip.",
      ],
      answer: 0,
      explanation:
        "Superlativo é sempre “the best” e vem acompanhado de “of the” para indicar o grupo inteiro.",
    },
  ],
}
