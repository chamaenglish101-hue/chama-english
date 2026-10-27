import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Perguntas difíceis sem perder a compostura — 10 perguntas. */
export const A35_PRACTICE: LessonPracticeContent = {
  id: "a35",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Let me make sure I ___ the question first.",
      hint: "Deixe-me garantir que entendi a pergunta primeiro.",
      options: ["understand", "understood", "understanding", "understands"],
      answer: 0,
      explanation:
        "“Let me make sure I understand” ganha tempo e confirma o que foi perguntado antes de responder.",
    },
    {
      kind: "completar",
      prompt:
        "I don't have those numbers in front of me, but I ___ them today.",
      hint: "Não tenho esses números aqui, mas envio hoje.",
      options: ["will send", "sent", "sending", "sends"],
      answer: 0,
      explanation:
        "Quando falta informação, um compromisso claro no futuro resolve: “I will send them today”.",
    },
    {
      kind: "traduzir",
      prompt: "O que eu posso dizer é onde estamos agora.",
      bank: [
        "What",
        "I",
        "can",
        "tell",
        "you",
        "is",
        "where",
        "we",
        "stand",
        "right",
        "now",
        "stands",
        "told",
      ],
      answer: [
        "What",
        "I",
        "can",
        "tell",
        "you",
        "is",
        "where",
        "we",
        "stand",
        "right",
        "now",
      ],
      explanation:
        "A cleft “what I can tell you is” redireciona a resposta para o que você sabe de fato.",
    },
    {
      kind: "traduzir",
      prompt: "De cabeça, eu diria que fica em torno de 20%.",
      bank: [
        "Off",
        "the",
        "top",
        "of",
        "my",
        "head",
        "I'd",
        "say",
        "around",
        "20",
        "percent",
        "on",
        "says",
      ],
      answer: [
        "Off",
        "the",
        "top",
        "of",
        "my",
        "head",
        "I'd",
        "say",
        "around",
        "20",
        "percent",
      ],
      explanation:
        "“Off the top of my head” avisa que a resposta é aproximada e protege você de imprecisões.",
    },
    {
      kind: "falar",
      prompt: "Let me make sure I understand the question first.",
      pt: "Deixe-me garantir que entendi a pergunta primeiro.",
      tip: "Fale devagar: a lentidão aqui é estratégia, dá tempo para organizar a resposta.",
    },
    {
      kind: "falar",
      prompt:
        "I don't have those numbers in front of me, but I'll send them today.",
      pt: "Não tenho esses números aqui, mas envio hoje.",
      tip: "“I'll send them today” com tom firme: o compromisso é o que fecha bem a resposta.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to push back",
      options: [
        "questionar, discordar",
        "empurrar para trás",
        "adiar a decisão",
        "apoiar a proposta",
      ],
      answer: 0,
      explanation:
        "“Push back” é discordar com argumento, de forma profissional e sem confronto direto.",
    },
    {
      kind: "ouvirPalavra",
      audio: "off the top of my head",
      options: [
        "de cabeça, sem consultar",
        "no alto da minha cabeça",
        "de forma completa",
        "por escrito",
      ],
      answer: 0,
      explanation:
        "A expressão sinaliza resposta aproximada, dita de memória — sempre vale confirmar depois.",
    },
    {
      kind: "ouvirFrase",
      audio: "What I can tell you is where we stand right now.",
      pt: "O que eu posso dizer é onde estamos agora.",
      options: [
        "What I can tell you is where we stand right now.",
        "What I can tell you are where we stand right now.",
        "What I can tell is where we stand right now.",
        "What I can tell you is where we standing right now.",
      ],
      answer: 0,
      explanation:
        "O verbo da cleft fica no singular “is”, e “where we stand” é a forma fixa para a situação atual.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "I don't have those numbers in front of me, but I'll send them today.",
      pt: "Não tenho esses números aqui, mas envio hoje.",
      options: [
        "I don't have those numbers in front of me, but I'll send them today.",
        "I don't have those numbers in front of me, but I send them today.",
        "I don't have those numbers in front of me, but I'll send it today.",
        "I don't have those numbers in front of me, but I'll sending them today.",
      ],
      answer: 0,
      explanation:
        "O futuro “I'll send” carrega o compromisso, e “them” concorda com “numbers” no plural.",
    },
  ],
}
