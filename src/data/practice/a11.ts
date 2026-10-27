import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Causativo: have / get something done — 10 perguntas. */
export const A11_PRACTICE: LessonPracticeContent = {
  id: "a11",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I had my hair ___ yesterday.",
      hint: "Cortei o cabelo ontem (no salão).",
      options: ["cut", "cutting", "to cut", "cuts"],
      answer: 0,
      explanation:
        "No causativo “have something done”, o verbo de ação fica no particípio: “had my hair cut”.",
    },
    {
      kind: "completar",
      prompt: "We need to get the air conditioning ___.",
      hint: "Precisamos mandar consertar o ar-condicionado.",
      options: ["fixed", "fix", "fixing", "to fix"],
      answer: 0,
      explanation:
        "“Get something fixed” é a versão informal do causativo e também pede o particípio no fim.",
    },
    {
      kind: "traduzir",
      prompt: "Ela mandou consertar o notebook no shopping.",
      bank: [
        "She",
        "had",
        "her",
        "laptop",
        "repaired",
        "at",
        "the",
        "mall",
        "repairs",
        "was repairing",
      ],
      answer: ["She", "had", "her", "laptop", "repaired", "at", "the", "mall"],
      explanation:
        "A ordem é fixa: “had + objeto + particípio”. Quem consertou foi outra pessoa, não ela.",
    },
    {
      kind: "traduzir",
      prompt: "Precisamos mandar verificar o carro antes da viagem.",
      bank: [
        "We",
        "need",
        "to",
        "get",
        "the",
        "car",
        "checked",
        "before",
        "the",
        "trip",
        "check",
        "checking",
      ],
      answer: [
        "We",
        "need",
        "to",
        "get",
        "the",
        "car",
        "checked",
        "before",
        "the",
        "trip",
      ],
      explanation:
        "“Get the car checked” indica um serviço contratado, feito por um prestador.",
    },
    {
      kind: "falar",
      prompt: "I had my hair cut yesterday.",
      pt: "Cortei o cabelo ontem (no salão).",
      tip: "O particípio “cut” é igual ao infinitivo, mas aqui vem depois de “my hair”. O “had” fica fraco.",
    },
    {
      kind: "falar",
      prompt: "We need to get the air conditioning fixed.",
      pt: "Precisamos mandar consertar o ar-condicionado.",
      tip: "“Get the air conditioning fixed” soa “guet-di-ér-kon-DÍ-sho-nin-ficst”. O ritmo ajuda muito aqui.",
    },
    {
      kind: "ouvirPalavra",
      audio: "had it repaired",
      options: [
        "mandou consertar",
        "consertou sozinho",
        "está consertando",
        "vai consertar",
      ],
      answer: 0,
      explanation:
        "O causativo “have something done” sempre indica que outra pessoa executou o serviço.",
    },
    {
      kind: "ouvirPalavra",
      audio: "service provider",
      options: [
        "prestador de serviço",
        "cliente do serviço",
        "serviço gratuito",
        "atendimento ao público",
      ],
      answer: 0,
      explanation:
        "“Service provider” é quem executa o serviço que você manda fazer: o eletricista, o técnico, a costureira.",
    },
    {
      kind: "ouvirFrase",
      audio: "I had my hair cut yesterday.",
      pt: "Cortei o cabelo ontem (no salão).",
      options: [
        "I had my hair cut yesterday.",
        "I cut my hair yesterday.",
        "I had cut my hair yesterday.",
        "I had my hair cutting yesterday.",
      ],
      answer: 0,
      explanation:
        "Sem o “had”, a frase sugere que você mesmo cortou. O causativo deixa claro que foi no salão.",
    },
    {
      kind: "ouvirFrase",
      audio: "We need to get the air conditioning fixed.",
      pt: "Precisamos mandar consertar o ar-condicionado.",
      options: [
        "We need to get the air conditioning fixed.",
        "We need to fix the air conditioning.",
        "We need to get the air conditioning fix.",
        "We need to getting the air conditioning fixed.",
      ],
      answer: 0,
      explanation:
        "Com “get”, o verbo de ação vai para o particípio “fixed”. E “need to” nunca leva “getting”.",
    },
  ],
}
