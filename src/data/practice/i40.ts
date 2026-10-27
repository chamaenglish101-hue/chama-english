import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Relato pessoal: contexto, acontecimento e desfecho — 10 perguntas. */
export const I40_PRACTICE: LessonPracticeContent = {
  id: "i40",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt:
        "It was raining and I ___ waiting for the bus when my phone rang.",
      hint: "Estava chovendo e eu esperava o ônibus quando meu telefone tocou.",
      options: ["was", "were", "am", "did"],
      answer: 0,
      explanation:
        "O cenário do relato vem com “was waiting”, e o fato que interrompe no passado simples: “rang”.",
    },
    {
      kind: "completar",
      prompt: "After that, we ___ a taxi and finally got home.",
      hint: "Depois disso, pegamos um táxi e finalmente chegamos em casa.",
      options: ["took", "were taking", "take", "have taken"],
      answer: 0,
      explanation:
        "A sequência de fatos da história usa o passado simples: “we took a taxi”.",
    },
    {
      kind: "traduzir",
      prompt: "Era uma sexta à noite e eu estava voltando do trabalho.",
      bank: [
        "It",
        "was",
        "a",
        "Friday",
        "evening",
        "and",
        "I",
        "was",
        "coming",
        "back",
        "from",
        "work",
        "did",
        "on",
      ],
      answer: [
        "It",
        "was",
        "a",
        "Friday",
        "evening",
        "and",
        "I",
        "was",
        "coming",
        "back",
        "from",
        "work",
      ],
      explanation:
        "“Era uma sexta” vira “it was a Friday”; em inglês, tempo e clima sempre usam o sujeito “it”.",
    },
    {
      kind: "traduzir",
      prompt: "No fim, deu tudo certo e desde então sempre confiro o bilhete.",
      bank: [
        "In",
        "the",
        "end",
        "everything",
        "worked",
        "out",
        "and",
        "since",
        "then",
        "I",
        "always",
        "check",
        "the",
        "ticket",
        "work",
        "checking",
      ],
      answer: [
        "In",
        "the",
        "end",
        "everything",
        "worked",
        "out",
        "and",
        "since",
        "then",
        "I",
        "always",
        "check",
        "the",
        "ticket",
      ],
      explanation:
        "“Work out” significa dar certo. E “since then” com presente simples mostra o hábito que ficou depois.",
    },
    {
      kind: "falar",
      prompt:
        "It was raining and I was waiting for the bus when my phone rang.",
      pt: "Estava chovendo e eu esperava o ônibus quando meu telefone tocou.",
      tip: "Dois contínuos desenham a cena e “rang” corta tudo. Mantenha o ritmo até a última palavra.",
    },
    {
      kind: "falar",
      prompt: "In the end, everything worked out.",
      pt: "No fim, deu tudo certo.",
      tip: "“Worked out” liga em “UÓRKT-áut”. A entonação desce: é o fechamento da história.",
    },
    {
      kind: "ouvirPalavra",
      audio: "at first",
      options: ["no começo", "no fim", "de repente", "primeiramente na lista"],
      answer: 0,
      explanation:
        "“At first” abre a história mostrando o estado inicial — muitas vezes em contraste com o que veio depois.",
    },
    {
      kind: "ouvirPalavra",
      audio: "everything worked out",
      options: [
        "deu tudo certo",
        "tudo saiu do controle",
        "tudo ficou para depois",
        "tudo foi calculado",
      ],
      answer: 0,
      explanation:
        "“Work out” é resolver bem. “It didn't work out” seria justamente o contrário.",
    },
    {
      kind: "ouvirFrase",
      audio: "I was walking home when I saw her.",
      pt: "Estava caminhando para casa quando a vi.",
      options: [
        "I was walking home when I saw her.",
        "I walked home when I saw her.",
        "I was walking home when I see her.",
        "I was walking home when I saw him.",
      ],
      answer: 0,
      explanation:
        "O contínuo monta a cena e o simples traz o acontecimento. Os dois tempos trabalham juntos.",
    },
    {
      kind: "ouvirFrase",
      audio: "In the end, everything worked out.",
      pt: "No fim, deu tudo certo.",
      options: [
        "In the end, everything worked out.",
        "At the end, everything worked out.",
        "In the end, everything works out.",
        "In the end, everything worked on.",
      ],
      answer: 0,
      explanation:
        "“In the end” significa no final das contas; “at the end” seria no fim de algo físico, como uma rua.",
    },
  ],
}
