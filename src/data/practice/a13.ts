import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Participle clauses: ligar ideias numa só frase — 10 perguntas. */
export const A13_PRACTICE: LessonPracticeContent = {
  id: "a13",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "___ tired, I decided to stop working.",
      hint: "Sentindo-me cansado, decidi parar de trabalhar.",
      options: ["Feeling", "Felt", "Feel", "To feel"],
      answer: 0,
      explanation:
        "O gerúndio abre a oração reduzida e mantém o mesmo sujeito da frase principal: “Feeling tired, I…”",
    },
    {
      kind: "completar",
      prompt: "___ read the contract, he signed it.",
      hint: "Tendo lido o contrato, ele assinou.",
      options: ["Having", "Have", "Had", "Has"],
      answer: 0,
      explanation:
        "“Having read” marca a ação que terminou antes da outra — a ordem dos fatos na participle clause.",
    },
    {
      kind: "traduzir",
      prompt: "Não tendo experiência, ela achou o trabalho difícil.",
      bank: [
        "Not",
        "having",
        "any",
        "experience",
        "she",
        "found",
        "the",
        "job",
        "hard",
        "has",
        "have",
      ],
      answer: [
        "Not",
        "having",
        "any",
        "experience",
        "she",
        "found",
        "the",
        "job",
        "hard",
      ],
      explanation:
        "A negativa vai antes do particípio: “Not having any experience”. Nunca depois do verbo.",
    },
    {
      kind: "traduzir",
      prompt: "Sentindo-me cansado, decidi parar de trabalhar.",
      bank: [
        "Feeling",
        "tired",
        "I",
        "decided",
        "to",
        "stop",
        "working",
        "felt",
        "stops",
      ],
      answer: ["Feeling", "tired", "I", "decided", "to", "stop", "working"],
      explanation:
        "A oração reduzida substitui “Because I felt tired” e deixa a frase mais enxuta.",
    },
    {
      kind: "falar",
      prompt: "Feeling tired, I decided to stop working.",
      pt: "Sentindo-me cansado, decidi parar de trabalhar.",
      tip: "Faça uma pausa curta depois de “tired”: ela separa a causa da decisão principal.",
    },
    {
      kind: "falar",
      prompt: "Having read the contract, he signed it.",
      pt: "Tendo lido o contrato, ele assinou.",
      tip: "“Having read” soa “RÉ-vin-red”. A pausa depois de “contract” marca a sequência dos fatos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "having done",
      options: [
        "tendo feito",
        "tendo que fazer",
        "por ter feito",
        "feito rapidamente",
      ],
      answer: 0,
      explanation:
        "“Having done” indica ação anterior concluída, uma forma elegante de ordenar fatos na escrita.",
    },
    {
      kind: "ouvirPalavra",
      audio: "not knowing",
      options: [
        "não sabendo",
        "sabendo bem",
        "sem querer saber",
        "sabendo depois",
      ],
      answer: 0,
      explanation:
        "“Not knowing” abre uma reduzida negativa e mantém o mesmo sujeito da frase principal.",
    },
    {
      kind: "ouvirFrase",
      audio: "Having read the contract, he signed it.",
      pt: "Tendo lido o contrato, ele assinou.",
      options: [
        "Having read the contract, he signed it.",
        "Have read the contract, he signed it.",
        "Having read the contract, he signs it.",
        "Having reading the contract, he signed it.",
      ],
      answer: 0,
      explanation:
        "“Having” nunca vira “have”, e o particípio “read” fica após ele. O verbo da oração principal segue o tempo da história.",
    },
    {
      kind: "ouvirFrase",
      audio: "Not having any experience, she found the job hard.",
      pt: "Não tendo experiência, ela achou o trabalho difícil.",
      options: [
        "Not having any experience, she found the job hard.",
        "Not having some experience, she found the job hard.",
        "Having not any experience, she found the job hard.",
        "Not having any experience, she finds the job hard.",
      ],
      answer: 0,
      explanation:
        "O “not” vem sempre no início da reduzida negativa: “Not having any experience”.",
    },
  ],
}
