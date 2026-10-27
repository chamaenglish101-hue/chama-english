import type { LessonContent } from "./types.ts"

export const ADVANCED_4: LessonContent[] = [
  {
    id: "a31",
    objective:
      "Escrever cover letter e perfil de LinkedIn que passam pelo filtro e soam humanos.",
    keyPoints: [
      "A cover letter tem 3 parágrafos: por que a vaga, o que você entrega, chamada para conversa.",
      "Use números: “reduzi o tempo de resposta em 30%” convence mais que “sou proativo”.",
      "No LinkedIn, o título vai além do cargo: cargo + especialidade + impacto.",
      "Evite “I am writing to apply”: abra com uma frase sobre o problema da empresa.",
    ],
    explanation: [
      "Recrutadores gastam segundos na primeira leitura. Por isso, o começo importa mais que o fim: entre pelo resultado que você cria, não pela sua necessidade de emprego.",
      "O tom certo é confiante e direto, sem formalidade artificial. Verbos no passado para conquistas (“led”, “built”, “grew”) e no presente para o que você faz hoje.",
    ],
    examples: [
      {
        en: "Your expansion into Latin America is exactly the challenge I've been preparing for.",
        pt: "Sua expansão para a América Latina é exatamente o desafio para o qual venho me preparando.",
      },
      {
        en: "I led a team of six and cut onboarding time by half.",
        pt: "Liderei um time de seis pessoas e reduzi o tempo de integração pela metade.",
      },
      {
        en: "I'd love 15 minutes to explore how I can help your roadmap.",
        pt: "Gostaria de 15 minutos para explorar como posso ajudar seu roteiro de produto.",
      },
    ],
    vocab: [
      { en: "cover letter", pt: "carta de apresentação" },
      { en: "to tailor", pt: "personalizar para a vaga" },
      { en: "track record", pt: "histórico de resultados" },
      { en: "to stand out", pt: "se destacar" },
    ],
    practice: [
      {
        prompt: "Qual abertura é mais eficaz em uma cover letter?",
        options: [
          "I am writing to apply for the position.",
          "Your new fintech product needs someone who has scaled support in Brazil — that's what I do.",
          "Dear Sir or Madam, I saw your ad.",
          "I need a job and I think yours is good.",
        ],
        answer: 1,
        explanation:
          "Abrir pelo problema da empresa e pelo seu resultado específico prende a leitura imediatamente.",
      },
      {
        prompt: "O que significa “track record”?",
        options: [
          "faixa musical",
          "histórico de resultados",
          "trilha de auditoria",
          "currículo impresso",
        ],
        answer: 1,
        explanation:
          "track record = histórico comprovado de conquistas profissionais.",
      },
    ],
    takeaway:
      "Você apresenta sua trajetória com foco em resultado, não em cargos.",
    tip: "Reescreva a primeira linha do seu LinkedIn usando cargo + especialidade + impacto mensurável.",
  },
  {
    id: "a32",
    objective:
      "Negociar em inglês defendendo valor e concedendo com estratégia.",
    keyPoints: [
      "Ancore primeiro: quem apresenta o número inicial define a faixa da conversa.",
      "Use “if… then”: toda concessão vem acompanhada de uma contrapartida.",
      "Suavize a discordância com “I see your point, however…” em vez de “no”.",
      "BATNA (melhor alternativa) define seu poder: saiba seu limite antes de entrar.",
    ],
    explanation: [
      "Negociar em inglês é menos sobre vocabulário difícil e mais sobre sequência: ouvir, reconhecer, propor. Frases prontas ajudam a manter a calma quando o número assusta.",
      "Nunca aceite na hora. “Let me think about it and get back to you tomorrow” é uma jogada legítima e respeitada.",
    ],
    examples: [
      {
        en: "If you can move on the deadline, we can move on the price.",
        pt: "Se você flexibilizar o prazo, nós flexibilizamos o preço.",
      },
      {
        en: "That's a bit above our budget. What can we do to close the gap?",
        pt: "Está um pouco acima do nosso orçamento. O que podemos fazer para fechar a diferença?",
      },
      {
        en: "I appreciate the offer, but I was hoping for something closer to 90.",
        pt: "Agradeço a oferta, mas esperava algo mais perto de 90.",
      },
    ],
    vocab: [
      { en: "leverage", pt: "poder de barganha" },
      { en: "to meet halfway", pt: "chegar a um meio-termo" },
      { en: "deal breaker", pt: "ponto que inviabiliza o acordo" },
      { en: "to walk away", pt: "desistir do acordo" },
    ],
    practice: [
      {
        prompt: "O que significa “that's a deal breaker for us”?",
        options: [
          "é um ótimo negócio para nós",
          "é um ponto que inviabiliza o acordo",
          "precisamos de mais tempo",
          "vamos fechar hoje",
        ],
        answer: 1,
        explanation:
          "deal breaker é a condição que, se não atendida, encerra a negociação.",
      },
      {
        prompt: "Qual frase faz uma concessão condicional?",
        options: [
          "I want a lower price.",
          "If you cover shipping, we can sign this week.",
          "That is too expensive.",
          "Send me your best offer.",
        ],
        answer: 1,
        explanation:
          "A estrutura “if… then” troca uma concessão por outra, mantendo o equilíbrio.",
      },
    ],
    takeaway: "Você negocia com firmeza e educação, sem ceder de graça.",
    tip: "Antes da próxima negociação, escreva em inglês sua BATNA e três frases de contrapartida.",
  },
  {
    id: "a33",
    objective:
      "Conduzir e participar de reuniões em inglês com clareza de papéis.",
    keyPoints: [
      "Abra com pauta e tempo: “We have 30 minutes and three items”.",
      "Para interromper com educação: “Sorry to jump in, but…”.",
      "Resuma decisões: “To recap, we agreed on X and Y”.",
      "Encaminhe ações: “Who can own this by Friday?”.",
    ],
    explanation: [
      "Reuniões ficam confusas quando ninguém nomeia o que foi decidido. Aprender as expressões de condução transforma você em referência, mesmo em inglês.",
      "Frases curtas de transição — “let's move on”, “coming back to that”, “before we wrap up” — mantêm o controle do tempo sem soar autoritário.",
    ],
    examples: [
      {
        en: "Let's start with the budget and leave the timeline for the end.",
        pt: "Vamos começar pelo orçamento e deixar o cronograma para o final.",
      },
      {
        en: "Sorry to jump in, but the client just changed the scope.",
        pt: "Desculpe interromper, mas o cliente acabou de mudar o escopo.",
      },
      {
        en: "To recap: we're launching on the 10th and Ana owns the copy.",
        pt: "Recapitulando: lançamos dia 10 e a Ana é responsável pelo texto.",
      },
    ],
    vocab: [
      { en: "agenda", pt: "pauta" },
      { en: "to jump in", pt: "entrar na conversa" },
      { en: "action item", pt: "tarefa a executar" },
      { en: "to recap", pt: "recapitular" },
    ],
    practice: [
      {
        prompt: "Como resumir decisões ao final de uma reunião?",
        options: [
          "I think we talked a lot.",
          "To recap, we agreed to delay the launch and split the cost.",
          "Ok bye everyone.",
          "Any questions? No? Good.",
        ],
        answer: 1,
        explanation:
          "“To recap” anuncia o resumo e consolida o que foi decidido.",
      },
      {
        prompt: "O que é um “action item”?",
        options: [
          "um item da pauta",
          "uma tarefa com responsável",
          "uma objeção",
          "um orçamento",
        ],
        answer: 1,
        explanation:
          "action item é a tarefa concreta com dono e prazo definidos.",
      },
    ],
    takeaway:
      "Você conduz reuniões em inglês mantendo foco, tempo e decisões claras.",
    tip: "Na próxima reunião, assuma o fechamento: faça você mesmo o “to recap” final.",
  },
  {
    id: "a34",
    objective:
      "Estruturar apresentações em inglês como uma narrativa, não uma lista de slides.",
    keyPoints: [
      "Toda boa apresentação tem arco: contexto, conflito, solução, resultado.",
      "Anuncie o caminho: “I'll cover three things today”.",
      "Marque as transições: “Now let's look at the numbers”.",
      "Feche com uma chamada à ação, não com “thank you”.",
    ],
    explanation: [
      "O público lembra de histórias, não de bullets. Conte o problema antes de mostrar a solução: isso cria a tensão que faz o dado significar algo.",
      "Frases de navegação — “as you can see”, “moving on”, “this brings me to” — funcionam como placas de trânsito e reduzem o esforço de quem escuta.",
    ],
    examples: [
      {
        en: "Let me start with where we were six months ago.",
        pt: "Deixe-me começar por onde estávamos seis meses atrás.",
      },
      {
        en: "That's the problem. Here's how we fixed it.",
        pt: "Esse é o problema. Aqui está como resolvemos.",
      },
      {
        en: "So what I'm asking for today is one extra developer.",
        pt: "Então o que peço hoje é um desenvolvedor extra.",
      },
    ],
    vocab: [
      { en: "to walk someone through", pt: "explicar passo a passo" },
      { en: "takeaway", pt: "mensagem principal" },
      { en: "to set the stage", pt: "preparar o contexto" },
      { en: "call to action", pt: "chamada à ação" },
    ],
    practice: [
      {
        prompt: "Qual final é mais forte para uma apresentação?",
        options: [
          "Thank you for listening.",
          "That's all, any questions?",
          "If we approve this today, we ship in April — can I count on your support?",
          "I hope you liked it.",
        ],
        answer: 2,
        explanation:
          "Fechar com pedido específico converte atenção em decisão.",
      },
      {
        prompt: "O que significa “to set the stage”?",
        options: [
          "montar o palco",
          "preparar o contexto",
          "ensaiar",
          "encerrar",
        ],
        answer: 1,
        explanation:
          "set the stage = criar o contexto antes do ponto principal.",
      },
    ],
    takeaway:
      "Você apresenta ideias como história, com começo, tensão e pedido final.",
    tip: "Reescreva o título do seu próximo slide como uma frase de conclusão, não como um rótulo.",
  },
  {
    id: "a35",
    objective:
      "Responder perguntas difíceis em inglês sem perder a compostura.",
    keyPoints: [
      "Ganhe tempo: “That's a great question, let me think for a second”.",
      "Reformule antes de responder: “So you're asking about X, right?”.",
      "Admita limites com elegância: “I don't have that number here, I'll follow up”.",
      "Devolva perguntas hostis ao terreno dos fatos.",
    ],
    explanation: [
      "O silêncio de dois segundos parece eterno para quem fala e natural para quem ouve. Frases de transição compram esse tempo e ainda demonstram que você levou a pergunta a sério.",
      "Nunca invente um dado. “I'll get back to you with the exact figure” preserva sua credibilidade muito mais do que um número improvisado.",
    ],
    examples: [
      {
        en: "Let me make sure I understand the question first.",
        pt: "Deixe-me garantir que entendi a pergunta primeiro.",
      },
      {
        en: "I don't have those numbers in front of me, but I'll send them today.",
        pt: "Não tenho esses números aqui, mas envio hoje.",
      },
      {
        en: "What I can tell you is where we stand right now.",
        pt: "O que posso dizer é onde estamos neste momento.",
      },
    ],
    vocab: [
      { en: "to push back", pt: "questionar, discordar" },
      { en: "to follow up", pt: "retornar com resposta" },
      { en: "off the top of my head", pt: "de cabeça, sem consultar" },
      { en: "to address", pt: "tratar, responder a" },
    ],
    practice: [
      {
        prompt: "Você não sabe o número pedido. O que dizer?",
        options: [
          "I have no idea.",
          "It's around 40 percent, I think.",
          "I don't have that figure here — I'll send the exact number today.",
          "Why do you want to know?",
        ],
        answer: 2,
        explanation:
          "Reconhecer o limite e prometer o dado exato mantém a confiança.",
      },
      {
        prompt: "O que significa “off the top of my head”?",
        options: [
          "sem pensar muito, de memória",
          "com raiva",
          "de forma oficial",
          "por escrito",
        ],
        answer: 0,
        explanation:
          "off the top of my head = resposta aproximada, sem consulta.",
      },
    ],
    takeaway: "Você responde perguntas duras com calma e honestidade.",
    tip: "Prepare em inglês três frases de ganho de tempo para usar na próxima sessão de perguntas.",
  },
  {
    id: "a36",
    objective:
      "Usar o método STAR para contar histórias de entrevista em inglês.",
    keyPoints: [
      "STAR = Situation, Task, Action, Result.",
      "Gaste 20% na situação e 60% na ação — é ela que mostra competência.",
      "Termine sempre com resultado, de preferência mensurável.",
      "Uma história por competência: conflito, liderança, prazo, erro.",
    ],
    explanation: [
      "Entrevistadores avaliam previsibilidade: o que você fez antes, você tende a repetir. Por isso, histórias concretas vencem adjetivos como “dedicated” ou “hard-working”.",
      "Pratique em inglês em voz alta. A estrutura STAR evita que você se perca no meio da resposta e é a razão pela qual o entrevistador consegue anotar o que você disse.",
    ],
    examples: [
      {
        en: "We were losing customers during onboarding, so I mapped the drop-off.",
        pt: "Estávamos perdendo clientes na integração, então mapeei onde eles desistiam.",
      },
      {
        en: "I rebuilt the flow with the design team and tested it with 20 users.",
        pt: "Refiz o fluxo com o time de design e testei com 20 usuários.",
      },
      {
        en: "Activation went up 18% and support tickets dropped.",
        pt: "A ativação subiu 18% e os chamados de suporte caíram.",
      },
    ],
    vocab: [
      { en: "to walk through an example", pt: "detalhar um exemplo" },
      { en: "ownership", pt: "responsabilidade pelo resultado" },
      { en: "stakeholder", pt: "parte interessada" },
      { en: "to take the lead", pt: "assumir a liderança" },
    ],
    practice: [
      {
        prompt: "Qual parte do STAR deve ocupar mais tempo na resposta?",
        options: ["Situation", "Task", "Action", "Result"],
        answer: 2,
        explanation:
          "A ação revela o que você fez; é a parte mais informativa para o entrevistador.",
      },
      {
        prompt: "Complete: “I ___ the lead on the migration project.”",
        options: ["took", "made", "did", "get"],
        answer: 0,
        explanation: "A expressão fixa é “to take the lead”.",
      },
    ],
    takeaway:
      "Você conta histórias profissionais completas e convincentes em inglês.",
    tip: "Escreva quatro histórias STAR em inglês, uma para cada competência central da sua área.",
  },
  {
    id: "a37",
    objective: "Negociar salário e benefícios em inglês sem constrangimento.",
    keyPoints: [
      "Deixe o número para depois de entender o escopo e a faixa.",
      "Quando pressionado: “I'd like to learn more about the role first”.",
      "Peça uma faixa: “What's the range you've budgeted for this position?”.",
      "Negocie o pacote todo: bônus, férias, horário, curso, equipamento.",
    ],
    explanation: [
      "Quem fala primeiro perde parte da informação, mas quem nunca fala não negocia. A saída é adiar com elegância até ter contexto suficiente para ancorar bem.",
      "Salário é apenas um item. Em inglês, o conceito de “total compensation” abre espaço para pedir o que a empresa pode dar sem estourar orçamento de folha.",
    ],
    examples: [
      {
        en: "What's the salary range you have in mind for this role?",
        pt: "Qual a faixa salarial que vocês têm em mente para essa posição?",
      },
      {
        en: "Based on my experience, I'd be looking for something in the range of 95 to 110.",
        pt: "Com base na minha experiência, buscaria algo entre 95 e 110.",
      },
      {
        en: "If the base is fixed, could we revisit the signing bonus?",
        pt: "Se o salário-base está fixo, poderíamos rever o bônus de contratação?",
      },
    ],
    vocab: [
      { en: "salary range", pt: "faixa salarial" },
      { en: "total compensation", pt: "remuneração total" },
      { en: "signing bonus", pt: "bônus de contratação" },
      { en: "to lowball", pt: "oferecer bem abaixo do mercado" },
    ],
    practice: [
      {
        prompt: "Qual resposta adia o número com elegância?",
        options: [
          "I want 20 thousand.",
          "I'd rather learn more about the role before talking numbers.",
          "Whatever you think is fair.",
          "How much can you pay me?",
        ],
        answer: 1,
        explanation:
          "Adiar o número até conhecer o escopo mantém seu poder de negociação.",
      },
      {
        prompt: "O que é “signing bonus”?",
        options: [
          "bônus de contratação",
          "aumento anual",
          "plano de saúde",
          "hora extra",
        ],
        answer: 0,
        explanation: "signing bonus é o valor pago na assinatura do contrato.",
      },
    ],
    takeaway:
      "Você conversa sobre dinheiro em inglês com naturalidade e estratégia.",
    tip: "Pesquise a faixa da sua função no mercado e escreva sua frase de ancoragem em inglês.",
  },
  {
    id: "a38",
    objective:
      "Dar e receber feedback em inglês de forma específica e respeitosa.",
    keyPoints: [
      "Feedback eficaz descreve comportamento observável, não personalidade.",
      "Receba sem se defender: “That's fair, thank you for telling me”.",
      "Peça exemplos concretos quando o feedback for vago.",
      "Combine próximos passos: “What would good look like for you?”.",
    ],
    explanation: [
      "Em culturas anglófonas de trabalho, feedback direto é sinal de respeito, não de hostilidade. O que soa ofensivo é o julgamento genérico (“you're difficult”), não a crítica específica.",
      "Ao receber, resista ao impulso de explicar. Agradeça, faça uma pergunta de esclarecimento e proponha uma mudança — essa sequência é valorizada em avaliações de desempenho.",
    ],
    examples: [
      {
        en: "In yesterday's meeting you cut Maria off twice — that landed badly.",
        pt: "Na reunião de ontem você interrompeu a Maria duas vezes — isso pegou mal.",
      },
      {
        en: "That's fair. I'll make sure everyone finishes their point.",
        pt: "Justo. Vou garantir que todos terminem o raciocínio.",
      },
      {
        en: "What would good look like for you in the next quarter?",
        pt: "O que seria um bom resultado para você no próximo trimestre?",
      },
    ],
    vocab: [
      { en: "constructive feedback", pt: "retorno construtivo" },
      { en: "to take something on board", pt: "levar em consideração" },
      { en: "actionable", pt: "que gera ação concreta" },
      { en: "growth area", pt: "ponto a desenvolver" },
    ],
    practice: [
      {
        prompt: "Qual feedback é mais útil?",
        options: [
          "You're disorganized.",
          "You missed the last three deadlines without warning anyone.",
          "Everyone thinks you're slow.",
          "Try harder next time.",
        ],
        answer: 1,
        explanation:
          "Descrever comportamento observável permite mudança real; rótulos só geram defesa.",
      },
      {
        prompt: "Como receber feedback vago?",
        options: [
          "I disagree completely.",
          "Can you give me an example of what you mean?",
          "That's not true.",
          "OK, fine.",
        ],
        answer: 1,
        explanation:
          "Pedir um exemplo transforma o comentário vago em algo acionável.",
      },
    ],
    takeaway:
      "Você conversa sobre desempenho em inglês com maturidade profissional.",
    tip: "Escolha um feedback que recebeu e reescreva em inglês como comportamento observável.",
  },
  {
    id: "a39",
    objective: "Gerenciar conflitos em inglês com diplomacia e clareza.",
    keyPoints: [
      "Separe a pessoa do problema: ataque o processo, não o colega.",
      "Use “I” statements: “I felt left out of that decision”.",
      "Reconheça o que o outro tem de razão antes de discordar.",
      "Proponha solução: “How can we avoid this next time?”.",
    ],
    explanation: [
      "Em conflitos, o inglês oferece uma vantagem: expressões distanciadoras como “it seems that” e “from where I stand” permitem discordar sem acusar.",
      "Diplomacia não é omissão. Você diz exatamente o que incomodou, mas de um jeito que o outro consegue ouvir sem se fechar.",
    ],
    examples: [
      {
        en: "From where I stand, the decision was made before we had all the data.",
        pt: "Do meu ponto de vista, a decisão foi tomada antes de termos todos os dados.",
      },
      {
        en: "I understand you were under pressure, and I still needed a heads-up.",
        pt: "Entendo que você estava sob pressão, e ainda assim precisava de um aviso.",
      },
      {
        en: "How do we make sure this doesn't happen again?",
        pt: "Como garantimos que isso não se repita?",
      },
    ],
    vocab: [
      { en: "to clear the air", pt: "esclarecer o clima" },
      { en: "to see eye to eye", pt: "concordar totalmente" },
      { en: "to address an issue", pt: "tratar um problema" },
      { en: "misunderstanding", pt: "mal-entendido" },
    ],
    practice: [
      {
        prompt: "Qual frase é ao mesmo tempo clara e diplomática?",
        options: [
          "You always ignore my emails.",
          "I felt out of the loop when the change was announced without me.",
          "You're impossible to work with.",
          "It's fine, don't worry about it.",
        ],
        answer: 1,
        explanation:
          "A frase descreve o impacto sentido e o fato concreto, sem rotular a pessoa.",
      },
      {
        prompt: "O que significa “to clear the air”?",
        options: [
          "ventilar a sala",
          "esclarecer o clima entre as pessoas",
          "adiar a conversa",
          "pedir demissão",
        ],
        answer: 1,
        explanation:
          "clear the air = resolver a tensão com uma conversa honesta.",
      },
    ],
    takeaway: "Você resolve atritos em inglês sem magoar nem se calar.",
    tip: "Use a estrutura “I understood X, and I still felt Y” na próxima conversa difícil.",
  },
  {
    id: "a40",
    objective: "Fazer small talk estratégico que abre portas profissionais.",
    keyPoints: [
      "Small talk tem função: criar confiança antes do assunto sério.",
      "Comece pelo contexto compartilhado: evento, cidade, comida, clima.",
      "Perguntas abertas valem mais que “yes/no”.",
      "Saia com graça: “It was great talking to you — let's keep in touch”.",
    ],
    explanation: [
      "Falar do trivial não é perder tempo: é o teste social que mostra se você é fácil de trabalhar. Em inglês, os temas seguros são clima, viagem, comida, esporte e trabalho — nessa ordem de risco.",
      "Evite política, religião, salário e saúde. Quando o outro traz um assunto sensível, responda em geral e redirecione com uma pergunta.",
    ],
    examples: [
      {
        en: "How are you finding the conference so far?",
        pt: "O que você está achando da conferência até agora?",
      },
      {
        en: "I flew in this morning — that sunrise over the bay was worth the early start.",
        pt: "Cheguei hoje de manhã — aquele nascer do sol na baía valeu a madrugada.",
      },
      {
        en: "Great to meet you. I'd love to continue this over coffee sometime.",
        pt: "Prazer em conhecer você. Adoraria continuar isso num café.",
      },
    ],
    vocab: [
      { en: "small talk", pt: "conversa social leve" },
      { en: "icebreaker", pt: "quebra-gelo" },
      { en: "to keep in touch", pt: "manter contato" },
      { en: "to break the ice", pt: "quebrar o gelo" },
    ],
    practice: [
      {
        prompt: "Qual pergunta mantém a conversa fluindo?",
        options: [
          "Do you like the event?",
          "What brought you to this event?",
          "How much do you earn?",
          "Are you married?",
        ],
        answer: 1,
        explanation:
          "Perguntas abertas convidam a história; perguntas de sim/não encerram o papo.",
      },
      {
        prompt: "O que significa “to break the ice”?",
        options: [
          "encerrar a conversa",
          "quebrar o gelo, iniciar o contato",
          "mudar de assunto",
          "fazer uma pausa",
        ],
        answer: 1,
        explanation:
          "break the ice = dar o primeiro passo para a conversa fluir.",
      },
    ],
    takeaway:
      "Você começa conversas em inglês com leveza e sai delas com contatos.",
    tip: "Prepare três perguntas quebra-gelo em inglês para a próxima oportunidade social.",
  },
  {
    id: "a41",
    objective:
      "Fazer networking em conferências com intenção e sem parecer oportunista.",
    keyPoints: [
      "Saiba o que quer antes: uma conexão, um conselho, um contato?",
      "Apresente-se em 20 segundos: quem é, o que faz, por que está ali.",
      "Peça conselho, não emprego: “I'd love your take on…”.",
      "Registre o follow-up ainda no evento: uma mensagem curta no mesmo dia.",
    ],
    explanation: [
      "Networking funciona quando há troca, então comece oferecendo algo — uma informação, uma conexão, um ponto de vista. Quem só quer extrair é lembrado como inconvenient.",
      "O follow-up é o que separa o cartão perdido do contato real. Mencione algo específico da conversa: isso prova que você estava presente.",
    ],
    examples: [
      {
        en: "I work on logistics for a food-tech startup — we're trying to cut delivery times.",
        pt: "Trabalho com logística numa startup de food-tech — estamos tentando reduzir o tempo de entrega.",
      },
      {
        en: "I'd love your take on how your team handles peak season.",
        pt: "Adoraria saber sua opinião sobre como seu time lida com a alta temporada.",
      },
      {
        en: "Great meeting you — I'll send the article we mentioned.",
        pt: "Prazer em conhecer — vou enviar o artigo que comentamos.",
      },
    ],
    vocab: [
      { en: "to follow up", pt: "dar seguimento ao contato" },
      { en: "to introduce yourself", pt: "se apresentar" },
      { en: "worth while", pt: "que vale o tempo investido" },
      { en: "mutual connection", pt: "contato em comum" },
    ],
    practice: [
      {
        prompt: "Qual pedido abre mais portas numa conferência?",
        options: [
          "Can you give me a job?",
          "Could I ask how you got into this field?",
          "Send me your company's leads.",
          "Who is hiring right now?",
        ],
        answer: 1,
        explanation:
          "Pedir conselho cria vínculo e demonstra interesse genuíno na trajetória da pessoa.",
      },
      {
        prompt:
          "Complete: “It was great ___ you — I'll send that link tomorrow.”",
        options: ["meeting", "meet", "to meet", "met"],
        answer: 0,
        explanation: "Após “great” usa-se o gerúndio: great meeting you.",
      },
    ],
    takeaway: "Você cria contatos profissionais em inglês e os mantém vivos.",
    tip: "Ao sair de cada conversa, anote em inglês uma frase sobre o que a pessoa disse — é sua matéria-prima de follow-up.",
  },
  {
    id: "a42",
    objective:
      "Falar como líder em inglês: direção, confiança e responsabilidade.",
    keyPoints: [
      "Liderança é contexto e direção: “Here's where we're going and why”.",
      "Assuma o erro no plural, o mérito no singular.",
      "Dê autonomia: “You decide, I'll back you up”.",
      "Frases de alinhamento: “Does that land? What's unclear?”.",
    ],
    explanation: [
      "A linguagem de liderança é menos sobre ordens e mais sobre clareza. Em inglês, verbos como “to align”, “to empower” e “to own” carregam esse peso de responsabilidade compartilhada.",
      "Quem lidera em inglês precisa dominar o tom de segurança sem arrogância: “I'm confident we can” em vez de “I hope it works”.",
    ],
    examples: [
      {
        en: "Here's where we're going this quarter and why it matters.",
        pt: "Aqui é para onde vamos neste trimestre e por que isso importa.",
      },
      {
        en: "That miss was on me. Here's what I'm changing.",
        pt: "Esse erro foi meu. Aqui está o que vou mudar.",
      },
      {
        en: "You own the call — I'll back you up either way.",
        pt: "A decisão é sua — vou te apoiar em qualquer caso.",
      },
    ],
    vocab: [
      { en: "to own it", pt: "assumir a responsabilidade" },
      { en: "to align", pt: "alinhar expectativas" },
      { en: "to empower", pt: "dar autonomia" },
      { en: "to back someone up", pt: "apoiar alguém" },
    ],
    practice: [
      {
        prompt: "Qual frase demonstra liderança ao assumir um erro?",
        options: [
          "The team failed.",
          "That was on me — here's how I'm fixing it.",
          "Nobody told me anything.",
          "It happens to everyone.",
        ],
        answer: 1,
        explanation:
          "Assumir a responsabilidade e apresentar a correção constrói credibilidade.",
      },
      {
        prompt: "O que significa “to empower someone”?",
        options: [
          "dar autonomia e confiança",
          "cobrar resultados",
          "substituir a pessoa",
          "treinar do zero",
        ],
        answer: 0,
        explanation: "empower = dar poder de decisão e confiança para agir.",
      },
    ],
    takeaway: "Você soa como líder em inglês: claro, responsável e confiante.",
    tip: "No próximo problema, comece sua explicação em inglês com “Here's where we are and where we're going”.",
  },
  {
    id: "a43",
    objective: "Atender clientes em inglês com empatia e objetividade.",
    keyPoints: [
      "Reconheça o problema antes de explicar a solução.",
      "Evite culpar o cliente: “It looks like the payment didn't go through”.",
      "Diga o que você pode fazer agora, não apenas o que não pode.",
      "Confirme o combinado: “So I'll refund it today and email you the reference”.",
    ],
    explanation: [
      "Cliente irritado não quer explicação técnica, quer ser ouvido. A sequência que funciona é: empatia, responsabilidade, ação, prazo.",
      "Em inglês, o uso de “I” em vez de “you” reduz a acusação: “I'll look into what happened” soa muito melhor que “You must have made a mistake”.",
    ],
    examples: [
      {
        en: "I'm really sorry about this — let me see what I can do right now.",
        pt: "Sinto muito por isso — deixe-me ver o que posso fazer agora.",
      },
      {
        en: "It looks like the parcel is stuck at customs.",
        pt: "Parece que o pacote está parado na alfândega.",
      },
      {
        en: "I'll refund it today and send you the confirmation email.",
        pt: "Vou estornar hoje e enviar o e-mail de confirmação.",
      },
    ],
    vocab: [
      { en: "to sort something out", pt: "resolver algo" },
      { en: "to look into", pt: "investigar" },
      { en: "waiting time", pt: "tempo de espera" },
      { en: "to escalate", pt: "encaminhar para um nível superior" },
    ],
    practice: [
      {
        prompt: "Qual resposta demonstra empatia e ação?",
        options: [
          "You should have read the instructions.",
          "I'm sorry about this — I'll sort it out today and confirm by email.",
          "There's nothing I can do.",
          "That's our policy.",
        ],
        answer: 1,
        explanation:
          "Empatia seguida de ação concreta e prazo resolve a experiência do cliente.",
      },
      {
        prompt: "O que significa “to escalate an issue”?",
        options: [
          "resolver sozinho",
          "encaminhar para outra instância",
          "cancelar o pedido",
          "ignorar o caso",
        ],
        answer: 1,
        explanation: "escalate = passar o caso para alguém com mais alçada.",
      },
    ],
    takeaway:
      "Você transforma reclamações em confiança usando inglês claro e humano.",
    tip: "Escreva sua resposta padrão de desculpas em inglês e treine até soar espontânea.",
  },
  {
    id: "a44",
    objective:
      "Participar de teleconferências e reuniões híbridas com visibilidade.",
    keyPoints: [
      "Teste áudio e diga seu nome ao entrar: “Hi, this is Rafael, can you hear me?”.",
      "Resuma quando voltar a atenção para você: “To build on that…”.",
      "Use o chat como aliado: links, números e correções.",
      "Fale um pouco mais devagar: vídeo come as pausas naturais.",
    ],
    explanation: [
      "Em teleconferências você perde 70% da linguagem corporal, então tudo precisa ser dito. Declarar intenções — “I have a quick question”, “I'll take that offline” — evita atropelos.",
      "Se o outro domina a agenda, peça espaço com elegância: “Can I jump in for a minute on that point?”.",
    ],
    examples: [
      {
        en: "Sorry, my audio cut out — could you repeat the last part?",
        pt: "Desculpe, meu áudio caiu — pode repetir a última parte?",
      },
      {
        en: "Can I jump in for a minute on the pricing point?",
        pt: "Posso entrar um minuto no ponto dos preços?",
      },
      {
        en: "Let's take that offline and bring numbers next week.",
        pt: "Vamos resolver isso fora da reunião e trazer números na semana que vem.",
      },
    ],
    vocab: [
      { en: "to jump in", pt: "entrar na fala" },
      { en: "to mute", pt: "silenciar o microfone" },
      { en: "to take it offline", pt: "deixar para outro momento" },
      { en: "to share screen", pt: "compartilhar tela" },
    ],
    practice: [
      {
        prompt: "Como pedir para voltar ao seu ponto sem parecer rude?",
        options: [
          "Hurry up, I have to speak.",
          "Can I jump in for a minute on that point?",
          "You're talking too much.",
          "Stop, please.",
        ],
        answer: 1,
        explanation:
          "Pedir licença com “Can I jump in…” preserva o clima da reunião.",
      },
      {
        prompt: "O que significa “let's take it offline”?",
        options: [
          "vamos desligar a câmera",
          "vamos tratar isso fora da reunião",
          "vamos encerrar agora",
          "vamos gravar a reunião",
        ],
        answer: 1,
        explanation:
          "take it offline = discutir depois, fora do encontro coletivo.",
      },
    ],
    takeaway:
      "Você se faz ouvir em reuniões online e híbridas, mesmo sem a sala ao seu favor.",
    tip: "Na próxima chamada, use uma expressão de transição por reunião — e conte quantas usou.",
  },
  {
    id: "a45",
    objective: "Construir argumentos em inglês com evidência e lógica.",
    keyPoints: [
      "Tese, evidência, implicação: nessa ordem.",
      "Antecipe a objeção e responda a ela antes que surja.",
      "Use conectores: furthermore, therefore, in contrast, consequently.",
      "Conclua ligando o argumento a uma consequência prática.",
    ],
    explanation: [
      "Argumentar não é insistir, é encadear. Em inglês, conectores formais dão o mapa da sua lógica: quem lê ou escuta sabe quando você explica, contrasta ou conclui.",
      "O contra-argumento fortalece a tese: mostrar que você considerou a outra posição prova que seu raciocínio é sólido, não ingênuo.",
    ],
    examples: [
      {
        en: "Remote work is here to stay. Moreover, our turnover dropped after we adopted it.",
        pt: "O trabalho remoto veio para ficar. Além disso, nossa rotatividade caiu depois que o adotamos.",
      },
      {
        en: "Critics say it hurts collaboration. However, our data shows no drop in delivery.",
        pt: "Críticos dizem que prejudica a colaboração. No entanto, nossos dados não mostram queda na entrega.",
      },
      {
        en: "Therefore, keeping flexibility is the pragmatic choice.",
        pt: "Portanto, manter a flexibilidade é a escolha pragmática.",
      },
    ],
    vocab: [
      { en: "furthermore", pt: "além disso" },
      { en: "however", pt: "no entanto" },
      { en: "therefore", pt: "portanto" },
      { en: "counterargument", pt: "contra-argumento" },
    ],
    practice: [
      {
        prompt: "Qual conector introduz contraste?",
        options: ["furthermore", "therefore", "however", "consequently"],
        answer: 2,
        explanation:
          "however marca contraste; furthermore acrescenta, therefore e consequently concluem.",
      },
      {
        prompt: "Por que responder à objeção fortalece o argumento?",
        options: [
          "Mostra que você estudou a posição contrária.",
          "Encerra a discussão rapidamente.",
          "Deixa o texto mais longo.",
          "Evita que o leitor pense.",
        ],
        answer: 0,
        explanation:
          "Antecipar a objeção demonstra solidez e desarma a crítica antes que ela apareça.",
      },
    ],
    takeaway:
      "Você defende uma ideia em inglês com lógica visível e evidência.",
    tip: "Escreva um parágrafo em inglês com “the reason is… therefore… however…” sobre um tema da sua área.",
  },
  {
    id: "a46",
    objective: "Debater em inglês atacando ideias sem atacar pessoas.",
    keyPoints: [
      "Discorde do ponto, não da pessoa: “I see it differently”.",
      "Referencie o que foi dito: “On your point about cost…”.",
      "Peça definição quando o debate travar: “What do we mean by fair?”.",
      "Ceda quando o argumento é bom — isso dá credibilidade ao resto.",
    ],
    explanation: [
      "Debate de verdade exige escuta ativa. Repetir o argumento do outro com suas palavras mostra que você entendeu e cria a ponte para discordar de forma construtiva.",
      "Em inglês, expressões como “I take your point, but” e “that's a fair concern, though” permitem discordar mantendo o respeito.",
    ],
    examples: [
      {
        en: "I take your point about deadlines, but the quality cost is real.",
        pt: "Entendo seu ponto sobre prazos, mas o custo na qualidade é real.",
      },
      {
        en: "On your point about cost — that was three years ago.",
        pt: "Sobre seu ponto a respeito de custos — isso foi há três anos.",
      },
      {
        en: "You've convinced me on the first part, I'm not there yet on the second.",
        pt: "Você me convenceu na primeira parte, mas ainda não na segunda.",
      },
    ],
    vocab: [
      { en: "to take a point", pt: "reconhecer um argumento" },
      { en: "to concede", pt: "ceder em um ponto" },
      { en: "flawed", pt: "falho, com problema" },
      { en: "to back something up", pt: "sustentar com evidência" },
    ],
    practice: [
      {
        prompt: "Qual frase discorda sem atacar a pessoa?",
        options: [
          "That's a stupid idea.",
          "You clearly don't understand the market.",
          "I see it differently — here's why.",
          "Anyone with experience would disagree.",
        ],
        answer: 2,
        explanation:
          "Marcar a diferença de visão e explicar o porquê mantém o debate produtivo.",
      },
      {
        prompt: "O que significa “to concede a point”?",
        options: [
          "encerrar o debate",
          "ceder reconhecendo que o outro tem razão",
          "aumentar a voz",
          "mudar de assunto",
        ],
        answer: 1,
        explanation:
          "concede = admitir um ponto do adversário, o que fortalece sua credibilidade.",
      },
    ],
    takeaway:
      "Você debate em inglês com firmeza e respeito, e sai melhor de cada conversa.",
    tip: "Pratique a fórmula “I take your point, but…” em três opiniões que você realmente defende.",
  },
  {
    id: "a47",
    objective:
      "Escrever ensaios em inglês com introdução, tese e conclusão bem amarradas.",
    keyPoints: [
      "A introdução termina com a tese: uma frase que resume sua posição.",
      "Cada parágrafo defende uma ideia e começa por ela (topic sentence).",
      "A conclusão não repete: sintetiza e projeta consequência.",
      "Coesão vem de referências: “this trend”, “such measures”, “the former”.",
    ],
    explanation: [
      "Ensaio em inglês segue um pacto claro com o leitor: você anuncia o caminho e cumpre. A tese é o contrato; os parágrafos são a entrega.",
      "Evite encher o texto de palavras difíceis. Clareza e progressão lógica valem mais que vocabulário raro em qualquer avaliação de escrita.",
    ],
    examples: [
      {
        en: "This essay argues that remote work strengthens rather than weakens teams.",
        pt: "Este ensaio argumenta que o trabalho remoto fortalece, e não enfraquece, os times.",
      },
      {
        en: "The first reason is flexibility: people work when they are most productive.",
        pt: "A primeira razão é a flexibilidade: as pessoas trabalham quando rendem mais.",
      },
      {
        en: "If companies ignore this shift, they will lose talent to those who adapt.",
        pt: "Se as empresas ignorarem essa mudança, perderão talentos para as que se adaptarem.",
      },
    ],
    vocab: [
      { en: "thesis statement", pt: "frase de tese" },
      { en: "topic sentence", pt: "frase-tópico do parágrafo" },
      { en: "to outline", pt: "esboçar a estrutura" },
      { en: "to elaborate on", pt: "desenvolver um ponto" },
    ],
    practice: [
      {
        prompt: "O que deve aparecer no fim da introdução?",
        options: [
          "um exemplo detalhado",
          "a tese que resume a posição",
          "uma citação",
          "o resumo de todos os parágrafos",
        ],
        answer: 1,
        explanation:
          "A introdução culmina na tese, o contrato lógico do ensaio.",
      },
      {
        prompt: "O que é uma “topic sentence”?",
        options: [
          "a última frase do texto",
          "a frase inicial que anuncia a ideia do parágrafo",
          "um título",
          "uma pergunta retórica",
        ],
        answer: 1,
        explanation:
          "A topic sentence abre o parágrafo e diz qual ideia será defendida.",
      },
    ],
    takeaway:
      "Você escreve textos argumentativos em inglês com estrutura reconhecível.",
    tip: "Esboce um ensaio de 5 parágrafos em inglês apenas com as teses e topic sentences.",
  },
  {
    id: "a48",
    objective:
      "Parafrasear e resumir fontes em inglês sem copiar e sem distorcer.",
    keyPoints: [
      "Parafrasear = reescrever a ideia com suas palavras + citação da fonte.",
      "Resumir = reduzir ao essencial, mantendo a proporção das ideias.",
      "Mude a estrutura, não só sinônimos: isso evita plágio.",
      "Use verbos de relato variados: argues, notes, claims, suggests.",
    ],
    explanation: [
      "Parafrasear bem é entender o suficiente para reconstruir. Trocar palavra por sinônimo mantém a frase original e configura plágio; mudar a ordem e a estrutura demonstra compreensão.",
      "Em resumos acadêmicos ou profissionais, sinalize sempre o autor: “According to Ferreira…” ou “The report suggests that…”.",
    ],
    examples: [
      {
        en: "According to the 2024 report, hybrid teams report higher satisfaction.",
        pt: "Segundo o relatório de 2024, equipes híbridas relatam maior satisfação.",
      },
      {
        en: "The author argues that flexibility, not surveillance, drives performance.",
        pt: "A autora argumenta que flexibilidade, não vigilância, impulsiona o desempenho.",
      },
      {
        en: "In short, the study links autonomy to retention.",
        pt: "Em resumo, o estudo liga autonomia à retenção de talentos.",
      },
    ],
    vocab: [
      { en: "to paraphrase", pt: "parafrasear" },
      { en: "to cite a source", pt: "citar uma fonte" },
      { en: "to sum up", pt: "resumir" },
      { en: "plagiarism", pt: "plágio" },
    ],
    practice: [
      {
        prompt: "O que diferencia paráfrase de plágio?",
        options: [
          "usar sinônimos",
          "reescrever a ideia com estrutura própria e citar a fonte",
          "encurtar o texto",
          "traduzir para o português",
        ],
        answer: 1,
        explanation:
          "Reconstruir a ideia com sua estrutura e creditar a fonte é o que distingue paráfrase de plágio.",
      },
      {
        prompt: "Qual verbo de relato indica dúvida?",
        options: ["states", "suggests", "reports", "documents"],
        answer: 1,
        explanation:
          "suggests indica hipótese ou indício, mais cauteloso que states.",
      },
    ],
    takeaway: "Você usa fontes em inglês com integridade e clareza.",
    tip: "Pegue um parágrafo em inglês e reescreva-o em três frases sem repetir nenhuma construção original.",
  },
  {
    id: "a49",
    objective:
      "Fazer a coesão do texto avançado: conectores, referência e progressão.",
    keyPoints: [
      "Conectores de adição, contraste, causa, consequência e concessão têm funções distintas.",
      "Referência lexical evita repetição: “this shift”, “the latter”, “such measures”.",
      "Progressão: cada frase deve acrescentar informação nova.",
      "Marcadores de concessão dão sofisticação: albeit, notwithstanding, whereas.",
    ],
    explanation: [
      "Um texto avançado não é aquele com palavras difíceis, e sim aquele em que o leitor nunca precisa voltar atrás para entender a ligação entre ideias.",
      "Cuidado com o excesso de conectores: um “furthermore” a cada frase pesa. Use-os onde a relação lógica precisa ser explícita.",
    ],
    examples: [
      {
        en: "Notwithstanding the cost, the upgrade paid for itself in a year.",
        pt: "Apesar do custo, a atualização se pagou em um ano.",
      },
      {
        en: "The plan was ambitious, albeit underfunded.",
        pt: "O plano era ambicioso, embora pouco financiado.",
      },
      {
        en: "Sales rose whereas retention fell, which is a warning sign.",
        pt: "As vendas subiram enquanto a retenção caiu, o que é um sinal de alerta.",
      },
    ],
    vocab: [
      { en: "notwithstanding", pt: "apesar de" },
      { en: "albeit", pt: "embora, ainda que" },
      { en: "whereas", pt: "enquanto, ao passo que" },
      { en: "the latter", pt: "o último citado" },
    ],
    practice: [
      {
        prompt: "Qual conector expressa concessão?",
        options: ["therefore", "moreover", "albeit", "consequently"],
        answer: 2,
        explanation: "albeit introduz uma ressalva: “ambitious, albeit risky”.",
      },
      {
        prompt: "Para que serve “the latter”?",
        options: [
          "indicar o primeiro item citado",
          "indicar o último item citado",
          "concluir o parágrafo",
          "introduzir uma causa",
        ],
        answer: 1,
        explanation:
          "the latter se refere ao segundo de dois elementos; o primeiro é “the former”.",
      },
    ],
    takeaway:
      "Seus textos em inglês fluem sem repetições e sem conexões implícitas.",
    tip: "Revise um texto seu e substitua repetições por referências como “this trend” ou “the former”.",
  },
  {
    id: "a50",
    objective:
      "Ler criticamente em inglês identificando viés, intenção e evidência.",
    keyPoints: [
      "Todo texto tem propósito: informar, persuadir, vender ou entreter.",
      "Separe fato de opinião: “studies show” sem fonte é opinião disfarçada.",
      "Observe seleção de exemplos: o que foi omitido também comunica.",
      "Pergunte: quem escreve, para quem, com quais interesses.",
    ],
    explanation: [
      "Leitura crítica é uma habilidade de trabalho: relatórios, notícias e propostas chegam com intenção embutida. Identificá-la evita decisões baseadas em narrativa.",
      "Em inglês, marcadores discursivos revelam posição: “reportedly”, “allegedly”, “it is widely believed” sinalizam afirmação não verificada.",
    ],
    examples: [
      {
        en: "The report claims sales tripled — though the sample was tiny.",
        pt: "O relatório afirma que as vendas triplicaram — embora a amostra fosse pequena.",
      },
      {
        en: "Allegedly, the system failed, but no logs were released.",
        pt: "Supostamente o sistema falhou, mas nenhum registro foi divulgado.",
      },
      {
        en: "Ask who benefits from this framing.",
        pt: "Pergunte quem se beneficia desse enquadramento.",
      },
    ],
    vocab: [
      { en: "bias", pt: "viés" },
      { en: "allegedly", pt: "supostamente" },
      { en: "to omit", pt: "omitir" },
      { en: "framing", pt: "enquadramento" },
    ],
    practice: [
      {
        prompt: "Qual expressão sinaliza informação não confirmada?",
        options: [
          "studies confirm",
          "allegedly",
          "we measured",
          "the data shows",
        ],
        answer: 1,
        explanation:
          "allegedly marca acusação ou informação ainda não comprovada.",
      },
      {
        prompt: "Ao ler um texto persuasivo, o que perguntar primeiro?",
        options: [
          "Quem escreveu e com que interesse?",
          "Quantas palavras tem?",
          "Qual é a cor do título?",
          "Onde foi publicado primeiro?",
        ],
        answer: 0,
        explanation:
          "Autor e interesse definem o enquadramento de tudo o que vem depois.",
      },
    ],
    takeaway:
      "Você lê em inglês avaliando a intenção por trás do texto, não só o conteúdo.",
    tip: "Escolha um artigo em inglês e marque cada afirmação como fato, opinião ou alegação não verificada.",
  },
]
