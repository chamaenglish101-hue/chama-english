import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Dar opinião e discordar com educação — 10 perguntas. */
export const I27_PRACTICE: LessonPracticeContent = {
  id: "i27",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I see your ___, but I think we need more data.",
      hint: "Entendo seu ponto, mas acho que precisamos de mais dados.",
      options: ["point", "opinion", "idea", "view"],
      answer: 0,
      explanation:
        "A expressão fixa é “I see your point”. Ela reconhece o argumento do outro antes de discordar.",
    },
    {
      kind: "completar",
      prompt: "In my ___, we should test it before we launch.",
      hint: "Na minha opinião, deveríamos testar antes de lançar.",
      options: ["opinion", "mind", "idea", "point"],
      answer: 0,
      explanation:
        "“In my opinion” é a forma padrão de abrir uma opinião em contexto profissional.",
    },
    {
      kind: "traduzir",
      prompt: "Concordo totalmente com você.",
      bank: ["I", "totally", "agree", "with", "you", "agreeing", "of", "in"],
      answer: ["I", "totally", "agree", "with", "you"],
      explanation:
        "“Agree with someone” usa “with”. “Totally” reforça a concordância de forma natural.",
    },
    {
      kind: "traduzir",
      prompt: "Não tenho tanta certeza sobre isso.",
      bank: ["I'm", "not", "so", "sure", "about", "that", "no", "of", "this"],
      answer: ["I'm", "not", "so", "sure", "about", "that"],
      explanation:
        "“I'm not so sure about that” discorda com educação, sem dizer que o outro está errado.",
    },
    {
      kind: "falar",
      prompt: "I see your point, but I think we need more data.",
      pt: "Entendo seu ponto, mas acho que precisamos de mais dados.",
      tip: "A pausa depois de “point” dá tempo para a concordância e prepara a discordância com naturalidade.",
    },
    {
      kind: "falar",
      prompt: "In my opinion, we should test it first.",
      pt: "Na minha opinião, deveríamos testar primeiro.",
      tip: "“In my opinion” soa “in-mai-a-PÍ-nion”, corrido. O “should” vem fraco: “chud”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "That's a good point",
      options: [
        "é um bom argumento",
        "esse é o ponto certo",
        "está bem localizado",
        "é uma boa nota",
      ],
      answer: 0,
      explanation:
        "“That's a good point” reconhece o argumento do outro — e é a ponte perfeita para acrescentar uma ressalva.",
    },
    {
      kind: "ouvirPalavra",
      audio: "It seems to me",
      options: [
        "parece-me, me dá a impressão",
        "eu tenho certeza",
        "eu duvido muito",
        "é evidente que",
      ],
      answer: 0,
      explanation:
        "“It seems to me” suaviza a opinião e deixa espaço para o outro discordar sem atrito.",
    },
    {
      kind: "ouvirFrase",
      audio: "I see your point, but I think we need more data.",
      pt: "Entendo seu ponto, mas acho que precisamos de mais dados.",
      options: [
        "I see your point, but I think we need more data.",
        "I see your point, so I think we need more data.",
        "I see your point, but I think we need more time.",
        "I see your opinion, but I think we need more data.",
      ],
      answer: 0,
      explanation:
        "O “but” é o que constrói a discordância educada. Com “so” a frase concordaria, mudando todo o sentido.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm not so sure about that.",
      pt: "Não tenho tanta certeza sobre isso.",
      options: [
        "I'm not so sure about that.",
        "I'm not sure about that.",
        "I'm not so sure about this.",
        "I am so sure about that.",
      ],
      answer: 0,
      explanation:
        "O “so” antes de “sure” é o que suaviza a discordância. Sem ele, “I'm not sure” soa mais seco.",
    },
  ],
}
