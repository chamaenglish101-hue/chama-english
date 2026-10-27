import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Falar como líder — 10 perguntas. */
export const A42_PRACTICE: LessonPracticeContent = {
  id: "a42",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Here's where we're going this quarter and ___ it matters.",
      hint: "Aqui é para onde vamos neste trimestre e por que isso importa.",
      options: ["why", "what", "how", "which"],
      answer: 0,
      explanation:
        "A direção sozinha não convence: “and why it matters” conecta o plano ao propósito.",
    },
    {
      kind: "completar",
      prompt: "That miss was ___ me. Here's what I'm changing.",
      hint: "Esse erro foi meu. Aqui está o que vou mudar.",
      options: ["on", "in", "for", "with"],
      answer: 0,
      explanation:
        "“That was on me” assume a responsabilidade sem rodeios — a base da confiança de um líder.",
    },
    {
      kind: "traduzir",
      prompt: "A decisão é sua — vou te apoiar em qualquer caso.",
      bank: [
        "You",
        "own",
        "the",
        "call",
        "I'll",
        "back",
        "you",
        "up",
        "either",
        "way",
        "owns",
        "backs",
      ],
      answer: [
        "You",
        "own",
        "the",
        "call",
        "I'll",
        "back",
        "you",
        "up",
        "either",
        "way",
      ],
      explanation:
        "“Own the call” dá autonomia e “back you up” garante o apoio — juntos, formam uma frase de liderança.",
    },
    {
      kind: "traduzir",
      prompt: "Esse erro foi meu. Aqui está o que vou mudar.",
      bank: [
        "That",
        "miss",
        "was",
        "on",
        "me",
        "Here's",
        "what",
        "I'm",
        "changing",
        "my",
        "changes",
      ],
      answer: [
        "That",
        "miss",
        "was",
        "on",
        "me",
        "Here's",
        "what",
        "I'm",
        "changing",
      ],
      explanation:
        "Duas frases curtas: a responsabilidade e o plano. É o formato que sustenta a credibilidade.",
    },
    {
      kind: "falar",
      prompt: "Here's where we're going this quarter and why it matters.",
      pt: "Aqui é para onde vamos neste trimestre e por que isso importa.",
      tip: "Divida em duas partes, com pausa antes de “and why”: a mensagem fica bem mais clara.",
    },
    {
      kind: "falar",
      prompt: "You own the call — I'll back you up either way.",
      pt: "A decisão é sua — vou te apoiar em qualquer caso.",
      tip: "“Back you up” emenda em “bék-u-áp”. Tom firme e calmo: é um compromisso, não uma sugestão.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to own it",
      options: [
        "assumir a responsabilidade",
        "ter a posse do projeto",
        "comprar a ideia",
        "delegar a tarefa",
      ],
      answer: 0,
      explanation:
        "“Own it” é assumir o resultado, bom ou ruim, em vez de procurar culpados.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to back someone up",
      options: [
        "apoiar alguém",
        "voltar atrás",
        "ficar para trás",
        "cobrir alguém de críticas",
      ],
      answer: 0,
      explanation:
        "“Back someone up” é dar sustentação pública à pessoa depois que ela decidiu.",
    },
    {
      kind: "ouvirFrase",
      audio: "Here's where we're going this quarter and why it matters.",
      pt: "Aqui é para onde vamos neste trimestre e por que isso importa.",
      options: [
        "Here's where we're going this quarter and why it matters.",
        "Here's where we go this quarter and why it matters.",
        "Here's where we're going this quarter and why it matter.",
        "Here's where we're going this quarter and why does it matter.",
      ],
      answer: 0,
      explanation:
        "O contínuo “we're going” mostra a direção em curso, e “it matters” concorda com “it” no singular.",
    },
    {
      kind: "ouvirFrase",
      audio: "You own the call — I'll back you up either way.",
      pt: "A decisão é sua — vou te apoiar em qualquer caso.",
      options: [
        "You own the call — I'll back you up either way.",
        "You own the call — I'll back up you either way.",
        "You own the call — I back you up either way.",
        "You own the call — I'll back you either way.",
      ],
      answer: 0,
      explanation:
        "Com pronome, o phrasal verb separa: “back you up”. E “I'll” carrega o compromisso futuro.",
    },
  ],
}
