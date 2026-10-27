import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Hedging: suavizar afirmações e proteger o argumento — 10 perguntas. */
export const A15_PRACTICE: LessonPracticeContent = {
  id: "a15",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The results ___ that the strategy may be working.",
      hint: "Os resultados sugerem que a estratégia pode estar funcionando.",
      options: ["suggest", "suggests", "suggesting", "suggested by"],
      answer: 0,
      explanation:
        "Em textos acadêmicos “suggest” apresenta a conclusão com cautela, sem afirmar que é certeza.",
    },
    {
      kind: "completar",
      prompt: "It could ___ argued that the deadline is too tight.",
      hint: "Pode-se argumentar que o prazo é apertado demais.",
      options: ["be", "been", "being", "is"],
      answer: 0,
      explanation:
        "“It could be argued” é a fórmula impessoal de hedging: afasta o argumento de quem escreve.",
    },
    {
      kind: "traduzir",
      prompt: "As opiniões tendem a variar sobre este tema.",
      bank: [
        "Opinions",
        "tend",
        "to",
        "vary",
        "on",
        "this",
        "topic",
        "tends",
        "varies",
      ],
      answer: ["Opinions", "tend", "to", "vary", "on", "this", "topic"],
      explanation:
        "“Tend to vary” descreve uma tendência geral em vez de uma regra absoluta — puro hedging.",
    },
    {
      kind: "traduzir",
      prompt: "Pode-se argumentar que o prazo é apertado demais.",
      bank: [
        "It",
        "could",
        "be",
        "argued",
        "that",
        "the",
        "deadline",
        "is",
        "too",
        "tight",
        "argue",
        "was",
      ],
      answer: [
        "It",
        "could",
        "be",
        "argued",
        "that",
        "the",
        "deadline",
        "is",
        "too",
        "tight",
      ],
      explanation:
        "Na passiva com modal, o verbo fica em “be argued”. É a estrutura preferida em artigos e pareceres.",
    },
    {
      kind: "falar",
      prompt: "The results suggest that the strategy may be working.",
      pt: "Os resultados sugerem que a estratégia pode estar funcionando.",
      tip: "Mantenha o tom calmo: “suggest” e “may” juntos reduzem a força da afirmação de propósito.",
    },
    {
      kind: "falar",
      prompt: "It could be argued that the deadline is too tight.",
      pt: "Pode-se argumentar que o prazo é apertado demais.",
      tip: "“Could be argued” flui em “cud-bi-ÁR-guid”. O “that” pode sair bem fraco.",
    },
    {
      kind: "ouvirPalavra",
      audio: "arguably",
      options: [
        "possivelmente, pode-se dizer",
        "certamente",
        "discutivelmente mal",
        "sem dúvida",
      ],
      answer: 0,
      explanation:
        "“Arguably” suaviza a afirmação e abre espaço para outras leituras — é hedging em uma palavra.",
    },
    {
      kind: "ouvirPalavra",
      audio: "it appears",
      options: ["parece que", "apareceu", "vai aparecer", "está aparecendo"],
      answer: 0,
      explanation:
        "“It appears” apresenta a informação com cautela, mais maleável que um “it is” categórico.",
    },
    {
      kind: "ouvirFrase",
      audio: "The results suggest that the strategy may be working.",
      pt: "Os resultados sugerem que a estratégia pode estar funcionando.",
      options: [
        "The results suggest that the strategy may be working.",
        "The results suggests that the strategy may be working.",
        "The results suggest that the strategy may work yesterday.",
        "The results suggest that the strategy must be working.",
      ],
      answer: 0,
      explanation:
        "“Results” no plural pede “suggest” sem “s”. E “must” substituiria a cautela por certeza, quebrando o hedge.",
    },
    {
      kind: "ouvirFrase",
      audio: "It could be argued that the deadline is too tight.",
      pt: "Pode-se argumentar que o prazo é apertado demais.",
      options: [
        "It could be argued that the deadline is too tight.",
        "It could be argue that the deadline is too tight.",
        "It could be argued that the deadline too tight.",
        "It can be argued that the deadline is too tight.",
      ],
      answer: 0,
      explanation:
        "“Could be argued” mantém a passiva correta e o “that” introduz a oração completa com “is”.",
    },
  ],
}
