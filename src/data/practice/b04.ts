import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Verbo to be: am, is, are — 10 perguntas. */
export const B04_PRACTICE: LessonPracticeContent = {
  id: "b04",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "She ___ my sister. She is a teacher.",
      hint: "Ela é minha irmã. Ela é professora.",
      options: ["is", "am", "are", "be"],
      answer: 0,
      explanation: "“She” pede “is”: he, she, it → is. Nunca “she are”.",
    },
    {
      kind: "completar",
      prompt: "They ___ not at home right now.",
      hint: "Eles não estão em casa agora.",
      options: ["are", "is", "am", "does"],
      answer: 0,
      explanation:
        "“They” pede “are”. A negativa é só acrescentar “not”: “they are not”, ou “they aren't”.",
    },
    {
      kind: "traduzir",
      prompt: "Eu estou com fome.",
      bank: ["I", "am", "hungry", "is", "you", "are"],
      answer: ["I", "am", "hungry"],
      explanation:
        "Em inglês, fome e sede usam o verbo to be: “I am hungry”, “I am thirsty”. Não existe “I have hungry”.",
    },
    {
      kind: "traduzir",
      prompt: "Nós estamos prontos.",
      bank: ["We", "are", "ready", "am", "not", "is"],
      answer: ["We", "are", "ready"],
      explanation:
        "“We” sempre com “are”. A ordem é fixa: sujeito + verbo + adjetivo.",
    },
    {
      kind: "falar",
      prompt: "I am a student. She is my sister.",
      pt: "Eu sou estudante. Ela é minha irmã.",
      tip: "O “s” de “is” tem som de z: “iz”. Ligue “she is” em “shiz”.",
    },
    {
      kind: "falar",
      prompt: "Are you ready? — Yes, I am.",
      pt: "Você está pronto? — Sim, estou.",
      tip: "Na pergunta, a voz sobe no fim. Na resposta curta, nunca diga só “yes” — feche com “I am”.",
    },

    {
      kind: "ouvirPalavra",
      audio: "hungry",
      options: ["com fome", "com sono", "com pressa", "com frio"],
      answer: 0,
      explanation:
        "“Hungry” é fome. Não confunda com “angry” (com raiva): a vogal do começo é diferente.",
    },
    {
      kind: "ouvirPalavra",
      audio: "tired",
      options: ["cansado", "animado", "atrasado", "pronto"],
      answer: 0,
      explanation:
        "“Tired” é cansado, com dois sons de “ai”: “TAI-erd”. “Ready” é pronto, bem mais curto.",
    },
    {
      kind: "ouvirFrase",
      audio: "They are not at home right now.",
      pt: "Eles não estão em casa agora.",
      options: [
        "They are not at home right now.",
        "They are not at work right now.",
        "We are not at home right now.",
        "They are not at home tonight.",
      ],
      answer: 0,
      explanation:
        "Preste atenção em “they” e em “home”. As outras trocam o lugar, a pessoa ou o horário.",
    },
    {
      kind: "ouvirFrase",
      audio: "Are you ready? — Yes, I am.",
      pt: "Você está pronto? — Sim, estou.",
      options: [
        "Are you ready? — Yes, I am.",
        "Are you ready? — No, I'm not.",
        "Is she ready? — Yes, she is.",
        "Are you tired? — Yes, I am.",
      ],
      answer: 0,
      explanation:
        "A pergunta começa com “are you” e a resposta é afirmativa. Uma palavra trocada muda toda a conversa.",
    },
  ],
}
