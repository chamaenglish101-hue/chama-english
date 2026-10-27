import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Idioms do mundo do trabalho — 10 perguntas. */
export const A26_PRACTICE: LessonPracticeContent = {
  id: "a26",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Let's get the ball ___ with a kickoff meeting.",
      hint: "Vamos dar o pontapé inicial com uma reunião de abertura.",
      options: ["rolling", "rolling on", "run", "moving"],
      answer: 0,
      explanation:
        "“Get the ball rolling” é começar algo e ganhar ritmo. Junto vem “with a kickoff meeting”.",
    },
    {
      kind: "completar",
      prompt: "I'll ___ base with you on Thursday.",
      hint: "Falo com você rapidamente na quinta.",
      options: ["touch", "make", "reach", "take"],
      answer: 0,
      explanation:
        "“Touch base with someone” é uma conversa curta para alinhar rapidamente.",
    },
    {
      kind: "traduzir",
      prompt: "Me mantenha informado, por favor.",
      bank: ["Keep", "me", "in", "the", "loop", "please", "loops", "keeps"],
      answer: ["Keep", "me", "in", "the", "loop", "please"],
      explanation:
        "“In the loop” é estar ciente do que acontece. “Out of the loop” é o oposto: ficar sem informação.",
    },
    {
      kind: "traduzir",
      prompt: "A ideia não funcionou, então voltamos à estaca zero.",
      bank: [
        "The",
        "idea",
        "didn't",
        "work",
        "so",
        "we're",
        "back",
        "to",
        "the",
        "drawing",
        "board",
        "draws",
      ],
      answer: [
        "The",
        "idea",
        "didn't",
        "work",
        "so",
        "we're",
        "back",
        "to",
        "the",
        "drawing",
        "board",
      ],
      explanation:
        "“Back to the drawing board” é recomeçar do zero depois de um plano que não deu certo.",
    },
    {
      kind: "falar",
      prompt: "Let's get the ball rolling with a kickoff meeting.",
      pt: "Vamos dar o pontapé inicial com uma reunião de abertura.",
      tip: "“Get the ball rolling” escorre como “guet-da-ból-RÔU-lin”. Mantenha um ritmo único, sem quebras.",
    },
    {
      kind: "falar",
      prompt: "I'll touch base with you on Thursday.",
      pt: "Falo com você rapidamente na quinta.",
      tip: "“Touch base” soa “tátch-bêis”. O “with you” encosta como “uí-tchu”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "in the loop",
      options: [
        "informado, ciente",
        "em círculo",
        "fora do assunto",
        "em laço fechado",
      ],
      answer: 0,
      explanation:
        "Estar “in the loop” significa receber as informações e participar das decisões que circulam no grupo.",
    },
    {
      kind: "ouvirPalavra",
      audio: "touch base",
      options: [
        "alinhar rapidamente",
        "tocar a base física",
        "fazer uma reunião longa",
        "confirmar por escrito",
      ],
      answer: 0,
      explanation:
        "“Touch base” é um contato breve, normalmente para checar status ou alinhar o próximo passo.",
    },
    {
      kind: "ouvirFrase",
      audio: "Keep me in the loop, please.",
      pt: "Me mantenha informado, por favor.",
      options: [
        "Keep me in the loop, please.",
        "Keep me on the loop, please.",
        "Keep me in loop, please.",
        "Keep in the loop me, please.",
      ],
      answer: 0,
      explanation:
        "A preposição é “in” e o artigo “the” faz parte da expressão. O pronome vem antes dela.",
    },
    {
      kind: "ouvirFrase",
      audio: "Let's get the ball rolling with a kickoff meeting.",
      pt: "Vamos dar o pontapé inicial com uma reunião de abertura.",
      options: [
        "Let's get the ball rolling with a kickoff meeting.",
        "Let's get the ball roll with a kickoff meeting.",
        "Let's get ball rolling with a kickoff meeting.",
        "Let's get the ball rolling a kickoff meeting.",
      ],
      answer: 0,
      explanation:
        "“Rolling” fica no gerúndio e a preposição “with” liga a reunião de abertura ao início do trabalho.",
    },
  ],
}
