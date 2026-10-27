import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Wish, if only e would rather — 10 perguntas. */
export const A16_PRACTICE: LessonPracticeContent = {
  id: "a16",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I wish I ___ Italian.",
      hint: "Queria falar italiano.",
      options: ["spoke", "speak", "speaking", "will speak"],
      answer: 0,
      explanation:
        "“I wish” sobre o presente pede o passado simples: “I wish I spoke Italian”, a habilidade que falta agora.",
    },
    {
      kind: "completar",
      prompt: "If only I ___ taken that opportunity.",
      hint: "Se eu tivesse aproveitado aquela oportunidade.",
      options: ["had", "have", "would", "was"],
      answer: 0,
      explanation:
        "“If only” com passado é arrependimento puro: “had taken” aponta o que não aconteceu.",
    },
    {
      kind: "traduzir",
      prompt: "Preferia que você não mencionasse isso a ninguém.",
      bank: [
        "I'd",
        "rather",
        "you",
        "didn't",
        "mention",
        "this",
        "to",
        "anyone",
        "don't",
        "mentions",
      ],
      answer: [
        "I'd",
        "rather",
        "you",
        "didn't",
        "mention",
        "this",
        "to",
        "anyone",
      ],
      explanation:
        "“I'd rather you” pede o passado para falar do presente, porque é um desejo sobre outra pessoa.",
    },
    {
      kind: "traduzir",
      prompt: "Se eu tivesse aproveitado aquela oportunidade.",
      bank: [
        "If",
        "only",
        "I",
        "had",
        "taken",
        "that",
        "opportunity",
        "have",
        "took",
      ],
      answer: ["If", "only", "I", "had", "taken", "that", "opportunity"],
      explanation:
        "“If only” sozinho já carrega o lamento; muitas vezes a frase fica sem a consequência.",
    },
    {
      kind: "falar",
      prompt: "I wish I spoke Italian.",
      pt: "Queria falar italiano.",
      tip: "“I wish I spoke” soa “ai-uích-ai-spôuk”. O passado aqui fala do presente, não do passado real.",
    },
    {
      kind: "falar",
      prompt: "I'd rather you didn't mention this to anyone.",
      pt: "Preferia que você não mencionasse isso a ninguém.",
      tip: "Suavize o “rather” e encoste o “didn't”: o pedido fica firme sem soar agressivo.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I wish",
      options: ["queria, gostaria que", "eu quero", "eu quis", "eu vou querer"],
      answer: 0,
      explanation:
        "“I wish” expressa desejo sobre algo que não é como gostaríamos, com verbo no passado depois.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I'd rather",
      options: [
        "prefiro, preferiria",
        "eu prefiro muito",
        "eu preferi",
        "preferiria não",
      ],
      answer: 0,
      explanation:
        "“I'd rather” expressa preferência e, com outro sujeito, pede o passado: “I'd rather you didn't go”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I wish I spoke Italian.",
      pt: "Queria falar italiano.",
      options: [
        "I wish I spoke Italian.",
        "I wish I speak Italian.",
        "I wish I had spoken Italian.",
        "I hope I spoke Italian.",
      ],
      answer: 0,
      explanation:
        "Depois de “I wish” sobre o presente vem o passado simples. “Had spoken” mudaria o lamento para o passado.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'd rather you didn't mention this to anyone.",
      pt: "Preferia que você não mencionasse isso a ninguém.",
      options: [
        "I'd rather you didn't mention this to anyone.",
        "I'd rather you don't mention this to anyone.",
        "I'd rather you didn't mentioned this to anyone.",
        "I'd rather mention this to anyone.",
      ],
      answer: 0,
      explanation:
        "Com “I'd rather” e sujeito diferente, o verbo vai para o passado “didn't mention” e o verbo fica na forma base.",
    },
  ],
}
