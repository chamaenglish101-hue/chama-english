import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Present perfect: I have done — 10 perguntas. */
export const I06_PRACTICE: LessonPracticeContent = {
  id: "i06",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I ___ never been to Japan, but I'd love to go.",
      hint: "Nunca estive no Japão, mas adoraria ir.",
      options: ["have", "has", "am", "did"],
      answer: 0,
      explanation:
        "Com “I” o auxiliar é “have”: “I have never been”. O particípio de “be” é “been”.",
    },
    {
      kind: "completar",
      prompt: "She has just ___ the report, so she's free now.",
      hint: "Ela acabou de terminar o relatório, então está livre agora.",
      options: ["finished", "finish", "finishing", "finishes"],
      answer: 0,
      explanation:
        "Depois de “has” vem o particípio: “finished”. “Just” indica que acabou de acontecer.",
    },
    {
      kind: "traduzir",
      prompt: "Visitei Londres duas vezes na vida.",
      bank: ["I", "have", "visited", "London", "twice", "visit", "did", "in"],
      answer: ["I", "have", "visited", "London", "twice"],
      explanation:
        "Experiência de vida, sem data, pede “have visited”. “In” não entra porque nenhum momento é citado.",
    },
    {
      kind: "traduzir",
      prompt: "Você já comeu sushi? — Não, nunca comi.",
      bank: [
        "Have",
        "you",
        "ever",
        "eaten",
        "sushi",
        "No",
        "I've",
        "never",
        "eaten",
        "it",
        "ate",
      ],
      answer: [
        "Have",
        "you",
        "ever",
        "eaten",
        "sushi",
        "No",
        "I've",
        "never",
        "eaten",
        "it",
      ],
      explanation:
        "“Ever” na pergunta e “never” na resposta, sempre com o particípio “eaten” — nunca “ate”.",
    },
    {
      kind: "falar",
      prompt: "I have visited London twice and I loved it.",
      pt: "Visitei Londres duas vezes e adorei.",
      tip: "“Have visited” junta em “av-VÍ-zi-tid”. O “have” fica fraco, quase engolido.",
    },
    {
      kind: "falar",
      prompt: "Have you ever eaten sushi? — No, I've never eaten it.",
      pt: "Você já comeu sushi? — Não, nunca comi.",
      tip: "“Eaten” tem dois tempos: “Í-ten”. O particípio nunca vira “ate” nessa estrutura.",
    },
    {
      kind: "ouvirPalavra",
      audio: "ever",
      options: ["já, alguma vez", "nunca", "sempre", "ainda"],
      answer: 0,
      explanation:
        "“Ever” só aparece em perguntas e significa “alguma vez na vida”. Nas respostas negativas o par é “never”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "already",
      options: ["já", "ainda", "nunca", "acabou de"],
      answer: 0,
      explanation:
        "“Already” marca algo concluído antes do esperado. “Yet” é o oposto e vive em perguntas e negativas.",
    },
    {
      kind: "ouvirFrase",
      audio: "I have never been to Japan.",
      pt: "Nunca estive no Japão.",
      options: [
        "I have never been to Japan.",
        "I have ever been to Japan.",
        "I have never gone to Japan.",
        "I had never been to Japan.",
      ],
      answer: 0,
      explanation:
        "A combinação é “have never been”. Com “never” não se usa “ever” e, para lugares visitados, “been” é o particípio certo.",
    },
    {
      kind: "ouvirFrase",
      audio: "She has just finished the report.",
      pt: "Ela acabou de terminar o relatório.",
      options: [
        "She has just finished the report.",
        "She has just started the report.",
        "She had just finished the report.",
        "He has just finished the report.",
      ],
      answer: 0,
      explanation:
        "“Has just finished” mostra o resultado agora. “Started” inverte o sentido e “had” puxaria para antes de outro passado.",
    },
  ],
}
