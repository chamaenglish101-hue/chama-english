import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Conflitos com diplomacia — 10 perguntas. */
export const A39_PRACTICE: LessonPracticeContent = {
  id: "a39",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "From where I ___, the decision was made before we had all the data.",
      hint: "Do meu ponto de vista, a decisão foi tomada antes de termos todos os dados.",
      options: ["stand", "stands", "standing", "stood"],
      answer: 0,
      explanation:
        "“From where I stand” marca seu ponto de vista sem afirmar que é a única verdade.",
    },
    {
      kind: "completar",
      prompt:
        "I understand you were under pressure, and I still ___ a heads-up.",
      hint: "Entendo que você estava sob pressão, e ainda assim precisava de um aviso.",
      options: ["needed", "need", "needing", "needs"],
      answer: 0,
      explanation:
        "A concessão vem primeiro, com “and” ligando a necessidade que continua valendo: “I still needed”.",
    },
    {
      kind: "traduzir",
      prompt: "Como garantimos que isso não se repita?",
      bank: [
        "How",
        "do",
        "we",
        "make",
        "sure",
        "this",
        "doesn't",
        "happen",
        "again",
        "happens",
        "do",
      ],
      answer: [
        "How",
        "do",
        "we",
        "make",
        "sure",
        "this",
        "doesn't",
        "happen",
        "again",
      ],
      explanation:
        "A pergunta mira a solução futura em vez de culpar alguém pelo passado.",
    },
    {
      kind: "traduzir",
      prompt: "Acho que houve um mal-entendido.",
      bank: [
        "I",
        "think",
        "there",
        "was",
        "a",
        "misunderstanding",
        "misunderstood",
        "is",
      ],
      answer: ["I", "think", "there", "was", "a", "misunderstanding"],
      explanation:
        "“There was a misunderstanding” tira o foco da pessoa e coloca na situação — típico de diplomacia.",
    },
    {
      kind: "falar",
      prompt:
        "From where I stand, the decision was made before we had all the data.",
      pt: "Do meu ponto de vista, a decisão foi tomada antes de termos todos os dados.",
      tip: "“From where I stand” é uma abertura calma. Não acelere: é o que reduz a temperatura da conversa.",
    },
    {
      kind: "falar",
      prompt: "How do we make sure this doesn't happen again?",
      pt: "Como garantimos que isso não se repita?",
      tip: "“Doesn't happen” flui como “dâ-zant-RÉ-pen”. Mantenha a entonação de pergunta até o fim.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to clear the air",
      options: [
        "esclarecer o clima",
        "ventilar a sala",
        "apagar o incêndio",
        "encerrar a reunião",
      ],
      answer: 0,
      explanation:
        "“Clear the air” é conversar abertamente para resolver a tensão acumulada entre as pessoas.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to see eye to eye",
      options: [
        "concordar totalmente",
        "olhar nos olhos",
        "trocar de opinião",
        "trabalhar junto",
      ],
      answer: 0,
      explanation:
        "“See eye to eye” é concordar em cheio. Na negativa, mostra uma divergência que precisa ser tratada.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "From where I stand, the decision was made before we had all the data.",
      pt: "Do meu ponto de vista, a decisão foi tomada antes de termos todos os dados.",
      options: [
        "From where I stand, the decision was made before we had all the data.",
        "From where I stand, the decision made before we had all the data.",
        "From where I stand, the decision was made before we have all the data.",
        "From where I stand, the decision was make before we had all the data.",
      ],
      answer: 0,
      explanation:
        "A passiva pede “was made”, e “had” mantém os dois fatos no passado, na ordem correta.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "I understand you were under pressure, and I still needed a heads-up.",
      pt: "Entendo que você estava sob pressão, e ainda assim precisava de um aviso.",
      options: [
        "I understand you were under pressure, and I still needed a heads-up.",
        "I understand you were under pressure, and I still need a heads-up.",
        "I understand you are under pressure, and I still needed a heads-up.",
        "I understand you were under pressure, and I still needed a head-up.",
      ],
      answer: 0,
      explanation:
        "O passado “needed” mantém a coerência com “were”, e a expressão fixa é “a heads-up”, com “s”.",
    },
  ],
}
