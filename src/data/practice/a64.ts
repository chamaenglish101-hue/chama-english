import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Eufemismos e linguagem indireta — 10 perguntas. */
export const A64_PRACTICE: LessonPracticeContent = {
  id: "a64",
  level: "avancado",
  exercises: [
    {
      kind: "completar",
      prompt: "We had to ___ go of two team members last quarter.",
      hint: "Tivemos que dispensar dois integrantes do time no último trimestre.",
      options: ["let", "make", "take", "put"],
      answer: 0,
      explanation:
        "“To let someone go” é o eufemismo padrão para demitir, mais suave que “fire”.",
    },
    {
      kind: "completar",
      prompt: "The project is being ___ down for now.",
      hint: "O projeto está sendo encerrado por enquanto.",
      options: ["wound", "wind", "winding", "wounded"],
      answer: 0,
      explanation:
        "“To wind down” é encerrar aos poucos; a passiva correta é “is being wound down”.",
    },
    {
      kind: "traduzir",
      prompt: "Tivemos que dispensar dois integrantes do time.",
      bank: [
        "We",
        "had",
        "to",
        "let",
        "two",
        "team",
        "members",
        "go",
        "lets",
        "going",
      ],
      answer: ["We", "had", "to", "let", "two", "team", "members", "go"],
      explanation:
        "A ordem é fixa: “let” + pessoa + “go”. Trocar a ordem destrói a expressão.",
    },
    {
      kind: "traduzir",
      prompt:
        "Prefiro não comentar isso agora; podemos conversar em particular?",
      bank: [
        "I'd",
        "rather",
        "not",
        "comment",
        "on",
        "that",
        "now",
        "could",
        "we",
        "talk",
        "in",
        "private",
        "private's",
      ],
      answer: [
        "I'd",
        "rather",
        "not",
        "comment",
        "on",
        "that",
        "now",
        "could",
        "we",
        "talk",
        "in",
        "private",
      ],
      explanation:
        "“I'd rather not” recusa sem confronto; “in private” mantém a conversa reservada.",
    },
    {
      kind: "falar",
      prompt: "We had to let two team members go last quarter.",
      pt: "Tivemos que dispensar dois integrantes do time no último trimestre.",
      tip: "Fale “let… go” com pausa curta no meio: é a expressão inteira, não duas palavras soltas.",
    },
    {
      kind: "falar",
      prompt: "I'd rather not comment on that now.",
      pt: "Prefiro não comentar isso agora.",
      tip: "Contraia “I'd” numa sílaba só e mantenha o tom neutro — é recusa educada, não seca.",
    },
    {
      kind: "ouvirPalavra",
      audio: "to let someone go",
      options: [
        "dispensar alguém do trabalho",
        "deixar alguém sair da sala",
        "liberar alguém mais cedo",
        "soltar uma pessoa",
      ],
      answer: 0,
      explanation:
        "“To let someone go” é o eufemismo mais usado para demissão em contextos profissionais.",
    },
    {
      kind: "ouvirPalavra",
      audio: "restructuring",
      options: [
        "reestruturação",
        "construção nova",
        "reforma do prédio",
        "reunião de rotina",
      ],
      answer: 0,
      explanation:
        "“Restructuring” costuma aparecer em comunicados como alternativa indireta a “demissões em massa”.",
    },
    {
      kind: "ouvirFrase",
      audio: "We had to let two team members go last quarter.",
      pt: "Tivemos que dispensar dois integrantes do time no último trimestre.",
      options: [
        "We had to let two team members go last quarter.",
        "We had to let go two team members last quarter.",
        "We had to let two team members to go last quarter.",
        "We have to let two team members go last quarter.",
      ],
      answer: 0,
      explanation:
        "A ordem é “let + pessoa + go”, e o passado da obrigação é “had to”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Let's discuss the details offline, if that's okay.",
      pt: "Vamos tratar dos detalhes fora daqui, se estiver tudo bem.",
      options: [
        "Let's discuss the details offline, if that's okay.",
        "Let's discuss about the details offline, if that's okay.",
        "Let's discussing the details offline, if that's okay.",
        "Let's discuss the details offline, if that okay.",
      ],
      answer: 0,
      explanation:
        "“Discuss” não leva “about”, e depois de “let's” fica o verbo base; “that's okay” mantém a estrutura completa.",
    },
  ],
}
