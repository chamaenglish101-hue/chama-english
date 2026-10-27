import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Modais de dedução no passado — 10 perguntas. */
export const A09_PRACTICE: LessonPracticeContent = {
  id: "a09",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The lights are off — they ___ have left.",
      hint: "As luzes estão apagadas — eles devem ter saído.",
      options: ["must", "can", "should", "would"],
      answer: 0,
      explanation:
        "“Must have left” expressa quase certeza sobre o que aconteceu. É a dedução mais forte da escala.",
    },
    {
      kind: "completar",
      prompt: "She ___ have taken the wrong bus.",
      hint: "Ela pode ter pegado o ônibus errado.",
      options: ["might", "must", "can't", "should"],
      answer: 0,
      explanation:
        "“Might have taken” abre a possibilidade sem afirmar: é uma hipótese entre outras.",
    },
    {
      kind: "traduzir",
      prompt: "Ele não pode ter escrito isso sozinho.",
      bank: [
        "He",
        "can't",
        "have",
        "written",
        "this",
        "alone",
        "must",
        "wrote",
      ],
      answer: ["He", "can't", "have", "written", "this", "alone"],
      explanation:
        "“Can't have written” marca impossibilidade lógica: a dedução contrária à evidência.",
    },
    {
      kind: "traduzir",
      prompt: "Você deveria ter me contado.",
      bank: ["You", "should", "have", "told", "me", "must", "tell"],
      answer: ["You", "should", "have", "told", "me"],
      explanation:
        "“Should have told” é a crítica sobre algo que não foi feito — muito frequente em feedback.",
    },
    {
      kind: "falar",
      prompt: "The lights are off — they must have left.",
      pt: "As luzes estão apagadas — eles devem ter saído.",
      tip: "“Must have left” emenda em “mast-av-LÉFT”. O “have” quase desaparece na fala natural.",
    },
    {
      kind: "falar",
      prompt: "He can't have written this alone.",
      pt: "Ele não pode ter escrito isso sozinho.",
      tip: "“Can't have written” sai como “kent-av-RÍ-tin”. O tom precisa ser firme: é uma impossibilidade.",
    },
    {
      kind: "ouvirPalavra",
      audio: "must have",
      options: [
        "deve ter (quase certeza)",
        "pode ter",
        "não pode ter",
        "deveria ter",
      ],
      answer: 0,
      explanation:
        "“Must have” é a dedução mais confiante: o falante quase não tem dúvida do que aconteceu.",
    },
    {
      kind: "ouvirPalavra",
      audio: "should have",
      options: ["deveria ter (crítica)", "deve ter", "teria", "costumava ter"],
      answer: 0,
      explanation:
        "“Should have” aponta o que era esperado e não aconteceu — arrependimento ou crítica.",
    },
    {
      kind: "ouvirFrase",
      audio: "The lights are off — they must have left.",
      pt: "As luzes estão apagadas — eles devem ter saído.",
      options: [
        "The lights are off — they must have left.",
        "The lights are off — they must leave.",
        "The lights are off — they might have left.",
        "The lights are off — they can't have left.",
      ],
      answer: 0,
      explanation:
        "“Must have left” traduz a dedução com quase certeza; “can't have left” diria o contrário do que a evidência mostra.",
    },
    {
      kind: "ouvirFrase",
      audio: "She might have taken the wrong bus.",
      pt: "Ela pode ter pegado o ônibus errado.",
      options: [
        "She might have taken the wrong bus.",
        "She might take the wrong bus.",
        "She must have taken the wrong bus.",
        "She might have took the wrong bus.",
      ],
      answer: 0,
      explanation:
        "Depois do modal vem “have” e o particípio “taken”. “Might” mantém o grau de dúvida em aberto.",
    },
  ],
}
