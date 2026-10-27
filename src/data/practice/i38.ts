import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Ouvir a fala rápida: reduções e ligações — 10 perguntas. */
export const I38_PRACTICE: LessonPracticeContent = {
  id: "i38",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "“I want to travel” na fala rápida soa ___.",
      hint: "Eu quero viajar. (bem rápido)",
      options: [
        "I wanna travel",
        "I want travel",
        "I wanna to travel",
        "I won't travel",
      ],
      answer: 0,
      explanation:
        "“Wanna” substitui “want to”. Depois dele, o verbo continua na forma base: “wanna travel”.",
    },
    {
      kind: "completar",
      prompt: "Native speakers often say ___ instead of “going to”.",
      hint: "Falantes nativos costumam dizer… em vez de “going to”.",
      options: ["gonna", "gon", "go", "gone"],
      answer: 0,
      explanation:
        "“Gonna” é a redução de “going to” na fala espontânea. Nas provas escritas, mantenha “going to”.",
    },
    {
      kind: "traduzir",
      prompt: "Pode falar um pouco mais devagar? Estou aprendendo.",
      bank: [
        "Could",
        "you",
        "speak",
        "a",
        "bit",
        "slower",
        "I'm",
        "learning",
        "slowly",
        "more",
      ],
      answer: [
        "Could",
        "you",
        "speak",
        "a",
        "bit",
        "slower",
        "I'm",
        "learning",
      ],
      explanation:
        "“A bit slower” é a forma natural de pedir. E dizer que está aprendendo justifica o pedido com simpatia.",
    },
    {
      kind: "traduzir",
      prompt: "Entendi a ideia geral, mas perdi os números.",
      bank: [
        "I",
        "got",
        "the",
        "main",
        "idea",
        "but",
        "I",
        "missed",
        "the",
        "numbers",
        "lost",
        "general",
      ],
      answer: [
        "I",
        "got",
        "the",
        "main",
        "idea",
        "but",
        "I",
        "missed",
        "the",
        "numbers",
      ],
      explanation:
        "Captar a ideia geral é a estratégia certa: “got the main idea”. Perder detalhes específicos é normal até entre nativos.",
    },
    {
      kind: "falar",
      prompt: "I wanna travel next year.",
      pt: "Quero viajar no ano que vem.",
      tip: "“Wanna” é uma sílaba: “UÓ-na”. Não separe em “want to” quando quiser soar mais fluente.",
    },
    {
      kind: "falar",
      prompt: "Could you speak a bit slower, please?",
      pt: "Pode falar um pouco mais devagar, por favor?",
      tip: "“A bit slower” liga em “a-BÍT-SLÔU-er”. Pedir isso é totalmente normal, mesmo entre nativos.",
    },
    {
      kind: "ouvirPalavra",
      audio: "What do you want to do?",
      options: [
        "O que você quer fazer?",
        "O que você precisa fazer?",
        "Onde você quer ir?",
        "O que vamos fazer hoje?",
      ],
      answer: 0,
      explanation:
        "Na fala rápida soa “Whaddaya wanna do?”. Ouvir a frase inteira ajuda mais do que tentar separar palavra por palavra.",
    },
    {
      kind: "ouvirPalavra",
      audio: "an apple",
      options: ["uma maçã", "uma abacaxi", "uma banana", "um ovo"],
      answer: 0,
      explanation:
        "As palavras se ligam: “an apple” soa “anapple”. Esse é um dos segredos para entender a velocidade.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm gonna call you later.",
      pt: "Vou te ligar depois.",
      options: [
        "I'm gonna call you later.",
        "I'm gonna call you now.",
        "I'm gonna tell you later.",
        "I wanna call you later.",
      ],
      answer: 0,
      explanation:
        "Ouça “gonna” e “call you”. “Wanna” mudaria a intenção, e “now” inverteria o tempo da ação.",
    },
    {
      kind: "ouvirFrase",
      audio: "Could you say that again, please?",
      pt: "Pode repetir isso, por favor?",
      options: [
        "Could you say that again, please?",
        "Could you say that a gain, please?",
        "Could you repeat that again, please?",
        "Could you say that again, slowly?",
      ],
      answer: 0,
      explanation:
        "“Say that again” é a expressão completa. A alternativa “repeat that again” seria redundante em inglês.",
    },
  ],
}
