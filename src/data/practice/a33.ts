import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Reuniões em inglês: pauta, participação e fechamento — 10 perguntas. */
export const A33_PRACTICE: LessonPracticeContent = {
  id: "a33",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Let's start with the budget and ___ the timeline for the end.",
      hint: "Vamos começar pelo orçamento e deixar o cronograma para o final.",
      options: ["leave", "leaving", "left", "leaves"],
      answer: 0,
      explanation:
        "Depois de “Let's” o verbo fica na forma base. Aqui “leave” organiza a ordem da pauta.",
    },
    {
      kind: "completar",
      prompt: "Sorry to ___ in, but the client just changed the scope.",
      hint: "Desculpe interromper, mas o cliente acabou de mudar o escopo.",
      options: ["jump", "jumping", "jumped", "jumps"],
      answer: 0,
      explanation:
        "“Jump in” é entrar na conversa. O “sorry to” já suaviza a interrupção antes dela acontecer.",
    },
    {
      kind: "traduzir",
      prompt:
        "Recapitulando: lançamos dia 10 e a Ana é responsável pelo texto.",
      bank: [
        "To",
        "recap",
        "we're",
        "launching",
        "on",
        "the",
        "10th",
        "and",
        "Ana",
        "owns",
        "the",
        "copy",
        "recaps",
        "own",
      ],
      answer: [
        "To",
        "recap",
        "we're",
        "launching",
        "on",
        "the",
        "10th",
        "and",
        "Ana",
        "owns",
        "the",
        "copy",
      ],
      explanation:
        "“To recap” abre o resumo final e “owns” define com clareza quem responde por cada entrega.",
    },
    {
      kind: "traduzir",
      prompt: "Desculpe interromper, mas o cliente acabou de mudar o escopo.",
      bank: [
        "Sorry",
        "to",
        "jump",
        "in",
        "but",
        "the",
        "client",
        "just",
        "changed",
        "the",
        "scope",
        "jumps",
      ],
      answer: [
        "Sorry",
        "to",
        "jump",
        "in",
        "but",
        "the",
        "client",
        "just",
        "changed",
        "the",
        "scope",
      ],
      explanation:
        "“Sorry to jump in” é a fórmula educada de interrupção em reunião, seguida da razão com “but”.",
    },
    {
      kind: "falar",
      prompt: "Let's start with the budget and leave the timeline for the end.",
      pt: "Vamos começar pelo orçamento e deixar o cronograma para o final.",
      tip: "Agrupe “start with the budget” num bloco só e faça uma pausa antes de “and leave”.",
    },
    {
      kind: "falar",
      prompt: "Sorry to jump in, but the client just changed the scope.",
      pt: "Desculpe interromper, mas o cliente acabou de mudar o escopo.",
      tip: "“Jump in” soa “djám-pin”. Fale rápido no começo para não perder o turno de fala.",
    },
    {
      kind: "ouvirPalavra",
      audio: "agenda",
      options: ["pauta", "ata da reunião", "agenda pessoal", "prazo final"],
      answer: 0,
      explanation:
        "Em reuniões, “agenda” é a pauta: a lista de assuntos que serão tratados na ordem prevista.",
    },
    {
      kind: "ouvirPalavra",
      audio: "action item",
      options: [
        "tarefa a executar",
        "item discutido",
        "item bloqueado",
        "resumo da reunião",
      ],
      answer: 0,
      explanation:
        "“Action item” é a tarefa que sai da reunião com responsável e prazo definidos.",
    },
    {
      kind: "ouvirFrase",
      audio: "To recap: we're launching on the 10th and Ana owns the copy.",
      pt: "Recapitulando: lançamos dia 10 e a Ana é responsável pelo texto.",
      options: [
        "To recap: we're launching on the 10th and Ana owns the copy.",
        "To recap: we're launching in the 10th and Ana owns the copy.",
        "To recapping: we're launching on the 10th and Ana owns the copy.",
        "To recap: we're launching on the 10th and Ana own the copy.",
      ],
      answer: 0,
      explanation:
        "“Recap” fica na forma base depois de “to”, datas usam “on” e “Ana” pede “owns” com “s”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Sorry to jump in, but the client just changed the scope.",
      pt: "Desculpe interromper, mas o cliente acabou de mudar o escopo.",
      options: [
        "Sorry to jump in, but the client just changed the scope.",
        "Sorry to jump in, but the client just change the scope.",
        "Sorry jumping in, but the client just changed the scope.",
        "Sorry to jump in but the client just changed the scope's.",
      ],
      answer: 0,
      explanation:
        "“Sorry to + verbo” forma o pedido de desculpa, e “just changed” fica no passado simples.",
    },
  ],
}
