import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Can e can't: habilidade e permissão — 10 perguntas. */
export const B15_PRACTICE: LessonPracticeContent = {
  id: "b15",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "He can ___ the piano very well.",
      hint: "Ele sabe tocar piano muito bem.",
      options: ["play", "to play", "plays", "playing"],
      answer: 0,
      explanation:
        "Depois de “can” o verbo fica na forma base — sem “to” e sem “-s”. O “can” já carrega o sentido de saber.",
    },
    {
      kind: "completar",
      prompt: "Can I ___ in, please? It's cold outside.",
      hint: "Posso entrar, por favor? Está frio lá fora.",
      options: ["come", "coming", "to come", "comes"],
      answer: 0,
      explanation:
        "“Can I come in?” é o pedido de permissão mais comum. Depois de “can” vem sempre o verbo puro.",
    },
    {
      kind: "traduzir",
      prompt: "Eu não sei dirigir, mas sei nadar.",
      bank: [
        "I",
        "can't",
        "drive",
        "but",
        "I",
        "can",
        "swim",
        "can",
        "to swim",
      ],
      answer: ["I", "can't", "drive", "but", "I", "can", "swim"],
      explanation:
        "Em inglês a habilidade vem antes do verbo: “I can swim”. A negativa é “can't”, uma sílaba só, com som de “kent”.",
    },
    {
      kind: "traduzir",
      prompt: "Você sabe cozinhar? — Sim, sei.",
      bank: ["Can", "you", "cook", "Yes", "I", "can", "Do", "can't"],
      answer: ["Can", "you", "cook", "Yes", "I", "can"],
      explanation:
        "Pergunta com “can” e resposta curta com o mesmo verbo: “Can you cook?” — “Yes, I can.” Nunca use “do” aqui.",
    },
    {
      kind: "falar",
      prompt: "I can speak a little English, but I can't write very well.",
      pt: "Consigo falar um pouco de inglês, mas não escrevo muito bem.",
      tip: "“Can't” tem o “a” como em “cânte”, rápido e nasal. Não diga “can-te” de dois tempos.",
    },
    {
      kind: "falar",
      prompt: "Can I use your phone, please? — Sure, you can.",
      pt: "Posso usar seu telefone, por favor? — Claro, pode.",
      tip: "Na pergunta o “can” fica mais longo: “keen”. Na resposta, mais curto. É essa diferença que o ouvido usa.",
    },

    {
      kind: "ouvirPalavra",
      audio: "to swim",
      options: ["nadar", "esquiar", "correr", "beber"],
      answer: 0,
      explanation:
        "“Swim” é nadar. Cuidado com “swing” (balançar), que soa parecido mas tem outro sentido.",
    },
    {
      kind: "ouvirPalavra",
      audio: "of course",
      options: [
        "claro, sem problema",
        "de novo",
        "sem dúvida nenhuma",
        "no final",
      ],
      answer: 0,
      explanation:
        "“Of course” é a resposta gentil para um pedido: “claro, pode”. Literalmente seria “do curso”, e é por isso que a expressão confunde.",
    },
    {
      kind: "ouvirFrase",
      audio: "Can I use your phone, please?",
      pt: "Posso usar seu telefone, por favor?",
      options: [
        "Can I use your phone, please?",
        "Can I use your car, please?",
        "Can I use your pen, please?",
        "Can you use my phone, please?",
      ],
      answer: 0,
      explanation:
        "Ouça “phone” com o “f” e o “n” bem marcados. As outras trocam o objeto ou invertem quem pede.",
    },
    {
      kind: "ouvirFrase",
      audio: "She can't come to the meeting today.",
      pt: "Ela não pode vir à reunião hoje.",
      options: [
        "She can't come to the meeting today.",
        "She can come to the meeting today.",
        "She can't go to the meeting tomorrow.",
        "He can't come to the meeting today.",
      ],
      answer: 0,
      explanation:
        "O “can't” corta o som com um “t” seco. Sem ele, a frase vira o oposto: ela pode sim.",
    },
  ],
}
