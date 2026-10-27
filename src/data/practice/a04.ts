import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Terceira condicional: hipóteses impossíveis no passado — 10 perguntas. */
export const A04_PRACTICE: LessonPracticeContent = {
  id: "a04",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "If I ___ studied more, I would have passed.",
      hint: "Se eu tivesse estudado mais, teria passado.",
      options: ["had", "have", "would", "was"],
      answer: 0,
      explanation:
        "Terceira condicional: “if + past perfect” na condição e “would have + particípio” na consequência.",
    },
    {
      kind: "completar",
      prompt: "We wouldn't have missed the flight if we ___ earlier.",
      hint: "Não teríamos perdido o voo se tivéssemos saído mais cedo.",
      options: ["had left", "have left", "would leave", "left"],
      answer: 0,
      explanation:
        "A condição é o fato que não aconteceu: “if we had left earlier”. Sem o past perfect, a hipótese passa a ser real.",
    },
    {
      kind: "traduzir",
      prompt: "Se tivessem conhecido os riscos, teriam agido diferente.",
      bank: [
        "If",
        "they",
        "had",
        "known",
        "the",
        "risks",
        "they",
        "would",
        "have",
        "acted",
        "differently",
        "have",
        "know",
      ],
      answer: [
        "If",
        "they",
        "had",
        "known",
        "the",
        "risks",
        "they",
        "would",
        "have",
        "acted",
        "differently",
      ],
      explanation:
        "Mantém a estrutura fixa: “had known” na condição e “would have acted” na consequência.",
    },
    {
      kind: "traduzir",
      prompt: "Eu não teria feito isso.",
      bank: ["I", "wouldn't", "have", "done", "that", "don't", "did"],
      answer: ["I", "wouldn't", "have", "done", "that"],
      explanation:
        "A negativa fica em “wouldn't have done”: a crítica olha para um passado que já não pode mudar.",
    },
    {
      kind: "falar",
      prompt: "If I had studied more, I would have passed.",
      pt: "Se eu tivesse estudado mais, teria passado.",
      tip: "“Would have passed” sai como “uud-av-PÉST”. O “have” é quase invisível na fala rápida.",
    },
    {
      kind: "falar",
      prompt: "Had I known, I would have told you.",
      pt: "Se eu soubesse, teria te contado.",
      tip: "“Had I known” sem “if” é a inversão formal. Sobe a entonação no “had” e desce no “known”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "would have",
      options: ["teria", "tinha", "terá", "teria que"],
      answer: 0,
      explanation:
        "“Would have” monta a consequência da terceira condicional: o que teria acontecido em outro cenário.",
    },
    {
      kind: "ouvirPalavra",
      audio: "if I had known",
      options: [
        "se eu soubesse (antes)",
        "se eu sei",
        "se eu souber",
        "se eu soubesse agora",
      ],
      answer: 0,
      explanation:
        "“If I had known” olha para o passado: a informação que faltou naquele momento.",
    },
    {
      kind: "ouvirFrase",
      audio: "If I had studied more, I would have passed.",
      pt: "Se eu tivesse estudado mais, teria passado.",
      options: [
        "If I had studied more, I would have passed.",
        "If I studied more, I would have passed.",
        "If I had studied more, I would pass.",
        "If I had studied more, I would have failed.",
      ],
      answer: 0,
      explanation:
        "Os dois tempos precisam combinar: “had studied” com “would have passed”. Misturar com o presente gera hipótese real, não impossível.",
    },
    {
      kind: "ouvirFrase",
      audio: "Had they known the risks, they would have acted differently.",
      pt: "Se tivessem conhecido os riscos, teriam agido diferente.",
      options: [
        "Had they known the risks, they would have acted differently.",
        "If they known the risks, they would have acted differently.",
        "Had they known the risks, they would act differently.",
        "Had they know the risks, they would have acted differently.",
      ],
      answer: 0,
      explanation:
        "Sem “if”, o “had” vai para a frente do sujeito e o verbo fica no particípio: “Had they known”.",
    },
  ],
}
