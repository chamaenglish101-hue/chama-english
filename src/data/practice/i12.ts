import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Discurso indireto: repassar o que alguém disse — 10 perguntas. */
export const I12_PRACTICE: LessonPracticeContent = {
  id: "i12",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "She said she ___ tired and wanted to go home.",
      hint: "Ela disse que estava cansada e queria ir para casa.",
      options: ["was", "is", "were", "has"],
      answer: 0,
      explanation:
        "No discurso indireto o presente recua um passo: “I am tired” vira “she was tired”.",
    },
    {
      kind: "completar",
      prompt: "He told me he ___ finish the report the next day.",
      hint: "Ele me disse que terminaria o relatório no dia seguinte.",
      options: ["would", "will", "is going to", "did"],
      answer: 0,
      explanation:
        "“Will” recua para “would” quando o verbo que introduz está no passado: “he would finish”.",
    },
    {
      kind: "traduzir",
      prompt: "Ela disse que morava em Recife.",
      bank: [
        "She",
        "said",
        "she",
        "lived",
        "in",
        "Recife",
        "lives",
        "told",
        "that",
      ],
      answer: ["She", "said", "she", "lived", "in", "Recife"],
      explanation:
        "“Lives” recua para “lived”. Sem a pessoa a quem se fala, o verbo é “said”, não “told”.",
    },
    {
      kind: "traduzir",
      prompt: "Ele me disse que ia viajar na semana seguinte.",
      bank: [
        "He",
        "told",
        "me",
        "he",
        "was",
        "going",
        "to",
        "travel",
        "the",
        "following",
        "week",
        "will",
        "next",
      ],
      answer: [
        "He",
        "told",
        "me",
        "he",
        "was",
        "going",
        "to",
        "travel",
        "the",
        "following",
        "week",
      ],
      explanation:
        "Com “me” o verbo é “told”; e “next week” vira “the following week” no discurso indireto.",
    },
    {
      kind: "falar",
      prompt: "She said she was tired and wanted to go home.",
      pt: "Ela disse que estava cansada e queria ir para casa.",
      tip: "“Said she was” liga em “SED-chi-uós”. Não pule o “she”: em inglês o sujeito nunca é omitido.",
    },
    {
      kind: "falar",
      prompt: "He told me he would finish the report the next day.",
      pt: "Ele me disse que terminaria o relatório no dia seguinte.",
      tip: "“Told me” soa “TÓULD-mi”, com o “d” bem suave. “Would” é uma sílaba: “uud”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "she said",
      options: [
        "ela disse",
        "ela falou com alguém",
        "ela contou para mim",
        "ela perguntou",
      ],
      answer: 0,
      explanation:
        "“Said” não precisa de pessoa depois. Se houver alguém com quem se falou, use “told” + essa pessoa.",
    },
    {
      kind: "ouvirPalavra",
      audio: "the next day",
      options: [
        "no dia seguinte",
        "no dia anterior",
        "hoje",
        "nessa mesma noite",
      ],
      answer: 0,
      explanation:
        "No discurso indireto, “tomorrow” vira “the next day” ou “the following day”. O passado muda as referências de tempo.",
    },
    {
      kind: "ouvirFrase",
      audio: "She said she was tired.",
      pt: "Ela disse que estava cansada.",
      options: [
        "She said she was tired.",
        "She said she is tired.",
        "She told she was tired.",
        "She said she was angry.",
      ],
      answer: 0,
      explanation:
        "O recuo de tempo é obrigatório quando o verbo introdutor está no passado. E “told” precisaria de uma pessoa depois.",
    },
    {
      kind: "ouvirFrase",
      audio: "He told me he would call back later.",
      pt: "Ele me disse que ligaria de volta mais tarde.",
      options: [
        "He told me he would call back later.",
        "He told me he will call back later.",
        "He said me he would call back later.",
        "He told me he would come back later.",
      ],
      answer: 0,
      explanation:
        "Ouça “told me” e “would call back”. “Said me” nunca existe em inglês: com pessoa, o verbo é sempre “told”.",
    },
  ],
}
