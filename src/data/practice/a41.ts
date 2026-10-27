import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Networking com intenção — 10 perguntas. */
export const A41_PRACTICE: LessonPracticeContent = {
  id: "a41",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "I work on logistics for a food-tech startup — we're trying to ___ delivery times.",
      hint: "Trabalho com logística numa startup de food-tech — estamos tentando reduzir o tempo de entrega.",
      options: ["cut", "cuts", "cutting", "cutted"],
      answer: 0,
      explanation:
        "“Try to + verbo base” pede “cut”. Aqui a apresentação diz o que você e seu time fazem de concreto.",
    },
    {
      kind: "completar",
      prompt: "I'd love your ___ on how your team handles peak season.",
      hint: "Adoraria saber sua opinião sobre como seu time lida com a alta temporada.",
      options: ["take", "taken", "taking", "took"],
      answer: 0,
      explanation:
        "“Your take on something” é sua opinião sobre o assunto — e abre espaço para o outro falar.",
    },
    {
      kind: "traduzir",
      prompt: "Prazer em conhecer — vou enviar o artigo que comentamos.",
      bank: [
        "Great",
        "meeting",
        "you",
        "I'll",
        "send",
        "the",
        "article",
        "we",
        "mentioned",
        "met",
        "mentions",
      ],
      answer: [
        "Great",
        "meeting",
        "you",
        "I'll",
        "send",
        "the",
        "article",
        "we",
        "mentioned",
      ],
      explanation:
        "Prometer algo específico no encerramento torna o contato útil e fácil de retomar depois.",
    },
    {
      kind: "traduzir",
      prompt: "Trabalho com logística numa startup de food-tech.",
      bank: [
        "I",
        "work",
        "on",
        "logistics",
        "for",
        "a",
        "food-tech",
        "startup",
        "works",
        "in",
      ],
      answer: [
        "I",
        "work",
        "on",
        "logistics",
        "for",
        "a",
        "food-tech",
        "startup",
      ],
      explanation:
        "“I work on logistics for” apresenta a área e a empresa numa frase curta, ideal para networking.",
    },
    {
      kind: "falar",
      prompt: "I'd love your take on how your team handles peak season.",
      pt: "Adoraria saber sua opinião sobre como seu time lida com a alta temporada.",
      tip: "Faça a entonação subir em “take”: é a palavra que demonstra interesse genuíno.",
    },
    {
      kind: "falar",
      prompt: "Great meeting you — I'll send the article we mentioned.",
      pt: "Prazer em conhecer — vou enviar o artigo que comentamos.",
      tip: "“Great meeting you” é rápido e caloroso. Pausa curta antes de prometer o envio.",
    },
    {
      kind: "ouvirPalavra",
      audio: "mutual connection",
      options: [
        "contato em comum",
        "conexão de internet",
        "contrato mútuo",
        "acordo fechado",
      ],
      answer: 0,
      explanation:
        "“Mutual connection” é alguém conhecido pelos dois — o atalho clássico para apresentações confiáveis.",
    },
    {
      kind: "ouvirPalavra",
      audio: "peak season",
      options: [
        "alta temporada",
        "temporada baixa",
        "prazo final",
        "pico de preço",
      ],
      answer: 0,
      explanation:
        "“Peak season” é o período de maior movimento, quando os processos do time são testados de verdade.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'd love your take on how your team handles peak season.",
      pt: "Adoraria saber sua opinião sobre como seu time lida com a alta temporada.",
      options: [
        "I'd love your take on how your team handles peak season.",
        "I'd love your take in how your team handles peak season.",
        "I'd love your take on how your team handle peak season.",
        "I'd love your takes on how your team handles peak season.",
      ],
      answer: 0,
      explanation:
        "A preposição é “on”, e “your team” no singular pede “handles” com “s”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Great meeting you — I'll send the article we mentioned.",
      pt: "Prazer em conhecer — vou enviar o artigo que comentamos.",
      options: [
        "Great meeting you — I'll send the article we mentioned.",
        "Great meet you — I'll send the article we mentioned.",
        "Great meeting you — I send the article we mentioned.",
        "Great meeting you — I'll send the article we mention.",
      ],
      answer: 0,
      explanation:
        "“Great meeting you” é a fórmula fixa, e “we mentioned” fica no passado porque se refere à conversa.",
    },
  ],
}
