import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Relato pessoal: do começo ao fim — 10 perguntas. */
export const I34_PRACTICE: LessonPracticeContent = {
  id: "i34",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "It was a Friday evening and I ___ driving home.",
      hint: "Era uma sexta à noite e eu estava dirigindo para casa.",
      options: ["was", "were", "am", "did"],
      answer: 0,
      explanation:
        "O cenário do relato usa o passado contínuo: “I was driving”. Com “I”, o auxiliar é “was”.",
    },
    {
      kind: "completar",
      prompt: "Suddenly, the car ___. I had no idea what to do.",
      hint: "De repente, o carro parou. Eu não fazia ideia do que fazer.",
      options: ["stopped", "was stopping", "stops", "has stopped"],
      answer: 0,
      explanation:
        "A interrupção no meio da cena vem no passado simples: “stopped”. O contínuo desenharia outra ação longa.",
    },
    {
      kind: "traduzir",
      prompt: "No fim, um vizinho me ajudou.",
      bank: [
        "In",
        "the",
        "end",
        "a",
        "neighbor",
        "helped",
        "me",
        "At",
        "final",
      ],
      answer: ["In", "the", "end", "a", "neighbor", "helped", "me"],
      explanation:
        "“In the end” fecha o relato. Cuidado: “at the end” se refere ao fim de algo concreto, como um filme.",
    },
    {
      kind: "traduzir",
      prompt: "Desde então, sempre confiro o tanque antes de viajar.",
      bank: [
        "Since",
        "then",
        "I",
        "always",
        "check",
        "the",
        "tank",
        "before",
        "I",
        "travel",
        "for",
        "checking",
      ],
      answer: [
        "Since",
        "then",
        "I",
        "always",
        "check",
        "the",
        "tank",
        "before",
        "I",
        "travel",
      ],
      explanation:
        "“Since then” indica o que ficou depois da história, e o presente simples mostra o hábito atual.",
    },
    {
      kind: "falar",
      prompt: "It was a Friday evening and I was driving home.",
      pt: "Era uma sexta à noite e eu estava dirigindo para casa.",
      tip: "“Was driving” liga em “uós-DRÁI-vin”. O cenário vem com o contínuo, sem pressa.",
    },
    {
      kind: "falar",
      prompt: "In the end, a neighbor helped me.",
      pt: "No fim, um vizinho me ajudou.",
      tip: "“Neighbor” soa “NÊI-bor”, com o “gh” mudo. O ritmo desacelera: o relato está terminando.",
    },
    {
      kind: "ouvirPalavra",
      audio: "In the end",
      options: [
        "no fim, no final das contas",
        "no fim de algo físico",
        "no começo",
        "de repente",
      ],
      answer: 0,
      explanation:
        "“In the end” conclui a história com o resultado final. “At the end” indicaria o fim de um lugar ou objeto.",
    },
    {
      kind: "ouvirPalavra",
      audio: "Suddenly",
      options: ["de repente", "aos poucos", "por sorte", "mais tarde"],
      answer: 0,
      explanation:
        "“Suddenly” marca o acontecimento que interrompe a cena, normalmente com o passado simples.",
    },
    {
      kind: "ouvirFrase",
      audio: "It was a Friday evening and I was driving home.",
      pt: "Era uma sexta à noite e eu estava dirigindo para casa.",
      options: [
        "It was a Friday evening and I was driving home.",
        "It was a Friday evening and I drove home.",
        "It is a Friday evening and I was driving home.",
        "It was a Sunday evening and I was driving home.",
      ],
      answer: 0,
      explanation:
        "O passado contínuo monta o cenário do relato. Com “drove”, a viagem terminaria sem descrever o clima da cena.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "In the end, a neighbor helped me, and since then I always check the tank.",
      pt: "No fim, um vizinho me ajudou e, desde então, sempre confiro o tanque.",
      options: [
        "In the end, a neighbor helped me, and since then I always check the tank.",
        "In the end, a neighbor helped me, and since then I always checked the tank.",
        "At the end, a neighbor helped me, and since then I always check the tank.",
        "In the end, a neighbor helped me, and since then I always check the tires.",
      ],
      answer: 0,
      explanation:
        "A estrutura fecha com “since then” mais o presente simples, porque o hábito continua até hoje.",
    },
  ],
}
