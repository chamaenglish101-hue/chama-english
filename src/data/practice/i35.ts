import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Apresentação no trabalho: abrir, desenvolver e fechar — 10 perguntas. */
export const I35_PRACTICE: LessonPracticeContent = {
  id: "i35",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Let's ___ at the numbers for this quarter.",
      hint: "Vamos ver os números deste trimestre.",
      options: ["look", "see", "watch", "read"],
      answer: 0,
      explanation:
        "“Look at” é o verbo correto para examinar dados. “See” indicaria só perceber algo com os olhos.",
    },
    {
      kind: "completar",
      prompt: "I'm happy to ___ questions at the end.",
      hint: "Fico à disposição para perguntas no fim.",
      options: ["take", "make", "do", "give"],
      answer: 0,
      explanation:
        "“Take questions” é a combinação usada no fim de apresentações. “Make questions” não existe nesse sentido.",
    },
    {
      kind: "traduzir",
      prompt: "Segundo ponto: os custos caíram no último trimestre.",
      bank: [
        "Second",
        "costs",
        "went",
        "down",
        "last",
        "quarter",
        "first",
        "up",
      ],
      answer: ["Second", "costs", "went", "down", "last", "quarter"],
      explanation:
        "“Second” numera o tópico e “went down” é a forma natural de dizer que caíram.",
    },
    {
      kind: "traduzir",
      prompt: "Finalmente, quero agradecer a todos pela atenção.",
      bank: [
        "Finally",
        "I'd",
        "like",
        "to",
        "thank",
        "everyone",
        "for",
        "your",
        "attention",
        "First",
        "you",
      ],
      answer: [
        "Finally",
        "I'd",
        "like",
        "to",
        "thank",
        "everyone",
        "for",
        "your",
        "attention",
      ],
      explanation:
        "“Finally” fecha a sequência. E “thank someone for something” é a estrutura fixa do agradecimento.",
    },
    {
      kind: "falar",
      prompt: "First, let's look at the numbers.",
      pt: "Primeiro, vamos ver os números.",
      tip: "Sinalize o começo com uma pausa depois de “first”. O público precisa ouvir a mudança de tópico.",
    },
    {
      kind: "falar",
      prompt: "To sum up, we're on track. I'm happy to take questions.",
      pt: "Resumindo, estamos no caminho. Fico à disposição para perguntas.",
      tip: "A entonação cai em “to sum up”: é o sinal de que a apresentação está terminando.",
    },
    {
      kind: "ouvirPalavra",
      audio: "agenda",
      options: [
        "pauta, ordem do dia",
        "resumo final",
        "público-alvo",
        "resultado do trimestre",
      ],
      answer: 0,
      explanation:
        "Na apresentação, “agenda” é a lista do que será tratado: “Here's the agenda for today”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "on this slide",
      options: [
        "neste slide",
        "nesta reunião",
        "nesta página escrita",
        "neste momento",
      ],
      answer: 0,
      explanation:
        "“As you can see on this slide” é a frase que aponta para o apoio visual durante a fala.",
    },
    {
      kind: "ouvirFrase",
      audio: "As you can see on this slide, sales grew.",
      pt: "Como vocês podem ver neste slide, as vendas cresceram.",
      options: [
        "As you can see on this slide, sales grew.",
        "As you can see in this slide, sales grew.",
        "As you can see on this slide, sales grow.",
        "As we can see on this slide, sales grew.",
      ],
      answer: 0,
      explanation:
        "Slide é superfície: “on this slide”. E “grew” é o passado de “grow”, que combina com resultados já fechados.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm happy to take questions.",
      pt: "Fico à disposição para perguntas.",
      options: [
        "I'm happy to take questions.",
        "I'm happy to make questions.",
        "I'm happy to take question.",
        "I'm happy to answer questions.",
      ],
      answer: 0,
      explanation:
        "“Take questions” é a fórmula consagrada — você se coloca à disposição para as perguntas da plateia.",
    },
  ],
}
