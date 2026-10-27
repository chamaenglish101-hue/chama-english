import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Humor, ironia e sarcasmo — 10 perguntas. */
export const A62_PRACTICE: LessonPracticeContent = {
  id: "a62",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "“I've told you a million times.” That's an ___.",
      hint: "“Eu já te disse um milhão de vezes.” Isso é uma hipérbole.",
      options: ["hyperbole", "hyperbowl", "hyperbol", "hyperbola"],
      answer: 0,
      explanation:
        "“Hyperbole” é o exagero proposital que sustenta boa parte do humor falado em inglês.",
    },
    {
      kind: "completar",
      prompt: "Sarcasm depends on the ___ between words and tone.",
      hint: "O sarcasmo depende do contraste entre as palavras e o tom.",
      options: ["contrast", "contact", "contract", "contest"],
      answer: 0,
      explanation:
        "Sem o contraste entre o que se diz e como se diz, a ironia passa batida e o ouvinte leva tudo ao pé da letra.",
    },
    {
      kind: "traduzir",
      prompt: "Se a frase parece absurda no contexto, provavelmente é piada.",
      bank: [
        "If",
        "the",
        "sentence",
        "seems",
        "absurd",
        "in",
        "context",
        "it's",
        "probably",
        "a",
        "joke",
        "seem",
        "jokes",
      ],
      answer: [
        "If",
        "the",
        "sentence",
        "seems",
        "absurd",
        "in",
        "context",
        "it's",
        "probably",
        "a",
        "joke",
      ],
      explanation:
        "“It's probably a joke” é a conclusão que a incongruência pede — não uma tradução literal frustrada.",
    },
    {
      kind: "traduzir",
      prompt: "Ótimo trabalho — e agora vamos refazer tudo. (ironia)",
      bank: [
        "Great",
        "work",
        "and",
        "now",
        "let's",
        "start",
        "over",
        "great",
        "over",
      ],
      answer: ["Great", "work", "and", "now", "let's", "start", "over"],
      explanation:
        "A ironia nasce do contraste: elogio exagerado seguido de uma consequência oposta.",
    },
    {
      kind: "falar",
      prompt: "Not bad at all. — meaning it was excellent.",
      pt: "Nada mal. — no sentido de que foi excelente. (understatement britânico)",
      tip: "Fale plano e sem entusiasmo: é justamente a ausência de emoção que carrega o elogio forte.",
    },
    {
      kind: "falar",
      prompt: "Oh great, another meeting that could have been an email.",
      pt: "Ótimo, mais uma reunião que poderia ter sido um e-mail. (sarcasmo)",
      tip: "Alongue “Oh great” e deixe o resto cair: o tom é que faz a piada, não as palavras.",
    },
    {
      kind: "ouvirPalavra",
      audio: "understatement",
      options: [
        "atenuação, dizer menos do que se quer dizer",
        "declaração incompleta",
        "subestimação de preço",
        "resumo oral",
      ],
      answer: 0,
      explanation:
        "No humor britânico, “understatement” é dizer menos do que se pensa — “not bad” pode ser um elogio enorme.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to take it literally",
      options: [
        "levar ao pé da letra",
        "levar a sério no trabalho",
        "traduzir palavra por palavra",
        "anotar o que foi dito",
      ],
      answer: 0,
      explanation:
        "“To take something literally” é o erro típico de quem não percebe a ironia.",
    },
    {
      kind: "ouvirFrase",
      audio: "Not bad at all — I'd say that was your best presentation yet.",
      pt: "Nada mal — eu diria que foi sua melhor apresentação até agora.",
      options: [
        "Not bad at all — I'd say that was your best presentation yet.",
        "Not bad at all — I'd say that was your best presentation already.",
        "Not bad at all — I'd say that were your best presentation yet.",
        "Not bad at all — I say that was your best presentation yet.",
      ],
      answer: 0,
      explanation:
        "“Yet” com superlativo significa “até agora”, e “I'd say” é a forma educada de opinar.",
    },
    {
      kind: "ouvirFrase",
      audio: "Oh great, another meeting that could have been an email.",
      pt: "Ótimo, mais uma reunião que poderia ter sido um e-mail.",
      options: [
        "Oh great, another meeting that could have been an email.",
        "Oh great, another meeting that could have be an email.",
        "Oh great, another meeting that can have been an email.",
        "Oh great, another meeting that couldn't have been an email.",
      ],
      answer: 0,
      explanation:
        "“Could have been” é o passado hipotético correto — e a negativa mataria a ironia.",
    },
  ],
}
