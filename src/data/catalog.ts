export type Level = "iniciante" | "intermediario" | "avancado"

export type Focus =
  | "Gramática"
  | "Vocabulário"
  | "Conversação"
  | "Pronúncia"
  | "Escuta"
  | "Leitura"
  | "Escrita"

export interface LevelInfo {
  id: Level
  label: string
  english: string
  tagline: string
  cefr: string
  total: number
}

export interface LessonMeta {
  id: string
  level: Level
  order: number
  title: string
  focus: Focus
  minutes: number
  summary: string
}

export const LEVELS: LevelInfo[] = [
  {
    id: "iniciante",
    label: "Iniciante",
    english: "Beginner",
    tagline: "Do zero às primeiras conversas reais",
    cefr: "A1 · A2",
    total: 20,
  },
  {
    id: "intermediario",
    label: "Intermediário",
    english: "Intermediate",
    tagline: "Segurança no inglês do dia a dia e do trabalho",
    cefr: "B1 · B2",
    total: 40,
  },
  {
    id: "avancado",
    label: "Avançado",
    english: "Advanced",
    tagline: "Naturalidade, precisão e inglês profissional",
    cefr: "C1 · C2",
    total: 70,
  },
]

export const levelInfo = (level: Level): LevelInfo =>
  LEVELS.find((item) => item.id === level) ?? LEVELS[0]

type Row = [title: string, focus: Focus, minutes: number, summary: string]

const INICIANTE: Row[] = [
  [
    "Sons do inglês: alfabeto e primeiros sons",
    "Pronúncia",
    8,
    "O alfabeto falado e os sons que não existem no português.",
  ],
  [
    "Cumprimentos e despedidas",
    "Conversação",
    7,
    "Hello, hi, good morning, goodbye: cumprimente em qualquer hora do dia.",
  ],
  [
    "Apresentando-se: quem é você",
    "Conversação",
    8,
    "Diga seu nome, de onde vem e o que faz com frases simples.",
  ],
  [
    "Verbo to be: am, is, are",
    "Gramática",
    10,
    "O verbo mais usado do inglês para dizer quem você é e como está.",
  ],
  [
    "Pronomes: I, my, you, your",
    "Gramática",
    9,
    "Pronomes pessoais e possessivos sem misturar as pessoas.",
  ],
  [
    "Artigos a, an, the",
    "Gramática",
    8,
    "Quando usar cada artigo e por que às vezes não se usa nenhum.",
  ],
  [
    "Plural dos substantivos",
    "Gramática",
    9,
    "As regras de -s, -es e os plurais irregulares mais comuns.",
  ],
  [
    "Números, horas e preços",
    "Vocabulário",
    10,
    "Fale números grandes, horas e quanto custa qualquer coisa.",
  ],
  [
    "Família e pessoas próximas",
    "Vocabulário",
    8,
    "Mother, brother, friend: fale da sua família sem gaguejar.",
  ],
  [
    "Presente simples: rotina e hábitos",
    "Gramática",
    12,
    "Descreva sua rotina e conjugue o verbo na terceira pessoa.",
  ],
  [
    "Perguntas com do e does",
    "Gramática",
    10,
    "Monte perguntas no presente e responda curto como um nativo.",
  ],
  [
    "There is / there are",
    "Gramática",
    9,
    "Diga o que existe na sua casa, na sua cidade, no lugar onde está.",
  ],
  [
    "Preposições de lugar: in, on, under",
    "Gramática",
    8,
    "Localize objetos e pessoas com as preposições essenciais.",
  ],
  [
    "Adjetivos básicos e a ordem das palavras",
    "Gramática",
    9,
    "Big, small, new, old: descreva coisas na ordem que o inglês pede.",
  ],
  [
    "Can e can't: habilidade e permissão",
    "Gramática",
    8,
    "Diga o que você sabe fazer e peça permissão com naturalidade.",
  ],
  [
    "Like, love, hate + -ing",
    "Gramática",
    9,
    "Fale do que você gosta e do que não suporta.",
  ],
  [
    "No restaurante: pedindo comida",
    "Conversação",
    10,
    "Faça seu pedido, pergunte o preço e peça a conta em inglês.",
  ],
  [
    "Dias, meses e datas",
    "Vocabulário",
    8,
    "Marque compromissos e fale de aniversários sem confundir as datas.",
  ],
  [
    "Was e were: falando do passado",
    "Gramática",
    10,
    "Conte como algo era antes usando o passado do verbo to be.",
  ],
  [
    "Revisão: apresentando-se com confiança",
    "Conversação",
    12,
    "Junte tudo em uma apresentação pessoal de 60 segundos.",
  ],
]

