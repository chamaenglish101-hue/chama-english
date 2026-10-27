import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Elipse e substituição: responder sem repetir — 10 perguntas. */
export const A18_PRACTICE: LessonPracticeContent = {
  id: "a18",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I love coffee. — ___ I.",
      hint: "Adoro café. — Eu também.",
      options: ["So do", "So am", "Neither", "Too do"],
      answer: 0,
      explanation:
        "Para concordar com uma afirmação, usa-se “So + auxiliar + sujeito”: “So do I”, com o auxiliar do verbo original.",
    },
    {
      kind: "completar",
      prompt: "I've never been there. — ___ have I.",
      hint: "Nunca fui lá. — Eu também não.",
      options: ["Neither", "So", "Either", "Nor not"],
      answer: 0,
      explanation:
        "Para concordar com uma negação, o correto é “Neither have I” — o auxiliar acompanha o tempo do verbo original.",
    },
    {
      kind: "traduzir",
      prompt: "Qual você quer? — O pequeno, por favor.",
      bank: [
        "Which",
        "one",
        "do",
        "you",
        "want",
        "The",
        "small",
        "one",
        "please",
        "ones",
        "that",
      ],
      answer: [
        "Which",
        "one",
        "do",
        "you",
        "want",
        "The",
        "small",
        "one",
        "please",
      ],
      explanation:
        "“The small one” evita repetir o substantivo: “one” substitui a palavra já conhecida.",
    },
    {
      kind: "traduzir",
      prompt: "Adoro café. — Eu também.",
      bank: ["I", "love", "coffee", "So", "do", "I", "Neither", "too"],
      answer: ["I", "love", "coffee", "So", "do", "I"],
      explanation:
        "O auxiliar “do” concorda com o verbo “love” no presente. Sem ele, a resposta soaria estranha em inglês.",
    },
    {
      kind: "falar",
      prompt: "I've never been there. — Neither have I.",
      pt: "Nunca fui lá. — Eu também não.",
      tip: "A inversão é obrigatória: “Neither have I”, nunca “Neither I have”. Sublinhe o “have”.",
    },
    {
      kind: "falar",
      prompt: "Which one do you want? — The small one, please.",
      pt: "Qual você quer? — O pequeno, por favor.",
      tip: "“The small one” soa “da-smól-uan”. Bem ligado, sem pausa depois de “small”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "so do I",
      options: [
        "eu também",
        "eu também não",
        "eu sim, mas você não",
        "poderia ser",
      ],
      answer: 0,
      explanation:
        "“So do I” concorda com uma afirmação no presente. O auxiliar muda conforme o tempo: “so did I”, “so have I”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "neither do I",
      options: ["eu também não", "eu também", "eu nunca", "nem um nem outro"],
      answer: 0,
      explanation:
        "“Neither do I” faz par com “so do I”: um confirma, o outro nega, sempre com inversão.",
    },
    {
      kind: "ouvirFrase",
      audio: "I love coffee. So do I.",
      pt: "Adoro café. Eu também.",
      options: [
        "I love coffee. So do I.",
        "I love coffee. So I do.",
        "I love coffee. So am I.",
        "I love coffee. Neither do I.",
      ],
      answer: 0,
      explanation:
        "A ordem é auxiliar antes do sujeito, e o auxiliar precisa combinar com “love”: “So do I”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I've never been there. Neither have I.",
      pt: "Nunca fui lá. Eu também não.",
      options: [
        "I've never been there. Neither have I.",
        "I've never been there. Neither I have.",
        "I've never been there. So have I.",
        "I've never been there. Neither do I.",
      ],
      answer: 0,
      explanation:
        "Com o presente perfeito, o auxiliar da concordância negativa é “have”: “Neither have I”.",
    },
  ],
}
