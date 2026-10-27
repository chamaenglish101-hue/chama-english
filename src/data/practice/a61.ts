import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Gírias e linguagem jovem — 10 perguntas. */
export const A61_PRACTICE: LessonPracticeContent = {
  id: "a61",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "I'm ___ interested in that role, but I'd rather keep it quiet for now.",
      hint: "Estou discretamente interessado nessa vaga, mas prefiro não comentar por enquanto.",
      options: ["low-key", "high-key", "no cap", "ghosted"],
      answer: 0,
      explanation:
        "“Low-key” significa de forma discreta, sem alarde — oposto de “high-key”, que intensifica.",
    },
    {
      kind: "completar",
      prompt: "She ___ the recruiter after the second interview.",
      hint: "Ela desapareceu, ignorou o recrutador, depois da segunda entrevista.",
      options: ["ghosted", "slayed", "capped", "vibed"],
      answer: 0,
      explanation:
        "“To ghost someone” é cortar contato sem aviso — sentido muito usado no mundo do trabalho hoje.",
    },
    {
      kind: "traduzir",
      prompt: "Sinceramente, o discurso dela foi impecável. (gíria: no cap)",
      bank: ["No", "cap", "her", "speech", "was", "flawless", "caps", "flaw"],
      answer: ["No", "cap", "her", "speech", "was", "flawless"],
      explanation:
        "“No cap” significa “sem mentira, falando sério”; vem no começo para reforçar a afirmação.",
    },
    {
      kind: "traduzir",
      prompt: "Ela desapareceu depois da segunda entrevista.",
      bank: [
        "She",
        "ghosted",
        "the",
        "recruiter",
        "after",
        "the",
        "second",
        "interview",
        "ghost",
        "second's",
      ],
      answer: [
        "She",
        "ghosted",
        "the",
        "recruiter",
        "after",
        "the",
        "second",
        "interview",
      ],
      explanation:
        "“She ghosted the recruiter” — verbo regular no passado, com /ɪd/ final audível.",
    },
    {
      kind: "falar",
      prompt: "No cap, her speech was flawless.",
      pt: "Falando sério, o discurso dela foi impecável.",
      tip: "“No cap” sai rápido e sem acento; o peso da frase está em “FLAWless”.",
    },
    {
      kind: "falar",
      prompt: "I'm low-key interested, but I'd rather keep it quiet.",
      pt: "Estou discretamente interessado, mas prefiro não comentar.",
      tip: "Ligue “low-key” numa palavra só, com acento fraco em “key”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "low-key",
      options: [
        "de forma discreta, sem alarde",
        "com chave baixa",
        "muito intensamente",
        "em segredo absoluto",
      ],
      answer: 0,
      explanation:
        "“Low-key” suaviza a afirmação: em vez de dizer “muito”, diz discretamente, quase sem perceber.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to ghost someone",
      options: [
        "cortar contato sem avisar",
        "assustar alguém",
        "aparecer de surpresa",
        "seguir alguém em silêncio",
      ],
      answer: 0,
      explanation:
        "“To ghost” é desaparecer da comunicação sem explicação — vale para trabalho e relações pessoais.",
    },
    {
      kind: "ouvirFrase",
      audio: "No cap, her speech was flawless.",
      pt: "Falando sério, o discurso dela foi impecável.",
      options: [
        "No cap, her speech was flawless.",
        "No cap, her speech were flawless.",
        "No cap, her speech was flaw.",
        "No caps, her speech was flawless.",
      ],
      answer: 0,
      explanation:
        "A expressão é fixa no singular (“no cap”) e “speech” pede “was”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Slang ages fast, so use it with care.",
      pt: "A gíria envelhece rápido, então use com cuidado.",
      options: [
        "Slang ages fast, so use it with care.",
        "Slang age fast, so use it with care.",
        "Slang ages fast, so use it with cares.",
        "Slangs ages fast, so use it with care.",
      ],
      answer: 0,
      explanation:
        "“Slang” é incontável e fica no singular; o verbo correspondente é “ages”.",
    },
  ],
}
