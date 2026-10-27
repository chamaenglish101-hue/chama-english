import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Small talk estratégico — 10 perguntas. */
export const A40_PRACTICE: LessonPracticeContent = {
  id: "a40",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "How are you ___ the conference so far?",
      hint: "O que você está achando da conferência até agora?",
      options: ["finding", "found", "find", "finds"],
      answer: 0,
      explanation:
        "“How are you finding…?” é a pergunta clássica para pedir uma opinião em andamento, sem soar invasiva.",
    },
    {
      kind: "completar",
      prompt:
        "Great to meet you. I'd love to continue this ___ coffee sometime.",
      hint: "Prazer em conhecer você. Adoraria continuar isso num café.",
      options: ["over", "in", "on", "at"],
      answer: 0,
      explanation:
        "“Over coffee” significa durante um café — a fórmula educada de encerrar um contato e propor outro.",
    },
    {
      kind: "traduzir",
      prompt:
        "Cheguei hoje de manhã — o nascer do sol na baía valeu a madrugada.",
      bank: [
        "I",
        "flew",
        "in",
        "this",
        "morning",
        "that",
        "sunrise",
        "over",
        "the",
        "bay",
        "was",
        "worth",
        "the",
        "early",
        "start",
        "fly",
        "worths",
      ],
      answer: [
        "I",
        "flew",
        "in",
        "this",
        "morning",
        "that",
        "sunrise",
        "over",
        "the",
        "bay",
        "was",
        "worth",
        "the",
        "early",
        "start",
      ],
      explanation:
        "“Flew in” é chegar de avião, e “was worth the early start” fecha a história com um toque pessoal.",
    },
    {
      kind: "traduzir",
      prompt: "Adoraria continuar isso num café algum dia.",
      bank: [
        "I'd",
        "love",
        "to",
        "continue",
        "this",
        "over",
        "coffee",
        "sometime",
        "continues",
        "in",
      ],
      answer: [
        "I'd",
        "love",
        "to",
        "continue",
        "this",
        "over",
        "coffee",
        "sometime",
      ],
      explanation:
        "“I'd love to continue this over coffee” é o convite leve que mantém a porta aberta sem pressão.",
    },
    {
      kind: "falar",
      prompt: "How are you finding the conference so far?",
      pt: "O que você está achando da conferência até agora?",
      tip: "“So far” no fim da frase puxa a resposta. Faça uma entonação amena, de conversa.",
    },
    {
      kind: "falar",
      prompt: "I'd love to continue this over coffee sometime.",
      pt: "Adoraria continuar isso num café algum dia.",
      tip: "“I'd love to” vira “aid-láv-tu”, bem ligado. O convite precisa soar leve, não formal.",
    },
    {
      kind: "ouvirPalavra",
      audio: "icebreaker",
      options: [
        "quebra-gelo",
        "quebrador de gelo físico",
        "bebida gelada",
        "abertura formal",
      ],
      answer: 0,
      explanation:
        "“Icebreaker” é a primeira frase ou atividade que desbloqueia a conversa entre desconhecidos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to keep in touch",
      options: [
        "manter contato",
        "guardar o toque",
        "evitar contato",
        "ligar de novo",
      ],
      answer: 0,
      explanation:
        "“Keep in touch” é o compromisso leve de seguir em contato depois do evento.",
    },
    {
      kind: "ouvirFrase",
      audio: "How are you finding the conference so far?",
      pt: "O que você está achando da conferência até agora?",
      options: [
        "How are you finding the conference so far?",
        "How do you find the conference so far?",
        "How are you find the conference so far?",
        "How are you finding the conference so long?",
      ],
      answer: 0,
      explanation:
        "“How are you finding” usa o contínuo para a impressão em construção; “so far” indica o até agora.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'd love to continue this over coffee sometime.",
      pt: "Adoraria continuar isso num café algum dia.",
      options: [
        "I'd love to continue this over coffee sometime.",
        "I'd love continuing this over coffee sometime.",
        "I love to continue this over coffee sometime.",
        "I'd love to continue this in coffee sometime.",
      ],
      answer: 0,
      explanation:
        "“Would love to + verbo base” é a fórmula educada, e a preposição é “over” para encontros.",
    },
  ],
}
