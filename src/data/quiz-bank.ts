import type { Level } from "#/data/catalog.ts"

export interface QuizQuestion {
  id: string
  level: Level
  prompt: string
  options: string[]
  answer: number
  explanation: string
}

type Row = [
  prompt: string,
  options: string[],
  answer: number,
  explanation: string,
]

const INICIANTE: Row[] = [
  [
    "Complete: ___ name is Ana.",
    ["My", "I", "Me", "Mine"],
    0,
    "Antes de um substantivo usamos o possessivo: my name (meu nome).",
  ],
  [
    "Qual frase está correta?",
    ["She are happy.", "She is happy.", "She am happy.", "She be happy."],
    1,
    "Com he/she/it o verbo to be é is.",
  ],
  [
    "Qual é o plural de “child”?",
    ["childs", "childes", "children", "child"],
    2,
    "child tem plural irregular: children.",
  ],
  [
    "___ two books on the table.",
    ["There is", "There are", "It is", "Have"],
    1,
    "Com plural usamos there are.",
  ],
  [
    "I ___ coffee every morning.",
    ["drink", "drinks", "drinking", "drank"],
    0,
    "Com I/you/we/they o presente simples não leva -s.",
  ],
  [
    "She ___ English very well.",
    ["speak", "speaks", "speaking", "spoke"],
    1,
    "Terceira pessoa do singular recebe -s: she speaks.",
  ],
  [
    "___ you like pizza?",
    ["Does", "Do", "Are", "Is"],
    1,
    "Com you a pergunta no presente começa com do.",
  ],
  [
    "Como se diz “obrigado” em inglês?",
    ["Please", "Sorry", "Thank you", "Excuse me"],
    2,
    "Thank you significa obrigado; please é por favor.",
  ],
  [
    "Complete: I'm ___ Brazil.",
    ["of", "from", "in to", "at"],
    1,
    "from indica origem: I'm from Brazil.",
  ],
  [
    "São 7h30. Como você diz?",
    ["seven thirty", "seven thirteen", "thirty seven", "half seven"],
    0,
    "As horas são lidas hora + minutos: seven thirty.",
  ],
  [
    "My brother ___ 20 years old.",
    ["have", "has", "is", "are"],
    2,
    "Em inglês a idade usa o verbo to be: he is 20.",
  ],
  [
    "Where ___ your parents from?",
    ["is", "are", "am", "be"],
    1,
    "parents é plural, então usamos are.",
  ],
  [
    "Can you ___ the guitar?",
    ["to play", "playing", "play", "plays"],
    2,
    "Depois de can o verbo fica na forma base, sem to.",
  ],
  [
    "Qual despedida usar à noite?",
    ["Good morning", "Good night", "Hello", "Good afternoon"],
    1,
    "Good night é a despedida usada à noite.",
  ],
  [
    "___ is your favorite color?",
    ["What", "Who", "How", "When"],
    0,
    "Perguntamos sobre coisas com what.",
  ],
]

const INTERMEDIARIO: Row[] = [
  [
    "I ___ to London last year.",
    ["go", "went", "gone", "going"],
    1,
    "last year pede passado simples: went.",
  ],
  [
    "She has ___ in Brazil since 2019.",
    ["live", "lived", "living", "lives"],
    1,
    "Present perfect usa have/has + particípio: has lived.",
  ],
  [
    "___ you ever eaten sushi?",
    ["Did", "Have", "Do", "Are"],
    1,
    "“ever” com experiência de vida pede present perfect: Have you ever…",
  ],
  [
    "This book is ___ than that one.",
    ["good", "better", "best", "more good"],
    1,
    "Comparativo irregular de good é better.",
  ],
  [
    "I'm ___ for a new job.",
    ["look", "looking", "looked", "looks"],
    1,
    "Ação em andamento agora: I'm looking for.",
  ],
  [
    "If it ___ tomorrow, we'll stay home.",
    ["will rain", "rains", "rained", "is raining"],
    1,
    "Condicional 1: if + presente simples, resultado com will.",
  ],
  [
    "The report ___ by the team yesterday.",
    ["wrote", "was written", "is writing", "writes"],
    1,
    "Voz passiva no passado: was written.",
  ],
  [
    "You ___ see a doctor, you look sick.",
    ["should", "should to", "must to", "can to"],
    0,
    "should dá conselho e vem sem to: should see.",
  ],
  [
    "He said he ___ tired.",
    ["is", "was", "be", "are"],
    1,
    "No discurso indireto o presente volta um passo: is → was.",
  ],
  [
    "How ___ money do you need?",
    ["many", "much", "some", "few"],
    1,
    "money é incontável, então usamos how much.",
  ],
  [
    "I'm used to ___ early.",
    ["get up", "getting up", "got up", "gets up"],
    1,
    "Depois de “used to” como costume atual vem o gerúndio: getting up.",
  ],
  [
    "Take ___ your shoes before entering.",
    ["on", "off", "up", "in"],
    1,
    "take off = tirar (roupa, calçado).",
  ],
  [
    "We ___ dinner when the phone rang.",
    ["have", "had", "were having", "are having"],
    2,
    "Ação em andamento interrompida: were having.",
  ],
  [
    "She is interested ___ learning Spanish.",
    ["on", "in", "at", "for"],
    1,
    "A combinação correta é interested in.",
  ],
  [
    "___ I borrow your pen, please?",
    ["May", "Do", "Am", "Is"],
    0,
    "May I… é o pedido educado de permissão.",
  ],
]

