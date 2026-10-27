import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Textos opinativos: viés e o que ficou de fora — 10 perguntas. */
export const A51_PRACTICE: LessonPracticeContent = {
  id: "a51",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The article tries to ___ the risks, mentioning them only once.",
      hint: "O artigo tenta minimizar os riscos, mencionando-os só uma vez.",
      options: ["downplay", "downplay down", "play down off", "downplays"],
      answer: 0,
      explanation:
        "Depois de “to” usa-se o infinitivo “downplay” — o verbo vem sem “s”.",
    },
    {
      kind: "completar",
      prompt: "Every text has a ___: notice which facts were left out.",
      hint: "Todo texto tem um viés: note quais fatos ficaram de fora.",
      options: ["bias", "biased", "biasly", "biases"],
      answer: 0,
      explanation:
        "“Bias” é o substantivo; “biased” seria o adjetivo, e aqui a posição pede o substantivo.",
    },
    {
      kind: "traduzir",
      prompt:
        "O autor minimiza a queda e omite os números do último trimestre.",
      bank: [
        "The",
        "author",
        "downplays",
        "the",
        "drop",
        "and",
        "omits",
        "the",
        "figures",
        "for",
        "the",
        "last",
        "quarter",
        "omit",
        "downplay",
      ],
      answer: [
        "The",
        "author",
        "downplays",
        "the",
        "drop",
        "and",
        "omits",
        "the",
        "figures",
        "for",
        "the",
        "last",
        "quarter",
      ],
      explanation:
        "Os dois verbos concordam com “the author” no singular: “downplays” e “omits”.",
    },
    {
      kind: "traduzir",
      prompt: "Todo texto tem um viés: note o que ficou de fora.",
      bank: [
        "Every",
        "text",
        "has",
        "a",
        "bias",
        "notice",
        "what",
        "was",
        "left",
        "out",
        "have",
        "leaves",
      ],
      answer: [
        "Every",
        "text",
        "has",
        "a",
        "bias",
        "notice",
        "what",
        "was",
        "left",
        "out",
      ],
      explanation:
        "“Every text has” fica no singular, e “what was left out” traz a voz passiva da omissão.",
    },
    {
      kind: "falar",
      prompt:
        "The author downplays the drop and omits the figures for the last quarter.",
      pt: "O autor minimiza a queda e omite os números do último trimestre.",
      tip: "Acento em “DOWNplays” e “oMITs”: os dois verbos são a denúncia da leitura crítica.",
    },
    {
      kind: "falar",
      prompt: "Every text has a bias — notice what was left out.",
      pt: "Todo texto tem um viés — note o que ficou de fora.",
      tip: "Fale o travessão como pausa e desça o tom em “left out”: é a conclusão.",
    },
    {
      kind: "ouvirPalavra",
      audio: "bias",
      options: ["viés", "cortesia", "ruído", "equilíbrio"],
      answer: 0,
      explanation:
        "“Bias” é a inclinação do texto ou do autor, que pode ser consciente ou não.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to downplay",
      options: [
        "minimizar",
        "brincar embaixo",
        "rebaixar o nível",
        "descer o tom de voz",
      ],
      answer: 0,
      explanation:
        "“To downplay” é dar menos importância a um fato do que ele merece.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "The author downplays the drop and omits the figures for the last quarter.",
      pt: "O autor minimiza a queda e omite os números do último trimestre.",
      options: [
        "The author downplays the drop and omits the figures for the last quarter.",
        "The author downplay the drop and omits the figures for the last quarter.",
        "The author downplays the drop and omit the figures for the last quarter.",
        "The author downplays the drop and omits the figures for the last quarter's.",
      ],
      answer: 0,
      explanation:
        "Os dois verbos precisam do “s” de terceira pessoa: “downplays” e “omits”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Every text has a bias — notice what was left out.",
      pt: "Todo texto tem um viés — note o que ficou de fora.",
      options: [
        "Every text has a bias — notice what was left out.",
        "Every text have a bias — notice what was left out.",
        "Every texts has a bias — notice what was left out.",
        "Every text has a bias — notice what was leave out.",
      ],
      answer: 0,
      explanation:
        "“Every” pede singular em “text” e “has”; e a passiva correta é “was left out”.",
    },
  ],
}
