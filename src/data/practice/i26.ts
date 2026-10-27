import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Descrever pessoas: aparência e personalidade — 10 perguntas. */
export const I26_PRACTICE: LessonPracticeContent = {
  id: "i26",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "He's tall, ___ short dark hair and glasses.",
      hint: "Ele é alto, de cabelo escuro curto e óculos.",
      options: ["with", "of", "has", "in"],
      answer: 0,
      explanation:
        "“With” encaixa características depois de uma descrição: “tall, with short hair”. “Has” seria outro verbo.",
    },
    {
      kind: "completar",
      prompt: "She seems very ___ at first, but she's actually very funny.",
      hint: "Ela parece muito tímida no início, mas na verdade é muito engraçada.",
      options: ["shy", "shyly", "shyness", "shame"],
      answer: 0,
      explanation:
        "Depois de “seems very” vem o adjetivo: “shy”. O advérbio “shyly” descreveria como algo foi feito.",
    },
    {
      kind: "traduzir",
      prompt: "Meu gestor é exigente, mas muito justo.",
      bank: [
        "My",
        "manager",
        "is",
        "demanding",
        "but",
        "very",
        "fair",
        "demand",
        "justly",
      ],
      answer: ["My", "manager", "is", "demanding", "but", "very", "fair"],
      explanation:
        "“Demanding” é o adjetivo para exigente; “fair” é justo. Os dois descrevem personalidade, não aparência.",
    },
    {
      kind: "traduzir",
      prompt: "Ela está na casa dos trinta e é muito extrovertida.",
      bank: [
        "She's",
        "in",
        "her",
        "thirties",
        "and",
        "very",
        "outgoing",
        "thirty",
        "on",
      ],
      answer: ["She's", "in", "her", "thirties", "and", "very", "outgoing"],
      explanation:
        "“In her thirties” indica a faixa dos 30. E o adjetivo vem depois de “very”, sem flexão.",
    },
    {
      kind: "falar",
      prompt: "He's tall, with short dark hair and glasses.",
      pt: "Ele é alto, de cabelo escuro curto e óculos.",
      tip: "“With short dark hair” liga em “uith-chórt-darc-RÉR”. A ordem dos adjetivos é fixa em inglês.",
    },
    {
      kind: "falar",
      prompt: "She seems a bit shy at first, but she's very funny.",
      pt: "Ela parece um pouco tímida no início, mas é muito engraçada.",
      tip: "“At first” soa “et-FÉRST”. Ele contrasta com “but”: começo de um jeito, depois de outro.",
    },
    {
      kind: "ouvirPalavra",
      audio: "outgoing",
      options: ["extrovertido", "saindo de casa", "reservado", "trabalhador"],
      answer: 0,
      explanation:
        "“Outgoing” descreve quem gosta de conversar. O oposto mais comum é “shy”, tímido.",
    },
    {
      kind: "ouvirPalavra",
      audio: "reliable",
      options: ["confiável", "relaxado", "teimoso", "animado"],
      answer: 0,
      explanation:
        "“Reliable” é a pessoa em quem você pode contar. “Stubborn” é teimoso e “easygoing” é tranquilo.",
    },
    {
      kind: "ouvirFrase",
      audio: "He's tall, with short dark hair and glasses.",
      pt: "Ele é alto, de cabelo escuro curto e óculos.",
      options: [
        "He's tall, with short dark hair and glasses.",
        "He's tall, with dark short hair and glasses.",
        "He's tall, and short dark hair and glasses.",
        "She's tall, with short dark hair and glasses.",
      ],
      answer: 0,
      explanation:
        "A ordem dos adjetivos é tamanho antes de cor: “short dark hair”. Trocar soa estranho ao ouvido nativo.",
    },
    {
      kind: "ouvirFrase",
      audio: "My manager is demanding but very fair.",
      pt: "Meu gestor é exigente, mas muito justo.",
      options: [
        "My manager is demanding but very fair.",
        "My manager is demanding and very fair.",
        "My manager is demanding but very funny.",
        "My manager is demanding but very firm.",
      ],
      answer: 0,
      explanation:
        "“But” cria o contraste entre as duas qualidades, o que dá o tom equilibrado da descrição.",
    },
  ],
}
