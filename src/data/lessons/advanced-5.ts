import type { LessonContent } from "./types.ts"

export const ADVANCED_5: LessonContent[] = [
  {
    id: "a51",
    objective:
      "Ler textos opinativos identificando viés, intenção e o que ficou de fora.",
    keyPoints: [
      "Todo texto tem ponto de vista: procure quem escreve, para quem e com qual interesse.",
      "Adjetivos carregados (“radical”, “cauteloso”) entregam a posição antes dos fatos.",
      "Omissão também é argumento: pergunte o que a peça não menciona.",
      "Compare a mesma notícia em duas fontes: a diferença revela o enquadramento.",
    ],
    explanation: [
      "Ler criticamente é separar fato de interpretação. Notícias descrevem eventos, mas escolhem ordem, destaque e vocabulário — e é aí que mora o viés.",
      "Frases com “reportedly”, “sources say” ou “critics argue” distribuem responsabilidade sem assumir. Identificar quem fala ajuda a pesar a informação.",
    ],
    examples: [
      {
        en: "The plan was described as ambitious by supporters and reckless by critics.",
        pt: "O plano foi descrito como ambicioso pelos apoiadores e temerário pelos críticos.",
        note: "Os dois rótulos falam do mesmo plano: o enquadramento muda tudo.",
      },
      {
        en: "The report fails to mention the costs of the program.",
        pt: "O relatório não menciona os custos do programa.",
      },
      {
        en: "Sources close to the negotiations say the deal is nearly done.",
        pt: "Fontes próximas da negociação dizem que o acordo está quase fechado.",
      },
    ],
    vocab: [
      { en: "bias", pt: "viés" },
      { en: "framing", pt: "enquadramento" },
      { en: "to downplay", pt: "minimizar" },
      { en: "unsubstantiated", pt: "sem comprovação" },
    ],
    practice: [
      {
        prompt: "Qual expressão sinaliza que a informação não foi confirmada?",
        options: [
          "according to official data",
          "reportedly",
          "the ministry confirmed",
          "documents show",
        ],
        answer: 1,
        explanation:
          "“Reportedly” marca informação atribuída a terceiros, sem confirmação direta.",
      },
      {
        prompt: "O que significa “to downplay a risk”?",
        options: [
          "exagerar um risco",
          "minimizar um risco",
          "ignorar uma reunião",
          "medir um risco",
        ],
        answer: 1,
        explanation: "downplay = apresentar como menos grave do que é.",
      },
    ],
    takeaway:
      "Você lê opinativo sabendo onde termina o fato e começa a escolha de quem escreve.",
    tip: "Escolha uma notícia internacional e circule todos os adjetivos: eles mostram a linha editorial.",
  },
  {
    id: "a52",
    objective:
      "Fazer anotações úteis durante palestras em inglês sem travar na escrita.",
    keyPoints: [
      "Anote palavras-chave, não frases completas: o cérebro não escreve e escuta ao mesmo tempo.",
      "Sinais de estrutura (“first”, “on the other hand”, “to sum up”) marcam onde o conteúdo vai.",
      "Crie abreviações pessoais: w/ (with), b/c (because), → (leads to).",
      "Deixe uma margem para dúvidas e volte nelas com a gravação.",
    ],
    explanation: [
      "A dificuldade não é a velocidade do inglês, e sim tentar registrar tudo. Quem anota apenas os marcadores de estrutura consegue reconstruir o raciocínio depois.",
      "Perguntas do palestrante (“Why does this matter?”) anunciam a tese — costumam virar sua próxima linha de anotação.",
    ],
    examples: [
      {
        en: "First, I'll cover the context; then the data; and finally the recommendations.",
        pt: "Primeiro vou cobrir o contexto; depois os dados; e por fim as recomendações.",
        note: "Esse mapa inicial vale mais que dez frases soltas.",
      },
      {
        en: "Let me pause here — this is the key takeaway.",
        pt: "Deixe-me pausar aqui — esta é a conclusão principal.",
      },
      {
        en: "Moving on to the second point.",
        pt: "Passando para o segundo ponto.",
      },
    ],
    vocab: [
      { en: "takeaway", pt: "conclusão principal" },
      { en: "to outline", pt: "apresentar as linhas gerais" },
      { en: "handout", pt: "material distribuído" },
      { en: "Q&A session", pt: "sessão de perguntas" },
    ],
    practice: [
      {
        prompt:
          "Por que anotar frases completas atrapalha em palestras em inglês?",
        options: [
          "porque ninguém lê depois",
          "porque escrever e escutar competem pela atenção",
          "porque o inglês falado é sempre mais rápido que o português",
          "porque a palestra tem material próprio",
        ],
        answer: 1,
        explanation:
          "A atenção dividida faz você perder o fio do raciocínio — anote só as palavras-chave.",
      },
      {
        prompt: "O que “to outline” significa no início de uma palestra?",
        options: [
          "resumir o final",
          "apresentar as linhas gerais",
          "pedir silêncio",
          "repetir a pergunta",
        ],
        answer: 1,
        explanation: "outline = mostrar o mapa do que será apresentado.",
      },
    ],
    takeaway:
      "Suas anotações viram um mapa da palestra, não uma transcrição incompleta.",
    tip: "Na próxima palestra, anote apenas conectores e números — depois reconstrua o resto de memória.",
  },
  {
    id: "a53",
    objective:
      "Acompanhar podcasts e palestras longas em inglês mantendo a concentração.",
    keyPoints: [
      "Ouça em blocos de 5 minutos com pausa: fadiga auditiva derruba a compreensão.",
      "Velocidade 0,9x ajuda no treino; depois volte a 1x no mesmo trecho.",
      "Aceite perder frases: retomar o fio é a habilidade, não ouvir 100%.",
      "Podcasts de entrevista treinam turnos de fala reais melhor que áudios roteirizados.",
    ],
    explanation: [
      "Compreensão de longa duração é resistência, não vocabulário. Ouvir 40 minutos cansado rende menos que 10 minutos atento e repetido.",
      "Anote a minutagem de cada trecho difícil e volte nele com legenda ou transcrição depois — o mesmo trecho ouvido três vezes consolida muito mais.",
    ],
    examples: [
      {
        en: "Where were we? Ah yes, the pricing model.",
        pt: "Onde estávamos? Ah sim, o modelo de precificação.",
      },
      {
        en: "Sorry, could you say that again a bit slower?",
        pt: "Desculpe, pode repetir um pouco mais devagar?",
      },
      {
        en: "Let's park that and come back to it.",
        pt: "Vamos deixar isso de lado e voltar depois.",
      },
    ],
    vocab: [
      { en: "to keep track", pt: "acompanhar" },
      { en: "tangent", pt: "digressão" },
      { en: "to rewind", pt: "voltar a gravação" },
      { en: "gist", pt: "ideia geral" },
    ],
    practice: [
      {
        prompt: "Qual estratégia melhora a compreensão de áudios longos?",
        options: [
          "ouvir tudo de uma vez, sem pausa",
          "ouvir em blocos curtos e revisar os trechos difíceis",
          "usar legenda em português o tempo todo",
          "aumentar a velocidade para 1,5x",
        ],
        answer: 1,
        explanation:
          "Blocos curtos com revisão combatem a fadiga e consolidam o que ficou difícil.",
      },
      {
        prompt: "O que significa “let's park that”?",
        options: [
          "vamos estacionar",
          "vamos deixar esse assunto para depois",
          "vamos acelerar",
          "vamos encerrar a reunião",
        ],
        answer: 1,
        explanation:
          "“Park that” = deixar o tema guardado para retomar adiante.",
      },
    ],
    takeaway:
      "Você acompanha áudio longo pelo fio da conversa, tolerando perder detalhes.",
    tip: "Escolha um podcast de 20 minutos e ouça o mesmo episódio três dias seguidos: a terceira vez parece outro áudio.",
  },
  {
    id: "a54",
    objective:
      "Entender sotaques diferentes do inglês e parar de depender de um único modelo.",
    keyPoints: [
      "Sotaque britânico, americano, australiano e indiano divergem em ritmo e vogais.",
      "O que mais atrapalha não é a pronúncia, é a velocidade e as reduções locais.",
      "Exposição variada treina o ouvido: alterne fontes de países diferentes.",
      "Sotaque não é erro: você não precisa imitar, só entender.",
    ],
    explanation: [
      "Cada variedade tem seu ritmo. O inglês britânico costuma reduzir sílabas finais; o americano, a vogal de palavras como “water”; o indiano mantém sílabas mais completas e o ritmo mais regular.",
      "Se você só ouve um sotaque, o primeiro contato com outro parece “inglês errado”. Ouvido treinado entende os dois.",
    ],
    examples: [
      {
        en: "I'm gonna have a bit of a lie-in tomorrow.",
        pt: "Vou dormir até mais tarde amanhã. (inglês britânico)",
        note: "lie-in = acordar mais tarde de propósito.",
      },
      {
        en: "We'll grab a bite after the meeting.",
        pt: "Vamos comer algo depois da reunião. (inglês americano)",
      },
      {
        en: "Please do the needful and revert.",
        pt: "Faça o necessário e retorne. (inglês indiano)",
        note: "expressão comum na Índia, pouco usada em outros lugares.",
      },
    ],
    vocab: [
      { en: "accent", pt: "sotaque" },
      { en: "dialect", pt: "dialeto" },
      { en: "to catch", pt: "conseguir ouvir/entender" },
      { en: "colloquial", pt: "coloquial" },
    ],
    practice: [
      {
        prompt: "O que significa “I'm gonna have a lie-in”?",
        options: [
          "vou mentir sobre algo",
          "vou dormir até mais tarde",
          "vou deitar no chão",
          "vou entrar em uma fila",
        ],
        answer: 1,
        explanation:
          "lie-in é a manhã em que se dorme além do normal, uso típico britânico.",
      },
      {
        prompt:
          "Qual é a melhor forma de treinar ouvido para sotaques variados?",
        options: [
          "ouvir sempre o mesmo narrador",
          "alternar fontes de países diferentes",
          "estudar apenas transcrições escritas",
          "memorizar listas de palavras",
        ],
        answer: 1,
        explanation:
          "Variar a origem do áudio amplia seu repertório sonoro do inglês.",
      },
    ],
    takeaway:
      "Você entende inglês de vários lugares sem achar que algum deles está errado.",
    tip: "Ouça a mesma notícia na BBC, na NPR e na ABC australiana no mesmo dia.",
  },
  {
    id: "a55",
    objective:
      "Reconhecer ligações e reduções da fala conectada para entender inglês natural.",
    keyPoints: [
      "Consoante final + vogal inicial se ligam: “turn it off” soa “tur-ni-toff”.",
      "Reduções fixas: going to → gonna, want to → wanna, did you → didja.",
      "“Of” e “have” viram /əv/; “to” vira /tə/ antes de consoante.",
      "A fala conectada não é preguiça: é o padrão do inglês falado.",
    ],
    explanation: [
      "Ninguém fala palavra por palavra. Quando o nativo diz “what do you want to do?”, o ouvido ouve algo como “whaddya wanna do”. Entender a regra evita a sensação de estar perdido.",
      "Praticar ligações melhora também sua pronúncia: você deixa de soar “picotado” e ganha fluidez.",
    ],
    examples: [
      {
        en: "Whaddya wanna do tonight?",
        pt: "O que você quer fazer hoje à noite?",
        note: "what do you want to → whaddya wanna",
      },
      {
        en: "I should've called you earlier.",
        pt: "Eu deveria ter te ligado mais cedo.",
      },
      {
        en: "Turn it off before you leave.",
        pt: "Desligue isso antes de sair.",
      },
    ],
    vocab: [
      { en: "connected speech", pt: "fala conectada" },
      { en: "to link", pt: "ligar sons" },
      { en: "reduction", pt: "redução" },
      { en: "fluency", pt: "fluência" },
    ],
    practice: [
      {
        prompt: "Como a fala natural costuma realizar “going to”?",
        options: ["go to", "gonna", "going at", "gone to"],
        answer: 1,
        explanation:
          "“Gonna” é a redução padrão de “going to” no inglês falado informal.",
      },
      {
        prompt: "Em “turn it off”, por que parece existir um /n/ a mais?",
        options: [
          "porque a frase tem erro de pronúncia",
          "porque a consoante final se liga à vogal seguinte",
          "porque “it” é uma palavra tônica",
          "porque o inglês não pronuncia o “r”",
        ],
        answer: 1,
        explanation:
          "A ligação consoante-vogal faz “turn it” soar como uma palavra só.",
      },
    ],
    takeaway: "Você passou a ouvir blocos de som, não palavras isoladas.",
    tip: "Pegue uma frase de série e diga em voz alta ligando tudo, como se fosse uma palavra longa.",
  },
  {
    id: "a56",
    objective:
      "Usar ritmo e acento tônico para soar natural e ser entendido em inglês.",
    keyPoints: [
      "O inglês é ritmado por acentos: palavras de conteúdo são fortes, as funcionais são fracas.",
      "Acento errado atrapalha mais a compreensão que vogal errada.",
      "Substantivos de duas sílabas acentuam a primeira; verbos, a segunda (REcord / reCORD).",
      "Fale em blocos de pensamento, com pausa, não palavra por palavra.",
    ],
    explanation: [
      "O português distribui as sílabas quase igualmente; o inglês comprime o que não é essencial. “I would have told you” cabe em três batidas.",
      "Se você acentua tudo, o ouvinte perde a hierarquia da informação e entende menos — mesmo com sons corretos.",
    ],
    examples: [
      {
        en: "I would've TOLD you if you had ASKED.",
        pt: "Eu teria te contado se você tivesse perguntado.",
        note: "As maiúsculas marcam as sílabas fortes.",
      },
      {
        en: "She's a REcord holder, and they reCORD everything.",
        pt: "Ela é detentora de recorde, e eles gravam tudo.",
      },
      {
        en: "It's not about the MONEY, it's about the TIME.",
        pt: "Não é sobre o dinheiro, é sobre o tempo.",
      },
    ],
    vocab: [
      { en: "stress", pt: "acento tônico" },
      { en: "rhythm", pt: "ritmo" },
      { en: "content word", pt: "palavra de conteúdo" },
      { en: "to emphasize", pt: "enfatizar" },
    ],
    practice: [
      {
        prompt: "Qual palavra costuma receber o acento em uma frase?",
        options: [
          "o artigo",
          "a preposição",
          "a palavra de conteúdo",
          "o auxiliar",
        ],
        answer: 2,
        explanation:
          "Substantivos, verbos, adjetivos e advérbios carregam o acento; o resto se comprime.",
      },
      {
        prompt: "Em que a acentuação muda o sentido de “record”?",
        options: [
          "REcord = substantivo, reCORD = verbo",
          "REcord = verbo, reCORD = substantivo",
          "não muda nada",
          "muda apenas a escrita",
        ],
        answer: 0,
        explanation: "Substantivo acentua a primeira sílaba; verbo, a segunda.",
      },
    ],
    takeaway:
      "Você marca as palavras importantes e comprime o resto, como faz um nativo.",
    tip: "Leia um parágrafo marcando só as palavras fortes e diga a frase com pausas entre blocos.",
  },
  {
    id: "a57",
    objective:
      "Usar entonação para expressar emoção, dúvida e intenção em inglês.",
    keyPoints: [
      "Tom descendente fecha afirmações; ascendente indica dúvida ou continuação.",
      "Ascendente em pergunta de sim/não; descendente em pergunta com “wh-”.",
      "A mesma frase muda de sentido com entonação: “Really?” pode ser surpresa ou ironia.",
      "Entonação é emoção: monótono soa frio mesmo com gramática perfeita.",
    ],
    explanation: [
      "Nativos usam a curva melódica para dizer o que sentem sem trocar palavras. Sem isso, um elogio pode soar irônico e um pedido, agressivo.",
      "Em reuniões, tom ascendente mantém a porta aberta para a outra pessoa; descendente encerra o assunto.",
    ],
    examples: [
      {
        en: "Are you coming with us? ↗",
        pt: "Você vem com a gente?",
        note: "pergunta de sim/não: curva ascendente.",
      },
      {
        en: "Where are you going? ↘",
        pt: "Para onde você vai?",
      },
      {
        en: "That's interesting… ↘",
        pt: "Isso é interessante…",
        note: "com curva descendente, soa desconfiado.",
      },
    ],
    vocab: [
      { en: "intonation", pt: "entonação" },
      { en: "rising tone", pt: "tom ascendente" },
      { en: "falling tone", pt: "tom descendente" },
      { en: "sarcasm", pt: "sarcasmo" },
    ],
    practice: [
      {
        prompt: "Que curva melódica marca uma pergunta de sim/não?",
        options: ["descendente", "ascendente", "plana", "alternada"],
        answer: 1,
        explanation:
          "Perguntas de sim/não sobem no final; perguntas com wh- costumam descer.",
      },
      {
        prompt: "O que uma entonação monótona costuma transmitir?",
        options: [
          "entusiasmo",
          "frieza ou desinteresse",
          "dúvida",
          "autoridade",
        ],
        answer: 1,
        explanation:
          "Sem variação melódica, a fala soa distante ou pouco envolvida.",
      },
    ],
    takeaway: "Sua voz carrega emoção, e não só informação.",
    tip: "Grave a mesma frase cinco vezes mudando a emoção; ouça e perceba a diferença.",
  },
  {
    id: "a58",
    objective:
      "Distinguir pares mínimos difíceis e corrigir trocas que mudam o sentido.",
    keyPoints: [
      "Pares críticos: ship/sheep, cut/cat, live/leave, man/men, think/sink.",
      "A diferença está na duração da vogal e no formato da boca, não na “força”.",
      "Consoantes aspiradas: “p”, “t”, “k” no início de sílaba tônica saem com sopro.",
      "Treine em frases, nunca em palavras soltas: contexto ajuda o ouvinte.",
    ],
    explanation: [
      "O português não distingue vogais longas e curtas, então o ouvido brasileiro trata “ship” e “sheep” como a mesma coisa — o nativo não.",
      "Cuidado com “live” (verbo, vogal curta) e “leave” (vogal longa): a troca muda completamente a frase.",
    ],
    examples: [
      {
        en: "The sheep is on the ship.",
        pt: "A ovelha está no navio.",
      },
      {
        en: "I live here, but I leave at seven.",
        pt: "Eu moro aqui, mas saio às sete.",
      },
      {
        en: "I think I need a sink.",
        pt: "Acho que preciso de uma pia.",
      },
    ],
    vocab: [
      { en: "minimal pair", pt: "par mínimo" },
      { en: "vowel length", pt: "duração da vogal" },
      { en: "aspiration", pt: "sopro na consoante" },
      { en: "tongue twister", pt: "trava-língua" },
    ],
    practice: [
      {
        prompt: "O que diferencia “ship” de “sheep”?",
        options: [
          "a consoante final",
          "a duração e o formato da vogal",
          "o acento na primeira sílaba",
          "a entonação da frase",
        ],
        answer: 1,
        explanation:
          "A vogal de ship é curta e relaxada; a de sheep é longa e tensa.",
      },
      {
        prompt: "Por que treinar pares mínimos em frases?",
        options: [
          "porque palavras soltas não existem",
          "porque o contexto também ajuda o ouvinte a entender",
          "porque assim se aprende gramática",
          "porque a pronúncia fica mais rápida",
        ],
        answer: 1,
        explanation:
          "Na frase real, o contexto apoia a compreensão — e você treina o uso.",
      },
    ],
    takeaway: "Você ouve e produz diferenças que antes passavam batido.",
    tip: "Grave “I live here / I leave at seven” e compare com um áudio nativo.",
  },
  {
    id: "a59",
    objective:
      "Corrigir os traços de sotaque brasileiro que mais atrapalham a clareza.",
    keyPoints: [
      "Não acrescente vogal depois de consoante final: “hot” não é “hoti”.",
      "Cuidado com o “r” e o “t” finais; e evite o “tch” em palavras como “student”.",
      "Consoantes finais importam: “worked” e “work” são tempos diferentes.",
      "Elimine o “i” antes de “s” + consoante: “school”, não “eschool”.",
    ],
    explanation: [
      "Sotaque não é problema; falta de clareza sim. Os desvios brasileiros mais custosos são o acréscimo de vogais e a perda de consoantes finais, que carregam gramática.",
      "A boa notícia: são hábitos, e hábitos se corrigem com poucos ajustes conscientes e repetição.",
    ],
    examples: [
      {
        en: "He worked late last night.",
        pt: "Ele trabalhou até tarde ontem à noite.",
        note: "o som final /t/ marca o passado.",
      },
      {
        en: "I studied at school in Brazil.",
        pt: "Estudei em escola no Brasil.",
      },
      {
        en: "Don't forget to send it.",
        pt: "Não esqueça de enviar isso.",
      },
    ],
    vocab: [
      { en: "clarity", pt: "clareza" },
      { en: "mother tongue", pt: "língua materna" },
      { en: "to drop", pt: "omitir um som" },
      { en: "to add", pt: "acrescentar um som" },
    ],
    practice: [
      {
        prompt: "Qual vício de pronúncia mais confunde o ouvinte nativo?",
        options: [
          "falar devagar",
          "acrescentar vogal após consoante final",
          "falar baixo",
          "usar vocabulário simples",
        ],
        answer: 1,
        explanation:
          "A vogal acrescentada cria sílabas inexistentes e embaralha a palavra.",
      },
      {
        prompt: "Por que a consoante final de “worked” é importante?",
        options: [
          "porque é mais bonita",
          "porque marca o tempo passado",
          "porque muda o significado do verbo",
          "porque exige mais ar",
        ],
        answer: 1,
        explanation:
          "Sem o /t/ final, “worked” pode ser ouvido como “work” — presente.",
      },
    ],
    takeaway:
      "Você fala com clareza, sem os vícios que mais confundem ouvidos nativos.",
    tip: "Leia em voz alta prestando atenção só nas consoantes finais — e não acrescente vogal nenhuma.",
  },
  {
    id: "a60",
    objective:
      "Reconhecer diferenças de vocabulário entre inglês britânico e americano.",
    keyPoints: [
      "flat / apartment, lift / elevator, queue / line, lorry / truck.",
      "Algumas palavras mudam de sentido: “pants” é cueca no Reino Unido.",
      "Expressões de tempo variam: “half seven” = 7h30 no britânico.",
      "Entenda as duas variantes; escolha uma para falar e mantenha consistência.",
    ],
    explanation: [
      "Escolher um padrão para produzir evita mistura de sotaque. Para entender, porém, o ideal é conhecer as duas listas — filmes e séries misturam tudo.",
      "Documentos e provas internacionais aceitam as duas variantes; só não misture dentro do mesmo texto.",
    ],
    examples: [
      {
        en: "Take the lift to the third floor and queue at the desk.",
        pt: "Pegue o elevador até o terceiro andar e faça fila no balcão. (britânico)",
      },
      {
        en: "Take the elevator and get in line at the desk.",
        pt: "Pegue o elevador e entre na fila no balcão. (americano)",
      },
      {
        en: "I'll see you at half seven.",
        pt: "Te vejo às 7h30. (britânico)",
      },
    ],
    vocab: [
      { en: "flat / apartment", pt: "apartamento" },
      { en: "queue / line", pt: "fila" },
      { en: "rubbish / trash", pt: "lixo" },
      { en: "holiday / vacation", pt: "férias" },
    ],
    practice: [
      {
        prompt:
          "Um britânico dizendo “I'll be there at half seven” chega a que horas?",
        options: ["6h30", "7h30", "7h", "8h30"],
        answer: 1,
        explanation: "“Half seven” = meia hora depois das sete, ou seja, 7h30.",
      },
      {
        prompt: "Qual par é a versão britânica e americana da mesma coisa?",
        options: ["queue / line", "queue / queue", "line / row", "row / queue"],
        answer: 0,
        explanation:
          "Fila é “queue” no Reino Unido e “line” nos Estados Unidos.",
      },
    ],
    takeaway:
      "Você transita entre as duas variantes sem se perder no vocabulário.",
    tip: "Assista ao mesmo tipo de cena em uma série britânica e uma americana e anote as diferenças.",
  },
]
