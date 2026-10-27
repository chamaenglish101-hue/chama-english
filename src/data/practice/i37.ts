import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Expressões idiomáticas do dia a dia — 10 perguntas. */
export const I37_PRACTICE: LessonPracticeContent = {
  id: "i37",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Don't worry about the test. It's a piece of ___.",
      hint: "Não se preocupe com a prova. É moleza.",
      options: ["cake", "pie", "bread", "sugar"],
      answer: 0,
      explanation:
        "“A piece of cake” significa algo muito fácil. Serve também para tarefas, não só provas.",
    },
    {
      kind: "completar",
      prompt: "___ a leg in your interview tomorrow!",
      hint: "Boa sorte na sua entrevista amanhã!",
      options: ["Break", "Shake", "Take", "Hold"],
      answer: 0,
      explanation:
        "“Break a leg” deseja boa sorte. Vem do teatro, mas hoje se usa em qualquer situação importante.",
    },
    {
      kind: "traduzir",
      prompt: "Vamos garantir que estamos na mesma página.",
      bank: [
        "Let's",
        "make",
        "sure",
        "we're",
        "on",
        "the",
        "same",
        "page",
        "in",
        "in agreement",
      ],
      answer: ["Let's", "make", "sure", "we're", "on", "the", "same", "page"],
      explanation:
        "É a expressão idiomática mais usada em reuniões: significa estar alinhado sobre o mesmo assunto.",
    },
    {
      kind: "traduzir",
      prompt:
        "Café da manhã para mim é moleza, mas cozinhar para vinte pessoas não é o meu forte.",
      bank: [
        "Breakfast",
        "is",
        "a",
        "piece",
        "of",
        "cake",
        "for",
        "me",
        "but",
        "cooking",
        "for",
        "twenty",
        "people",
        "isn't",
        "my",
        "cup",
        "of",
        "tea",
        "piece of",
        "cake of",
      ],
      answer: [
        "Breakfast",
        "is",
        "a",
        "piece",
        "of",
        "cake",
        "for",
        "me",
        "but",
        "cooking",
        "for",
        "twenty",
        "people",
        "isn't",
        "my",
        "cup",
        "of",
        "tea",
      ],
      explanation:
        "As duas expressões aparecem juntas: “a piece of cake” para o fácil e “not my cup of tea” para o que não é seu forte.",
    },
    {
      kind: "falar",
      prompt: "Don't worry, it's a piece of cake.",
      pt: "Não se preocupe, é moleza.",
      tip: "“Piece of cake” sai como “PÍS-ov-KÊIK”. A expressão toda tem o mesmo ritmo, sem pausa.",
    },
    {
      kind: "falar",
      prompt: "Break a leg at the presentation!",
      pt: "Boa sorte na apresentação!",
      tip: "O tom é de incentivo, não de preocupação. A entonação sobe levemente no fim.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to be on the same page",
      options: [
        "estar alinhado",
        "estar na mesma página do livro",
        "estar atrasado",
        "ter a mesma idade",
      ],
      answer: 0,
      explanation:
        "“On the same page” quer dizer que as pessoas entendem o assunto da mesma forma.",
    },
    {
      kind: "ouvirPalavra",
      audio: "Break a leg",
      options: ["boa sorte", "quebre a perna", "cuidado", "vai dar errado"],
      answer: 0,
      explanation:
        "Apesar do literal, “break a leg” é puro incentivo — nunca um aviso de perigo.",
    },
    {
      kind: "ouvirFrase",
      audio: "Don't worry, it's a piece of cake.",
      pt: "Não se preocupe, é moleza.",
      options: [
        "Don't worry, it's a piece of cake.",
        "Don't worry, it's a piece of bread.",
        "Don't worry, it's a piece of case.",
        "Don't worry, it's a peace of cake.",
      ],
      answer: 0,
      explanation:
        "A troca de “cake” por “bread” quebra a expressão. E “peace” é paz, sem relação com a ideia.",
    },
    {
      kind: "ouvirFrase",
      audio: "It's not my cup of tea.",
      pt: "Não é do meu gosto.",
      options: [
        "It's not my cup of tea.",
        "It's not my cup of coffee.",
        "It's not my glass of tea.",
        "It's not my piece of tea.",
      ],
      answer: 0,
      explanation:
        "Ouça “cup of tea”, a combinação fixa. Trocar “tea” por outra bebida descaracteriza a expressão.",
    },
  ],
}
