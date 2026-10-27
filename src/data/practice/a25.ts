import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Idioms elaborados e carga cultural — 10 perguntas. */
export const A25_PRACTICE: LessonPracticeContent = {
  id: "a25",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "She always goes the extra ___ for clients.",
      hint: "Ela sempre faz além do esperado pelos clientes.",
      options: ["mile", "meter", "way", "step"],
      answer: 0,
      explanation:
        "A expressão é fixa: “go the extra mile”. Não se troca “mile” por outra palavra.",
    },
    {
      kind: "completar",
      prompt: "We were kept in the ___ about the changes.",
      hint: "Fomos deixados no escuro sobre as mudanças.",
      options: ["dark", "night", "black", "shadow"],
      answer: 0,
      explanation:
        "“Be in the dark” é não estar informado. O verbo “keep” aparece quando alguém esconde a informação.",
    },
    {
      kind: "traduzir",
      prompt: "Não economize no que não deve, especialmente em testes.",
      bank: ["Don't", "cut", "corners", "on", "testing", "doesn't", "cutting"],
      answer: ["Don't", "cut", "corners", "on", "testing"],
      explanation:
        "“Cut corners” é fazer de qualquer jeito para economizar tempo ou dinheiro — quase sempre com efeito ruim.",
    },
    {
      kind: "traduzir",
      prompt: "Ela sempre faz além do esperado pelos clientes.",
      bank: [
        "She",
        "always",
        "goes",
        "the",
        "extra",
        "mile",
        "for",
        "clients",
        "go",
        "miles",
      ],
      answer: [
        "She",
        "always",
        "goes",
        "the",
        "extra",
        "mile",
        "for",
        "clients",
      ],
      explanation:
        "O idiom mantém “mile” no singular e recebe o “for” para indicar por quem se faz o esforço extra.",
    },
    {
      kind: "falar",
      prompt: "She always goes the extra mile for clients.",
      pt: "Ela sempre faz além do esperado pelos clientes.",
      tip: "Sublinhe “extra mile”: é a parte que carrega todo o significado da expressão.",
    },
    {
      kind: "falar",
      prompt: "Don't cut corners on testing.",
      pt: "Não economize no que não deve, especialmente em testes.",
      tip: "“Cut corners” flui como “kát-KÓR-ners”. O “on” liga direto em “testing”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "rock the boat",
      options: [
        "criar problema, desestabilizar",
        "andar de barco",
        "balançar a cabeça",
        "mudar de assunto",
      ],
      answer: 0,
      explanation:
        "“Rock the boat” é mexer numa situação estável e provocar conflito — cuidado com o ambiente na reunião.",
    },
    {
      kind: "ouvirPalavra",
      audio: "cut corners",
      options: [
        "fazer de qualquer jeito para economizar",
        "cortar caminho bem curto",
        "reduzir custos com planejamento",
        "abandonar o projeto",
      ],
      answer: 0,
      explanation:
        "“Cut corners” tem carga negativa: economizar onde não se deveria, quase sempre comprometendo a qualidade.",
    },
    {
      kind: "ouvirFrase",
      audio: "We were kept in the dark about the changes.",
      pt: "Fomos deixados no escuro sobre as mudanças.",
      options: [
        "We were kept in the dark about the changes.",
        "We were kept in the dark of the changes.",
        "We kept in the dark about the changes.",
        "We were keeping in the dark about the changes.",
      ],
      answer: 0,
      explanation:
        "A passiva “were kept” mostra quem sofreu a ação, e a preposição certa é “about”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Don't cut corners on testing.",
      pt: "Não economize no que não deve, especialmente em testes.",
      options: [
        "Don't cut corners on testing.",
        "Don't cut corner on testing.",
        "Don't cut corners in testing.",
        "Don't cutting corners on testing.",
      ],
      answer: 0,
      explanation:
        "O idiom usa “corners” no plural e a preposição “on”: “cut corners on something”.",
    },
  ],
}
