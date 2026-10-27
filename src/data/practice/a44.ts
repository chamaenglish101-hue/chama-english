import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Reuniões híbridas e teleconferências — 10 perguntas. */
export const A44_PRACTICE: LessonPracticeContent = {
  id: "a44",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Sorry, my audio ___ out — could you repeat the last part?",
      hint: "Desculpe, meu áudio caiu — pode repetir a última parte?",
      options: ["cut", "cutting", "cuts", "cutted"],
      answer: 0,
      explanation:
        "“My audio cut out” é a expressão usada quando a conexão falha. O passado de “cut” é “cut”.",
    },
    {
      kind: "completar",
      prompt: "Can I ___ in for a minute on the pricing point?",
      hint: "Posso entrar um minuto no ponto dos preços?",
      options: ["jump", "jumping", "jumped", "jumps"],
      answer: 0,
      explanation:
        "Depois do modal “can” o verbo fica na forma base. “Jump in” pede a palavra sem interromper de forma brusca.",
    },
    {
      kind: "traduzir",
      prompt:
        "Vamos resolver isso fora da reunião e trazer números na semana que vem.",
      bank: [
        "Let's",
        "take",
        "that",
        "offline",
        "and",
        "bring",
        "numbers",
        "next",
        "week",
        "takes",
        "brings",
      ],
      answer: [
        "Let's",
        "take",
        "that",
        "offline",
        "and",
        "bring",
        "numbers",
        "next",
        "week",
      ],
      explanation:
        "“Take that offline” tira o assunto da reunião sem deixá-lo cair no esquecimento.",
    },
    {
      kind: "traduzir",
      prompt: "Desculpe, meu áudio caiu — pode repetir a última parte?",
      bank: [
        "Sorry",
        "my",
        "audio",
        "cut",
        "out",
        "could",
        "you",
        "repeat",
        "the",
        "last",
        "part",
        "cuts",
      ],
      answer: [
        "Sorry",
        "my",
        "audio",
        "cut",
        "out",
        "could",
        "you",
        "repeat",
        "the",
        "last",
        "part",
      ],
      explanation:
        "“Could you repeat” mantém o tom educado e evita pedir “repeat it again”, que soa redundante.",
    },
    {
      kind: "falar",
      prompt: "Sorry, my audio cut out — could you repeat the last part?",
      pt: "Desculpe, meu áudio caiu — pode repetir a última parte?",
      tip: "“Cut out” soa “cát-áut”. Diga rápido e siga com calma para manter o ritmo da reunião.",
    },
    {
      kind: "falar",
      prompt: "Can I jump in for a minute on the pricing point?",
      pt: "Posso entrar um minuto no ponto dos preços?",
      tip: "Subida leve de entonação no fim: é um pedido de espaço, não uma afirmação.",
    },
    {
      kind: "ouvirPalavra",
      audio: "take that offline",
      options: [
        "resolver isso fora da reunião",
        "desligar a chamada",
        "desconectá-lo da reunião",
        "adiar sem data",
      ],
      answer: 0,
      explanation:
        "“Take it offline” é tratar o assunto em particular, geralmente com quem tem o problema.",
    },
    {
      kind: "ouvirPalavra",
      audio: "my audio cut out",
      options: [
        "meu áudio caiu",
        "meu áudio está baixo",
        "meu áudio foi cortado por alguém",
        "meu áudio está desligado",
      ],
      answer: 0,
      explanation:
        "“Cut out” descreve a falha momentânea de som ou conexão durante a chamada.",
    },
    {
      kind: "ouvirFrase",
      audio: "Can I jump in for a minute on the pricing point?",
      pt: "Posso entrar um minuto no ponto dos preços?",
      options: [
        "Can I jump in for a minute on the pricing point?",
        "Can I jump in for a minute in the pricing point?",
        "Can I jump in for a minute on the pricing points?",
        "Can I jumping in for a minute on the pricing point?",
      ],
      answer: 0,
      explanation:
        "O verbo vai na forma base depois de “can”, e a preposição é “on” para o tópico.",
    },
    {
      kind: "ouvirFrase",
      audio: "Let's take that offline and bring numbers next week.",
      pt: "Vamos resolver isso fora da reunião e trazer números na semana que vem.",
      options: [
        "Let's take that offline and bring numbers next week.",
        "Let's take that off line and bring numbers next week.",
        "Let's take that offline and brings numbers next week.",
        "Let's to take that offline and bring numbers next week.",
      ],
      answer: 0,
      explanation:
        "“Offline” é uma palavra só, e “Let's” pede o verbo na forma base para os dois verbos juntos.",
    },
  ],
}
