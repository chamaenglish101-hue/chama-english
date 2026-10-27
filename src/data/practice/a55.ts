import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Fala conectada: ligações e reduções — 10 perguntas. */
export const A55_PRACTICE: LessonPracticeContent = {
  id: "a55",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "In natural speech, “what do you want to do” sounds like “___ do”.",
      hint: "Na fala natural, “what do you want to do” soa como “whaddya wanna do”.",
      options: [
        "whaddya wanna",
        "whatdyou wantto",
        "wad do you wanna",
        "what do wanna",
      ],
      answer: 0,
      explanation:
        "As reduções fixas são “what do you” → whaddya e “want to” → wanna; juntas soam numa só palavra.",
    },
    {
      kind: "completar",
      prompt: "“Turn it off” is pronounced as one unit: it sounds like “___”.",
      hint: "“Turn it off” é pronunciado como uma unidade: soa como “tur-ni-toff”.",
      options: ["tur-ni-toff", "turn-it-of", "turn-i-toff", "turi-noff"],
      answer: 0,
      explanation:
        "A consoante final se liga à vogal seguinte: “turn it off” vira um bloco único de som.",
    },
    {
      kind: "traduzir",
      prompt: "Eu deveria ter te ligado mais cedo.",
      bank: ["I", "should've", "called", "you", "earlier", "should", "call"],
      answer: ["I", "should've", "called", "you", "earlier"],
      explanation:
        "“Should've” é a redução de “should have” na fala, seguida pelo particípio “called”.",
    },
    {
      kind: "traduzir",
      prompt: "O que você quer fazer hoje à noite?",
      bank: [
        "What",
        "do",
        "you",
        "want",
        "to",
        "do",
        "tonight",
        "wants",
        "doing",
      ],
      answer: ["What", "do", "you", "want", "to", "do", "tonight"],
      explanation:
        "Na fala rápida isso sai como “whaddya wanna do tonight”, mas a forma escrita mantém as palavras separadas.",
    },
    {
      kind: "falar",
      prompt: "Whaddya wanna do tonight?",
      pt: "O que você quer fazer hoje à noite? (fala conectada)",
      tip: "Diga tudo numa batida só: “whaddya wanna” não tem pausa entre as palavras.",
    },
    {
      kind: "falar",
      prompt: "I should've called you earlier.",
      pt: "Eu deveria ter te ligado mais cedo.",
      tip: "“Should've” soa “CHÚ-dev”. O “ve” é bem curto, quase um /v/ solto.",
    },
    {
      kind: "ouvirPalavra",
      audio: "gonna",
      options: ["vou, vai (going to)", "arma de brinquedo", "ganhar", "atirar"],
      answer: 0,
      explanation:
        "“Gonna” é a redução oral de “going to”, usada para planos e previsões informais.",
    },
    {
      kind: "ouvirPalavra",
      audio: "connected speech",
      options: [
        "fala conectada",
        "discurso longo",
        "fala gravada",
        "conversa telefônica",
      ],
      answer: 0,
      explanation:
        "“Connected speech” é o nome do fenômeno em que os sons se ligam e se reduzem na fala natural.",
    },
    {
      kind: "ouvirFrase",
      audio: "I should've called you earlier.",
      pt: "Eu deveria ter te ligado mais cedo.",
      options: [
        "I should've called you earlier.",
        "I should have call you earlier.",
        "I should've call you earlier.",
        "I shouldn't have called you earlier.",
      ],
      answer: 0,
      explanation:
        "Depois de “should've” vem o particípio “called”, e a frase é afirmativa, não negativa.",
    },
    {
      kind: "ouvirFrase",
      audio: "Turn it off before you leave.",
      pt: "Desligue isso antes de sair.",
      options: [
        "Turn it off before you leave.",
        "Turn off it before you leave.",
        "Turning it off before you leave.",
        "Turn it of before you leave.",
      ],
      answer: 0,
      explanation:
        "Com pronome, o phrasal verb não separa quem? — “turn it off”. E o verbo fica no imperativo.",
    },
  ],
}
