import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Conversa leve (small talk) em qualquer situação — 10 perguntas. */
export const I25_PRACTICE: LessonPracticeContent = {
  id: "i25",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Is this your first ___ at this event?",
      hint: "É sua primeira vez neste evento?",
      options: ["time", "hour", "turn", "moment"],
      answer: 0,
      explanation:
        "“First time” é a expressão fixa para primeira vez. “First hour” seria a primeira hora do evento.",
    },
    {
      kind: "completar",
      prompt: "How do you ___ the host?",
      hint: "Como você conhece o anfitrião?",
      options: ["know", "meet", "knowing", "knew"],
      answer: 0,
      explanation:
        "“How do you know…?” pergunta qual é a relação entre as pessoas. “Meet” seria o momento do encontro.",
    },
    {
      kind: "traduzir",
      prompt: "É minha primeira vez aqui. E você?",
      bank: [
        "It's",
        "my",
        "first",
        "time",
        "here",
        "And",
        "you",
        "mine",
        "What",
        "about",
      ],
      answer: ["It's", "my", "first", "time", "here", "And", "you"],
      explanation:
        "“And you?” é a devolução curta e natural. “What about you?” também funciona.",
    },
    {
      kind: "traduzir",
      prompt: "Foi ótimo falar com você. Aproveite o resto da noite!",
      bank: [
        "It",
        "was",
        "great",
        "talking",
        "to",
        "you",
        "Enjoy",
        "the",
        "rest",
        "of",
        "the",
        "evening",
        "speak",
        "night",
      ],
      answer: [
        "It",
        "was",
        "great",
        "talking",
        "to",
        "you",
        "Enjoy",
        "the",
        "rest",
        "of",
        "the",
        "evening",
      ],
      explanation:
        "“Talking to you” é a forma fixa depois de “great”. E “the rest of the evening” fecha a conversa com simpatia.",
    },
    {
      kind: "falar",
      prompt: "Is this your first time at this event?",
      pt: "É sua primeira vez neste evento?",
      tip: "“First time” liga em “FÉRST-táim”. A entonação sobe no fim, convidando a pessoa a responder.",
    },
    {
      kind: "falar",
      prompt: "How do you know the host?",
      pt: "Como você conhece o anfitrião?",
      tip: "“How do you know” vira “rau-dju-NÔU”, tudo junto. É a pergunta clássica para abrir conversa.",
    },
    {
      kind: "ouvirPalavra",
      audio: "small talk",
      options: [
        "conversa leve, informal",
        "fala baixa",
        "conversa séria",
        "discurso curto",
      ],
      answer: 0,
      explanation:
        "“Small talk” é aquela conversa sem assunto importante, o que abre portas em qualquer evento.",
    },
    {
      kind: "ouvirPalavra",
      audio: "See you around",
      options: [
        "até logo, nos vemos por aí",
        "vejo você agora",
        "até amanhã",
        "vejo você depois de amanhã",
      ],
      answer: 0,
      explanation:
        "“See you around” é uma despedida leve, sem compromisso de data. Perfeita no fim de um evento.",
    },
    {
      kind: "ouvirFrase",
      audio: "Is this your first time here?",
      pt: "É sua primeira vez aqui?",
      options: [
        "Is this your first time here?",
        "Is this your first time in here?",
        "Is this your first day here?",
        "Is that your first time here?",
      ],
      answer: 0,
      explanation:
        "“First time here” não leva “in”. A pergunta é a abertura mais fácil para começar a conversar.",
    },
    {
      kind: "ouvirFrase",
      audio: "It was great talking to you. See you around!",
      pt: "Foi ótimo falar com você. Até logo!",
      options: [
        "It was great talking to you. See you around!",
        "It was great to talk with you. See you around!",
        "It is great talking to you. See you around!",
        "It was great talking to you. See you later!",
      ],
      answer: 0,
      explanation:
        "“It was great talking to you” é a fórmula consagrada. “See you later” implica reencontro mais próximo.",
    },
  ],
}
