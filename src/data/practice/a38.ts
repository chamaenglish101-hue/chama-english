import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Feedback específico e respeitoso — 10 perguntas. */
export const A38_PRACTICE: LessonPracticeContent = {
  id: "a38",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "In yesterday's meeting you cut Maria off twice — that ___ badly.",
      hint: "Na reunião de ontem você interrompeu a Maria duas vezes — isso pegou mal.",
      options: ["landed", "lands", "landing", "land"],
      answer: 0,
      explanation:
        "“That landed badly” descreve o efeito da ação. Feedback bom fala do efeito concreto, não do caráter.",
    },
    {
      kind: "completar",
      prompt: "That's fair. I'll make sure everyone ___ their point.",
      hint: "Justo. Vou garantir que todos terminem o raciocínio.",
      options: ["finishes", "finish", "finishing", "finished"],
      answer: 0,
      explanation:
        "Com “everyone” no singular, o verbo leva “s”: “everyone finishes their point”.",
    },
    {
      kind: "traduzir",
      prompt: "O que seria um bom resultado para você no próximo trimestre?",
      bank: [
        "What",
        "would",
        "good",
        "look",
        "like",
        "for",
        "you",
        "in",
        "the",
        "next",
        "quarter",
        "will",
        "looks",
      ],
      answer: [
        "What",
        "would",
        "good",
        "look",
        "like",
        "for",
        "you",
        "in",
        "the",
        "next",
        "quarter",
      ],
      explanation:
        "A pergunta abre o diálogo em vez de impor metas: “what would good look like for you”.",
    },
    {
      kind: "traduzir",
      prompt: "Vou levar isso em consideração.",
      bank: ["I'll", "take", "that", "on", "board", "takes", "in"],
      answer: ["I'll", "take", "that", "on", "board"],
      explanation:
        "“Take something on board” mostra que o retorno foi recebido sem defensiva — a preposição é “on”.",
    },
    {
      kind: "falar",
      prompt:
        "In yesterday's meeting you cut Maria off twice — that landed badly.",
      pt: "Na reunião de ontem você interrompeu a Maria duas vezes — isso pegou mal.",
      tip: "Fale o fato com calma e só depois comente o efeito. Pausa longa antes de “that landed badly”.",
    },
    {
      kind: "falar",
      prompt: "What would good look like for you in the next quarter?",
      pt: "O que seria um bom resultado para você no próximo trimestre?",
      tip: "Junte “what would good look like” num bloco e faça a entonação subir no fim.",
    },
    {
      kind: "ouvirPalavra",
      audio: "constructive feedback",
      options: [
        "retorno construtivo",
        "crítica severa",
        "avaliação anual",
        "elogio público",
      ],
      answer: 0,
      explanation:
        "“Constructive feedback” é o retorno que aponta um comportamento específico e sugere como melhorar.",
    },
    {
      kind: "ouvirPalavra",
      audio: "growth area",
      options: [
        "ponto a desenvolver",
        "área de expansão da empresa",
        "setor de vendas",
        "plano de carreira",
      ],
      answer: 0,
      explanation:
        "“Growth area” é a forma respeitosa de dizer o que ainda precisa ser desenvolvido — comum em avaliações.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "In yesterday's meeting you cut Maria off twice — that landed badly.",
      pt: "Na reunião de ontem você interrompeu a Maria duas vezes — isso pegou mal.",
      options: [
        "In yesterday's meeting you cut Maria off twice — that landed badly.",
        "In yesterday's meeting you cut Maria twice — that landed badly.",
        "In yesterday's meeting you cut off Maria twice — that landed badly.",
        "In yesterday's meeting you cut Maria off twice — that land badly.",
      ],
      answer: 0,
      explanation:
        "“Cut someone off” é interromper, com o pronome no meio, e o verbo fica no passado “landed”.",
    },
    {
      kind: "ouvirFrase",
      audio: "What would good look like for you in the next quarter?",
      pt: "O que seria um bom resultado para você no próximo trimestre?",
      options: [
        "What would good look like for you in the next quarter?",
        "What would good looks like for you in the next quarter?",
        "What will good look like for you in the next quarter?",
        "What would good look for you in the next quarter?",
      ],
      answer: 0,
      explanation:
        "Depois do modal “would” o verbo fica na forma base, e a expressão pede “look like”.",
    },
  ],
}
