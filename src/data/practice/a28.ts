import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Registro formal, neutro e informal — 10 perguntas. */
export const A28_PRACTICE: LessonPracticeContent = {
  id: "a28",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I would like to ___ an extension of the deadline.",
      hint: "Gostaria de solicitar uma prorrogação do prazo.",
      options: ["request", "ask", "beg", "say"],
      answer: 0,
      explanation:
        "“Request an extension” é a escolha formal para pedidos por escrito em contexto profissional.",
    },
    {
      kind: "completar",
      prompt: "We ___ to inform you that your application was not selected.",
      hint: "Lamentamos informar que sua candidatura não foi selecionada.",
      options: ["regret", "sorry", "sad", "apologize"],
      answer: 0,
      explanation:
        "“We regret to inform you” é a fórmula formal usada para comunicar uma notícia ruim.",
    },
    {
      kind: "traduzir",
      prompt: "Poderia ter mais alguns dias?",
      bank: ["Could", "I", "have", "a", "few", "more", "days", "some", "can"],
      answer: ["Could", "I", "have", "a", "few", "more", "days"],
      explanation:
        "“Could I have” é o meio-termo educado na fala; “a few” indica poucos dias, sem exageros.",
    },
    {
      kind: "traduzir",
      prompt: "Lamentamos informar que o pedido atrasou.",
      bank: [
        "We",
        "regret",
        "to",
        "inform",
        "you",
        "that",
        "the",
        "order",
        "is",
        "late",
        "regrets",
        "delayed",
      ],
      answer: [
        "We",
        "regret",
        "to",
        "inform",
        "you",
        "that",
        "the",
        "order",
        "is",
        "late",
      ],
      explanation:
        "A fórmula formal mantém “regret to inform you that”, sem contrações.",
    },
    {
      kind: "falar",
      prompt: "I would like to request an extension of the deadline.",
      pt: "Gostaria de solicitar uma prorrogação do prazo.",
      tip: "Mantenha o ritmo pausado e sem contrações: é o tom que o registro formal exige.",
    },
    {
      kind: "falar",
      prompt: "Could I have a few more days?",
      pt: "Poderia ter mais alguns dias?",
      tip: "“Could I have” vira “cud-ai-ráv”. Bem colado, com o “have” quase sem “h”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to request",
      options: [
        "solicitar (formal)",
        "pedir emprestado",
        "exigir por contrato",
        "reclamar de",
      ],
      answer: 0,
      explanation:
        "“Request” pertence ao registro formal e aparece em e-mails, formulários e documentos oficiais.",
    },
    {
      kind: "ouvirPalavra",
      audio: "just to let you know",
      options: [
        "só para você saber",
        "só para avisar depois",
        "deixe-me saber",
        "só para você fazer",
      ],
      answer: 0,
      explanation:
        "“Just to let you know” é uma abertura informal de e-mail, sem cobrança e com tom leve.",
    },
    {
      kind: "ouvirFrase",
      audio: "I would like to request an extension of the deadline.",
      pt: "Gostaria de solicitar uma prorrogação do prazo.",
      options: [
        "I would like to request an extension of the deadline.",
        "I would like to request a extension of the deadline.",
        "I would like request an extension of the deadline.",
        "I like to request an extension of the deadline.",
      ],
      answer: 0,
      explanation:
        "“Would like to + verbo” é a estrutura educada, e “an extension” precisa do “an” antes do som de vogal.",
    },
    {
      kind: "ouvirFrase",
      audio: "Could I have a few more days?",
      pt: "Poderia ter mais alguns dias?",
      options: [
        "Could I have a few more days?",
        "Could I have some more days?",
        "Could I have few more days?",
        "Could I had a few more days?",
      ],
      answer: 0,
      explanation:
        "“A few” é a escolha natural na conversa cotidiana. “Some” soaria estranho com um pedido tão específico.",
    },
  ],
}
