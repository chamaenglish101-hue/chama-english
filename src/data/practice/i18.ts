import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** E-mails profissionais curtos — 10 perguntas. */
export const I18_PRACTICE: LessonPracticeContent = {
  id: "i18",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "___ writing to confirm tomorrow's meeting.",
      hint: "Escrevo para confirmar a reunião de amanhã.",
      options: ["I'm", "I", "I am write", "I have"],
      answer: 0,
      explanation:
        "“I'm writing to…” é a abertura padrão: o objetivo do e-mail aparece já na primeira linha.",
    },
    {
      kind: "completar",
      prompt: "I would ___ it if you could send the file today.",
      hint: "Eu agradeceria se você pudesse enviar o arquivo hoje.",
      options: ["appreciate", "appreciated", "appreciating", "appreciation"],
      answer: 0,
      explanation:
        "“I would appreciate it if…” é a fórmula formal de pedido. Depois de “would” o verbo fica na forma base.",
    },
    {
      kind: "traduzir",
      prompt: "Você poderia enviar o arquivo atualizado, por favor?",
      bank: [
        "Could",
        "you",
        "please",
        "send",
        "the",
        "updated",
        "file",
        "Can",
        "to",
      ],
      answer: ["Could", "you", "please", "send", "the", "updated", "file"],
      explanation:
        "“Could you please + verbo” é o pedido educado padrão. O verbo fica na forma base, sem “to”.",
    },
    {
      kind: "traduzir",
      prompt: "Aguardo seu retorno. Atenciosamente, Ana.",
      bank: [
        "Looking",
        "forward",
        "to",
        "your",
        "reply",
        "Best",
        "regards",
        "Ana",
        "Wait",
        "thanks",
      ],
      answer: [
        "Looking",
        "forward",
        "to",
        "your",
        "reply",
        "Best",
        "regards",
        "Ana",
      ],
      explanation:
        "“Looking forward to your reply” fecha com expectativa e “Best regards” é a despedida profissional.",
    },
    {
      kind: "falar",
      prompt: "I'm writing to confirm tomorrow's meeting.",
      pt: "Escrevo para confirmar a reunião de amanhã.",
      tip: "“I'm writing to” liga em “aim-RÁI-tin-tu”. A frase inteira é dita num só bloco, sem pausas.",
    },
    {
      kind: "falar",
      prompt: "Could you please send the updated file?",
      pt: "Você poderia enviar o arquivo atualizado, por favor?",
      tip: "“Could you please” soa “CUD-ju-plíz”. A entonação sobe no fim, marcando o pedido.",
    },
    {
      kind: "ouvirPalavra",
      audio: "Best regards",
      options: [
        "atenciosamente",
        "até logo",
        "com urgência",
        "obrigado de novo",
      ],
      answer: 0,
      explanation:
        "“Best regards” encerra e-mails profissionais. “Kind regards” funciona igual; “Cheers” é informal.",
    },
    {
      kind: "ouvirPalavra",
      audio: "Let me know",
      options: ["me avise", "me deixe", "deixe-me ver", "me diga depois"],
      answer: 0,
      explanation:
        "“Let me know if you need anything else” é o fechamento mais comum em e-mails de trabalho.",
    },
    {
      kind: "ouvirFrase",
      audio: "Could you please send the updated file?",
      pt: "Você poderia enviar o arquivo atualizado, por favor?",
      options: [
        "Could you please send the updated file?",
        "Could you please send the update file?",
        "Can you send the updated file?",
        "Could you please send the updated list?",
      ],
      answer: 0,
      explanation:
        "“Updated file” é a forma correta: o particípio funciona como adjetivo antes do substantivo.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm writing to confirm tomorrow's meeting.",
      pt: "Escrevo para confirmar a reunião de amanhã.",
      options: [
        "I'm writing to confirm tomorrow's meeting.",
        "I'm writing to cancel tomorrow's meeting.",
        "I'm writing to confirm today's meeting.",
        "I write to confirm tomorrow's meeting.",
      ],
      answer: 0,
      explanation:
        "Ouça “confirm” e “tomorrow's”. A abertura “I'm writing to + verbo” é a fórmula fixa do e-mail profissional.",
    },
  ],
}
