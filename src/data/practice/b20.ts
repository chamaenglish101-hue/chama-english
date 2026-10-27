import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Revisão: apresentando-se com confiança — 10 perguntas. */
export const B20_PRACTICE: LessonPracticeContent = {
  id: "b20",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "Hello! My name ___ Rafael and I'm from Curitiba.",
      hint: "Olá! Meu nome é Rafael e eu sou de Curitiba.",
      options: ["is", "are", "am", "be"],
      answer: 0,
      explanation:
        "“My name” é singular, então o verbo to be é “is”. “Am” só existe com “I”.",
    },
    {
      kind: "completar",
      prompt: "In my free time I like ___ and playing the guitar.",
      hint: "No meu tempo livre eu gosto de cozinhar e tocar violão.",
      options: ["cooking", "cook", "to cooking", "cooks"],
      answer: 0,
      explanation:
        "Depois de “like”, o verbo vem em “-ing”: like cooking. O segundo verbo já vem com “-ing”, mantendo o paralelismo.",
    },
    {
      kind: "traduzir",
      prompt: "Gostaria de falar um pouco sobre mim.",
      bank: [
        "I'd",
        "like",
        "to",
        "tell",
        "you",
        "a",
        "little",
        "about",
        "me",
        "say",
        "for",
      ],
      answer: [
        "I'd",
        "like",
        "to",
        "tell",
        "you",
        "a",
        "little",
        "about",
        "me",
      ],
      explanation:
        "“Tell you” pede a pessoa antes do assunto: tell you about me. “Say” não leva a pessoa direto assim.",
    },
    {
      kind: "traduzir",
      prompt: "Sou desenvolvedor de software e trabalho de segunda a sexta.",
      bank: [
        "I'm",
        "a",
        "software",
        "developer",
        "and",
        "I",
        "work",
        "from",
        "Monday",
        "to",
        "Friday",
        "in",
      ],
      answer: [
        "I'm",
        "a",
        "software",
        "developer",
        "and",
        "I",
        "work",
        "from",
        "Monday",
        "to",
        "Friday",
      ],
      explanation:
        "Profissão pede o artigo “a”: I'm a developer. E o intervalo de dias é “from Monday to Friday”.",
    },
    {
      kind: "falar",
      prompt: "Hello! My name is Rafael and I'm from Curitiba.",
      pt: "Olá! Meu nome é Rafael e eu sou de Curitiba.",
      tip: "“I'm” é uma sílaba só, e “from” soa fraco: “frãm”. Não separe “I am” na fala rápida.",
    },
    {
      kind: "falar",
      prompt: "I'm learning English and I love it. Thanks for listening!",
      pt: "Estou aprendendo inglês e adoro. Obrigado por ouvir!",
      tip: "“Thanks for” junta em “ténks-fr”. O “th” é só sopro, sem som de “t” nem de “f”.",
    },

    {
      kind: "ouvirPalavra",
      audio: "in my free time",
      options: [
        "no meu tempo livre",
        "no meu trabalho",
        "na minha casa",
        "no próximo mês",
      ],
      answer: 0,
      explanation:
        "“Free time” é tempo livre — sem compromisso. É a expressão que abre a parte de gostos numa apresentação.",
    },
    {
      kind: "ouvirPalavra",
      audio: "thanks for listening",
      options: [
        "obrigado por ouvir",
        "obrigado pela ajuda",
        "até a próxima",
        "prazer em conhecer",
      ],
      answer: 0,
      explanation:
        "É o fecho clássico de uma apresentação. “Nice to meet you” também encerra, mas só funciona quando você conhece alguém agora.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm a software developer and I work from Monday to Friday.",
      pt: "Sou desenvolvedor de software e trabalho de segunda a sexta.",
      options: [
        "I'm a software developer and I work from Monday to Friday.",
        "I'm a software developer and I work from Monday to Saturday.",
        "I'm a web designer and I work from Monday to Friday.",
        "I'm a software developer and I study from Monday to Friday.",
      ],
      answer: 0,
      explanation:
        "Três palavras decidem: “software”, “work” e “Friday”. As outras trocam a profissão, o dia ou o verbo.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm learning English and I love it.",
      pt: "Estou aprendendo inglês e adoro.",
      options: [
        "I'm learning English and I love it.",
        "I'm learning Spanish and I love it.",
        "I'm teaching English and I love it.",
        "I'm learning English and I need it.",
      ],
      answer: 0,
      explanation:
        "“Learning” tem duas sílabas, e “English” começa com “e” curto. “Teaching” seria ensinar — o oposto.",
    },
  ],
}
