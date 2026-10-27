import type { LessonPracticeContent } from "#/lib/exercises.ts"

/**
 * The ten questions of lesson b01 — the reference lesson.
 *
 * Every other lesson follows this exact shape, so this file is the template a
 * reviewer reads first: same five kinds, same order, same amount of support text.
 */
export const B01_PRACTICE: LessonPracticeContent = {
  id: "b01",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "How do you ___ your name?",
      hint: "Como se escreve o seu nome?",
      options: ["spell", "say", "repeat", "listen"],
      answer: 0,
      explanation:
        "“Spell” é soletrar, letra por letra. “Say” é só falar — quem pergunta “how do you spell your name?” quer ouvir B-R-A-Z-I-L.",
    },
    {
      kind: "completar",
      prompt: "Sorry, I didn't catch that. Can you ___, please?",
      hint: "Desculpe, não entendi. Pode repetir, por favor?",
      options: ["repeat", "speak", "spell", "answer"],
      answer: 0,
      explanation:
        "“Can you repeat, please?” é o pedido de repetição mais usado. Vale decorar inteiro: resolve em qualquer conversa.",
    },
    {
      kind: "traduzir",
      prompt: "Olá, eu sou a Ana.",
      bank: ["Hello", "I", "am", "Ana", "You", "is"],
      answer: ["Hello", "I", "am", "Ana"],
      explanation:
        "O inglês sempre pede o sujeito: “I am”, nunca só “am”. E o nome vem no fim, como em português.",
    },
    {
      kind: "traduzir",
      prompt: "Eu sou do Brasil.",
      bank: ["I", "am", "from", "Brazil", "of", "the"],
      answer: ["I", "am", "from", "Brazil"],
      explanation:
        "Use “from” para origem: “I am from Brazil”. O “I” é sempre maiúsculo em inglês, mesmo no meio da frase.",
    },
    {
      kind: "falar",
      prompt: "How do you spell your name?",
      pt: "Como se escreve o seu nome?",
      tip: "Ligue as palavras: “how-dju” soa quase junto. E “spell” começa com /sp/, sem o “i” antes do s.",
    },
    {
      kind: "falar",
      prompt: "Sorry, I didn't catch that. Can you repeat, please?",
      pt: "Desculpe, não entendi. Pode repetir, por favor?",
      tip: "“Didn't” é curto: soa “dídnt”, com a língua batendo no céu da boca. Não separe em “did not”.",
    },

    {
      kind: "ouvirPalavra",
      audio: "letter",
      options: ["letra", "número", "palavra", "língua"],
      answer: 0,
      explanation:
        "“Letter” é letra. Cuidado: “later” (mais tarde) soa parecido, mas tem outra vogal.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to spell",
      options: ["soletrar", "repetir", "traduzir", "escrever"],
      answer: 0,
      explanation:
        "“To spell” é soletrar. “To write” é escrever o texto; soletrar é dizer cada letra em voz alta.",
    },
    {
      kind: "ouvirFrase",
      audio: "How do you spell your name?",
      pt: "Como se escreve o seu nome?",
      options: [
        "How do you spell your name?",
        "How do you write your name?",
        "What is your name?",
        "How do you say your name?",
      ],
      answer: 0,
      explanation:
        "A palavra-chave é “spell”. As outras frases falam de escrever, de saber o nome e de dizer — só uma pede a soletração.",
    },
    {
      kind: "ouvirFrase",
      audio: "Can you repeat, please?",
      pt: "Pode repetir, por favor?",
      options: [
        "Can you repeat, please?",
        "Can you speak, please?",
        "Can you read it, please?",
        "Can you spell it, please?",
      ],
      answer: 0,
      explanation:
        "“Repeat” aparece no meio da frase e puxa o acento. Ouça primeiro o “ri-PIIT” para escolher com segurança.",
    },
  ],
}