const AVANCADO: Row[] = [
  [
    "By the time we arrived, the film ___.",
    ["started", "had started", "has started", "starts"],
    1,
    "Past perfect marca o que aconteceu antes de outro passado.",
  ],
  [
    "If I ___ known, I would have called you.",
    ["have", "had", "would have", "has"],
    1,
    "Third conditional: if + past perfect, would have + particípio.",
  ],
  [
    "Never ___ such a beautiful sunset.",
    ["I have seen", "have I seen", "I saw", "saw I"],
    1,
    "Advérbio negativo no início causa inversão: never have I seen.",
  ],
  [
    "She had her car ___ yesterday.",
    ["repair", "repaired", "repairing", "to repair"],
    1,
    "Causativo have something done usa o particípio.",
  ],
  [
    "It ___ that the company will merge.",
    ["is said", "says", "said", "is saying"],
    0,
    "Estrutura impessoal de relato: It is said that…",
  ],
  [
    "He must ___ missed the train.",
    ["have", "has", "had", "be"],
    0,
    "Dedução sobre o passado: must have + particípio.",
  ],
  [
    "What I need ___ more time.",
    ["are", "is", "be", "were"],
    1,
    "Na cleft sentence o sujeito é “what I need” (singular): is.",
  ],
  [
    "Not only ___ late, but he also forgot the file.",
    ["he was", "was he", "he is", "is he"],
    1,
    "Not only no início pede inversão: not only was he…",
  ],
  [
    "The proposal, ___ was submitted last week, needs review.",
    ["who", "which", "that", "what"],
    1,
    "Orações explicativas com vírgula usam which, não that.",
  ],
  [
    "I'd rather you ___ smoke here.",
    ["don't", "didn't", "won't", "not"],
    1,
    "would rather + passado simples fala do presente/futuro.",
  ],
  [
    "___ all the documents, she left the office.",
    ["Having signed", "Signed", "Sign", "To sign"],
    0,
    "Participle clause perfeita: having + particípio.",
  ],
  [
    "There's no point ___ about it now.",
    ["to worry", "worrying", "worry", "worried"],
    1,
    "A expressão fixa é there's no point + gerúndio.",
  ],
  [
    "The figures ___ slightly from last quarter.",
    ["differ", "different", "difference", "differently"],
    0,
    "Aqui precisamos do verbo: the figures differ.",
  ],
  [
    "He apologized ___ being late.",
    ["of", "for", "to", "about"],
    1,
    "apologize for + gerúndio é a combinação correta.",
  ],
  [
    "Had I known, I ___ differently.",
    ["would act", "would have acted", "had acted", "acted"],
    1,
    "Inversão de third conditional: Had I known, I would have acted.",
  ],
]

function build(rows: Row[], level: Level, prefix: string): QuizQuestion[] {
  return rows.map((row, index) => ({
    id: `${prefix}q${String(index + 1).padStart(2, "0")}`,
    level,
    prompt: row[0],
    options: row[1],
    answer: row[2],
    explanation: row[3],
  }))
}

export const QUIZ_BANK: QuizQuestion[] = [
  ...build(INICIANTE, "iniciante", "b"),
  ...build(INTERMEDIARIO, "intermediario", "i"),
  ...build(AVANCADO, "avancado", "a"),
]

export function questionsFor(level: Level): QuizQuestion[] {
  return QUIZ_BANK.filter((question) => question.level === level)
}

/** Draws a shuffled, de-duplicated set of questions for one quiz session. */
export function drawQuestions(level: Level, amount: number): QuizQuestion[] {
  const pool = [...questionsFor(level)]
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1))
    ;[pool[index], pool[swap]] = [pool[swap], pool[index]]
  }
  return pool.slice(0, Math.min(amount, pool.length))
}
