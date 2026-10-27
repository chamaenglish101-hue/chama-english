import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** E-mails profissionais longos — 10 perguntas. */
export const A29_PRACTICE: LessonPracticeContent = {
  id: "a29",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I'm writing to follow ___ on our conversation about the budget.",
      hint: "Escrevo para dar seguimento à nossa conversa sobre o orçamento.",
      options: ["up", "on", "in", "over"],
      answer: 0,
      explanation:
        "“Follow up on something” é retomar um assunto anterior — a estrutura é fixa com as duas preposições.",
    },
    {
      kind: "completar",
      prompt: "For ___, I've listed the three options below.",
      hint: "Para maior clareza, listei as três opções abaixo.",
      options: ["clarity", "clear", "clearly", "clarity's"],
      answer: 0,
      explanation:
        "“For clarity” é a expressão consagrada em e-mails longos para organizar a informação.",
    },
    {
      kind: "traduzir",
      prompt: "Você poderia confirmar até quinta para prosseguirmos?",
      bank: [
        "Could",
        "you",
        "confirm",
        "by",
        "Thursday",
        "so",
        "we",
        "can",
        "proceed",
        "until",
        "proceeds",
      ],
      answer: [
        "Could",
        "you",
        "confirm",
        "by",
        "Thursday",
        "so",
        "we",
        "can",
        "proceed",
      ],
      explanation:
        "“By Thursday” é o prazo-limite, e “so we can proceed” deixa claro por que a confirmação importa.",
    },
    {
      kind: "traduzir",
      prompt: "Agradeço uma resposta o quanto antes possível.",
      bank: [
        "I",
        "would",
        "appreciate",
        "a",
        "reply",
        "at",
        "your",
        "earliest",
        "convenience",
        "early",
        "appreciates",
      ],
      answer: [
        "I",
        "would",
        "appreciate",
        "a",
        "reply",
        "at",
        "your",
        "earliest",
        "convenience",
      ],
      explanation:
        "“At your earliest convenience” é a fórmula formal e educada para pedir agilidade sem pressão.",
    },
    {
      kind: "falar",
      prompt: "I'm writing to follow up on our conversation about the budget.",
      pt: "Escrevo para dar seguimento à nossa conversa sobre o orçamento.",
      tip: "“Follow up on” junta tudo em “fólou-a-PÓN”. O “about the” fica bem fraco.",
    },
    {
      kind: "falar",
      prompt: "Could you confirm by Thursday so we can proceed?",
      pt: "Você poderia confirmar até quinta para prosseguirmos?",
      tip: "“Proceed” soa “pro-SÍID”. A entonação sobe em “Thursday” e desce no fim.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to proceed",
      options: ["prosseguir", "processar", "adiar", "retroceder"],
      answer: 0,
      explanation:
        "“Proceed” é seguir adiante com um plano depois de cumprida uma condição.",
    },
    {
      kind: "ouvirPalavra",
      audio: "at your earliest convenience",
      options: [
        "o quanto antes possível",
        "na sua maior conveniência",
        "quando você lembrar",
        "sem pressa nenhuma",
      ],
      answer: 0,
      explanation:
        "A fórmula parece flexível, mas na prática indica urgência educada em contextos formais.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm writing to follow up on our conversation about the budget.",
      pt: "Escrevo para dar seguimento à nossa conversa sobre o orçamento.",
      options: [
        "I'm writing to follow up on our conversation about the budget.",
        "I'm writing to follow up our conversation about the budget.",
        "I'm writing to follow up in our conversation about the budget.",
        "I'm writing to follow up on our conversation about the budget's.",
      ],
      answer: 0,
      explanation:
        "O phrasal verb completo é “follow up on”, e “about the budget” completa o assunto.",
    },
    {
      kind: "ouvirFrase",
      audio: "For clarity, I've listed the three options below.",
      pt: "Para maior clareza, listei as três opções abaixo.",
      options: [
        "For clarity, I've listed the three options below.",
        "For clear, I've listed the three options below.",
        "For clarity, I've list the three options below.",
        "For clarity, I listed the three options below.",
      ],
      answer: 0,
      explanation:
        "Depois de “I've” o verbo fica no particípio “listed”, e o substantivo é “clarity”.",
    },
  ],
}
