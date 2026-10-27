import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Orações relativas reduzidas — 10 perguntas. */
export const A12_PRACTICE: LessonPracticeContent = {
  id: "a12",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The woman ___ by the door is my manager.",
      hint: "A mulher que está em pé na porta é minha gestora.",
      options: ["standing", "stands", "stood", "is standing"],
      answer: 0,
      explanation:
        "A relativa reduzida elimina “who is” e deixa só o gerúndio: “the woman standing by the door”.",
    },
    {
      kind: "completar",
      prompt: "The documents ___ yesterday need a signature.",
      hint: "Os documentos enviados ontem precisam de assinatura.",
      options: ["sent", "sending", "were sent", "send"],
      answer: 0,
      explanation:
        "Na passiva reduzida, o particípio basta: “the documents sent yesterday” equivale a “which were sent”.",
    },
    {
      kind: "traduzir",
      prompt: "Ela foi a primeira pessoa a responder.",
      bank: [
        "She",
        "was",
        "the",
        "first",
        "person",
        "to",
        "answer",
        "answering",
        "who answers",
      ],
      answer: ["She", "was", "the", "first", "person", "to", "answer"],
      explanation:
        "Depois de “the first”, “the last” ou “the only”, o inglês usa o infinitivo com “to”.",
    },
    {
      kind: "traduzir",
      prompt: "A mulher que está em pé na porta é minha gestora.",
      bank: [
        "The",
        "woman",
        "standing",
        "by",
        "the",
        "door",
        "is",
        "my",
        "manager",
        "stands",
        "stood",
      ],
      answer: [
        "The",
        "woman",
        "standing",
        "by",
        "the",
        "door",
        "is",
        "my",
        "manager",
      ],
      explanation:
        "“Standing by the door” substitui “who is standing” — mais curto e típico da escrita densa.",
    },
    {
      kind: "falar",
      prompt: "The woman standing by the door is my manager.",
      pt: "A mulher que está em pé na porta é minha gestora.",
      tip: "Não pause entre “woman” e “standing”: a redução só soa natural se ficar colada.",
    },
    {
      kind: "falar",
      prompt: "The documents sent yesterday need a signature.",
      pt: "Os documentos enviados ontem precisam de assinatura.",
      tip: "“Sent” termina com som de “t”. Una bem com “yesterday” para manter o ritmo.",
    },
    {
      kind: "ouvirPalavra",
      audio: "the first to",
      options: [
        "o primeiro a",
        "o primeiro de",
        "primeiro que",
        "no início de",
      ],
      answer: 0,
      explanation:
        "“The first to…” substitui a relativa completa: “the first person to arrive” = “the first person who arrived”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "involved",
      options: ["envolvido", "envolvendo", "envolveu", "a envolver"],
      answer: 0,
      explanation:
        "“People involved” é uma passiva reduzida e equivale a “people who are involved”.",
    },
    {
      kind: "ouvirFrase",
      audio: "The woman standing by the door is my manager.",
      pt: "A mulher que está em pé na porta é minha gestora.",
      options: [
        "The woman standing by the door is my manager.",
        "The woman who standing by the door is my manager.",
        "The woman stands by the door is my manager.",
        "The woman standing by the door are my manager.",
      ],
      answer: 0,
      explanation:
        "Se você usa “who”, o verbo precisa aparecer: “who is standing”. Na redução, o verbo desaparece e o gerúndio assume.",
    },
    {
      kind: "ouvirFrase",
      audio: "The documents sent yesterday need a signature.",
      pt: "Os documentos enviados ontem precisam de assinatura.",
      options: [
        "The documents sent yesterday need a signature.",
        "The documents sending yesterday need a signature.",
        "The documents were sent yesterday need a signature.",
        "The documents sent yesterday needs a signature.",
      ],
      answer: 0,
      explanation:
        "Na redução passiva usa-se o particípio “sent”, e o sujeito plural mantém “need” sem “s”.",
    },
  ],
}
