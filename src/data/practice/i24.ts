import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Entrevista de emprego: respostas prontas e seguras — 10 perguntas. */
export const I24_PRACTICE: LessonPracticeContent = {
  id: "i24",
  level: "intermediario",
  exercises: [
    {
      kind: "completar",
      prompt: "I've ___ working as an analyst for five years.",
      hint: "Trabalho como analista há cinco anos.",
      options: ["been", "being", "be", "am"],
      answer: 0,
      explanation:
        "“I've been working” cobre do passado até agora, exatamente o que “for five years” pede.",
    },
    {
      kind: "completar",
      prompt: "I'm looking for a role where I can ___.",
      hint: "Busco uma função em que eu possa crescer.",
      options: ["grow", "growing", "to grow", "grew"],
      answer: 0,
      explanation:
        "Depois de “can” o verbo fica na forma base: “I can grow”. Sem “to” e sem “-ing”.",
    },
    {
      kind: "traduzir",
      prompt: "Trabalho com atendimento ao cliente há três anos.",
      bank: [
        "I've",
        "been",
        "working",
        "in",
        "customer",
        "service",
        "for",
        "three",
        "years",
        "I",
        "work",
        "since",
      ],
      answer: [
        "I've",
        "been",
        "working",
        "in",
        "customer",
        "service",
        "for",
        "three",
        "years",
      ],
      explanation:
        "“I've been working … for three years” é a fórmula que liga experiência passada ao momento atual.",
    },
    {
      kind: "traduzir",
      prompt: "Pode me falar sobre as próximas etapas?",
      bank: [
        "Could",
        "you",
        "tell",
        "me",
        "about",
        "the",
        "next",
        "steps",
        "say",
        "for",
      ],
      answer: ["Could", "you", "tell", "me", "about", "the", "next", "steps"],
      explanation:
        "“Tell me about” é a estrutura correta. “Say me” não existe em inglês, e “next steps” é a expressão fixa.",
    },
    {
      kind: "falar",
      prompt: "I've been working as an analyst for five years.",
      pt: "Trabalho como analista há cinco anos.",
      tip: "“I've been working” soa “aiv-bin-UÓR-kin”, tudo corrido. O “been” é quase engolido.",
    },
    {
      kind: "falar",
      prompt: "Could you tell me about the next steps?",
      pt: "Pode me falar sobre as próximas etapas?",
      tip: "“Tell me about” liga em “TÉL-mi-a-BÁUT”. Pergunta educada, tom subindo no fim.",
    },
    {
      kind: "ouvirPalavra",
      audio: "strengths and weaknesses",
      options: [
        "pontos fortes e fracos",
        "força e velocidade",
        "metas e resultados",
        "tarefas e prazos",
      ],
      answer: 0,
      explanation:
        "É a clássica pergunta de entrevista: liste uma força com exemplo e um ponto a melhorar com plano.",
    },
    {
      kind: "ouvirPalavra",
      audio: "next steps",
      options: [
        "próximas etapas",
        "próximos dias",
        "próxima semana",
        "passos dados",
      ],
      answer: 0,
      explanation:
        "“What are the next steps?” é a pergunta ideal para encerrar a entrevista e mostrar interesse.",
    },
    {
      kind: "ouvirFrase",
      audio: "I've been working as an analyst for five years.",
      pt: "Trabalho como analista há cinco anos.",
      options: [
        "I've been working as an analyst for five years.",
        "I work as an analyst for five years.",
        "I've been working as an analyst since five years.",
        "I've been working as an engineer for five years.",
      ],
      answer: 0,
      explanation:
        "O present perfect contínuo com “for + período” é a forma certa. “Since” só acompanha o momento de início.",
    },
    {
      kind: "ouvirFrase",
      audio: "I'm looking for a role where I can grow.",
      pt: "Busco uma função em que eu possa crescer.",
      options: [
        "I'm looking for a role where I can grow.",
        "I'm looking for a role where I can grow up.",
        "I'm looking for a job where I can grow.",
        "I look for a role where I can grow.",
      ],
      answer: 0,
      explanation:
        "“Grow” é crescer profissionalmente; “grow up” é crescer como criança. E “role” soa mais profissional que “job”.",
    },
  ],
}