const INTERMEDIARIO: Row[] = [
  [
    "Passado simples: verbos regulares",
    "Gramática",
    11,
    "Conte o que aconteceu ontem com o -ed bem pronunciado.",
  ],
  [
    "Passado simples: verbos irregulares",
    "Gramática",
    12,
    "Os 40 verbos irregulares que aparecem em quase toda conversa.",
  ],
  [
    "Presente contínuo: acontecendo agora",
    "Gramática",
    10,
    "Descreva o que está rolando neste exato momento.",
  ],
  [
    "Presente simples x contínuo",
    "Gramática",
    11,
    "Escolha o tempo certo entre hábito e ação em andamento.",
  ],
  [
    "Futuro com will e going to",
    "Gramática",
    12,
    "Planeje e preveja o futuro com a forma certa para cada caso.",
  ],
  [
    "Present perfect: I have done",
    "Gramática",
    13,
    "Fale de experiências e resultados sem dizer quando aconteceu.",
  ],
  [
    "Present perfect x passado simples",
    "Gramática",
    12,
    "O contraste que mais trava brasileiros, resolvido com regra clara.",
  ],
  [
    "Comparativos e superlativos",
    "Gramática",
    11,
    "Compare pessoas, lugares e coisas como um falante seguro.",
  ],
  [
    "much, many, some, any, a lot of",
    "Gramática",
    10,
    "Quantifique tudo sem errar a escolha da palavra.",
  ],
  [
    "too e enough",
    "Gramática",
    9,
    "Diga que algo é demais, de menos ou suficiente.",
  ],
  [
    "Should, must e have to",
    "Gramática",
    11,
    "Dê conselhos, regras e obrigações mudando a força da frase.",
  ],
  [
    "Phrasal verbs do dia a dia",
    "Vocabulário",
    12,
    "Get up, turn on, look for: verbos que mudam de sentido com a partícula.",
  ],
  [
    "Condicionais 0, 1 e 2",
    "Gramática",
    13,
    "Hipóteses reais e imaginárias com if sem misturar os tempos.",
  ],
  [
    "Orações relativas: who, which, that",
    "Gramática",
    12,
    "Una duas ideias em uma frase só, como os nativos fazem.",
  ],
  [
    "Voz passiva no presente e no passado",
    "Gramática",
    12,
    "Fale do que foi feito e de processos sem dizer quem fez.",
  ],
  [
    "Discurso indireto: he said that...",
    "Gramática",
    12,
    "Repasse recados e conversas ajustando tempos e pronomes.",
  ],
  [
    "Gerúndio x infinitivo",
    "Gramática",
    11,
    "Enjoy doing e want to do: quando usar cada forma.",
  ],
  [
    "used to: hábitos do passado",
    "Gramática",
    10,
    "Fale do que você costumava fazer e não faz mais.",
  ],
  [
    "Past continuous e interrupções",
    "Gramática",
    11,
    "Monte cenas no passado e encaixe o que interrompeu.",
  ],
  [
    "Question tags: isn't it? don't you?",
    "Gramática",
    10,
    "Confirme informações do jeito que soa natural em conversa.",
  ],
  [
    "Advérbios de frequência e de modo",
    "Gramática",
    9,
    "Always, usually, quickly: posicione os advérbios corretamente.",
  ],
  [
    "Conectivos: because, although, however",
    "Escrita",
    10,
    "Ligue ideias com contraste, causa e consequência.",
  ],
  [
    "Preposições de tempo: in, on, at",
    "Gramática",
    9,
    "A regra definitiva para datas, meses, horas e dias.",
  ],
  [
    "E-mails de trabalho essenciais",
    "Escrita",
    13,
    "Escreva, responda e acompanhe e-mails profissionais curtos.",
  ],
  [
    "Ao telefone: recados e confirmações",
    "Conversação",
    12,
    "Atenda, peça para repetir e anote recados sem travar.",
  ],
  [
    "No aeroporto e na imigração",
    "Conversação",
    11,
    "Check-in, embarque e as perguntas que o oficial faz.",
  ],
  [
    "No hotel: check-in e pedidos",
    "Conversação",
    11,
    "Reserve, faça pedidos e resolva problemas do quarto.",
  ],
  [
    "No médico: sintomas e conselhos",
    "Conversação",
    12,
    "Descreva dor, sintomas e entenda a orientação médica.",
  ],
  [
    "Compras, tamanhos e trocas",
    "Conversação",
    11,
    "Peça outro tamanho, negocie preço e faça uma troca.",
  ],
  [
    "Entrevista de emprego: perguntas clássicas",
    "Conversação",
    13,
    "Prepare respostas para as perguntas que sempre aparecem.",
  ],
  [
    "Small talk: puxando conversa",
    "Conversação",
    10,
    "Comece e sustente conversas leves em qualquer situação.",
  ],
  [
    "Descrevendo pessoas e personalidade",
    "Vocabulário",
    11,
    "Fale de aparência e jeito de ser com adjetivos precisos.",
  ],
  [
    "Dar opinião e discordar com educação",
    "Conversação",
    11,
    "Diga o que pensa e discorde sem parecer rude.",
  ],
  [
    "Reclamações e resolução de problemas",
    "Conversação",
    12,
    "Reclame de forma firme e educada até resolver.",
  ],
  [
    "Apresentações simples no trabalho",
    "Conversação",
    12,
    "Abra, desenvolva e feche uma apresentação curta.",
  ],
  [
    "Collocations: combinações naturais",
    "Vocabulário",
    11,
    "Make a decision, take a shower: soe natural, não traduzido.",
  ],
  [
    "Expressões idiomáticas para começar",
    "Vocabulário",
    10,
    "As expressões mais usadas no dia a dia, com contexto.",
  ],
  [
    "Estratégias de escuta para falantes rápidos",
    "Escuta",
    12,
    "Treine ouvido para reduções, ligações e ritmo da fala.",
  ],
  [
    "Escrevendo mensagens e textos curtos",
    "Escrita",
    11,
    "Mensagens, recados e parágrafos claros em inglês.",
  ],
  [
    "Revisão: contando uma história do começo ao fim",
    "Conversação",
    13,
    "Estruture um relato pessoal misturando os tempos estudados.",
  ],
]

