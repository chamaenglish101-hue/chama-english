import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Phrasal verbs frequentes — 10 perguntas. */
export const I09_PRACTICE: LessonPracticeContent = {
  id: "i09",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Can you ___ the music? It's too loud.",
      hint: "Você pode abaixar a música? Está alta demais.",
      options: ["turn down", "turn up", "turn on", "turn off"],
      answer: 0,
      explanation:
        "“Turn down” é abaixar o volume. “Turn up” aumenta — o oposto exato.",
    },
    {
      kind: "completar",
      prompt: "I'm looking ___ my keys. Have you seen them?",
      hint: "Estou procurando minhas chaves. Você as viu?",
      options: ["for", "at", "after", "up"],
      answer: 0,
      explanation:
        "“Look for” é procurar. “Look after” seria cuidar de alguém, completamente diferente.",
    },
    {
      kind: "traduzir",
      prompt: "Vou desligar a TV e dormir.",
      bank: [
        "I'm",
        "going",
        "to",
        "turn",
        "off",
        "the",
        "TV",
        "and",
        "go",
        "to",
        "sleep",
        "down",
        "up",
      ],
      answer: [
        "I'm",
        "going",
        "to",
        "turn",
        "off",
        "the",
        "TV",
        "and",
        "go",
        "to",
        "sleep",
      ],
      explanation:
        "“Turn off” é desligar. Com objeto explícito, o “off” pode vir antes ou depois — aqui, antes fica mais natural.",
    },
    {
      kind: "traduzir",
      prompt: "Nós precisamos descobrir o que aconteceu ontem.",
      bank: [
        "We",
        "need",
        "to",
        "find",
        "out",
        "what",
        "happened",
        "yesterday",
        "find out",
        "look",
      ],
      answer: [
        "We",
        "need",
        "to",
        "find",
        "out",
        "what",
        "happened",
        "yesterday",
      ],
      explanation:
        "“Find out” significa descobrir. Não se pode separar as duas partes quando elas formam esse sentido.",
    },
    {
      kind: "falar",
      prompt: "Can you turn down the music, please?",
      pt: "Você pode abaixar a música, por favor?",
      tip: "“Turn down” liga em “TERN-dáun”, e a entonação sobe no fim por causa do pedido.",
    },
    {
      kind: "falar",
      prompt: "I'm looking for my keys. Have you seen them?",
      pt: "Estou procurando minhas chaves. Você as viu?",
      tip: "“Looking for” junta em “LÚ-kin-fer”, com o “for” bem fraco. Em “seen them”, o “them” vira “dem”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to give up",
      options: ["desistir", "doar", "entregar", "subir"],
      answer: 0,
      explanation:
        "“Give up” é desistir: “Don't give up”. “Give back” seria devolver, um phrasal diferente.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to pick up",
      options: [
        "buscar, pegar",
        "escolher entre vários",
        "reclamar de algo",
        "deixar cair",
      ],
      answer: 0,
      explanation:
        "“Pick up” é buscar alguém ou pegar algo. “Pick” sozinho é escolher entre opções — sentido diferente.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm looking for my keys.",
      pt: "Estou procurando minhas chaves.",
      options: [
        "I'm looking for my keys.",
        "I'm looking at my keys.",
        "I'm looking after my keys.",
        "I'm looking for my kids.",
      ],
      answer: 0,
      explanation:
        "A preposição decide o sentido: “for” é procurar. “After” seria cuidar, que não combina com chaves.",
    },
    {
      kind: "ouvirFrase",
      audio: "Can you turn down the music, please?",
      pt: "Você pode abaixar a música, por favor?",
      options: [
        "Can you turn down the music, please?",
        "Can you turn up the music, please?",
        "Can you turn off the music, please?",
        "Can you turn down the TV, please?",
      ],
      answer: 0,
      explanation:
        "“Down” e “up” soam muito diferentes, mas o erro é comum na pressa. “Off” seria desligar de vez.",
    },
  ],
}
