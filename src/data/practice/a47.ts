import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Ensaio: introdução, tese e conclusão — 10 perguntas. */
export const A47_PRACTICE: LessonPracticeContent = {
  id: "a47",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "This essay ___ that remote work strengthens rather than weakens teams.",
      hint: "Este ensaio argumenta que o trabalho remoto fortalece, e não enfraquece, os times.",
      options: ["argues", "arguing", "argued", "argue"],
      answer: 0,
      explanation:
        "A tese se apresenta com “This essay argues that…”, e o verbo concorda com “essay” no singular.",
    },
    {
      kind: "completar",
      prompt:
        "The first reason is flexibility: people work when they ___ most productive.",
      hint: "A primeira razão é a flexibilidade: as pessoas trabalham quando rendem mais.",
      options: ["are", "is", "were", "being"],
      answer: 0,
      explanation:
        "“They are the most productive” — o verbo concorda com “they” no plural, mesmo dentro da oração temporal.",
    },
    {
      kind: "traduzir",
      prompt: "Se as empresas ignorarem essa mudança, perderão talentos.",
      bank: [
        "If",
        "companies",
        "ignore",
        "this",
        "shift",
        "they",
        "will",
        "lose",
        "talent",
        "ignores",
        "loses",
      ],
      answer: [
        "If",
        "companies",
        "ignore",
        "this",
        "shift",
        "they",
        "will",
        "lose",
        "talent",
      ],
      explanation:
        "Na primeira condicional, o presente “ignore” na condição e “will lose” na consequência.",
    },
    {
      kind: "traduzir",
      prompt: "Este ensaio argumenta que o trabalho remoto fortalece os times.",
      bank: [
        "This",
        "essay",
        "argues",
        "that",
        "remote",
        "work",
        "strengthens",
        "teams",
        "argue",
        "strengthen",
      ],
      answer: [
        "This",
        "essay",
        "argues",
        "that",
        "remote",
        "work",
        "strengthens",
        "teams",
      ],
      explanation:
        "A tese aparece no começo e usa verbos no presente: “argues that remote work strengthens”.",
    },
    {
      kind: "falar",
      prompt:
        "This essay argues that remote work strengthens rather than weakens teams.",
      pt: "Este ensaio argumenta que o trabalho remoto fortalece, e não enfraquece, os times.",
      tip: "Sublinhe o contraste “strengthens rather than weakens”: é o coração da tese.",
    },
    {
      kind: "falar",
      prompt:
        "If companies ignore this shift, they will lose talent to those who adapt.",
      pt: "Se as empresas ignorarem essa mudança, perderão talentos para as que se adaptarem.",
      tip: "Pausa depois de “shift”: a segunda parte traz a consequência e precisa de destaque.",
    },
    {
      kind: "ouvirPalavra",
      audio: "this essay argues",
      options: [
        "este ensaio argumenta",
        "este ensaio discute",
        "este ensaio conclui",
        "este ensaio questiona",
      ],
      answer: 0,
      explanation:
        "“This essay argues” anuncia a tese logo na introdução, o que dá direção ao texto.",
    },
    {
      kind: "ouvirPalavra",
      audio: "rather than",
      options: [
        "em vez de, em lugar de",
        "melhor que",
        "mais tarde que",
        "apesar de",
      ],
      answer: 0,
      explanation:
        "“Rather than” estabelece o contraste fino entre duas alternativas dentro do mesmo argumento.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "This essay argues that remote work strengthens rather than weakens teams.",
      pt: "Este ensaio argumenta que o trabalho remoto fortalece, e não enfraquece, os times.",
      options: [
        "This essay argues that remote work strengthens rather than weakens teams.",
        "This essay argues that remote work strengthen rather than weakens teams.",
        "This essay argues that remote work strengthens rather than weakens team.",
        "This essays argues that remote work strengthens rather than weakens teams.",
      ],
      answer: 0,
      explanation:
        "Os dois verbos concordam com “remote work” no singular, e “teams” fica no plural.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "If companies ignore this shift, they will lose talent to those who adapt.",
      pt: "Se as empresas ignorarem essa mudança, perderão talentos para as que se adaptarem.",
      options: [
        "If companies ignore this shift, they will lose talent to those who adapt.",
        "If companies ignores this shift, they will lose talent to those who adapt.",
        "If companies ignore this shift, they will lose talent to those who adapts.",
        "If companies ignore this shift, they louse talent to those who adapt.",
      ],
      answer: 0,
      explanation:
        "“Companies” no plural pede “ignore” sem “s”, e “those” retoma o plural na relativa.",
    },
  ],
}
