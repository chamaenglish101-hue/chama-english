import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Futuro com will e going to — 10 perguntas. */
export const I05_PRACTICE: LessonPracticeContent = {
  id: "i05",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt:
        "I ___ visit my grandmother next weekend. I already bought the tickets.",
      hint: "Vou visitar minha avó no próximo fim de semana. Já comprei as passagens.",
      options: ["am going to", "will to", "going to", "go to"],
      answer: 0,
      explanation:
        "Plano já decidido, com ingresso comprado, pede “going to”: “I'm going to visit”.",
    },
    {
      kind: "completar",
      prompt: "The phone is ringing. — Don't worry, I ___ answer it.",
      hint: "O telefone está tocando. — Não se preocupe, eu atendo.",
      options: ["'ll", "am going to", "going to", "will to"],
      answer: 0,
      explanation:
        "Decisão tomada no momento da fala usa “will”: “I'll answer it”. Não há plano anterior.",
    },
    {
      kind: "traduzir",
      prompt: "Vamos lançar o produto em março.",
      bank: [
        "We're",
        "going",
        "to",
        "launch",
        "the",
        "product",
        "in",
        "March",
        "will",
        "on",
      ],
      answer: [
        "We're",
        "going",
        "to",
        "launch",
        "the",
        "product",
        "in",
        "March",
      ],
      explanation:
        "Plano de empresa é decisão já tomada: “We're going to launch”. Meses pedem “in”.",
    },
    {
      kind: "traduzir",
      prompt: "Ligo de volta em dez minutos.",
      bank: [
        "I'll",
        "call",
        "you",
        "back",
        "in",
        "ten",
        "minutes",
        "going",
        "on",
      ],
      answer: ["I'll", "call", "you", "back", "in", "ten", "minutes"],
      explanation:
        "Promessa feita agora usa “I'll”. E “in ten minutes” significa daqui a dez minutos, não “on”.",
    },
    {
      kind: "falar",
      prompt: "We're going to launch the product in March.",
      pt: "Vamos lançar o produto em março.",
      tip: "Na fala rápida, “going to” vira “gonna”. Nas duas formas você é entendido; só não diga “go to”.",
    },
    {
      kind: "falar",
      prompt: "I'll call you back in ten minutes.",
      pt: "Ligo de volta em dez minutos.",
      tip: "“I'll” é uma sílaba só, como “ail”. Ligar “call you” como “cól-ju” deixa a frase natural.",
    },
    {
      kind: "ouvirPalavra",
      audio: "probably",
      options: [
        "provavelmente",
        "possivelmente não",
        "com certeza",
        "de repente",
      ],
      answer: 0,
      explanation:
        "“Probably” indica alta chance. Ele costuma vir depois de “will”: “I'll probably travel”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "soon",
      options: ["logo, em breve", "nunca", "ontem", "mais tarde hoje"],
      answer: 0,
      explanation:
        "“Soon” é um futuro próximo e vago. Combina com os dois futuros: “I'll do it soon”.",
    },
    {
      kind: "ouvirFrase",
      audio: "It's going to be a busy week.",
      pt: "Vai ser uma semana cheia.",
      options: [
        "It's going to be a busy week.",
        "It's going to be a busy day.",
        "It will to be a busy week.",
        "It's going to have a busy week.",
      ],
      answer: 0,
      explanation:
        "Previsão com base no que já se sabe usa “going to”. E “will” nunca vem seguido de “to”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Don't worry, I'll help you with that.",
      pt: "Não se preocupe, eu te ajudo com isso.",
      options: [
        "Don't worry, I'll help you with that.",
        "Don't worry, I'm going to help you with that.",
        "Don't worry, I help you with that.",
        "Don't worry, I'll help you with this.",
      ],
      answer: 0,
      explanation:
        "Oferta feita na hora pede “I'll”. O contraste real da questão é entre a contração “I'll” e o “going to”.",
    },
  ],
}
