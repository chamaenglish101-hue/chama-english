import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Phrasal verbs de múltiplos sentidos — 10 perguntas. */
export const A23_PRACTICE: LessonPracticeContent = {
  id: "a23",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "The flight ___ off on time.",
      hint: "O voo decolou no horário.",
      options: ["took", "made", "ran", "put"],
      answer: 0,
      explanation:
        "“Take off” com aviões significa decolar; com roupas, tirar; com projetos, deslanchar.",
    },
    {
      kind: "completar",
      prompt: "We ran ___ of coffee this morning.",
      hint: "Acabou o café esta manhã.",
      options: ["out", "into", "off", "over"],
      answer: 0,
      explanation:
        "“Run out of” significa ficar sem algo. Se fosse “run into”, o sentido seria encontrar por acaso.",
    },
    {
      kind: "traduzir",
      prompt: "O canal dela decolou depois daquele vídeo.",
      bank: [
        "Her",
        "channel",
        "took",
        "off",
        "after",
        "that",
        "video",
        "takes",
        "run",
      ],
      answer: ["Her", "channel", "took", "off", "after", "that", "video"],
      explanation:
        "Aqui “take off” tem sentido figurado de crescer rápido, o mesmo verbo usado para aviões.",
    },
    {
      kind: "traduzir",
      prompt: "Encontrei o Pedro por acaso no aeroporto.",
      bank: [
        "I",
        "ran",
        "into",
        "Pedro",
        "at",
        "the",
        "airport",
        "run",
        "out of",
      ],
      answer: ["I", "ran", "into", "Pedro", "at", "the", "airport"],
      explanation:
        "“Run into someone” é encontrar por acaso, sem planejamento algum.",
    },
    {
      kind: "falar",
      prompt: "The flight took off on time.",
      pt: "O voo decolou no horário.",
      tip: "“Took off” soa “tuk-ÓF”. Junte as duas palavras, sem pausa entre elas.",
    },
    {
      kind: "falar",
      prompt: "We ran out of coffee this morning.",
      pt: "Acabou o café esta manhã.",
      tip: "“Ran out of” flui como “ran-ÁU-rov”. Bem ligado, o “of” quase sem som de “v”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "take off",
      options: [
        "decolar; deslanchar; tirar (roupa)",
        "desligar",
        "assumir o controle",
        "deixar de lado",
      ],
      answer: 0,
      explanation:
        "“Take off” muda de sentido pelo contexto: avião, projeto ou roupa — o núcleo é sempre “sair de onde está”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "put down",
      options: [
        "criticar; anotar; baixar",
        "colocar de pé",
        "desistir",
        "guardar dinheiro",
      ],
      answer: 0,
      explanation:
        "“Put down” é um dos phrasal verbs mais polissêmicos: criticar alguém, anotar algo ou abaixar um objeto.",
    },
    {
      kind: "ouvirFrase",
      audio: "Her channel took off after that video.",
      pt: "O canal dela decolou depois daquele vídeo.",
      options: [
        "Her channel took off after that video.",
        "Her channel took off after those video.",
        "Her channel took of after that video.",
        "Her channel takes off after that video.",
      ],
      answer: 0,
      explanation:
        "“Take off” sempre com duas letras F. E “that video” fica no singular para combinar com “that”.",
    },
    {
      kind: "ouvirFrase",
      audio: "We ran out of coffee this morning.",
      pt: "Acabou o café esta manhã.",
      options: [
        "We ran out of coffee this morning.",
        "We ran out coffee this morning.",
        "We ran of coffee this morning.",
        "We run out of coffee this morning.",
      ],
      answer: 0,
      explanation:
        "O phrasal verb “run out of” exige as três partes, e o passado “ran” acompanha “this morning”.",
    },
  ],
}
