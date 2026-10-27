import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** There is / there are — 10 perguntas. */
export const B12_PRACTICE: LessonPracticeContent = {
  id: "b12",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "___ a park near my house.",
      hint: "Há um parque perto da minha casa.",
      options: ["There is", "There are", "It is", "Have"],
      answer: 0,
      explanation:
        "Com uma coisa só, no singular, use “there is”. “There are” só com dois ou mais itens.",
    },
    {
      kind: "completar",
      prompt: "___ three bedrooms in the apartment.",
      hint: "Há três quartos no apartamento.",
      options: ["There are", "There is", "It has", "They are"],
      answer: 0,
      explanation:
        "“Three bedrooms” é plural, então o verbo vai para o plural: “there are”. O “there” aqui não é lugar.",
    },
    {
      kind: "traduzir",
      prompt: "Tem uma farmácia por aqui?",
      bank: ["Is", "there", "a", "pharmacy", "around", "here", "are"],
      answer: ["Is", "there", "a", "pharmacy", "around", "here"],
      explanation:
        "Na pergunta, o verbo vem antes: “is there…?”. A resposta curta pode ser “yes, there is”.",
    },
    {
      kind: "traduzir",
      prompt: "Há um banco ao lado da escola.",
      bank: [
        "There",
        "is",
        "a",
        "bank",
        "next",
        "to",
        "the",
        "school",
        "behind",
        "are",
      ],
      answer: ["There", "is", "a", "bank", "next", "to", "the", "school"],
      explanation:
        "“Next to” é ao lado de. A ordem em inglês é fixa: primeiro o que existe, depois onde fica.",
    },
    {
      kind: "falar",
      prompt: "There is a park near my house.",
      pt: "Há um parque perto da minha casa.",
      tip: "“There is” junta-se em “dér-iz”. A língua entre os dentes no “th”, e o “s” soa como “z”.",
    },
    {
      kind: "falar",
      prompt: "Is there a pharmacy around here?",
      pt: "Tem uma farmácia por aqui?",
      tip: "Em “pharmacy”, o “ph” soa como “f”: “FÁR-ma-si”. Na pergunta, a voz sobe no fim.",
    },

    {
      kind: "ouvirPalavra",
      audio: "around here",
      options: ["por aqui", "ali longe", "em casa", "na esquina"],
      answer: 0,
      explanation:
        "“Around here” é por aqui perto. Use no fim da pergunta: “is there a bank around here?”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "next to",
      options: ["ao lado de", "em frente de", "atrás de", "dentro de"],
      answer: 0,
      explanation:
        "“Next to” é ao lado de. Em frente é “in front of” e atrás é “behind”.",
    },
    {
      kind: "ouvirFrase",
      audio: "There is a park near my house.",
      pt: "Há um parque perto da minha casa.",
      options: [
        "There is a park near my house.",
        "There are two parks near my house.",
        "There is a park near my office.",
        "There is a lake near my house.",
      ],
      answer: 0,
      explanation:
        "Ouça “is”, no singular, e a palavra “park”. As outras mudam o número, o lugar ou o cenário.",
    },
    {
      kind: "ouvirFrase",
      audio: "Are there any restaurants on this street?",
      pt: "Há algum restaurante nesta rua?",
      options: [
        "Are there any restaurants on this street?",
        "Is there any restaurant on this street?",
        "Are there any restaurants on that street?",
        "Are there any shops on this street?",
      ],
      answer: 0,
      explanation:
        "“Restaurants” está no plural, então o verbo é “are there”. E a rua é esta: “this street”.",
    },
  ],
}
