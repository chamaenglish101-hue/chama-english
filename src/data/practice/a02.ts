import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Past perfect continuous: duração e causa anteriores — 10 perguntas. */
export const A02_PRACTICE: LessonPracticeContent = {
  id: "a02",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "He was exhausted because he ___ been working all day.",
      hint: "Ele estava exausto porque tinha trabalhado o dia todo.",
      options: ["had", "has", "was", "did"],
      answer: 0,
      explanation:
        "“Had been working” mostra a duração que explica o cansaço. O “because” liga a causa ao estado.",
    },
    {
      kind: "completar",
      prompt: "They ___ been dating for two years when they moved in together.",
      hint: "Eles namoravam havia dois anos quando foram morar juntos.",
      options: ["had", "have", "were", "did"],
      answer: 0,
      explanation:
        "A duração anterior ao outro fato passado pede “had been dating”, com o “for” marcando o período.",
    },
    {
      kind: "traduzir",
      prompt: "Eu estava tentando te ligar a manhã toda.",
      bank: [
        "I",
        "had",
        "been",
        "trying",
        "to",
        "call",
        "you",
        "all",
        "morning",
        "have",
        "tried",
      ],
      answer: [
        "I",
        "had",
        "been",
        "trying",
        "to",
        "call",
        "you",
        "all",
        "morning",
      ],
      explanation:
        "“Had been trying” destaca o processo contínuo e repetido, não o resultado de uma ligação só.",
    },
    {
      kind: "traduzir",
      prompt: "O chão estava molhado porque tinha chovido.",
      bank: [
        "The",
        "ground",
        "was",
        "wet",
        "because",
        "it",
        "had",
        "been",
        "raining",
        "has",
        "rained",
      ],
      answer: [
        "The",
        "ground",
        "was",
        "wet",
        "because",
        "it",
        "had",
        "been",
        "raining",
      ],
      explanation:
        "A causa anterior é expressa com “had been raining”, o processo que deixou o chão molhado.",
    },
    {
      kind: "falar",
      prompt: "He was tired because he had been working all day.",
      pt: "Ele estava cansado porque tinha trabalhado o dia todo.",
      tip: "“Had been working” sai como “rad-bin-UÓR-kin”. A sequência corre sem pausa: é uma explicação.",
    },
    {
      kind: "falar",
      prompt: "The ground was wet because it had been raining.",
      pt: "O chão estava molhado porque tinha chovido.",
      tip: "“Had been raining” liga em “rad-bin-RÊI-nin”. O “been” é bem rápido e fraco.",
    },
    {
      kind: "ouvirPalavra",
      audio: "had been waiting",
      options: [
        "estava esperando (antes de algo)",
        "esperou e terminou",
        "vai esperar",
        "costumava esperar",
      ],
      answer: 0,
      explanation:
        "O past perfect continuous destaca a duração da espera até um ponto do passado — não o resultado.",
    },
    {
      kind: "ouvirPalavra",
      audio: "all day",
      options: [
        "o dia todo",
        "todos os dias",
        "de dia",
        "o dia inteiro de amanhã",
      ],
      answer: 0,
      explanation:
        "“All day” marca a duração que costuma acompanhar o past perfect continuous: “I had been working all day”.",
    },
    {
      kind: "ouvirFrase",
      audio: "He was tired because he had been working all day.",
      pt: "Ele estava cansado porque tinha trabalhado o dia todo.",
      options: [
        "He was tired because he had been working all day.",
        "He was tired because he had worked all day.",
        "He is tired because he had been working all day.",
        "He was tired because he had been walking all day.",
      ],
      answer: 0,
      explanation:
        "O contínuo destaca o processo que gerou o cansaço. “Had worked” focaria só o resultado concluído.",
    },
    {
      kind: "ouvirFrase",
      audio: "The ground was wet because it had been raining.",
      pt: "O chão estava molhado porque tinha chovido.",
      options: [
        "The ground was wet because it had been raining.",
        "The ground is wet because it had been raining.",
        "The ground was wet because it has been raining.",
        "The ground was wet because it had been snowing.",
      ],
      answer: 0,
      explanation:
        "Os dois tempos ficam no passado: “was wet” e “had been raining”. Mudar “raining” por “snowing” muda o clima.",
    },
  ],
}
