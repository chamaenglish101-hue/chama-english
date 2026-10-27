import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Phrasal verbs do mundo dos negócios — 10 perguntas. */
export const A21_PRACTICE: LessonPracticeContent = {
  id: "a21",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I'll ___ up with the client tomorrow.",
      hint: "Vou dar seguimento com o cliente amanhã.",
      options: ["follow", "reach", "wrap", "roll"],
      answer: 0,
      explanation:
        "“Follow up” significa dar seguimento ou cobrar retorno de um assunto em aberto.",
    },
    {
      kind: "completar",
      prompt: "We're ___ out the new system in May.",
      hint: "Vamos implantar o novo sistema em maio.",
      options: ["rolling", "following", "reaching", "wrapping"],
      answer: 0,
      explanation:
        "“Roll out” é lançar ou implantar algo em larga escala: produto, sistema, campanha.",
    },
    {
      kind: "traduzir",
      prompt: "Vamos encerrar a reunião com os próximos passos.",
      bank: [
        "Let's",
        "wrap",
        "up",
        "the",
        "meeting",
        "with",
        "next",
        "steps",
        "follow",
        "roll",
      ],
      answer: [
        "Let's",
        "wrap",
        "up",
        "the",
        "meeting",
        "with",
        "next",
        "steps",
      ],
      explanation:
        "“Wrap up” encerra algo de forma organizada — quase sempre usado nas reuniões de time.",
    },
    {
      kind: "traduzir",
      prompt: "Vou entrar em contato com o fornecedor hoje.",
      bank: [
        "I'll",
        "reach",
        "out",
        "to",
        "the",
        "supplier",
        "today",
        "follow",
        "up with",
      ],
      answer: ["I'll", "reach", "out", "to", "the", "supplier", "today"],
      explanation:
        "“Reach out” é entrar em contato, muitas vezes para iniciar uma conversa ou pedir apoio.",
    },
    {
      kind: "falar",
      prompt: "I'll follow up with the client tomorrow.",
      pt: "Vou dar seguimento com o cliente amanhã.",
      tip: "Una “follow up” num bloco só: “fólou-ap”. O “with the” vira quase “uif-da”.",
    },
    {
      kind: "falar",
      prompt: "Let's wrap up the meeting with next steps.",
      pt: "Vamos encerrar a reunião com os próximos passos.",
      tip: "“Wrap up” soa “rép-ap”. Mantenha a energia alta em “next steps” para marcar o fechamento.",
    },
    {
      kind: "ouvirPalavra",
      audio: "reach out",
      options: [
        "entrar em contato",
        "alcançar fora",
        "desistir",
        "estender o prazo",
      ],
      answer: 0,
      explanation:
        "“Reach out” é o phrasal verb profissional para iniciar contato com alguém.",
    },
    {
      kind: "ouvirPalavra",
      audio: "roll out",
      options: ["lançar, implantar", "rolar para fora", "cancelar", "desligar"],
      answer: 0,
      explanation:
        "“Roll out” descreve a implantação gradual de algo novo, como uma versão de sistema.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'll follow up with the client tomorrow.",
      pt: "Vou dar seguimento com o cliente amanhã.",
      options: [
        "I'll follow up with the client tomorrow.",
        "I'll follow with the client tomorrow.",
        "I'll follow up the client tomorrow.",
        "I'll follow up with the client yesterday.",
      ],
      answer: 0,
      explanation:
        "O phrasal verb completo é “follow up with” quando o complemento é uma pessoa.",
    },
    {
      kind: "ouvirFrase",
      audio: "We're rolling out the new system in May.",
      pt: "Vamos implantar o novo sistema em maio.",
      options: [
        "We're rolling out the new system in May.",
        "We're rolling the new system in May.",
        "We're rolling out the new system on May.",
        "We're roll out the new system in May.",
      ],
      answer: 0,
      explanation:
        "O phrasal verb mantém a partícula “out” e o “in” acompanha meses. Sem “out”, perde-se o sentido de implantação.",
    },
  ],
}
