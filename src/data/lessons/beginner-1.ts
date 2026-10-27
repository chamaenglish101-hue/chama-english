import type { LessonContent } from "./types.ts"

export const BEGINNER_1: LessonContent[] = [
  {
    id: "b01",
    objective:
      "Ouvir e reconhecer os sons do inglês que não existem no português, começando pelo alfabeto falado.",
    keyPoints: [
      "O nome das letras é diferente: A = “êi”, E = “i”, I = “ái”, H = “êitch”, R = “ar”, W = “dábliu”.",
      "Dois sons novos aparecem em think (θ, língua entre os dentes) e this (ð, o mesmo com voz).",
      "O inglês distingue vogal curta de vogal longa: ship (navio) x sheep (ovelha).",
    ],
    explanation: [
      "Antes de decorar palavras, treine o ouvido. O inglês usa sons que o português não tem, e o cérebro precisa de repetição para reconhecê-los. Ouça cada letra, repita em voz alta e depois soletre palavras comuns.",
      "Soletrar é uma habilidade prática: ao telefone, em aeroporto ou em hotel, você vai ouvir “can you spell that?”. Saber dizer as letras com o som inglês resolve a situação na hora.",
    ],
    examples: [
      {
        en: "How do you spell your name?",
        pt: "Como se escreve o seu nome?",
      },
      {
        en: "B – R – A – Z – I – L. Brazil!",
        pt: "B – R – A – Z – I – L. Brasil!",
        note: "repita sempre em voz alta",
      },
      {
        en: "Sorry, I didn't catch that. Can you repeat, please?",
        pt: "Desculpe, não entendi. Pode repetir, por favor?",
      },
    ],
    vocab: [
      { en: "letter", pt: "letra" },
      { en: "sound", pt: "som" },
      { en: "to spell", pt: "soletrar" },
      { en: "to repeat", pt: "repetir" },
    ],
    practice: [
      {
        prompt: "Como soa o nome da letra E em inglês?",
        options: ["“ê”", "“i”", "“é”", "“ái”"],
        answer: 1,
        explanation:
          "O nome da letra E em inglês soa como o nosso “i”. Já a letra I soa “ái”.",
      },
      {
        prompt:
          "Em qual palavra a “th” tem som semelhante ao “f” com a língua entre os dentes?",
        options: ["this", "think", "the", "they"],
        answer: 1,
        explanation:
          "think usa o /θ/ (só ar, sem voz). Em this e they o som é /ð/, com vibração na garganta.",
      },
    ],
    takeaway:
      "Você já sabe soletrar em inglês e identificou dois sons novos: /θ/ e /ð/.",
    tip: "Treine 5 minutos por dia falando o alfabeto em inglês enquanto faz outra tarefa. Vira automático em uma semana.",
  },
  {
    id: "b02",
    objective:
      "Cumprimentar, se despedir e responder às saudações básicas em qualquer horário do dia.",
    keyPoints: [
      "Good morning (até ~12h), good afternoon (até ~18h) e good evening (à noite, ao chegar).",
      "Hello e hi servem em qualquer hora; hi é mais informal.",
      "Good night é despedida à noite, não cumprimento.",
      "Para responder, repita a saudação ou use “How are you?” → “I'm fine, thanks!”.",
    ],
    explanation: [
      "Cumprimentar é o primeiro passo para destravar a fala. As expressões são curtas e fixas, então você pode usá-las antes de entender toda a gramática.",
      "A confusão mais comum é good night: em português usamos “boa noite” para chegar e para sair, mas em inglês good evening é para chegar e good night apenas para se despedir.",
    ],
    examples: [
      {
        en: "Good morning! How are you today?",
        pt: "Bom dia! Como você está hoje?",
      },
      {
        en: "Hi, Ana! Nice to see you again.",
        pt: "Oi, Ana! Que bom te ver de novo.",
      },
      { en: "See you tomorrow. Good night!", pt: "Até amanhã. Boa noite!" },
    ],
    vocab: [
      { en: "good morning", pt: "bom dia" },
      { en: "good afternoon", pt: "boa tarde" },
      { en: "good evening", pt: "boa noite (ao chegar)" },
      { en: "goodbye / bye", pt: "tchau" },
      { en: "see you later", pt: "até logo" },
    ],
    practice: [
      {
        prompt: "Você chega a uma reunião às 20h. O que diz ao entrar?",
        options: [
          "Good night!",
          "Good evening!",
          "Good afternoon!",
          "Goodbye!",
        ],
        answer: 1,
        explanation:
          "Ao chegar à noite usamos good evening. Good night é apenas para se despedir.",
      },
      {
        prompt: "Alguém diz “How are you?”. Qual é a resposta mais natural?",
        options: [
          "I'm fine, thanks. And you?",
          "I am good morning.",
          "Yes, I am.",
          "How are you too.",
        ],
        answer: 0,
        explanation:
          "I'm fine, thanks. And you? responde e devolve a pergunta, mantendo a conversa viva.",
      },
    ],
    takeaway: "Você consegue abrir e fechar qualquer conversa com educação.",
    tip: "Escolha três saudações e use-as de verdade: com o porteiro, no mercado, no elevador.",
  },
  {
    id: "b03",
    objective:
      "Dizer seu nome, sua origem e o que você faz usando frases simples e diretas.",
    keyPoints: [
      "My name is… / I'm… para apresentar-se.",
      "I'm from Brazil. I live in São Paulo.",
      "I'm a student / I'm a teacher — o artigo a aparece antes da profissão.",
      "Nice to meet you é a frase usada ao conhecer alguém.",
    ],
    explanation: [
      "Apresentar-se combina três informações: nome, origem e ocupação. Com essas três frases você já participa da primeira conversa em inglês.",
      "Nasceu aqui um erro clássico: em inglês, profissão sempre leva a ou an. Diga “I'm a nurse”, nunca “I'm nurse”.",
    ],
    examples: [
      {
        en: "Hi, I'm Carla. Nice to meet you!",
        pt: "Oi, eu sou a Carla. Prazer em conhecer você!",
      },
      {
        en: "I'm from Brazil. I live in Belo Horizonte.",
        pt: "Sou do Brasil. Moro em Belo Horizonte.",
      },
      {
        en: "I'm an engineer at a small company.",
        pt: "Sou engenheiro(a) em uma empresa pequena.",
      },
    ],
    vocab: [
      { en: "My name is…", pt: "Meu nome é…" },
      { en: "I'm from…", pt: "Eu sou de…" },
      { en: "Nice to meet you", pt: "Prazer em conhecer você" },
      { en: "I work as…", pt: "Eu trabalho como…" },
    ],
    practice: [
      {
        prompt: "Como dizer “Sou professor” em inglês?",
        options: [
          "I'm teacher.",
          "I'm a teacher.",
          "I am teacher.",
          "I teacher.",
        ],
        answer: 1,
        explanation:
          "Profissões em inglês sempre pedem o artigo: I'm a teacher.",
      },
      {
        prompt: "Complete: “I ___ from Brazil.”",
        options: ["am from", "come of", "is from", "be of"],
        answer: 0,
        explanation:
          "I am from Brazil (I'm from Brazil) é a forma natural de dizer de onde você vem.",
      },
    ],
    takeaway: "Você já sabe se apresentar em 15 segundos.",
    tip: "Grave um áudio de 15 segundos se apresentando e ouça. Depois regrave melhorando a pronúncia.",
  },
  {
    id: "b04",
    objective:
      "Dominar o verbo to be (am, is, are) nas formas afirmativa, negativa e interrogativa.",
    keyPoints: [
      "I am · you are · he/she/it is · we are · they are.",
      "Negativa: add not (I'm not, she isn't, they aren't).",
      "Pergunta: o verbo vem primeiro — Are you…? Is she…?",
      "Não existe “I have 30 years”: idade usa to be — I am 30.",
    ],
    explanation: [
      "To be é o verbo mais usado do inglês e aparece em tudo: identidade, estado, idade, sentimento e localização. Memorizar a tabela resolve metade das frases do dia a dia.",
      "Diferente do português, o sujeito nunca pode ser escondido: em inglês a frase sempre precisa de I, you, he, she, it, we ou they.",
    ],
    examples: [
      {
        en: "I am a student. She is my sister.",
        pt: "Eu sou estudante. Ela é minha irmã.",
      },
      {
        en: "They are not at home right now.",
        pt: "Eles não estão em casa agora.",
      },
      {
        en: "Are you ready? — Yes, I am.",
        pt: "Você está pronto? — Sim, estou.",
      },
    ],
    vocab: [
      { en: "happy", pt: "feliz" },
      { en: "tired", pt: "cansado" },
      { en: "ready", pt: "pronto" },
      { en: "hungry", pt: "com fome" },
    ],
    practice: [
      {
        prompt: "Complete: “My parents ___ in Fortaleza.”",
        options: ["is", "are", "am", "be"],
        answer: 1,
        explanation: "parents é plural, então usamos are.",
      },
      {
        prompt: "Como perguntar se ela está cansada?",
        options: [
          "Is she tired?",
          "She is tired?",
          "Does she tired?",
          "Are she tired?",
        ],
        answer: 0,
        explanation:
          "Para perguntar, o verbo to be vai para a frente do sujeito: Is she…?",
      },
    ],
    takeaway: "Você monta afirmativa, negativa e pergunta com o verbo to be.",
    tip: "Descreva cinco pessoas da sua casa em voz alta usando is/are, incluindo age.",
  },
  {
    id: "b05",
    objective:
      "Usar pronomes pessoais e possessivos sem trocar as pessoas da frase.",
    keyPoints: [
      "Sujeito: I, you, he, she, it, we, they.",
      "Possessivo: my, your, his, her, its, our, their.",
      "His é dele, her é dela — escolha pelo dono, não pela coisa.",
      "It é usado para coisas, animais e situações.",
    ],
    explanation: [
      "Em português dizemos “o carro dele” e “a casa dela”; em inglês his e her dependem do dono. Essa regra sozinha elimina muitos erros de brasileiros.",
      "Os possessivos vêm junto do substantivo e não mudam no plural: my books, their house.",
    ],
    examples: [
      {
        en: "This is my brother and his wife.",
        pt: "Este é meu irmão e a esposa dele.",
      },
      {
        en: "Her name is Juliana and their dog is called Bidu.",
        pt: "O nome dela é Juliana e o cachorro deles se chama Bidu.",
      },
      { en: "We love our city.", pt: "Nós amamos nossa cidade." },
    ],
    vocab: [
      { en: "my / your", pt: "meu / seu" },
      { en: "his / her", pt: "dele / dela" },
      { en: "our / their", pt: "nosso / deles" },
      { en: "its", pt: "dele/dela (para coisas e animais)" },
    ],
    practice: [
      {
        prompt: "Complete: “Marina is my friend. ___ mother is a doctor.”",
        options: ["His", "Her", "Their", "Your"],
        answer: 1,
        explanation: "Marina é mulher, então o possessivo é her.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "The dog is playing with it ball.",
          "The dog is playing with its ball.",
          "The dog is playing with his ball (para uma cadela).",
          "The dog is playing with your ball (para um cachorro de rua).",
        ],
        answer: 1,
        explanation:
          "Para animais e coisas usamos its quando o gênero não é definido.",
      },
    ],
    takeaway: "Você escolhe o possessivo certo olhando para o dono do objeto.",
    tip: "Note os possessivos em uma letra de música inglesa que você gosta e traduza cada um.",
  },
  {
    id: "b06",
    objective: "Escolher corretamente entre a, an, the e nenhum artigo.",
    keyPoints: [
      "a antes de som de consoante: a book, a university.",
      "an antes de som de vogal: an apple, an hour.",
      "the para algo específico ou já conhecido: the book on the table.",
      "Não usamos artigo ao falar de generalidades: I love music.",
    ],
    explanation: [
      "A regra depende do som, não da letra. University começa com som de “iu” (consoante) e recebe a; hour começa com som de vogal e recebe an.",
      "O the aparece quando as duas pessoas sabem de qual coisa você fala: the president, the door. Sem essa referência, deixamos sem artigo.",
    ],
    examples: [
      {
        en: "I bought an umbrella and a bag.",
        pt: "Comprei um guarda-chuva e uma bolsa.",
      },
      { en: "The teacher is at the door.", pt: "A professora está na porta." },
      {
        en: "She loves coffee in the morning.",
        pt: "Ela adora café de manhã.",
      },
    ],
    vocab: [
      { en: "an hour", pt: "uma hora" },
      { en: "a university", pt: "uma universidade" },
      { en: "the same", pt: "o mesmo" },
      { en: "at night", pt: "à noite" },
    ],
    practice: [
      {
        prompt: "Complete: “She waited for ___ hour.”",
        options: ["a", "an", "the", "(nada)"],
        answer: 1,
        explanation: "Hour começa com som de vogal, então usamos an hour.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "I love the music.",
          "I love music.",
          "I love a music.",
          "I love musics.",
        ],
        answer: 1,
        explanation:
          "Para falar de algo em geral não usamos artigo: I love music.",
      },
    ],
    takeaway: "Você decide o artigo pelo som e pela especificidade.",
    tip: "Leia em voz alta e marque cada artigo em um texto de 5 linhas. O padrão aparece rápido.",
  },
  {
    id: "b07",
    objective:
      "Formar o plural dos substantivos, incluindo os casos irregulares mais usados.",
    keyPoints: [
      "Regra geral: acrescenta -s (book → books).",
      "Terminados em s, sh, ch, x, z: -es (bus → buses, watch → watches).",
      "Terminados em consoante + y: troca por -ies (city → cities).",
      "Irregulares: child → children, man → men, woman → women, person → people.",
    ],
    explanation: [
      "O plural em inglês é simples quando você olha a última letra da palavra. Vale decorar apenas os irregulares, porque são poucos e aparecem muito.",
      "Cuidado com as palavras incontáveis (water, money, information): elas não têm plural nem recebem a/an.",
    ],
    examples: [
      {
        en: "Two buses and three taxis are waiting.",
        pt: "Dois ônibus e três táxis estão esperando.",
      },
      {
        en: "The children are playing with the dogs.",
        pt: "As crianças estão brincando com os cachorros.",
      },
      {
        en: "I need some information about the courses.",
        pt: "Preciso de algumas informações sobre os cursos.",
      },
    ],
    vocab: [
      { en: "children", pt: "crianças" },
      { en: "people", pt: "pessoas" },
      { en: "men / women", pt: "homens / mulheres" },
      { en: "teeth", pt: "dentes" },
    ],
    practice: [
      {
        prompt: "Qual é o plural de “city”?",
        options: ["citys", "cities", "cityes", "citis"],
        answer: 1,
        explanation: "Consoante + y vira -ies: city → cities.",
      },
      {
        prompt: "Complete: “There are many ___ in the park.”",
        options: ["childrens", "children", "childs", "childes"],
        answer: 1,
        explanation: "children já é plural. Nunca acrescente -s a ele.",
      },
    ],
    takeaway:
      "Você forma plurais regulares e reconhece os irregulares essenciais.",
    tip: "Faça uma lista de 10 objetos da sua mesa e escreva cada um no plural.",
  },
  {
    id: "b08",
    objective:
      "Falar números, horas e preços com segurança em situações reais.",
    keyPoints: [
      "Números grandes: 1,250 = one thousand two hundred fifty.",
      "Horas: 7:15 = seven fifteen ou quarter past seven.",
      "Preços: R$ 9,90 = nine ninety (reais) — normalmente sem a palavra cent.",
      "Telefone e endereço são lidos dígito por dígito.",
    ],
    explanation: [
      "Números aparecem em toda viagem: preço, horário, quarto de hotel, plataforma. O segredo é treinar em blocos e não traduzir palavra por palavra.",
      "Para horas, o inglês usa a.m. (de 0h às 11h59) e p.m. (de 12h às 23h59). Também aceita o formato direto, “seven thirty”.",
    ],
    examples: [
      {
        en: "The train leaves at 8:45 a.m.",
        pt: "O trem parte às 8h45 da manhã.",
      },
      {
        en: "That's forty-five dollars and twenty cents.",
        pt: "São quarenta e cinco dólares e vinte centavos.",
      },
      {
        en: "My phone number is nine eight eight seven…",
        pt: "Meu telefone é nove, oito, oito, sete…",
      },
    ],
    vocab: [
      { en: "half past two", pt: "duas e meia" },
      { en: "a quarter to six", pt: "quinze para as seis" },
      { en: "how much is it?", pt: "quanto custa?" },
      { en: "in total", pt: "no total" },
    ],
    practice: [
      {
        prompt: "Como se diz 9:30 em inglês?",
        options: [
          "nine thirteen",
          "half past nine",
          "nine ninety",
          "thirty nine",
        ],
        answer: 1,
        explanation: "Meia hora = half past + hora: half past nine.",
      },
      {
        prompt: "Complete: “How ___ is this jacket?”",
        options: ["many", "much", "long", "price"],
        answer: 1,
        explanation: "Para preço, a expressão fixa é how much is…",
      },
    ],
    takeaway:
      "Você entende horários, preços e números em qualquer situação prática.",
    tip: "Ao comprar hoje, leia o preço em voz alta em inglês antes de conferir o troco.",
  },
  {
    id: "b09",
    objective:
      "Falar sobre a família e pessoas próximas com vocabulário preciso.",
    keyPoints: [
      "mother, father, parents, sister, brother, son, daughter.",
      "Grandparents, uncle, aunt, cousin, nephew, niece.",
      "Husband e wife; boyfriend e girlfriend.",
      "Para dizer “tenho”, usa-se have/has: I have two sisters.",
    ],
    explanation: [
      "Você vai usar esse vocabulário para falar de si em qualquer conversa. Comece pelas pessoas da sua casa e depois amplie para parentes distantes.",
      "Lembre que have/has não é to be: “I have a brother”, não “I am a brother”.",
    ],
    examples: [
      {
        en: "I have two brothers and one sister.",
        pt: "Tenho dois irmãos e uma irmã.",
      },
      {
        en: "My grandparents live in the countryside.",
        pt: "Meus avós moram no interior.",
      },
      { en: "Do you have any children?", pt: "Você tem filhos?" },
    ],
    vocab: [
      { en: "parents", pt: "pais" },
      { en: "grandparents", pt: "avós" },
      { en: "cousin", pt: "primo(a)" },
      { en: "in-laws", pt: "sogros / família do cônjuge" },
    ],
    practice: [
      {
        prompt: "Como dizer “Eu tenho uma irmã”?",
        options: [
          "I am a sister.",
          "I have a sister.",
          "I has a sister.",
          "I have one sister there.",
        ],
        answer: 1,
        explanation: "Posse em inglês usa have/has: I have a sister.",
      },
      {
        prompt: "Quem são os “grandparents”?",
        options: ["os tios", "os avós", "os primos", "os pais"],
        answer: 1,
        explanation:
          "Grandparents são os avós; great-grandparents são os bisavós.",
      },
    ],
    takeaway: "Você apresenta sua família e fala quantas pessoas há nela.",
    tip: "Monte uma mini-árvore genealógica em inglês e explique para alguém.",
  },
  {
    id: "b10",
    objective:
      "Descrever sua rotina no presente simples, respeitando o -s da terceira pessoa.",
    keyPoints: [
      "I/you/we/they + verbo base: I study; we work.",
      "he/she/it + verbo + -s: she studies; he works.",
      "Terminados em o, s, sh, ch, x: -es (he goes, she watches).",
      "Marcadores: every day, usually, on weekdays, in the morning.",
    ],
    explanation: [
      "O presente simples é o tempo dos hábitos. A única mudança na conjugação é o -s na terceira pessoa do singular, exatamente onde os brasileiros esquecem.",
      "Cuidado com have e go: he has, she goes. Esses dois são irregulares e aparecem em toda conversa.",
    ],
    examples: [
      {
        en: "I wake up at 6 and I have breakfast.",
        pt: "Acordo às 6 e tomo café da manhã.",
      },
      {
        en: "She works from Monday to Friday.",
        pt: "Ela trabalha de segunda a sexta.",
      },
      {
        en: "We usually study English after dinner.",
        pt: "Normalmente estudamos inglês depois do jantar.",
      },
    ],
    vocab: [
      { en: "to wake up", pt: "acordar" },
      { en: "to have breakfast", pt: "tomar café da manhã" },
      { en: "on weekdays", pt: "durante a semana" },
      { en: "usually", pt: "normalmente" },
    ],
    practice: [
      {
        prompt: "Complete: “He ___ to work by bus.”",
        options: ["go", "goes", "going", "gone"],
        answer: 1,
        explanation: "Terceira pessoa do singular: he goes.",
      },
      {
        prompt: "Qual frase está correta?",
        options: [
          "She have lunch at noon.",
          "She has lunch at noon.",
          "She haves lunch at noon.",
          "She having lunch at noon.",
        ],
        answer: 1,
        explanation: "have vira has na terceira pessoa: she has.",
      },
    ],
    takeaway: "Você conta sua rotina inteira em inglês sem errar o -s.",
    tip: "Descreva sua rotina em 5 frases e depois conte a rotina de outra pessoa para treinar o -s.",
  },
]
