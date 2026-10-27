import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Gerúndio (-ing) ou infinitivo (to + verbo) — 10 perguntas. */
export const I13_PRACTICE: LessonPracticeContent = {
  id: "i13",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I enjoy ___ to music while I cook.",
      hint: "Gosto de ouvir música enquanto cozinho.",
      options: ["listening", "to listen", "listen", "listened"],
      answer: 0,
      explanation:
        "“Enjoy” é sempre seguido de “-ing”: “enjoy listening”. Nunca aceita “to + verbo”.",
    },
    {
      kind: "completar",
      prompt: "She decided ___ for another job.",
      hint: "Ela decidiu procurar outro emprego.",
      options: ["to look", "looking", "look", "looked"],
      answer: 0,
      explanation:
        "“Decide” pede infinitivo: “decided to look”. Verbos de decisão geralmente levam “to”.",
    },
    {
      kind: "traduzir",
      prompt: "Quero aprender a falar inglês rápido.",
      bank: [
        "I",
        "want",
        "to",
        "learn",
        "to",
        "speak",
        "English",
        "fast",
        "learning",
        "speaking",
      ],
      answer: ["I", "want", "to", "learn", "to", "speak", "English", "fast"],
      explanation:
        "“Want” e “learn” pedem “to”. A sequência natural fica “want to learn to speak”.",
    },
    {
      kind: "traduzir",
      prompt: "Terminei de escrever o e-mail às seis.",
      bank: [
        "I",
        "finished",
        "writing",
        "the",
        "email",
        "at",
        "six",
        "to write",
        "wrote",
      ],
      answer: ["I", "finished", "writing", "the", "email", "at", "six"],
      explanation:
        "“Finish” é sempre seguido de “-ing”: “finished writing”. Depois do verbo, não entra “to”.",
    },
    {
      kind: "falar",
      prompt: "I enjoy listening to music while I cook.",
      pt: "Gosto de ouvir música enquanto cozinho.",
      tip: "“Enjoy listening” liga em “en-DJÓI-LÍ-sen-in”. Cuidado: nunca diga “enjoy to listen”.",
    },
    {
      kind: "falar",
      prompt: "She decided to look for another job.",
      pt: "Ela decidiu procurar outro emprego.",
      tip: "“Decided to” soa “di-SÁI-did-tu”, com o “to” bem fraco. O “ed” tem som de “d”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to finish / finishing",
      options: [
        "terminar / terminando",
        "finalizar / finalizado",
        "terminar / terminado",
        "fim / final",
      ],
      answer: 0,
      explanation:
        "A diferença é de estrutura: “finish” pede “-ing”, enquanto outros verbos como “decide” pedem “to”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I want to learn",
      options: [
        "quero aprender",
        "estou aprendendo",
        "preciso aprender",
        "gosto de aprender",
      ],
      answer: 0,
      explanation:
        "“Want to” na fala rápida vira “uána”: “I wanna learn”. É a mesma estrutura, só com som reduzido.",
    },
    {
      kind: "ouvirFrase",
      audio: "I enjoy listening to music.",
      pt: "Gosto de ouvir música.",
      options: [
        "I enjoy listening to music.",
        "I enjoy to listen to music.",
        "I enjoy listen to music.",
        "I enjoy listening to the news.",
      ],
      answer: 0,
      explanation:
        "Depois de “enjoy”, o verbo fica em “-ing”. É uma regra fixa, sem exceção.",
    },
    {
      kind: "ouvirFrase",
      audio: "She decided to look for another job.",
      pt: "Ela decidiu procurar outro emprego.",
      options: [
        "She decided to look for another job.",
        "She decided looking for another job.",
        "She decided to look for another house.",
        "She decided to find another job.",
      ],
      answer: 0,
      explanation:
        "“Decided to” com infinitivo. “Look for a job” é a expressão fixa para procurar emprego.",
    },
  ],
}
