import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Voz passiva — 10 perguntas. */
export const I11_PRACTICE: LessonPracticeContent = {
  id: "i11",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "This app ___ developed by a small team in Brazil.",
      hint: "Este aplicativo foi desenvolvido por uma equipe pequena no Brasil.",
      options: ["was", "did", "has", "were"],
      answer: 0,
      explanation:
        "Passiva no passado: verbo to be no passado + particípio. “This app” é singular, então “was developed”.",
    },
    {
      kind: "completar",
      prompt: "Portuguese ___ spoken in Brazil, Portugal and Angola.",
      hint: "O português é falado no Brasil, em Portugal e em Angola.",
      options: ["is", "are", "does", "has"],
      answer: 0,
      explanation:
        "Fato geral na passiva usa “is + particípio”. O agente não importa aqui, por isso ele não aparece.",
    },
    {
      kind: "traduzir",
      prompt: "A ponte foi construída em 1998.",
      bank: [
        "The",
        "bridge",
        "was",
        "built",
        "in",
        "1998",
        "did",
        "builded",
        "is",
      ],
      answer: ["The", "bridge", "was", "built", "in", "1998"],
      explanation:
        "Passiva com data definida: “was built”. O particípio de “build” é “built”, nunca “builded”.",
    },
    {
      kind: "traduzir",
      prompt: "Meu carro está sendo consertado nesta semana.",
      bank: [
        "My",
        "car",
        "is",
        "being",
        "repaired",
        "this",
        "week",
        "was",
        "repairing",
      ],
      answer: ["My", "car", "is", "being", "repaired", "this", "week"],
      explanation:
        "A passiva contínua é “is being + particípio”: a ação está em andamento, mas o sujeito não a pratica.",
    },
    {
      kind: "falar",
      prompt: "This app was developed by a small team in Brazil.",
      pt: "Este aplicativo foi desenvolvido por uma equipe pequena no Brasil.",
      tip: "“Was developed” liga em “uós-di-VÉ-lopt”. O “-ed” depois de som surdo soa como “t”.",
    },
    {
      kind: "falar",
      prompt: "The bridge was built in 1998.",
      pt: "A ponte foi construída em 1998.",
      tip: "“Built” tem uma sílaba só, com “l” quase mudo. E os anos são lidos “nain-tí-nain-ti-êit”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "by",
      options: ["por (autor da ação)", "para", "com", "de dentro"],
      answer: 0,
      explanation:
        "Na passiva, “by” apresenta quem fez a ação: “written by Machado de Assis”. Sem ele, o agente fica oculto.",
    },
    {
      kind: "ouvirPalavra",
      audio: "is being repaired",
      options: [
        "está sendo consertado",
        "foi consertado",
        "vai ser consertado",
        "precisa ser consertado",
      ],
      answer: 0,
      explanation:
        "“Is being + particípio” mostra ação em andamento na passiva. “Was repaired” puxaria para o passado concluído.",
    },
    {
      kind: "ouvirFrase",
      audio: "Portuguese is spoken in Brazil.",
      pt: "O português é falado no Brasil.",
      options: [
        "Portuguese is spoken in Brazil.",
        "Portuguese is speaking in Brazil.",
        "Portuguese was spoken in Brazil.",
        "Portuguese are spoken in Brazil.",
      ],
      answer: 0,
      explanation:
        "“Is spoken” é passiva com “-en” no particípio. “Is speaking” significaria que o idioma fala algo.",
    },
    {
      kind: "ouvirFrase",
      audio: "The bridge was built in 1998.",
      pt: "A ponte foi construída em 1998.",
      options: [
        "The bridge was built in 1998.",
        "The bridge was build in 1998.",
        "The bridge did built in 1998.",
        "The bridge was built in 1989.",
      ],
      answer: 0,
      explanation:
        "Depois de “was” o verbo tem de estar no particípio: “built”. Os dois números finais também são a pista.",
    },
  ],
}
