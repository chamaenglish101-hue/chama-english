import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Cumprimentos e despedidas — 10 perguntas. */
export const B02_PRACTICE: LessonPracticeContent = {
  id: "b02",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "___ morning! How are you today?",
      hint: "Bom dia! Como você está hoje?",
      options: ["Good", "Nice", "Fine", "Well"],
      answer: 0,
      explanation:
        "O cumprimento completo é “Good morning”. “Nice” pede “to meet you” e “Fine” responde como você está — não abre a saudação.",
    },
    {
      kind: "completar",
      prompt: "See you ___. Good night!",
      hint: "Até amanhã. Boa noite!",
      options: ["tomorrow", "yesterday", "today", "now"],
      answer: 0,
      explanation:
        "“See you tomorrow” marca um encontro no dia seguinte. “See you yesterday” seria voltar no tempo — impossível.",
    },
    {
      kind: "traduzir",
      prompt: "Boa tarde, senhora Silva.",
      bank: ["Good", "afternoon", "Mrs.", "Silva", "night", "morning"],
      answer: ["Good", "afternoon", "Mrs.", "Silva"],
      explanation:
        "“Good afternoon” vale do meio-dia até o fim da tarde. Depois disso, o cumprimento passa a ser “good evening”.",
    },
    {
      kind: "traduzir",
      prompt: "Tchau, até logo!",
      bank: ["Bye", "see", "you", "later", "good", "morning"],
      answer: ["Bye", "see", "you", "later"],
      explanation:
        "“See you later” é o “até logo” do dia a dia. Note o “you” no meio: nunca “see later you”.",
    },
    {
      kind: "falar",
      prompt: "Good morning! How are you today?",
      pt: "Bom dia! Como você está hoje?",
      tip: "Atenção ao “H” de how: é soprado, como um sopro leve. Sem isso, “how” soa como “ow”.",
    },
    {
      kind: "falar",
      prompt: "Hi, Ana! Nice to see you again.",
      pt: "Oi, Ana! Que bom te ver de novo.",
      tip: "Ligue “Nice to” como “naiss-tu”: a vogal do “to” quase desaparece.",
    },

    {
      kind: "ouvirPalavra",
      audio: "goodbye",
      options: ["tchau", "bom dia", "até amanhã", "bem-vindo"],
      answer: 0,
      explanation:
        "“Goodbye” é a despedida completa. Na fala rápida vira só “bye” — mesma ideia, menos letras.",
    },
    {
      kind: "ouvirPalavra",
      audio: "good evening",
      options: [
        "boa noite (ao chegar)",
        "boa noite (ao sair)",
        "boa tarde",
        "bom dia",
      ],
      answer: 0,
      explanation:
        "“Good evening” é o cumprimento da noite. Para se despedir à noite, use “good night”.",
    },
    {
      kind: "ouvirFrase",
      audio: "How are you today?",
      pt: "Como você está hoje?",
      options: [
        "How are you today?",
        "How old are you today?",
        "Where are you today?",
        "How are you feeling tonight?",
      ],
      answer: 0,
      explanation:
        "Ouça o fim da frase: “today”. As outras trocam o verbo, a pergunta de idade ou o horário.",
    },
    {
      kind: "ouvirFrase",
      audio: "Nice to see you again.",
      pt: "Que bom te ver de novo.",
      options: [
        "Nice to see you again.",
        "Nice to meet you, Ana.",
        "See you again tomorrow.",
        "Nice to be here again.",
      ],
      answer: 0,
      explanation:
        "“Nice to see you” é para quem você já conhece; “nice to meet you” só na primeira vez.",
    },
  ],
}
