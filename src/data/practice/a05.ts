import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Mixed conditionals: hipóteses que cruzam passado e presente — 10 perguntas. */
export const A05_PRACTICE: LessonPracticeContent = {
  id: "a05",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "If I had taken that job, I ___ living abroad now.",
      hint: "Se eu tivesse aceitado aquele trabalho, estaria morando fora agora.",
      options: ["would be", "would have been", "will be", "am"],
      answer: 0,
      explanation:
        "A condição está no passado e a consequência no presente: “would be living”, com o “now” confirmando o tempo.",
    },
    {
      kind: "completar",
      prompt: "If he ___ so stubborn, he would have accepted the offer.",
      hint: "Se ele não fosse tão teimoso, teria aceitado a proposta.",
      options: ["weren't", "hadn't been", "isn't", "didn't"],
      answer: 0,
      explanation:
        "O traço atual explica o erro passado: “if he weren't” com “would have accepted”. É o caminho inverso da mistura.",
    },
    {
      kind: "traduzir",
      prompt: "Se eu tivesse começado antes, estaria mais adiantado.",
      bank: [
        "If",
        "I",
        "had",
        "started",
        "earlier",
        "I",
        "would",
        "be",
        "further",
        "along",
        "now",
        "have",
        "start",
      ],
      answer: [
        "If",
        "I",
        "had",
        "started",
        "earlier",
        "I",
        "would",
        "be",
        "further",
        "along",
        "now",
      ],
      explanation:
        "Condição no passado com consequência no presente: “had started” + “would be”. Sem “now”, a frase ficaria ambígua.",
    },
    {
      kind: "traduzir",
      prompt: "Se ela fosse mais organizada, teria enviado ontem.",
      bank: [
        "If",
        "she",
        "were",
        "more",
        "organized",
        "she",
        "would",
        "have",
        "sent",
        "it",
        "yesterday",
        "is",
        "sends",
      ],
      answer: [
        "If",
        "she",
        "were",
        "more",
        "organized",
        "she",
        "would",
        "have",
        "sent",
        "it",
        "yesterday",
      ],
      explanation:
        "“Were” descreve o jeito atual dela e “would have sent” aponta o que falhou ontem.",
    },
    {
      kind: "falar",
      prompt: "If I had taken that job, I would be living abroad now.",
      pt: "Se eu tivesse aceitado aquele trabalho, estaria morando fora agora.",
      tip: "Destaque o “now” no fim: é ele que mostra que a consequência ficou no presente.",
    },
    {
      kind: "falar",
      prompt: "If he weren't so stubborn, he would have accepted the offer.",
      pt: "Se ele não fosse tão teimoso, teria aceitado a proposta.",
      tip: "“Weren't” soa “uê-rãnt”. O “would have accepted” emenda em “uud-av-ak-SÉP-tid”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "would be living",
      options: ["estaria morando", "teria morado", "estará morando", "mora"],
      answer: 0,
      explanation:
        "“Would be living” é a consequência no presente de uma condição passada — o coração das mixed conditionals.",
    },
    {
      kind: "ouvirPalavra",
      audio: "back then",
      options: ["naquela época", "até então", "de volta", "a partir de então"],
      answer: 0,
      explanation:
        "“Back then” localiza a condição no passado, enquanto “now” localiza a consequência no presente.",
    },
    {
      kind: "ouvirFrase",
      audio: "If I had taken that job, I would be living abroad now.",
      pt: "Se eu tivesse aceitado aquele trabalho, estaria morando fora agora.",
      options: [
        "If I had taken that job, I would be living abroad now.",
        "If I took that job, I would be living abroad now.",
        "If I had taken that job, I would have lived abroad now.",
        "If I had taken that job, I would be working abroad now.",
      ],
      answer: 0,
      explanation:
        "“Had taken” para a condição passada e “would be living” para o resultado presente — a marca do “now” fecha a estrutura.",
    },
    {
      kind: "ouvirFrase",
      audio: "If he weren't so stubborn, he would have accepted the offer.",
      pt: "Se ele não fosse tão teimoso, teria aceitado a proposta.",
      options: [
        "If he weren't so stubborn, he would have accepted the offer.",
        "If he isn't so stubborn, he would have accepted the offer.",
        "If he hadn't been so stubborn, he would have accepted the offer.",
        "If he weren't so stubborn, he would accept the offer.",
      ],
      answer: 0,
      explanation:
        "O traço permanente no passado do verbo “to be” é “were”, não “was”; por isso “weren't” no singular aqui.",
    },
  ],
}
