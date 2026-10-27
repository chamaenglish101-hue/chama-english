import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Escrever mensagens e parágrafos curtos — 10 perguntas. */
export const I33_PRACTICE: LessonPracticeContent = {
  id: "i33",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Hi Ana, are we still ___ at 10?",
      hint: "Oi Ana, ainda nos encontramos às 10?",
      options: ["meeting", "meet", "to meet", "met"],
      answer: 0,
      explanation:
        "No presente contínuo, o encontro combinado é “we're still meeting”. Dá a ideia de plano já marcado.",
    },
    {
      kind: "completar",
      prompt: "I can't ___ it today. Can we reschedule for tomorrow?",
      hint: "Não consigo hoje. Podemos remarcar para amanhã?",
      options: ["make", "do", "take", "go"],
      answer: 0,
      explanation:
        "“Make it” significa conseguir comparecer. É a expressão fixa para confirmar presença.",
    },
    {
      kind: "traduzir",
      prompt: "Segue o arquivo que você pediu. Me avise se faltar algo.",
      bank: [
        "Here's",
        "the",
        "file",
        "you",
        "asked",
        "for",
        "Let",
        "me",
        "know",
        "if",
        "anything",
        "is",
        "missing",
        "miss",
      ],
      answer: [
        "Here's",
        "the",
        "file",
        "you",
        "asked",
        "for",
        "Let",
        "me",
        "know",
        "if",
        "anything",
        "is",
        "missing",
      ],
      explanation:
        "“Here's the file” abre a mensagem e “let me know” encerra com abertura para resposta.",
    },
    {
      kind: "traduzir",
      prompt: "Primeiro confirmo o horário, depois envio o convite.",
      bank: [
        "First",
        "I",
        "confirm",
        "the",
        "time",
        "then",
        "I",
        "send",
        "the",
        "invite",
        "after",
        "sending",
      ],
      answer: [
        "First",
        "I",
        "confirm",
        "the",
        "time",
        "then",
        "I",
        "send",
        "the",
        "invite",
      ],
      explanation:
        "“First … then …” dá ordem às ideias. Marcadores assim deixam a mensagem fácil de seguir.",
    },
    {
      kind: "falar",
      prompt: "Hi Ana, are we still meeting at 10?",
      pt: "Oi Ana, ainda nos encontramos às 10?",
      tip: "Mensagem curta é feita de blocos curtos. “Are we still meeting” sobe de tom no fim.",
    },
    {
      kind: "falar",
      prompt: "Let me know if anything is missing.",
      pt: "Me avise se faltar algo.",
      tip: "“Let me know” soa “le-mi-NÔU”, tudo junto. É o fechamento mais natural em mensagens.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to make it",
      options: [
        "conseguir ir, comparecer",
        "fabricar algo",
        "chegar atrasado",
        "fazer sozinho",
      ],
      answer: 0,
      explanation:
        "“I can't make it” é o jeito padrão de dizer que você não vai conseguir ir.",
    },
    {
      kind: "ouvirPalavra",
      audio: "Let me know",
      options: [
        "me avise",
        "deixe-me saber depois",
        "deixe-me ir",
        "me conheça",
      ],
      answer: 0,
      explanation:
        "“Let me know” fecha quase toda mensagem informal de forma educada e direta.",
    },
    {
      kind: "ouvirFrase",
      audio: "I can't make it today. Can we reschedule?",
      pt: "Não consigo hoje. Podemos remarcar?",
      options: [
        "I can't make it today. Can we reschedule?",
        "I can't make it today. Can we schedule?",
        "I can't make it tomorrow. Can we reschedule?",
        "I can't take it today. Can we reschedule?",
      ],
      answer: 0,
      explanation:
        "“Reschedule” é remarcar; “schedule” é agendar pela primeira vez. “Make it” e “take it” têm sentidos diferentes.",
    },
    {
      kind: "ouvirFrase",
      audio: "Here's the file you asked for.",
      pt: "Segue o arquivo que você pediu.",
      options: [
        "Here's the file you asked for.",
        "Here's the file you ask for.",
        "Here's the file you looked for.",
        "Here are the files you asked for.",
      ],
      answer: 0,
      explanation:
        "“Asked for” no passado e a preposição no fim. “Look for” seria procurar, um sentido bem diferente.",
    },
  ],
}
