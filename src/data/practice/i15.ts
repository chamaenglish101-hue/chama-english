import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Advérbios de frequência e de modo — 10 perguntas. */
export const I15_PRACTICE: LessonPracticeContent = {
  id: "i15",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I ___ take the bus to work, but today I'm driving.",
      hint: "Normalmente pego o ônibus para o trabalho, mas hoje estou dirigindo.",
      options: ["usually", "usual", "am usually", "usually am"],
      answer: 0,
      explanation:
        "O advérbio de frequência vai antes do verbo principal: “I usually take”. Com o verbo to be, ele viria depois.",
    },
    {
      kind: "completar",
      prompt: "He is ___ late for meetings. He's very punctual.",
      hint: "Ele nunca se atrasa para reuniões. É muito pontual.",
      options: ["never", "ever", "not never", "always"],
      answer: 0,
      explanation:
        "Com o verbo to be, o advérbio vem depois: “is never late”. “Ever” sozinho não indica frequência.",
    },
    {
      kind: "traduzir",
      prompt: "Normalmente checo meus e-mails de manhã.",
      bank: [
        "I",
        "usually",
        "check",
        "my",
        "emails",
        "in",
        "the",
        "morning",
        "usual",
        "checking",
      ],
      answer: ["I", "usually", "check", "my", "emails", "in", "the", "morning"],
      explanation:
        "Posição fixa: sujeito + advérbio + verbo principal. E “de manhã” é “in the morning”.",
    },
    {
      kind: "traduzir",
      prompt: "Ela respondeu à pergunta com calma.",
      bank: [
        "She",
        "answered",
        "the",
        "question",
        "calmly",
        "calm",
        "with calm",
      ],
      answer: ["She", "answered", "the", "question", "calmly"],
      explanation:
        "Advérbio de modo fecha a frase e usa “-ly”: “calmly”. Não existe “with calm” em inglês.",
    },
    {
      kind: "falar",
      prompt: "I usually check my e-mails in the morning.",
      pt: "Normalmente checo meus e-mails de manhã.",
      tip: "“Usually” soa “iú-ju-a-li”, sempre fraco e corrido. O acento forte cai em “check”.",
    },
    {
      kind: "falar",
      prompt: "She answered the question calmly.",
      pt: "Ela respondeu à pergunta com calma.",
      tip: "“Calmly” tem o “l” mudo: soa “CÁM-li”. O advérbio fica no fim, não antes do verbo.",
    },
    {
      kind: "ouvirPalavra",
      audio: "hardly ever",
      options: [
        "quase nunca",
        "sempre",
        "dificilmente com esforço",
        "de vez em quando",
      ],
      answer: 0,
      explanation:
        "“Hardly ever” é quase nunca, mais forte que “sometimes”. Não confunda com “hardly”, que significa quase não.",
    },
    {
      kind: "ouvirPalavra",
      audio: "quickly",
      options: ["rapidamente", "quieto", "com calma", "de vez em quando"],
      answer: 0,
      explanation:
        "“Quickly” descreve o modo da ação e vai no fim da frase: “He finished quickly”.",
    },
    {
      kind: "ouvirFrase",
      audio: "He is never late for meetings.",
      pt: "Ele nunca se atrasa para reuniões.",
      options: [
        "He is never late for meetings.",
        "He never is late for meetings.",
        "He is never late for the meeting.",
        "He is hardly ever late for meetings.",
      ],
      answer: 0,
      explanation:
        "Com o verbo to be, o advérbio vem depois dele. “Hardly ever” seria quase nunca, uma frequência diferente.",
    },
    {
      kind: "ouvirFrase",
      audio: "I always take the bus to work.",
      pt: "Sempre pego o ônibus para o trabalho.",
      options: [
        "I always take the bus to work.",
        "I take always the bus to work.",
        "Always I take the bus to work.",
        "I always take the bus to the office.",
      ],
      answer: 0,
      explanation:
        "Advérbio antes do verbo principal, nunca depois. E “to work” indica o destino, não o escritório.",
    },
  ],
}
