import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Pronomes: I, my, you, your — 10 perguntas. */
export const B05_PRACTICE: LessonPracticeContent = {
  id: "b05",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "This is my brother and ___ wife.",
      hint: "Este é meu irmão e a esposa dele.",
      options: ["his", "her", "their", "its"],
      answer: 0,
      explanation:
        "O irmão é ele: “his wife”. “Her” seria dela, e “their” fala de mais de uma pessoa.",
    },
    {
      kind: "completar",
      prompt: "Her name is Juliana and ___ dog is called Bidu.",
      hint: "O nome dela é Juliana e o cachorro deles se chama Bidu.",
      options: ["their", "his", "her", "our"],
      answer: 0,
      explanation:
        "O cachorro é de Juliana e do irmão — duas pessoas, então “their”. “Our” incluiria você na família.",
    },
    {
      kind: "traduzir",
      prompt: "Esta é a minha casa.",
      bank: ["This", "is", "my", "house", "your", "his"],
      answer: ["This", "is", "my", "house"],
      explanation:
        "“My” acompanha o substantivo: “my house”. “Mine” aparece sozinho, sem o substantivo depois.",
    },
    {
      kind: "traduzir",
      prompt: "Nós amamos a nossa cidade.",
      bank: ["We", "love", "our", "city", "their", "my"],
      answer: ["We", "love", "our", "city"],
      explanation:
        "“Our” é nosso, para o grupo que inclui quem fala. “Their” seria deles.",
    },
    {
      kind: "falar",
      prompt: "This is my brother and his wife.",
      pt: "Este é meu irmão e a esposa dele.",
      tip: "O “th” de this é com a língua entre os dentes. Sem esse detalhe, vira “dis”.",
    },
    {
      kind: "falar",
      prompt: "We love our city.",
      pt: "Nós amamos a nossa cidade.",
      tip: "Ligue “love our” como “ló-vaur”: o “our” soa fraco, quase “ar”.",
    },

    {
      kind: "ouvirPalavra",
      audio: "our",
      options: ["nosso", "deles", "dela", "seu"],
      answer: 0,
      explanation:
        "“Our” é nosso, quando quem fala está incluído. “Your” é seu, de quem ouve — som parecido, sentido diferente.",
    },
    {
      kind: "ouvirPalavra",
      audio: "their",
      options: ["deles", "nosso", "meu", "dela"],
      answer: 0,
      explanation:
        "“Their” é deles. Cuidado: “there” (lá) e “they're” (eles estão) soam igual, mas escrevem-se diferente.",
    },
    {
      kind: "ouvirFrase",
      audio: "This is my brother and his wife.",
      pt: "Este é meu irmão e a esposa dele.",
      options: [
        "This is my brother and his wife.",
        "This is my brother and her wife.",
        "This is her brother and my wife.",
        "These are my brothers and their wives.",
      ],
      answer: 0,
      explanation:
        "Duas pistas: “my brother” no singular e “his”, porque o irmão é ele.",
    },
    {
      kind: "ouvirFrase",
      audio: "We love our city.",
      pt: "Nós amamos a nossa cidade.",
      options: [
        "We love our city.",
        "We love your city.",
        "They love their city.",
        "We leave our city.",
      ],
      answer: 0,
      explanation:
        "Ouça o começo “we” e depois “our”. “Your” tiraria você do grupo; “leave” seria ir embora.",
    },
  ],
}
