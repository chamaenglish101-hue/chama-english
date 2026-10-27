import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Família e pessoas próximas — 10 perguntas. */
export const B09_PRACTICE: LessonPracticeContent = {
  id: "b09",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "I have two ___ and one sister.",
      hint: "Tenho dois irmãos e uma irmã.",
      options: ["brothers", "brother", "brothers'", "brethren"],
      answer: 0,
      explanation:
        "Dois irmãos pedem plural: brothers. “Brethren” é uma forma antiga, usada só em contextos religiosos.",
    },
    {
      kind: "completar",
      prompt: "My ___ live in the countryside.",
      hint: "Meus avós moram no interior.",
      options: ["grandparents", "grandparent", "grandfather", "parents"],
      answer: 0,
      explanation:
        "“Grandparents” são os avós, os dois. Só o avô é “grandfather”; os pais são “parents”.",
    },
    {
      kind: "traduzir",
      prompt: "Você tem filhos?",
      bank: ["Do", "you", "have", "any", "children", "childs"],
      answer: ["Do", "you", "have", "any", "children"],
      explanation:
        "Pergunta no presente com “do”. E o plural de child é children — “childs” não existe.",
    },
    {
      kind: "traduzir",
      prompt: "Minha prima mora com os sogros dela.",
      bank: [
        "My",
        "cousin",
        "lives",
        "with",
        "her",
        "in-laws",
        "his",
        "parents",
      ],
      answer: ["My", "cousin", "lives", "with", "her", "in-laws"],
      explanation:
        "“In-laws” é a família do cônjuge: sogros, cunhados. O hífen faz parte da palavra.",
    },
    {
      kind: "falar",
      prompt: "I have two brothers and one sister.",
      pt: "Tenho dois irmãos e uma irmã.",
      tip: "Ligue “have two” como “hav-tu”. O “h” de have é soprado, mas bem curto.",
    },
    {
      kind: "falar",
      prompt: "Do you have any children?",
      pt: "Você tem filhos?",
      tip: "“Children” tem dois pedaços: “TCHIL-dren”. A vogal do fim é fraca, quase “dran”.",
    },

    {
      kind: "ouvirPalavra",
      audio: "parents",
      options: ["pais", "parentes", "avós", "padrinhos"],
      answer: 0,
      explanation:
        "“Parents” são o pai e a mãe. Parentes em geral são “relatives” — falso amigo clássico.",
    },
    {
      kind: "ouvirPalavra",
      audio: "cousin",
      options: [
        "primo ou prima",
        "sobrinho ou sobrinha",
        "cunhado ou cunhada",
        "tio ou tia",
      ],
      answer: 0,
      explanation:
        "“Cousin” serve para primo e prima, sem mudar a palavra. Na fala, o “s” soa como “z”.",
    },
    {
      kind: "ouvirFrase",
      audio: "I have two brothers and one sister.",
      pt: "Tenho dois irmãos e uma irmã.",
      options: [
        "I have two brothers and one sister.",
        "I have two sisters and one brother.",
        "I have two brothers and one cousin.",
        "I had two brothers and one sister.",
      ],
      answer: 0,
      explanation:
        "Conte com atenção: dois irmãos e uma irmã. A ordem e o número mudam de opção para opção.",
    },
    {
      kind: "ouvirFrase",
      audio: "My grandparents live in the countryside.",
      pt: "Meus avós moram no interior.",
      options: [
        "My grandparents live in the countryside.",
        "My grandparents live in the city.",
        "My parents live in the countryside.",
        "My grandparents lived in the countryside.",
      ],
      answer: 0,
      explanation:
        "É “grandparents”, no plural, com “live” no presente: eles moram lá hoje.",
    },
  ],
}
