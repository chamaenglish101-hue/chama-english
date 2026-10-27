import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Dias, meses e datas — 10 perguntas. */
export const B18_PRACTICE: LessonPracticeContent = {
  id: "b18",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "The meeting is ___ Wednesday at ten.",
      hint: "A reunião é na quarta às dez.",
      options: ["on", "in", "at", "of"],
      answer: 0,
      explanation:
        "Dias da semana pedem “on”: on Monday, on Wednesday. “In” serve para meses e anos, “at” para horas.",
    },
    {
      kind: "completar",
      prompt: "My birthday is ___ May 5th.",
      hint: "Meu aniversário é em 5 de maio.",
      options: ["on", "at", "of", "to"],
      answer: 0,
      explanation:
        "Uma data completa é um dia específico, então usa “on”: on May 5th. Só o mês sozinho pediria “in May”.",
    },
    {
      kind: "traduzir",
      prompt: "A reunião é na próxima quarta-feira às 10h.",
      bank: [
        "The",
        "meeting",
        "is",
        "next",
        "Wednesday",
        "at",
        "ten",
        "on",
        "in",
      ],
      answer: ["The", "meeting", "is", "next", "Wednesday", "at", "ten"],
      explanation:
        "“Next Wednesday” não leva preposição. A hora entra com “at ten”, sem “o'clock” obrigatório na fala.",
    },
    {
      kind: "traduzir",
      prompt: "Meu aniversário é em 5 de maio.",
      bank: ["My", "birthday", "is", "on", "May", "5th", "in", "fifth"],
      answer: ["My", "birthday", "is", "on", "May", "5th"],
      explanation:
        "No inglês americano o mês vem antes do dia: May 5th. Nomes de mês sempre com letra maiúscula.",
    },
    {
      kind: "falar",
      prompt: "My birthday is on May fifth.",
      pt: "Meu aniversário é em 5 de maio.",
      tip: "Na fala o dia é ordinal: “fifth”, com o “th” entre os dentes. Nunca “five” sozinho.",
    },
    {
      kind: "falar",
      prompt: "The meeting is next Wednesday at ten a.m.",
      pt: "A reunião é na próxima quarta às 10h.",
      tip: "“Wednesday” tem só duas sílabas na fala: “UÉNZ-dei”. O “d” do meio quase desaparece.",
    },

    {
      kind: "ouvirPalavra",
      audio: "next week",
      options: ["semana que vem", "semana passada", "todo dia", "este mês"],
      answer: 0,
      explanation:
        "“Next week” é a semana que vem. “Last week” é a passada — e as duas não levam preposição.",
    },
    {
      kind: "ouvirPalavra",
      audio: "the first",
      options: [
        "o primeiro",
        "o último",
        "o dia um de janeiro",
        "o mais rápido",
      ],
      answer: 0,
      explanation:
        "“The first” é o ordinal de um. Em datas, é o dia 1: “the first of May”.",
    },
    {
      kind: "ouvirFrase",
      audio: "My birthday is on May fifth.",
      pt: "Meu aniversário é em 5 de maio.",
      options: [
        "My birthday is on May fifth.",
        "My birthday is on May first.",
        "My birthday is on March fifth.",
        "My birthday is on May fifth, 1990.",
      ],
      answer: 0,
      explanation:
        "Ouça bem “fifth” e o mês “May”, sem o ano no fim. Um número trocado muda a data inteira.",
    },
    {
      kind: "ouvirFrase",
      audio: "The meeting is next Wednesday at ten a.m.",
      pt: "A reunião é na próxima quarta às 10h.",
      options: [
        "The meeting is next Wednesday at ten a.m.",
        "The meeting is next Thursday at ten a.m.",
        "The meeting is next Wednesday at ten p.m.",
        "The meeting is this Wednesday at ten a.m.",
      ],
      answer: 0,
      explanation:
        "“Wednesday” e “a.m.” decidem o horário. “p.m.” seria à noite e “this” mudaria a semana.",
    },
  ],
}
