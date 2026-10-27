import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Expressões idiomáticas frequentes — 10 perguntas. */
export const I31_PRACTICE: LessonPracticeContent = {
  id: "i31",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "The exam was a piece of ___. I finished in twenty minutes.",
      hint: "A prova foi moleza. Terminei em vinte minutos.",
      options: ["cake", "bread", "pie", "sugar"],
      answer: 0,
      explanation:
        "“A piece of cake” significa muito fácil. A expressão não tem nada a ver com comida de verdade.",
    },
    {
      kind: "completar",
      prompt: "___ a leg at the presentation tomorrow!",
      hint: "Boa sorte na apresentação amanhã!",
      options: ["Break", "Break a", "Shake", "Touch"],
      answer: 0,
      explanation:
        "“Break a leg” é a forma de desejar boa sorte, muito usada antes de apresentações e shows.",
    },
    {
      kind: "traduzir",
      prompt: "Isso não é do meu gosto.",
      bank: ["It's", "not", "my", "cup", "of", "tea", "no", "for", "taste"],
      answer: ["It's", "not", "my", "cup", "of", "tea"],
      explanation:
        "“Not my cup of tea” é a expressão para algo que não combina com você. Não é sobre chá.",
    },
    {
      kind: "traduzir",
      prompt: "Vamos garantir que estamos alinhados sobre isso.",
      bank: [
        "Let's",
        "make",
        "sure",
        "we're",
        "on",
        "the",
        "same",
        "page",
        "in",
        "agree",
      ],
      answer: ["Let's", "make", "sure", "we're", "on", "the", "same", "page"],
      explanation:
        "“On the same page” significa estar alinhado. É expressão comum em reuniões de trabalho.",
    },
    {
      kind: "falar",
      prompt: "The exam was a piece of cake.",
      pt: "A prova foi moleza.",
      tip: "“Piece of cake” liga em “PÍS-ov-KÊIK”. A expressão inteira é dita num só bloco.",
    },
    {
      kind: "falar",
      prompt: "Break a leg at the presentation!",
      pt: "Boa sorte na apresentação!",
      tip: "Não se preocupe com o sentido literal: “break a leg” é só a forma carinhosa de desejar boa sorte.",
    },
    {
      kind: "ouvirPalavra",
      audio: "a piece of cake",
      options: [
        "moleza, muito fácil",
        "um pedaço de bolo",
        "muito doce",
        "algo caro",
      ],
      answer: 0,
      explanation:
        "Quando a situação é fácil, ela é “a piece of cake”. O sentido literal quase nunca aparece.",
    },
    {
      kind: "ouvirPalavra",
      audio: "not my cup of tea",
      options: [
        "não é do meu gosto",
        "não é meu copo",
        "não é minha vez",
        "não é o meu chá preferido",
      ],
      answer: 0,
      explanation:
        "“Not my cup of tea” diz, com delicadeza, que aquele assunto ou gosto não é para você.",
    },
    {
      kind: "ouvirFrase",
      audio: "Let's make sure we're on the same page.",
      pt: "Vamos garantir que estamos alinhados.",
      options: [
        "Let's make sure we're on the same page.",
        "Let's make sure we're on the same stage.",
        "Let's make sure we're in the same page.",
        "Let's be sure we're on the same page.",
      ],
      answer: 0,
      explanation:
        "A preposição é “on the same page”. Trocar por “in” ou usar “stage” muda a imagem completamente.",
    },
    {
      kind: "ouvirFrase",
      audio: "Break a leg at the presentation!",
      pt: "Boa sorte na apresentação!",
      options: [
        "Break a leg at the presentation!",
        "Break a leg on the presentation!",
        "Break a leg at the meeting!",
        "Break your leg at the presentation!",
      ],
      answer: 0,
      explanation:
        "“At the presentation” indica o evento. E a expressão é sempre “break a leg”, sem “your”.",
    },
  ],
}
