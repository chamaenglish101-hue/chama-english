import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Cover letter e perfil profissional — 10 perguntas. */
export const A31_PRACTICE: LessonPracticeContent = {
  id: "a31",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "Your expansion into Latin America is exactly the challenge I've been ___ for.",
      hint: "Sua expansão para a América Latina é exatamente o desafio para o qual venho me preparando.",
      options: ["preparing", "prepared", "prepare", "prepares"],
      answer: 0,
      explanation:
        "O presente perfeito contínuo mostra a preparação que vem acontecendo até agora: “I've been preparing for”.",
    },
    {
      kind: "completar",
      prompt: "I ___ a team of six and cut onboarding time by half.",
      hint: "Liderei um time de seis pessoas e reduzi o tempo de integração pela metade.",
      options: ["led", "lead", "leading", "leads"],
      answer: 0,
      explanation:
        "Resultados de currículo vão no passado simples e com verbo de ação: “I led”, direto e verificável.",
    },
    {
      kind: "traduzir",
      prompt:
        "Gostaria de 15 minutos para explorar como posso ajudar seu roteiro de produto.",
      bank: [
        "I'd",
        "love",
        "15",
        "minutes",
        "to",
        "explore",
        "how",
        "I",
        "can",
        "help",
        "your",
        "roadmap",
        "helps",
      ],
      answer: [
        "I'd",
        "love",
        "15",
        "minutes",
        "to",
        "explore",
        "how",
        "I",
        "can",
        "help",
        "your",
        "roadmap",
      ],
      explanation:
        "“I'd love 15 minutes” é o pedido educado e específico que fecha um e-mail de candidatura.",
    },
    {
      kind: "traduzir",
      prompt:
        "Liderei um time de seis pessoas e reduzi o tempo de integração pela metade.",
      bank: [
        "I",
        "led",
        "a",
        "team",
        "of",
        "six",
        "and",
        "cut",
        "onboarding",
        "time",
        "by",
        "half",
        "lead",
        "cutting",
      ],
      answer: [
        "I",
        "led",
        "a",
        "team",
        "of",
        "six",
        "and",
        "cut",
        "onboarding",
        "time",
        "by",
        "half",
      ],
      explanation:
        "“Cut something by half” mostra a redução com número claro, o que dá credibilidade ao currículo.",
    },
    {
      kind: "falar",
      prompt: "I led a team of six and cut onboarding time by half.",
      pt: "Liderei um time de seis pessoas e reduzi o tempo de integração pela metade.",
      tip: "“Onboarding” soa “ÓN-bor-din”. Faça uma pausa curta depois de “six” antes do resultado.",
    },
    {
      kind: "falar",
      prompt: "I'd love 15 minutes to explore how I can help your roadmap.",
      pt: "Gostaria de 15 minutos para explorar como posso ajudar seu roteiro de produto.",
      tip: "“I'd love” vira “aid-láv”. Fale com entusiasmo contido: é um pedido, não uma exigência.",
    },
    {
      kind: "ouvirPalavra",
      audio: "track record",
      options: [
        "histórico de resultados",
        "lista de faixas",
        "registro de ponto",
        "currículo impresso",
      ],
      answer: 0,
      explanation:
        "“Track record” é o histórico comprovado de entregas — o que os recrutadores procuram primeiro.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to stand out",
      options: [
        "se destacar",
        "ficar de fora",
        "esperar em pé",
        "desistir da vaga",
      ],
      answer: 0,
      explanation:
        "“Stand out” é aparecer entre os demais. Em candidaturas, exige personalizar o texto para a vaga.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "Your expansion into Latin America is exactly the challenge I've been preparing for.",
      pt: "Sua expansão para a América Latina é exatamente o desafio para o qual venho me preparando.",
      options: [
        "Your expansion into Latin America is exactly the challenge I've been preparing for.",
        "Your expansion into Latin America is exactly the challenge I prepared.",
        "Your expansion into Latin America is exactly the challenge I've preparing for.",
        "Your expansion into Latin America is exactly the challenge I've been preparing.",
      ],
      answer: 0,
      explanation:
        "A preparação contínua usa “have been preparing”, e a preposição “for” fecha a estrutura no final.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'd love 15 minutes to explore how I can help your roadmap.",
      pt: "Gostaria de 15 minutos para explorar como posso ajudar seu roteiro de produto.",
      options: [
        "I'd love 15 minutes to explore how I can help your roadmap.",
        "I'd love 15 minutes to exploring how I can help your roadmap.",
        "I love 15 minutes to explore how I can help your roadmap.",
        "I'd love 15 minutes explore how I can help your roadmap.",
      ],
      answer: 0,
      explanation:
        "O condicional “I'd love” soa educado, e o infinitivo “to explore” liga o pedido ao seu objetivo.",
    },
  ],
}
