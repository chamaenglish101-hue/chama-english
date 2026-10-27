import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** in, on, at para tempo — 10 perguntas. */
export const I17_PRACTICE: LessonPracticeContent = {
  id: "i17",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "My birthday is ___ July 12th.",
      hint: "Meu aniversário é em 12 de julho.",
      options: ["on", "in", "at", "to"],
      answer: 0,
      explanation:
        "Datas completas pedem “on”: “on July 12th”. O dia específico é sempre “on”.",
    },
    {
      kind: "completar",
      prompt: "The meeting starts ___ 9 a.m. sharp.",
      hint: "A reunião começa às 9h em ponto.",
      options: ["at", "on", "in", "for"],
      answer: 0,
      explanation:
        "Hora exata é “at”: “at 9 a.m.”. Quanto mais preciso o momento, mais “at” aparece.",
    },
    {
      kind: "traduzir",
      prompt: "Vou estar viajando em dezembro.",
      bank: ["I'll", "be", "traveling", "in", "December", "on", "at"],
      answer: ["I'll", "be", "traveling", "in", "December"],
      explanation:
        "Meses e anos levam “in”. “On” seria para um dia específico e “at” para uma hora.",
    },
    {
      kind: "traduzir",
      prompt: "Normalmente corro de manhã, mas no domingo só à tarde.",
      bank: [
        "I",
        "usually",
        "run",
        "in",
        "the",
        "morning",
        "but",
        "on",
        "Sunday",
        "only",
        "in",
        "the",
        "afternoon",
        "at",
      ],
      answer: [
        "I",
        "usually",
        "run",
        "in",
        "the",
        "morning",
        "but",
        "on",
        "Sunday",
        "only",
        "in",
        "the",
        "afternoon",
      ],
      explanation:
        "Períodos do dia usam “in”, exceto “at night”. Dias da semana usam “on”.",
    },
    {
      kind: "falar",
      prompt: "My birthday is on July 12th.",
      pt: "Meu aniversário é em 12 de julho.",
      tip: "Diga “on” bem curto antes da data. E “July 12th” se lê “dju-LÁI-tu-ént”, com o “th” no fim.",
    },
    {
      kind: "falar",
      prompt: "The meeting starts at 9 a.m. sharp.",
      pt: "A reunião começa às 9h em ponto.",
      tip: "“At 9” liga em “et-NÁIN”. A palavra “sharp” no fim indica pontualidade.",
    },
    {
      kind: "ouvirPalavra",
      audio: "at night",
      options: ["à noite", "de manhã", "à tarde", "de madrugada"],
      answer: 0,
      explanation:
        "“At night” é a exceção à regra: os outros períodos usam “in the morning / afternoon / evening”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "on the weekend",
      options: [
        "no fim de semana",
        "durante a semana",
        "na semana passada",
        "no mês que vem",
      ],
      answer: 0,
      explanation:
        "“On the weekend” é a forma americana; no Reino Unido também se ouve “at the weekend”. As duas são corretas.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'll be traveling in December.",
      pt: "Vou estar viajando em dezembro.",
      options: [
        "I'll be traveling in December.",
        "I'll be traveling on December.",
        "I'll be traveling in November.",
        "I travel in December.",
      ],
      answer: 0,
      explanation:
        "Meses levam “in”. O “on” mudaria a regra, e “November” seria outro mês, com som final diferente.",
    },
    {
      kind: "ouvirFrase",
      audio: "The meeting is on Monday at 9 a.m.",
      pt: "A reunião é na segunda às 9h.",
      options: [
        "The meeting is on Monday at 9 a.m.",
        "The meeting is in Monday at 9 a.m.",
        "The meeting is on Monday in 9 a.m.",
        "The meeting is at Monday at 9 a.m.",
      ],
      answer: 0,
      explanation:
        "Dia com “on” e hora com “at”: cada preposição cuida de um tamanho de tempo.",
    },
  ],
}
