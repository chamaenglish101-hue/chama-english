import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Coesão avançada: conectores e progressão — 10 perguntas. */
export const A49_PRACTICE: LessonPracticeContent = {
  id: "a49",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "___ the cost, the upgrade paid for itself in a year.",
      hint: "Apesar do custo, a atualização se pagou em um ano.",
      options: ["Notwithstanding", "Because of", "Thanks to", "In addition to"],
      answer: 0,
      explanation:
        "“Notwithstanding” é a forma formal de “apesar de” e sustenta o contraste mesmo vindo antes do substantivo.",
    },
    {
      kind: "completar",
      prompt: "Sales rose ___ retention fell, which is a warning sign.",
      hint: "As vendas subiram enquanto a retenção caiu, o que é um sinal de alerta.",
      options: ["whereas", "because", "so", "therefore"],
      answer: 0,
      explanation:
        "“Whereas” contrapõe duas informações na mesma frase, sem que uma seja causa da outra.",
    },
    {
      kind: "traduzir",
      prompt: "O plano era ambicioso, embora pouco financiado.",
      bank: [
        "The",
        "plan",
        "was",
        "ambitious",
        "albeit",
        "underfunded",
        "although",
        "underfunding",
      ],
      answer: ["The", "plan", "was", "ambitious", "albeit", "underfunded"],
      explanation:
        "“Albeit” é o conector reduzido que equivale a “although” antes de uma palavra apenas.",
    },
    {
      kind: "traduzir",
      prompt: "Apesar do custo, a atualização se pagou em um ano.",
      bank: [
        "Notwithstanding",
        "the",
        "cost",
        "the",
        "upgrade",
        "paid",
        "for",
        "itself",
        "in",
        "a",
        "year",
        "Notwithstand",
        "pays",
      ],
      answer: [
        "Notwithstanding",
        "the",
        "cost",
        "the",
        "upgrade",
        "paid",
        "for",
        "itself",
        "in",
        "a",
        "year",
      ],
      explanation:
        "“Notwithstanding the cost” abre a frase com o contraponto já dado, sem exigir “of”.",
    },
    {
      kind: "falar",
      prompt:
        "Notwithstanding the cost, the upgrade paid for itself in a year.",
      pt: "Apesar do custo, a atualização se pagou em um ano.",
      tip: "Acento principal em “COST” e “PAID”: o conector leva apenas um toque.",
    },
    {
      kind: "falar",
      prompt: "Sales rose whereas retention fell, which is a warning sign.",
      pt: "As vendas subiram enquanto a retenção caiu, o que é um sinal de alerta.",
      tip: "Faça uma pausa antes de “whereas” para deixar clara a virada do dado.",
    },
    {
      kind: "ouvirPalavra",
      audio: "notwithstanding",
      options: ["apesar de", "por meio de", "além de", "por causa de"],
      answer: 0,
      explanation:
        "“Notwithstanding” é conector formal de concessão, comum em relatórios e contratos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "albeit",
      options: ["embora", "além disso", "assim que", "a menos que"],
      answer: 0,
      explanation:
        "“Albeit” funciona como “although”, mas exige vir colado a uma palavra ou expressão curta.",
    },
    {
      kind: "ouvirFrase",
      audio: "Sales rose whereas retention fell, which is a warning sign.",
      pt: "As vendas subiram enquanto a retenção caiu, o que é um sinal de alerta.",
      options: [
        "Sales rose whereas retention fell, which is a warning sign.",
        "Sales rose whereas retention fall, which is a warning sign.",
        "Sales rose where as retention fell, which is a warning sign.",
        "Sales rise whereas retention fell, which is a warning sign.",
      ],
      answer: 0,
      explanation:
        "Os dois verbos ficam no passado (“rose”, “fell”), e “whereas” é escrito junto.",
    },
    {
      kind: "ouvirFrase",
      audio: "The plan was ambitious, albeit underfunded.",
      pt: "O plano era ambicioso, embora pouco financiado.",
      options: [
        "The plan was ambitious, albeit underfunded.",
        "The plan was ambitious, albeit underfund.",
        "The plan was ambitious, albeit underfunding.",
        "The plan was ambitious, all be it underfunded.",
      ],
      answer: 0,
      explanation:
        "“Albeit” é uma única palavra e vem seguido do adjetivo “underfunded”.",
    },
  ],
}
