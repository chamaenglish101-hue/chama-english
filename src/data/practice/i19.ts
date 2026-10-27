import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Ao telefone: pedir para repetir e anotar recados — 10 perguntas. */
export const I19_PRACTICE: LessonPracticeContent = {
  id: "i19",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "Hello, this is Ana ___. How can I help you?",
      hint: "Alô, aqui é a Ana falando. Como posso ajudar?",
      options: ["speaking", "speak", "to speak", "spoken"],
      answer: 0,
      explanation:
        "Ao telefone, a fórmula fixa é “this is + nome + speaking”. Sem o “speaking”, a frase fica estranha.",
    },
    {
      kind: "completar",
      prompt: "Sorry, could you ___ that, please?",
      hint: "Desculpe, você poderia repetir isso, por favor?",
      options: ["repeat", "repeating", "to repeat", "repeated"],
      answer: 0,
      explanation:
        "Depois de “could you”, o verbo fica na forma base: “could you repeat”. É a frase de segurança no telefone.",
    },
    {
      kind: "traduzir",
      prompt: "Pode falar um pouco mais devagar, por favor?",
      bank: [
        "Could",
        "you",
        "speak",
        "a",
        "little",
        "slower",
        "please",
        "slowly",
        "speaking",
      ],
      answer: ["Could", "you", "speak", "a", "little", "slower", "please"],
      explanation:
        "Usamos o comparativo “slower” depois de “a little”. “Slowly” seria o advérbio, que também funciona, mas não aqui.",
    },
    {
      kind: "traduzir",
      prompt: "Posso anotar um recado? — Sim, diga que a Laura ligou.",
      bank: [
        "Can",
        "I",
        "take",
        "a",
        "message",
        "Yes",
        "please",
        "tell",
        "him",
        "Laura",
        "called",
        "say",
        "she",
      ],
      answer: [
        "Can",
        "I",
        "take",
        "a",
        "message",
        "Yes",
        "please",
        "tell",
        "him",
        "Laura",
        "called",
      ],
      explanation:
        "“Take a message” é anotar o recado. E “tell him Laura called” é a forma natural de repassar quem ligou.",
    },
    {
      kind: "falar",
      prompt: "Hello, this is Carlos speaking. How can I help you?",
      pt: "Alô, aqui é o Carlos falando. Como posso ajudar?",
      tip: "“This is” liga em “dí-siz”. Ao telefone, não se diz “I am Carlos”: a fórmula é com “this”.",
    },
    {
      kind: "falar",
      prompt: "Sorry, could you repeat that, please?",
      pt: "Desculpe, você poderia repetir isso, por favor?",
      tip: "“Could you” vira “CÚ-dju”. O “that” final quase desaparece na fala rápida.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to hold on",
      options: [
        "aguardar na linha",
        "desligar",
        "ligar de volta",
        "anotar um recado",
      ],
      answer: 0,
      explanation:
        "“Hold on a moment, please” pede para a pessoa esperar. Nada a ver com “hold”, segurar algo físico.",
    },
    {
      kind: "ouvirPalavra",
      audio: "Can you spell that for me?",
      options: [
        "Pode soletrar para mim?",
        "Pode falar mais alto?",
        "Pode repetir mais devagar?",
        "Pode anotar isso?",
      ],
      answer: 0,
      explanation:
        "“Spell” é soletrar, essencial para nomes, e-mails e endereços ao telefone.",
    },
    {
      kind: "ouvirFrase",
      audio: "Sorry, could you repeat that, please?",
      pt: "Desculpe, você poderia repetir isso, por favor?",
      options: [
        "Sorry, could you repeat that, please?",
        "Sorry, could you repeat this, please?",
        "Sorry, can you repeat that, please?",
        "Sorry, could you speak that, please?",
      ],
      answer: 0,
      explanation:
        "“Repeat that” é a expressão fixa para pedir que se repita o que acabou de ser dito.",
    },
    {
      kind: "ouvirFrase",
      audio: "Can I take a message?",
      pt: "Posso anotar um recado?",
      options: [
        "Can I take a message?",
        "Can I make a message?",
        "Can I take a meeting?",
        "Can you take a message?",
      ],
      answer: 0,
      explanation:
        "“Take a message” é a colocação correta. “Make a message” não existe e “meeting” troca o sentido por completo.",
    },
  ],
}
