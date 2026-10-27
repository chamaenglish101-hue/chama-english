import type { LessonContent } from "./types.ts"

export const ADVANCED_6: LessonContent[] = [
  {
    id: "a61",
    objective:
      "Entender gírias e linguagem jovem sem usar expressão fora de época.",
    keyPoints: [
      "Gíria envelhece rápido: entenda tudo, use pouco e só quando fizer sentido.",
      "“Slay”, “no cap”, “low-key”, “ghosted” mudam de sentido em poucos anos.",
      "Contexto define tudo: a mesma expressão pode ser elogio ou crítica.",
      "Em ambiente profissional, prefira linguagem neutra e deixe a gíria para o informal.",
    ],
    explanation: [
      "Quem aprende por série corre o risco de falar como adolescente em reunião de trabalho. O objetivo é compreender sem soar deslocado.",
      "Uma boa estratégia é classificar a expressão: é neutra, informal ou muito jovem? Use só as neutras e informe-se das outras.",
    ],
    examples: [
      {
        en: "That presentation was low-key amazing.",
        pt: "Aquela apresentação foi surpreendentemente ótima.",
        note: "low-key = sem parecer, quase escondido — hoje equivale a “bem”.",
      },
      {
        en: "He ghosted me after the interview.",
        pt: "Ele desapareceu depois da entrevista.",
      },
      {
        en: "No cap, this is the best coffee in town.",
        pt: "Falando sério, esse é o melhor café da cidade.",
      },
    ],
    vocab: [
      { en: "slang", pt: "gíria" },
      { en: "to ghost someone", pt: "desaparecer sem aviso" },
      { en: "low-key", pt: "discretamente, meio" },
      { en: "no cap", pt: "sem mentira, falando sério" },
    ],
    practice: [
      {
        prompt: "O que significa “he ghosted me”?",
        options: [
          "ele me assustou",
          "ele desapareceu sem responder",
          "ele me elogiou",
          "ele me ligou",
        ],
        answer: 1,
        explanation: "Ghosting é cortar contato sem explicação.",
      },
      {
        prompt:
          "Qual é a postura mais segura com gírias em contexto profissional?",
        options: [
          "usar todas para parecer atual",
          "entender tudo, mas preferir linguagem neutra",
          "evitar entender gírias",
          "usar apenas gírias novas",
        ],
        answer: 1,
        explanation:
          "Compreender amplia seu ouvido; usar com cautela evita soar fora de lugar.",
      },
    ],
    takeaway:
      "Você entende a fala informal sem correr o risco de soar desatualizado.",
    tip: "Ao ouvir uma gíria nova, anote o contexto em que apareceu — ele explica o sentido melhor que o dicionário.",
  },
  {
    id: "a62",
    objective:
      "Perceber humor, ironia e sarcasmo em inglês — e não levar tudo ao pé da letra.",
    keyPoints: [
      "Sarcasmo vive do contraste entre o que se diz e o tom usado.",
      "Hipérbole é a base do humor: “I've told you a million times”.",
      "Britânicos usam understatement: “not bad” pode ser um elogio forte.",
      "Se a frase parece absurda no contexto, provavelmente é piada.",
    ],
    explanation: [
      "Humor em outra língua depende de referências culturais e de tom. Entender a intenção evita respostas inadequadas em reuniões e conversas leves.",
      "Uma pista confiável é a incongruência: elogio exagerado para algo ruim, ou pausa dramática antes da frase final.",
    ],
    examples: [
      {
        en: "Great, another meeting that could have been an email.",
        pt: "Ótimo, mais uma reunião que poderia ter sido um e-mail.",
        note: "o “great” irônico é a marca do sarcasmo.",
      },
      {
        en: "How was the traffic? — Oh, fantastic. Only two hours.",
        pt: "Como estava o trânsito? — Ah, fantástico. Só duas horas.",
      },
      {
        en: "Not bad at all, considering it was your first try.",
        pt: "Nada mal, considerando que foi sua primeira tentativa.",
      },
    ],
    vocab: [
      { en: "irony", pt: "ironia" },
      { en: "sarcasm", pt: "sarcasmo" },
      { en: "understatement", pt: "atenuação" },
      { en: "to tease", pt: "provocar brincando" },
    ],
    practice: [
      {
        prompt: "O que marca o sarcasmo em “Great, another meeting”?",
        options: [
          "o tempo verbal",
          "o contraste entre o elogio e a situação ruim",
          "a ausência de sujeito",
          "o uso de “another”",
        ],
        answer: 1,
        explanation:
          "O sarcasmo nasce do choque entre a palavra positiva e o contexto negativo.",
      },
      {
        prompt:
          "Se um britânico diz “not bad”, o que ele provavelmente quer dizer?",
        options: [
          "foi ruim",
          "foi razoável ou bom",
          "foi excelente",
          "não viu",
        ],
        answer: 1,
        explanation:
          "Understatement britânico: “not bad” costuma equivaler a um elogio.",
      },
    ],
    takeaway: "Você capta a piada e responde no tom certo.",
    tip: "Assista a um episódio de comédia britânica com legenda em inglês e marque cada ironia.",
  },
  {
    id: "a63",
    objective:
      "Interpretar metáforas e linguagem figurada sem traduzir palavra por palavra.",
    keyPoints: [
      "Metáforas comparam sem “like”: “time is money”.",
      "Expressões idiomáticas são blocos fixos: “break the ice”, “hit the books”.",
      "Traduzir literalmente gera confusão: busque o sentido equivalente em português.",
      "Esporte e guerra dominam as metáforas do inglês de negócios.",
    ],
    explanation: [
      "Metáforas organizam o pensamento: “we're on the same page”, “let's circle back”, “move the needle”. Entendê-las é entender como o inglês pensa.",
      "Aprender a expressão em bloco, em uma frase real, é mais eficiente que decorar listas soltas.",
    ],
    examples: [
      {
        en: "Let's break the ice before we get into the numbers.",
        pt: "Vamos quebrar o gelo antes de entrar nos números.",
      },
      {
        en: "That change didn't move the needle.",
        pt: "Essa mudança não fez diferença relevante.",
      },
      {
        en: "We're on the same page now.",
        pt: "Estamos alinhados agora.",
      },
    ],
    vocab: [
      { en: "metaphor", pt: "metáfora" },
      { en: "idiom", pt: "expressão idiomática" },
      { en: "to move the needle", pt: "gerar impacto real" },
      { en: "to circle back", pt: "retomar o assunto" },
    ],
    practice: [
      {
        prompt: "O que “to move the needle” significa?",
        options: [
          "mover um objeto",
          "causar impacto relevante",
          "costurar",
          "mudar de assunto",
        ],
        answer: 1,
        explanation:
          "A imagem vem do medidor: o ponteiro só se move quando algo realmente muda.",
      },
      {
        prompt: "Qual é a melhor forma de aprender expressões idiomáticas?",
        options: [
          "traduzindo cada palavra",
          "memorizando a expressão dentro de uma frase real",
          "usando-as em qualquer contexto",
          "evitando-as sempre",
        ],
        answer: 1,
        explanation:
          "Idiomas são blocos: aprender no contexto fixa o uso correto.",
      },
    ],
    takeaway:
      "Você entende o inglês figurado sem traduzir palavra por palavra.",
    tip: "Escolha cinco expressões de esporte e grave uma frase sua com cada uma.",
  },
  {
    id: "a64",
    objective:
      "Usar eufemismos e linguagem indireta para tratar temas delicados.",
    keyPoints: [
      "Eufemismo suaviza: “let go” em vez de “fired”.",
      "Pedidos indiretos protegem a relação: “Would you mind…?”.",
      "Diplomacia em inglês costuma usar hedge: “I'm afraid…”, “it seems that…”.",
      "Nem todo rodeio é educação: em alguns contextos, seja direto.",
    ],
    explanation: [
      "Em culturas anglófonas, a forma do pedido pesa tanto quanto o conteúdo. Suavizar não é fraqueza, é técnica de convivência.",
      "Aprender os hedges permite discordar de um chefe sem criar atrito: “I see it a little differently”.",
    ],
    examples: [
      {
        en: "We had to let a few people go last quarter.",
        pt: "Tivemos que dispensar algumas pessoas no último trimestre.",
      },
      {
        en: "Would you mind taking a look at this by Friday?",
        pt: "Você se importaria de dar uma olhada nisso até sexta?",
      },
      {
        en: "I'm afraid that this timeline isn't realistic.",
        pt: "Receio que esse prazo não seja realista.",
      },
    ],
    vocab: [
      { en: "euphemism", pt: "eufemismo" },
      { en: "to let someone go", pt: "dispensar alguém" },
      { en: "hedge", pt: "atenuação diplomática" },
      { en: "to soften", pt: "suavizar" },
    ],
    practice: [
      {
        prompt: "O que “to let someone go” normalmente significa no trabalho?",
        options: [
          "liberar a pessoa mais cedo",
          "dispensar a pessoa",
          "promover a pessoa",
          "dar férias",
        ],
        answer: 1,
        explanation: "É o eufemismo padrão para demissão.",
      },
      {
        prompt: "Qual frase discorda de forma mais diplomática?",
        options: [
          "You're wrong.",
          "I see it a little differently.",
          "That doesn't make sense.",
          "No.",
        ],
        answer: 1,
        explanation: "O hedge reconhece o outro lado antes de discordar.",
      },
    ],
    takeaway: "Você trata temas sensíveis com a indireção que o inglês espera.",
    tip: "Reescreva três pedidos diretos usando “Would you mind…”, “Could you possibly…”, “I was wondering if…",
  },
  {
    id: "a65",
    objective:
      "Contar histórias em inglês alternando tempos narrativos com naturalidade.",
    keyPoints: [
      "Comece pelo cenário: past continuous monta o fundo da cena.",
      "O fato principal entra no past simple e corta a cena.",
      "Past perfect volta ainda mais no tempo: “I had never seen that before”.",
      "Marcadores de tempo guiam o ouvinte: “then”, “meanwhile”, “by the time”.",
    ],
    explanation: [
      "Quem conta história em inglês trava por não saber quando usar cada passado. A regra é simples: cenário em contínuo, ação em simples, antecedente em perfect.",
      "Histórias ficam melhores com detalhes sensoriais e com um fecho curto — “and that's when I knew it was over”.",
    ],
    examples: [
      {
        en: "I was walking home when it started to pour.",
        pt: "Eu estava voltando para casa quando começou a chover forte.",
      },
      {
        en: "By the time we arrived, the show had already started.",
        pt: "Quando chegamos, o show já tinha começado.",
      },
      {
        en: "Meanwhile, she was figuring out a plan B.",
        pt: "Enquanto isso, ela estava pensando em um plano B.",
      },
    ],
    vocab: [
      { en: "to set the scene", pt: "montar o cenário" },
      { en: "meanwhile", pt: "enquanto isso" },
      { en: "plot twist", pt: "reviravolta" },
      { en: "to wrap up", pt: "encerrar" },
    ],
    practice: [
      {
        prompt: "Qual tempo monta o cenário de fundo na narrativa?",
        options: [
          "past simple",
          "past continuous",
          "present perfect",
          "future",
        ],
        answer: 1,
        explanation:
          "O past continuous descreve o que estava acontecendo quando algo interrompeu.",
      },
      {
        prompt: "O que indica o past perfect em uma história?",
        options: [
          "ação futura",
          "ação anterior a outra ação passada",
          "ação repetida no presente",
          "ordem direta",
        ],
        answer: 1,
        explanation:
          "Past perfect marca o que já havia acontecido antes do fato narrado.",
      },
    ],
    takeaway:
      "Suas histórias fluem com cenário, ação e antecedente nos lugares certos.",
    tip: "Conte em voz alta uma história de 60 segundos usando os três passados em ordem.",
  },
  {
    id: "a66",
    objective:
      "Escrever descrições criativas com imagem, ritmo e vocabulário sensorial.",
    keyPoints: [
      "Descreva com os quatro sentidos, não só com a visão.",
      "Varie o tamanho das frases: frases curtas criam tensão.",
      "Evite advérbios vazios (“very”, “really”); escolha um verbo mais preciso.",
      "Mostre em vez de explicar: “her hands trembled” vale mais que “she was scared”.",
    ],
    explanation: [
      "Escrita criativa em inglês depende de ritmo: alternar frases longas e curtas controla a respiração de quem lê.",
      "Verbos precisos substituem adjetivos. “He muttered”, “she glanced”, “they trudged” dizem mais que “he said sadly”.",
    ],
    examples: [
      {
        en: "The street smelled of rain and fried dough.",
        pt: "A rua cheirava a chuva e massa frita.",
      },
      {
        en: "He opened the door. Silence.",
        pt: "Ele abriu a porta. Silêncio.",
        note: "frase curta cria impacto depois de uma longa.",
      },
      {
        en: "She glanced at the clock and kept writing.",
        pt: "Ela olhou de relance o relógio e continuou escrevendo.",
      },
    ],
    vocab: [
      { en: "imagery", pt: "imagem sensorial" },
      { en: "to show, not tell", pt: "mostrar em vez de explicar" },
      { en: "pacing", pt: "ritmo" },
      { en: "to glance", pt: "olhar de relance" },
    ],
    practice: [
      {
        prompt: "Qual frase “mostra” em vez de explicar?",
        options: [
          "She was very nervous.",
          "Her hands trembled around the cup.",
          "She felt bad.",
          "It was a sad moment.",
        ],
        answer: 1,
        explanation:
          "O gesto concreto transmite o nervosismo sem nomear a emoção.",
      },
      {
        prompt: "Para que serve uma frase curta depois de uma longa?",
        options: [
          "para descansar",
          "para criar impacto e ritmo",
          "para corrigir a anterior",
          "para aumentar o texto",
        ],
        answer: 1,
        explanation: "A alternância de tamanho controla a tensão da leitura.",
      },
    ],
    takeaway: "Seus textos têm imagem, ritmo e verbos precisos.",
    tip: "Reescreva um parágrafo seu trocando todo “very + adjetivo” por um verbo mais forte.",
  },
  {
    id: "a67",
    objective:
      "Falar e escrever sobre a sua área em inglês com terminologia confiável.",
    keyPoints: [
      "Monte um glossário pessoal de 30 termos essenciais do seu campo.",
      "Aprenda o termo dentro de uma frase real do seu dia de trabalho.",
      "Cuidado com falsos cognatos técnicos: “eventual” e “actually” não são o que parecem.",
      "Saiba explicar seu jargão em linguagem simples para quem é de fora.",
    ],
    explanation: [
      "Inglês técnico se aprende com material autêntico: documentação, artigos e e-mails reais da sua área rendem mais que listas genéricas.",
      "Além do termo, aprenda o verbo que anda junto: “to run a test”, “to file a claim”, “to close the books”.",
    ],
    examples: [
      {
        en: "Could you share the specs before the review?",
        pt: "Você pode compartilhar as especificações antes da revisão?",
      },
      {
        en: "We need to roll back the release and roll out a fix.",
        pt: "Precisamos reverter a entrega e lançar uma correção.",
      },
      {
        en: "The report covers quarterly compliance metrics.",
        pt: "O relatório cobre métricas trimestrais de conformidade.",
      },
    ],
    vocab: [
      { en: "specs", pt: "especificações" },
      { en: "to roll back", pt: "reverter" },
      { en: "compliance", pt: "conformidade" },
      { en: "stakeholder", pt: "parte interessada" },
    ],
    practice: [
      {
        prompt: "O que “to roll back a release” significa?",
        options: [
          "lançar a versão",
          "reverter a versão",
          "testar a versão",
          "documentar a versão",
        ],
        answer: 1,
        explanation: "Roll back é voltar atrás; o oposto de roll out.",
      },
      {
        prompt: "Qual é a melhor fonte para aprender inglês da sua área?",
        options: [
          "listas genéricas de vocabulário",
          "documentação e e-mails reais do seu trabalho",
          "livros de gramática básica",
          "dicionários bilíngues apenas",
        ],
        answer: 1,
        explanation:
          "Material autêntico traz o termo junto com o contexto em que ele é usado.",
      },
    ],
    takeaway:
      "Você discute sua especialidade em inglês com precisão e clareza.",
    tip: "Traduza hoje três itens da sua rotina de trabalho e confirme cada termo em uma fonte real.",
  },
  {
    id: "a68",
    objective:
      "Resolver imprevistos de viagem em inglês com autonomia e sangue-frio.",
    keyPoints: [
      "Voo cancelado: “My flight was cancelled. What are my options?”",
      "Bagagem extraviada: registre o “lost baggage report” e peça protocolo.",
      "Saúde: descreva sintomas com “I've had a fever since…” e informe alergias.",
      "Guarde sempre o comprovante e o número do protocolo antes de sair do balcão.",
    ],
    explanation: [
      "Emergência de viagem exige frases curtas e específicas. Frases prontas evitam perder tempo procurando palavras quando a pressão é alta.",
      "A pergunta-chave é sempre “What are my options?”: ela obriga o atendente a apresentar caminhos em vez de só informar o problema.",
    ],
    examples: [
      {
        en: "My luggage didn't arrive. Where do I file a claim?",
        pt: "Minha bagagem não chegou. Onde eu registro a reclamação?",
      },
      {
        en: "I'm allergic to penicillin. Could you note that?",
        pt: "Sou alérgico a penicilina. Pode registrar isso?",
      },
      {
        en: "Is there any compensation for the delay?",
        pt: "Existe alguma compensação pelo atraso?",
      },
    ],
    vocab: [
      { en: "delayed", pt: "atrasado" },
      { en: "lost baggage claim", pt: "registro de bagagem extraviada" },
      { en: "boarding pass", pt: "cartão de embarque" },
      { en: "to rebook", pt: "remarcar" },
    ],
    practice: [
      {
        prompt: "Qual pergunta abre mais portas em um problema de viagem?",
        options: [
          "Why did this happen?",
          "What are my options?",
          "Who is responsible?",
          "Can I complain later?",
        ],
        answer: 1,
        explanation:
          "Pedir opções transfere o problema para quem pode resolver agora.",
      },
      {
        prompt: "Como descrever uma febre que começou ontem?",
        options: [
          "I have fever tomorrow.",
          "I've had a fever since yesterday.",
          "I will have fever.",
          "I am fever.",
        ],
        answer: 1,
        explanation:
          "“I've had… since…” indica início no passado e continuidade até agora.",
      },
    ],
    takeaway:
      "Você resolve imprevistos de viagem sozinho, sem depender de tradutor.",
    tip: "Salve no celular cinco frases de emergência e treine dizê-las em voz alta.",
  },
  {
    id: "a69",
    objective:
      "Aplicar estratégias de speaking para provas de proficiência e entrevistas.",
    keyPoints: [
      "Estrutura resposta longa: opinião + razão + exemplo + conclusão.",
      "Ganhe tempo com “That's a great question. Let me think for a second.”",
      "Em monólogo, use conectores para mostrar coesão: “firstly”, “on top of that”.",
      "Corrija-se sem drama: “or rather, what I mean is…”",
    ],
    explanation: [
      "Provas de proficiência avaliam fluência, coesão e amplitude — não perfeição. Responder de forma organizada vale mais que vocabulário rebuscado.",
      "Treinar em voz alta e gravar é o único jeito de perceber os vícios que atrapalham: pausas longas, repetições e falta de fecho.",
    ],
    examples: [
      {
        en: "That's a great question. Let me think for a second.",
        pt: "Ótima pergunta. Deixe-me pensar um instante.",
      },
      {
        en: "Firstly, it's cheaper. On top of that, it saves time.",
        pt: "Primeiro, é mais barato. Além disso, economiza tempo.",
      },
      {
        en: "I'd say the main reason is flexibility — or rather, the lack of it.",
        pt: "Eu diria que a razão principal é a flexibilidade — ou melhor, a falta dela.",
      },
    ],
    vocab: [
      { en: "fluency", pt: "fluência" },
      { en: "cohesion", pt: "coesão" },
      { en: "to elaborate", pt: "desenvolver a resposta" },
      { en: "to buy time", pt: "ganhar tempo" },
    ],
    practice: [
      {
        prompt:
          "Qual estrutura rende mais em uma resposta de prova de speaking?",
        options: [
          "uma frase curta e silêncio",
          "opinião, razão, exemplo e conclusão",
          "repetir a pergunta",
          "listar vocabulário difícil",
        ],
        answer: 1,
        explanation:
          "A estrutura organizada demonstra coesão, um dos critérios avaliados.",
      },
      {
        prompt: "Para que serve “Let me think for a second”?",
        options: [
          "para encerrar a resposta",
          "para ganhar tempo sem perder fluência aparente",
          "para pedir tradução",
          "para mudar de assunto",
        ],
        answer: 1,
        explanation:
          "É uma pausa estratégica aceita naturalmente pelo avaliador.",
      },
    ],
    takeaway:
      "Você responde de forma organizada e sustenta o discurso sob pressão.",
    tip: "Grave respostas de 90 segundos para três perguntas clássicas e ouça buscando repetições.",
  },
  {
    id: "a70",
    objective:
      "Aplicar estratégias de escrita para textos avaliados e profissionais.",
    keyPoints: [
      "Planeje 3 minutos antes de escrever: tese, dois argumentos e exemplo.",
      "Parágrafo = uma ideia; comece pelo tópico, desenvolva e feche.",
      "Conectores formais: “moreover”, “however”, “therefore”, “in conclusion”.",
      "Reserve 5 minutos para revisar concordância, artigos e pontuação.",
    ],
    explanation: [
      "Em provas de escrita, avaliadores procuram organização, variedade gramatical e vocabulário adequado ao registro. Rascunho e revisão mudam a nota mais que palavras difíceis.",
      "A revisão deve ser dirigida: procure os erros que você comete sempre — artigos, terceira pessoa do singular, preposições.",
    ],
    examples: [
      {
        en: "Moreover, remote work reduces commuting costs for employees.",
        pt: "Além disso, o trabalho remoto reduz custos de deslocamento para os funcionários.",
      },
      {
        en: "In conclusion, the benefits outweigh the drawbacks.",
        pt: "Em conclusão, os benefícios superam as desvantagens.",
      },
      {
        en: "However, this advantage depends on reliable internet access.",
        pt: "No entanto, essa vantagem depende de acesso confiável à internet.",
      },
    ],
    vocab: [
      { en: "thesis statement", pt: "tese do texto" },
      { en: "cohesive device", pt: "conector" },
      { en: "register", pt: "registro de linguagem" },
      { en: "to proofread", pt: "revisar" },
    ],
    practice: [
      {
        prompt: "O que avaliadores buscam em um texto de proficiência?",
        options: [
          "palavras raras acima de tudo",
          "organização, variedade gramatical e registro adequado",
          "textos muito longos",
          "frases muito complexas",
        ],
        answer: 1,
        explanation:
          "A nota depende de estrutura, gramática e adequação, não de palavras difíceis.",
      },
      {
        prompt: "Qual conector introduz contraste?",
        options: ["moreover", "however", "therefore", "in addition"],
        answer: 1,
        explanation:
          "“However” marca contraste; os outros marcam adição ou consequência.",
      },
    ],
    takeaway:
      "Você escreve textos organizados, com registro e revisão dirigida.",
    tip: "Escreva 250 palavras cronometradas e revise só os erros que você já sabe que comete.",
  },
]
