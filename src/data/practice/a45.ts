import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Argumentação com evidência e lógica — 10 perguntas. */
export const A45_PRACTICE: LessonPracticeContent = {
  id: "a45",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt:
        "Remote work is here to stay. ___, our turnover dropped after we adopted it.",
      hint: "O trabalho remoto veio para ficar. Além disso, nossa rotatividade caiu depois que o adotamos.",
      options: ["Moreover", "However", "Therefore", "Instead"],
      answer: 0,
      explanation:
        "“Moreover” soma um argumento na mesma direção. “However” contradiria e “Therefore” concluiria.",
    },
    {
      kind: "completar",
      prompt:
        "Critics say it hurts collaboration. ___, our data shows no drop in delivery.",
      hint: "Críticos dizem que prejudica a colaboração. No entanto, nossos dados não mostram queda na entrega.",
      options: ["However", "Moreover", "Therefore", "Similarly"],
      answer: 0,
      explanation:
        "“However” marca o contraste e prepara a resposta com dados, mantendo o argumento equilibrado.",
    },
    {
      kind: "traduzir",
      prompt: "Portanto, manter a flexibilidade é a escolha pragmática.",
      bank: [
        "Therefore",
        "keeping",
        "flexibility",
        "is",
        "the",
        "pragmatic",
        "choice",
        "keeps",
        "pragmatical",
      ],
      answer: [
        "Therefore",
        "keeping",
        "flexibility",
        "is",
        "the",
        "pragmatic",
        "choice",
      ],
      explanation:
        "“Therefore” fecha a cadeia lógica: premissas, evidência e conclusão.",
    },
    {
      kind: "traduzir",
      prompt:
        "Além disso, nossa rotatividade caiu depois que adotamos o modelo híbrido.",
      bank: [
        "Moreover",
        "our",
        "turnover",
        "dropped",
        "after",
        "we",
        "adopted",
        "the",
        "hybrid",
        "model",
        "drops",
        "adopts",
      ],
      answer: [
        "Moreover",
        "our",
        "turnover",
        "dropped",
        "after",
        "we",
        "adopted",
        "the",
        "hybrid",
        "model",
      ],
      explanation:
        "“Moreover” abre um reforço, e “dropped” traz o dado verificável que sustenta a afirmação.",
    },
    {
      kind: "falar",
      prompt:
        "Remote work is here to stay. Moreover, our turnover dropped after we adopted it.",
      pt: "O trabalho remoto veio para ficar. Além disso, nossa rotatividade caiu depois que o adotamos.",
      tip: "Faça uma pausa clara depois de “stay”: o conector precisa abrir o segundo argumento com peso.",
    },
    {
      kind: "falar",
      prompt:
        "Critics say it hurts collaboration. However, our data shows no drop in delivery.",
      pt: "Críticos dizem que prejudica a colaboração. No entanto, nossos dados não mostram queda na entrega.",
      tip: "Em “However” suba a entonação e faça uma pausa: é a virada do argumento.",
    },
    {
      kind: "ouvirPalavra",
      audio: "moreover",
      options: ["além disso", "no entanto", "portanto", "por exemplo"],
      answer: 0,
      explanation:
        "“Moreover” adiciona um ponto que fortalece o que já foi dito — típico da escrita argumentativa.",
    },
    {
      kind: "ouvirPalavra",
      audio: "therefore",
      options: ["portanto", "porém", "enquanto isso", "em outras palavras"],
      answer: 0,
      explanation:
        "“Therefore” introduz a conclusão que decorre logicamente das evidências apresentadas.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "Remote work is here to stay. Moreover, our turnover dropped after we adopted it.",
      pt: "O trabalho remoto veio para ficar. Além disso, nossa rotatividade caiu depois que o adotamos.",
      options: [
        "Remote work is here to stay. Moreover, our turnover dropped after we adopted it.",
        "Remote work is here to stay. Moreover, our turnover drop after we adopted it.",
        "Remote work is here to stay. Moreover, our turnover dropped after we adopt it.",
        "Remote work is here for stay. Moreover, our turnover dropped after we adopted it.",
      ],
      answer: 0,
      explanation:
        "A expressão é “here to stay”, e os dois verbos ficam no passado: “dropped” e “adopted”.",
    },
    {
      kind: "ouvirFrase",
      audio:
        "Critics say it hurts collaboration. However, our data shows no drop in delivery.",
      pt: "Críticos dizem que prejudica a colaboração. No entanto, nossos dados não mostram queda na entrega.",
      options: [
        "Critics say it hurts collaboration. However, our data shows no drop in delivery.",
        "Critics say it hurts collaboration. However, our data show no drop in delivery.",
        "Critics say it hurt collaboration. However, our data shows no drop in delivery.",
        "Critics say it hurts collaboration. However, our data shows no drop on delivery.",
      ],
      answer: 0,
      explanation:
        "“Hurts” e “shows” concordam com sujeitos singulares, e a queda ocorre “in delivery”.",
    },
  ],
}
