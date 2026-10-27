import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Inversão com advérbios negativos — 10 perguntas. */
export const A06_PRACTICE: LessonPracticeContent = {
  id: "a06",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Never ___ I seen such a beautiful sunset.",
      hint: "Nunca vi um pôr do sol tão bonito.",
      options: ["have", "has", "did", "had"],
      answer: 0,
      explanation:
        "Advérbio negativo no início exige auxiliar antes do sujeito: “Never have I seen”. É a inversão enfática.",
    },
    {
      kind: "completar",
      prompt: "Not only ___ he apologize, but he also fixed the problem.",
      hint: "Ele não só se desculpou, como também resolveu o problema.",
      options: ["did", "does", "had", "was"],
      answer: 0,
      explanation:
        "Com “not only” no começo, o auxiliar vem antes do sujeito: “Not only did he apologize”.",
    },
    {
      kind: "traduzir",
      prompt: "Raramente vemos tamanha dedicação.",
      bank: ["Rarely", "do", "we", "see", "such", "dedication", "does", "saw"],
      answer: ["Rarely", "do", "we", "see", "such", "dedication"],
      explanation:
        "“Rarely” abre a frase e puxa o auxiliar: “do we see”. Sem a inversão, o efeito de ênfase desaparece.",
    },
    {
      kind: "traduzir",
      prompt: "Nunca vi um pôr do sol tão bonito.",
      bank: [
        "Never",
        "have",
        "I",
        "seen",
        "such",
        "a",
        "beautiful",
        "sunset",
        "has",
        "I saw",
        "see",
      ],
      answer: [
        "Never",
        "have",
        "I",
        "seen",
        "such",
        "a",
        "beautiful",
        "sunset",
      ],
      explanation:
        "O presente perfeito com “never” no início vira “Never have I seen”. É formal e impactante.",
    },
    {
      kind: "falar",
      prompt: "Never have I seen such a beautiful sunset.",
      pt: "Nunca vi um pôr do sol tão bonito.",
      tip: "Suba a entonação em “Never” e enfatize “have”. A inversão só funciona com peso na primeira palavra.",
    },
    {
      kind: "falar",
      prompt: "Not only did he apologize, but he also fixed the problem.",
      pt: "Ele não só se desculpou, como também resolveu o problema.",
      tip: "“Not only did he” flui como “not-ÔN-li-did-i”. O “he” fica fraco depois do auxiliar.",
    },
    {
      kind: "ouvirPalavra",
      audio: "rarely",
      options: ["raramente", "constantemente", "às vezes", "em geral"],
      answer: 0,
      explanation:
        "“Rarely” é um dos advérbios negativos que provocam inversão quando abrem a frase.",
    },
    {
      kind: "ouvirPalavra",
      audio: "no sooner",
      options: ["assim que, mal", "mais cedo", "antes disso", "sem demora"],
      answer: 0,
      explanation:
        "“No sooner had I arrived than…” indica que uma coisa aconteceu logo depois da outra, com inversão obrigatória.",
    },
    {
      kind: "ouvirFrase",
      audio: "Never have I seen such a beautiful sunset.",
      pt: "Nunca vi um pôr do sol tão bonito.",
      options: [
        "Never have I seen such a beautiful sunset.",
        "Never I have seen such a beautiful sunset.",
        "Never did I seen such a beautiful sunset.",
        "Never have I saw such a beautiful sunset.",
      ],
      answer: 0,
      explanation:
        "Depois do auxiliar invertido o verbo fica no particípio: “have I seen”. As outras versões quebram a ordem ou a forma.",
    },
    {
      kind: "ouvirFrase",
      audio: "Not only did he apologize, but he also fixed the problem.",
      pt: "Ele não só se desculpou, como também resolveu o problema.",
      options: [
        "Not only did he apologize, but he also fixed the problem.",
        "Not only he apologized, but he also fixed the problem.",
        "Not only did he apologized, but he also fixed the problem.",
        "Not only did he apologize, but also he fixed the problem.",
      ],
      answer: 0,
      explanation:
        "Com “not only” invertido, o verbo volta à forma base: “did he apologize”. O “also” acompanha o sujeito no segundo trecho.",
    },
  ],
}
