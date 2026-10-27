import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Past perfect: o passado do passado — 10 perguntas. */
export const A01_PRACTICE: LessonPracticeContent = {
  id: "a01",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "By the time we arrived, the film ___ already started.",
      hint: "Quando chegamos, o filme já tinha começado.",
      options: ["had", "has", "was", "did"],
      answer: 0,
      explanation:
        "O fato mais antigo fica no past perfect: “had already started”. O passado simples marca o momento de referência.",
    },
    {
      kind: "completar",
      prompt: "She realized that she ___ her phone at the office.",
      hint: "Ela percebeu que tinha deixado o celular no escritório.",
      options: ["had left", "has left", "left", "was leaving"],
      answer: 0,
      explanation:
        "“Percebeu” é o passado de referência e “tinha deixado” aconteceu antes: “had left”. Assim a ordem fica clara.",
    },
    {
      kind: "traduzir",
      prompt: "Ele nunca tinha visto o mar antes daquela viagem.",
      bank: [
        "He",
        "had",
        "never",
        "seen",
        "the",
        "sea",
        "before",
        "that",
        "trip",
        "has",
        "saw",
      ],
      answer: [
        "He",
        "had",
        "never",
        "seen",
        "the",
        "sea",
        "before",
        "that",
        "trip",
      ],
      explanation:
        "Experiência anterior a um ponto passado usa “had never seen”. O advérbio entra entre o auxiliar e o particípio.",
    },
    {
      kind: "traduzir",
      prompt: "Quando cheguei à estação, o trem já tinha partido.",
      bank: [
        "When",
        "I",
        "arrived",
        "at",
        "the",
        "station",
        "the",
        "train",
        "had",
        "already",
        "left",
        "has",
        "leaves",
      ],
      answer: [
        "When",
        "I",
        "arrived",
        "at",
        "the",
        "station",
        "the",
        "train",
        "had",
        "already",
        "left",
      ],
      explanation:
        "O trem saiu antes da minha chegada, então ele leva o past perfect e a minha chegada fica no passado simples.",
    },
    {
      kind: "falar",
      prompt: "By the time we arrived, the film had already started.",
      pt: "Quando chegamos, o filme já tinha começado.",
      tip: "“Had already started” sai como “rad-ol-RÉ-di-STÁR-tid”, tudo junto. O “had” fica fraco.",
    },
    {
      kind: "falar",
      prompt: "I realized I had left my phone at home.",
      pt: "Percebi que tinha deixado o celular em casa.",
      tip: "“Had left” liga em “rad-LÉFT”, com o “d” quase colado no “l”. O sentido é de antes do perceber.",
    },
    {
      kind: "ouvirPalavra",
      audio: "by the time",
      options: [
        "quando, no momento em que",
        "a tempo de",
        "antes do tempo",
        "depois de",
      ],
      answer: 0,
      explanation:
        "“By the time” marca o momento de referência no passado e costuma vir com o past perfect na outra parte.",
    },
    {
      kind: "ouvirPalavra",
      audio: "had already",
      options: [
        "já tinha",
        "ainda não tinha",
        "estava prestes a",
        "costumava ter",
      ],
      answer: 0,
      explanation:
        "“Had already” indica que a ação se completou antes do ponto passado de que se fala.",
    },
    {
      kind: "ouvirFrase",
      audio: "By the time we arrived, the film had started.",
      pt: "Quando chegamos, o filme já tinha começado.",
      options: [
        "By the time we arrived, the film had started.",
        "By the time we arrived, the film has started.",
        "By the time we arrive, the film had started.",
        "By the time we arrived, the film had finished.",
      ],
      answer: 0,
      explanation:
        "Os dois lados precisam estar no passado: “arrived” e “had started”. Misturar com o presente quebra a ordem dos fatos.",
    },
    {
      kind: "ouvirFrase",
      audio: "I realized I had left my phone at home.",
      pt: "Percebi que tinha deixado o celular em casa.",
      options: [
        "I realized I had left my phone at home.",
        "I realized I have left my phone at home.",
        "I realize I had left my phone at home.",
        "I realized I had left my phone at the office.",
      ],
      answer: 0,
      explanation:
        "O past perfect “had left” mostra que o celular foi esquecido antes do momento de perceber.",
    },
  ],
}
