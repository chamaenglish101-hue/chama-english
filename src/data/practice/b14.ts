import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Adjetivos básicos e a ordem das palavras — 10 perguntas. */
export const B14_PRACTICE: LessonPracticeContent = {
  id: "b14",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "She bought a beautiful small ___ house.",
      hint: "Ela comprou uma casa pequena e antiga bonita.",
      options: ["old", "older", "oldest", "age"],
      answer: 0,
      explanation:
        "O adjetivo não muda de forma ao descrever: “old”, sempre. A ordem é opinião, tamanho, idade.",
    },
    {
      kind: "completar",
      prompt: "I have two ___ jackets.",
      hint: "Tenho dois casacos azuis novos.",
      options: ["new blue", "blue new", "newly blue", "blue newly"],
      answer: 0,
      explanation:
        "Em inglês, o adjetivo de idade vem antes do de cor: “new blue”. Em português a ordem é outra.",
    },
    {
      kind: "traduzir",
      prompt: "A comida está deliciosa.",
      bank: ["The", "food", "is", "delicious", "tasty", "very"],
      answer: ["The", "food", "is", "delicious"],
      explanation:
        "“Delicious” já é forte o bastante: quem diz “delicious” não precisa de “very”.",
    },
    {
      kind: "traduzir",
      prompt: "Este carro é muito caro.",
      bank: ["This", "car", "is", "very", "expensive", "cheap"],
      answer: ["This", "car", "is", "very", "expensive"],
      explanation:
        "Adjetivo depois do verbo to be, nesta ordem: “the car is expensive”. E “very” vem antes do adjetivo.",
    },
    {
      kind: "falar",
      prompt: "The food is delicious.",
      pt: "A comida está deliciosa.",
      tip: "“Delicious” tem a força na segunda sílaba: “di-LÍ-shes”. O “ci” soa como “sh”.",
    },
    {
      kind: "falar",
      prompt: "I have two new blue jackets.",
      pt: "Tenho dois casacos azuis novos.",
      tip: "Diga os adjetivos colados no substantivo: “niú-blu-DJÁ-kets”, sem pausas.",
    },

    {
      kind: "ouvirPalavra",
      audio: "expensive",
      options: ["caro", "barato", "novo", "usado"],
      answer: 0,
      explanation:
        "“Expensive” é caro. O oposto é “cheap” — que também pode soar ofensivo para um produto de qualidade.",
    },
    {
      kind: "ouvirPalavra",
      audio: "beautiful",
      options: ["bonito", "feio", "grande", "antigo"],
      answer: 0,
      explanation:
        "“Beautiful” é bonito, com três sílabas: “BIÚ-ti-ful”. “Ugly” é feio.",
    },
    {
      kind: "ouvirFrase",
      audio: "The food is delicious.",
      pt: "A comida está deliciosa.",
      options: [
        "The food is delicious.",
        "The food is expensive.",
        "The soup is delicious.",
        "The food was delicious.",
      ],
      answer: 0,
      explanation:
        "Ouça “food” e o verbo “is”, no presente. “Was” falaria de uma refeição já terminada.",
    },
    {
      kind: "ouvirFrase",
      audio: "I have two new blue jackets.",
      pt: "Tenho dois casacos azuis novos.",
      options: [
        "I have two new blue jackets.",
        "I have two blue new jackets.",
        "I have two new black jackets.",
        "I have two new blue shirts.",
      ],
      answer: 0,
      explanation:
        "Só uma opção respeita a ordem dos adjetivos: idade antes de cor. “Blue new” soa estranho no inglês.",
    },
  ],
}
