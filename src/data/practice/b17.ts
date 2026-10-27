import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** No restaurante: pedindo comida — 10 perguntas. */
export const B17_PRACTICE: LessonPracticeContent = {
  id: "b17",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "I'd ___ the grilled chicken, please.",
      hint: "Eu gostaria do frango grelhado, por favor.",
      options: ["like", "want", "have", "take"],
      answer: 0,
      explanation:
        "“I'd like” (I would like) é a fórmula educada de pedir. “I want” está correto mas soa seco, quase uma ordem.",
    },
    {
      kind: "completar",
      prompt: "Could we have the ___, please? We're ready to pay.",
      hint: "Poderia trazer a conta, por favor? Estamos prontos para pagar.",
      options: ["bill", "menu", "tip", "course"],
      answer: 0,
      explanation:
        "“Bill” é a conta. “Menu” é o cardápio e “tip” é a gorjeta — que só entra depois de pagar.",
    },
    {
      kind: "traduzir",
      prompt: "Eu gostaria de uma água sem gás, por favor.",
      bank: [
        "I'd",
        "like",
        "a",
        "still",
        "water",
        "please",
        "sparkling",
        "want",
      ],
      answer: ["I'd", "like", "a", "still", "water", "please"],
      explanation:
        "“Still water” é sem gás; “sparkling water” é com gás. O “please” fecha o pedido com educação.",
    },
    {
      kind: "traduzir",
      prompt: "Este prato é picante? Não posso comer pimenta.",
      bank: [
        "Is",
        "this",
        "dish",
        "spicy",
        "I",
        "can't",
        "eat",
        "pepper",
        "Do",
        "hot",
      ],
      answer: ["Is", "this", "dish", "spicy", "I", "can't", "eat", "pepper"],
      explanation:
        "A pergunta começa com “Is” porque usamos o verbo to be. “Spicy” é picante; “hot” também serve, mas é ambíguo.",
    },
    {
      kind: "falar",
      prompt: "I'd like the grilled chicken with salad, please.",
      pt: "Eu gostaria do frango grelhado com salada, por favor.",
      tip: "“I'd like” soa como “aid-laik”, tudo colado. O “d” quase desaparece na fala rápida.",
    },
    {
      kind: "falar",
      prompt: "Could we have the bill, please?",
      pt: "Poderia trazer a conta, por favor?",
      tip: "“Could” tem o “l” mudo: soa “cud”. É o mesmo pedido de “can”, só que mais educado.",
    },

    {
      kind: "ouvirPalavra",
      audio: "the bill",
      options: ["a conta", "o cardápio", "a gorjeta", "a entrada"],
      answer: 0,
      explanation:
        "“Bill” é a conta a pagar. Em inglês britânico informal, o mesmo papel se chama “the bill” também — “check” é a versão americana.",
    },
    {
      kind: "ouvirPalavra",
      audio: "a tip",
      options: ["uma gorjeta", "uma dica", "uma entrada", "uma bebida"],
      answer: 0,
      explanation:
        "No restaurante “tip” é a gorjeta. Fora dele, “a tip” também significa “uma dica” — o contexto decide.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'd like the grilled chicken, please.",
      pt: "Eu gostaria do frango grelhado, por favor.",
      options: [
        "I'd like the grilled chicken, please.",
        "I'd like the fried chicken, please.",
        "I'd like the grilled fish, please.",
        "I'd like the grilled chicken salad, please.",
      ],
      answer: 0,
      explanation:
        "Ouça “grilled” com o “d” final e sem a palavra “salad”. “Fried” (frito) é a troca mais provável.",
    },
    {
      kind: "ouvirFrase",
      audio: "Is this dish spicy?",
      pt: "Este prato é picante?",
      options: [
        "Is this dish spicy?",
        "Is this dish sweet?",
        "Is this drink spicy?",
        "Is that dish spicy?",
      ],
      answer: 0,
      explanation:
        "A pergunta sobe no fim e a palavra-chave é “spicy”. “Sweet” é doce e “drink” é bebida — sentidos bem diferentes.",
    },
  ],
}
