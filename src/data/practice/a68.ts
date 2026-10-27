import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Imprevistos de viagem com autonomia — 10 perguntas. */
export const A68_PRACTICE: LessonPracticeContent = {
  id: "a68",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "My flight was ___ , so I missed the connection.",
      hint: "Meu voo foi cancelado, então perdi a conexão.",
      options: ["cancelled", "cancel", "cancelling", "cancels"],
      answer: 0,
      explanation:
        "Na passiva usa-se o particípio: “was cancelled”. “Cancel” seria a forma base.",
    },
    {
      kind: "completar",
      prompt: "My suitcase didn't ___ — I need to file a claim.",
      hint: "Minha mala não chegou — preciso abrir um pedido de indenização.",
      options: ["arrive", "arrives", "arrived", "arriving"],
      answer: 0,
      explanation:
        "Depois de “didn't” vem o verbo base; “file a claim” é o procedimento para bagagem perdida.",
    },
    {
      kind: "traduzir",
      prompt: "Meu voo foi cancelado, então perdi a conexão.",
      bank: [
        "My",
        "flight",
        "was",
        "cancelled",
        "so",
        "I",
        "missed",
        "the",
        "connection",
        "cancel",
        "miss",
      ],
      answer: [
        "My",
        "flight",
        "was",
        "cancelled",
        "so",
        "I",
        "missed",
        "the",
        "connection",
      ],
      explanation:
        "Passiva no primeiro evento (“was cancelled”) e past simple no segundo (“missed”) dão clareza ao relato.",
    },
    {
      kind: "traduzir",
      prompt: "Minha mala não chegou — preciso abrir um pedido de indenização.",
      bank: [
        "My",
        "suitcase",
        "didn't",
        "arrive",
        "I",
        "need",
        "to",
        "file",
        "a",
        "claim",
        "arrives",
        "filling",
      ],
      answer: [
        "My",
        "suitcase",
        "didn't",
        "arrive",
        "I",
        "need",
        "to",
        "file",
        "a",
        "claim",
      ],
      explanation:
        "“Didn't arrive” é a negativa no passado, e “file a claim” é a expressão fixa do aeroporto.",
    },
    {
      kind: "falar",
      prompt: "My flight was cancelled, so I missed the connection.",
      pt: "Meu voo foi cancelado, então perdi a conexão.",
      tip: "Acento em “CANCelled” e “MISSED”: os dois fatos que geram o problema.",
    },
    {
      kind: "falar",
      prompt: "Could you help me rebook on the next available flight?",
      pt: "Você poderia me ajudar a remarcar no próximo voo disponível?",
      tip: "“Could you help me” em tom ascendente e educado abre praticamente qualquer porta em aeroporto.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to rebook",
      options: [
        "remarcar uma reserva",
        "reservar de novo um livro",
        "cancelar a reserva",
        "confirmar o assento",
      ],
      answer: 0,
      explanation:
        "“To rebook” é trocar a reserva por outro voo ou horário — verbo-chave em imprevistos de viagem.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to file a claim",
      options: [
        "registrar um pedido formal",
        "arquivar um documento antigo",
        "reclamar em voz alta",
        "preencher um formulário em branco",
      ],
      answer: 0,
      explanation:
        "“To file a claim” é abrir oficialmente um pedido — de bagagem, seguro ou reembolso.",
    },
    {
      kind: "ouvirFrase",
      audio: "Could you help me rebook on the next available flight?",
      pt: "Você poderia me ajudar a remarcar no próximo voo disponível?",
      options: [
        "Could you help me rebook on the next available flight?",
        "Could you help me to rebooking on the next available flight?",
        "Could you help me rebook in the next available flight?",
        "Could you helping me rebook on the next available flight?",
      ],
      answer: 0,
      explanation:
        "Depois de “help me” vem o verbo base, e voos ficam “on” um voo específico.",
    },
    {
      kind: "ouvirFrase",
      audio: "My suitcase didn't arrive, so I need to file a claim.",
      pt: "Minha mala não chegou, então preciso abrir um pedido de indenização.",
      options: [
        "My suitcase didn't arrive, so I need to file a claim.",
        "My suitcase didn't arrived, so I need to file a claim.",
        "My suitcase doesn't arrive, so I need to file a claim.",
        "My suitcase didn't arrive, so I need filing a claim.",
      ],
      answer: 0,
      explanation:
        "Depois de “didn't” o verbo fica na base (“arrive”) e “need to” pede o infinitivo.",
    },
  ],
}
