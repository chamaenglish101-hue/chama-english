import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Britânico x americano: vocabulário — 10 perguntas. */
export const A60_PRACTICE: LessonPracticeContent = {
  id: "a60",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "In British English you take the ___; in American English, the elevator.",
      hint: "No inglês britânico você pega o “lift”; no americano, o “elevator”.",
      options: ["lift", "life", "raise", "hoist"],
      answer: 0,
      explanation:
        "“Lift” é a versão britânica; “elevator” é a americana — mesmo objeto, palavras diferentes.",
    },
    {
      kind: "completar",
      prompt: "In British English, “___” means underwear, so be careful.",
      hint: "No inglês britânico, “pants” significa cueca, então cuidado.",
      options: ["pants", "trousers", "shorts", "jeans"],
      answer: 0,
      explanation:
        "Nos Estados Unidos “pants” são calças; no Reino Unido, é roupa íntima.",
    },
    {
      kind: "traduzir",
      prompt:
        "Pegue o elevador até o terceiro andar e faça fila no balcão. (britânico)",
      bank: [
        "Take",
        "the",
        "lift",
        "to",
        "the",
        "third",
        "floor",
        "and",
        "queue",
        "at",
        "the",
        "desk",
        "elevator",
        "line",
      ],
      answer: [
        "Take",
        "the",
        "lift",
        "to",
        "the",
        "third",
        "floor",
        "and",
        "queue",
        "at",
        "the",
        "desk",
      ],
      explanation:
        "“Lift” e “queue” são as escolhas britânicas para elevador e fila.",
    },
    {
      kind: "traduzir",
      prompt: "Pegue o elevador e entre na fila no balcão. (americano)",
      bank: [
        "Take",
        "the",
        "elevator",
        "and",
        "get",
        "in",
        "line",
        "at",
        "the",
        "desk",
        "lift",
        "queue",
      ],
      answer: [
        "Take",
        "the",
        "elevator",
        "and",
        "get",
        "in",
        "line",
        "at",
        "the",
        "desk",
      ],
      explanation:
        "“Elevator” e “in line” são as formas americanas do mesmo pedido.",
    },
    {
      kind: "falar",
      prompt: "I'll see you at half seven.",
      pt: "Te vejo às 7h30. (britânico)",
      tip: "“Half seven” é 7h30 no Reino Unido, não 6h30. Fale “half SEven” sem pausa.",
    },
    {
      kind: "falar",
      prompt: "Take the elevator and get in line at the desk.",
      pt: "Pegue o elevador e entre na fila no balcão. (americano)",
      tip: "Ligue “get in line” numa batida só: é expressão fixa, sem pausa no meio.",
    },
    {
      kind: "ouvirPalavra",
      audio: "queue",
      options: ["fila", "chave", "argola", "raio"],
      answer: 0,
      explanation:
        "“Queue” é fila no inglês britânico — cuidado, porque soa igual a “Q”, letra do alfabeto.",
    },
    {
      kind: "ouvirPalavra",
      audio: "rubbish",
      options: ["lixo", "borracha", "asneira escrita", "bagunça do quarto"],
      answer: 0,
      explanation:
        "“Rubbish” é lixo no britânico; no americano usa-se “trash” ou “garbage”.",
    },
    {
      kind: "ouvirFrase",
      audio: "You can leave your rubbish in the flat and take the lift.",
      pt: "Você pode deixar o lixo no apartamento e pegar o elevador. (britânico)",
      options: [
        "You can leave your rubbish in the flat and take the lift.",
        "You can leave your rubish in the flat and take the lift.",
        "You can leave your rubbish on the flat and take the lift.",
        "You can leaves your rubbish in the flat and take the lift.",
      ],
      answer: 0,
      explanation:
        "“Rubbish” tem dois “b”, depois de “can” vem o verbo base e o lugar é “in the flat”.",
    },
    {
      kind: "ouvirFrase",
      audio: "We're on holiday next week, so the office will be quiet.",
      pt: "Estamos de férias na próxima semana, então o escritório vai ficar quieto. (britânico)",
      options: [
        "We're on holiday next week, so the office will be quiet.",
        "We're in holiday next week, so the office will be quiet.",
        "We're on holidays next week, so the office will be quite.",
        "We're on holiday next week, so the office will be quite.",
      ],
      answer: 0,
      explanation:
        "A expressão é “on holiday”, sem plural, e “quiet” (silencioso) não se confunde com “quite” (bastante).",
    },
  ],
}
