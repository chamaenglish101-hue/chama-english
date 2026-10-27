import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Debater sem atacar pessoas — 10 perguntas. */
export const A46_PRACTICE: LessonPracticeContent = {
  id: "a46",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I ___ your point about deadlines, but the quality cost is real.",
      hint: "Entendo seu ponto sobre prazos, mas o custo na qualidade é real.",
      options: ["take", "takes", "taking", "took"],
      answer: 0,
      explanation:
        "“I take your point” reconhece o argumento do outro antes de discordar — debate sem ataque pessoal.",
    },
    {
      kind: "completar",
      prompt:
        "You've convinced me on the first part, I'm not ___ yet on the second.",
      hint: "Você me convenceu na primeira parte, mas ainda não na segunda.",
      options: ["there", "here", "that", "so"],
      answer: 0,
      explanation:
        "“I'm not there yet” mostra abertura sem ceder: você aceita uma parte e mantém a outra em discussão.",
    },
    {
      kind: "traduzir",
      prompt: "Sobre seu ponto a respeito de custos — isso foi há três anos.",
      bank: [
        "On",
        "your",
        "point",
        "about",
        "cost",
        "that",
        "was",
        "three",
        "years",
        "ago",
        "in",
        "since",
      ],
      answer: [
        "On",
        "your",
        "point",
        "about",
        "cost",
        "that",
        "was",
        "three",
        "years",
        "ago",
      ],
      explanation:
        "“On your point about…” retoma o argumento alheio com respeito e o situa no tempo.",
    },
    {
      kind: "traduzir",
      prompt: "Entendo seu ponto, mas o custo na qualidade é real.",
      bank: [
        "I",
        "take",
        "your",
        "point",
        "but",
        "the",
        "quality",
        "cost",
        "is",
        "real",
        "takes",
        "costs",
      ],
      answer: [
        "I",
        "take",
        "your",
        "point",
        "but",
        "the",
        "quality",
        "cost",
        "is",
        "real",
      ],
      explanation:
        "A concessão vem primeiro, com “but” introduzindo a objeção de forma equilibrada.",
    },
    {
      kind: "falar",
      prompt:
        "I take your point about deadlines, but the quality cost is real.",
      pt: "Entendo seu ponto sobre prazos, mas o custo na qualidade é real.",
      tip: "Fale a primeira parte com tom ameno e endureça só em “is real”: é a objeção.",
    },
    {
      kind: "falar",
      prompt:
        "You've convinced me on the first part, I'm not there yet on the second.",
      pt: "Você me convenceu na primeira parte, mas ainda não na segunda.",
      tip: "“I'm not there yet” soa “aim-not-dér-iet”. Curto e honesto, sem soar teimoso.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I take your point",
      options: [
        "entendo seu ponto",
        "levo seu ponto comigo",
        "discordo do seu ponto",
        "anotei seu ponto",
      ],
      answer: 0,
      explanation:
        "“I take your point” é a fórmula que demonstra escuta ativa antes de qualquer contra-argumento.",
    },
    {
      kind: "ouvirPalavra",
      audio: "I'm not there yet",
      options: [
        "ainda não estou convencido",
        "ainda não cheguei lá",
        "não vou a lugar nenhum",
        "estou quase pronto",
      ],
      answer: 0,
      explanation:
        "Em debates, “I'm not there yet” significa que o argumento ainda não convenceu — sem fechar a porta.",
    },
    {
      kind: "ouvirFrase",
      audio: "I take your point about deadlines, but the quality cost is real.",
      pt: "Entendo seu ponto sobre prazos, mas o custo na qualidade é real.",
      options: [
        "I take your point about deadlines, but the quality cost is real.",
        "I take your point in deadlines, but the quality cost is real.",
        "I take your point about deadlines, but the quality cost are real.",
        "I taking your point about deadlines, but the quality cost is real.",
      ],
      answer: 0,
      explanation:
        "A preposição é “about”, e “the quality cost” no singular pede “is”.",
    },
    {
      kind: "ouvirFrase",
      audio: "On your point about cost — that was three years ago.",
      pt: "Sobre seu ponto a respeito de custos — isso foi há três anos.",
      options: [
        "On your point about cost — that was three years ago.",
        "In your point about cost — that was three years ago.",
        "On your point about cost — that was three years before.",
        "On your point about cost — that were three years ago.",
      ],
      answer: 0,
      explanation:
        "“On your point” retoma o argumento, e “three years ago” é a forma fixa com o passado simples.",
    },
  ],
}
