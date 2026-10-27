import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Preposições de lugar: in, on, under — 10 perguntas. */
export const B13_PRACTICE: LessonPracticeContent = {
  id: "b13",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "The keys are ___ the table.",
      hint: "As chaves estão sobre a mesa.",
      options: ["on", "in", "under", "between"],
      answer: 0,
      explanation:
        "Sobre uma superfície, em contato com ela, usa-se “on”. “In” seria dentro e “under” embaixo.",
    },
    {
      kind: "completar",
      prompt: "My backpack is ___ the chair.",
      hint: "Minha mochila está embaixo da cadeira.",
      options: ["under", "on", "in", "behind"],
      answer: 0,
      explanation:
        "“Under” é embaixo. A mochila está no chão, debaixo da cadeira — não sobre ela.",
    },
    {
      kind: "traduzir",
      prompt: "O banco fica entre a farmácia e a escola.",
      bank: [
        "The",
        "bank",
        "is",
        "between",
        "the",
        "pharmacy",
        "and",
        "the",
        "school",
        "behind",
        "next",
      ],
      answer: [
        "The",
        "bank",
        "is",
        "between",
        "the",
        "pharmacy",
        "and",
        "the",
        "school",
      ],
      explanation:
        "“Between” sempre aparece com dois pontos: “between A and B”. Nunca “between of”.",
    },
    {
      kind: "traduzir",
      prompt: "Há um carro na frente da minha casa.",
      bank: [
        "There",
        "is",
        "a",
        "car",
        "in",
        "front",
        "of",
        "my",
        "house",
        "behind",
        "on",
      ],
      answer: ["There", "is", "a", "car", "in", "front", "of", "my", "house"],
      explanation:
        "“In front of” tem três palavras e não se abrevia. “Behind” é o oposto, atrás.",
    },
    {
      kind: "falar",
      prompt: "The keys are on the table.",
      pt: "As chaves estão sobre a mesa.",
      tip: "Ligue “keys are” em “qui-zar”. O “s” de keys soa como “z”.",
    },
    {
      kind: "falar",
      prompt: "My backpack is under the chair.",
      pt: "Minha mochila está embaixo da cadeira.",
      tip: "O acento de “under” está na primeira sílaba: “ÂN-der”, com “r” fraco no fim.",
    },

    {
      kind: "ouvirPalavra",
      audio: "behind",
      options: ["atrás de", "embaixo de", "na frente de", "ao lado de"],
      answer: 0,
      explanation:
        "“Behind” é atrás. A pronúncia é “bi-RÁINd”, com a força no meio.",
    },
    {
      kind: "ouvirPalavra",
      audio: "between",
      options: ["entre", "dentro", "sobre", "perto"],
      answer: 0,
      explanation:
        "“Between” é entre dois pontos. Para mais de dois, o inglês usa “among”.",
    },
    {
      kind: "ouvirFrase",
      audio: "The keys are on the table.",
      pt: "As chaves estão sobre a mesa.",
      options: [
        "The keys are on the table.",
        "The keys are under the table.",
        "The keys are on the chair.",
        "The car keys are in the drawer.",
      ],
      answer: 0,
      explanation:
        "A preposição “on” muda tudo. Ouça também “table”, que aparece nas três primeiras opções.",
    },
    {
      kind: "ouvirFrase",
      audio: "The bank is between the pharmacy and the school.",
      pt: "O banco fica entre a farmácia e a escola.",
      options: [
        "The bank is between the pharmacy and the school.",
        "The bank is next to the pharmacy and the school.",
        "The bank is between the pharmacy and the park.",
        "The bakery is between the pharmacy and the school.",
      ],
      answer: 0,
      explanation:
        "Três palavras-chave: “bank”, “between” e “school”. Qualquer troca muda o endereço.",
    },
  ],
}
