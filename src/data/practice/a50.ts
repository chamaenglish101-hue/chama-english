import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Leitura crítica: viés, intenção e evidência — 10 perguntas. */
export const A50_PRACTICE: LessonPracticeContent = {
  id: "a50",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The report claims sales tripled — ___ the sample was tiny.",
      hint: "O relatório afirma que as vendas triplicaram — embora a amostra fosse pequena.",
      options: ["though", "because", "so", "therefore"],
      answer: 0,
      explanation:
        "“Though” insere a ressalva que enfraquece a afirmação — a marca da leitura crítica.",
    },
    {
      kind: "completar",
      prompt: "Ask ___ benefits from this framing.",
      hint: "Pergunte quem se beneficia desse enquadramento.",
      options: ["who", "whom", "which", "whose"],
      answer: 0,
      explanation:
        "“Who” é o sujeito da pergunta embutida: quem pratica a ação de se beneficiar.",
    },
    {
      kind: "traduzir",
      prompt:
        "Supostamente o sistema falhou, mas nenhum registro foi divulgado.",
      bank: [
        "Allegedly",
        "the",
        "system",
        "failed",
        "but",
        "no",
        "logs",
        "were",
        "released",
        "releases",
        "log",
      ],
      answer: [
        "Allegedly",
        "the",
        "system",
        "failed",
        "but",
        "no",
        "logs",
        "were",
        "released",
      ],
      explanation:
        "“Allegedly” deixa claro que a informação não foi confirmada — e “were released” fala dos registros no plural.",
    },
    {
      kind: "traduzir",
      prompt:
        "O relatório afirma que as vendas triplicaram, embora a amostra fosse pequena.",
      bank: [
        "The",
        "report",
        "claims",
        "that",
        "sales",
        "tripled",
        "though",
        "the",
        "sample",
        "was",
        "tiny",
        "claim",
        "trip",
      ],
      answer: [
        "The",
        "report",
        "claims",
        "that",
        "sales",
        "tripled",
        "though",
        "the",
        "sample",
        "was",
        "tiny",
      ],
      explanation:
        "“Claims” marca a afirmação não verificada; “though” traz a ressalva na mesma frase.",
    },
    {
      kind: "falar",
      prompt: "The report claims sales tripled — though the sample was tiny.",
      pt: "O relatório afirma que as vendas triplicaram — embora a amostra fosse pequena.",
      tip: "Pausa longa no travessão e tom mais baixo em “the sample was tiny”: é a ressalva.",
    },
    {
      kind: "falar",
      prompt: "Allegedly, the system failed, but no logs were released.",
      pt: "Supostamente o sistema falhou, mas nenhum registro foi divulgado.",
      tip: "Comece com “Allegedly” em tom neutro e reforce “no logs” — é a prova ausente.",
    },
    {
      kind: "ouvirPalavra",
      audio: "allegedly",
      options: ["supostamente", "comprovadamente", "claramente", "felizmente"],
      answer: 0,
      explanation:
        "“Allegedly” sinaliza acusação ou fato não confirmado, muito comum em notícias.",
    },
    {
      kind: "ouvirPalavra",
      audio: "framing",
      options: ["enquadramento", "moldura física", "resumo", "equívoco"],
      answer: 0,
      explanation:
        "Em textos críticos, “framing” é a forma escolhida de apresentar os fatos — e pode carregar viés.",
    },
    {
      kind: "ouvirFrase",
      audio: "The report claims sales tripled — though the sample was tiny.",
      pt: "O relatório afirma que as vendas triplicaram — embora a amostra fosse pequena.",
      options: [
        "The report claims sales tripled — though the sample was tiny.",
        "The report claims sales tripled — though the sample were tiny.",
        "The report claim sales tripled — though the sample was tiny.",
        "The report claims sales triped — though the sample was tiny.",
      ],
      answer: 0,
      explanation:
        "“The report” é singular (“claims”), e “the sample” também (“was”). O verbo correto é “tripled”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Ask who benefits from this framing.",
      pt: "Pergunte quem se beneficia desse enquadramento.",
      options: [
        "Ask who benefits from this framing.",
        "Ask whom benefits from this framing.",
        "Ask who benefit from this framing.",
        "Ask who benefits for this framing.",
      ],
      answer: 0,
      explanation:
        "“Who” é sujeito e nunca muda; “benefits” concorda no singular e a preposição é “from”.",
    },
  ],
}
