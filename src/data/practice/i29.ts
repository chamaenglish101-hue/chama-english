import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Apresentação curta no trabalho — 10 perguntas. */
export const I29_PRACTICE: LessonPracticeContent = {
  id: "i29",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Today I'd like to ___ about our results this quarter.",
      hint: "Hoje gostaria de falar sobre nossos resultados deste trimestre.",
      options: ["talk", "talking", "say", "tell"],
      answer: 0,
      explanation:
        "“Talk about” é o verbo certo com “about”. “Say” e “tell” não aceitam “about” dessa forma.",
    },
    {
      kind: "completar",
      prompt: "To ___ up, we're on track and we're happy to take questions.",
      hint: "Resumindo, estamos no caminho e ficamos à disposição para perguntas.",
      options: ["sum", "some", "summary", "summing"],
      answer: 0,
      explanation:
        "“To sum up” é a expressão fixa que abre o fechamento. “In summary” também funciona, mas não aqui.",
    },
    {
      kind: "traduzir",
      prompt: "Primeiro, vamos ver os números.",
      bank: ["First", "let's", "look", "at", "the", "numbers", "see", "second"],
      answer: ["First", "let's", "look", "at", "the", "numbers"],
      explanation:
        "“Let's look at” conduz o público pelo próximo ponto. Numa apresentação, “First… Second… Finally…” guia a plateia.",
    },
    {
      kind: "traduzir",
      prompt: "Como vocês podem ver neste slide, as vendas cresceram.",
      bank: [
        "As",
        "you",
        "can",
        "see",
        "on",
        "this",
        "slide",
        "sales",
        "grew",
        "in",
        "grow",
      ],
      answer: [
        "As",
        "you",
        "can",
        "see",
        "on",
        "this",
        "slide",
        "sales",
        "grew",
      ],
      explanation:
        "“As you can see” convida o público a olhar o apoio visual — e “on this slide” usa a preposição “on”.",
    },
    {
      kind: "falar",
      prompt: "Today I'd like to talk about our results this quarter.",
      pt: "Hoje gostaria de falar sobre nossos resultados deste trimestre.",
      tip: "“I'd like to talk about” sai como “aid-LÁIIC-tu-tóc-a-báut”. Fale com calma na abertura.",
    },
    {
      kind: "falar",
      prompt: "First, let's look at the numbers.",
      pt: "Primeiro, vamos ver os números.",
      tip: "“Let's” soa “lets”. O “s” final se liga a “look”: “lets-LÚK-et”. A pausa depois de “first” dá ênfase.",
    },
    {
      kind: "ouvirPalavra",
      audio: "To sum up",
      options: [
        "resumindo",
        "para começar",
        "somando tudo",
        "em conclusão final",
      ],
      answer: 0,
      explanation:
        "“To sum up” abre o fechamento da apresentação. É o sinal para o público se preparar para perguntas.",
    },
    {
      kind: "ouvirPalavra",
      audio: "As you can see",
      options: [
        "como vocês podem ver",
        "conforme eu disse",
        "como puderem",
        "vemos que",
      ],
      answer: 0,
      explanation:
        "“As you can see on this slide” aponta para o material visual e mantém a plateia acompanhando.",
    },
    {
      kind: "ouvirFrase",
      audio: "Today I'd like to talk about our results this quarter.",
      pt: "Hoje gostaria de falar sobre nossos resultados deste trimestre.",
      options: [
        "Today I'd like to talk about our results this quarter.",
        "Today I like to talk about our results this quarter.",
        "Today I'd like to talk about our results last quarter.",
        "Today I'd like to speak about our results this quarter.",
      ],
      answer: 0,
      explanation:
        "“I'd like to” é a abertura educada da apresentação. “I like to” falaria de um hábito, não de hoje.",
    },
    {
      kind: "ouvirFrase",
      audio: "To sum up, we're on track.",
      pt: "Resumindo, estamos no caminho.",
      options: [
        "To sum up, we're on track.",
        "To sum up, we're on track now.",
        "To sum up, we're not on track.",
        "To sum on, we're on track.",
      ],
      answer: 0,
      explanation:
        "Ouça “to sum up” com o “m” e o “p” juntos. Se aparecer um “not”, o fechamento muda todo o resultado.",
    },
  ],
}
