import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Descrição criativa: imagem sensorial — 10 perguntas. */
export const A66_PRACTICE: LessonPracticeContent = {
  id: "a66",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The harbour ___ of diesel and salt.",
      hint: "O porto cheirava a diesel e sal.",
      options: ["smelled", "sounded", "tasted", "looked"],
      answer: 0,
      explanation:
        "“To smell of something” é o verbo sensorial do olfato — a base da descrição com imagem.",
    },
    {
      kind: "completar",
      prompt: "The old wood ___ under our feet as we walked in.",
      hint: "A madeira velha rangia sob nossos pés quando entramos.",
      options: ["creaked", "cracked", "crashed", "crackled"],
      answer: 0,
      explanation:
        "“To creak” é o rangido da madeira — som específico, e é a precisão que cria a imagem.",
    },
    {
      kind: "traduzir",
      prompt: "A cidade acordava com o cheiro de pão e o barulho dos bondes.",
      bank: [
        "The",
        "city",
        "woke",
        "up",
        "to",
        "the",
        "smell",
        "of",
        "bread",
        "and",
        "the",
        "noise",
        "of",
        "trams",
        "smells",
        "wakes",
      ],
      answer: [
        "The",
        "city",
        "woke",
        "up",
        "to",
        "the",
        "smell",
        "of",
        "bread",
        "and",
        "the",
        "noise",
        "of",
        "trams",
      ],
      explanation:
        "“To wake up to something” liga o despertar à sensação; a frase ainda equilibra dois sentidos.",
    },
    {
      kind: "traduzir",
      prompt: "O porto cheirava a diesel e sal.",
      bank: [
        "The",
        "harbour",
        "smelled",
        "of",
        "diesel",
        "and",
        "salt",
        "smell",
        "salted",
      ],
      answer: ["The", "harbour", "smelled", "of", "diesel", "and", "salt"],
      explanation:
        "O passado “smelled” e a preposição “of” formam a estrutura dos cinco sentidos.",
    },
    {
      kind: "falar",
      prompt: "The harbour smelled of diesel and salt.",
      pt: "O porto cheirava a diesel e sal.",
      tip: "Alongue “harbour” e encoste “smelled of” sem pausa: a imagem pede fluxo, não palavras isoladas.",
    },
    {
      kind: "falar",
      prompt: "The old wood creaked under our feet as we walked in.",
      pt: "A madeira velha rangia sob nossos pés quando entramos.",
      tip: "Fale “creaked” bem curto e seco — o som da palavra reforça o que ela descreve.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to creak",
      options: [
        "ranger (madeira, dobradiça)",
        "quebrar em pedaços",
        "estalar os dedos",
        "chiar de forma contínua",
      ],
      answer: 0,
      explanation:
        "“To creak” é o som específico da madeira ou dobradiça velha — verbos precisos criam imagem.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to smell of",
      options: [
        "cheirar a algo",
        "sentir o cheiro de longe",
        "ter mau odor",
        "perfumar-se",
      ],
      answer: 0,
      explanation:
        "“To smell of something” diz do que algo exala — estrutura fixa dos verbos de percepção.",
    },
    {
      kind: "ouvirFrase",
      audio: "The harbour smelled of diesel and salt.",
      pt: "O porto cheirava a diesel e sal.",
      options: [
        "The harbour smelled of diesel and salt.",
        "The harbour smelled with diesel and salt.",
        "The harbour smell of diesel and salt.",
        "The harbour smelled of diesel and salty.",
      ],
      answer: 0,
      explanation:
        "A preposição é “of”, e “salt” (substantivo) acompanha “diesel” na mesma estrutura.",
    },
    {
      kind: "ouvirFrase",
      audio: "The city woke up to the smell of bread and the noise of trams.",
      pt: "A cidade acordava com o cheiro de pão e o barulho dos bondes.",
      options: [
        "The city woke up to the smell of bread and the noise of trams.",
        "The city woke up with the smell of bread and the noise of trams.",
        "The city waked up to the smell of bread and the noise of trams.",
        "The city woke up to the smell of bread and the noisy of trams.",
      ],
      answer: 0,
      explanation:
        "A locução é “woke up to”, e “noise” é o substantivo correspondente a “noisy”.",
    },
  ],
}
