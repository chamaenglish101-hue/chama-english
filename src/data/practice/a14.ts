import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Nominalização: transformar verbos em substantivos — 10 perguntas. */
export const A14_PRACTICE: LessonPracticeContent = {
  id: "a14",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The ___ of the new system took three months.",
      hint: "A implementação do novo sistema levou três meses.",
      options: ["implementation", "implement", "implementing", "implemented"],
      answer: 0,
      explanation:
        "O verbo “implement” vira o substantivo “implementation”, típico da escrita acadêmica e corporativa.",
    },
    {
      kind: "completar",
      prompt: "There was a significant ___ in sales last quarter.",
      hint: "Houve um aumento significativo nas vendas no último trimestre.",
      options: ["increase", "increased", "increasing", "increases"],
      answer: 0,
      explanation:
        "“A significant increase” nominaliza o aumento e permite colocá-lo como sujeito da frase.",
    },
    {
      kind: "traduzir",
      prompt: "Nossa falha em responder nos custou o contrato.",
      bank: [
        "Our",
        "failure",
        "to",
        "respond",
        "cost",
        "us",
        "the",
        "contract",
        "failed",
        "fails",
      ],
      answer: [
        "Our",
        "failure",
        "to",
        "respond",
        "cost",
        "us",
        "the",
        "contract",
      ],
      explanation:
        "“Failure to respond” é a nominalização de “we failed to respond” — mais formal e condensada.",
    },
    {
      kind: "traduzir",
      prompt: "A implementação do novo sistema levou três meses.",
      bank: [
        "The",
        "implementation",
        "of",
        "the",
        "new",
        "system",
        "took",
        "three",
        "months",
        "implement",
        "implemented",
      ],
      answer: [
        "The",
        "implementation",
        "of",
        "the",
        "new",
        "system",
        "took",
        "three",
        "months",
      ],
      explanation:
        "A nominalização deixa o substantivo “implementation” como sujeito e o verbo pode voltar ao singular.",
    },
    {
      kind: "falar",
      prompt: "The implementation of the new system took three months.",
      pt: "A implementação do novo sistema levou três meses.",
      tip: "Pronuncie “implementation” em cinco golpes: im-ple-men-TÊI-shan. O “of the” vira quase “ov-da”.",
    },
    {
      kind: "falar",
      prompt: "There was a significant increase in sales.",
      pt: "Houve um aumento significativo nas vendas.",
      tip: "“There was a” sai rápido e o peso vai em “significant” e “increase”. Esse é o ritmo de relatório.",
    },
    {
      kind: "ouvirPalavra",
      audio: "improvement",
      options: ["melhoria", "melhorar", "melhorado", "muito melhor"],
      answer: 0,
      explanation:
        "“Improvement” é o substantivo de “improve” e costuma aparecer em avaliações e relatórios de desempenho.",
    },
    {
      kind: "ouvirPalavra",
      audio: "reduction",
      options: ["redução", "reduzir", "reduzido", "reduto"],
      answer: 0,
      explanation:
        "“Reduction” nominaliza o verbo “reduce”. O par “reduction / increase” descreve tendências numéricas.",
    },
    {
      kind: "ouvirFrase",
      audio: "The implementation of the new system took three months.",
      pt: "A implementação do novo sistema levou três meses.",
      options: [
        "The implementation of the new system took three months.",
        "The implement of the new system took three months.",
        "The implementation of the new system take three months.",
        "The implementation the new system took three months.",
      ],
      answer: 0,
      explanation:
        "O substantivo precisa da preposição “of” para ligar ao complemento, e o sujeito singular mantém “took”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Our failure to respond cost us the contract.",
      pt: "Nossa falha em responder nos custou o contrato.",
      options: [
        "Our failure to respond cost us the contract.",
        "Our fail to respond cost us the contract.",
        "Our failure to respond costs us the contract.",
        "Our failure responding cost us the contract.",
      ],
      answer: 0,
      explanation:
        "Depois do substantivo “failure” vem o infinitivo com “to”: “failure to respond”, sempre nessa ordem.",
    },
  ],
}
