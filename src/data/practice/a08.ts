import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Subjuntivo nas estruturas formais — 10 perguntas. */
export const A08_PRACTICE: LessonPracticeContent = {
  id: "a08",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I suggest that he ___ informed immediately.",
      hint: "Sugiro que ele seja informado imediatamente.",
      options: ["be", "is", "was", "will be"],
      answer: 0,
      explanation:
        "Depois de “suggest that”, o verbo fica na forma base mesmo na terceira pessoa: “that he be”.",
    },
    {
      kind: "completar",
      prompt: "The board insisted that the deadline ___ extended.",
      hint: "O conselho insistiu que o prazo fosse estendido.",
      options: ["be", "is", "was", "will"],
      answer: 0,
      explanation:
        "“Insist that” puxa o subjuntivo: “that the deadline be extended”, sem conjugação de tempo.",
    },
    {
      kind: "traduzir",
      prompt: "É essencial que todos compareçam à reunião.",
      bank: [
        "It",
        "is",
        "essential",
        "that",
        "everyone",
        "attend",
        "the",
        "meeting",
        "attends",
        "attended",
      ],
      answer: [
        "It",
        "is",
        "essential",
        "that",
        "everyone",
        "attend",
        "the",
        "meeting",
      ],
      explanation:
        "Em “it is essential that”, o verbo seguinte fica na forma base: “everyone attend”. É o subjuntivo formal.",
    },
    {
      kind: "traduzir",
      prompt: "Sugiro que ele seja informado imediatamente.",
      bank: [
        "I",
        "suggest",
        "that",
        "he",
        "be",
        "informed",
        "immediately",
        "is",
        "was",
      ],
      answer: ["I", "suggest", "that", "he", "be", "informed", "immediately"],
      explanation:
        "O “be” sem conjugação é a marca do subjuntivo e aparece muito em contextos corporativos e jurídicos.",
    },
    {
      kind: "falar",
      prompt: "I suggest that he be informed immediately.",
      pt: "Sugiro que ele seja informado imediatamente.",
      tip: "Não conjugue o “be”: mantenha-o curto e claro. A recomendação soa mais firme assim.",
    },
    {
      kind: "falar",
      prompt: "It is essential that everyone attend the meeting.",
      pt: "É essencial que todos compareçam à reunião.",
      tip: "“Everyone” é singular, mas o verbo fica em “attend”. Pausa leve antes de “attend” para destacar a regra.",
    },
    {
      kind: "ouvirPalavra",
      audio: "if I were you",
      options: [
        "se eu fosse você",
        "se eu estivesse aqui",
        "quando eu for você",
        "como se eu fosse",
      ],
      answer: 0,
      explanation:
        "“If I were you” é a fórmula fixa de conselho, com “were” mesmo na primeira pessoa.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I recommend that",
      options: [
        "recomendo que",
        "recomendei que",
        "eu recomendo isso",
        "recomendaria que",
      ],
      answer: 0,
      explanation:
        "“I recommend that” abre o subjuntivo em recomendações formais: “that she be, that they send”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I suggest that he be informed immediately.",
      pt: "Sugiro que ele seja informado imediatamente.",
      options: [
        "I suggest that he be informed immediately.",
        "I suggest that he is informed immediately.",
        "I suggest that he was informed immediately.",
        "I suggest that he informs immediately.",
      ],
      answer: 0,
      explanation:
        "O subjuntivo mantém o verbo na forma base. “Is” muda o sentido para afirmar um fato, não recomendar um curso de ação.",
    },
    {
      kind: "ouvirFrase",
      audio: "It is essential that everyone attend the meeting.",
      pt: "É essencial que todos compareçam à reunião.",
      options: [
        "It is essential that everyone attend the meeting.",
        "It is essential that everyone attends the meeting.",
        "It is essential everyone attending the meeting.",
        "It is essential that everyone attended the meeting.",
      ],
      answer: 0,
      explanation:
        "Depois de “it is essential that” o verbo não recebe “s”: fica “attend”, a forma base do subjuntivo.",
    },
  ],
}
