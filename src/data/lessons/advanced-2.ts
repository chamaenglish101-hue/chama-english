import type { LessonContent } from "./types.ts"

export const ADVANCED_2: LessonContent[] = [
  {
    id: "a11",
    objective:
      "Falar de serviços contratados com o causativo have / get something done.",
    keyPoints: [
      "Estrutura: have + objeto + particípio — I had my hair cut.",
      "get é mais informal: I got my car washed.",
      "O foco é o serviço, não quem executou.",
      "Negativa e pergunta usam o auxiliar do have: Did you have it fixed?",
    ],
    explanation: [
      "O causativo existe porque existe uma situação típica: você não fez, você mandou fazer. O inglês marca isso com o particípio depois do objeto.",
      "Cuidado para não dizer “I cut my hair” quando foi o barbeiro: essa frase significa que você mesmo cortou.",
    ],
    examples: [
      {
        en: "I had my hair cut yesterday.",
        pt: "Cortei o cabelo ontem (no salão).",
      },
      {
        en: "We need to get the air conditioning fixed.",
        pt: "Precisamos mandar consertar o ar-condicionado.",
      },
      {
        en: "She had her laptop repaired at the mall.",
        pt: "Ela mandou consertar o notebook no shopping.",
      },
    ],
    vocab: [
      { en: "to have something done", pt: "mandar fazer algo" },
      { en: "to get something done", pt: "mandar fazer (informal)" },
      { en: "to have something checked", pt: "mandar verificar algo" },
      { en: "service provider", pt: "prestador de serviço" },
    ],
    practice: [
      {
        prompt: "Você levou o carro para lavar. Como dizer?",
        options: [
          "I washed my car at the shop.",
          "I had my car washed.",
          "I have wash my car.",
          "My car washed me.",
        ],
        answer: 1,
        explanation:
          "Causativo: I had my car washed (eu mandei lavar). “I washed my car” significa que você mesmo lavou.",
      },
      {
        prompt: "Complete: “We got the documents ___ by a lawyer.”",
        options: ["review", "reviewed", "reviewing", "to review"],
        answer: 1,
        explanation: "No causativo usamos o particípio: reviewed.",
      },
    ],
    takeaway: "Você fala de serviços contratados com a estrutura correta.",
    tip: "Liste cinco serviços que você já mandou fazer e diga cada um com have/get something done.",
  },
  {
    id: "a12",
    objective: "Enxugar orações relativas para escrever com densidade.",
    keyPoints: [
      "Ativa: The man who is talking to Ana → The man talking to Ana.",
      "Passiva: The report which was sent → The report sent.",
      "Também com to-infinitive: the first person to arrive.",
      "Só é possível quando o pronome relativo é sujeito da oração.",
    ],
    explanation: [
      "Reduzir uma oração relativa elimina palavras sem perder sentido. É o que transforma um texto longo em um texto elegante e denso.",
      "Atenção: se o pronome for objeto, a redução não funciona. “The book which I bought” não vira “the book bought”.",
    ],
    examples: [
      {
        en: "The woman standing by the door is my manager.",
        pt: "A mulher que está em pé na porta é minha gestora.",
      },
      {
        en: "The documents sent yesterday need a signature.",
        pt: "Os documentos enviados ontem precisam de assinatura.",
      },
      {
        en: "She was the first person to answer.",
        pt: "Ela foi a primeira pessoa a responder.",
      },
    ],
    vocab: [
      { en: "reduced clause", pt: "oração reduzida" },
      { en: "the first to…", pt: "o primeiro a…" },
      { en: "involved / concerned", pt: "envolvido / em questão" },
      { en: "draft", pt: "minuta, rascunho" },
    ],
    practice: [
      {
        prompt: "Reduza: “The people who are waiting outside are clients.”",
        options: [
          "The people waiting outside are clients.",
          "The people wait outside are clients.",
          "The people to wait outside are clients.",
          "The people are waiting outside are clients.",
        ],
        answer: 0,
        explanation:
          "Oração ativa com being/who is reduz para o gerúndio: people waiting outside.",
      },
      {
        prompt: "Reduza: “The e-mail which was forwarded to me had an error.”",
        options: [
          "The e-mail forwarding had an error.",
          "The e-mail forwarded to me had an error.",
          "The e-mail was forwarded had an error.",
          "The e-mail to forward had an error.",
        ],
        answer: 1,
        explanation:
          "Passiva (which was forwarded) reduz para o particípio: the e-mail forwarded to me.",
      },
    ],
    takeaway: "Você escreve frases densas e profissionais sem perder clareza.",
    tip: "Pegue três frases suas com who/which e reduza cada uma.",
  },
  {
    id: "a13",
    objective: "Ligar ideias em uma única frase com participle clauses.",
    keyPoints: [
      "Presente: Walking home, I saw an old friend.",
      "Perfeita: Having finished the report, she left.",
      "Passiva: Having been warned, they changed the plan.",
      "Negativa: Not knowing the answer, I stayed quiet.",
    ],
    explanation: [
      "Participle clauses substituem orações com because, when ou after, deixando o texto mais fluido e formal. São muito comuns na escrita jornalística e acadêmica.",
      "A regra de ouro: o sujeito da oração reduzida precisa ser o mesmo da principal — caso contrário, cria-se uma frase confusa (dangling participle).",
    ],
    examples: [
      {
        en: "Feeling tired, I decided to stop working.",
        pt: "Sentindo-me cansado, decidi parar de trabalhar.",
      },
      {
        en: "Having read the contract, he signed it.",
        pt: "Tendo lido o contrato, ele assinou.",
      },
      {
        en: "Not having any experience, she found the job hard.",
        pt: "Não tendo experiência, ela achou o trabalho difícil.",
      },
    ],
    vocab: [
      { en: "having done", pt: "tendo feito" },
      { en: "not knowing", pt: "não sabendo" },
      { en: "having been told", pt: "tendo sido informado" },
      { en: "consequently", pt: "consequentemente" },
    ],
    practice: [
      {
        prompt: "Una: “She finished her work. She went home.”",
        options: [
          "Finishing her work, she went home.",
          "Finished her work, she went home.",
          "She finishing her work went home.",
          "Having finish her work, she went home.",
        ],
        answer: 0,
        explanation:
          "Ação simultânea ou imediatamente anterior: Finishing her work, she went home.",
      },
      {
        prompt: "Complete: “___ been warned, they changed the plan.”",
        options: ["Having", "Have", "Has", "To have"],
        answer: 0,
        explanation: "Participle clause passiva perfeita: Having been warned.",
      },
    ],
    takeaway: "Você conecta ideias com elegância e registro alto.",
    tip: "Reescreva cinco frases suas com because/when, transformando-as em participle clauses.",
  },
  {
    id: "a14",
    objective:
      "Transformar verbos em substantivos para ganhar tom acadêmico e corporativo.",
    keyPoints: [
      "to decide → the decision; to fail → the failure; to analyze → the analysis.",
      "Frases nominais são mais curtas e impessoais: The implementation of the policy…",
      "Evite empilhar substantivos: prefira clareza a densidade excessiva.",
      "Muito usado em relatórios, resumos e abstracts.",
    ],
    explanation: [
      "Nominalização é o que dá ao texto um tom formal: em vez de “we decided to expand”, escreve-se “our decision to expand”. A informação fica mais compacta e menos pessoal.",
      "O excesso, porém, torna o texto pesado. Use a técnica em resumos e relatórios, mantendo verbos claros no corpo do texto.",
    ],
    examples: [
      {
        en: "The implementation of the new system took three months.",
        pt: "A implementação do novo sistema levou três meses.",
      },
      {
        en: "Our failure to respond cost us the contract.",
        pt: "Nossa falha em responder nos custou o contrato.",
      },
      {
        en: "There was a significant increase in sales.",
        pt: "Houve um aumento significativo nas vendas.",
      },
    ],
    vocab: [
      { en: "implementation", pt: "implementação" },
      { en: "improvement", pt: "melhoria" },
      { en: "reduction / increase", pt: "redução / aumento" },
      { en: "assessment", pt: "avaliação" },
    ],
    practice: [
      {
        prompt: "Qual versão é mais formal?",
        options: [
          "We improved the process and it got faster.",
          "The improvement of the process led to higher speed.",
          "Process better, faster now.",
          "We made the process fast.",
        ],
        answer: 1,
        explanation:
          "A nominalização (“the improvement of the process”) dá tom formal e impessoal.",
      },
      {
        prompt: "Transforme “They assessed the risks” em forma nominal.",
        options: [
          "The assessment of the risks",
          "The assess of risks",
          "The risks assessing",
          "Assessing risk they",
        ],
        answer: 0,
        explanation: "to assess → the assessment: the assessment of the risks.",
      },
    ],
    takeaway: "Você escreve relatórios com o tom que o contexto exige.",
    tip: "Rescreva um parágrafo seu trocando três verbos por substantivos equivalentes.",
  },
  {
    id: "a15",
    objective: "Suavizar afirmações e proteger seu argumento com hedging.",
    keyPoints: [
      "Tend to, appear to, seem to — em vez de afirmar categoricamente.",
      "May, might, could — possibilidade em vez de certeza.",
      "Arguably, generally, in most cases — delimitam o alcance.",
      "It could be argued that… — fórmula clássica de escrita acadêmica.",
    ],
    explanation: [
      "Hedging é a arte de dizer algo sem se comprometer além do que os dados permitem. É indispensável em textos acadêmicos, relatórios e comunicação diplomática.",
      "Além de proteger, o hedging soa mais maduro: quem afirma tudo com certeza absoluta perde credibilidade.",
    ],
    examples: [
      {
        en: "The results suggest that the strategy may be working.",
        pt: "Os resultados sugerem que a estratégia pode estar funcionando.",
      },
      {
        en: "It could be argued that the deadline is too tight.",
        pt: "Pode-se argumentar que o prazo é apertado demais.",
      },
      {
        en: "Opinions tend to vary on this topic.",
        pt: "As opiniões tendem a variar sobre este tema.",
      },
    ],
    vocab: [
      { en: "to tend to", pt: "tender a" },
      { en: "it appears / it seems", pt: "parece que" },
      { en: "arguably", pt: "possivelmente, pode-se dizer" },
      { en: "to suggest", pt: "sugerir (em textos acadêmicos)" },
    ],
    practice: [
      {
        prompt: "Qual frase é um exemplo de hedging?",
        options: [
          "This proves the strategy is wrong.",
          "The data suggests the strategy may need review.",
          "Everyone knows this is bad.",
          "It is definitely a failure.",
        ],
        answer: 1,
        explanation:
          "“suggests” e “may” suavizam a afirmação sem perder o conteúdo.",
      },
      {
        prompt: "Reescreva com hedge: “The deadline is too tight.”",
        options: [
          "The deadline might be a bit tight.",
          "The deadline is very tight, no doubt.",
          "The deadline cannot be met, period.",
          "The deadline is tightest.",
        ],
        answer: 0,
        explanation: "“might be a bit” reduz o comprometimento da afirmação.",
      },
    ],
    takeaway: "Você argumenta com precisão e credibilidade.",
    tip: "Reescreva cinco afirmações categóricas suas com recursos de hedging.",
  },
  {
    id: "a16",
    objective:
      "Expressar desejo, arrependimento e preferência com wish, if only e would rather.",
    keyPoints: [
      "wish + passado simples = desejo no presente: I wish I had more time.",
      "wish + past perfect = arrependimento: I wish I had studied harder.",
      "would rather + verbo base = preferência: I'd rather stay home.",
      "would rather + passado simples = preferência sobre outra pessoa: I'd rather you didn't smoke.",
    ],
    explanation: [
      "Essas estruturas compartilham a lógica do “irreal”: depois delas, o passado simples fala do presente e o past perfect fala do passado.",
      "If only acrescenta ênfase emocional ao desejo: “If only I had known!”.",
    ],
    examples: [
      { en: "I wish I spoke Italian.", pt: "Queria falar italiano." },
      {
        en: "If only I had taken that opportunity.",
        pt: "Se eu tivesse aproveitado aquela oportunidade.",
      },
      {
        en: "I'd rather you didn't mention this to anyone.",
        pt: "Preferia que você não mencionasse isso a ninguém.",
      },
    ],
    vocab: [
      { en: "I wish…", pt: "queria, gostaria que" },
      { en: "if only…", pt: "se ao menos…" },
      { en: "I'd rather…", pt: "prefiro, preferiria" },
      { en: "I'd sooner", pt: "preferiria (mais formal)" },
    ],
    practice: [
      {
        prompt: "Complete: “I wish I ___ more free time.”",
        options: ["have", "had", "will have", "having"],
        answer: 1,
        explanation: "Desejo sobre o presente: wish + passado simples (had).",
      },
      {
        prompt: "Complete: “I'd rather you ___ tell him yet.”",
        options: ["don't", "didn't", "won't", "not"],
        answer: 1,
        explanation:
          "would rather + passado simples para preferência sobre a ação de outra pessoa.",
      },
    ],
    takeaway: "Você expressa nuances de desejo e preferência com precisão.",
    tip: "Escreva três desejos (wish), um arrependimento (past perfect) e uma preferência (would rather).",
  },
  {
    id: "a17",
    objective:
      "Expressar condições específicas com unless, provided that e as long as.",
    keyPoints: [
      "unless = if not: I won't go unless you come.",
      "provided that / providing = desde que (condição formal).",
      "as long as = desde que (condição prática).",
      "on condition that = sob a condição de (contratos).",
    ],
    explanation: [
      "Esses conectores dão precisão à condição e mudam o registro: provided that e on condition that são típicos de contratos e negociações; as long as é o mais comum na fala.",
      "A regra do if vale para todos: nada de will depois do conector.",
    ],
    examples: [
      {
        en: "We'll launch next week unless we find a bug.",
        pt: "Vamos lançar na próxima semana, a menos que apareça um bug.",
      },
      {
        en: "You can use the car as long as you fill the tank.",
        pt: "Você pode usar o carro desde que encha o tanque.",
      },
      {
        en: "The offer is valid provided that payment is made in 30 days.",
        pt: "A oferta é válida desde que o pagamento seja feito em 30 dias.",
      },
    ],
    vocab: [
      { en: "unless", pt: "a menos que" },
      { en: "provided that", pt: "desde que (formal)" },
      { en: "as long as", pt: "desde que (prático)" },
      { en: "on condition that", pt: "sob a condição de" },
    ],
    practice: [
      {
        prompt: "Complete: “I won't sign it ___ they change the terms.”",
        options: ["unless", "if", "as long as", "provided"],
        answer: 0,
        explanation: "unless = se não / a menos que.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "You can go as long as you will be back by 10.",
          "You can go as long as you are back by 10.",
          "You can go unless you are back by 10.",
          "You can go provided you will be back by 10.",
        ],
        answer: 1,
        explanation:
          "Depois do conector usamos presente, não will: as long as you are back by 10.",
      },
    ],
    takeaway: "Você negocia condições como um profissional.",
    tip: "Escreva três condições para um acordo usando unless, as long as e provided that.",
  },
  {
    id: "a18",
    objective: "Responder sem repetir tudo, com elipse e substituição.",
    keyPoints: [
      "So do I / Neither did she — concordância econômica.",
      "Elipse do auxiliar: I can (respondendo a “Can you swim?”).",
      "Substituição com one/ones: the red one, the cheaper ones.",
      "Avoid repetition: “I'd love to” em vez de “I'd love to go there”.",
    ],
    explanation: [
      "A elipse evita repetições e faz a fala soar natural. Nativos raramente repetem o verbo inteiro numa resposta.",
      "So e neither (ou nor) com inversão servem para dizer “eu também” e “eu também não” de forma elegante.",
    ],
    examples: [
      { en: "I love coffee. — So do I.", pt: "Adoro café. — Eu também." },
      {
        en: "I've never been there. — Neither have I.",
        pt: "Nunca fui lá. — Eu também não.",
      },
      {
        en: "Which one do you want? — The small one, please.",
        pt: "Qual você quer? — O pequeno, por favor.",
      },
    ],
    vocab: [
      { en: "so do I / so am I", pt: "eu também" },
      { en: "neither / nor do I", pt: "eu também não" },
      { en: "the one / the ones", pt: "o / os (substituindo substantivo)" },
      { en: "I'd love to", pt: "adoraria (sem repetir o verbo)" },
    ],
    practice: [
      {
        prompt: "“I can't drive.” Como concordar?",
        options: [
          "So can I.",
          "Neither can I.",
          "So can't I.",
          "Neither do I.",
        ],
        answer: 1,
        explanation:
          "Concordância negativa usa neither + inversão: neither can I.",
      },
      {
        prompt: "Complete: “Which jacket? — The black ___.”",
        options: ["one", "ones", "it", "jacket it"],
        answer: 0,
        explanation:
          "Substituímos um substantivo singular por one: the black one.",
      },
    ],
    takeaway: "Você responde de forma econômica e natural, sem repetir.",
    tip: "Pratique cinco respostas curtas: so do I, neither have I, I'd love to, the big one.",
  },
  {
    id: "a19",
    objective: "Reorganizar a frase para guiar a atenção de quem lê.",
    keyPoints: [
      "Fronting: colocar o elemento importante no início — This question, we must discuss.",
      "Muito usado com adverbial de lugar: At the top of the list is the budget.",
      "Combina com inversão quando o início é negativo ou enfático.",
      "Cuidado: o fronting exige coesão com a frase anterior.",
    ],
    explanation: [
      "Fronting é mover um elemento para a posição inicial para criar foco e ligar ideias. É uma ferramenta de coesão textual, típica da escrita formal.",
      "Ela também ajuda a variar o ritmo do texto, evitando que todas as frases comecem com sujeito.",
    ],
    examples: [
      {
        en: "This issue, we will address next week.",
        pt: "Esta questão, trataremos na semana que vem.",
      },
      {
        en: "At the top of the agenda is the budget.",
        pt: "No topo da pauta está o orçamento.",
      },
      {
        en: "Such was the impact that sales doubled.",
        pt: "Tamanho foi o impacto que as vendas dobraram.",
      },
    ],
    vocab: [
      { en: "fronting", pt: "deslocamento para o início" },
      { en: "at the top of the agenda", pt: "no topo da pauta" },
      { en: "such was… that", pt: "tamanho foi… que" },
      { en: "to address an issue", pt: "tratar uma questão" },
    ],
    practice: [
      {
        prompt: "Qual frase usa fronting?",
        options: [
          "We will discuss the budget next week.",
          "The budget, we will discuss next week.",
          "Next week we will discuss the budget, ok?",
          "Discussing the budget is next week.",
        ],
        answer: 1,
        explanation:
          "O objeto foi movido para o início para ganhar foco: “The budget, we will discuss…”.",
      },
      {
        prompt: "Complete: “Such ___ the demand that we sold out.”",
        options: ["was", "is", "were", "be"],
        answer: 0,
        explanation:
          "Such was the demand that… — estrutura de ênfase no passado.",
      },
    ],
    takeaway: "Você controla o foco da frase e escreve com coesão.",
    tip: "Pegue três frases do seu último relatório e reescreva com fronting.",
  },
  {
    id: "a20",
    objective: "Fazer perguntas educadas e embutidas em contextos formais.",
    keyPoints: [
      "Pergunta embutida mantém a ordem afirmativa: Could you tell me where the station is?",
      "Evite o do/does/did na embutida: “Do you know where he works?” (não works com -s… cuidado).",
      "Fórmulas: I was wondering if… / Would you mind telling me…?",
      "Suavize com: I'd like to know, may I ask.",
    ],
    explanation: [
      "Na pergunta indireta, a frase interrogativa vira uma oração subordinada e por isso volta à ordem normal (sujeito + verbo), sem auxiliar de pergunta.",
      "Esse detalhe separa um inglês intermediário de um avançado: “Where is the station?” é correto isolado, mas vira “Could you tell me where the station is?” dentro da pergunta educada.",
    ],
    examples: [
      {
        en: "Could you tell me where the station is?",
        pt: "Você poderia me dizer onde fica a estação?",
      },
      {
        en: "Do you know when the meeting starts?",
        pt: "Você sabe quando começa a reunião?",
      },
      {
        en: "I was wondering if you could help me.",
        pt: "Eu queria saber se você poderia me ajudar.",
      },
    ],
    vocab: [
      { en: "could you tell me…", pt: "você poderia me dizer…" },
      { en: "I was wondering…", pt: "eu queria saber…" },
      { en: "would you mind…", pt: "você se importaria…" },
      { en: "may I ask…", pt: "posso perguntar…" },
    ],
    practice: [
      {
        prompt: "Qual frase está correta?",
        options: [
          "Could you tell me where is the bathroom?",
          "Could you tell me where the bathroom is?",
          "Could you tell me where does the bathroom be?",
          "Could you tell me where the bathroom be?",
        ],
        answer: 1,
        explanation:
          "Na pergunta embutida a ordem volta ao normal: where the bathroom is.",
      },
      {
        prompt: "Qual é a forma mais educada de pedir ajuda?",
        options: [
          "Help me.",
          "I was wondering if you could help me.",
          "You help me now?",
          "Can you help? Quick.",
        ],
        answer: 1,
        explanation:
          "I was wondering if… é a fórmula mais diplomática de pedido.",
      },
    ],
    takeaway: "Você faz perguntas sofisticadas com a ordem correta.",
    tip: "Transforme cinco perguntas diretas suas em perguntas embutidas educadas.",
  },
]
