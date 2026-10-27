import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Phrasal verbs de relações pessoais — 10 perguntas. */
export const A22_PRACTICE: LessonPracticeContent = {
  id: "a22",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I ___ along really well with my in-laws.",
      hint: "Me dou muito bem com meus sogros.",
      options: ["get", "take", "make", "fall"],
      answer: 0,
      explanation:
        "“Get along with” descreve um bom relacionamento, sempre acompanhado de “with”.",
    },
    {
      kind: "completar",
      prompt: "They fell ___ over money and never made up.",
      hint: "Eles brigaram por dinheiro e nunca fizeram as pazes.",
      options: ["out", "in", "up", "off"],
      answer: 0,
      explanation:
        "“Fall out with someone” é brigar e interromper a relação; “make up” é fazer as pazes.",
    },
    {
      kind: "traduzir",
      prompt: "Admiro minha irmã mais velha.",
      bank: [
        "I",
        "look",
        "up",
        "to",
        "my",
        "older",
        "sister",
        "look for",
        "older sister",
      ],
      answer: ["I", "look", "up", "to", "my", "older", "sister"],
      explanation:
        "“Look up to someone” é admirar e ter como referência, diferente de “look up” (consultar).",
    },
    {
      kind: "traduzir",
      prompt: "Eles brigaram por dinheiro e nunca fizeram as pazes.",
      bank: [
        "They",
        "fell",
        "out",
        "over",
        "money",
        "and",
        "never",
        "made",
        "up",
        "felt",
        "make",
      ],
      answer: [
        "They",
        "fell",
        "out",
        "over",
        "money",
        "and",
        "never",
        "made",
        "up",
      ],
      explanation:
        "A causa da briga entra com “over”, e as pazes se fazem com “make up”.",
    },
    {
      kind: "falar",
      prompt: "I get along really well with my in-laws.",
      pt: "Me dou muito bem com meus sogros.",
      tip: "“Get along” emenda em “guet-a-LÓN”. O “with” encosta no “my” sem pausa.",
    },
    {
      kind: "falar",
      prompt: "They fell out over money and never made up.",
      pt: "Eles brigaram por dinheiro e nunca fizeram as pazes.",
      tip: "“Fell out” soa “fel-ÁUT”. O “over” fica fraco e o “made up” fecha bem ligado.",
    },
    {
      kind: "ouvirPalavra",
      audio: "grow apart",
      options: [
        "se afastar aos poucos",
        "crescer junto",
        "morar separado",
        "ficar mais alto",
      ],
      answer: 0,
      explanation:
        "“Grow apart” descreve o afastamento gradual de duas pessoas que antes eram próximas.",
    },
    {
      kind: "ouvirPalavra",
      audio: "make up",
      options: [
        "fazer as pazes",
        "inventar uma desculpa",
        "maquiar",
        "resolver sozinho",
      ],
      answer: 0,
      explanation:
        "No contexto de relações, “make up” significa reconciliar-se depois de uma briga.",
    },
    {
      kind: "ouvirFrase",
      audio: "I get along really well with my in-laws.",
      pt: "Me dou muito bem com meus sogros.",
      options: [
        "I get along really well with my in-laws.",
        "I get on really well with my in-laws.",
        "I get along really good with my in-laws.",
        "I get along really well my in-laws.",
      ],
      answer: 0,
      explanation:
        "A forma coloquial típica é “get along well”, com “well” e a preposição “with” obrigatória.",
    },
    {
      kind: "ouvirFrase",
      audio: "I look up to my older sister.",
      pt: "Admiro minha irmã mais velha.",
      options: [
        "I look up to my older sister.",
        "I look up my older sister.",
        "I look up for my older sister.",
        "I look for up my older sister.",
      ],
      answer: 0,
      explanation:
        "“Look up to” é inseparável e sempre leva “to” para indicar admiração. E “older” traduz “mais velha”.",
    },
  ],
}
