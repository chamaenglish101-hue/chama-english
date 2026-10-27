import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Entender o ritmo da fala rápida — 10 perguntas. */
export const I32_PRACTICE: LessonPracticeContent = {
  id: "i32",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "“What do you want to do?” na fala rápida soa ___.",
      hint: "O que você quer fazer? (bem rápido)",
      options: [
        "Whaddaya wanna do?",
        "What you want do?",
        "Wanna what do?",
        "What do wanna you do?",
      ],
      answer: 0,
      explanation:
        "As reduções encaixam as palavras: “what do you” → “whaddaya” e “want to” → “wanna”.",
    },
    {
      kind: "completar",
      prompt: "I'm ___ call you later, as soon as I finish this.",
      hint: "Vou te ligar depois, assim que terminar isso.",
      options: ["gonna", "go to", "going", "gone to"],
      answer: 0,
      explanation:
        "“Gonna” é a forma reduzida de “going to” na fala espontânea. O sentido é futuro.",
    },
    {
      kind: "traduzir",
      prompt: "Pode repetir isso?",
      bank: ["Could", "you", "say", "that", "again", "repeat", "more", "speak"],
      answer: ["Could", "you", "say", "that", "again"],
      explanation:
        "“Could you say that again?” é a rede de segurança do ouvinte. Serve para confirmar o que você não captou.",
    },
    {
      kind: "traduzir",
      prompt: "Comprei uma maçã e um ovo.",
      bank: ["I", "bought", "an", "apple", "and", "an", "egg", "a", "the"],
      answer: ["I", "bought", "an", "apple", "and", "an", "egg"],
      explanation:
        "Na fala nativa, palavras se ligam: “anapple” e “anegg”. Entender essas ligações é o segredo da velocidade.",
    },
    {
      kind: "falar",
      prompt: "I'm gonna call you later.",
      pt: "Vou te ligar depois.",
      tip: "“Gonna” é uma sílaba só: “GÓN-a”. É a mesma estrutura de “going to”, só mais rápida.",
    },
    {
      kind: "falar",
      prompt: "Could you say that again?",
      pt: "Pode repetir isso?",
      tip: "“Say that again” liga em “SÊI-det-a-GUÉIN”, tudo junto. A entonação sobe no fim.",
    },
    {
      kind: "ouvirPalavra",
      audio: "gonna",
      options: [
        "vou (going to reduzido)",
        "vou embora",
        "já fui",
        "estou indo",
      ],
      answer: 0,
      explanation:
        "“Gonna” é a redução de “going to” e sempre indica futuro: “I'm gonna call you”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "wanna",
      options: [
        "querer (want to reduzido)",
        "ganhar",
        "desejar em silêncio",
        "não querer",
      ],
      answer: 0,
      explanation:
        "“Wanna” é “want to” na fala rápida: “I wanna learn English”. O “t” desaparece.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm gonna call you later.",
      pt: "Vou te ligar depois.",
      options: [
        "I'm gonna call you later.",
        "I'm going to call you later.",
        "I'm gonna call you now.",
        "I'm gonna tell you later.",
      ],
      answer: 0,
      explanation:
        "Aqui o foco é a redução: “gonna” em vez de “going to”. O sentido é o mesmo futuro próximo.",
    },
    {
      kind: "ouvirFrase",
      audio: "Could you say that again, please?",
      pt: "Pode repetir isso, por favor?",
      options: [
        "Could you say that again, please?",
        "Could you say that a gain, please?",
        "Could you tell that again, please?",
        "Could you say that again, teacher?",
      ],
      answer: 0,
      explanation:
        "Ouça “say that again”, tudo ligado. “Tell that again” não é usado: com “that”, o verbo é “say”.",
    },
  ],
}
