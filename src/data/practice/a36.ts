import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Método STAR em histórias de entrevista — 10 perguntas. */
export const A36_PRACTICE: LessonPracticeContent = {
  id: "a36",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "We were losing customers during onboarding, so I ___ the drop-off.",
      hint: "Estávamos perdendo clientes na integração, então mapeei onde eles desistiam.",
      options: ["mapped", "map", "mapping", "maps"],
      answer: 0,
      explanation:
        "O primeiro passo do STAR é a situação e a ação que você tomou: “I mapped the drop-off”.",
    },
    {
      kind: "completar",
      prompt:
        "I rebuilt the flow with the design team and ___ it with 20 users.",
      hint: "Refiz o fluxo com o time de design e testei com 20 usuários.",
      options: ["tested", "test", "testing", "tests"],
      answer: 0,
      explanation:
        "A ação precisa de verbo concreto no passado: “rebuilt” e “tested”, com quem e com quantos.",
    },
    {
      kind: "traduzir",
      prompt: "A ativação subiu 18% e os chamados de suporte caíram.",
      bank: [
        "Activation",
        "went",
        "up",
        "18",
        "percent",
        "and",
        "support",
        "tickets",
        "dropped",
        "goes",
        "drop",
      ],
      answer: [
        "Activation",
        "went",
        "up",
        "18",
        "percent",
        "and",
        "support",
        "tickets",
        "dropped",
      ],
      explanation:
        "O resultado numérico fecha a história STAR e dá peso à sua contribuição.",
    },
    {
      kind: "traduzir",
      prompt: "Eu liderei o projeto do início ao fim.",
      bank: [
        "I",
        "took",
        "the",
        "lead",
        "on",
        "the",
        "project",
        "from",
        "start",
        "to",
        "finish",
        "take",
        "leads",
      ],
      answer: [
        "I",
        "took",
        "the",
        "lead",
        "on",
        "the",
        "project",
        "from",
        "start",
        "to",
        "finish",
      ],
      explanation:
        "“Take the lead on something” mostra iniciativa e responsabilidade pelo resultado.",
    },
    {
      kind: "falar",
      prompt:
        "We were losing customers during onboarding, so I mapped the drop-off.",
      pt: "Estávamos perdendo clientes na integração, então mapeei onde eles desistiam.",
      tip: "“Drop-off” soa “dróp-of”. Faça uma pausa antes de “so I”: separa o problema da sua ação.",
    },
    {
      kind: "falar",
      prompt: "Activation went up 18 percent and support tickets dropped.",
      pt: "A ativação subiu 18% e os chamados de suporte caíram.",
      tip: "Enfatize os números: “18 percent” e “dropped”. É o resultado que fica na memória do entrevistador.",
    },
    {
      kind: "ouvirPalavra",
      audio: "ownership",
      options: [
        "responsabilidade pelo resultado",
        "propriedade de imóvel",
        "cargo de chefia",
        "participação acionária",
      ],
      answer: 0,
      explanation:
        "“Ownership” em entrevistas é assumir o problema e responder pelo resultado, não só pela tarefa.",
    },
    {
      kind: "ouvirPalavra",
      audio: "stakeholder",
      options: [
        "parte interessada",
        "acionista majoritário",
        "cliente antigo",
        "fornecedor",
      ],
      answer: 0,
      explanation:
        "“Stakeholder” é qualquer pessoa afetada pelo projeto e que precisa ser considerada nas decisões.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "I rebuilt the flow with the design team and tested it with 20 users.",
      pt: "Refiz o fluxo com o time de design e testei com 20 usuários.",
      options: [
        "I rebuilt the flow with the design team and tested it with 20 users.",
        "I rebuild the flow with the design team and tested it with 20 users.",
        "I rebuilt the flow with the design team and test it with 20 users.",
        "I rebuilt the flow with the design team and tested with 20 users.",
      ],
      answer: 0,
      explanation:
        "Os dois verbos ficam no passado, e “tested it” precisa do pronome que retoma “the flow”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Activation went up 18 percent and support tickets dropped.",
      pt: "A ativação subiu 18% e os chamados de suporte caíram.",
      options: [
        "Activation went up 18 percent and support tickets dropped.",
        "Activation went up 18 percent and support tickets drop.",
        "Activation went 18 percent and support tickets dropped.",
        "Activation went up 18 percents and support tickets dropped.",
      ],
      answer: 0,
      explanation:
        "“Go up” é o phrasal verb para subir, e “percent” fica sempre no singular depois de um número.",
    },
  ],
}
