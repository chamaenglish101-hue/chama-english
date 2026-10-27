import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Fronting e ordem marcada da frase — 10 perguntas. */
export const A19_PRACTICE: LessonPracticeContent = {
  id: "a19",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "This issue, we ___ address next week.",
      hint: "Esta questão, trataremos na semana que vem.",
      options: ["will", "are", "have", "did"],
      answer: 0,
      explanation:
        "O complemento vai para o início e o sujeito vem depois da vírgula, sem inversão: “This issue, we will address”.",
    },
    {
      kind: "completar",
      prompt: "At the top of the agenda ___ the budget.",
      hint: "No topo da pauta está o orçamento.",
      options: ["is", "are", "be", "has"],
      answer: 0,
      explanation:
        "Quando um lugar abre a frase com “be”, o verbo vem antes do sujeito: “is the budget”.",
    },
    {
      kind: "traduzir",
      prompt: "Tamanho foi o impacto que as vendas dobraram.",
      bank: [
        "Such",
        "was",
        "the",
        "impact",
        "that",
        "sales",
        "doubled",
        "so",
        "double",
      ],
      answer: ["Such", "was", "the", "impact", "that", "sales", "doubled"],
      explanation:
        "“Such was… that” é uma inversão enfática que destaca a intensidade do impacto.",
    },
    {
      kind: "traduzir",
      prompt: "Esta questão, trataremos na semana que vem.",
      bank: [
        "This",
        "issue",
        "we",
        "will",
        "address",
        "next",
        "week",
        "issues",
        "addressing",
      ],
      answer: ["This", "issue", "we", "will", "address", "next", "week"],
      explanation:
        "O fronting coloca o objeto em destaque e não pede inversão: o sujeito “we” continua antes do verbo.",
    },
    {
      kind: "falar",
      prompt: "This issue, we will address next week.",
      pt: "Esta questão, trataremos na semana que vem.",
      tip: "Faça uma pausa clara depois de “issue”: é a vírgula que sinaliza o deslocamento.",
    },
    {
      kind: "falar",
      prompt: "At the top of the agenda is the budget.",
      pt: "No topo da pauta está o orçamento.",
      tip: "A entonação sobe em “agenda” e vai caindo até “budget”. O verbo fica no meio, sem peso.",
    },
    {
      kind: "ouvirPalavra",
      audio: "fronting",
      options: [
        "deslocamento para o início",
        "inversão de auxiliar",
        "frase reduzida",
        "ênfase no fim",
      ],
      answer: 0,
      explanation:
        "Fronting é mover um elemento para o começo da frase para controlar a atenção do leitor.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to address an issue",
      options: [
        "tratar uma questão",
        "endereçar uma carta",
        "levantar um problema",
        "ignorar o assunto",
      ],
      answer: 0,
      explanation:
        "“Address an issue” significa lidar com o problema de forma deliberada, muito comum em reuniões.",
    },
    {
      kind: "ouvirFrase",
      audio: "This issue, we will address next week.",
      pt: "Esta questão, trataremos na semana que vem.",
      options: [
        "This issue, we will address next week.",
        "This issue, will we address next week.",
        "This issue, we will addressing next week.",
        "This issue we will address it next week.",
      ],
      answer: 0,
      explanation:
        "No fronting não há inversão nem pronome repetido: “we will address”, direto.",
    },
    {
      kind: "ouvirFrase",
      audio: "At the top of the agenda is the budget.",
      pt: "No topo da pauta está o orçamento.",
      options: [
        "At the top of the agenda is the budget.",
        "At the top of the agenda the budget is.",
        "At the top of the agenda are the budget.",
        "At the top of agenda is the budget.",
      ],
      answer: 0,
      explanation:
        "Com o lugar no início, o verbo “be” vem antes do sujeito e concorda no singular: “is the budget”.",
    },
  ],
}
