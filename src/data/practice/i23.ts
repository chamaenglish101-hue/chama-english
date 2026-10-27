import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Comprar roupas: tamanhos, provador e trocas — 10 perguntas. */
export const I23_PRACTICE: LessonPracticeContent = {
  id: "i23",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Do you have this ___ a medium?",
      hint: "Você tem isso tamanho médio?",
      options: ["in", "on", "at", "of"],
      answer: 0,
      explanation:
        "Para tamanhos usamos “in”: “in a medium”, “in a size 40”. É a preposição fixa nessa pergunta.",
    },
    {
      kind: "completar",
      prompt: "Can I ___ it on before I buy it?",
      hint: "Posso experimentar antes de comprar?",
      options: ["try", "trying", "to try", "tried"],
      answer: 0,
      explanation:
        "“Try on” é experimentar roupa. Depois de “can I” o verbo fica na forma base: “can I try it on”.",
    },
    {
      kind: "traduzir",
      prompt: "Gostaria de trocar por um tamanho menor.",
      bank: [
        "I'd",
        "like",
        "to",
        "exchange",
        "this",
        "for",
        "a",
        "smaller",
        "size",
        "change",
        "to",
      ],
      answer: [
        "I'd",
        "like",
        "to",
        "exchange",
        "this",
        "for",
        "a",
        "smaller",
        "size",
      ],
      explanation:
        "“Exchange … for …” é a estrutura fixa da troca. “Change” seria apenas mudar algo de lugar.",
    },
    {
      kind: "traduzir",
      prompt: "Isso está em promoção? Vocês dão algum desconto?",
      bank: [
        "Is",
        "this",
        "on",
        "sale",
        "Do",
        "you",
        "offer",
        "any",
        "discount",
        "in",
        "give",
      ],
      answer: [
        "Is",
        "this",
        "on",
        "sale",
        "Do",
        "you",
        "offer",
        "any",
        "discount",
      ],
      explanation:
        "“On sale” é em promoção; “offer a discount” é dar desconto. As duas são perguntas naturais em loja.",
    },
    {
      kind: "falar",
      prompt: "Do you have this in a medium?",
      pt: "Você tem isso tamanho médio?",
      tip: "“In a medium” liga em “i-na-MÍ-dion”, com “medium” em três sílabas rápidas.",
    },
    {
      kind: "falar",
      prompt: "Can I try it on? Where is the fitting room?",
      pt: "Posso experimentar? Onde é o provador?",
      tip: "“Try it on” liga em “TRÁI-i-ton”. O “on” fecha a expressão e precisa ser ouvido.",
    },
    {
      kind: "ouvirPalavra",
      audio: "fitting room",
      options: ["provador", "sala de espera", "estoque", "caixa"],
      answer: 0,
      explanation:
        "“Fitting room” é onde você experimenta a roupa. No Reino Unido também se usa “changing room”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "It's too small",
      options: [
        "é pequeno demais",
        "é grande demais",
        "é justo",
        "é largo demais",
      ],
      answer: 0,
      explanation:
        "“Too small” indica problema de tamanho. Para o tamanho certo, “it fits” é o que você quer dizer.",
    },
    {
      kind: "ouvirFrase",
      audio: "Do you have this in a medium?",
      pt: "Você tem isso tamanho médio?",
      options: [
        "Do you have this in a medium?",
        "Do you have this on a medium?",
        "Do you have this in a small?",
        "Does it have this in a medium?",
      ],
      answer: 0,
      explanation:
        "A preposição é “in” antes do tamanho, e o verbo auxiliar é “do” com “you”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'd like to exchange this for a smaller size.",
      pt: "Gostaria de trocar por um tamanho menor.",
      options: [
        "I'd like to exchange this for a smaller size.",
        "I'd like to exchange this for a bigger size.",
        "I'd like to change this for a smaller size.",
        "I like to exchange this for a smaller size.",
      ],
      answer: 0,
      explanation:
        "Ouça “exchange this for”. “Change” não funciona para troca de mercadoria, e “I'd like” é o pedido educado.",
    },
  ],
}
