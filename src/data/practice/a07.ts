import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Cleft sentences: colocar o foco onde importa — 10 perguntas. */
export const A07_PRACTICE: LessonPracticeContent = {
  id: "a07",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "What we need ___ a clear plan.",
      hint: "O que precisamos é de um plano claro.",
      options: ["is", "are", "was been", "has"],
      answer: 0,
      explanation:
        "A cleft com “what” trata o trecho inicial como um bloco no singular, então o verbo é “is”.",
    },
    {
      kind: "completar",
      prompt: "It ___ the delay that cost us the client.",
      hint: "Foi o atraso que nos custou o cliente.",
      options: ["was", "is", "were", "has"],
      answer: 0,
      explanation:
        "“It was … that …” destaca o elemento culpado. O “that” fecha a estrutura e o foco cai no atraso.",
    },
    {
      kind: "traduzir",
      prompt: "O motivo da minha ligação é que temos novidades.",
      bank: [
        "The",
        "reason",
        "I",
        "called",
        "is",
        "that",
        "we",
        "have",
        "news",
        "why",
        "has",
      ],
      answer: [
        "The",
        "reason",
        "I",
        "called",
        "is",
        "that",
        "we",
        "have",
        "news",
      ],
      explanation:
        "“The reason why… is that…” destaca a causa. Na fala, a segunda parte costuma vir com “that”",
    },
    {
      kind: "traduzir",
      prompt: "Tudo o que eu quero é uma pausa.",
      bank: ["All", "I", "want", "is", "a", "break", "what", "are"],
      answer: ["All", "I", "want", "is", "a", "break"],
      explanation:
        "“All I want is…” é a cleft mais curta e serve para reforçar o pedido com firmeza.",
    },
    {
      kind: "falar",
      prompt: "What we need is a clear plan.",
      pt: "O que precisamos é de um plano claro.",
      tip: "Faça uma pausa leve depois de “is”: é ela que coloca o foco no “clear plan”.",
    },
    {
      kind: "falar",
      prompt: "It was the delay that cost us the client.",
      pt: "Foi o atraso que nos custou o cliente.",
      tip: "Destaque “was” e “delay”. O “that” fica fraco e o verbo “cost” corre rápido até o fim.",
    },
    {
      kind: "ouvirPalavra",
      audio: "what I need",
      options: [
        "o que eu preciso",
        "o que eu quis",
        "aquilo que eu teria",
        "como eu preciso",
      ],
      answer: 0,
      explanation:
        "“What I need” abre a cleft e transforma o complemento no elemento destacado da frase.",
    },
    {
      kind: "ouvirPalavra",
      audio: "it was",
      options: ["foi (o destaque)", "era sempre", "estava sendo", "será"],
      answer: 0,
      explanation:
        "“It was … that …” é a estrutura que isola o elemento responsável pelo que aconteceu.",
    },
    {
      kind: "ouvirFrase",
      audio: "What we need is a clear plan.",
      pt: "O que precisamos é de um plano claro.",
      options: [
        "What we need is a clear plan.",
        "What we need are a clear plan.",
        "That we need is a clear plan.",
        "What we need is a clear plane.",
      ],
      answer: 0,
      explanation:
        "“What” abre a cleft e o verbo concorda no singular. “Plane” seria avião, não plano.",
    },
    {
      kind: "ouvirFrase",
      audio: "The reason I called is that we have news.",
      pt: "O motivo da minha ligação é que temos novidades.",
      options: [
        "The reason I called is that we have news.",
        "The reason I called is because we have news.",
        "The reason why I called that we have news.",
        "The reason I call is that we have news.",
      ],
      answer: 0,
      explanation:
        "Depois de “the reason … is” vem “that”, não “because”. Assim a estrutura não fica redundante.",
    },
  ],
}
