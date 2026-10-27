import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Apresentando-se: quem é você — 10 perguntas. */
export const B03_PRACTICE: LessonPracticeContent = {
  id: "b03",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "Hi, my ___ is Carla. Nice to meet you!",
      hint: "Oi, meu nome é Carla. Prazer em conhecer você!",
      options: ["name", "age", "house", "work"],
      answer: 0,
      explanation:
        "“My name is…” é a apresentação mais direta. “I am Carla” também vale, mas nunca “my name are”.",
    },
    {
      kind: "completar",
      prompt: "I ___ from Brazil. I live in Belo Horizonte.",
      hint: "Sou do Brasil. Moro em Belo Horizonte.",
      options: ["am", "is", "are", "do"],
      answer: 0,
      explanation:
        "Com “I”, o verbo to be é sempre “am”. “I am from…” fala de origem; “I live in…” fala de onde mora hoje.",
    },
    {
      kind: "traduzir",
      prompt: "Prazer em conhecer você.",
      bank: ["Nice", "to", "meet", "you", "see", "again"],
      answer: ["Nice", "to", "meet", "you"],
      explanation:
        "Guarde “meet” para a primeira vez. Para quem você já conhece, a frase é “nice to see you”.",
    },
    {
      kind: "traduzir",
      prompt: "Eu trabalho como professor.",
      bank: ["I", "work", "as", "a", "teacher", "my"],
      answer: ["I", "work", "as", "a", "teacher"],
      explanation:
        "“Work as” é trabalhar como. Antes da profissão vai o artigo: “a teacher”, “an engineer”.",
    },
    {
      kind: "falar",
      prompt: "Hi, I'm Carla. Nice to meet you!",
      pt: "Oi, eu sou a Carla. Prazer em conhecer você!",
      tip: "“I'm” é uma sílaba só, mais curta que “I am”. Diga “aim”, sem separar.",
    },
    {
      kind: "falar",
      prompt: "I'm an engineer at a small company.",
      pt: "Sou engenheiro(a) em uma empresa pequena.",
      tip: "Ligue “an engineer” como “a-nenjinir”. O “g” de engineer é fraco, quase um “j”.",
    },

    {
      kind: "ouvirPalavra",
      audio: "Nice to meet you",
      options: [
        "Prazer em conhecer você",
        "Boa sorte",
        "Até logo",
        "Bem-vindo",
      ],
      answer: 0,
      explanation:
        "“Nice to meet you” só se usa no primeiro encontro. Depois disso, “nice to see you”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I work as",
      options: [
        "Eu trabalho como",
        "Eu trabalho muito",
        "Eu comecei a trabalhar",
        "Eu trabalho perto",
      ],
      answer: 0,
      explanation:
        "“As” aqui significa “como”. É a ponte que liga a pessoa à profissão: “I work as a nurse”.",
    },
    {
      kind: "ouvirFrase",
      audio: "My name is Carla and I'm from Brazil.",
      pt: "Meu nome é Carla e sou do Brasil.",
      options: [
        "My name is Carla and I'm from Brazil.",
        "My name is Clara and I live in Brazil.",
        "Her name is Carla and she's from Brazil.",
        "My name is Carla and I'm from Brasília.",
      ],
      answer: 0,
      explanation:
        "Ouça “I'm” e a palavra “Brazil” até o fim. As outras trocam o nome, a pessoa ou a cidade.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm an engineer at a small company.",
      pt: "Sou engenheiro(a) em uma empresa pequena.",
      options: [
        "I'm an engineer at a small company.",
        "I'm an engineer at a big company.",
        "I'm a manager at a small company.",
        "I'm an engineer in a small city.",
      ],
      answer: 0,
      explanation:
        "A pista está nos detalhes: “small company”. Trocar “small” por “big” muda o sentido inteiro.",
    },
  ],
}
