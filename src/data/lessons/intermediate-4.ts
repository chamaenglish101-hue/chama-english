import type { LessonContent } from "./types.ts"

export const INTERMEDIATE_4: LessonContent[] = [
  {
    id: "i31",
    objective:
      "Começar e sustentar conversas leves em qualquer situação social.",
    keyPoints: [
      "Abra com pergunta situacional: Is this your first time here?",
      "Assuntos seguros: viagem, comida, cidade, trabalho (sem política e religião).",
      "Devolva a pergunta: And you? What about you?",
      "Para sair bem: It was great talking to you. See you around!",
    ],
    explanation: [
      "Small talk é a habilidade social de conversar sem assunto importante. Ela abre portas: contatos, amizades e oportunidades.",
      "A técnica é simples: comente algo do ambiente, faça uma pergunta aberta e escute de verdade. Quem faz perguntas conduz a conversa.",
    ],
    examples: [
      {
        en: "Is this your first time at this event?",
        pt: "É sua primeira vez neste evento?",
      },
      { en: "How do you know the host?", pt: "Como você conhece o anfitrião?" },
      {
        en: "It was great talking to you. Enjoy the rest of the evening!",
        pt: "Foi ótimo falar com você. Aproveite o resto da noite!",
      },
    ],
    vocab: [
      { en: "small talk", pt: "conversa leve, informal" },
      { en: "first time", pt: "primeira vez" },
      { en: "to be into", pt: "curtir, se interessar por" },
      { en: "see you around", pt: "a gente se vê por aí" },
    ],
    practice: [
      {
        prompt: "Qual é a melhor abertura de conversa em um evento?",
        options: [
          "What's your salary?",
          "Is this your first time here?",
          "Who did you vote for?",
          "Are you married?",
        ],
        answer: 1,
        explanation:
          "Perguntas sobre o contexto são seguras. Salário, política e vida pessoal são invasivas.",
      },
      {
        prompt: "A conversa esfriou. O que você faz?",
        options: [
          "Fica em silêncio.",
          "Faz uma pergunta aberta: “What do you do here?”",
          "Fala só de você por dez minutos.",
          "Vai embora sem falar nada.",
        ],
        answer: 1,
        explanation:
          "Perguntas abertas dão assunto ao outro e mantêm a conversa viva. “What do you do?” é clássica.",
      },
    ],
    takeaway:
      "Você puxa e sustenta conversa sem depender de assunto importante.",
    tip: "Prepare três perguntas de abertura e use uma delas hoje, em inglês, com alguém.",
  },
  {
    id: "i32",
    objective: "Descrever aparência e personalidade com adjetivos precisos.",
    keyPoints: [
      "Aparência: tall, short, slim, well-dressed, with glasses.",
      "Idade aproximada: in his thirties, in her early twenties.",
      "Personalidade: outgoing, reliable, funny, easygoing, stubborn.",
      "Use seem/look para impressões: She seems very organized.",
    ],
    explanation: [
      "Descrever pessoas exige dois vocabulários: o de aparência e o de comportamento. Separar os dois ajuda a não misturar adjetivos de tipos diferentes.",
      "Para falar sem ofender, prefira “she's slim” a “she's thin”, e use “he seems…” quando for apenas impressão.",
    ],
    examples: [
      {
        en: "He's tall, with short dark hair and glasses.",
        pt: "Ele é alto, de cabelo escuro curto e óculos.",
      },
      {
        en: "My manager is demanding but very fair.",
        pt: "Meu gestor é exigente, mas muito justo.",
      },
      {
        en: "She seems a bit shy at first, but she's very funny.",
        pt: "Ela parece um pouco tímida no início, mas é muito engraçada.",
      },
    ],
    vocab: [
      { en: "outgoing / shy", pt: "extrovertido / tímido" },
      { en: "reliable / hardworking", pt: "confiável / trabalhador" },
      { en: "easygoing", pt: "tranquilo, de boa" },
      { en: "in his/her thirties", pt: "na casa dos trinta" },
    ],
    practice: [
      {
        prompt: "Como dizer que alguém tem cerca de 35 anos?",
        options: [
          "He has 35 years.",
          "He is in his thirties.",
          "He is 35 years old of age.",
          "He is thirty five ages.",
        ],
        answer: 1,
        explanation: "Fala-se da faixa etária: he is in his thirties.",
      },
      {
        prompt: "Qual adjetivo descreve personalidade?",
        options: ["tall", "slim", "reliable", "dark-haired"],
        answer: 2,
        explanation:
          "reliable (confiável) descreve comportamento. Os outros descrevem aparência.",
      },
    ],
    takeaway: "Você descreve pessoas por fora e por dentro com precisão.",
    tip: "Descreva três pessoas da sua família em inglês: aparência, idade e personalidade.",
  },
  {
    id: "i33",
    objective: "Dar opinião e discordar sem soar agressivo ou inseguro.",
    keyPoints: [
      "Opinião: I think… / In my opinion… / If you ask me…",
      "Concordar: I totally agree / That's a good point.",
      "Discordar com educação: I see your point, but… / I'm not so sure about that.",
      "Suavize com: it seems to me, it might be, I'd say.",
    ],
    explanation: [
      "Discordar em inglês exige diplomacia: a estrutura aceita o argumento do outro antes de apresentar o seu. Isso mantém o clima e a credibilidade.",
      "Evite “you're wrong” e “that's not true”. Comece reconhecendo o ponto e depois traga a sua visão com I see your point, but…",
    ],
    examples: [
      {
        en: "I see your point, but I think we need more data.",
        pt: "Entendo seu ponto, mas acho que precisamos de mais dados.",
      },
      {
        en: "That's a good point. However, the deadline is tight.",
        pt: "É um bom argumento. No entanto, o prazo é apertado.",
      },
      {
        en: "In my opinion, we should test it first.",
        pt: "Na minha opinião, deveríamos testar primeiro.",
      },
    ],
    vocab: [
      { en: "in my opinion", pt: "na minha opinião" },
      { en: "I see your point", pt: "entendo seu ponto" },
      { en: "I'm not so sure", pt: "não tenho tanta certeza" },
      { en: "that makes sense", pt: "faz sentido" },
    ],
    practice: [
      {
        prompt: "Qual é a forma mais educada de discordar?",
        options: [
          "You're wrong.",
          "That's not true.",
          "I see your point, but I'd say the opposite.",
          "No, no, no.",
        ],
        answer: 2,
        explanation:
          "Reconhecer o ponto do outro antes de discordar é a fórmula padrão em inglês profissional.",
      },
      {
        prompt: "Como concordar com entusiasmo?",
        options: [
          "I totally agree.",
          "Yes, maybe no.",
          "I don't care.",
          "Ok, if you want.",
        ],
        answer: 0,
        explanation: "I totally agree demonstra concordância clara e positiva.",
      },
    ],
    takeaway: "Você defende sua opinião mantendo a relação intacta.",
    tip: "Escolha um assunto polêmico leve e escreva sua opinião com dois argumentos e uma concessão.",
  },
  {
    id: "i34",
    objective: "Reclamar de forma firme e educada até resolver o problema.",
    keyPoints: [
      "Estrutura: fato + impacto + pedido claro.",
      "Abra com: I'm afraid there's a problem with…",
      "Explique o impacto: That caused a delay in our project.",
      "Peça solução e prazo: What can you do to fix this? When can I expect it?",
    ],
    explanation: [
      "Reclamação eficaz é objetiva: o que aconteceu, o que isso causou e o que você espera. Sem ironia e sem ataques pessoais.",
      "“I'm afraid…” e “Unfortunately…” suavizam o tom sem enfraquecer o pedido. Firmeza vem da clareza, não do volume.",
    ],
    examples: [
      {
        en: "I'm afraid there's a problem with my order.",
        pt: "Receio que haja um problema com meu pedido.",
      },
      {
        en: "The item arrived damaged, and I need a replacement.",
        pt: "O item chegou danificado e preciso de uma substituição.",
      },
      {
        en: "When can I expect a solution?",
        pt: "Quando posso esperar uma solução?",
      },
    ],
    vocab: [
      { en: "to complain about", pt: "reclamar de" },
      { en: "damaged / defective", pt: "danificado / com defeito" },
      { en: "replacement / refund", pt: "substituição / reembolso" },
      { en: "to follow up", pt: "acompanhar, cobrar retorno" },
    ],
    practice: [
      {
        prompt: "Qual é a reclamação mais eficaz?",
        options: [
          "This is a disaster, you are all incompetent!",
          "I'm afraid my order arrived damaged. Could you send a replacement?",
          "I want money back now.",
          "Everything here is bad, as always.",
        ],
        answer: 1,
        explanation:
          "Fato + impacto + pedido claro. Ataques e generalizações só atrasam a solução.",
      },
      {
        prompt: "Como cobrar um retorno que não chegou?",
        options: [
          "I'm following up on my previous e-mail about the refund.",
          "You forgot me again.",
          "Answer me!",
          "Where is my thing?",
        ],
        answer: 0,
        explanation:
          "I'm following up on… é a forma profissional de cobrar retorno.",
      },
    ],
    takeaway:
      "Você resolve problemas por escrito e por telefone sem perder a educação.",
    tip: "Pense em um problema recente e escreva a reclamação em três frases na estrutura fato-impacto-pedido.",
  },
  {
    id: "i35",
    objective:
      "Abrir, desenvolver e fechar uma apresentação curta no trabalho.",
    keyPoints: [
      "Abertura: Today I'd like to talk about… + agenda em três pontos.",
      "Desenvolvimento: First… Second… Finally…",
      "Apoio visual: As you can see on this slide…",
      "Fechamento: To sum up… and I'm happy to take questions.",
    ],
    explanation: [
      "O segredo de uma boa apresentação é a estrutura, não o vocabulário difícil. Diga aonde vai, ande pelo caminho e resuma onde chegou.",
      "Frases de transição reduzem o nervosismo: em vez de pensar “o que eu falo agora?”, você segue o mapa.",
    ],
    examples: [
      {
        en: "Today I'd like to talk about our results this quarter.",
        pt: "Hoje gostaria de falar sobre nossos resultados deste trimestre.",
      },
      {
        en: "First, let's look at the numbers.",
        pt: "Primeiro, vamos ver os números.",
      },
      {
        en: "To sum up, we're on track. I'm happy to take questions.",
        pt: "Resumindo, estamos no caminho. Fico à disposição para perguntas.",
      },
    ],
    vocab: [
      { en: "agenda / overview", pt: "pauta / visão geral" },
      { en: "to move on to", pt: "passar para" },
      { en: "as you can see", pt: "como vocês podem ver" },
      { en: "to take questions", pt: "responder perguntas" },
    ],
    practice: [
      {
        prompt: "Qual é a melhor abertura de apresentação?",
        options: [
          "So, yeah, I will say some things.",
          "Today I'd like to talk about our results and next steps.",
          "I didn't prepare anything.",
          "Let's finish quickly, please.",
        ],
        answer: 1,
        explanation:
          "Anuncie o tema de forma direta e profissional: Today I'd like to talk about…",
      },
      {
        prompt: "Como passar de um tópico para o outro?",
        options: [
          "Moving on to the next point…",
          "Ok, whatever.",
          "Now other thing.",
          "Finished, next.",
        ],
        answer: 0,
        explanation:
          "Moving on to… sinaliza a transição e ajuda quem escuta a acompanhar.",
      },
    ],
    takeaway:
      "Você conduz uma apresentação curta com início, meio e fim claros.",
    tip: "Apresente em 2 minutos, para a parede, um assunto que você domina. Cronometre.",
  },
  {
    id: "i36",
    objective:
      "Usar combinações naturais de palavras em vez de traduzir do português.",
    keyPoints: [
      "make a decision, não “take a decision”.",
      "take a shower, take a break, take a risk.",
      "do homework, do business, do the dishes.",
      "have breakfast, have a meeting, have a look.",
    ],
    explanation: [
      "Collocations são as parcerias que as palavras fazem em inglês. Traduzir do português gera combinações estranhas, mesmo com gramática correta.",
      "Não existe regra para todas: aprende-se por blocos. A boa notícia é que são poucas as combinações realmente frequentes.",
    ],
    examples: [
      {
        en: "We need to make a decision today.",
        pt: "Precisamos tomar uma decisão hoje.",
      },
      {
        en: "I usually take a break at noon.",
        pt: "Normalmente faço uma pausa ao meio-dia.",
      },
      {
        en: "Can I have a look at the contract?",
        pt: "Posso dar uma olhada no contrato?",
      },
    ],
    vocab: [
      { en: "to make a decision", pt: "tomar uma decisão" },
      { en: "to take a break", pt: "fazer uma pausa" },
      { en: "to do business", pt: "fazer negócios" },
      { en: "to have a look", pt: "dar uma olhada" },
    ],
    practice: [
      {
        prompt: "Qual combinação está correta?",
        options: [
          "take a decision",
          "make a decision",
          "do a decision",
          "have a decision",
        ],
        answer: 1,
        explanation: "Em inglês tomamos decisões com make: make a decision.",
      },
      {
        prompt: "Complete: “I need to ___ a shower before the meeting.”",
        options: ["make", "do", "take", "have a"],
        answer: 2,
        explanation:
          "take a shower é a combinação natural (have a shower aparece no inglês britânico).",
      },
    ],
    takeaway: "Você soa natural porque usa as combinações que os nativos usam.",
    tip: "Escolha cinco verbos (make, take, do, have, get) e anote três collocations de cada um.",
  },
  {
    id: "i37",
    objective:
      "Entender e usar as expressões idiomáticas mais frequentes do dia a dia.",
    keyPoints: [
      "It's a piece of cake = é muito fácil.",
      "Break a leg = boa sorte (antes de uma apresentação).",
      "It's not my cup of tea = não é do meu gosto.",
      "To be on the same page = estar alinhado sobre algo.",
    ],
    explanation: [
      "Expressões idiomáticas não fazem sentido ao pé da letra e por isso assustam. A saída é aprendê-las dentro de uma situação real, com o contexto junto.",
      "Comece pelas dez mais frequentes: elas aparecem em conversas, séries e reuniões com muita naturalidade.",
    ],
    examples: [
      { en: "The exam was a piece of cake.", pt: "A prova foi moleza." },
      {
        en: "Break a leg at the presentation!",
        pt: "Boa sorte na apresentação!",
      },
      {
        en: "Let's make sure we're on the same page.",
        pt: "Vamos garantir que estamos alinhados.",
      },
    ],
    vocab: [
      { en: "a piece of cake", pt: "moleza, muito fácil" },
      { en: "to be on the same page", pt: "estar alinhado" },
      { en: "to hit the books", pt: "estudar com afinco" },
      { en: "under the weather", pt: "meio indisposto" },
    ],
    practice: [
      {
        prompt: "O que significa “it's a piece of cake”?",
        options: ["é muito difícil", "é muito fácil", "é caro", "é tarde"],
        answer: 1,
        explanation:
          "Piece of cake significa moleza, algo muito fácil de fazer.",
      },
      {
        prompt: "Seu colega diz “we need to be on the same page”. Ele quer:",
        options: [
          "estar na mesma página do relatório",
          "estar alinhados sobre o assunto",
          "ler o mesmo livro",
          "dividir o trabalho",
        ],
        answer: 1,
        explanation:
          "Estar on the same page é estar alinhado, com o mesmo entendimento.",
      },
    ],
    takeaway:
      "Você entende expressões que não podem ser traduzidas ao pé da letra.",
    tip: "Anote três idioms que você encontrar em uma série e escreva uma frase com cada um.",
  },
  {
    id: "i38",
    objective:
      "Treinar o ouvido para reduções, ligações e o ritmo da fala rápida.",
    keyPoints: [
      "Palavras se ligam: “an apple” soa “anapple”.",
      "Reduções comuns: going to → gonna, want to → wanna, what do you → whaddaya.",
      "O inglês fala em blocos com sílabas fortes e fracas, não palavra por palavra.",
      "Não tente ouvir tudo: capture as palavras-chave e o sentido geral.",
    ],
    explanation: [
      "Falantes nativos não pronunciam cada palavra separada. O ouvido precisa aprender os padrões de ligação e redução para acompanhar o ritmo real.",
      "A estratégia é aceitar a perda: entenda a ideia geral, use o contexto e confirme as partes importantes. Perfeição de audição não existe nem entre nativos.",
    ],
    examples: [
      {
        en: "What do you want to do? → Whaddaya wanna do?",
        pt: "O que você quer fazer? (fala rápida)",
      },
      {
        en: "I'm gonna call you later.",
        pt: "Vou te ligar depois. (going to reduzido)",
      },
      {
        en: "Could you say that again?",
        pt: "Pode repetir isso? (sua rede de segurança)",
      },
    ],
    vocab: [
      { en: "gonna / wanna", pt: "going to / want to (fala rápida)" },
      { en: "kinda / sorta", pt: "kind of / sort of" },
      { en: "connected speech", pt: "fala conectada" },
      { en: "to catch", pt: "entender, captar (I didn't catch that)" },
    ],
    practice: [
      {
        prompt: "O que você ouve em “Whaddaya wanna do?”",
        options: [
          "Where do you want to go?",
          "What do you want to do?",
          "What are you doing?",
          "Who do you want?",
        ],
        answer: 1,
        explanation:
          "what do you → whaddaya e want to → wanna. A frase é “What do you want to do?”.",
      },
      {
        prompt: "Você não entendeu uma parte. Qual é a melhor atitude?",
        options: [
          "Fingir que entendeu.",
          "Pedir para repetir: “Sorry, could you say that again?”",
          "Mudar de assunto rapidamente.",
          "Ficar em silêncio até o assunto acabar.",
        ],
        answer: 1,
        explanation:
          "Pedir para repetir é natural e garante a informação. Fingir entender só acumula problemas.",
      },
    ],
    takeaway:
      "Você entende a fala rápida capturando blocos, não palavras soltas.",
    tip: "Assista a 5 minutos de uma série com legenda em inglês e depois repita sem legenda, anotando 5 blocos que reconheceu.",
  },
  {
    id: "i39",
    objective:
      "Escrever mensagens, recados e parágrafos curtos de forma clara.",
    keyPoints: [
      "Mensagem curta: cumprimento, motivo, pedido, encerramento.",
      "Frases curtas funcionam melhor que períodos longos.",
      "Marcadores de coesão: also, but, so, after that, however.",
      "Releia procurando repetição e retire o que não acrescenta.",
    ],
    explanation: [
      "Escrever bem em inglês é escrever claro: uma ideia por frase, conectivos simples e ordem direta (sujeito, verbo, complemento).",
      "Em mensagens, evite o estilo de e-mail formal e também o excesso de abreviações. Um meio-termo amigável e objetivo funciona na maioria dos contextos.",
    ],
    examples: [
      {
        en: "Hi Ana, are we still meeting at 10? Let me know, thanks!",
        pt: "Oi Ana, ainda nos encontramos às 10? Me avise, obrigado!",
      },
      {
        en: "I can't make it today. Can we reschedule for tomorrow?",
        pt: "Não consigo hoje. Podemos remarcar para amanhã?",
      },
      {
        en: "Here's the file you asked for. Let me know if anything is missing.",
        pt: "Segue o arquivo que você pediu. Me avise se faltar algo.",
      },
    ],
    vocab: [
      { en: "to make it", pt: "conseguir ir, comparecer" },
      { en: "to reschedule", pt: "remarcar" },
      { en: "to follow up", pt: "dar seguimento" },
      { en: "let me know", pt: "me avise" },
    ],
    practice: [
      {
        prompt: "Qual mensagem está mais clara?",
        options: [
          "Hi, I want talk about the project and other things maybe tomorrow or later, if you can, ok?",
          "Hi Ana, can we talk about the project tomorrow at 10? Let me know.",
          "Hey, project!! need talk now.",
          "Hello, regarding the aforementioned project, I would like to request a meeting at your earliest convenience.",
        ],
        answer: 1,
        explanation:
          "Curta, com pedido claro e prazo. A primeira divaga; a última é formal demais para mensagem.",
      },
      {
        prompt: "Como avisar que você não vai conseguir comparecer?",
        options: [
          "I can't make it today.",
          "I don't go.",
          "Not possible me.",
          "I am not for the meeting.",
        ],
        answer: 0,
        explanation:
          "“I can't make it” é a forma natural de dizer que você não consegue ir.",
      },
    ],
    takeaway: "Você escreve mensagens curtas que resolvem o assunto.",
    tip: "Escreva três mensagens de 3 linhas: confirmar, remarcar e agradecer.",
  },
  {
    id: "i40",
    objective:
      "Estruturar um relato pessoal do começo ao fim misturando os tempos estudados.",
    keyPoints: [
      "Estrutura: contexto → acontecimento → complicação → desfecho → reflexão.",
      "Cenário com past continuous; fatos com passado simples.",
      "Conectores de tempo: first, then, after that, suddenly, in the end.",
      "Present perfect para fechar com o que ficou até hoje.",
    ],
    explanation: [
      "Contar histórias é a prova final do nível intermediário: exige passado simples, contínuo, conectores e um pouco de present perfect no fim.",
      "Use marcadores de tempo como trilhos. Eles dão ritmo e ajudam quem ouve a acompanhar sem se perder.",
    ],
    examples: [
      {
        en: "It was a Friday evening and I was driving home.",
        pt: "Era uma sexta à noite e eu estava dirigindo para casa.",
      },
      {
        en: "Suddenly, the car stopped. I had no idea what to do.",
        pt: "De repente, o carro parou. Eu não fazia ideia do que fazer.",
      },
      {
        en: "In the end, a neighbor helped me, and since then I always check the tank.",
        pt: "No fim, um vizinho me ajudou e, desde então, sempre confiro o tanque.",
      },
    ],
    vocab: [
      { en: "at first / in the end", pt: "no começo / no fim" },
      { en: "suddenly / meanwhile", pt: "de repente / enquanto isso" },
      { en: "to end up", pt: "acabar (em uma situação)" },
      { en: "since then", pt: "desde então" },
    ],
    practice: [
      {
        prompt: "Qual é o melhor começo para uma história pessoal?",
        options: [
          "It was a Saturday morning and I was waiting for the bus.",
          "I will tell a thing that happened.",
          "Story of my life, part one.",
          "Everything happened fast and many things.",
        ],
        answer: 0,
        explanation:
          "Comece com cenário (past continuous) e um marcador de tempo. Isso situa quem ouve.",
      },
      {
        prompt: "Complete: “___, we found the keys under the sofa.”",
        options: ["In the end", "At the beginning", "Since then", "Meanwhile"],
        answer: 0,
        explanation: "In the end fecha o relato com o desfecho.",
      },
    ],
    takeaway:
      "Você conta uma história completa em inglês com começo, meio e fim.",
    tip: "Conte em voz alta uma história de 90 segundos sobre um imprevisto que você viveu.",
  },
]
