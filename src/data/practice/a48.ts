import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Parafrasear e resumir fontes — 10 perguntas. */
export const A48_PRACTICE: LessonPracticeContent = {
  id: "a48",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "___ to the 2024 report, hybrid teams report higher satisfaction.",
      hint: "Segundo o relatório de 2024, equipes híbridas relatam maior satisfação.",
      options: ["According", "Because", "Despite", "Instead"],
      answer: 0,
      explanation:
        "“According to” atribui a informação à fonte, o que é obrigatório ao citar um estudo.",
    },
    {
      kind: "completar",
      prompt:
        "The author argues that flexibility, not surveillance, ___ performance.",
      hint: "A autora argumenta que flexibilidade, não vigilância, impulsiona o desempenho.",
      options: ["drives", "drive", "driving", "drove"],
      answer: 0,
      explanation:
        "O sujeito real é “flexibility”, no singular, então o verbo fica “drives”.",
    },
    {
      kind: "traduzir",
      prompt: "Em resumo, o estudo liga autonomia à retenção de talentos.",
      bank: [
        "In",
        "short",
        "the",
        "study",
        "links",
        "autonomy",
        "to",
        "retention",
        "links to",
        "shortly",
      ],
      answer: [
        "In",
        "short",
        "the",
        "study",
        "links",
        "autonomy",
        "to",
        "retention",
      ],
      explanation:
        "“In short” marca o resumo, e “links something to something” é a estrutura da relação encontrada.",
    },
    {
      kind: "traduzir",
      prompt:
        "Segundo o relatório de 2024, equipes híbridas relatam maior satisfação.",
      bank: [
        "According",
        "to",
        "the",
        "2024",
        "report",
        "hybrid",
        "teams",
        "report",
        "higher",
        "satisfaction",
        "reports",
        "high",
      ],
      answer: [
        "According",
        "to",
        "the",
        "2024",
        "report",
        "hybrid",
        "teams",
        "report",
        "higher",
        "satisfaction",
      ],
      explanation:
        "A citação mantém a fonte explícita e usa o comparativo “higher” para a satisfação relatada.",
    },
    {
      kind: "falar",
      prompt:
        "According to the 2024 report, hybrid teams report higher satisfaction.",
      pt: "Segundo o relatório de 2024, equipes híbridas relatam maior satisfação.",
      tip: "“According to” soa “a-KÓR-din-tu”. Faça uma pausa depois antes de citar o dado.",
    },
    {
      kind: "falar",
      prompt: "In short, the study links autonomy to retention.",
      pt: "Em resumo, o estudo liga autonomia à retenção de talentos.",
      tip: "“In short” deixa o tom de fechamento. Fale o resto mais rápido, como quem conclui.",
    },
    {
      kind: "ouvirPalavra",
      audio: "according to",
      options: [
        "segundo, de acordo com",
        "por causa de",
        "apesar de",
        "junto com",
      ],
      answer: 0,
      explanation:
        "“According to” é a fórmula fixa para atribuir informação a uma fonte, sem a qual a citação fica inválida.",
    },
    {
      kind: "ouvirPalavra",
      audio: "in short",
      options: [
        "em resumo",
        "em poucas palavras escritas",
        "por enquanto",
        "em sequência",
      ],
      answer: 0,
      explanation:
        "“In short” introduz o resumo final e sinaliza ao leitor que vem a síntese do argumento.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "The author argues that flexibility, not surveillance, drives performance.",
      pt: "A autora argumenta que flexibilidade, não vigilância, impulsiona o desempenho.",
      options: [
        "The author argues that flexibility, not surveillance, drives performance.",
        "The author argues that flexibility, not surveillance, drive performance.",
        "The author argue that flexibility, not surveillance, drives performance.",
        "The author argues that flexibility, not surveillance, driving performance.",
      ],
      answer: 0,
      explanation:
        "“The author” é singular e pede “argues”; e o sujeito da segunda oração é “flexibility”, que pede “drives”.",
    },
    {
      kind: "ouvirFrase",
      audio: "In short, the study links autonomy to retention.",
      pt: "Em resumo, o estudo liga autonomia à retenção de talentos.",
      options: [
        "In short, the study links autonomy to retention.",
        "In short, the study links autonomy with retention.",
        "In short, the study link autonomy to retention.",
        "In short, the study links autonomy for retention.",
      ],
      answer: 0,
      explanation:
        "A collocation é “link something to something”, e “the study” pede o verbo com “s”.",
    },
  ],
}
