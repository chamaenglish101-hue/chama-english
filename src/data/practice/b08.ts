import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Números, horas e preços — 10 perguntas. */
export const B08_PRACTICE: LessonPracticeContent = {
  id: "b08",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "The train leaves at a quarter ___ six — that's 5:45.",
      hint: "O trem parte às quinze para as seis — ou seja, 5h45.",
      options: ["to", "past", "of", "for"],
      answer: 0,
      explanation:
        "“A quarter to six” é quinze minutos antes das seis. Depois da hora cheia, usa-se “past”: “a quarter past six”.",
    },
    {
      kind: "completar",
      prompt: "That's forty-five dollars and twenty ___.",
      hint: "São quarenta e cinco dólares e vinte centavos.",
      options: ["cents", "cent", "centavo", "money"],
      answer: 0,
      explanation:
        "Depois de um número maior que um, o substantivo vai para o plural: “twenty cents”.",
    },
    {
      kind: "traduzir",
      prompt: "O trem parte às 8h45.",
      bank: [
        "The",
        "train",
        "leaves",
        "at",
        "eight",
        "forty-five",
        "bus",
        "arrives",
      ],
      answer: ["The", "train", "leaves", "at", "eight", "forty-five"],
      explanation:
        "Em inglês, a hora vem depois de “at” e lê-se por partes: eight forty-five. Sem “h” nem “minutos”.",
    },
    {
      kind: "traduzir",
      prompt: "Quanto custa isso?",
      bank: ["How", "much", "is", "it", "many", "do"],
      answer: ["How", "much", "is", "it"],
      explanation:
        "“How much” é para preço e para coisas incontáveis. Para contar itens, use “how many”.",
    },
    {
      kind: "falar",
      prompt: "The train leaves at eight forty-five.",
      pt: "O trem parte às 8h45.",
      tip: "O “t” de forty sai leve, quase um “r” americano. Não diga “fórty” com “t” forte.",
    },
    {
      kind: "falar",
      prompt: "How much is it? — It's fifteen dollars.",
      pt: "Quanto custa? — São quinze dólares.",
      tip: "“It's” é uma sílaba só. Ligue “how much is it” como “hau-MATCH-iz-it”.",
    },

    {
      kind: "ouvirPalavra",
      audio: "half past two",
      options: [
        "duas e meia",
        "duas e quinze",
        "meia-noite e meia",
        "duas horas",
      ],
      answer: 0,
      explanation:
        "“Half past two” é 2h30. Já “half two” no inglês britânico informal também é 2h30 — mas “half past” não deixa dúvida.",
    },
    {
      kind: "ouvirPalavra",
      audio: "how much is it?",
      options: ["Quanto custa?", "Quantos são?", "Onde fica?", "Como foi?"],
      answer: 0,
      explanation:
        "“How much is it?” só serve para preço. Para quantidade contável, a pergunta é “how many”.",
    },
    {
      kind: "ouvirFrase",
      audio: "The train leaves at eight forty-five.",
      pt: "O trem parte às 8h45.",
      options: [
        "The train leaves at eight forty-five.",
        "The train leaves at eight fifteen.",
        "The bus leaves at eight forty-five.",
        "The train arrives at eight forty-five.",
      ],
      answer: 0,
      explanation:
        "Duas palavras decidem: “train” e “leaves”. As outras trocam o veículo, o horário ou o verbo.",
    },
    {
      kind: "ouvirFrase",
      audio: "That's forty-five dollars and twenty cents.",
      pt: "São quarenta e cinco dólares e vinte centavos.",
      options: [
        "That's forty-five dollars and twenty cents.",
        "That's fourteen dollars and twenty cents.",
        "That's forty-five dollars and twelve cents.",
        "That's forty-five euros and twenty cents.",
      ],
      answer: 0,
      explanation:
        "Ouça “forty-five” com o “r” depois do “fo” e “cents” no plural, porque são vinte.",
    },
  ],
}
