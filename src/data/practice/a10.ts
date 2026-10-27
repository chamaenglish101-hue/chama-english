import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Passiva avançada e verbos de relato — 10 perguntas. */
export const A10_PRACTICE: LessonPracticeContent = {
  id: "a10",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "It ___ said that the company will relocate.",
      hint: "Dizem que a empresa vai se mudar.",
      options: ["is", "has", "was been", "does"],
      answer: 0,
      explanation:
        "“It is said that…” atribui a informação a uma fonte genérica, sem dizer quem falou.",
    },
    {
      kind: "completar",
      prompt: "The CEO is believed ___ be negotiating the deal.",
      hint: "Acredita-se que o CEO esteja negociando o acordo.",
      options: ["to", "for", "that", "of"],
      answer: 0,
      explanation:
        "Na passiva de relato com sujeito, o verbo vem no infinitivo com “to”: “is believed to be negotiating”.",
    },
    {
      kind: "traduzir",
      prompt: "Todas as candidaturas devem ser enviadas online.",
      bank: [
        "All",
        "applications",
        "must",
        "be",
        "submitted",
        "online",
        "are",
        "submitting",
      ],
      answer: ["All", "applications", "must", "be", "submitted", "online"],
      explanation:
        "Com modal, a passiva fica “must be submitted”: o foco vai para a candidatura, não para quem envia.",
    },
    {
      kind: "traduzir",
      prompt: "Dizem que a empresa vai se mudar.",
      bank: [
        "It",
        "is",
        "said",
        "that",
        "the",
        "company",
        "will",
        "relocate",
        "says",
        "relocates",
      ],
      answer: [
        "It",
        "is",
        "said",
        "that",
        "the",
        "company",
        "will",
        "relocate",
      ],
      explanation:
        "“It is said that” é a fórmula impessoal típica de notícias e relatórios: sem fonte explícita.",
    },
    {
      kind: "falar",
      prompt: "It is said that the company will relocate.",
      pt: "Dizem que a empresa vai se mudar.",
      tip: "Diga “It is said” como um blocos só, sem pausa. O tom fica formal e distante, de propósito.",
    },
    {
      kind: "falar",
      prompt: "All applications must be submitted online.",
      pt: "Todas as candidaturas devem ser enviadas online.",
      tip: "“Must be submitted” sai como “mast-bi-sob-MÍ-tid”. O foco cai em “online” no fim.",
    },
    {
      kind: "ouvirPalavra",
      audio: "it is believed",
      options: [
        "acredita-se que",
        "eu acredito que",
        "acreditei que",
        "acreditam em",
      ],
      answer: 0,
      explanation:
        "“It is believed” é a passiva impessoal usada quando a fonte da informação não é identificada.",
    },
    {
      kind: "ouvirPalavra",
      audio: "is expected to",
      options: [
        "espera-se que",
        "estava esperando",
        "esperou por",
        "é esperado de",
      ],
      answer: 0,
      explanation:
        "“Is expected to” projeta o futuro de forma impessoal: “Sales are expected to rise”.",
    },
    {
      kind: "ouvirFrase",
      audio: "It is said that the company will relocate.",
      pt: "Dizem que a empresa vai se mudar.",
      options: [
        "It is said that the company will relocate.",
        "It says that the company will relocate.",
        "It is said that the company would relocate.",
        "It is said the company will relocate it.",
      ],
      answer: 0,
      explanation:
        "A passiva “it is said that” mantém a fonte anônima. “It says” mudaria o sujeito para a própria frase.",
    },
    {
      kind: "ouvirFrase",
      audio: "All applications must be submitted online.",
      pt: "Todas as candidaturas devem ser enviadas online.",
      options: [
        "All applications must be submitted online.",
        "All applications must submit online.",
        "All applications must be submitting online.",
        "All applications must been submitted online.",
      ],
      answer: 0,
      explanation:
        "Depois do modal, a passiva é “be + particípio”. Sem o “be”, a candidatura passaria a enviar algo.",
    },
  ],
}
