import type { LessonPracticeContent } from "#/lib/exercises.ts"

/** Plural dos substantivos — 10 perguntas. */
export const B07_PRACTICE: LessonPracticeContent = {
  id: "b07",
  level: "iniciante",
  exercises: [
    {
      kind: "completar",
      prompt: "The ___ are playing with the dogs.",
      hint: "As crianças estão brincando com os cachorros.",
      options: ["children", "childs", "childrens", "child"],
      answer: 0,
      explanation:
        "“Child” tem plural irregular: children. “Childs” não existe em inglês.",
    },
    {
      kind: "completar",
      prompt: "I need some ___ about the courses.",
      hint: "Preciso de algumas informações sobre os cursos.",
      options: ["information", "informations", "an information", "informing"],
      answer: 0,
      explanation:
        "“Information” é incontável e fica no singular: para contar, diga “a piece of information”.",
    },
    {
      kind: "traduzir",
      prompt: "Dois ônibus e três táxis estão esperando.",
      bank: ["Two", "buses", "and", "three", "taxis", "are", "waiting", "is"],
      answer: ["Two", "buses", "and", "three", "taxis", "are", "waiting"],
      explanation:
        "“Bus” termina em “s” e faz plural com “es”: buses. “Taxi” só acrescenta “s”.",
    },
    {
      kind: "traduzir",
      prompt: "Há muitas pessoas na rua.",
      bank: ["There", "are", "many", "people", "on", "the", "street", "is"],
      answer: ["There", "are", "many", "people", "on", "the", "street"],
      explanation:
        "“People” já é plural: nunca “peoples”. O verbo acompanha no plural: “there are”.",
    },
    {
      kind: "falar",
      prompt: "Two buses and three taxis are waiting.",
      pt: "Dois ônibus e três táxis estão esperando.",
      tip: "Em “buses” o plural tem som de “iz”: “BÁ-siz”. Sem esse pedacinho, vira “bus” no singular.",
    },
    {
      kind: "falar",
      prompt: "The children are playing with the dogs.",
      pt: "As crianças estão brincando com os cachorros.",
      tip: "“Children” tem dois sons: “TCHIL-dren”. O “ch” é igual ao nosso “tch”.",
    },

    {
      kind: "ouvirPalavra",
      audio: "children",
      options: ["crianças", "homens", "mulheres", "pessoas"],
      answer: 0,
      explanation:
        "“Children” é o plural de child. Nunca diga “childs” — é uma das poucas formas irregulares do inglês.",
    },
    {
      kind: "ouvirPalavra",
      audio: "teeth",
      options: ["dentes", "pés", "mãos", "olhos"],
      answer: 0,
      explanation:
        "“Teeth” é o plural de tooth. Para um dente só, a palavra é “tooth”.",
    },
    {
      kind: "ouvirFrase",
      audio: "Two buses and three taxis are waiting.",
      pt: "Dois ônibus e três táxis estão esperando.",
      options: [
        "Two buses and three taxis are waiting.",
        "Two buses and three taxis is waiting.",
        "Two cars and three taxis are waiting.",
        "Two buses and three drivers are waiting.",
      ],
      answer: 0,
      explanation:
        "Ouça “buses” com o plural em “iz” e o verbo “are”, que combina com dois sujeitos no plural.",
    },
    {
      kind: "ouvirFrase",
      audio: "I need some information about the courses.",
      pt: "Preciso de algumas informações sobre os cursos.",
      options: [
        "I need some information about the courses.",
        "I need some informations about the courses.",
        "I need some information about the classes.",
        "I need a information about the courses.",
      ],
      answer: 0,
      explanation:
        "Só uma frase está correta: “information” nunca vai para o plural em inglês.",
    },
  ],
}
