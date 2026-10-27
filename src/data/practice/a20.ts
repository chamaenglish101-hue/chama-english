import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Perguntas educadas e embutidas — 10 perguntas. */
export const A20_PRACTICE: LessonPracticeContent = {
  id: "a20",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "Could you tell me where the station ___?",
      hint: "Você poderia me dizer onde fica a estação?",
      options: ["is", "is it", "it is", "does"],
      answer: 0,
      explanation:
        "Na pergunta embutida a ordem volta a ser afirmativa: “where the station is”, sem repetir o auxiliar.",
    },
    {
      kind: "completar",
      prompt: "Do you know when the meeting ___?",
      hint: "Você sabe quando começa a reunião?",
      options: ["starts", "does start", "start", "starting"],
      answer: 0,
      explanation:
        "Depois da pergunta embutida, o verbo vai direto no presente simples: “when the meeting starts”.",
    },
    {
      kind: "traduzir",
      prompt: "Eu queria saber se você poderia me ajudar.",
      bank: [
        "I",
        "was",
        "wondering",
        "if",
        "you",
        "could",
        "help",
        "me",
        "wonder",
        "can",
      ],
      answer: ["I", "was", "wondering", "if", "you", "could", "help", "me"],
      explanation:
        "“I was wondering if…” amacia o pedido usando o passado com sentido de presente, marca de cortesia.",
    },
    {
      kind: "traduzir",
      prompt: "Você se importaria de repetir, por favor?",
      bank: [
        "Would",
        "you",
        "mind",
        "repeating",
        "that",
        "please",
        "repeat",
        "do",
      ],
      answer: ["Would", "you", "mind", "repeating", "that", "please"],
      explanation:
        "“Would you mind” vem com gerúndio: “mind repeating”. É a fórmula mais educada de pedido.",
    },
    {
      kind: "falar",
      prompt: "Could you tell me where the station is?",
      pt: "Você poderia me dizer onde fica a estação?",
      tip: "Deixe a entonação descer no fim: “where the station is”. Perguntas embutidas não sobem como as diretas.",
    },
    {
      kind: "falar",
      prompt: "I was wondering if you could help me.",
      pt: "Eu queria saber se você poderia me ajudar.",
      tip: "“I was wondering” escorre como “ai-uós-UÓN-da-rin”. O “if” fica bem fraco antes de “you”.",
    },
    {
      kind: "ouvirPalavra",
      audio: "would you mind",
      options: [
        "você se importaria",
        "você se importa com",
        "você não se importa",
        "você mente",
      ],
      answer: 0,
      explanation:
        "“Would you mind” introduz um pedido educado e sempre pede o verbo em -ing depois.",
    },
    {
      kind: "ouvirPalavra",
      audio: "may I ask",
      options: [
        "posso perguntar",
        "posso ajudar",
        "pode me perguntar",
        "talvez eu pergunte",
      ],
      answer: 0,
      explanation:
        "“May I ask” sinaliza uma pergunta delicada e prepara o interlocutor para ela.",
    },
    {
      kind: "ouvirFrase",
      audio: "Could you tell me where the station is?",
      pt: "Você poderia me dizer onde fica a estação?",
      options: [
        "Could you tell me where the station is?",
        "Could you tell me where is the station?",
        "Could you tell me where does the station is?",
        "Could you tell me where the station was?",
      ],
      answer: 0,
      explanation:
        "Na pergunta embutida não há inversão: o sujeito “the station” vem antes do verbo “is”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Do you know when the meeting starts?",
      pt: "Você sabe quando começa a reunião?",
      options: [
        "Do you know when the meeting starts?",
        "Do you know when does the meeting start?",
        "Do you know when the meeting start?",
        "Do you know when starts the meeting?",
      ],
      answer: 0,
      explanation:
        "O auxiliar “does” não aparece dentro da pergunta embutida; o verbo recebe o “s” de terceira pessoa.",
    },
  ],
}
