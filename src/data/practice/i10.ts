import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Pronomes relativos: who, which, that — 10 perguntas. */
export const I10_PRACTICE: LessonPracticeContent = {
  id: "i10",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "The man ___ called you is my boss.",
      hint: "O homem que te ligou é meu chefe.",
      options: ["who", "which", "whose", "where"],
      answer: 0,
      explanation:
        "Para pessoas usamos “who”. “Which” é para coisas e “whose” indica posse.",
    },
    {
      kind: "completar",
      prompt: "My car, ___ is old, still works perfectly.",
      hint: "Meu carro, que é velho, ainda funciona perfeitamente.",
      options: ["which", "that", "who", "what"],
      answer: 0,
      explanation:
        "Com vírgulas (explicativa) usa-se “which”. “That” nunca aparece nesse tipo de oração.",
    },
    {
      kind: "traduzir",
      prompt: "Conheci uma mulher que mora no Canadá.",
      bank: [
        "I",
        "met",
        "a",
        "woman",
        "who",
        "lives",
        "in",
        "Canada",
        "which",
        "live",
      ],
      answer: ["I", "met", "a", "woman", "who", "lives", "in", "Canada"],
      explanation:
        "“Who” retoma “a woman”, e o verbo concorda no singular: “lives”. O pronome não se repete depois.",
    },
    {
      kind: "traduzir",
      prompt: "Este é o livro que eu te contei.",
      bank: [
        "This",
        "is",
        "the",
        "book",
        "that",
        "I",
        "told",
        "you",
        "about",
        "who",
        "which about",
      ],
      answer: [
        "This",
        "is",
        "the",
        "book",
        "that",
        "I",
        "told",
        "you",
        "about",
      ],
      explanation:
        "Coisa retomada por “that” e a preposição “about” fica no fim da oração: “told you about”.",
    },
    {
      kind: "falar",
      prompt: "The man who called you is my boss.",
      pt: "O homem que te ligou é meu chefe.",
      tip: "“Who called” liga em “ru-CÓLD”. Não acrescente “that” nem “he” depois — o pronome já está feito.",
    },
    {
      kind: "falar",
      prompt: "This is the book that I told you about.",
      pt: "Este é o livro que eu te contei.",
      tip: "A preposição “about” fecha a frase e precisa ser ouvida no fim, sem pressa.",
    },
    {
      kind: "ouvirPalavra",
      audio: "whose",
      options: ["cujo, de quem", "quem", "que (coisa)", "onde"],
      answer: 0,
      explanation:
        "“Whose” indica posse: “the girl whose father is a pilot”. É o relativo que responde “de quem”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "where",
      options: ["onde", "quando", "por que", "que (pessoa)"],
      answer: 0,
      explanation:
        "“Where” retoma lugares: “the city where I was born”. Nunca retoma pessoas.",
    },
    {
      kind: "ouvirFrase",
      audio: "The man who called you is my boss.",
      pt: "O homem que te ligou é meu chefe.",
      options: [
        "The man who called you is my boss.",
        "The man which called you is my boss.",
        "The man who called me is my boss.",
        "The man whose called you is my boss.",
      ],
      answer: 0,
      explanation:
        "Pessoa pede “who”. “Which” nunca retoma pessoa e “whose” seria posse, sem sentido aqui.",
    },
    {
      kind: "ouvirFrase",
      audio: "My car, which is old, still works perfectly.",
      pt: "Meu carro, que é velho, ainda funciona perfeitamente.",
      options: [
        "My car, which is old, still works perfectly.",
        "My car, that is old, still works perfectly.",
        "My car, who is old, still works perfectly.",
        "My car which is old still works perfectly.",
      ],
      answer: 0,
      explanation:
        "A pausa depois de “which” e antes de “still” marca a oração explicativa. Nesse caso, o relativo é sempre “which”.",
    },
  ],
}
