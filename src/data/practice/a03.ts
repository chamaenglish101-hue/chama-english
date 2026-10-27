import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Futuro contínuo, perfeito e perfeito contínuo — 10 perguntas. */
export const A03_PRACTICE: LessonPracticeContent = {
  id: "a03",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "This time tomorrow I ___ be flying to Lisbon.",
      hint: "Nesta hora, amanhã, estarei voando para Lisboa.",
      options: ["will", "would", "am", "had"],
      answer: 0,
      explanation:
        "Ação em andamento num momento futuro: “will be flying”. O “this time tomorrow” fixa exatamente o instante.",
    },
    {
      kind: "completar",
      prompt: "By December, we ___ have launched the new version.",
      hint: "Até dezembro, teremos lançado a nova versão.",
      options: ["will", "would", "have", "had"],
      answer: 0,
      explanation:
        "“By December” pede o futuro perfeito: “will have launched”, o que estará concluído até aquela data.",
    },
    {
      kind: "traduzir",
      prompt: "Até lá, ela estará trabalhando aqui há uma década.",
      bank: [
        "By",
        "then",
        "she",
        "will",
        "have",
        "been",
        "working",
        "here",
        "for",
        "a",
        "decade",
        "would",
        "works",
      ],
      answer: [
        "By",
        "then",
        "she",
        "will",
        "have",
        "been",
        "working",
        "here",
        "for",
        "a",
        "decade",
      ],
      explanation:
        "Duração até um ponto futuro: “will have been working”, o futuro perfeito contínuo com “for a decade”.",
    },
    {
      kind: "traduzir",
      prompt:
        "Nesta hora, semana que vem, estarei apresentando para a diretoria.",
      bank: [
        "This",
        "time",
        "next",
        "week",
        "I",
        "will",
        "be",
        "presenting",
        "to",
        "the",
        "board",
        "am",
        "present",
      ],
      answer: [
        "This",
        "time",
        "next",
        "week",
        "I",
        "will",
        "be",
        "presenting",
        "to",
        "the",
        "board",
      ],
      explanation:
        "O futuro contínuo desenha o momento: “will be presenting” acontece naquele instante escolhido.",
    },
    {
      kind: "falar",
      prompt: "This time next week, I'll be presenting to the board.",
      pt: "Nesta hora, semana que vem, estarei apresentando para a diretoria.",
      tip: "“I'll be presenting” sai como “ail-bi-pre-ZÉN-tin”. Mantenha o ritmo contínuo, sem pausa depois do “be”.",
    },
    {
      kind: "falar",
      prompt: "By December, we will have launched the new version.",
      pt: "Até dezembro, teremos lançado a nova versão.",
      tip: "“Will have launched” vira “uil-av-LÓNCHT”. O “have” fica bem fraco entre os dois verbos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "by then",
      options: ["até lá", "naquela época", "depois disso", "desde então"],
      answer: 0,
      explanation:
        "“By then” aponta para um ponto futuro já mencionado e costuma vir com o futuro perfeito.",
    },
    {
      kind: "ouvirPalavra",
      audio: "will have finished",
      options: [
        "terá terminado",
        "estará terminando",
        "terminaria",
        "tinha terminado",
      ],
      answer: 0,
      explanation:
        "“Will have finished” é o futuro perfeito: a ação concluída antes de uma data futura.",
    },
    {
      kind: "ouvirFrase",
      audio: "By December, we will have launched the new version.",
      pt: "Até dezembro, teremos lançado a nova versão.",
      options: [
        "By December, we will have launched the new version.",
        "By December, we will launch the new version.",
        "By December, we would have launched the new version.",
        "By December, we will have launched the new website.",
      ],
      answer: 0,
      explanation:
        "“Will have launched” projeta a conclusão até dezembro. O futuro simples não carrega essa ideia de prazo cumprido.",
    },
    {
      kind: "ouvirFrase",
      audio: "This time tomorrow I'll be flying to Lisbon.",
      pt: "Nesta hora, amanhã, estarei voando para Lisboa.",
      options: [
        "This time tomorrow I'll be flying to Lisbon.",
        "This time tomorrow I'll fly to Lisbon.",
        "This time yesterday I'll be flying to Lisbon.",
        "This time tomorrow I'll be driving to Lisbon.",
      ],
      answer: 0,
      explanation:
        "O futuro contínuo mostra a ação em andamento naquele instante, não a partida em si.",
    },
  ],
}
