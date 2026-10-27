import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** used to e be used to: hábitos do passado — 10 perguntas. */
export const I14_PRACTICE: LessonPracticeContent = {
  id: "i14",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I ___ play tennis every weekend, but I stopped two years ago.",
      hint: "Eu costumava jogar tênis todo fim de semana, mas parei há dois anos.",
      options: ["used to", "use to", "am used to", "was used to"],
      answer: 0,
      explanation:
        "Hábito que existiu no passado e acabou é “used to + verbo base”. “Use to” sem “d” não aparece no afirmativo.",
    },
    {
      kind: "completar",
      prompt: "She's used to ___ early because of her job.",
      hint: "Ela está acostumada a acordar cedo por causa do trabalho.",
      options: ["waking up", "wake up", "woke up", "to wake up"],
      answer: 0,
      explanation:
        "“Be used to” significa estar acostumado e é seguido de “-ing”. Depois de “to” aqui vem gerúndio.",
    },
    {
      kind: "traduzir",
      prompt: "Eu costumava morar no interior quando era criança.",
      bank: [
        "I",
        "used",
        "to",
        "live",
        "in",
        "the",
        "countryside",
        "when",
        "I",
        "was",
        "a",
        "child",
        "use",
        "living",
      ],
      answer: [
        "I",
        "used",
        "to",
        "live",
        "in",
        "the",
        "countryside",
        "when",
        "I",
        "was",
        "a",
        "child",
      ],
      explanation:
        "“Used to live” marca o hábito antigo. O verbo depois de “to” fica na forma base: “live”.",
    },
    {
      kind: "traduzir",
      prompt: "Não estou acostumado a trabalhar tantas horas.",
      bank: [
        "I'm",
        "not",
        "used",
        "to",
        "working",
        "so",
        "many",
        "hours",
        "use",
        "work",
      ],
      answer: ["I'm", "not", "used", "to", "working", "so", "many", "hours"],
      explanation:
        "“Be used to + -ing” descreve costume atual. Com “hours” contável no plural, o reforço é “so many”.",
    },
    {
      kind: "falar",
      prompt: "I used to play tennis every weekend.",
      pt: "Eu costumava jogar tênis todo fim de semana.",
      tip: "“Used to” na fala vira “iús-tu”, com o “d” quase mudo. Não confunda com “use to”.",
    },
    {
      kind: "falar",
      prompt: "She's used to waking up early.",
      pt: "Ela está acostumada a acordar cedo.",
      tip: "“Used to” aqui soa “iús-tu” também, mas o verbo seguinte tem “-ing”: “waking up”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I used to",
      options: ["eu costumava", "eu estou acostumado", "eu usei", "eu preciso"],
      answer: 0,
      explanation:
        "“I used to” fala de um hábito antigo encerrado, sem dizer quando exatamente parou.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I'm used to",
      options: [
        "estou acostumado a",
        "eu costumava",
        "eu acostumei alguém",
        "eu usava sempre",
      ],
      answer: 0,
      explanation:
        "Com o verbo to be na frente, o sentido muda para costume atual — e o complemento vem em “-ing”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I used to play tennis every weekend.",
      pt: "Eu costumava jogar tênis todo fim de semana.",
      options: [
        "I used to play tennis every weekend.",
        "I use to play tennis every weekend.",
        "I'm used to playing tennis every weekend.",
        "I used to play tennis every Sunday.",
      ],
      answer: 0,
      explanation:
        "Ouça o “d” suave de “used to”. Sem ele, seria hábito de agora, o que o “every weekend” sozinho não decide.",
    },
    {
      kind: "ouvirFrase",
      audio: "She's used to waking up early.",
      pt: "Ela está acostumada a acordar cedo.",
      options: [
        "She's used to waking up early.",
        "She used to wake up early.",
        "She's used to wake up early.",
        "She's used to getting up early.",
      ],
      answer: 0,
      explanation:
        "O “is” antes e o “-ing” depois mostram costume atual. “She used to” falaria de um hábito que já passou.",
    },
  ],
}
