import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Negociação com estratégia — 10 perguntas. */
export const A32_PRACTICE: LessonPracticeContent = {
  id: "a32",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "If you can move on the deadline, we can ___ on the price.",
      hint: "Se você flexibilizar o prazo, nós flexibilizamos o preço.",
      options: ["move", "moving", "moved", "moves"],
      answer: 0,
      explanation:
        "A negociação troca concessões com o mesmo verbo: “move on the deadline” e “move on the price”.",
    },
    {
      kind: "completar",
      prompt: "That's a bit above our budget. What can we do to ___ the gap?",
      hint: "Está um pouco acima do nosso orçamento. O que podemos fazer para fechar a diferença?",
      options: ["close", "closing", "closed", "closes"],
      answer: 0,
      explanation:
        "“Close the gap” é reduzir a diferença entre o que se pede e o que se pode pagar.",
    },
    {
      kind: "traduzir",
      prompt: "Agradeço a oferta, mas eu esperava algo mais perto de 90.",
      bank: [
        "I",
        "appreciate",
        "the",
        "offer",
        "but",
        "I",
        "was",
        "hoping",
        "for",
        "something",
        "closer",
        "to",
        "90",
        "hope",
        "close",
      ],
      answer: [
        "I",
        "appreciate",
        "the",
        "offer",
        "but",
        "I",
        "was",
        "hoping",
        "for",
        "something",
        "closer",
        "to",
        "90",
      ],
      explanation:
        "“I was hoping for” suaviza a contraproposta sem desmerecer a oferta recebida.",
    },
    {
      kind: "traduzir",
      prompt: "Vamos chegar a um meio-termo.",
      bank: ["Let's", "meet", "halfway", "meets", "half way"],
      answer: ["Let's", "meet", "halfway"],
      explanation:
        "“Meet halfway” é o meio-termo em que cada lado cede um pouco para o acordo sair.",
    },
    {
      kind: "falar",
      prompt: "If you can move on the deadline, we can move on the price.",
      pt: "Se você flexibilizar o prazo, nós flexibilizamos o preço.",
      tip: "Use a mesma entonação nos dois “move”: cria o paralelismo de troca que a negociação pede.",
    },
    {
      kind: "falar",
      prompt:
        "I appreciate the offer, but I was hoping for something closer to 90.",
      pt: "Agradeço a oferta, mas eu esperava algo mais perto de 90.",
      tip: "“I was hoping” vira “ai-uós-RÔU-pin”. Tom ameno, sem confronto direto.",
    },
    {
      kind: "ouvirPalavra",
      audio: "leverage",
      options: [
        "poder de barganha",
        "alavanca física",
        "desconto aplicado",
        "cronograma",
      ],
      answer: 0,
      explanation:
        "“Leverage” é a vantagem que fortalece sua posição — informação, prazo ou alternativa disponível.",
    },
    {
      kind: "ouvirPalavra",
      audio: "deal breaker",
      options: [
        "ponto que inviabiliza o acordo",
        "quem fecha o acordo",
        "desconto final",
        "cláusula de renovação",
      ],
      answer: 0,
      explanation:
        "“Deal breaker” é a condição inegociável que, se não for atendida, encerra a negociação.",
    },
    {
      kind: "ouvirFrase",
      audio: "If you can move on the deadline, we can move on the price.",
      pt: "Se você flexibilizar o prazo, nós flexibilizamos o preço.",
      options: [
        "If you can move on the deadline, we can move on the price.",
        "If you can move on the deadline, we can move the price.",
        "If you can move in the deadline, we can move on the price.",
        "If you can moving on the deadline, we can move on the price.",
      ],
      answer: 0,
      explanation:
        "Depois do modal “can” o verbo fica na forma base, e a preposição da concessão é “on”.",
    },
    {
      kind: "ouvirFrase",
      audio: "That's a bit above our budget. What can we do to close the gap?",
      pt: "Está um pouco acima do nosso orçamento. O que podemos fazer para fechar a diferença?",
      options: [
        "That's a bit above our budget. What can we do to close the gap?",
        "That's a bit above our budget. What can we do to close the gap's?",
        "That's a bit above our budget. What can we do close the gap?",
        "That's a bit above our budget. What we can do to close the gap?",
      ],
      answer: 0,
      explanation:
        "“To close” é o infinitivo de propósito, e a pergunta começa com “What can we do”.",
    },
  ],
}
