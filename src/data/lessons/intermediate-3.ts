import type { LessonContent } from "./types.ts"

export const INTERMEDIATE_3: LessonContent[] = [
  {
    id: "i21",
    objective:
      "Posicionar advérbios de frequência e de modo corretamente na frase.",
    keyPoints: [
      "Frequência vem antes do verbo principal: I always take the bus.",
      "Com to be, o advérbio vem depois: She is always late.",
      "Modo (quickly, carefully) normalmente vai no fim: He drives carefully.",
      "always, usually, often, sometimes, rarely, never.",
    ],
    explanation: [
      "Advérbios de frequência têm um lugar fixo: entre o sujeito e o verbo, mas depois do verbo to be. Essa posição é o que soa certo para o ouvido nativo.",
      "Já os advérbios de modo descrevem como a ação acontece e costumam fechar a frase, a não ser que você queira destacar algo específico.",
    ],
    examples: [
      {
        en: "I usually check my e-mails in the morning.",
        pt: "Normalmente checo meus e-mails de manhã.",
      },
      {
        en: "He is never late for meetings.",
        pt: "Ele nunca se atrasa para reuniões.",
      },
      {
        en: "She answered the question calmly.",
        pt: "Ela respondeu à pergunta com calma.",
      },
    ],
    vocab: [
      { en: "always / never", pt: "sempre / nunca" },
      { en: "usually / often", pt: "normalmente / frequentemente" },
      { en: "hardly ever / rarely", pt: "quase nunca / raramente" },
      { en: "carefully / quickly", pt: "com cuidado / rapidamente" },
    ],
    practice: [
      {
        prompt: "Qual frase está correta?",
        options: [
          "I take always the bus.",
          "I always take the bus.",
          "Always I take the bus.",
          "I take the bus always early.",
        ],
        answer: 1,
        explanation:
          "O advérbio de frequência vai antes do verbo principal: I always take.",
      },
      {
        prompt: "Qual frase está correta com o verbo to be?",
        options: [
          "She always is tired.",
          "She is always tired.",
          "Always she is tired.",
          "She is tired always.",
        ],
        answer: 1,
        explanation: "Com to be o advérbio vem depois: she is always tired.",
      },
    ],
    takeaway: "Você posiciona os advérbios onde o inglês espera.",
    tip: "Descreva sua rotina usando always, usually, sometimes e never, sempre no lugar certo.",
  },
  {
    id: "i22",
    objective:
      "Ligar ideias com conectivos de causa, contraste e consequência.",
    keyPoints: [
      "Causa: because, since, as.",
      "Contraste: although, even though, however, but.",
      "Consequência: so, therefore, as a result.",
      "however é formal e costuma vir entre vírgulas ou iniciando frase.",
    ],
    explanation: [
      "Conectivos são as juntas do texto. Sem eles, as frases ficam picadas; com eles, as ideias se encaixam e o texto flui.",
      "Cuidado para não usar “because” e “so” na mesma frase: em inglês, cada um pede uma estrutura diferente.",
    ],
    examples: [
      {
        en: "I stayed home because it was raining.",
        pt: "Fiquei em casa porque estava chovendo.",
      },
      {
        en: "Although it was raining, we went out.",
        pt: "Embora estivesse chovendo, saímos.",
      },
      {
        en: "The flight was delayed. Therefore, we missed the meeting.",
        pt: "O voo atrasou. Portanto, perdemos a reunião.",
      },
    ],
    vocab: [
      { en: "because / since", pt: "porque / já que" },
      { en: "although / even though", pt: "embora / mesmo que" },
      { en: "however", pt: "no entanto" },
      { en: "therefore / as a result", pt: "portanto / como resultado" },
    ],
    practice: [
      {
        prompt: "Complete: “___ it was late, we kept working.”",
        options: ["Because", "Although", "Therefore", "So"],
        answer: 1,
        explanation:
          "A ideia é de contraste (era tarde, mas continuamos): Although.",
      },
      {
        prompt: "Complete: “He studied hard, ___ he passed the exam.”",
        options: ["so", "because", "although", "however"],
        answer: 0,
        explanation: "Resultado direto usa so: estudou muito, então passou.",
      },
    ],
    takeaway: "Você escreve e fala com ideias conectadas, não frases soltas.",
    tip: "Escreva um parágrafo curto sobre seu dia usando because, although e so.",
  },
  {
    id: "i23",
    objective: "Aplicar a regra definitiva de in, on e at para tempo.",
    keyPoints: [
      "in: meses, anos, estações e períodos do dia — in May, in 2026, in the morning.",
      "on: dias e datas — on Monday, on May 5th, on my birthday.",
      "at: horas e momentos exatos — at 7, at noon, at night, at Christmas.",
      "Exceções úteis: at the weekend (UK), on the weekend (US).",
    ],
    explanation: [
      "A regra pensa em tamanho do tempo: quanto mais longo o período, mais “in”; quanto mais específico, mais “at”. O dia fica no meio, com on.",
      "Existe uma memória prática: in para blocos grandes, on para dias, at para o ponteiro do relógio.",
    ],
    examples: [
      {
        en: "My birthday is on July 12th.",
        pt: "Meu aniversário é em 12 de julho.",
      },
      { en: "The meeting starts at 9 a.m.", pt: "A reunião começa às 9h." },
      {
        en: "I'll be traveling in December.",
        pt: "Vou estar viajando em dezembro.",
      },
    ],
    vocab: [
      { en: "in the morning / afternoon", pt: "de manhã / à tarde" },
      { en: "at night", pt: "à noite" },
      { en: "at the moment", pt: "no momento" },
      { en: "on time / in time", pt: "na hora marcada / a tempo" },
    ],
    practice: [
      {
        prompt: "Complete: “I have an appointment ___ Monday.”",
        options: ["in", "on", "at", "to"],
        answer: 1,
        explanation: "Dias da semana usam on: on Monday.",
      },
      {
        prompt: "Complete: “The class starts ___ 8 p.m.”",
        options: ["in", "on", "at", "from"],
        answer: 2,
        explanation: "Horas exatas usam at: at 8 p.m.",
      },
    ],
    takeaway: "Você acerta in, on e at em datas, dias e horas.",
    tip: "Descreva sua agenda de amanhã em inglês usando on, at e in pelo menos uma vez cada.",
  },
  {
    id: "i24",
    objective: "Escrever e responder e-mails profissionais curtos com clareza.",
    keyPoints: [
      "Abertura: Dear Maria / Hello John — e no fim Best regards, Kind regards.",
      "Objetivo na primeira linha: I'm writing to confirm the meeting.",
      "Pedidos educados: Could you please send…? — Could I ask you to…?",
      "Fechamento com ação clara: Let me know if you need anything else.",
    ],
    explanation: [
      "E-mail profissional em inglês é direto: assunto claro, objetivo na primeira linha, pedido explícito e fechamento educado. Ninguém espera rodeios.",
      "A fórmula Could you please… é a forma padrão de pedir sem soar mandão. I would appreciate it if… funciona para pedidos mais formais.",
    ],
    examples: [
      {
        en: "I'm writing to confirm tomorrow's meeting.",
        pt: "Escrevo para confirmar a reunião de amanhã.",
      },
      {
        en: "Could you please send the updated file?",
        pt: "Você poderia enviar o arquivo atualizado, por favor?",
      },
      {
        en: "Looking forward to your reply. Best regards, Ana.",
        pt: "Aguardo seu retorno. Atenciosamente, Ana.",
      },
    ],
    vocab: [
      { en: "Dear… / Hello…", pt: "Prezado(a) / Olá" },
      { en: "I'm writing to…", pt: "Escrevo para…" },
      { en: "Looking forward to…", pt: "Aguardo / espero ansiosamente" },
      { en: "Best regards", pt: "Atenciosamente" },
    ],
    practice: [
      {
        prompt: "Qual é a forma mais educada de pedir um arquivo?",
        options: [
          "Send me the file.",
          "Could you please send me the file?",
          "You must send the file.",
          "I need file now.",
        ],
        answer: 1,
        explanation:
          "Could you please… é a fórmula padrão de pedido educado em e-mails.",
      },
      {
        prompt: "Como confirmar que você recebeu e vai verificar?",
        options: [
          "Thanks, I'll look into it and get back to you.",
          "I see it.",
          "Ok, done, bye.",
          "Received, no more.",
        ],
        answer: 0,
        explanation:
          "“I'll look into it and get back to you” confirma, assume ação e promete retorno.",
      },
    ],
    takeaway: "Você escreve e-mails profissionais claros em cinco linhas.",
    tip: "Reescreva em inglês o último e-mail de trabalho que você enviou, usando a estrutura da lição.",
  },
  {
    id: "i25",
    objective:
      "Atender o telefone, pedir para repetir e anotar recados sem travar.",
    keyPoints: [
      "Atenda com: Hello, this is Ana speaking.",
      "Peça para repetir: Sorry, could you repeat that, please?",
      "Soletre quando necessário: Can you spell that for me?",
      "Recado: Can I take a message? / I'll pass it on.",
    ],
    explanation: [
      "Ao telefone você não vê o rosto nem a boca da pessoa, então metade da compreensão desaparece. Frases de apoio são sua rede de segurança.",
      "Não tenha vergonha de pedir para repetir ou falar mais devagar: isso é normal até entre nativos.",
    ],
    examples: [
      {
        en: "Hello, this is Carlos speaking. How can I help you?",
        pt: "Alô, aqui é o Carlos falando. Como posso ajudar?",
      },
      {
        en: "Could you speak a little slower, please?",
        pt: "Pode falar um pouco mais devagar, por favor?",
      },
      {
        en: "Can I take a message? — Yes, please tell him Laura called.",
        pt: "Posso anotar um recado? — Sim, diga que a Laura ligou.",
      },
    ],
    vocab: [
      { en: "this is… speaking", pt: "aqui é… falando" },
      { en: "to hold on", pt: "aguardar na linha" },
      { en: "to take a message", pt: "anotar um recado" },
      { en: "to call back", pt: "ligar de volta" },
    ],
    practice: [
      {
        prompt: "Você não entendeu o nome. O que diz?",
        options: [
          "Sorry, could you repeat that, please?",
          "What?",
          "I don't understand nothing.",
          "Speak, please.",
        ],
        answer: 0,
        explanation:
          "Sorry, could you repeat that, please? é educado e resolve na hora.",
      },
      {
        prompt: "Como oferecer para anotar um recado?",
        options: [
          "Can I take a message?",
          "I want a message.",
          "Give me a paper.",
          "You write?",
        ],
        answer: 0,
        explanation: "A fórmula padrão é Can I take a message?",
      },
    ],
    takeaway: "Você conduz uma ligação em inglês sem perder informação.",
    tip: "Simule uma ligação de 60 segundos em voz alta, pedindo para repetir pelo menos uma vez.",
  },
  {
    id: "i26",
    objective:
      "Passar pelo check-in, embarque e imigração entendendo as perguntas.",
    keyPoints: [
      "Check-in: I'd like to check in. Here's my passport.",
      "Bagagem: I have one bag to check and one carry-on.",
      "Imigração: What's the purpose of your visit? — I'm here on vacation.",
      "Perguntas comuns: How long are you staying? Where will you stay?",
    ],
    explanation: [
      "No aeroporto o vocabulário se repete: check-in, gate, boarding pass, luggage. Aprender as frases exatas reduz muito o estresse.",
      "Na imigração, respostas curtas e diretas funcionam melhor. Diga o motivo, o tempo de estadia e onde vai ficar.",
    ],
    examples: [
      {
        en: "I'm here on vacation for ten days.",
        pt: "Estou aqui de férias por dez dias.",
      },
      { en: "Where is the boarding gate?", pt: "Onde é o portão de embarque?" },
      {
        en: "I'm staying at a hotel downtown.",
        pt: "Vou ficar em um hotel no centro.",
      },
    ],
    vocab: [
      { en: "boarding pass", pt: "cartão de embarque" },
      {
        en: "carry-on / checked bag",
        pt: "bagagem de mão / bagagem despachada",
      },
      { en: "delayed / cancelled", pt: "atrasado / cancelado" },
      { en: "purpose of your visit", pt: "motivo da sua visita" },
    ],
    practice: [
      {
        prompt:
          "O oficial pergunta “What's the purpose of your visit?”. Qual é a melhor resposta?",
        options: [
          "Yes, thank you.",
          "I'm here on vacation.",
          "I like Brazil.",
          "My name is Ana.",
        ],
        answer: 1,
        explanation:
          "Ele quer o motivo da viagem: turismo, trabalho ou estudo.",
      },
      {
        prompt: "Como dizer que sua bagagem não chegou?",
        options: [
          "My luggage didn't arrive.",
          "My bag no come.",
          "I lost my luggages.",
          "The baggage is not here for me.",
        ],
        answer: 0,
        explanation: "luggage é incontável: my luggage didn't arrive.",
      },
    ],
    takeaway: "Você faz check-in e responde à imigração com tranquilidade.",
    tip: "Monte sua resposta padrão de imigração em três frases e treine em voz alta.",
  },
  {
    id: "i27",
    objective:
      "Fazer check-in no hotel, pedir informações e resolver problemas do quarto.",
    keyPoints: [
      "Check-in: I have a reservation under the name Silva.",
      "Pedidos: Could I have extra towels? Is breakfast included?",
      "Problemas: The air conditioning isn't working.",
      "Saída: I'd like to check out. Could I get the receipt?",
    ],
    explanation: [
      "No hotel a estrutura se repete: identificar a reserva, pedir o que falta e relatar problemas. Com essas três funções você resolve quase tudo.",
      "A fórmula “Could I have…?” serve para pedidos; “There's a problem with…” resolve reclamações educadas.",
    ],
    examples: [
      {
        en: "I have a reservation under the name Oliveira.",
        pt: "Tenho uma reserva no nome Oliveira.",
      },
      {
        en: "Could I have a wake-up call at 6 a.m.?",
        pt: "Pode me acordar às 6h?",
      },
      {
        en: "The shower isn't working. Could you send someone?",
        pt: "O chuveiro não está funcionando. Pode mandar alguém?",
      },
    ],
    vocab: [
      { en: "reservation", pt: "reserva" },
      { en: "key card", pt: "cartão-chave" },
      { en: "to check out", pt: "fazer o check-out" },
      { en: "receipt", pt: "recibo" },
    ],
    practice: [
      {
        prompt: "Como dizer que o ar-condicionado não está funcionando?",
        options: [
          "The air conditioning isn't working.",
          "The air is no good.",
          "Air conditioner broken me.",
          "I have no air.",
        ],
        answer: 0,
        explanation:
          "A estrutura “X isn't working” serve para qualquer equipamento com problema.",
      },
      {
        prompt: "Como pedir mais toalhas?",
        options: [
          "Could I have extra towels, please?",
          "Give me towels.",
          "I want more towel.",
          "Towels, now.",
        ],
        answer: 0,
        explanation: "Could I have…? + please é o pedido educado padrão.",
      },
    ],
    takeaway:
      "Você resolve a estadia inteira em inglês, do check-in ao checkout.",
    tip: "Escreva cinco frases de pedidos que você faria em um hotel e treine em voz alta.",
  },
  {
    id: "i28",
    objective:
      "Descrever sintomas, entender orientações médicas e falar de dor.",
    keyPoints: [
      "Sintomas: I have a headache / a fever / a sore throat.",
      "Dor: My back hurts / I have pain in my knee.",
      "Histórico: I'm allergic to… / I take medication for…",
      "Entenda a orientação: take this twice a day, after meals.",
    ],
    explanation: [
      "Na consulta você precisa de três coisas: dizer onde dói, há quanto tempo e o que já tomou. Com isso já dá para conduzir a conversa.",
      "Em inglês, a dor costuma ser expressa de duas formas: “my head hurts” ou “I have a headache”. As duas são corretas.",
    ],
    examples: [
      {
        en: "I have a sore throat and a fever.",
        pt: "Estou com dor de garganta e febre.",
      },
      {
        en: "My back has been hurting for a week.",
        pt: "Minhas costas doem há uma semana.",
      },
      { en: "I'm allergic to penicillin.", pt: "Sou alérgico a penicilina." },
    ],
    vocab: [
      { en: "headache / stomachache", pt: "dor de cabeça / dor de estômago" },
      { en: "sore throat / fever", pt: "dor de garganta / febre" },
      { en: "prescription", pt: "receita médica" },
      { en: "twice a day", pt: "duas vezes ao dia" },
    ],
    practice: [
      {
        prompt: "Como dizer “minha cabeça dói”?",
        options: [
          "My head hurts.",
          "I have pain of head.",
          "My head is achy me.",
          "I hurt my head pain.",
        ],
        answer: 0,
        explanation: "A forma direta é “my head hurts” ou “I have a headache”.",
      },
      {
        prompt: "Complete: “Take this medicine ___ a day.”",
        options: ["two times for", "twice", "twice in", "two of"],
        answer: 1,
        explanation: "duas vezes ao dia = twice a day.",
      },
    ],
    takeaway: "Você descreve sintomas e entende a orientação médica.",
    tip: "Descreva em voz alta três situações: uma dor, uma alergia e um remédio que você toma.",
  },
  {
    id: "i29",
    objective:
      "Comprar roupas, pedir outro tamanho e fazer trocas com naturalidade.",
    keyPoints: [
      "Tamanhos: Do you have this in a medium / a size 40?",
      "Provador: Can I try it on? Where is the fitting room?",
      "Troca: I'd like to exchange this. It's too small.",
      "Preço e desconto: Is this on sale? Do you offer any discount?",
    ],
    explanation: [
      "Comprar envolve perguntas de tamanho, prova e troca. São poucas frases que se repetem em qualquer loja.",
      "Cuidado com “size”: usa-se com letras (small, medium, large) e números, e é a mesma palavra para singular e plural.",
    ],
    examples: [
      {
        en: "Do you have this in a large?",
        pt: "Você tem isso tamanho grande?",
      },
      { en: "Can I try it on?", pt: "Posso experimentar?" },
      {
        en: "I'd like to exchange this for a smaller size.",
        pt: "Gostaria de trocar por um tamanho menor.",
      },
    ],
    vocab: [
      { en: "size / fitting room", pt: "tamanho / provador" },
      { en: "on sale", pt: "em promoção" },
      { en: "receipt / refund", pt: "recibo / reembolso" },
      { en: "to try on", pt: "experimentar (roupa)" },
    ],
    practice: [
      {
        prompt: "Como pedir para experimentar uma roupa?",
        options: [
          "Can I try it on?",
          "Can I prove it?",
          "Can I test on me?",
          "Can I put it?",
        ],
        answer: 0,
        explanation: "Para roupas usamos try on: can I try it on?",
      },
      {
        prompt: "A peça ficou apertada. O que dizer?",
        options: [
          "It's too tight. Do you have a bigger size?",
          "It's no good. Give other.",
          "It doesn't fit me nothing.",
          "I need more cloth.",
        ],
        answer: 0,
        explanation:
          "Too tight = apertado demais. “Do you have a bigger size?” pede a troca.",
      },
    ],
    takeaway: "Você compra e troca roupas em inglês sem apontar e gesticular.",
    tip: "Escolha cinco peças do seu armário e diga o tamanho e a cor de cada uma em inglês.",
  },
  {
    id: "i30",
    objective:
      "Preparar respostas para as perguntas mais comuns de uma entrevista de emprego.",
    keyPoints: [
      "Tell me about yourself — responda em 60 segundos: presente, passado, futuro.",
      "Why do you want to work here? — conecte a empresa aos seus objetivos.",
      "What are your strengths and weaknesses? — seja honesto e mostre evolução.",
      "Encerre perguntando: What are the next steps?",
    ],
    explanation: [
      "Entrevistas seguem um roteiro previsível. Preparar respostas curtas e verdadeiras libera sua atenção para ouvir a pergunta com calma.",
      "Evite decorar textos longos: use estruturas. “I have five years of experience in… and I'm looking for…” funciona em muitas variações.",
    ],
    examples: [
      {
        en: "I've been working as an analyst for five years.",
        pt: "Trabalho como analista há cinco anos.",
      },
      {
        en: "I'm looking for a role where I can grow.",
        pt: "Busco uma função em que eu possa crescer.",
      },
      {
        en: "Could you tell me about the next steps?",
        pt: "Pode me falar sobre as próximas etapas?",
      },
    ],
    vocab: [
      { en: "strengths / weaknesses", pt: "pontos fortes / pontos fracos" },
      { en: "to be responsible for", pt: "ser responsável por" },
      { en: "to look for a new challenge", pt: "buscar um novo desafio" },
      { en: "next steps", pt: "próximas etapas" },
    ],
    practice: [
      {
        prompt: "“Tell me about yourself.” Qual resposta funciona melhor?",
        options: [
          "I was born in 1995 in a small town…",
          "I'm a marketing analyst with five years of experience, and I'm looking for a bigger challenge.",
          "My name is Ana, I like movies.",
          "I have a lot of qualities, you will see.",
        ],
        answer: 1,
        explanation:
          "A resposta profissional resume experiência e objetivo em uma frase, sem contar a vida inteira.",
      },
      {
        prompt: "Como falar de um ponto fraco sem se prejudicar?",
        options: [
          "I have no weaknesses.",
          "I used to struggle with public speaking, so I took a course and now I present monthly.",
          "I'm very disorganized sometimes.",
          "I don't like working with people.",
        ],
        answer: 1,
        explanation:
          "Nomeie o ponto fraco e mostre a ação que você tomou para melhorar — isso demonstra maturidade.",
      },
    ],
    takeaway:
      "Você tem respostas prontas e verdadeiras para as perguntas clássicas.",
    tip: "Grave sua resposta de 60 segundos para “Tell me about yourself” e ouça procurando excesso de informação.",
  },
]