const AVANCADO: Row[] = [
  [
    "Past perfect: o passado antes do passado",
    "Gramática",
    12,
    "Ordene dois acontecimentos passados com had + particípio.",
  ],
  [
    "Past perfect continuous",
    "Gramática",
    12,
    "Mostre duração e causa anterior a outro momento passado.",
  ],
  [
    "Futuro contínuo e futuro perfeito",
    "Gramática",
    13,
    "Projete ações em andamento e concluídas no futuro.",
  ],
  [
    "Third conditional: arrependimentos",
    "Gramática",
    13,
    "Fale do que teria acontecido se algo tivesse sido diferente.",
  ],
  [
    "Mixed conditionals",
    "Gramática",
    13,
    "Combine tempos para hipóteses que cruzam passado e presente.",
  ],
  [
    "Inversão para ênfase",
    "Gramática",
    13,
    "Never have I…, Not only did she…: estrutura de impacto.",
  ],
  [
    "Cleft sentences: giving emphasis",
    "Gramática",
    13,
    "What I need is…, It was John who…: destaque a informação certa.",
  ],
  [
    "Subjuntivo e o inglês formal",
    "Gramática",
    12,
    "I suggest that he be…: estruturas formais e de alta precisão.",
  ],
  [
    "Modais de dedução no passado",
    "Gramática",
    12,
    "must have, might have, can't have: deduza com precisão.",
  ],
  [
    "Passiva avançada e verbos de relato",
    "Gramática",
    13,
    "It is said that…, He is believed to…: impessoalidade elegante.",
  ],
  [
    "Causativo: have / get something done",
    "Gramática",
    12,
    "Fale de serviços contratados sem dizer quem executou.",
  ],
  [
    "Reduced relative clauses",
    "Gramática",
    12,
    "Enxugue orações relativas e escreva com densidade.",
  ],
  [
    "Participle clauses",
    "Gramática",
    13,
    "Having finished…, Not knowing…: ligue ideias em uma frase só.",
  ],
  [
    "Nominalização para escrita formal",
    "Escrita",
    12,
    "Transforme verbos em substantivos e ganhe tom acadêmico.",
  ],
  [
    "Hedging: suavizando afirmações",
    "Escrita",
    11,
    "It tends to, may suggest, arguably: proteja seu argumento.",
  ],
  [
    "Wish, if only e would rather",
    "Gramática",
    12,
    "Expresse desejo, arrependimento e preferência com nuance.",
  ],
  [
    "Unless, provided that, as long as",
    "Gramática",
    12,
    "Condições específicas além do if simples.",
  ],
  [
    "Ellipsis e substituição",
    "Gramática",
    12,
    "So do I, neither did she: responda sem repetir tudo.",
  ],
  [
    "Fronting e foco da informação",
    "Gramática",
    12,
    "Reorganize a frase para guiar a atenção de quem lê.",
  ],
  [
    "Perguntas avançadas e embutidas",
    "Gramática",
    12,
    "Could you tell me where…: perguntas educadas e complexas.",
  ],
  [
    "Phrasal verbs avançados: negócios",
    "Vocabulário",
    12,
    "Follow up, roll out, scale back: o inglês real das empresas.",
  ],
  [
    "Phrasal verbs avançados: relações",
    "Vocabulário",
    12,
    "Get along, fall out, make up: descreva relações com precisão.",
  ],
  [
    "Phrasal verbs com múltiplos sentidos",
    "Vocabulário",
    12,
    "Take off, put down, run out: o contexto decide o significado.",
  ],
  [
    "Expressões idiomáticas em contexto I",
    "Vocabulário",
    11,
    "Idioms de uso frequente com exemplos reais de fala.",
  ],
  [
    "Expressões idiomáticas em contexto II",
    "Vocabulário",
    11,
    "Idioms mais elaborados para soar fluente e natural.",
  ],
  [
    "Idioms do mundo do trabalho",
    "Vocabulário",
    11,
    "Get the ball rolling, touch base: fale como o escritório.",
  ],
  [
    "Collocations de nível avançado",
    "Vocabulário",
    12,
    "Combinações de alto nível que evitam o 'português traduzido'.",
  ],
  [
    "Register: formal, neutro e informal",
    "Escrita",
    12,
    "Escolha o tom certo para cada contexto e leitor.",
  ],
  [
    "E-mail profissional avançado",
    "Escrita",
    13,
    "Estruture e-mails longos com clareza e diplomacia.",
  ],
  [
    "Cartas de reclamação e de resolução",
    "Escrita",
    12,
    "Do tom firme ao acordo final, por escrito.",
  ],
  [
    "Cover letter e LinkedIn em inglês",
    "Escrita",
    13,
    "Apresente sua trajetória de forma atraente e honesta.",
  ],
  [
    "Negociação: vantagem e concessão",
    "Conversação",
    13,
    "Linguagem para abrir, ceder e fechar um acordo.",
  ],
  [
    "Reuniões: conduzir, interromper e resumir",
    "Conversação",
    13,
    "Assuma o controle de uma reunião em inglês.",
  ],
  [
    "Apresentações avançadas: narrativa",
    "Conversação",
    13,
    "Transforme dados em história com estrutura e ritmo.",
  ],
  [
    "Perguntas difíceis: dominando o Q&A",
    "Conversação",
    12,
    "Responda sob pressão e ganhe tempo com elegância.",
  ],
  [
    "Entrevistas comportamentais: método STAR",
    "Conversação",
    13,
    "Conte suas histórias profissionais com estrutura clara.",
  ],
  [
    "Negociando salário e benefícios",
    "Conversação",
    12,
    "Peça mais, justifique valor e responda objeções.",
  ],
  [
    "Feedback e avaliação de desempenho",
    "Conversação",
    12,
    "Dê e receba feedback direto sem constranger ninguém.",
  ],
  [
    "Gerenciando conflitos com diplomacia",
    "Conversação",
    12,
    "Reduza tensão e chegue a acordos em inglês.",
  ],
  [
    "Small talk estratégico em eventos",
    "Conversação",
    11,
    "Escolha assuntos seguros e saia da conversa com classe.",
  ],
  [
    "Networking em conferências",
    "Conversação",
    11,
    "Apresente-se, conecte-se e faça follow-up.",
  ],
  [
    "Linguagem de liderança",
    "Conversação",
    12,
    "Motive, delegue e alinhe times em inglês.",
  ],
  [
    "Atendimento ao cliente em inglês",
    "Conversação",
    12,
    "Acalme, resolva e encante clientes por chat e telefone.",
  ],
  [
    "Teleconferências e reuniões híbridas",
    "Conversação",
    11,
    "Ganhe espaço na fala quando ninguém está na mesma sala.",
  ],
  [
    "Argumentação: construindo um argumento",
    "Escrita",
    12,
    "Tese, evidência e conclusão em textos persuasivos.",
  ],
  [
    "Debate: atacando ideias, não pessoas",
    "Conversação",
    12,
    "Discorde com firmeza, respeito e evidência.",
  ],
  [
    "Ensaios: introdução, tese e conclusão",
    "Escrita",
    13,
    "Estrutura completa de um essay de nível avançado.",
  ],
  [
    "Paráfrase e resumo de fontes",
    "Escrita",
    12,
    "Reescreva ideias de outros sem copiar nem deturpar.",
  ],
  [
    "Coesão e conectores avançados",
    "Escrita",
    12,
    "Nevertheless, hence, whereas: costure parágrafos longos.",
  ],
  [
    "Leitura crítica: viés e intenção",
    "Leitura",
    12,
    "Identifique intenção, pressupostos e manipulação no texto.",
  ],
  [
    "Tomada de notas em palestras",
    "Escuta",
    12,
    "Capture estrutura e ideias-chave enquanto escuta.",
  ],
  [
    "Podcasts e palestras longas",
    "Escuta",
    12,
    "Sustente atenção e compreensão em áudios extensos.",
  ],
  [
    "Sotaques: britânico, americano e além",
    "Escuta",
    12,
    "Reconheça as diferenças e entenda os principais sotaques.",
  ],
  [
    "Connected speech: ligações e reduções",
    "Pronúncia",
    12,
    "Entenda por que 'what do you' vira 'whaddaya'.",
  ],
  [
    "Ritmo e acento tônico da frase",
    "Pronúncia",
    12,
    "Dê música à frase e soe menos 'palavra por palavra'.",
  ],
  [
    "Entonação: emoção e intenção",
    "Pronúncia",
    12,
    "Use a melodia da voz para expressar atitude.",
  ],
  [
    "Pares mínimos difíceis",
    "Pronúncia",
    11,
    "Ship x sheep, th, v x w: treine os contrastes que confundem.",
  ],
  [
    "Sotaque brasileiro: erros mais comuns",
    "Pronúncia",
    12,
    "Corrija os vícios de pronúncia que mais denunciam o português.",
  ],
  [
    "Inglês britânico x americano: vocabulário",
    "Vocabulário",
    11,
    "Flat x apartment, lift x elevator e outras trocas de palavras.",
  ],
  [
    "Gírias e linguagem jovem",
    "Vocabulário",
    11,
    "Slang atual com contexto e o que evitar em contexto formal.",
  ],
  [
    "Humor, ironia e sarcasmo",
    "Leitura",
    12,
    "Entenda piadas, ironia e o que está nas entrelinhas.",
  ],
  [
    "Metáforas e linguagem figurada",
    "Leitura",
    12,
    "Catch-22, crossroads, uphill battle: pense em imagens.",
  ],
  [
    "Eufemismos e linguagem indireta",
    "Vocabulário",
    11,
    "Leia o que está sendo dito quando nada é dito diretamente.",
  ],
  [
    "Contando histórias: tempos narrativos",
    "Conversação",
    12,
    "Misture tempos e marcadores para criar suspense e ritmo.",
  ],
  [
    "Escrita criativa: descrição e ritmo",
    "Escrita",
    12,
    "Frases curtas e longas trabalhando juntas em uma cena.",
  ],
  [
    "Inglês técnico da sua área",
    "Vocabulário",
    12,
    "Construa e use seu vocabulário profissional com precisão.",
  ],
  [
    "Viagens avançadas: resolvendo imprevistos",
    "Conversação",
    12,
    "Voo cancelado, bagagem perdida, doença: resolva em inglês.",
  ],
  [
    "Proficiência: estratégias de speaking",
    "Conversação",
    13,
    "Estrutura, tempo e critérios para provas de fala.",
  ],
  [
    "Proficiência: estratégias de writing",
    "Escrita",
    13,
    "Planeje, escreva e revise textos de prova com método.",
  ],
  [
    "Maestria: fluência e naturalidade",
    "Conversação",
    14,
    "Rotina de prática para manter o inglês vivo e fluente.",
  ],
]

