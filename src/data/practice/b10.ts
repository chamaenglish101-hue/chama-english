import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Presente simples: rotina e hábitos — 10 perguntas. */
export const B10_PRACTICE: LessonPracticeContent = {
  id: "b10",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "I ___ up at 6 and I have breakfast.",
      hint: "Acordo às 6 e tomo café da manhã.",
      options: ["wake", "wakes", "waking", "woke"],
      answer: 0,
      explanation:
        "Com “I”, o verbo fica sem “s”: “I wake up”. O “s” só aparece com he, she e it.",
    },
    {
      kind: "completar",
      prompt: "She ___ from Monday to Friday.",
      hint: "Ela trabalha de segunda a sexta.",
      options: ["works", "work", "working", "worked"],
      answer: 0,
      explanation:
        "Com “she”, o presente simples leva “s”: works. É o único lugar em que o verbo muda de forma.",
    },
    {
      kind: "traduzir",
      prompt: "Normalmente estudamos inglês depois do jantar.",
      bank: [
        "We",
        "usually",
        "study",
        "English",
        "after",
        "dinner",
        "before",
        "always",
      ],
      answer: ["We", "usually", "study", "English", "after", "dinner"],
      explanation:
        "O advérbio de frequência fica antes do verbo: “we usually study”. Depois do verbo, soaria estranho.",
    },
    {
      kind: "traduzir",
      prompt: "Ela toma café da manhã às sete.",
      bank: ["She", "has", "breakfast", "at", "seven", "have"],
      answer: ["She", "has", "breakfast", "at", "seven"],
      explanation:
        "“Have breakfast” com she vira “has breakfast”. E não se traduz “tomar” como “take” aqui.",
    },
    {
      kind: "falar",
      prompt: "I wake up at six and I have breakfast.",
      pt: "Acordo às 6 e tomo café da manhã.",
      tip: "Amarre “wake up at” num bloco só: “uêi-kap-at”. É assim que o inglês soa natural.",
    },
    {
      kind: "falar",
      prompt: "We usually study English after dinner.",
      pt: "Normalmente estudamos inglês depois do jantar.",
      tip: "Em “usually”, o “s” soa como “j”: “IÚ-ju-ali”. Não diga “usualmente” com “s” forte.",
    },

    {
      kind: "ouvirPalavra",
      audio: "to wake up",
      options: ["acordar", "levantar da cama", "dormir", "deitar"],
      answer: 0,
      explanation:
        "“Wake up” é abrir os olhos. Para sair da cama, o phrasal verb é outro: “get up”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "on weekdays",
      options: [
        "durante a semana",
        "no fim de semana",
        "todos os dias",
        "nos feriados",
      ],
      answer: 0,
      explanation:
        "“Weekdays” são de segunda a sexta, os dias úteis. Sábado e domingo são “the weekend”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I wake up at six and I have breakfast.",
      pt: "Acordo às 6 e tomo café da manhã.",
      options: [
        "I wake up at six and I have breakfast.",
        "I wake up at seven and I have breakfast.",
        "I get up at six and I have lunch.",
        "I wake up at six and I go to work.",
      ],
      answer: 0,
      explanation:
        "Duas informações para captar: a hora (“six”) e a refeição (“breakfast”).",
    },
    {
      kind: "ouvirFrase",
      audio: "She works from Monday to Friday.",
      pt: "Ela trabalha de segunda a sexta.",
      options: [
        "She works from Monday to Friday.",
        "She works from Monday to Sunday.",
        "He works from Monday to Friday.",
        "She worked from Monday to Friday.",
      ],
      answer: 0,
      explanation:
        "Ouça o “s” final em “works”: é o presente com she. E o período termina na sexta.",
    },
  ],
}
