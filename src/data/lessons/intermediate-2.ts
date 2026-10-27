import type { LessonContent } from "./types.ts"

export const INTERMEDIATE_2: LessonContent[] = [
  {
    id: "i11",
    objective:
      "Dar conselhos, falar de regras e de obrigações com should, must e have to.",
    keyPoints: [
      "should = conselho, recomendação: You should rest.",
      "must = obrigação forte, regra, dedução: You must wear a seatbelt.",
      "have to = obrigação prática, imposta por fora: I have to work on Saturday.",
      "Negativas mudam o sentido: mustn't = proibido; don't have to = não precisa.",
    ],
    explanation: [
      "Os três falam de necessidade, mas com pesos diferentes. should sugere; must impõe e costuma vir de uma regra ou do próprio falante; have to descreve uma exigência externa, como horário ou contrato.",
      "A pegadinha está na negativa: mustn't é proibição (“não pode”), enquanto don't have to significa ausência de necessidade (“não precisa”).",
    ],
    examples: [
      {
        en: "You should drink more water.",
        pt: "Você deveria beber mais água.",
      },
      {
        en: "Passengers must show their ID.",
        pt: "Os passageiros devem mostrar documento.",
      },
      {
        en: "I have to send this report today.",
        pt: "Tenho que enviar este relatório hoje.",
      },
    ],
    vocab: [
      { en: "should", pt: "deveria (conselho)" },
      { en: "must", pt: "deve, tem que (forte)" },
      { en: "have to / has to", pt: "ter que (obrigação prática)" },
      { en: "mustn't x don't have to", pt: "não pode x não precisa" },
    ],
    practice: [
      {
        prompt: "Um amigo está cansado. Qual é o melhor conselho?",
        options: [
          "You must sleep.",
          "You should get some rest.",
          "You have to sleep or else.",
          "You can sleep tomorrow.",
        ],
        answer: 1,
        explanation: "Conselho amigável usa should: you should get some rest.",
      },
      {
        prompt: "Complete: “You ___ smoke here. It's forbidden.”",
        options: ["don't have to", "mustn't", "shouldn't have", "haven't to"],
        answer: 1,
        explanation:
          "Proibição usa mustn't. Don't have to significaria apenas que não é obrigatório.",
      },
    ],
    takeaway:
      "Você dá conselhos e fala de obrigações sem trocar o sentido da negativa.",
    tip: "Escreva três conselhos para um amigo e três obrigações do seu trabalho. Use should, must e have to.",
  },
  {
    id: "i12",
    objective: "Entender e usar os phrasal verbs mais frequentes do dia a dia.",
    keyPoints: [
      "O sentido muda com a partícula: get up (levantar), get on (embarcar), get along (se dar bem).",
      "Separáveis: turn on the TV / turn the TV on.",
      "Inseparáveis: look for (procurar), look after (cuidar).",
      "Os mais usados: get up, wake up, turn on/off, look for, give up, find out.",
    ],
    explanation: [
      "Phrasal verb é verbo + partícula, e a partícula muda o significado por completo. Não tente traduzir palavra por palavra: aprenda o bloco inteiro.",
      "Na fala, esses verbos aparecem o tempo todo. Quem só conhece o verbo formal (procure em vez de look for) entende, mas soa distante.",
    ],
    examples: [
      {
        en: "I get up at six every day.",
        pt: "Levanto às seis todos os dias.",
      },
      {
        en: "Can you turn off the lights, please?",
        pt: "Pode apagar as luzes, por favor?",
      },
      {
        en: "I'm looking for a new apartment.",
        pt: "Estou procurando um apartamento novo.",
      },
    ],
    vocab: [
      { en: "to get up / to wake up", pt: "levantar / acordar" },
      { en: "to turn on / to turn off", pt: "ligar / desligar" },
      { en: "to look for / to find out", pt: "procurar / descobrir" },
      { en: "to give up", pt: "desistir" },
    ],
    practice: [
      {
        prompt: "O que significa “look for”?",
        options: ["cuidar de", "procurar", "olhar para", "esperar por"],
        answer: 1,
        explanation: "look for = procurar. Para “cuidar de” usamos look after.",
      },
      {
        prompt: "Complete: “Please ___ the radio ___ — I can't hear you.”",
        options: ["turn / down", "turn / off", "get / off", "put / up"],
        answer: 0,
        explanation: "turn down = abaixar o volume.",
      },
    ],
    takeaway:
      "Você reconhece e usa os phrasal verbs que mais aparecem na fala.",
    tip: "Anote cinco phrasal verbs que você ouvir hoje e escreva uma frase com cada um.",
  },
  {
    id: "i13",
    objective:
      "Formular hipóteses reais e imaginárias com as condicionais 0, 1 e 2.",
    keyPoints: [
      "Zero: If you heat water, it boils — verdades gerais.",
      "Primeira: If it rains, we'll stay home — situação real e futura.",
      "Segunda: If I had money, I would travel — hipótese improvável.",
      "Regra de ouro: nunca use will depois de if.",
    ],
    explanation: [
      "A condicional liga uma condição a um resultado. Quanto mais distante da realidade, mais o verbo “volta” no tempo: presente, passado simples.",
      "Depois de if, o inglês usa presente mesmo quando fala do futuro. “If it will rain” é erro clássico: diga if it rains.",
    ],
    examples: [
      {
        en: "If you press this button, the machine stops.",
        pt: "Se você aperta este botão, a máquina para.",
      },
      {
        en: "If I have time, I'll call you tonight.",
        pt: "Se eu tiver tempo, ligo para você hoje à noite.",
      },
      {
        en: "If I were you, I would accept the offer.",
        pt: "Se eu fosse você, aceitaria a proposta.",
      },
    ],
    vocab: [
      { en: "if", pt: "se" },
      { en: "unless", pt: "a menos que" },
      { en: "in case", pt: "no caso de" },
      { en: "otherwise", pt: "caso contrário" },
    ],
    practice: [
      {
        prompt: "Complete: “If it ___ tomorrow, we'll cancel the picnic.”",
        options: ["will rain", "rains", "rained", "would rain"],
        answer: 1,
        explanation:
          "Primeira condicional: if + presente simples, resultado com will.",
      },
      {
        prompt: "Complete: “If I ___ rich, I would buy a house by the sea.”",
        options: ["am", "was being", "were", "will be"],
        answer: 2,
        explanation:
          "Segunda condicional usa passado simples depois de if; com I o mais tradicional é were.",
      },
    ],
    takeaway:
      "Você cria hipóteses realistas e imaginárias sem misturar os tempos.",
    tip: "Complete cinco frases: “If I had more time, I would…”. Diga cada uma em voz alta.",
  },
  {
    id: "i14",
    objective: "Unir duas ideias em uma frase só com who, which e that.",
    keyPoints: [
      "who para pessoas; which para coisas; that serve para os dois em orações restritivas.",
      "Sem vírgulas (restritiva): The man who called is my boss.",
      "Com vírgulas (explicativa) usa which/who, nunca that: My car, which is old, still works.",
      "where para lugares, whose para posse.",
    ],
    explanation: [
      "Orações relativas evitam duas frases curtas e repetitivas: em vez de “I met a woman. She lives in Canada”, diga “I met a woman who lives in Canada”.",
      "A diferença entre restritiva e explicativa é a vírgula: sem vírgula, a informação é essencial; com vírgula, é um comentário extra.",
    ],
    examples: [
      {
        en: "The woman who lives next door is a doctor.",
        pt: "A mulher que mora ao lado é médica.",
      },
      {
        en: "This is the book that changed my life.",
        pt: "Este é o livro que mudou minha vida.",
      },
      {
        en: "My brother, who lives in Canada, is visiting us.",
        pt: "Meu irmão, que mora no Canadá, está nos visitando.",
      },
    ],
    vocab: [
      { en: "who / which / that", pt: "que, o qual (pessoa / coisa / ambos)" },
      { en: "whose", pt: "cujo, de quem" },
      { en: "where", pt: "onde" },
      { en: "relative clause", pt: "oração relativa" },
    ],
    practice: [
      {
        prompt: "Complete: “The film ___ we watched was boring.”",
        options: ["who", "which", "whose", "where"],
        answer: 1,
        explanation:
          "Para coisas usamos which (ou that): the film which we watched.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "My car, that is old, still works.",
          "My car, which is old, still works.",
          "My car which is old, still works,",
          "My car, who is old, still works.",
        ],
        answer: 1,
        explanation:
          "Em orações explicativas (com vírgulas) usamos which, não that. Car não leva who.",
      },
    ],
    takeaway: "Você soa mais fluente unindo ideias em uma única frase.",
    tip: "Pegue cinco pares de frases curtas suas e junte cada par com who, which ou that.",
  },
  {
    id: "i15",
    objective: "Falar do que foi feito e de processos com a voz passiva.",
    keyPoints: [
      "Passiva: to be + particípio — The report was written.",
      "Presente: is done / are made. Passado: was done / were sent.",
      "Use quando quem fez não importa ou não é conhecido.",
      "O agente aparece com by quando é relevante: written by the team.",
    ],
    explanation: [
      "A voz passiva muda o foco do “quem fez” para “o que aconteceu”. É o tempo ideal para processos, regras e resultados.",
      "Ela aparece muito em e-mails profissionais e em textos técnicos: “Your order has been shipped”, “The meeting was postponed”.",
    ],
    examples: [
      {
        en: "This bridge was built in 1970.",
        pt: "Esta ponte foi construída em 1970.",
      },
      {
        en: "The invoices are sent every Monday.",
        pt: "As faturas são enviadas toda segunda.",
      },
      {
        en: "The project was approved by the director.",
        pt: "O projeto foi aprovado pelo diretor.",
      },
    ],
    vocab: [
      { en: "to be built / to be sent", pt: "ser construído / ser enviado" },
      { en: "to be made / to be done", pt: "ser feito" },
      { en: "to be postponed", pt: "ser adiado" },
      { en: "by", pt: "por (agente da passiva)" },
    ],
    practice: [
      {
        prompt:
          "Transforme para a passiva: “They delivered the package yesterday.”",
        options: [
          "The package was delivered yesterday.",
          "The package is delivered yesterday.",
          "The package delivered yesterday.",
          "The package has delivered yesterday.",
        ],
        answer: 0,
        explanation:
          "Passado passivo: was/were + particípio. The package was delivered.",
      },
      {
        prompt: "Complete: “English ___ in many countries.”",
        options: ["speaks", "is spoken", "is speaking", "spoken"],
        answer: 1,
        explanation: "Processo e foco na ação: is spoken.",
      },
    ],
    takeaway:
      "Você fala de processos e resultados sem precisar dizer quem fez.",
    tip: "Descreva como três coisas do seu dia são feitas: “Bread is made in…”, “E-mails are sent…",
  },
  {
    id: "i16",
    objective: "Repassar recados e conversas com o discurso indireto.",
    keyPoints: [
      "O tempo volta um passo: “I am tired” → He said he was tired.",
      "Pronomes se ajustam a quem fala: my → his/her.",
      "Presente → passado; will → would; can → could; did → had done.",
      "say não pede pessoa (he said that…), tell pede (he told me that…).",
    ],
    explanation: [
      "No discurso indireto você conta o que alguém disse, sem repetir as palavras exatas. O tempo verbal recua porque aquilo foi dito antes.",
      "Não recuamos quando a informação continua verdadeira: “She said she lives in Rio” é aceitável se ela ainda mora lá.",
    ],
    examples: [
      {
        en: "She said she was busy that day.",
        pt: "Ela disse que estava ocupada naquele dia.",
      },
      {
        en: "He told me he would call later.",
        pt: "Ele me disse que ligaria depois.",
      },
      {
        en: "They asked if we could help.",
        pt: "Eles perguntaram se podíamos ajudar.",
      },
    ],
    vocab: [
      {
        en: "to say / to tell",
        pt: "dizer (sem pessoa) / contar (com pessoa)",
      },
      { en: "to ask if", pt: "perguntar se" },
      { en: "that day / the next day", pt: "naquele dia / no dia seguinte" },
      { en: "according to", pt: "segundo" },
    ],
    practice: [
      {
        prompt:
          "Transforme: “I'm working late.” → He said he ___ working late.",
        options: ["is", "was", "were", "will be"],
        answer: 1,
        explanation:
          "O presente recua para o passado: he said he was working late.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "She said me that she was late.",
          "She told me that she was late.",
          "She told that she was late.",
          "She said to me that she is late.",
        ],
        answer: 1,
        explanation:
          "tell precisa da pessoa: told me. say funciona sem ela: said that…",
      },
    ],
    takeaway: "Você repassa recados e notícias mantendo a informação correta.",
    tip: "Conte para alguém em inglês uma conversa que você teve hoje, usando said e told.",
  },
  {
    id: "i17",
    objective:
      "Saber quando usar gerúndio (-ing) e quando usar infinitivo (to + verbo).",
    keyPoints: [
      "Verbos que pedem -ing: enjoy, finish, avoid, mind, suggest, keep.",
      "Verbos que pedem to: want, need, decide, hope, promise, plan.",
      "Depois de preposição, sempre -ing: interested in learning.",
      "Alguns aceitam os dois com sentidos diferentes: stop smoking x stop to smoke.",
    ],
    explanation: [
      "Não existe regra visual: a escolha depende do verbo que vem antes. Por isso vale memorizar em blocos, junto com o verbo principal.",
      "A estrutura mais produtiva é depois de preposição: in, on, at, for, about, of — sempre com -ing.",
    ],
    examples: [
      { en: "I enjoy reading before bed.", pt: "Curto ler antes de dormir." },
      {
        en: "We decided to move to another city.",
        pt: "Decidimos nos mudar para outra cidade.",
      },
      {
        en: "She's good at solving problems.",
        pt: "Ela é boa em resolver problemas.",
      },
    ],
    vocab: [
      { en: "to enjoy / to avoid", pt: "curtir / evitar" },
      { en: "to decide / to hope", pt: "decidir / esperar" },
      { en: "to be good at", pt: "ser bom em" },
      { en: "to keep doing", pt: "continuar fazendo" },
    ],
    practice: [
      {
        prompt: "Complete: “I need ___ some rest.”",
        options: ["taking", "to take", "take", "took"],
        answer: 1,
        explanation: "need pede infinitivo com to: need to take.",
      },
      {
        prompt: "Complete: “He's interested in ___ a new language.”",
        options: ["learn", "to learn", "learning", "learns"],
        answer: 2,
        explanation: "Depois de preposição (in) usamos gerúndio: in learning.",
      },
    ],
    takeaway: "Você escolhe entre -ing e to conforme o verbo ou a preposição.",
    tip: "Faça duas colunas no caderno: verbos que pedem -ing e verbos que pedem to. Acrescente um por dia.",
  },
  {
    id: "i18",
    objective: "Falar de hábitos do passado com used to e be used to.",
    keyPoints: [
      "used to + verbo base = costumava: I used to play soccer.",
      "be used to + -ing = estar acostumado: I'm used to waking up early.",
      "Negativa e pergunta: didn't use to / Did you use to…?",
      "Só existe no passado para hábitos que acabaram.",
    ],
    explanation: [
      "used to marca algo que era verdade no passado e não é mais. É perfeito para falar de infância e de mudanças de vida.",
      "Cuidado com o primo dele: be used to não tem nada a ver com passado — significa estar habituado a algo, no presente.",
    ],
    examples: [
      {
        en: "I used to live in the countryside.",
        pt: "Eu morava no interior (e não moro mais).",
      },
      {
        en: "She didn't use to like coffee.",
        pt: "Ela não gostava de café (antes).",
      },
      {
        en: "I'm used to working under pressure.",
        pt: "Estou acostumado a trabalhar sob pressão.",
      },
    ],
    vocab: [
      { en: "used to + verbo", pt: "costumava" },
      { en: "be used to + -ing", pt: "estar acostumado a" },
      { en: "any more", pt: "mais (em negativas: não mais)" },
      { en: "back then", pt: "naquela época" },
    ],
    practice: [
      {
        prompt: "Complete: “I ___ ride a bike to school.”",
        options: ["used to", "use to", "am used to", "used"],
        answer: 0,
        explanation: "Hábito do passado: used to ride.",
      },
      {
        prompt: "Complete: “She's used ___ in a noisy office.”",
        options: ["to work", "to working", "working", "work"],
        answer: 1,
        explanation: "be used to + gerúndio: used to working.",
      },
    ],
    takeaway: "Você contrasta o que costumava fazer com o que faz hoje.",
    tip: "Escreva cinco frases com used to sobre sua vida há dez anos.",
  },
  {
    id: "i19",
    objective:
      "Montar cenas no passado e encaixar o que interrompeu, com past continuous.",
    keyPoints: [
      "Estrutura: was/were + -ing — I was reading.",
      "Ação longa em was/were + -ing; ação curta que interrompe no passado simples.",
      "Conector típico: when — I was cooking when he called.",
      "Enquanto, simultâneo: while I was studying, she was working.",
    ],
    explanation: [
      "O past continuous desenha o cenário, e o passado simples traz o acontecimento. Juntar os dois cria a narrativa natural do inglês falado.",
      "É o tempo das histórias: “It was raining and I was waiting for the bus when my phone rang”.",
    ],
    examples: [
      {
        en: "I was walking home when I saw her.",
        pt: "Estava caminhando para casa quando a vi.",
      },
      {
        en: "They were talking while I was working.",
        pt: "Eles estavam conversando enquanto eu trabalhava.",
      },
      {
        en: "What were you doing at 8 p.m.?",
        pt: "O que você estava fazendo às 20h?",
      },
    ],
    vocab: [
      { en: "while", pt: "enquanto" },
      { en: "when", pt: "quando" },
      { en: "suddenly", pt: "de repente" },
      { en: "at that moment", pt: "naquele momento" },
    ],
    practice: [
      {
        prompt: "Complete: “I ___ dinner when the phone rang.”",
        options: ["cooked", "was cooking", "cook", "am cooking"],
        answer: 1,
        explanation: "Ação em andamento interrompida: was cooking.",
      },
      {
        prompt: "Complete: “They ___ TV when I arrived.”",
        options: ["watched", "were watching", "watch", "have watched"],
        answer: 1,
        explanation: "Cena em andamento no passado: were watching.",
      },
    ],
    takeaway: "Você conta histórias com cenário e acontecimento bem separados.",
    tip: "Conte uma história curta de ontem em três frases, começando com “I was… when…",
  },
  {
    id: "i20",
    objective:
      "Confirmar informação do jeito que os nativos fazem, com question tags.",
    keyPoints: [
      "Frase afirmativa → tag negativa: You're Brazilian, aren't you?",
      "Frase negativa → tag afirmativa: She isn't here, is she?",
      "A tag repete o auxiliar: You can swim, can't you?",
      "Entonação sobe quando é pergunta real e desce quando é só confirmação.",
    ],
    explanation: [
      "A question tag transforma uma afirmação em um convite à confirmação. Em conversa ela aparece o tempo todo e dá naturalidade à fala.",
      "Se não há auxiliar na frase, usamos do/does/did: You work here, don't you?",
    ],
    examples: [
      { en: "You're from Brazil, aren't you?", pt: "Você é do Brasil, não é?" },
      {
        en: "She doesn't like coffee, does she?",
        pt: "Ela não gosta de café, gosta?",
      },
      {
        en: "We should leave now, shouldn't we?",
        pt: "Devíamos sair agora, não é?",
      },
    ],
    vocab: [
      { en: "isn't it? / aren't you?", pt: "não é? / não é você?" },
      { en: "don't you? / doesn't he?", pt: "não é? (com do/does)" },
      { en: "can't you?", pt: "você não pode?" },
      { en: "right?", pt: "certo? (informal)" },
    ],
    practice: [
      {
        prompt: "Complete: “You speak English, ___?”",
        options: ["do you", "don't you", "aren't you", "isn't it"],
        answer: 1,
        explanation:
          "Frase afirmativa com verbo sem auxiliar visível pede don't you?",
      },
      {
        prompt: "Complete: “She's your sister, ___?”",
        options: ["isn't she", "is she", "doesn't she", "aren't you"],
        answer: 0,
        explanation: "Frase afirmativa com is gera tag negativa: isn't she?",
      },
    ],
    takeaway: "Você confirma informação com naturalidade em qualquer conversa.",
    tip: "Pegue cinco frases suas e acrescente uma question tag a cada uma.",
  },
]
