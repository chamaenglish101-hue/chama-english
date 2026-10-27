import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Speaking para provas e entrevistas — 10 perguntas. */
export const A69_PRACTICE: LessonPracticeContent = {
  id: "a69",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "That's a great question. Let me ___ my thoughts for a second.",
      hint: "Ótima pergunta. Deixe-me organizar meus pensamentos por um instante.",
      options: ["gather", "get", "take", "put"],
      answer: 0,
      explanation:
        "“To gather one's thoughts” é a frase que ganha tempo com elegância em provas e entrevistas.",
    },
    {
      kind: "completar",
      prompt:
        "If I understand the question ___, you're asking about priorities.",
      hint: "Se entendi bem a pergunta, você está perguntando sobre prioridades.",
      options: ["correctly", "correct", "correction", "correctness"],
      answer: 0,
      explanation:
        "Aqui é preciso o advérbio (“correctly”) para qualificar como você entendeu a pergunta.",
    },
    {
      kind: "traduzir",
      prompt:
        "Antes de responder, posso pedir um instante para organizar minhas ideias?",
      bank: [
        "Before",
        "I",
        "answer",
        "may",
        "I",
        "have",
        "a",
        "moment",
        "to",
        "gather",
        "my",
        "thoughts",
        "answers",
        "gathering",
      ],
      answer: [
        "Before",
        "I",
        "answer",
        "may",
        "I",
        "have",
        "a",
        "moment",
        "to",
        "gather",
        "my",
        "thoughts",
      ],
      explanation:
        "Pedir tempo com educação é uma estratégia, não uma fraqueza — e “gather my thoughts” é a fórmula pronta.",
    },
    {
      kind: "traduzir",
      prompt: "Deixe-me dar um exemplo concreto da minha experiência.",
      bank: [
        "Let",
        "me",
        "give",
        "you",
        "a",
        "concrete",
        "example",
        "from",
        "my",
        "experience",
        "gives",
        "experiences",
      ],
      answer: [
        "Let",
        "me",
        "give",
        "you",
        "a",
        "concrete",
        "example",
        "from",
        "my",
        "experience",
      ],
      explanation:
        "“Give a concrete example” transforma resposta genérica em evidência — o que a banca quer ouvir.",
    },
    {
      kind: "falar",
      prompt:
        "That's a great question. Let me gather my thoughts for a second.",
      pt: "Ótima pergunta. Deixe-me organizar meus pensamentos por um instante.",
      tip: "Fale devagar de propósito: o tempo que você ganha é parte da resposta.",
    },
    {
      kind: "falar",
      prompt: "Let me give you a concrete example from my experience.",
      pt: "Deixe-me dar um exemplo concreto da minha experiência.",
      tip: "Acento em “CONCrete” e “EXample”; depois disso, conte o caso com verbos no passado.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to gather one's thoughts",
      options: [
        "organizar as ideias",
        "reunir opiniões de outras pessoas",
        "anotar pensamentos",
        "memorizar um texto",
      ],
      answer: 0,
      explanation:
        "“To gather one's thoughts” é organizar o raciocínio antes de falar — útil em avalições orais.",
    },
    {
      kind: "ouvirPalavra",
      audio: "follow-up question",
      options: [
        "pergunta de acompanhamento",
        "pergunta repetida",
        "pergunta fora do tema",
        "resposta complementar",
      ],
      answer: 0,
      explanation:
        "“Follow-up question” é a pergunta que aprofunda a anterior — comum em entrevistas.",
    },
    {
      kind: "ouvirFrase",
      audio: "That's a great question. Let me gather my thoughts for a second.",
      pt: "Ótima pergunta. Deixe-me organizar meus pensamentos por um instante.",
      options: [
        "That's a great question. Let me gather my thoughts for a second.",
        "That's a great question. Let me to gather my thoughts for a second.",
        "That's a great question. Let me gathering my thoughts for a second.",
        "That's a great question. Let me gather my thought for a second.",
      ],
      answer: 0,
      explanation:
        "Depois de “let me” vem o verbo base, e “thoughts” fica no plural na expressão fixa.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "In my last role, I reduced the support backlog by half in three months.",
      pt: "No meu último cargo, reduzi pela metade a fila de atendimento em três meses.",
      options: [
        "In my last role, I reduced the support backlog by half in three months.",
        "In my last role, I reduce the support backlog by half in three months.",
        "In my last role, I reduced the support backlog in half for three months.",
        "In my last role, I reduced the support backlog by half for three months ago.",
      ],
      answer: 0,
      explanation:
        "O resultado concreto vai no passado (“reduced”) com métrica e prazo: “by half in three months”.",
    },
  ],
}
