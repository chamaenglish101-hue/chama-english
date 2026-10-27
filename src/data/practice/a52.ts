import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Anotações durante palestras — 10 perguntas. */
export const A52_PRACTICE: LessonPracticeContent = {
  id: "a52",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "First, I'll cover the context; then the data; and ___, the recommendations.",
      hint: "Primeiro vou cobrir o contexto; depois os dados; e por fim as recomendações.",
      options: ["finally", "firstly", "secondly", "meanwhile"],
      answer: 0,
      explanation:
        "“Finally” fecha a sequência anunciada pelo palestrante — e essa estrutura vale como mapa da sua anotação.",
    },
    {
      kind: "completar",
      prompt: "Let me pause here — this is the key ___.",
      hint: "Deixe-me parar aqui — esta é a conclusão principal.",
      options: ["takeaway", "takeaway's", "giveaway", "takeout"],
      answer: 0,
      explanation:
        "“Takeaway” é a ideia-chave que você deve levar da palestra; é o alvo da anotação.",
    },
    {
      kind: "traduzir",
      prompt: "Por outro lado, o custo pode ser mais alto no primeiro ano.",
      bank: [
        "On",
        "the",
        "other",
        "hand",
        "the",
        "cost",
        "may",
        "be",
        "higher",
        "in",
        "the",
        "first",
        "year",
        "on the hand",
      ],
      answer: [
        "On",
        "the",
        "other",
        "hand",
        "the",
        "cost",
        "may",
        "be",
        "higher",
        "in",
        "the",
        "first",
        "year",
      ],
      explanation:
        "“On the other hand” é o marcador que sinaliza a virada do argumento — anote-o com destaque.",
    },
    {
      kind: "traduzir",
      prompt: "Para resumir, o método reduz custos sem perder qualidade.",
      bank: [
        "To",
        "sum",
        "up",
        "the",
        "method",
        "cuts",
        "costs",
        "without",
        "losing",
        "quality",
        "sums",
        "cut",
      ],
      answer: [
        "To",
        "sum",
        "up",
        "the",
        "method",
        "cuts",
        "costs",
        "without",
        "losing",
        "quality",
      ],
      explanation:
        "“To sum up” anuncia o fechamento; depois dele vem a frase que resume toda a palestra.",
    },
    {
      kind: "falar",
      prompt:
        "First, I'll cover the context; then the data; and finally, the recommendations.",
      pt: "Primeiro vou cobrir o contexto; depois os dados; e por fim as recomendações.",
      tip: "Marque bem “First”, “then” e “finally”: são os sinais de estrutura que você anota.",
    },
    {
      kind: "falar",
      prompt: "Let me pause here — this is the key takeaway.",
      pt: "Deixe-me parar aqui — esta é a conclusão principal.",
      tip: "Desça a velocidade em “key takeaway”: é onde a caneta precisa estar pronta.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to sum up",
      options: [
        "para resumir",
        "para somar valores",
        "para acrescentar",
        "para encerrar a sessão",
      ],
      answer: 0,
      explanation:
        "“To sum up” é o marcador de conclusão oral mais comum em palestras e reuniões.",
    },
    {
      kind: "ouvirPalavra",
      audio: "takeaway",
      options: [
        "ideia-chave, conclusão",
        "retirada do local",
        "comida para levar",
        "anotação incompleta",
      ],
      answer: 0,
      explanation:
        "No contexto de apresentações, “takeaway” é a mensagem principal — não o sentido literal de retirar algo.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "First, I'll cover the context; then the data; and finally, the recommendations.",
      pt: "Primeiro vou cobrir o contexto; depois os dados; e por fim as recomendações.",
      options: [
        "First, I'll cover the context; then the data; and finally, the recommendations.",
        "First, I'll cover the context; then the data; and finally, the recommendation.",
        "First, I cover the context; then the data; and finally, the recommendations.",
        "First, I'll cover the contexts; then the data; and finally, the recommendations.",
      ],
      answer: 0,
      explanation:
        "“I'll cover” marca o futuro da apresentação, e “recommendations” fica no plural como o resto da lista.",
    },
    {
      kind: "ouvirFrase",
      audio: "On the other hand, the cost may be higher in the first year.",
      pt: "Por outro lado, o custo pode ser mais alto no primeiro ano.",
      options: [
        "On the other hand, the cost may be higher in the first year.",
        "On the other hand, the cost may be higher on the first year.",
        "On other hand, the cost may be higher in the first year.",
        "On the other hands, the cost may be higher in the first year.",
      ],
      answer: 0,
      explanation:
        "A expressão tem artigo (“the other hand”) e usa “in the first year” para período.",
    },
  ],
}
