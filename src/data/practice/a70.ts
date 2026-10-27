import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Escrita para textos avaliados e profissionais — 10 perguntas. */
export const A70_PRACTICE: LessonPracticeContent = {
  id: "a70",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "In academic writing, avoid contractions and ___ informal phrasal verbs.",
      hint: "Na escrita acadêmica, evite contrações e expressões informais.",
      options: ["avoid", "avoiding", "avoided", "avoids"],
      answer: 0,
      explanation:
        "Os dois verbos ficam no imperativo da recomendação: “avoid contractions and avoid informal…”, com o segundo elíptico.",
    },
    {
      kind: "completar",
      prompt:
        "The report was ___ into four sections, each with a clear heading.",
      hint: "O relatório foi dividido em quatro seções, cada uma com um título claro.",
      options: ["divided", "divide", "dividing", "divides"],
      answer: 0,
      explanation:
        "Depois de “was” na passiva, usa-se o particípio: “was divided into four sections”.",
    },
    {
      kind: "traduzir",
      prompt:
        "O relatório foi dividido em quatro seções, cada uma com um título claro.",
      bank: [
        "The",
        "report",
        "was",
        "divided",
        "into",
        "four",
        "sections",
        "each",
        "with",
        "a",
        "clear",
        "heading",
        "divide",
        "on",
      ],
      answer: [
        "The",
        "report",
        "was",
        "divided",
        "into",
        "four",
        "sections",
        "each",
        "with",
        "a",
        "clear",
        "heading",
      ],
      explanation:
        "A estrutura “was divided into + cada uma com…” é típica de texto profissional organizado.",
    },
    {
      kind: "traduzir",
      prompt:
        "Esta proposta descreve o problema, o método e os resultados esperados.",
      bank: [
        "This",
        "proposal",
        "describes",
        "the",
        "problem",
        "the",
        "method",
        "and",
        "the",
        "expected",
        "results",
        "describe",
        "expect",
      ],
      answer: [
        "This",
        "proposal",
        "describes",
        "the",
        "problem",
        "the",
        "method",
        "and",
        "the",
        "expected",
        "results",
      ],
      explanation:
        "A frase-guia do texto anuncia a estrutura completa — e mantém o verbo no presente do singular.",
    },
    {
      kind: "falar",
      prompt:
        "The report was divided into four sections, each with a clear heading.",
      pt: "O relatório foi dividido em quatro seções, cada uma com um título claro.",
      tip: "Acento em “DIVided” e “CLEAR heading”: mostre que a estrutura do texto é deliberada.",
    },
    {
      kind: "falar",
      prompt:
        "This proposal describes the problem, the method and the expected results.",
      pt: "Esta proposta descreve o problema, o método e os resultados esperados.",
      tip: "Pausa curta entre cada item da lista: o ouvinte precisa ouvir três blocos distintos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "concise",
      options: ["conciso, direto", "confuso", "consistente", "comprometido"],
      answer: 0,
      explanation:
        "“Concise” é dizer o necessário sem rodeios — elogio frequente em textos avaliados.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to revise",
      options: [
        "revisar e melhorar um texto",
        "reescrever do zero",
        "resumir um capítulo",
        "publicar um documento",
      ],
      answer: 0,
      explanation:
        "“To revise” é a etapa de reescrever para clareza e coerência, não apenas corrigir erros.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "The report was divided into four sections, each with a clear heading.",
      pt: "O relatório foi dividido em quatro seções, cada uma com um título claro.",
      options: [
        "The report was divided into four sections, each with a clear heading.",
        "The report was divided in four sections, each with a clear heading.",
        "The report was divide into four sections, each with a clear heading.",
        "The report was divided into four section, each with a clear heading.",
      ],
      answer: 0,
      explanation:
        "A estrutura é “divide into + plural”, e o particípio correto é “divided”.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "Make sure every paragraph has one main idea and a clear link to the next.",
      pt: "Garanta que cada parágrafo tenha uma ideia principal e uma ligação clara com o seguinte.",
      options: [
        "Make sure every paragraph has one main idea and a clear link to the next.",
        "Make sure every paragraph have one main idea and a clear link to the next.",
        "Make sure every paragraphs has one main idea and a clear link to the next.",
        "Make sure every paragraph has one main idea and a clear lint to the next.",
      ],
      answer: 0,
      explanation:
        "“Every paragraph” fica no singular e pede “has”; “link” é a ligação entre ideias — “lint” não existe aqui.",
    },
  ],
}
