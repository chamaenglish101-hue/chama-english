import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Perguntas com do e does — 10 perguntas. */
export const B11_PRACTICE: LessonPracticeContent = {
  id: "b11",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "___ you speak English? — Yes, I do.",
      hint: "Você fala inglês? — Sim, falo.",
      options: ["Do", "Does", "Are", "Is"],
      answer: 0,
      explanation:
        "Com “you”, a pergunta no presente simples usa “do”. A resposta curta repete o auxiliar: “yes, I do”.",
    },
    {
      kind: "completar",
      prompt: "___ your brother live in Recife?",
      hint: "Seu irmão mora em Recife?",
      options: ["Does", "Do", "Is", "Are"],
      answer: 0,
      explanation:
        "Com he, she e it, o auxiliar é “does”. Perceba que “live” fica sem “s”, porque o “s” já está em “does”.",
    },
    {
      kind: "traduzir",
      prompt: "Onde você trabalha?",
      bank: ["Where", "do", "you", "work", "does", "working"],
      answer: ["Where", "do", "you", "work"],
      explanation:
        "A palavra interrogativa vem primeiro, depois o auxiliar, a pessoa e o verbo. Nunca “where you work?”.",
    },
    {
      kind: "traduzir",
      prompt: "Eles não trabalham aos sábados.",
      bank: ["They", "don't", "work", "on", "Saturdays", "doesn't"],
      answer: ["They", "don't", "work", "on", "Saturdays"],
      explanation:
        "A negativa é “don't” + verbo. O “s” de “works” desaparece porque “don't” já marca a pessoa.",
    },
    {
      kind: "falar",
      prompt: "Do you speak English? — Yes, I do.",
      pt: "Você fala inglês? — Sim, falo.",
      tip: "Na pergunta, a voz sobe no “English?”. Na resposta, o “do” final é curto e fraco.",
    },
    {
      kind: "falar",
      prompt: "Where do they work? — They work downtown.",
      pt: "Onde eles trabalham? — Trabalham no centro.",
      tip: "Ligue “do they” em “du-đei”. O “th” de they é com voz, língua entre os dentes.",
    },

    {
      kind: "ouvirPalavra",
      audio: "Where do you work?",
      options: [
        "Onde você trabalha?",
        "Onde você mora?",
        "Quando você trabalha?",
        "Como você trabalha?",
      ],
      answer: 0,
      explanation:
        "A primeira palavra é “where”, lugar. Se fosse “when”, a pergunta seria sobre tempo.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to live",
      options: ["morar", "trabalhar", "estudar", "visitar"],
      answer: 0,
      explanation:
        "“To live” é morar. Não confunda com “to leave” (sair, partir): “I live here / I leave at seven”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Does your brother live in Recife?",
      pt: "Seu irmão mora em Recife?",
      options: [
        "Does your brother live in Recife?",
        "Do your brother live in Recife?",
        "Does your brother work in Recife?",
        "Does your sister live in Recife?",
      ],
      answer: 0,
      explanation:
        "Só uma opção está correta: “does” com “live” sem “s”, falando do irmão.",
    },
    {
      kind: "ouvirFrase",
      audio: "Where do they work? — They work downtown.",
      pt: "Onde eles trabalham? — Trabalham no centro.",
      options: [
        "Where do they work? — They work downtown.",
        "Where do you work? — I work downtown.",
        "What do they do? — They work downtown.",
        "Where did they work? — They worked downtown.",
      ],
      answer: 0,
      explanation:
        "Ouça “do they” na pergunta e “they” na resposta: as duas falam das mesmas pessoas, no presente.",
    },
  ],
}
