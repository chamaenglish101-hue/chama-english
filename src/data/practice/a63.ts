import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Metáforas e linguagem figurada — 10 perguntas. */
export const A63_PRACTICE: LessonPracticeContent = {
  id: "a63",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "Before we start, let's ___ the ice with a quick round of introductions.",
      hint: "Antes de começar, vamos quebrar o gelo com uma rodada rápida de apresentações.",
      options: ["break", "cut", "open", "melt"],
      answer: 0,
      explanation:
        "A expressão é fixa: “break the ice” — quebrar o gelo, deixar as pessoas à vontade.",
    },
    {
      kind: "completar",
      prompt: "We're on the same ___, so let's move forward together.",
      hint: "Estamos na mesma página, então vamos avançar juntos.",
      options: ["page", "paper", "book", "sheet"],
      answer: 0,
      explanation:
        "“On the same page” significa ter o mesmo entendimento — metáfora de leitura, não de papel.",
    },
    {
      kind: "traduzir",
      prompt: "Vamos deixar isso para depois e voltar ao ponto principal.",
      bank: [
        "Let's",
        "circle",
        "back",
        "to",
        "the",
        "main",
        "point",
        "later",
        "circles",
        "main's",
      ],
      answer: [
        "Let's",
        "circle",
        "back",
        "to",
        "the",
        "main",
        "point",
        "later",
      ],
      explanation:
        "“To circle back to” é o idiom de negócios para retomar um assunto mais tarde.",
    },
    {
      kind: "traduzir",
      prompt: "Estamos na mesma página, então vamos avançar juntos.",
      bank: [
        "We're",
        "on",
        "the",
        "same",
        "page",
        "so",
        "let's",
        "move",
        "forward",
        "together",
        "pages",
        "moves",
      ],
      answer: [
        "We're",
        "on",
        "the",
        "same",
        "page",
        "so",
        "let's",
        "move",
        "forward",
        "together",
      ],
      explanation:
        "A metáfora “on the same page” vem antes do conector “so” que introduz a consequência.",
    },
    {
      kind: "falar",
      prompt: "Before we start, let's break the ice.",
      pt: "Antes de começar, vamos quebrar o gelo.",
      tip: "Ligue “break the ice” numa locução contínua: é um bloco fixo, sem pausa interna.",
    },
    {
      kind: "falar",
      prompt: "We're on the same page, so let's move forward together.",
      pt: "Estamos na mesma página, então vamos avançar juntos.",
      tip: "Acento em “SAME page” e em “forWARD”: o resto sai fraco e rápido.",
    },
    {
      kind: "ouvirPalavra",
      audio: "break the ice",
      options: [
        "quebrar o gelo",
        "quebrar o gelo literalmente",
        "romper um contrato",
        "quebrar o silêncio à força",
      ],
      answer: 0,
      explanation:
        "“Break the ice” é diminuir a tensão inicial numa reunião ou encontro com desconhecidos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to move the needle",
      options: [
        "fazer diferença real, gerar impacto",
        "mover a agulha de lugar",
        "mudar de estratégia",
        "ajustar o ponteiro do relógio",
      ],
      answer: 0,
      explanation:
        "“To move the needle” é produzir um resultado que realmente muda o indicador — imagem muito usada em negócios.",
    },
    {
      kind: "ouvirFrase",
      audio: "We're on the same page, so let's move forward together.",
      pt: "Estamos na mesma página, então vamos avançar juntos.",
      options: [
        "We're on the same page, so let's move forward together.",
        "We're in the same page, so let's move forward together.",
        "We're on the same page, so let's moving forward together.",
        "We're on same page, so let's move forward together.",
      ],
      answer: 0,
      explanation:
        "A preposição é “on” e há artigo: “on the same page”. Depois de “let's” vem o verbo base.",
    },
    {
      kind: "ouvirFrase",
      audio: "Time is money, so we can't keep coming back to this.",
      pt: "Tempo é dinheiro, então não podemos voltar sempre a isso.",
      options: [
        "Time is money, so we can't keep coming back to this.",
        "Time is money, so we can't keep come back to this.",
        "Time is money, so we can't keep coming back on this.",
        "Time are money, so we can't keep coming back to this.",
      ],
      answer: 0,
      explanation:
        "Metáforas não mudam a gramática: “time is money” no singular, e “keep coming” com gerúndio.",
    },
  ],
}
