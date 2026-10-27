import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Sotaque brasileiro: o que atrapalha a clareza — 10 perguntas. */
export const A59_PRACTICE: LessonPracticeContent = {
  id: "a59",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Don't add a vowel after a final consonant: “hot” is not “___”.",
      hint: "Não acrescente vogal depois de consoante final: “hot” não é “hoti”.",
      options: ["hoti", "hot", "hott", "hote"],
      answer: 0,
      explanation:
        "O português adiciona um “i” final depois de consoante; em inglês a palavra termina seca, no /t/.",
    },
    {
      kind: "completar",
      prompt:
        "Final consonants carry grammar: “worked” and “work” are different ___.",
      hint: "Consoantes finais carregam gramática: “worked” e “work” são tempos diferentes.",
      options: ["tenses", "tens", "tension", "tense's"],
      answer: 0,
      explanation:
        "O som final /t/ marca o passado — perdê-lo faz o ouvinte entender outro tempo verbal.",
    },
    {
      kind: "traduzir",
      prompt: "Ele trabalhou até tarde ontem à noite.",
      bank: ["He", "worked", "late", "last", "night", "work", "works"],
      answer: ["He", "worked", "late", "last", "night"],
      explanation:
        "“Worked” precisa do /t/ final audível; “late last night” é a combinação fixa de tempo.",
    },
    {
      kind: "traduzir",
      prompt: "Não esqueça de enviar isso.",
      bank: ["Don't", "forget", "to", "send", "it", "forgets", "sending"],
      answer: ["Don't", "forget", "to", "send", "it"],
      explanation:
        "No imperativo negativo usamos “don't + verbo base”, e “send” mantém o /d/ final claro.",
    },
    {
      kind: "falar",
      prompt: "He worked late last night.",
      pt: "Ele trabalhou até tarde ontem à noite.",
      tip: "Solte o /t/ final de “worked” com um sopro seco, sem acrescentar vogal depois.",
    },
    {
      kind: "falar",
      prompt: "I studied at school in Brazil.",
      pt: "Estudei em escola no Brasil.",
      tip: "Cuidado com “student” e “studied”: nada de “tch” no meio. O som é /d/ puro.",
    },
    {
      kind: "ouvirPalavra",
      audio: "clarity",
      options: ["clareza", "claridade da luz", "caridade", "classe"],
      answer: 0,
      explanation:
        "“Clarity” é a meta do trabalho de pronúncia: ser entendido sem esforço pelo ouvinte.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to drop",
      options: ["omitir um som", "derrubar algo", "desistir", "pingar"],
      answer: 0,
      explanation:
        "Em pronúncia, “to drop” é deixar de pronunciar um som — o que pode apagar informação gramatical.",
    },
    {
      kind: "ouvirFrase",
      audio: "Don't forget to send it.",
      pt: "Não esqueça de enviar isso.",
      options: [
        "Don't forget to send it.",
        "Don't forget send it.",
        "Don't forget to sending it.",
        "Doesn't forget to send it.",
      ],
      answer: 0,
      explanation:
        "“Forget to do something” pede o infinitivo, e o imperativo negativo é sempre “don't”.",
    },
    {
      kind: "ouvirFrase",
      audio: "He worked late last night.",
      pt: "Ele trabalhou até tarde ontem à noite.",
      options: [
        "He worked late last night.",
        "He work late last night.",
        "He works late last night.",
        "He worked lately last night.",
      ],
      answer: 0,
      explanation:
        "O passado simples é “worked”; “works” seria presente e “lately” significa “ultimamente”.",
    },
  ],
}
