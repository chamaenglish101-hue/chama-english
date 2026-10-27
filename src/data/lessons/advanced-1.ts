import type { LessonContent } from "./types.ts"

export const ADVANCED_1: LessonContent[] = [
  {
    id: "a01",
    objective: "Ordenar dois acontecimentos passados com o past perfect.",
    keyPoints: [
      "Estrutura: had + particípio — The train had left.",
      "Marca o que aconteceu antes de outro momento passado.",
      "Contraste: When I arrived, they had already eaten.",
      "Com before e after, o past perfect é opcional e frequentemente dispensado.",
    ],
    explanation: [
      "O past perfect é o “passado do passado”: existe para ordenar dois fatos quando a sequência não é óbvia. Ele não substitui o passado simples, ele o organiza.",
      "Só use quando a ordem importa. Em “I opened the door and sat down”, a sequência é clara e o past perfect seria artificial.",
    ],
    examples: [
      {
        en: "By the time we arrived, the film had started.",
        pt: "Quando chegamos, o filme já tinha começado.",
      },
      {
        en: "She had never seen the sea before that trip.",
        pt: "Ela nunca tinha visto o mar antes daquela viagem.",
      },
      {
        en: "I realized I had left my phone at home.",
        pt: "Percebi que tinha deixado o celular em casa.",
      },
    ],
    vocab: [
      { en: "by the time", pt: "quando, no momento em que" },
      { en: "already / never before", pt: "já / nunca antes" },
      { en: "to realize", pt: "perceber" },
      { en: "previously", pt: "previamente" },
    ],
    practice: [
      {
        prompt: "Complete: “When I got to the station, the train ___.”",
        options: [
          "already left",
          "had already left",
          "has already left",
          "was leaving already",
        ],
        answer: 1,
        explanation: "A partida aconteceu antes da chegada: had already left.",
      },
      {
        prompt: "Complete: “She told me she ___ the e-mail the day before.”",
        options: ["sends", "sent", "had sent", "has sent"],
        answer: 2,
        explanation: "Ação anterior a outra ação passada: had sent.",
      },
    ],
    takeaway: "Você organiza dois momentos passados sem ambiguidade.",
    tip: "Descreva um dia em que tudo deu errado, marcando com had o que já tinha acontecido antes.",
  },
  {
    id: "a02",
    objective:
      "Expressar duração e causa anterior a outro momento passado com o past perfect continuous.",
    keyPoints: [
      "Estrutura: had been + -ing — I had been waiting for an hour.",
      "Foca na duração da ação, não no resultado.",
      "Frequentemente explica a causa de algo: He was tired because he had been working all day.",
      "Contraste: had waited (fato concluído) x had been waiting (processo).",
    ],
    explanation: [
      "O past perfect continuous mostra o tempo que algo vinha acontecendo antes de outro ponto do passado. É o tempo da explicação e do cansaço acumulado.",
      "A diferença para o past perfect simples é o foco: um destaca o resultado, o outro destaca o processo.",
    ],
    examples: [
      {
        en: "They had been dating for two years when they moved in together.",
        pt: "Eles namoravam havia dois anos quando foram morar juntos.",
      },
      {
        en: "I had been trying to call you all morning.",
        pt: "Eu estava tentando te ligar a manhã toda.",
      },
      {
        en: "The ground was wet because it had been raining.",
        pt: "O chão estava molhado porque tinha chovido (estava chovendo).",
      },
    ],
    vocab: [
      { en: "to have been doing", pt: "vinha fazendo" },
      { en: "all morning / all day", pt: "a manhã toda / o dia todo" },
      { en: "for hours", pt: "por horas" },
      { en: "to end up", pt: "acabar" },
    ],
    practice: [
      {
        prompt: "Complete: “He was exhausted because he ___ all night.”",
        options: ["worked", "had been working", "has worked", "was work"],
        answer: 1,
        explanation: "Duração anterior explicando o estado: had been working.",
      },
      {
        prompt: "Qual frase destaca o processo, e não o resultado?",
        options: [
          "She had written the report.",
          "She had been writing the report since dawn.",
          "She wrote the report.",
          "She has written the report.",
        ],
        answer: 1,
        explanation: "had been writing destaca a duração do processo.",
      },
    ],
    takeaway:
      "Você explica situações passadas mostrando quanto tempo vinham durando.",
    tip: "Explique três situações de cansaço ou atraso usando had been + -ing.",
  },
  {
    id: "a03",
    objective: "Projetar ações em andamento e ações concluídas no futuro.",
    keyPoints: [
      "Futuro contínuo: will be + -ing — This time tomorrow I'll be flying.",
      "Futuro perfeito: will have + particípio — By 2030 I will have finished.",
      "Futuro perfeito contínuo: will have been + -ing — duração até um ponto futuro.",
      "Marcador essencial: by + tempo (by Friday, by then).",
    ],
    explanation: [
      "Esses tempos dão precisão a planos e projeções. O contínuo desenha o momento; o perfeito indica o que estará concluído antes de uma data.",
      "Eles aparecem muito em contextos profissionais: previsões, cronogramas e metas de longo prazo.",
    ],
    examples: [
      {
        en: "This time next week, I'll be presenting to the board.",
        pt: "Nesta hora, semana que vem, estarei apresentando para a diretoria.",
      },
      {
        en: "By December, we will have launched the new version.",
        pt: "Até dezembro, teremos lançado a nova versão.",
      },
      {
        en: "By then, she will have been working here for a decade.",
        pt: "Até lá, ela estará trabalhando aqui há uma década.",
      },
    ],
    vocab: [
      { en: "by + tempo", pt: "até (um prazo)" },
      { en: "this time next week", pt: "nesta hora, semana que vem" },
      { en: "on track", pt: "no caminho certo" },
      { en: "to be about to", pt: "estar prestes a" },
    ],
    practice: [
      {
        prompt: "Complete: “By next June, I ___ my master's degree.”",
        options: [
          "will finish",
          "will have finished",
          "have finished",
          "would finish",
        ],
        answer: 1,
        explanation: "Conclusão antes de um prazo futuro: will have finished.",
      },
      {
        prompt: "Complete: “Don't call at 8 — I ___ dinner then.”",
        options: ["will have", "will be having", "have", "had"],
        answer: 1,
        explanation: "Ação em andamento num momento futuro: will be having.",
      },
    ],
    takeaway: "Você descreve cronogramas e projeções com precisão.",
    tip: "Escreva três metas suas com “By…, I will have…”.",
  },
  {
    id: "a04",
    objective: "Falar do que teria acontecido se algo tivesse sido diferente.",
    keyPoints: [
      "Estrutura: If + past perfect, would have + particípio.",
      "Sem if, a inversão é possível: Had I known, I would have…",
      "Expressa arrependimento, crítica e hipótese impossível.",
      "Negativa comum: I wouldn't have done that.",
    ],
    explanation: [
      "A terceira condicional olha para o passado e imagina outro caminho. É o tempo do arrependimento e da análise pós-fato.",
      "Ela também serve para aprender: em retrospectivas, times analisam o que teria sido diferente com outras decisões.",
    ],
    examples: [
      {
        en: "If I had studied more, I would have passed.",
        pt: "Se eu tivesse estudado mais, teria passado.",
      },
      {
        en: "We wouldn't have missed the flight if we had left earlier.",
        pt: "Não teríamos perdido o voo se tivéssemos saído mais cedo.",
      },
      {
        en: "Had they known the risks, they would have acted differently.",
        pt: "Se tivessem conhecido os riscos, teriam agido diferente.",
      },
    ],
    vocab: [
      { en: "if… had… would have", pt: "se… tivesse… teria" },
      { en: "in hindsight", pt: "em retrospecto" },
      { en: "to regret", pt: "arrepender-se" },
      { en: "otherwise", pt: "caso contrário" },
    ],
    practice: [
      {
        prompt: "Complete: “If she ___ the message, she would have come.”",
        options: ["sees", "saw", "had seen", "has seen"],
        answer: 2,
        explanation: "Terceira condicional: if + past perfect.",
      },
      {
        prompt: "Complete: “Had I known about the traffic, I ___ earlier.”",
        options: ["would leave", "would have left", "had left", "left"],
        answer: 1,
        explanation:
          "Com inversão (Had I known…), a outra parte usa would have + particípio.",
      },
    ],
    takeaway: "Você analisa o passado com precisão e sem confundir os tempos.",
    tip: "Escreva três arrependimentos profissionais na terceira condicional e o que você faria diferente.",
  },
  {
    id: "a05",
    objective: "Combinar tempos para hipóteses que cruzam passado e presente.",
    keyPoints: [
      "Passado → presente: If I had studied medicine, I would be a doctor now.",
      "Presente → passado: If I were more organized, I would have sent it yesterday.",
      "A escolha depende de quando está a consequência, não a condição.",
      "Marcadores de tempo ajudam: now, today, back then.",
    ],
    explanation: [
      "As mixed conditionals existem porque causa e consequência podem estar em tempos diferentes: uma decisão antiga afetando o presente, ou um traço atual explicando um erro passado.",
      "São estruturas de nível avançado que dão enorme precisão a análises e desabafos.",
    ],
    examples: [
      {
        en: "If I had taken that job, I would be living abroad now.",
        pt: "Se eu tivesse aceitado aquele trabalho, estaria morando fora agora.",
      },
      {
        en: "If he weren't so stubborn, he would have accepted the offer.",
        pt: "Se ele não fosse tão teimoso, teria aceitado a proposta.",
      },
      {
        en: "We would be further along if we had started earlier.",
        pt: "Estaríamos mais adiantados se tivéssemos começado antes.",
      },
    ],
    vocab: [
      { en: "now / today", pt: "agora / hoje" },
      { en: "otherwise", pt: "caso contrário" },
      { en: "as a result", pt: "como resultado" },
      { en: "to be further along", pt: "estar mais adiantado" },
    ],
    practice: [
      {
        prompt:
          "Complete: “If I had learned English as a child, I ___ fluent now.”",
        options: ["would be", "would have been", "were", "am"],
        answer: 0,
        explanation:
          "A consequência é presente (now), então usamos would + be.",
      },
      {
        prompt:
          "Complete: “If she ___ more careful, she wouldn't have made that mistake.”",
        options: ["had been", "were", "is", "has been"],
        answer: 1,
        explanation:
          "Traço atual (ser cuidadosa) explicando um erro passado: if she were more careful…",
      },
    ],
    takeaway: "Você mistura tempos com lógica, não por decoreba.",
    tip: "Escreva duas mixed conditionals: uma decisão antiga que afeta seu presente e um traço seu que explicou um erro passado.",
  },
  {
    id: "a06",
    objective: "Usar a inversão para dar ênfase e impacto à frase.",
    keyPoints: [
      "Advérbio negativo no início causa inversão: Never have I seen…",
      "Também com: rarely, seldom, not only, no sooner, hardly.",
      "Not only did she arrive late, but she also forgot the file.",
      "A inversão é formal ou enfática: ótima na escrita, marcante na fala.",
    ],
    explanation: [
      "Quando um advérbio negativo abre a frase, o auxiliar vem antes do sujeito — como numa pergunta. É uma marca de domínio do idioma e dá peso ao que você diz.",
      "Use com parcimônia: uma ou duas inversões num texto causam impacto; muitas soam artificiais.",
    ],
    examples: [
      {
        en: "Never have I seen such a beautiful sunset.",
        pt: "Nunca vi um pôr do sol tão bonito.",
      },
      {
        en: "Not only did he apologize, but he also fixed the problem.",
        pt: "Ele não só se desculpou, como também resolveu o problema.",
      },
      {
        en: "Rarely do we see such dedication.",
        pt: "Raramente vemos tamanha dedicação.",
      },
    ],
    vocab: [
      { en: "never have I…", pt: "nunca eu…" },
      { en: "not only… but also", pt: "não só… mas também" },
      { en: "no sooner… than", pt: "assim que, logo que" },
      { en: "hardly… when", pt: "mal… quando" },
    ],
    practice: [
      {
        prompt: "Complete: “Never ___ such a complicated case.”",
        options: [
          "I have handled",
          "have I handled",
          "I handled",
          "did I handled",
        ],
        answer: 1,
        explanation: "Com never no início há inversão: never have I handled.",
      },
      {
        prompt:
          "Complete: “Not only ___ the deadline, but he also delivered extra work.”",
        options: ["he met", "did he meet", "he did meet", "met he"],
        answer: 1,
        explanation:
          "Not only no início pede did + sujeito + verbo base: did he meet.",
      },
    ],
    takeaway: "Você usa estruturas de ênfase que soam sofisticadas e naturais.",
    tip: "Reescreva três frases suas começando com Never ou Not only, com a inversão correta.",
  },
  {
    id: "a07",
    objective: "Destacar a informação mais importante com cleft sentences.",
    keyPoints: [
      "What I need is more time — destaca o complemento.",
      "It was Ana who called — destaca o sujeito.",
      "All I want is a break — reforça com all.",
      "The reason why… is that… — destaca a causa.",
    ],
    explanation: [
      "Cleft sentences “quebram” a frase em duas para colocar o foco exatamente onde você quer. É uma ferramenta de escrita e de fala persuasiva.",
      "Compare: “I need more time” (neutro) e “What I need is more time” (com foco). Mesmo conteúdo, efeito diferente.",
    ],
    examples: [
      {
        en: "What we need is a clear plan.",
        pt: "O que precisamos é de um plano claro.",
      },
      {
        en: "It was the delay that cost us the client.",
        pt: "Foi o atraso que nos custou o cliente.",
      },
      {
        en: "The reason I called is that we have news.",
        pt: "O motivo da minha ligação é que temos novidades.",
      },
    ],
    vocab: [
      { en: "what… is", pt: "o que… é" },
      { en: "it was… that/who", pt: "foi… que" },
      { en: "all I want", pt: "tudo o que eu quero" },
      { en: "the reason why", pt: "o motivo pelo qual" },
    ],
    practice: [
      {
        prompt: "Reescreva com foco: “I need your help.”",
        options: [
          "It is your help that I need what.",
          "What I need is your help.",
          "I need what is your help.",
          "Your help is what need I.",
        ],
        answer: 1,
        explanation: "What I need is your help destaca a informação final.",
      },
      {
        prompt: "Complete: “It was the price ___ convinced me.”",
        options: ["who", "that", "what", "which is"],
        answer: 1,
        explanation: "Em cleft com it was, usamos that (ou who para pessoas).",
      },
    ],
    takeaway:
      "Você conduz a atenção de quem lê ou ouve para o ponto que importa.",
    tip: "Pegue cinco frases simples suas e reescreva cada uma com uma cleft sentence.",
  },
  {
    id: "a08",
    objective:
      "Reconhecer e usar o subjuntivo nas estruturas formais do inglês.",
    keyPoints: [
      "Depois de suggest, recommend, insist, demand: verbo na forma base — I suggest that he be…",
      "Também comum com should: I suggest that he should be…",
      "Expressões fixas: If I were you, Were I to…, Be that as it may.",
      "É o registro do inglês formal, jurídico e corporativo.",
    ],
    explanation: [
      "O subjuntivo sobreviveu em fórmulas de recomendação e exigência. Ele mantém o verbo na forma base mesmo na terceira pessoa: that she be, that he go.",
      "No inglês americano corporativo ele é corrente; no inglês britânico a versão com should é mais frequente.",
    ],
    examples: [
      {
        en: "I suggest that he be informed immediately.",
        pt: "Sugiro que ele seja informado imediatamente.",
      },
      {
        en: "The board insisted that the deadline be extended.",
        pt: "O conselho insistiu que o prazo fosse estendido.",
      },
      {
        en: "It is essential that everyone attend the meeting.",
        pt: "É essencial que todos compareçam à reunião.",
      },
    ],
    vocab: [
      { en: "to suggest / to recommend", pt: "sugerir / recomendar" },
      { en: "to insist / to demand", pt: "insistir / exigir" },
      { en: "it is essential that", pt: "é essencial que" },
      { en: "if I were you", pt: "se eu fosse você" },
    ],
    practice: [
      {
        prompt: "Complete: “I recommend that she ___ the proposal.”",
        options: ["reviews", "review", "reviewed", "reviewing"],
        answer: 1,
        explanation:
          "No subjuntivo o verbo fica na forma base: that she review.",
      },
      {
        prompt: "Complete: “It is important that he ___ on time.”",
        options: ["is", "be", "was", "being"],
        answer: 1,
        explanation: "Estrutura formal com subjuntivo: that he be.",
      },
    ],
    takeaway:
      "Você escreve e reconhece o inglês formal de reuniões e contratos.",
    tip: "Escreva três recomendações profissionais usando “I suggest that…” com o verbo na forma base.",
  },
  {
    id: "a09",
    objective: "Deduzir o passado com must have, might have e can't have.",
    keyPoints: [
      "must have + particípio = certeza quase total: He must have missed the train.",
      "might/may have = possibilidade: She might have forgotten.",
      "can't have = impossibilidade: They can't have finished so fast.",
      "should have = crítica ou arrependimento: You should have told me.",
    ],
    explanation: [
      "Modais de dedução no passado permitem raciocinar sobre o que provavelmente aconteceu. É a linguagem do diagnóstico e da investigação.",
      "A escala vai de certeza (must) a possibilidade (might) e negação lógica (can't). Escolher o modal é escolher o grau de confiança.",
    ],
    examples: [
      {
        en: "The lights are off — they must have left.",
        pt: "As luzes estão apagadas — eles devem ter saído.",
      },
      {
        en: "She might have taken the wrong bus.",
        pt: "Ela pode ter pegado o ônibus errado.",
      },
      {
        en: "He can't have written this alone.",
        pt: "Ele não pode ter escrito isso sozinho.",
      },
    ],
    vocab: [
      { en: "must have done", pt: "deve ter feito" },
      { en: "might / may have done", pt: "pode ter feito" },
      { en: "can't have done", pt: "não pode ter feito" },
      { en: "should have done", pt: "deveria ter feito" },
    ],
    practice: [
      {
        prompt:
          "O carro dela está na garagem e as luzes acesas. O que você deduz?",
        options: [
          "She must be at home.",
          "She can't be at home.",
          "She might have gone out.",
          "She should be out.",
        ],
        answer: 0,
        explanation:
          "Evidência forte de presença: she must be at home (dedução no presente).",
      },
      {
        prompt: "Complete: “The window is broken. Someone ___ have forced it.”",
        options: ["can't", "must", "shouldn't", "needn't"],
        answer: 1,
        explanation: "Dedução com alta certeza: must have forced.",
      },
    ],
    takeaway: "Você deduz o passado com o grau de certeza adequado.",
    tip: "Observe três situações do seu dia e escreva deduções com must have, might have e can't have.",
  },
  {
    id: "a10",
    objective:
      "Usar a passiva avançada e os verbos de relato para falar com impessoalidade.",
    keyPoints: [
      "It is said that… / It is believed that… — impessoal e formal.",
      "Sujeito + passiva + infinitivo: He is believed to be abroad.",
      "Passiva com modais: The report must be submitted by Friday.",
      "Ideal para relatórios, notícias e contextos em que a fonte é incerta.",
    ],
    explanation: [
      "A passiva avançada permite atribuir informação a uma fonte genérica sem comprometer quem fala. É a gramática das notícias e dos relatórios técnicos.",
      "Essas estruturas elevam o registro do texto e evitam o “eu acho” repetitivo.",
    ],
    examples: [
      {
        en: "It is said that the company will relocate.",
        pt: "Dizem que a empresa vai se mudar.",
      },
      {
        en: "The CEO is believed to be negotiating the deal.",
        pt: "Acredita-se que o CEO esteja negociando o acordo.",
      },
      {
        en: "All applications must be submitted online.",
        pt: "Todas as candidaturas devem ser enviadas online.",
      },
    ],
    vocab: [
      { en: "it is said that", pt: "diz-se que" },
      { en: "it is believed / reported", pt: "acredita-se / é noticiado" },
      { en: "to be expected to", pt: "espera-se que" },
      { en: "to be submitted", pt: "ser enviado, submetido" },
    ],
    practice: [
      {
        prompt: "Transforme: “People say he lives abroad.” →",
        options: [
          "He is said to live abroad.",
          "He says to live abroad.",
          "It says he lives abroad.",
          "He is saying abroad.",
        ],
        answer: 0,
        explanation: "Passiva de relato: He is said to + infinitivo.",
      },
      {
        prompt: "Complete: “The results ___ be published next week.”",
        options: ["is expected to", "are expected to", "expect to", "expected"],
        answer: 1,
        explanation: "results é plural: are expected to be published.",
      },
    ],
    takeaway: "Você escreve com impessoalidade e tom profissional.",
    tip: "Reescreva cinco frases de opinião sua em estruturas impessoais com it is said / believed.",
  },
]
