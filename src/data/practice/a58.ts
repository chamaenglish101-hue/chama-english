import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Pares mínimos e trocas que mudam o sentido — 10 perguntas. */
export const A58_PRACTICE: LessonPracticeContent = {
  id: "a58",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The ___ is on the ___.",
      hint: "A ovelha está no navio. (par mínimo sheep / ship)",
      options: ["sheep / ship", "ship / sheep", "sheep / sheep", "ship / ship"],
      answer: 0,
      explanation:
        "“Sheep” tem vogal longa e “ship”, vogal curta — a duração é o que distingue o par mínimo.",
    },
    {
      kind: "completar",
      prompt: "I ___ here, but I ___ at seven every morning.",
      hint: "Eu moro aqui, mas saio às sete todas as manhãs. (live / leave)",
      options: ["live / leave", "leave / live", "live / live", "leave / leave"],
      answer: 0,
      explanation:
        "“Live” tem vogal curta; “leave”, longa. Trocar os dois muda completamente a frase.",
    },
    {
      kind: "traduzir",
      prompt: "Acho que preciso de uma pia.",
      bank: ["I", "think", "I", "need", "a", "sink", "thing", "think's"],
      answer: ["I", "think", "I", "need", "a", "sink"],
      explanation:
        "“Think” começa com o som /θ/, sem vibração; “sink” começa com /s/. A troca vira outra palavra.",
    },
    {
      kind: "traduzir",
      prompt: "Eu moro aqui, mas saio às sete.",
      bank: [
        "I",
        "live",
        "here",
        "but",
        "I",
        "leave",
        "at",
        "seven",
        "lives",
        "leaves",
      ],
      answer: ["I", "live", "here", "but", "I", "leave", "at", "seven"],
      explanation:
        "A duração da vogal separa “live” de “leave”, e o horário usa “at”.",
    },
    {
      kind: "falar",
      prompt: "The sheep is on the ship.",
      pt: "A ovelha está no navio.",
      tip: "Alongue bem “sheep” e encurte “ship”: é a duração que faz o ouvinte entender qual é qual.",
    },
    {
      kind: "falar",
      prompt: "I live here, but I leave at seven.",
      pt: "Eu moro aqui, mas saio às sete.",
      tip: "Curto em “live”, longo em “leave”. Faça a diferença bem visível.",
    },
    {
      kind: "ouvirPalavra",
      audio: "minimal pair",
      options: [
        "par mínimo",
        "casal pequeno",
        "par de substantivos",
        "jogo de palavras",
      ],
      answer: 0,
      explanation:
        "“Minimal pair” são duas palavras que só se diferenciam por um som, como “sheep” e “ship”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "vowel length",
      options: [
        "duração da vogal",
        "quantidade de vogais",
        "altura da voz",
        "número de sílabas",
      ],
      answer: 0,
      explanation:
        "“Vowel length” é quanto tempo o som vocálico dura — a base de muitos pares mínimos do inglês.",
    },
    {
      kind: "ouvirFrase",
      audio: "I think I need a sink in the kitchen.",
      pt: "Acho que preciso de uma pia na cozinha.",
      options: [
        "I think I need a sink in the kitchen.",
        "I sink I need a think in the kitchen.",
        "I think I need a sink on the kitchen.",
        "I thinks I need a sink in the kitchen.",
      ],
      answer: 0,
      explanation:
        "“Think” vem do verbo de opinião e “sink”, do substantivo; com “I” o verbo nunca leva “s”.",
    },
    {
      kind: "ouvirFrase",
      audio: "There were ten men and one man in the room.",
      pt: "Havia dez homens e um homem na sala.",
      options: [
        "There were ten men and one man in the room.",
        "There were ten man and one man in the room.",
        "There was ten men and one man in the room.",
        "There were ten men and one men in the room.",
      ],
      answer: 0,
      explanation:
        "O plural “men” vem com “were” e com o número dez; o singular “man”, com “one”.",
    },
  ],
}
