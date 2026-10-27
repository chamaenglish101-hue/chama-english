import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Negociação de salário e benefícios — 10 perguntas. */
export const A37_PRACTICE: LessonPracticeContent = {
  id: "a37",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "What's the salary ___ you have in mind for this role?",
      hint: "Qual a faixa salarial que vocês têm em mente para essa posição?",
      options: ["range", "plate", "level", "space"],
      answer: 0,
      explanation:
        "“Salary range” é a faixa salarial. “What's the salary range” devolve a pergunta sem revelar seu número primeiro.",
    },
    {
      kind: "completar",
      prompt:
        "Based on my experience, I'd be looking for something in the ___ of 95 to 110.",
      hint: "Com base na minha experiência, buscaria algo entre 95 e 110.",
      options: ["range", "round", "amount", "margin"],
      answer: 0,
      explanation:
        "“In the range of” apresenta uma faixa em vez de um número exato, o que deixa espaço para negociar.",
    },
    {
      kind: "traduzir",
      prompt:
        "Se o salário-base está fixo, poderíamos rever o bônus de contratação?",
      bank: [
        "If",
        "the",
        "base",
        "is",
        "fixed",
        "could",
        "we",
        "revisit",
        "the",
        "signing",
        "bonus",
        "can",
        "reviews",
      ],
      answer: [
        "If",
        "the",
        "base",
        "is",
        "fixed",
        "could",
        "we",
        "revisit",
        "the",
        "signing",
        "bonus",
      ],
      explanation:
        "“Could we revisit” abre espaço para rever outro item sem confrontar o salário-base.",
    },
    {
      kind: "traduzir",
      prompt: "Qual a faixa salarial que vocês têm em mente para essa posição?",
      bank: [
        "What's",
        "the",
        "salary",
        "range",
        "you",
        "have",
        "in",
        "mind",
        "for",
        "this",
        "role",
        "What",
        "role's",
      ],
      answer: [
        "What's",
        "the",
        "salary",
        "range",
        "you",
        "have",
        "in",
        "mind",
        "for",
        "this",
        "role",
      ],
      explanation:
        "“Have in mind” é a forma natural de perguntar a intenção do outro lado da mesa.",
    },
    {
      kind: "falar",
      prompt: "What's the salary range you have in mind for this role?",
      pt: "Qual a faixa salarial que vocês têm em mente para essa posição?",
      tip: "“Salary range” soa “SÁ-la-ri-rêindj”. Fale com calma: é uma pergunta de posicionamento.",
    },
    {
      kind: "falar",
      prompt: "If the base is fixed, could we revisit the signing bonus?",
      pt: "Se o salário-base está fixo, poderíamos rever o bônus de contratação?",
      tip: "Suba a entonação em “fixed” e depois em “bonus”: cria abertura para o outro lado responder.",
    },
    {
      kind: "ouvirPalavra",
      audio: "total compensation",
      options: [
        "remuneração total",
        "compensação por danos",
        "total de horas extras",
        "salário bruto",
      ],
      answer: 0,
      explanation:
        "“Total compensation” soma salário, bônus, ações e benefícios — o que realmente importa na negociação.",
    },
    {
      kind: "ouvirPalavra",
      audio: "signing bonus",
      options: [
        "bônus de contratação",
        "bônus anual",
        "desconto em folha",
        "assinatura de contrato",
      ],
      answer: 0,
      explanation:
        "“Signing bonus” é o valor pago na entrada. Costuma ser o item mais flexível quando a base está travada.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "Based on my experience, I'd be looking for something in the range of 95 to 110.",
      pt: "Com base na minha experiência, buscaria algo entre 95 e 110.",
      options: [
        "Based on my experience, I'd be looking for something in the range of 95 to 110.",
        "Based in my experience, I'd be looking for something in the range of 95 to 110.",
        "Based on my experience, I'm looking for something in the range of 95 to 110.",
        "Based on my experience, I'd be looking for something in the range of 95 at 110.",
      ],
      answer: 0,
      explanation:
        "A preposição é “based on”, o condicional “I'd be looking” soa negociável e a faixa usa “to”.",
    },
    {
      kind: "ouvirFrase",
      audio: "If the base is fixed, could we revisit the signing bonus?",
      pt: "Se o salário-base está fixo, poderíamos rever o bônus de contratação?",
      options: [
        "If the base is fixed, could we revisit the signing bonus?",
        "If the base is fixed, could we revisiting the signing bonus?",
        "If the base is fix, could we revisit the signing bonus?",
        "If the base is fixed, we could revisit the signing bonus?",
      ],
      answer: 0,
      explanation:
        "Depois de “could” o verbo fica na forma base, e a pergunta precisa do auxiliar antes do sujeito.",
    },
  ],
}