function build(rows: Row[], level: Level, prefix: string): LessonMeta[] {
  return rows.map((row, index) => ({
    id: `${prefix}${String(index + 1).padStart(2, "0")}`,
    level,
    order: index + 1,
    title: row[0],
    focus: row[1],
    minutes: row[2],
    summary: row[3],
  }))
}

export const CATALOG: LessonMeta[] = [
  ...build(INICIANTE, "iniciante", "b"),
  ...build(INTERMEDIARIO, "intermediario", "i"),
  ...build(AVANCADO, "avancado", "a"),
]

const BY_ID = new Map(CATALOG.map((lesson) => [lesson.id, lesson]))

export const lessonById = (id: string): LessonMeta | undefined => BY_ID.get(id)

export const lessonsByLevel = (level: Level): LessonMeta[] =>
  CATALOG.filter((lesson) => lesson.level === level)

export const isLevel = (value: string): value is Level =>
  value === "iniciante" || value === "intermediario" || value === "avancado"

export const TOTAL_LESSONS = CATALOG.length

export const TOTAL_MINUTES = CATALOG.reduce(
  (sum, lesson) => sum + lesson.minutes,
  0,
)

export const FOCUS_ICON: Record<Focus, string> = {
  Gramática: "🧩",
  Vocabulário: "🗂️",
  Conversação: "💬",
  Pronúncia: "🗣️",
  Escuta: "🎧",
  Leitura: "📖",
  Escrita: "✍️",
}
