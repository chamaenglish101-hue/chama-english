import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Hotel: check-in, pedidos e problemas no quarto — 10 perguntas. */
export const I21_PRACTICE: LessonPracticeContent = {
  id: "i21",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Hello, I have a ___ under the name Silva.",
      hint: "Olá, tenho uma reserva no nome Silva.",
      options: ["reservation", "reserve", "reserved", "reserving"],
      answer: 0,
      explanation:
        "O substantivo é “reservation”. “Reserve” é o verbo: “I reserved a room”.",
    },
    {
      kind: "completar",
      prompt: "Could I ___ extra towels, please?",
      hint: "Pode me trazer toalhas extras, por favor?",
      options: ["have", "to have", "having", "had"],
      answer: 0,
      explanation:
        "Depois de “could I” o verbo fica na forma base: “could I have”. É o pedido educado padrão no hotel.",
    },
    {
      kind: "traduzir",
      prompt: "O ar-condicionado não está funcionando.",
      bank: [
        "The",
        "air",
        "conditioning",
        "isn't",
        "working",
        "doesn't",
        "work",
        "no",
      ],
      answer: ["The", "air", "conditioning", "isn't", "working"],
      explanation:
        "“Air conditioning” é incontável e singular, então usa “isn't working” para o problema do momento.",
    },
    {
      kind: "traduzir",
      prompt: "O café da manhã está incluído?",
      bank: ["Is", "breakfast", "included", "Does", "include", "the", "have"],
      answer: ["Is", "breakfast", "included"],
      explanation:
        "A passiva “is included” é a forma natural aqui. “Does breakfast include” mudaria o sujeito da frase.",
    },
    {
      kind: "falar",
      prompt: "I have a reservation under the name Silva.",
      pt: "Tenho uma reserva no nome Silva.",
      tip: "“Under the name” liga em “ÂN-der-der-NÊIM”. É a fórmula padrão em qualquer hotel.",
    },
    {
      kind: "falar",
      prompt: "The air conditioning isn't working.",
      pt: "O ar-condicionado não está funcionando.",
      tip: "“Air conditioning” tem cinco sílabas: “ér-con-DÍ-sho-nin”. Fale devagar na primeira vez.",
    },
    {
      kind: "ouvirPalavra",
      audio: "key card",
      options: [
        "cartão-chave do quarto",
        "chave de carro",
        "cartão de crédito",
        "chave-mestra",
      ],
      answer: 0,
      explanation:
        "“Key card” é o cartão que abre a porta do quarto. A chave antiga continua sendo “key”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "Could I have",
      options: [
        "pode me trazer / posso ter",
        "eu tenho que",
        "eu poderia ir",
        "você precisa de",
      ],
      answer: 0,
      explanation:
        "“Could I have…” é o pedido educado ideal para toalhas, um táxi, um café da manhã mais cedo.",
    },
    {
      kind: "ouvirFrase",
      audio: "I have a reservation under the name Silva.",
      pt: "Tenho uma reserva no nome Silva.",
      options: [
        "I have a reservation under the name Silva.",
        "I have a reservation on the name Silva.",
        "I made a reservation under the name Silva.",
        "I have a reservation under the name Souza.",
      ],
      answer: 0,
      explanation:
        "A preposição é “under the name”. “On the name” não existe nessa situação.",
    },
    {
      kind: "ouvirFrase",
      audio: "The shower isn't working. Could you send someone?",
      pt: "O chuveiro não está funcionando. Pode mandar alguém?",
      options: [
        "The shower isn't working. Could you send someone?",
        "The shower doesn't work. Could you send someone?",
        "The shower isn't working. Could you come someone?",
        "The shower isn't working. Could you send anyone?",
      ],
      answer: 0,
      explanation:
        "Ouça “isn't working” e “send someone”. O verbo “send” é o que se usa para pedir que mandem uma pessoa.",
    },
  ],
}
