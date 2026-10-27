import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Falar da própria área com terminologia confiável — 10 perguntas. */
export const A67_PRACTICE: LessonPracticeContent = {
  id: "a67",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "I ___ in the payments team, focusing on fraud prevention.",
      hint: "Trabalho no time de pagamentos, com foco em prevenção de fraudes.",
      options: ["work", "working", "works", "worked"],
      answer: 0,
      explanation:
        "A apresentação profissional usa o presente simples: “I work in the … team, focusing on …”.",
    },
    {
      kind: "completar",
      prompt:
        "My day-to-day involves ___ risks and reporting them to leadership.",
      hint: "Meu dia a dia envolve avaliar riscos e reportá-los à liderança.",
      options: ["assessing", "assess", "assessed", "assesses"],
      answer: 0,
      explanation:
        "Depois de “involves” vem o gerúndio: é assim que se descreve a rotina de trabalho.",
    },
    {
      kind: "traduzir",
      prompt:
        "Trabalho no time de pagamentos, com foco em prevenção de fraudes.",
      bank: [
        "I",
        "work",
        "in",
        "the",
        "payments",
        "team",
        "focusing",
        "on",
        "fraud",
        "prevention",
        "works",
        "focus",
      ],
      answer: [
        "I",
        "work",
        "in",
        "the",
        "payments",
        "team",
        "focusing",
        "on",
        "fraud",
        "prevention",
      ],
      explanation:
        "“I work in the … team, focusing on …” é o molde mais confiável para se apresentar profissionalmente.",
    },
    {
      kind: "traduzir",
      prompt: "Meu dia a dia envolve avaliar riscos e reportá-los à liderança.",
      bank: [
        "My",
        "day-to-day",
        "involves",
        "assessing",
        "risks",
        "and",
        "reporting",
        "them",
        "to",
        "leadership",
        "involve",
        "reports",
      ],
      answer: [
        "My",
        "day-to-day",
        "involves",
        "assessing",
        "risks",
        "and",
        "reporting",
        "them",
        "to",
        "leadership",
      ],
      explanation:
        "“Day-to-day” é a rotina; os dois gerúndios mantêm o paralelismo depois de “involves”.",
    },
    {
      kind: "falar",
      prompt: "I work in the payments team, focusing on fraud prevention.",
      pt: "Trabalho no time de pagamentos, com foco em prevenção de fraudes.",
      tip: "Acento forte em “PAYments” e “FRAUD”: são os termos que identificam sua área.",
    },
    {
      kind: "falar",
      prompt:
        "My day-to-day involves assessing risks and reporting them to leadership.",
      pt: "Meu dia a dia envolve avaliar riscos e reportá-los à liderança.",
      tip: "Ligue “day-to-day” como uma palavra comprida só, e mantenha os dois gerúndios no mesmo ritmo.",
    },
    {
      kind: "ouvirPalavra",
      audio: "stakeholders",
      options: [
        "partes interessadas",
        "acionistas majoritários",
        "funcionários antigos",
        "fornecedores externos",
      ],
      answer: 0,
      explanation:
        "“Stakeholders” são todos os envolvidos ou afetados pelo projeto — não apenas quem investe.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to roll out",
      options: [
        "lançar, implementar aos poucos",
        "rolar para o lado",
        "desenrolar um rolo",
        "cancelar um projeto",
      ],
      answer: 0,
      explanation:
        "“To roll out” é colocar uma solução em produção de forma gradual, termo comum em tecnologia.",
    },
    {
      kind: "ouvirFrase",
      audio: "I work in the payments team, focusing on fraud prevention.",
      pt: "Trabalho no time de pagamentos, com foco em prevenção de fraudes.",
      options: [
        "I work in the payments team, focusing on fraud prevention.",
        "I work on the payments team, focusing in fraud prevention.",
        "I work in the payments team, focus on fraud prevention.",
        "I works in the payments team, focusing on fraud prevention.",
      ],
      answer: 0,
      explanation:
        "Usa-se “work in a team” e “focus on something”; com “I”, o verbo não leva “s”.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "We rolled out the new process and shared the results with stakeholders.",
      pt: "Lançamos o novo processo e compartilhamos os resultados com as partes interessadas.",
      options: [
        "We rolled out the new process and shared the results with stakeholders.",
        "We rolled the new process out and shared the results with stakeholders.",
        "We rolled out the new process and share the results with stakeholders.",
        "We rollout the new process and shared the results with stakeholders.",
      ],
      answer: 0,
      explanation:
        "“Rolled out” fica junto com o substantivo, e os dois verbos da narrativa vão no passado: “rolled”, “shared”.",
    },
  ],
}
