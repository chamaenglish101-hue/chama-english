import type { LessonContent } from "./types.ts"

export const BEGINNER_2: LessonContent[] = [
  {
    id: "b11",
    objective:
      "Fazer perguntas no presente simples com do e does e responder de forma curta, como um nativo.",
    keyPoints: [
      "Pergunta: Do + I/you/we/they + verbo na forma base — Do you work here?",
      "Com he/she/it o auxiliar é does e o verbo perde o -s — Does she work here?",
      "Resposta curta: Yes, I do / No, she doesn't.",
      "Palavra de pergunta vem antes do auxiliar: Where do you live?",
    ],
    explanation: [
      "Em inglês a pergunta não se monta só mudando a entonação: precisamos do auxiliar do ou does antes do sujeito. Com he, she e it o auxiliar é does e o verbo volta para a forma base, porque o -s já está no auxiliar.",
      "O erro clássico é dobrar o -s: “Does she works?” está errado. Escolha uma casa só para o -s — ou no auxiliar, ou no verbo, nunca nos dois.",
    ],
    examples: [
      {
        en: "Do you speak English? — Yes, I do.",
        pt: "Você fala inglês? — Sim, falo.",
      },
      {
        en: "Does your brother live in Recife?",
        pt: "Seu irmão mora em Recife?",
      },
      {
        en: "Where do they work? — They work downtown.",
        pt: "Onde eles trabalham? — Trabalham no centro.",
      },
    ],
    vocab: [
      { en: "to work", pt: "trabalhar" },
      { en: "to live", pt: "morar" },
      { en: "Where…?", pt: "Onde…?" },
      { en: "short answers", pt: "respostas curtas (Yes, I do / No, I don't)" },
    ],
    practice: [
      {
        prompt: "Complete: “___ she like coffee?”",
        options: ["Do", "Does", "Is", "Are"],
        answer: 1,
        explanation:
          "Com she usamos does. O verbo like fica na forma base, sem -s, porque o -s já está no auxiliar.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "Does they live here?",
          "Do they live here?",
          "They do live here?",
          "Do they lives here?",
        ],
        answer: 1,
        explanation:
          "Com they usamos do e o verbo fica na forma base: Do they live here?",
      },
    ],
    takeaway:
      "Você pergunta e responde curto no presente simples sem dobrar o -s.",
    tip: "Escreva cinco perguntas com do/does para um colega e faça todas em voz alta. Depois responda cada uma com yes ou no.",
  },
  {
    id: "b12",
    objective:
      "Dizer o que existe em um lugar com there is e there are, incluindo a forma negativa e a pergunta.",
    keyPoints: [
      "There is + singular: There is a bank on this street.",
      "There are + plural: There are two buses at 7.",
      "Negativa: There isn't / There aren't.",
      "Pergunta: Is there…? / Are there…? — o verbo vem primeiro.",
    ],
    explanation: [
      "There is e there are significam “há” ou “existe”. A escolha depende do que vem depois: singular pede is, plural pede are. Nunca usamos there have.",
      "Essa estrutura é a forma mais natural de descrever um lugar: sua casa, sua rua, sua cidade, um hotel, um restaurante.",
    ],
    examples: [
      {
        en: "There is a park near my house.",
        pt: "Há um parque perto da minha casa.",
      },
      {
        en: "There are three bedrooms in the apartment.",
        pt: "Há três quartos no apartamento.",
      },
      {
        en: "Is there a pharmacy around here? — Yes, there is.",
        pt: "Tem uma farmácia por aqui? — Sim, tem.",
      },
    ],
    vocab: [
      { en: "there is / there are", pt: "há, existe, tem" },
      { en: "near", pt: "perto" },
      { en: "around here", pt: "por aqui" },
      { en: "next to", pt: "ao lado de" },
    ],
    practice: [
      {
        prompt: "Complete: “___ two supermarkets on my street.”",
        options: ["There is", "There are", "It is", "They is"],
        answer: 1,
        explanation: "two supermarkets é plural, então usamos there are.",
      },
      {
        prompt: "Como perguntar se existe uma padaria perto?",
        options: [
          "Is there a bakery near here?",
          "There is a bakery near here?",
          "Has a bakery near here?",
          "Are there a bakery near here?",
        ],
        answer: 0,
        explanation:
          "Na pergunta o verbo vem antes de there: Is there…? (singular). Are there…? seria para plural.",
      },
    ],
    takeaway: "Você descreve qualquer lugar dizendo o que existe ali.",
    tip: "Descreva sua casa em cinco frases começando com there is ou there are. Sem dicionário: use as palavras que você já tem.",
  },
  {
    id: "b13",
    objective:
      "Localizar objetos e pessoas com as preposições de lugar mais usadas.",
    keyPoints: [
      "in = dentro; on = sobre/superfície; under = embaixo.",
      "Next to / beside = ao lado; between = entre dois; behind = atrás.",
      "In front of = na frente de; near = perto.",
      "Em cima de uma parede usamos on; dentro de um espaço fechado usamos in.",
    ],
    explanation: [
      "Preposições de lugar aparecem em toda conversa prática: “onde está a chave?”, “onde fica o banheiro?”. A boa notícia é que são poucas e se repetem.",
      "Cuidado com a diferença entre in e on quando falamos de superfícies e espaços: in a box é dentro; on the table é sobre a mesa.",
    ],
    examples: [
      { en: "The keys are on the table.", pt: "As chaves estão sobre a mesa." },
      {
        en: "My backpack is under the chair.",
        pt: "Minha mochila está embaixo da cadeira.",
      },
      {
        en: "The bank is between the pharmacy and the school.",
        pt: "O banco fica entre a farmácia e a escola.",
      },
    ],
    vocab: [
      { en: "in / on / under", pt: "dentro / sobre / embaixo" },
      { en: "next to", pt: "ao lado de" },
      { en: "between", pt: "entre" },
      { en: "behind / in front of", pt: "atrás / na frente de" },
    ],
    practice: [
      {
        prompt: "Complete: “The cat is ___ the box.” (dentro)",
        options: ["on", "in", "under", "between"],
        answer: 1,
        explanation: "Dentro é in: the cat is in the box.",
      },
      {
        prompt: "Complete: “I live ___ the restaurant.” (ao lado)",
        options: ["next to", "between", "under", "behind of"],
        answer: 0,
        explanation:
          "Ao lado é next to (ou beside). “Behind” sozinho já significa atrás.",
      },
    ],
    takeaway: "Você diz onde está qualquer coisa em inglês.",
    tip: "Olhe para a sua mesa e diga em voz alta onde cada objeto está, usando in, on e under.",
  },
  {
    id: "b14",
    objective:
      "Descrever pessoas e coisas usando adjetivos na ordem que o inglês exige.",
    keyPoints: [
      "O adjetivo vem antes do substantivo: a new car, an interesting book.",
      "O adjetivo não muda no plural: two new cars (nunca news).",
      "Ordem básica: opinião + tamanho + idade + cor + origem + material.",
      "Depois do verbo to be, o adjetivo aparece no fim: The car is new.",
    ],
    explanation: [
      "Em português dizemos “carro novo”; em inglês a ordem se inverte: new car. Esse detalhe pequeno muda a naturalidade da frase inteira.",
      "Outro ponto importante: adjetivos em inglês não têm plural nem gênero. Big serve para homem, mulher, carro e cidade.",
    ],
    examples: [
      {
        en: "She bought a beautiful small old house.",
        pt: "Ela comprou uma casa pequena e antiga bonita.",
      },
      {
        en: "I have two new blue jackets.",
        pt: "Tenho dois casacos azuis novos.",
      },
      { en: "The food is delicious.", pt: "A comida está deliciosa." },
    ],
    vocab: [
      { en: "big / small", pt: "grande / pequeno" },
      { en: "new / old", pt: "novo / velho" },
      { en: "expensive / cheap", pt: "caro / barato" },
      { en: "beautiful / ugly", pt: "bonito / feio" },
    ],
    practice: [
      {
        prompt: "Qual frase está correta?",
        options: [
          "I bought a car new.",
          "I bought a new car.",
          "I bought a news car.",
          "I bought car new a.",
        ],
        answer: 1,
        explanation:
          "Em inglês o adjetivo vem antes do substantivo: a new car.",
      },
      {
        prompt: "Complete: “They are ___ students.”",
        options: [
          "intelligents",
          "intelligent",
          "inteligentes",
          "intelligence",
        ],
        answer: 1,
        explanation: "Adjetivo em inglês não tem plural: intelligent students.",
      },
    ],
    takeaway: "Você descreve objetos e pessoas na ordem natural do inglês.",
    tip: "Escolha cinco objetos seus e descreva cada um com dois adjetivos, sempre antes do substantivo.",
  },
  {
    id: "b15",
    objective: "Falar de habilidades e pedir permissão com can e can't.",
    keyPoints: [
      "can + verbo na forma base: I can swim.",
      "can't (cannot) para negar: She can't drive.",
      "Pergunta: Can you…? — resposta curta Yes, I can / No, I can't.",
      "can também pede e concede permissão: Can I sit here?",
    ],
    explanation: [
      "can é um verbo modal: não leva to nem -s, e a mesma forma serve para todas as pessoas. I can, she can, they can.",
      "Ele cobre duas ideias do português: “saber fazer” (habilidade) e “poder” (permissão). O contexto deixa claro qual é qual.",
    ],
    examples: [
      {
        en: "I can speak a little English.",
        pt: "Consigo falar um pouco de inglês.",
      },
      {
        en: "She can't come to the meeting today.",
        pt: "Ela não pode vir à reunião hoje.",
      },
      {
        en: "Can I use your phone, please? — Sure, you can.",
        pt: "Posso usar seu telefone, por favor? — Claro, pode.",
      },
    ],
    vocab: [
      { en: "to swim", pt: "nadar" },
      { en: "to drive", pt: "dirigir" },
      { en: "to cook", pt: "cozinhar" },
      { en: "sure / of course", pt: "claro, sem problema" },
    ],
    practice: [
      {
        prompt: "Complete: “He can ___ the piano.”",
        options: ["to play", "play", "plays", "playing"],
        answer: 1,
        explanation:
          "Depois de can o verbo fica na forma base, sem to e sem -s.",
      },
      {
        prompt: "Como pedir permissão para entrar?",
        options: [
          "Can I come in?",
          "Can I to come in?",
          "I can come in?",
          "Do I can come in?",
        ],
        answer: 0,
        explanation: "Pergunta com can: Can I come in? Sem to e sem do.",
      },
    ],
    takeaway: "Você diz o que sabe fazer e pede permissão com educação.",
    tip: "Faça uma lista de cinco coisas que você sabe fazer e cinco que não sabe, usando can e can't.",
  },
  {
    id: "b16",
    objective:
      "Falar do que você gosta, ama e detesta com like, love e hate + -ing.",
    keyPoints: [
      "Depois de like, love, hate e enjoy vem verbo com -ing: I love cooking.",
      "A terceira pessoa leva -s no primeiro verbo: She likes dancing.",
      "Também aceitamos “like to + verbo”, mas -ing é o mais comum na fala.",
      "Pergunta: Do you like…? — resposta curta com do.",
    ],
    explanation: [
      "Essa estrutura resolve uma das primeiras conversas em inglês: falar do que a gente gosta. O padrão é fixo e por isso rende rápido.",
      "Cuidado: “I like to cook” está correto, mas “I like cook” não existe. Depois do verbo de gosto o próximo verbo sempre toma uma forma: -ing ou to.",
    ],
    examples: [
      { en: "I love listening to music.", pt: "Adoro ouvir música." },
      { en: "She hates getting up early.", pt: "Ela detesta acordar cedo." },
      {
        en: "Do you like traveling? — Yes, I love it.",
        pt: "Você gosta de viajar? — Sim, adoro.",
      },
    ],
    vocab: [
      { en: "to love", pt: "amar, adorar" },
      { en: "to like", pt: "gostar" },
      { en: "to hate", pt: "odiar, detestar" },
      { en: "to enjoy", pt: "curtir, gostar de" },
    ],
    practice: [
      {
        prompt: "Complete: “I like ___ books at night.”",
        options: ["read", "reading", "to reading", "reads"],
        answer: 1,
        explanation:
          "Depois de like, o verbo seguinte fica no gerúndio: I like reading.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "She loves cook.",
          "She love cooking.",
          "She loves cooking.",
          "She loves to cooking.",
        ],
        answer: 2,
        explanation:
          "Terceira pessoa leva -s (loves) e o verbo seguinte fica no gerúndio (cooking).",
      },
    ],
    takeaway: "Você fala dos seus gostos e desgostos com a estrutura correta.",
    tip: "Faça três listas: o que você ama, o que gosta e o que detesta. Três itens em cada, com -ing.",
  },
  {
    id: "b17",
    objective:
      "Pedir comida, perguntar preço e pedir a conta em um restaurante.",
    keyPoints: [
      "Para pedir: I'd like… / Can I have…? — “I want” soa seco.",
      "Perguntas úteis: What do you recommend? Is this spicy?",
      "Depois da refeição: Could we have the bill, please?",
      "Água: still water (sem gás) ou sparkling water (com gás).",
    ],
    explanation: [
      "No restaurante o vocabulário é pequeno, mas as fórmulas de educação fazem toda a diferença. I'd like substitui o direto “I want” e soa muito mais natural.",
      "Vale treinar as perguntas de restrição alimentar: sem carne, sem lactose, sem glúten. Elas evitam problemas reais.",
    ],
    examples: [
      {
        en: "I'd like the grilled chicken, please.",
        pt: "Eu gostaria do frango grelhado, por favor.",
      },
      {
        en: "Is this dish spicy? I can't eat pepper.",
        pt: "Este prato é picante? Não posso comer pimenta.",
      },
      {
        en: "Could we have the bill, please?",
        pt: "Poderia trazer a conta, por favor?",
      },
    ],
    vocab: [
      { en: "menu / bill", pt: "cardápio / conta" },
      {
        en: "starter / main course / dessert",
        pt: "entrada / prato principal / sobremesa",
      },
      { en: "still / sparkling water", pt: "água sem gás / com gás" },
      { en: "tip", pt: "gorjeta" },
    ],
    practice: [
      {
        prompt: "Qual é a forma mais educada de pedir um prato?",
        options: [
          "I want a steak.",
          "I'd like a steak, please.",
          "Give me a steak.",
          "You bring a steak.",
        ],
        answer: 1,
        explanation:
          "I'd like… , please é a fórmula educada; I want soa brusco.",
      },
      {
        prompt: "Como pedir a conta ao final da refeição?",
        options: [
          "Could we have the bill, please?",
          "I want money.",
          "Where is my food?",
          "The table is finished.",
        ],
        answer: 0,
        explanation:
          "Could we have the bill, please? é a forma padrão de pedir a conta.",
      },
    ],
    takeaway: "Você faz o pedido inteiro, do menu à conta, sem travar.",
    tip: "Leia um menu em inglês de um restaurante que você conhece e traduza cinco pratos em voz alta.",
  },
  {
    id: "b18",
    objective:
      "Falar dias, meses e datas em inglês sem confundir a ordem dos números.",
    keyPoints: [
      "Dias: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday — sempre com letra maiúscula.",
      "Meses também levam maiúscula: January, February, March…",
      "Datas: escritas American English month + day (May 5); no inglês britânico, day + month (5 May).",
      "Sempre ordinal na fala: May fifth, the fifth of May.",
    ],
    explanation: [
      "Datas são um clássico de confusão: em inglês americano o mês vem antes do dia, então 5/3 significa 5 de março. Em inglês britânico a ordem se inverte.",
      "Para falar as datas usamos números ordinais: first, second, third, fourth… até o dia 31.",
    ],
    examples: [
      {
        en: "My birthday is on May 5th.",
        pt: "Meu aniversário é em 5 de maio.",
      },
      {
        en: "The meeting is next Wednesday at 10 a.m.",
        pt: "A reunião é na próxima quarta às 10h.",
      },
      { en: "We travel in December.", pt: "Viajamos em dezembro." },
    ],
    vocab: [
      { en: "Monday to Sunday", pt: "segunda a domingo" },
      { en: "January / February / March", pt: "janeiro / fevereiro / março" },
      { en: "the first / the second", pt: "o primeiro / o segundo" },
      { en: "next week / last month", pt: "semana que vem / mês passado" },
    ],
    practice: [
      {
        prompt:
          "Como se escreve a data no inglês americano (5 de março de 2026)?",
        options: ["03/05/2026", "05/03/2026", "March 2026, 5", "2026, March 5"],
        answer: 1,
        explanation:
          "No inglês americano o mês vem primeiro: 05/03/2026 é 5 de março. A confusão com o padrão brasileiro é clássica.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "My birthday is at 5 May.",
          "My birthday is on May 5th.",
          "My birthday is in 5 of May.",
          "My birthday is on day 5 May.",
        ],
        answer: 1,
        explanation: "Para dias usamos on: on May 5th.",
      },
    ],
    takeaway: "Você marca compromissos e fala aniversários sem errar a ordem.",
    tip: "Diga em voz alta a data de hoje, de ontem e de amanhã em inglês, com mês e dia da semana.",
  },
  {
    id: "b19",
    objective: "Contar como algo era no passado usando was e were.",
    keyPoints: [
      "I/he/she/it was · you/we/they were.",
      "Negativa: wasn't / weren't.",
      "Pergunta: Was he…? Were they…?",
      "was/were servem para estado, idade e localização no passado.",
    ],
    explanation: [
      "was e were são o passado do verbo to be. Com eles já dá para falar de infância, de lugares antigos e de como as coisas eram antes.",
      "Enquanto o passado simples dos outros verbos exige o auxiliar did, com was e were a pergunta e a negativa são diretas, sem did.",
    ],
    examples: [
      { en: "I was born in Salvador.", pt: "Eu nasci em Salvador." },
      {
        en: "They were at the party last night.",
        pt: "Eles estavam na festa ontem à noite.",
      },
      {
        en: "Was the movie good? — It was amazing.",
        pt: "O filme era bom? — Era incrível.",
      },
    ],
    vocab: [
      { en: "yesterday", pt: "ontem" },
      { en: "last night / last week", pt: "ontem à noite / semana passada" },
      { en: "born", pt: "nascido" },
      { en: "when I was a child", pt: "quando eu era criança" },
    ],
    practice: [
      {
        prompt: "Complete: “We ___ at home yesterday.”",
        options: ["was", "were", "are", "did"],
        answer: 1,
        explanation: "we pede were: we were at home.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "Did she was tired?",
          "Was she tired?",
          "She was tired?",
          "Were she tired?",
        ],
        answer: 1,
        explanation:
          "was/were vão direto para o início da pergunta, sem did: Was she tired?",
      },
    ],
    takeaway: "Você fala do passado com was e were sem precisar de did.",
    tip: "Descreva em cinco frases como era sua cidade quando você era criança.",
  },
  {
    id: "b20",
    objective:
      "Juntar tudo o que você aprendeu em uma apresentação pessoal de 60 segundos.",
    keyPoints: [
      "Estrutura: saudação, nome e origem, trabalho ou estudo, rotina, gostos, encerramento.",
      "Use o presente simples para falar da sua vida hoje.",
      "Use was/were para um detalhe do passado.",
      "Feche com “Nice to meet you” ou “Thanks for listening”.",
    ],
    explanation: [
      "Uma apresentação de 60 segundos é o teste prático de tudo que você viu no nível iniciante: verbo to be, presente simples, possessivos, adjetivos e gostos.",
      "O segredo é usar frases curtas e conectadas. Não tente traduzir frases longas do português: monte bloco por bloco, com o que você domina.",
    ],
    examples: [
      {
        en: "Hello! My name is Rafael and I'm from Curitiba.",
        pt: "Olá! Meu nome é Rafael e eu sou de Curitiba.",
      },
      {
        en: "I'm a software developer and I work from Monday to Friday.",
        pt: "Sou desenvolvedor de software e trabalho de segunda a sexta.",
      },
      {
        en: "I love cooking and I can play the guitar a little.",
        pt: "Adoro cozinhar e sei tocar violão um pouco.",
      },
    ],
    vocab: [
      {
        en: "I'd like to tell you a little about me",
        pt: "Gostaria de falar um pouco sobre mim",
      },
      { en: "in my free time", pt: "no meu tempo livre" },
      { en: "I'm learning English", pt: "Estou aprendendo inglês" },
      { en: "thanks for listening", pt: "obrigado por ouvir" },
    ],
    practice: [
      {
        prompt: "Qual frase combina melhor com uma apresentação pessoal?",
        options: [
          "I am Rafael and I from Curitiba.",
          "I'm Rafael and I'm from Curitiba.",
          "I Rafael and I am of Curitiba.",
          "Me Rafael, from Curitiba.",
        ],
        answer: 1,
        explanation:
          "O verbo to be não pode faltar nem ser substituído: I'm Rafael and I'm from Curitiba.",
      },
      {
        prompt: "Como dizer “no meu tempo livre eu gosto de correr”?",
        options: [
          "In my free time I like running.",
          "In my free time I like run.",
          "On my free time I like to running.",
          "At my free time I like runs.",
        ],
        answer: 0,
        explanation:
          "Usamos in my free time e like + verbo no gerúndio (running).",
      },
    ],
    takeaway:
      "Você se apresenta em inglês por um minuto inteiro, com estrutura.",
    tip: "Grave sua apresentação de 60 segundos, ouça e regrave. Repita até soar natural — é o seu cartão de visita.",
  },
]
