import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Conectivos: causa, contraste e consequência — 10 perguntas. */
export const I16_PRACTICE: LessonPracticeContent = {
  id: "i16",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I stayed home ___ it was raining hard.",
      hint: "Fiquei em casa porque estava chovendo forte.",
      options: ["because", "so", "although", "however"],
      answer: 0,
      explanation:
        "“Because” apresenta a causa. “So” faria o caminho inverso, ligando a causa ao resultado.",
    },
    {
      kind: "completar",
      prompt: "___ it was raining, we went out for a walk.",
      hint: "Embora estivesse chovendo, saímos para caminhar.",
      options: ["Although", "Because", "So", "Therefore"],
      answer: 0,
      explanation:
        "“Although” introduz o contraste: a chuva não impediu a caminhada.",
    },
    {
      kind: "traduzir",
      prompt: "O voo atrasou, então perdemos a reunião.",
      bank: [
        "The",
        "flight",
        "was",
        "delayed",
        "so",
        "we",
        "missed",
        "the",
        "meeting",
        "because",
        "although",
      ],
      answer: [
        "The",
        "flight",
        "was",
        "delayed",
        "so",
        "we",
        "missed",
        "the",
        "meeting",
      ],
      explanation:
        "“So” liga a causa ao resultado dentro da mesma frase. “Because” faria o percurso contrário.",
    },
    {
      kind: "traduzir",
      prompt: "Já que você já terminou, pode ir para casa.",
      bank: [
        "Since",
        "you",
        "already",
        "finished",
        "you",
        "can",
        "go",
        "home",
        "so",
        "although",
      ],
      answer: [
        "Since",
        "you",
        "already",
        "finished",
        "you",
        "can",
        "go",
        "home",
      ],
      explanation:
        "“Since” aqui significa “já que” e abre a frase com uma causa já conhecida pelas duas pessoas.",
    },
    {
      kind: "falar",
      prompt: "I stayed home because it was raining hard.",
      pt: "Fiquei em casa porque estava chovendo forte.",
      tip: "“Because” na fala vira “bi-CÓZ”, com a segunda sílaba forte. Não junte com a palavra seguinte de forma exagerada.",
    },
    {
      kind: "falar",
      prompt: "Although it was raining, we went out for a walk.",
      pt: "Embora estivesse chovendo, saímos para caminhar.",
      tip: "“Although” soa “ol-RÔU”, tudo junto. A pausa depois dele marca o contraste da frase.",
    },
    {
      kind: "ouvirPalavra",
      audio: "however",
      options: ["no entanto", "portanto", "porque", "assim que"],
      answer: 0,
      explanation:
        "“However” marca contraste e é mais formal que “but”. Costuma abrir a frase, seguido de vírgula.",
    },
    {
      kind: "ouvirPalavra",
      audio: "therefore",
      options: ["portanto", "embora", "enquanto", "por acaso"],
      answer: 0,
      explanation:
        "“Therefore” introduz a consequência lógica de algo já dito — muito comum em textos e reuniões.",
    },
    {
      kind: "ouvirFrase",
      audio: "Although it was raining, we went out.",
      pt: "Embora estivesse chovendo, saímos.",
      options: [
        "Although it was raining, we went out.",
        "Because it was raining, we went out.",
        "Although it was raining, we stayed home.",
        "However it was raining, we went out.",
      ],
      answer: 0,
      explanation:
        "“Although” aceita o fato e depois mostra o contraste. “However” não pode abrir uma oração subordinada assim.",
    },
    {
      kind: "ouvirFrase",
      audio: "The flight was delayed, so we missed the meeting.",
      pt: "O voo atrasou, então perdemos a reunião.",
      options: [
        "The flight was delayed, so we missed the meeting.",
        "The flight was delayed, because we missed the meeting.",
        "The flight was delayed, so we missed the flight.",
        "The flight was cancelled, so we missed the meeting.",
      ],
      answer: 0,
      explanation:
        "Ouça “so” antes de “we missed”. Trocá-lo por “because” inverteria a relação de causa e consequência.",
    },
  ],
}
