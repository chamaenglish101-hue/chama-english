import type { LessonContent } from "./types.ts"

export const INTERMEDIATE_1: LessonContent[] = [
  {
    id: "i01",
    objective:
      "Contar o que aconteceu ontem com verbos regulares no passado simples.",
    keyPoints: [
      "Verbo regular + -ed: work → worked, study → studied.",
      "A forma é igual para todas as pessoas: I worked, she worked.",
      "Negativa e pergunta usam did + verbo base: I didn't work / Did you work?",
      "Marcadores: yesterday, last night, in 2019, two days ago.",
    ],
    explanation: [
      "O passado simples é o tempo de contar histórias. Com verbos regulares basta acrescentar -ed, e a mesma forma serve para todas as pessoas — não existe “worked” e “workeed”.",
      "Atenção à armadilha: depois de did e didn't o verbo volta para a forma base. “Did you worked?” está errado porque o passado já está no auxiliar.",
    ],
    examples: [
      { en: "I worked from home yesterday.", pt: "Trabalhei em casa ontem." },
      {
        en: "We visited my parents last weekend.",
        pt: "Visitamos meus pais no fim de semana passado.",
      },
      {
        en: "Did you finish the report? — I didn't finish it yet.",
        pt: "Você terminou o relatório? — Ainda não terminei.",
      },
    ],
    vocab: [
      { en: "yesterday", pt: "ontem" },
      { en: "last weekend", pt: "fim de semana passado" },
      { en: "two days ago", pt: "dois dias atrás" },
      {
        en: "to arrive / to call / to finish",
        pt: "chegar / ligar / terminar",
      },
    ],
    practice: [
      {
        prompt: "Complete: “She ___ TV last night.”",
        options: ["watch", "watched", "watching", "was watch"],
        answer: 1,
        explanation: "Passado simples de watch é watched: she watched TV.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "Did you called me?",
          "Did you call me?",
          "Did you calls me?",
          "You did called me?",
        ],
        answer: 1,
        explanation:
          "Depois de did o verbo fica na forma base: Did you call me?",
      },
    ],
    takeaway: "Você conta o que fez ontem usando -ed sem errar o auxiliar.",
    tip: "Escreva um diário de três linhas toda noite, sempre no passado simples. Em uma semana vira automático.",
  },
  {
    id: "i02",
    objective: "Usar os verbos irregulares mais frequentes no passado simples.",
    keyPoints: [
      "Irregulares não levam -ed: go → went, see → saw, buy → bought.",
      "A forma é a mesma para todas as pessoas: he went, they went.",
      "Negativa: didn't + verbo base — I didn't go.",
      "Lista essencial: have/had, do/did, make/made, take/took, come/came, get/got.",
    ],
    explanation: [
      "Verbos irregulares não seguem regra de terminação: cada um tem sua forma. A boa notícia é que cerca de 40 deles cobrem a maior parte das conversas.",
      "Agrupe por som para memorizar mais rápido: come–came, become–became; sing–sang, drink–drank; o padrão sonoro ajuda mais que a lista em ordem alfabética.",
    ],
    examples: [
      { en: "I went to the beach on Sunday.", pt: "Fui à praia no domingo." },
      {
        en: "She bought a new phone last month.",
        pt: "Ela comprou um celular novo no mês passado.",
      },
      {
        en: "We didn't see the movie. We saw a series instead.",
        pt: "Não vimos o filme. Vimos uma série em vez disso.",
      },
    ],
    vocab: [
      { en: "to go / went", pt: "ir / fui" },
      { en: "to see / saw", pt: "ver / vi" },
      { en: "to buy / bought", pt: "comprar / comprei" },
      { en: "to take / took", pt: "pegar, levar / peguei" },
    ],
    practice: [
      {
        prompt: "Complete: “They ___ to the party last Friday.”",
        options: ["goed", "went", "gone", "did go"],
        answer: 1,
        explanation: "went é o passado irregular de go.",
      },
      {
        prompt: "Complete: “I ___ a great book last week.”",
        options: ["readed", "read (passado)", "reads", "reading"],
        answer: 1,
        explanation:
          "read é irregular: a escrita não muda, mas a pronúncia no passado é “red”.",
      },
    ],
    takeaway: "Você reconhece e usa os irregulares mais comuns no passado.",
    tip: "Escolha cinco irregulares por dia e conte em voz alta três coisas que você fez com cada um.",
  },
  {
    id: "i03",
    objective:
      "Descrever o que está acontecendo neste exato momento com o presente contínuo.",
    keyPoints: [
      "Estrutura: am/is/are + verbo com -ing — I am studying.",
      "Negativa: I'm not studying; pergunta: Are you studying?",
      "Use com now, right now, at the moment, today.",
      "Verbos de estado (know, want, like) normalmente não aparecem no contínuo.",
    ],
    explanation: [
      "O presente contínuo descreve uma ação em andamento: não o que você faz todos os dias, mas o que está rolando agora. A base é o verbo to be mais o gerúndio.",
      "Cuidado com verbos de estado: “I'm knowing the answer” não existe. Com know, want, need e like usamos o presente simples.",
    ],
    examples: [
      {
        en: "I'm studying English right now.",
        pt: "Estou estudando inglês agora mesmo.",
      },
      { en: "She isn't working today.", pt: "Ela não está trabalhando hoje." },
      {
        en: "What are you doing? — I'm waiting for the bus.",
        pt: "O que você está fazendo? — Estou esperando o ônibus.",
      },
    ],
    vocab: [
      { en: "right now", pt: "agora mesmo" },
      { en: "at the moment", pt: "no momento" },
      { en: "to wait for", pt: "esperar por" },
      { en: "to happen", pt: "acontecer" },
    ],
    practice: [
      {
        prompt: "Complete: “They ___ dinner at the moment.”",
        options: ["cook", "are cooking", "cooks", "cooked"],
        answer: 1,
        explanation: "Ação em andamento: are + cooking.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "I am knowing the answer.",
          "I know the answer.",
          "I am know the answer.",
          "I knowing the answer.",
        ],
        answer: 1,
        explanation:
          "know é verbo de estado e não vai para o contínuo: I know the answer.",
      },
    ],
    takeaway:
      "Você descreve o que está acontecendo agora sem confundir com o hábito.",
    tip: "Olhe pela janela e narre em voz alta o que está acontecendo usando -ing.",
  },
  {
    id: "i04",
    objective:
      "Escolher entre presente simples e presente contínuo conforme a intenção.",
    keyPoints: [
      "Presente simples = hábito, rotina, verdade geral: I work every day.",
      "Presente contínuo = ação em andamento: I'm working now.",
      "Com always, usually, never use o simples; com now, at the moment use o contínuo.",
      "Alguns verbos de estado aceitam os dois com mudança de sentido (he is being rude).",
    ],
    explanation: [
      "A diferença é de intenção, não de tempo: os dois falam do presente. O simples descreve o que costuma acontecer; o contínuo, o que está acontecendo.",
      "Esse contraste é o coração do inglês do dia a dia, e dominá-lo já deixa sua fala muito mais natural.",
    ],
    examples: [
      {
        en: "I usually take the subway, but today I'm taking a taxi.",
        pt: "Normalmente pego o metrô, mas hoje estou pegando um táxi.",
      },
      {
        en: "She works at a bank. Right now she's talking to a client.",
        pt: "Ela trabalha em um banco. Agora está falando com um cliente.",
      },
      {
        en: "Do you speak Spanish? — I'm learning it.",
        pt: "Você fala espanhol? — Estou aprendendo.",
      },
    ],
    vocab: [
      { en: "usually / always", pt: "normalmente / sempre" },
      { en: "these days", pt: "nos dias de hoje, atualmente" },
      { en: "but today", pt: "mas hoje" },
      { en: "temporary x permanent", pt: "temporário x permanente" },
    ],
    practice: [
      {
        prompt: "Complete: “I ___ coffee every morning.”",
        options: ["am drinking", "drink", "drinks", "drinking"],
        answer: 1,
        explanation:
          "every morning indica hábito, então usamos o presente simples: I drink.",
      },
      {
        prompt: "Complete: “Look! It ___ outside.”",
        options: ["rains", "is raining", "rained", "rain"],
        answer: 1,
        explanation: "Look! indica ação acontecendo agora: it is raining.",
      },
    ],
    takeaway: "Você escolhe o tempo pelo contexto, não por tradução.",
    tip: "Descreva sua semana habitual e depois o que você está fazendo agora. Compare as duas falas.",
  },
  {
    id: "i05",
    objective: "Planejar e prever o futuro com will e going to.",
    keyPoints: [
      "going to = plano já decidido: I'm going to travel in July.",
      "will = decisão na hora, promessa, previsão: I'll help you.",
      "Previsão com evidência usa going to: Look at the clouds — it's going to rain.",
      "Negativa e pergunta são simples: won't / Will you…?",
    ],
    explanation: [
      "Os dois falam do futuro, mas em situações diferentes. going to carrega intenção e planejamento; will é espontâneo e costuma aparecer em promessas, ofertas e opiniões sobre o futuro.",
      "Na prática, ninguém vai reprovar você por trocar os dois numa conversa. Mas escolher bem deixa a fala mais precisa e natural.",
    ],
    examples: [
      {
        en: "We're going to launch the product in March.",
        pt: "Vamos lançar o produto em março.",
      },
      {
        en: "I'll call you back in ten minutes.",
        pt: "Ligo de volta em dez minutos.",
      },
      { en: "It's going to be a busy week.", pt: "Vai ser uma semana cheia." },
    ],
    vocab: [
      { en: "next week / next year", pt: "semana que vem / ano que vem" },
      { en: "soon", pt: "logo, em breve" },
      { en: "probably", pt: "provavelmente" },
      { en: "to plan to", pt: "planejar" },
    ],
    practice: [
      {
        prompt: "Complete: “I ___ visit my grandmother next weekend.” (plano)",
        options: ["am going to", "will to", "going to", "go to"],
        answer: 0,
        explanation: "Plano já decidido usa going to: I'm going to visit.",
      },
      {
        prompt:
          "O telefone está tocando. Qual resposta soa natural para uma decisão na hora?",
        options: [
          "I answer it.",
          "I'll answer it.",
          "I'm answering it since yesterday.",
          "I go to answer it.",
        ],
        answer: 1,
        explanation:
          "Decisão tomada no momento da fala usa will: I'll answer it.",
      },
    ],
    takeaway:
      "Você fala de planos e previsões com a forma certa para cada caso.",
    tip: "Escreva três planos para o próximo mês com going to e três promessas com will.",
  },
  {
    id: "i06",
    objective: "Falar de experiências e resultados usando o present perfect.",
    keyPoints: [
      "Estrutura: have/has + particípio — I have visited, she has finished.",
      "Não dizemos quando aconteceu: partiu o foco do momento, não da data.",
      "Marcadores típicos: ever, never, already, yet, just, so far.",
      "Contrações naturais: I've, you've, she's, we've.",
    ],
    explanation: [
      "O present perfect liga passado e presente: a ação aconteceu em algum momento e o efeito ainda importa agora. Por isso ele combina com ever e never, e rejeita datas específicas.",
      "É o tempo que mais causa estranhamento em brasileiros, porque o português resolve as duas ideias com o passado simples. Com prática, a lógica fica clara.",
    ],
    examples: [
      {
        en: "I have visited London twice.",
        pt: "Visitei Londres duas vezes (na vida).",
      },
      {
        en: "She has just finished the report.",
        pt: "Ela acabou de terminar o relatório.",
      },
      {
        en: "Have you ever eaten sushi? — No, I've never eaten it.",
        pt: "Você já comeu sushi? — Não, nunca comi.",
      },
    ],
    vocab: [
      { en: "ever / never", pt: "já (alguma vez) / nunca" },
      { en: "already / yet", pt: "já / ainda (em perguntas e negativas)" },
      { en: "just", pt: "acabou de" },
      { en: "so far", pt: "até agora" },
    ],
    practice: [
      {
        prompt: "Complete: “I ___ never been to Japan.”",
        options: ["have", "has", "am", "did"],
        answer: 0,
        explanation: "Com I usamos have: I have never been to Japan.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "I have seen him yesterday.",
          "I saw him yesterday.",
          "I have seen him last week.",
          "I have saw him yesterday.",
        ],
        answer: 1,
        explanation:
          "Com data específica (yesterday) usamos passado simples: I saw him yesterday.",
      },
    ],
    takeaway: "Você fala de experiências de vida sem mencionar datas.",
    tip: "Faça uma lista de cinco lugares onde você já esteve, usando “I have been to…”.",
  },
  {
    id: "i07",
    objective: "Distinguir definitivamente present perfect de passado simples.",
    keyPoints: [
      "Passado simples: quando aconteceu é importante ou está dito — I saw it last night.",
      "Present perfect: quando importa o resultado ou a experiência — I have seen it.",
      "Ontem, em 2020, há duas horas → passado simples.",
      "Ever, never, already, yet, so far → present perfect.",
    ],
    explanation: [
      "A dúvida é sempre a mesma: “posso usar os dois?”. A resposta é sim, mas cada um conta uma história diferente. Marque o tempo fixo e o foco vai para o passado simples; deixe o tempo aberto e o present perfect entra.",
      "Pense no resultado presente: “I have lost my keys” significa que ainda estou sem elas; “I lost my keys yesterday” apenas relata o fato do passado.",
    ],
    examples: [
      {
        en: "I have lost my keys, so I can't get in.",
        pt: "Perdi minhas chaves, por isso não consigo entrar.",
      },
      {
        en: "I lost my keys yesterday, but I found them later.",
        pt: "Perdi minhas chaves ontem, mas as encontrei depois.",
      },
      {
        en: "How long have you worked here? — For three years.",
        pt: "Há quanto tempo você trabalha aqui? — Há três anos.",
      },
    ],
    vocab: [
      { en: "how long…?", pt: "há quanto tempo…?" },
      { en: "for / since", pt: "por (duração) / desde (ponto de partida)" },
      { en: "recently", pt: "recentemente" },
      { en: "a while ago", pt: "um tempo atrás" },
    ],
    practice: [
      {
        prompt:
          "Complete: “I ___ that film three times.” (experiência de vida)",
        options: ["saw", "have seen", "see", "was seeing"],
        answer: 1,
        explanation:
          "Sem data específica e falando de experiência de vida, usamos present perfect: have seen.",
      },
      {
        prompt: "Complete: “We ___ to Italy in 2019.”",
        options: ["have gone", "went", "have been", "go"],
        answer: 1,
        explanation:
          "Com data definida (in 2019) usamos passado simples: went.",
      },
    ],
    takeaway: "Você decide em segundos qual dos dois tempos usar.",
    tip: "Reescreva cinco frases suas no passado simples acrescentando o present perfect correspondente e note a mudança de foco.",
  },
  {
    id: "i08",
    objective:
      "Comparar pessoas, lugares e coisas com comparativos e superlativos.",
    keyPoints: [
      "Adjetivos curtos: -er / the -est — faster, the fastest.",
      "Adjetivos longos: more / the most — more expensive, the most expensive.",
      "Irregulares: good → better → the best; bad → worse → the worst.",
      "Igualdade: as… as; para comparar use than.",
    ],
    explanation: [
      "Comparar é uma função básica da conversa: preço, distância, qualidade, pessoas. A regra é o tamanho do adjetivo: uma sílaba recebe -er, três ou mais pedem more.",
      "Com dois ou mais itens, o superlativo indica o extremo do grupo e normalmente vem com the: the best option.",
    ],
    examples: [
      {
        en: "This phone is cheaper than that one.",
        pt: "Este celular é mais barato que aquele.",
      },
      {
        en: "São Paulo is more crowded than Curitiba.",
        pt: "São Paulo é mais cheia que Curitiba.",
      },
      {
        en: "That was the best meal of the trip.",
        pt: "Aquela foi a melhor refeição da viagem.",
      },
    ],
    vocab: [
      { en: "than", pt: "do que (comparação)" },
      { en: "the most / the best", pt: "o mais / o melhor" },
      { en: "less / the least", pt: "menos / o menos" },
      { en: "a bit / much + comparativo", pt: "um pouco / muito mais" },
    ],
    practice: [
      {
        prompt: "Complete: “This restaurant is ___ than the other one.”",
        options: ["good", "better", "best", "more good"],
        answer: 1,
        explanation: "O comparativo irregular de good é better.",
      },
      {
        prompt:
          "Complete: “It's ___ building in the city.” (alto — superlativo)",
        options: ["the taller", "the tallest", "more tall", "tallest than"],
        answer: 1,
        explanation: "Superlativo de adjetivo curto: the tallest.",
      },
    ],
    takeaway: "Você compara e destaca qualquer coisa com segurança.",
    tip: "Compare três cidades que você conhece em cinco frases usando -er, more e as… as.",
  },
  {
    id: "i09",
    objective:
      "Quantificar com much, many, some, any e a lot of sem errar a escolha.",
    keyPoints: [
      "many + contáveis: many friends. much + incontáveis: much water.",
      "some em afirmativas; any em negativas e perguntas.",
      "a lot of funciona nos dois casos e é o mais comum na fala.",
      "how much / how many para perguntar quantidade.",
    ],
    explanation: [
      "A chave é separar contável de incontável. Contáveis têm plural e número (books); incontáveis não (water, money, time, information).",
      "Em conversa, a lot of resolve a maior parte dos casos. some e any aparecem quando a quantidade não é importante ou é desconhecida.",
    ],
    examples: [
      {
        en: "How many people came to the event?",
        pt: "Quantas pessoas vieram ao evento?",
      },
      {
        en: "I don't have much time today.",
        pt: "Não tenho muito tempo hoje.",
      },
      {
        en: "Would you like some coffee? — I don't want any, thanks.",
        pt: "Quer um café? — Não quero, obrigado.",
      },
    ],
    vocab: [
      { en: "much / many", pt: "muito (incontável) / muitos (contável)" },
      {
        en: "some / any",
        pt: "algum (afirmativa) / algum (negativa e pergunta)",
      },
      { en: "a lot of", pt: "muitos, muita" },
      { en: "how much / how many", pt: "quanto / quantos" },
    ],
    practice: [
      {
        prompt: "Complete: “How ___ sugar do you want?”",
        options: ["many", "much", "some", "any"],
        answer: 1,
        explanation: "sugar é incontável, então usamos how much.",
      },
      {
        prompt: "Complete: “I don't have ___ questions.”",
        options: ["some", "any", "much", "a"],
        answer: 1,
        explanation: "Em negativas usamos any: I don't have any questions.",
      },
    ],
    takeaway: "Você fala de quantidade sem trocar contável por incontável.",
    tip: "Abra a geladeira e diga em voz alta o que você tem e o que não tem, usando a lot of, much e any.",
  },
  {
    id: "i10",
    objective:
      "Usar too e enough para dizer que algo é demais, de menos ou suficiente.",
    keyPoints: [
      "too + adjetivo = demais (problema): It's too expensive.",
      "adjetivo + enough = suficiente: It's cheap enough.",
      "too much / too many = quantidade excessiva; enough sozinho = suficiente.",
      "Not + adjetivo + enough = não é suficiente: He isn't old enough.",
    ],
    explanation: [
      "too tem sempre uma carga negativa: indica excesso que atrapalha. enough indica a medida que basta. A posição muda: too vem antes do adjetivo, enough vem depois.",
      "Para quantidade usamos too much com incontáveis e too many com contáveis — a mesma separação de much e many.",
    ],
    examples: [
      {
        en: "This coffee is too hot to drink.",
        pt: "Este café está quente demais para beber.",
      },
      {
        en: "The apartment is big enough for us.",
        pt: "O apartamento é grande o suficiente para nós.",
      },
      { en: "There are too many people here.", pt: "Há gente demais aqui." },
    ],
    vocab: [
      { en: "too + adjetivo", pt: "demasiadamente" },
      { en: "enough", pt: "suficiente" },
      { en: "too much / too many", pt: "demais (incontável / contável)" },
      { en: "not… enough", pt: "não é o bastante" },
    ],
    practice: [
      {
        prompt: "Complete: “The bag is ___ heavy for me.”",
        options: ["enough", "too", "too much", "much"],
        answer: 1,
        explanation: "Excesso antes do adjetivo usa too: too heavy.",
      },
      {
        prompt: "Complete: “She isn't experienced ___ for this role.”",
        options: ["too", "enough", "much", "many"],
        answer: 1,
        explanation: "enough vem depois do adjetivo: experienced enough.",
      },
    ],
    takeaway: "Você diz com precisão o que é excessivo e o que é suficiente.",
    tip: "Descreva cinco situações do seu dia com too e outras cinco com enough.",
  },
]
