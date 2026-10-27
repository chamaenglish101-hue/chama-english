import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Apresentações que contam uma história — 10 perguntas. */
export const A34_PRACTICE: LessonPracticeContent = {
  id: "a34",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Let me start with where we ___ six months ago.",
      hint: "Deixe-me começar por onde estávamos seis meses atrás.",
      options: ["were", "are", "have been", "will be"],
      answer: 0,
      explanation:
        "“Six months ago” puxa o passado simples: “where we were” abre a narrativa antes do problema.",
    },
    {
      kind: "completar",
      prompt: "That's the problem. Here's how we ___ it.",
      hint: "Esse é o problema. Aqui está como resolvemos.",
      options: ["fixed", "fixing", "fix", "fixes"],
      answer: 0,
      explanation:
        "Depois de “how we” a história pede o passado “fixed”: problema, ação, resultado.",
    },
    {
      kind: "traduzir",
      prompt: "Então o que eu peço hoje é um desenvolvedor extra.",
      bank: [
        "So",
        "what",
        "I'm",
        "asking",
        "for",
        "today",
        "is",
        "one",
        "extra",
        "developer",
        "ask",
        "developers",
      ],
      answer: [
        "So",
        "what",
        "I'm",
        "asking",
        "for",
        "today",
        "is",
        "one",
        "extra",
        "developer",
      ],
      explanation:
        "O pedido vai ao fim da apresentação com uma cleft: “what I'm asking for today is…”.",
    },
    {
      kind: "traduzir",
      prompt: "Deixe-me explicar passo a passo como chegamos até aqui.",
      bank: [
        "Let",
        "me",
        "walk",
        "you",
        "through",
        "how",
        "we",
        "got",
        "here",
        "walking",
        "gets",
      ],
      answer: [
        "Let",
        "me",
        "walk",
        "you",
        "through",
        "how",
        "we",
        "got",
        "here",
      ],
      explanation:
        "“Walk someone through” é conduzir a audiência pelos passos na ordem certa.",
    },
    {
      kind: "falar",
      prompt: "That's the problem. Here's how we fixed it.",
      pt: "Esse é o problema. Aqui está como resolvemos.",
      tip: "Faça uma pausa forte depois de “problem”: a virada da história precisa desse silêncio.",
    },
    {
      kind: "falar",
      prompt: "So what I'm asking for today is one extra developer.",
      pt: "Então o que eu peço hoje é um desenvolvedor extra.",
      tip: "Reduza a velocidade antes de “is”: é ali que o pedido aparece com clareza.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to walk someone through",
      options: [
        "explicar passo a passo",
        "acompanhar até a saída",
        "caminhar junto",
        "resumir em uma frase",
      ],
      answer: 0,
      explanation:
        "“Walk someone through” é conduzir alguém pelo raciocínio do começo ao fim, sem saltos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "takeaway",
      options: [
        "mensagem principal",
        "resumo do slide",
        "retirada de produto",
        "pedido final",
      ],
      answer: 0,
      explanation:
        "“Takeaway” é a única frase que a audiência precisa lembrar depois da apresentação.",
    },
    {
      kind: "ouvirFrase",
      audio: "Let me start with where we were six months ago.",
      pt: "Deixe-me começar por onde estávamos seis meses atrás.",
      options: [
        "Let me start with where we were six months ago.",
        "Let me start with where we are six months ago.",
        "Let me start where we were six months ago.",
        "Let me to start with where we were six months ago.",
      ],
      answer: 0,
      explanation:
        "“Let me + verbo base” não leva “to”, e o passado “were” combina com “six months ago”.",
    },
    {
      kind: "ouvirFrase",
      audio: "So what I'm asking for today is one extra developer.",
      pt: "Então o que eu peço hoje é um desenvolvedor extra.",
      options: [
        "So what I'm asking for today is one extra developer.",
        "So what I'm asking today is one extra developer.",
        "So what I ask for today is one extra developer.",
        "So what I'm asking for today are one extra developer.",
      ],
      answer: 0,
      explanation:
        "O pedido contínuo é “I'm asking for”, e o verbo da cleft fica no singular: “is”.",
    },
  ],
}
