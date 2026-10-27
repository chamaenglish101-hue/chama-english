import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Was e were: falando do passado — 10 perguntas. */
export const B19_PRACTICE: LessonPracticeContent = {
  id: "b19",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "We ___ at home yesterday because it was raining.",
      hint: "Estávamos em casa ontem porque estava chovendo.",
      options: ["were", "was", "are", "did"],
      answer: 0,
      explanation:
        "“We” e “they” pedem “were”. “Was” serve para I, he, she e it — nunca para we.",
    },
    {
      kind: "completar",
      prompt: "___ she tired after the trip?",
      hint: "Ela estava cansada depois da viagem?",
      options: ["Was", "Were", "Did", "Is"],
      answer: 0,
      explanation:
        "Na pergunta, “was” vai direto para o começo. Com was e were não se usa “did”.",
    },
    {
      kind: "traduzir",
      prompt: "Eu nasci em Salvador.",
      bank: ["I", "was", "born", "in", "Salvador", "were", "am", "did"],
      answer: ["I", "was", "born", "in", "Salvador"],
      explanation:
        "“I was born” é a fórmula fixa de nascimento. O verbo vai no singular porque o sujeito é “I”.",
    },
    {
      kind: "traduzir",
      prompt: "Eles estavam na festa ontem à noite.",
      bank: [
        "They",
        "were",
        "at",
        "the",
        "party",
        "last",
        "night",
        "was",
        "in",
      ],
      answer: ["They", "were", "at", "the", "party", "last", "night"],
      explanation:
        "“Were” porque o sujeito é “they”, e “last night” fecha o tempo no passado. Sem preposição antes de “last”.",
    },
    {
      kind: "falar",
      prompt: "I was born in Salvador and I was a happy child.",
      pt: "Eu nasci em Salvador e era uma criança feliz.",
      tip: "“Was” soa como “uóz”, curto. Ligue “I was” numa só palavra: “ai-uóz”.",
    },
    {
      kind: "falar",
      prompt: "Were you at the party last night? — Yes, I was.",
      pt: "Você estava na festa ontem à noite? — Sim, estava.",
      tip: "Na pergunta, “were you” junta em “uér-iu”. A resposta repete o mesmo verbo: “Yes, I was.”",
    },

    {
      kind: "ouvirPalavra",
      audio: "yesterday",
      options: ["ontem", "amanhã", "hoje à noite", "na semana passada"],
      answer: 0,
      explanation:
        "“Yesterday” é ontem. Repare no “-day” final, que soa fraco, quase “-dei”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "when I was a child",
      options: [
        "quando eu era criança",
        "quando eu tiver filhos",
        "quando eu trabalhava",
        "quando eu morava lá",
      ],
      answer: 0,
      explanation:
        "“Child” é criança. A expressão toda é a abertura clássica de histórias de infância em inglês.",
    },
    {
      kind: "ouvirFrase",
      audio: "They were at the party last night.",
      pt: "Eles estavam na festa ontem à noite.",
      options: [
        "They were at the party last night.",
        "They were at the party tonight.",
        "They are at the party last night.",
        "They were at the office last night.",
      ],
      answer: 0,
      explanation:
        "“Were” no passado com “last night” no fim. “Are” com “last night” seria uma mistura impossível de tempos.",
    },
    {
      kind: "ouvirFrase",
      audio: "Was the movie good? — It was amazing.",
      pt: "O filme era bom? — Era incrível.",
      options: [
        "Was the movie good? — It was amazing.",
        "Was the movie long? — It was amazing.",
        "Were the movies good? — They were amazing.",
        "Is the movie good? — It is amazing.",
      ],
      answer: 0,
      explanation:
        "Ouça “Was” no início, no singular. Todo o resto da troca acontece no passado.",
    },
  ],
}
