import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Entonação: emoção, dúvida e intenção — 10 perguntas. */
export const A57_PRACTICE: LessonPracticeContent = {
  id: "a57",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "“That's interesting… ↘” with a falling tone can sound ___.",
      hint: "“That's interesting… ↘” com curva descendente pode soar desconfiado.",
      options: ["suspicious", "enthusiastic", "delighted", "surprised"],
      answer: 0,
      explanation:
        "A queda no fim fecha o assunto e pode soar desconfiada; a subida é que traria entusiasmo.",
    },
    {
      kind: "completar",
      prompt: "Wh- questions normally end with a ___ tone.",
      hint: "Perguntas com “wh-” normalmente terminam com curva descendente.",
      options: ["falling", "rising", "flat", "broken"],
      answer: 0,
      explanation:
        "Perguntas de informação fecham com queda; só as de sim/não sobem.",
    },
    {
      kind: "traduzir",
      prompt: "Você vem com a gente? (com curva ascendente)",
      bank: ["Are", "you", "coming", "with", "us", "Do", "come"],
      answer: ["Are", "you", "coming", "with", "us"],
      explanation:
        "Pergunta de sim/não com “are you + gerúndio” e curva ascendente no fim.",
    },
    {
      kind: "traduzir",
      prompt: "Para onde você vai? (com curva descendente)",
      bank: ["Where", "are", "you", "going", "Where", "go", "goes"],
      answer: ["Where", "are", "you", "going"],
      explanation:
        "Perguntas com “where” não invertem o verbo depois do sujeito e fecham com queda.",
    },
    {
      kind: "falar",
      prompt: "Are you coming with us?",
      pt: "Você vem com a gente?",
      tip: "Suba o tom no fim: é o que transforma a frase em pergunta de sim/não.",
    },
    {
      kind: "falar",
      prompt: "Where are you going?",
      pt: "Para onde você vai?",
      tip: "Aqui faça o contrário: desça o tom no fim, como quem espera uma informação.",
    },
    {
      kind: "ouvirPalavra",
      audio: "intonation",
      options: ["entonação", "inspiração", "intenção", "internação"],
      answer: 0,
      explanation:
        "“Intonation” é a curva melódica da frase — o que muda o sentido sem trocar palavras.",
    },
    {
      kind: "ouvirPalavra",
      audio: "rising tone",
      options: [
        "entonação ascendente",
        "tom de voz mais alto",
        "voz quebrando",
        "aumento de volume",
      ],
      answer: 0,
      explanation:
        "A entonação ascendente marca dúvida, continuação ou pergunta de sim/não.",
    },
    {
      kind: "ouvirFrase",
      audio: "Are you coming with us?",
      pt: "Você vem com a gente?",
      options: [
        "Are you coming with us?",
        "Are you come with us?",
        "Do you coming with us?",
        "Are you coming with we?",
      ],
      answer: 0,
      explanation:
        "O presente contínuo pede “are you coming”, e depois de preposição usa-se “us”.",
    },
    {
      kind: "ouvirFrase",
      audio: "That's interesting… but I'm not convinced yet.",
      pt: "Isso é interessante… mas ainda não estou convencido.",
      options: [
        "That's interesting… but I'm not convinced yet.",
        "That's interesting… but I'm not convince yet.",
        "That's interesting… but I don't convinced yet.",
        "That's interesting… but I'm not convinced already.",
      ],
      answer: 0,
      explanation:
        "“I'm not convinced” usa o particípio, e “yet” é o advérbio que fecha a ressalva.",
    },
  ],
}
