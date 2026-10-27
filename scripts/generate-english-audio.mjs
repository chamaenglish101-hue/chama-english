/**
 * Gera o áudio em inglês do Chama English — a voz que lê tudo.
 *
 * O app não depende mais da voz que o aparelho do aluno tem instalado: todo texto
 * falado (palavra, frase, prompt de exercício, trecho de história) vira um arquivo
 * gerado aqui, uma única vez, e servido pelo próprio site.
 *
 * Como rodar, a partir da raiz do projeto:
 *
 *   node scripts/generate-english-audio.mjs --cover-words
 *
 * A Cherry é a única voz do app: cada fala vira um arquivo em `public/audio/Cherry/`,
 * com o índice ao lado. Rodar de novo só gera o que falta.
 */

import { spawn } from "node:child_process"
import { createHash } from "node:crypto"
import { existsSync } from "node:fs"
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const OUT_ROOT = path.join(ROOT, "public", "audio")
const MANIFEST_PATH = path.join(ROOT, "src", "data", "spoken-voices.ts")
/**
 * Os arquivos de trabalho e o placar da gravação ficam FORA da pasta do projeto.
 *
 * Enquanto `public/audio/<voz>/` é lido pelo site, tudo o que o gerador escreve aqui
 * é só rascunho. Deixando fora do projeto, o servidor de desenvolvimento não vê
 * mudança nenhuma enquanto a voz é gravada — e o aluno não vê a prévia piscar.
 */
const TMP = path.join(os.tmpdir(), "chama-english-tts")
const STATE_DIR = path.join(os.tmpdir(), "chama-english-audio")

/* ------------------------------------------------------------------ argumentos */

const args = process.argv.slice(2)
const flag = (name) => args.includes(name)
const value = (name, fallback) => {
  const index = args.indexOf(name)
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback
}

/** A única voz do app. */
const VOICE = "Cherry"
const LIMIT = Number(value("--limit", "0"))
const COVER_WORDS = flag("--cover-words")
const MAX_WORDS = Number(value("--max-words", "1500"))
/** De quantas em quantas falas o que já ficou pronto é publicado no site. */
const BATCH = Number(value("--batch", "200"))

/* --------------------------------------------------------------- serviço de voz */

const REACTUS = process.env.REACTUS_BASE_URL
const API_KEY = process.env.BTY_LLM_SERVER_API_KEY
const PROJECT_ID = process.env.HAPPYSEEDS_PROJECT_ID

if (!REACTUS || !API_KEY || !PROJECT_ID) {
  console.error(
    "[erro] faltam REACTUS_BASE_URL / BTY_LLM_SERVER_API_KEY / HAPPYSEEDS_PROJECT_ID",
  )
  process.exit(1)
}

/** Texto pronto para falar: sem reticências, travessões ou aspas “inteligentes”. */
function cleanText(text) {
  return String(text)
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2026/g, "...")
    .replace(/[\u2013\u2014]/g, ", ")
    .replace(/\s+/g, " ")
    .trim()
}

/** Nome do arquivo: estável, seguro na URL e sem depender do texto original. */
function fileName(text) {
  return createHash("sha1")
    .update(`${VOICE}\u0000${text}`)
    .digest("hex")
    .slice(0, 20)
}

/* ------------------------------------------------------------------ o catálogo */

/**
 * Lê os módulos de conteúdo do projeto com um carregador mínimo.
 *
 * O código compilado vai para `__happyseeds_web__/tts/modules`, reescrevendo os
 * imports do projeto (`#/...` e `./types.ts`) para caminhos reais — assim o Node
 * resolve as histórias e as lições sem precisar do bundler.
 */
let tsLoader = null
async function loadTs(relativePath) {
  if (!tsLoader) {
    const ts = await import("typescript")
    tsLoader = ts.default ?? ts
  }
  const file = path.join(ROOT, relativePath)
  const source = await readFile(file, "utf8")
  const dir = path.join(TMP, "modules")
  await mkdir(dir, { recursive: true })

  const rewritten = source
    .replace(/from "#\//g, `from "${ROOT}/src/`)
    .replace(/from "(\.[^"]+)\.ts"/g, `from "${dir}/$1.mjs"`)
    .replace(/from "(\.[^"]+)"/g, `from "${dir}/$1.mjs"`)

  const js = tsLoader.transpileModule(rewritten, {
    compilerOptions: {
      module: tsLoader.ModuleKind.ESNext,
      target: tsLoader.ScriptTarget.ES2022,
    },
    fileName: file,
  }).outputText

  const outPath = path.join(
    dir,
    `${path.basename(relativePath).replace(/\.ts$/, ".mjs")}`,
  )
  await writeFile(outPath, js)
  const mod = await import(`${outPath}?v=${Date.now()}`)
  return mod
}

async function collectSentences() {
  const texts = new Set()
  const words = new Set()
  /*
   * A ordem de gravação importa: quem começa o curso encontra primeiro as perguntas
   * das lições b. Uma rodada interrompida pela cota não pode deixar justamente o
   * início sem voz, então o áudio dos exercícios vai na frente.
   */
  const practiceTexts = new Set()

  /* Instruções que o app fala para conduzir os exercícios. */
  const prompts = await loadTs("src/lib/audio-prompts.ts")
  for (const phrase of Object.values(prompts.AUDIO_PROMPTS)) texts.add(phrase)

  /* Exercícios de todas as lições. */
  const practiceDir = path.join(ROOT, "src/data/practice")
  const practiceFiles = (await readdir(practiceDir))
    .filter(
      (name) =>
        name.endsWith(".ts") &&
        name !== "index.ts" &&
        name !== "practice.test.ts",
    )
    // Primeiro as lições b, depois i, depois a: a ordem do curso.
    .sort()
  for (const name of practiceFiles) {
    const mod = await loadTs(`src/data/practice/${name}`)
    const lesson = Object.values(mod).find((entry) => entry?.exercises)
    if (!lesson) continue
    for (const exercise of lesson.exercises) {
      if (typeof exercise.audio === "string") practiceTexts.add(exercise.audio)
      // "falar" é pronúncia: o texto é a própria frase, sem a dica em português.
      if (exercise.kind === "falar" && typeof exercise.prompt === "string") {
        practiceTexts.add(exercise.prompt)
      }
      if (
        exercise.kind === "escutar" &&
        typeof exercise.audio !== "string" &&
        typeof exercise.prompt === "string"
      ) {
        practiceTexts.add(exercise.prompt)
      }
    }
  }

  /* Exemplos, vocabulário e palavras-chave das lições escritas. */
  const lessonDir = path.join(ROOT, "src/data/lessons")
  const lessonFiles = (await readdir(lessonDir)).filter(
    (name) =>
      name.endsWith(".ts") && name !== "index.ts" && name !== "types.ts",
  )
  for (const name of lessonFiles) {
    const mod = await loadTs(`src/data/lessons/${name}`)
    for (const lesson of Object.values(mod)) {
      if (!Array.isArray(lesson)) continue
      for (const item of lesson) {
        for (const example of item.examples ?? [])
          if (example.en) texts.add(example.en)
        for (const entry of item.vocab ?? []) if (entry.en) words.add(entry.en)
      }
    }
  }

  /* Histórias: frases e as palavras que o painel de dicionário pronuncia. */
  const storiesMod = await loadTs("src/data/stories/index.ts")
  for (const story of storiesMod.STORIES) {
    if (story.tagline) texts.add(story.tagline)
    for (const paragraph of story.paragraphs) texts.add(paragraph)
    for (const entry of story.glossary) if (entry.word) words.add(entry.word)
  }

  return { texts: [...practiceTexts, ...texts], words }
}

/* ------------------------------------------------------------------ a geração */

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function run(command, commandArgs) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, commandArgs, {
      stdio: ["ignore", "pipe", "pipe"],
    })
    let out = ""
    let err = ""
    child.stdout.on("data", (chunk) => (out += chunk))
    child.stderr.on("data", (chunk) => (err += chunk))
    child.on("error", reject)
    child.on("close", (code) =>
      code === 0 ? resolve(out) : reject(new Error(err || `exit ${code}`)),
    )
  })
}

/** Uma frase → mp3. Precisa da voz gerada pelo servidor e do codificador local. */
async function generateOne(text) {
  const bodyPath = path.join(TMP, `body-${process.pid}.json`)
  const ssePath = path.join(TMP, `sse-${process.pid}.sse`)
  const jsonPath = path.join(TMP, `out-${process.pid}.json`)

  await writeFile(
    bodyPath,
    JSON.stringify({
      model: "qwen3-tts-flash",
      input: { text, voice: VOICE, language_type: "English" },
    }),
  )

  await run("curl", [
    "-sS",
    "-N",
    "-X",
    "POST",
    `${REACTUS}/v1/llm_server/sse`,
    "-H",
    `x-api-key: ${API_KEY}`,
    "-H",
    `x-bty-app: ${PROJECT_ID}`,
    "-H",
    "x-bty-model: qwen3-tts-flash",
    "-H",
    "Content-Type: application/json",
    "-d",
    `@${bodyPath}`,
    "-o",
    ssePath,
  ])

  await run("python3", [
    path.join(
      "/home/ubuntu/workspace/.agent/skills/llm-server/references/parse-llm-server-sse.py",
    ),
    ssePath,
    jsonPath,
  ])

  const payload = JSON.parse(await readFile(jsonPath, "utf8"))
  const url = payload?.output?.audio?.url
  if (!url) throw new Error("resposta sem url de áudio")

  const wavPath = path.join(TMP, `audio-${process.pid}.wav`)
  const mp3Path = path.join(TMP, `audio-${process.pid}.mp3`)
  await run("curl", ["-sS", url, "-o", wavPath])
  await run("python3", [
    path.join(ROOT, "scripts", "wav-to-mp3.py"),
    wavPath,
    mp3Path,
  ])
  return readFile(mp3Path)
}

/* --------------------------------------------------------------------- o fluxo */

/**
 * Escreve o manifesto que o site usa em produção.
 *
 * O app roda empacotado: em produção ele não enxerga a pasta do projeto, só o que
 * foi compilado junto. Por isso o catálogo é reunido aqui, em um arquivo TypeScript
 * pequeno e importável — os mp3 continuam fora do pacote, em `public/audio/`.
 */
/**
 * Textos das falas desta rodada, por nome de arquivo.
 *
 * O índice do projeto só é reescrito quando muda, então uma rodada retomada pode
 * encontrar mp3 gravados por uma execução anterior que ainda não estão nele.
 */
const textsByFile = new Map()

/** O tamanho do curso na última rodada: o site conta as falas prontas por ele. */
let knownTotal = 0

function withMissingText(index) {
  const merged = {}
  for (const [file, text] of Object.entries(index)) merged[file] = text
  for (const [file, text] of textsByFile) {
    if (!merged[file] && text) merged[file] = text
  }
  return merged
}

async function writeManifest(total) {
  const voices = []
  for (const entry of await readdir(OUT_ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const raw = await readFile(
      path.join(OUT_ROOT, entry.name, "index.json"),
      "utf8",
    ).catch(() => null)
    if (!raw) continue
    const index = JSON.parse(raw)
    if (!Object.keys(index).length) continue
    voices.push({
      id: entry.name,
      label: entry.name,
      accent: "americano",
      files: withMissingText(index),
    })
  }
  voices.sort((a, b) => a.id.localeCompare(b.id))

  // Uma fala só entra no catálogo com o mp3 dela publicado: um item apontando para
  // um arquivo que falta faria a lição pedir em silêncio um áudio que não existe.
  const playable = voices.map((voice) => ({
    ...voice,
    files: Object.fromEntries(
      Object.entries(voice.files).filter(([file]) =>
        existsSync(path.join(OUT_ROOT, voice.id, `${file}.mp3`)),
      ),
    ),
  }))

  // Um índice lido do projeto não é reescrito, então uma rodada que só retomou
  // gravações antigas deixaria o catálogo para trás: ele é montado a partir dos mp3.
  if (!voices.length)
    voices.push({ id: VOICE, label: VOICE, accent: "americano", files: {} })
  const onDisk = await readdir(path.join(OUT_ROOT, VOICE)).catch(() => [])
  for (const file of onDisk) {
    if (!file.endsWith(".mp3")) continue
    const key = file.slice(0, -4)
    const voice = voices.find((entry) => entry.id === VOICE)
    if (voice && !voice.files[key])
      voice.files[key] = textsByFile.get(key) ?? ""
  }

  const body = `/**
 * GERADO AUTOMATICAMENTE por scripts/generate-english-audio.mjs — não edite na mão.
 *
 * O catálogo das vozes gravadas deste app: para cada voz, o nome do arquivo de cada
 * fala. É isto que permite ao site tocar inglês de verdade em qualquer aparelho, sem
 * depender da voz que o aluno tem instalado.
 *
 * Só os nomes dos arquivos e o texto de cada fala entram aqui. Os mp3 continuam
 * fora do pacote, em \`public/audio/<voz>/\`, e são baixados um a um, na hora de falar.
 */

export interface SpokenVoiceCatalog {
  id: string
  label: string
  accent: string
  files: Record<string, string>
}

/** Quantas falas o curso inteiro tem — o denominador do "já tem voz". */
export const SPOKEN_TOTAL = ${Math.max(total, knownTotal)}

export const SPOKEN_VOICE_CATALOG: SpokenVoiceCatalog[] = ${JSON.stringify(playable, null, 2)}
`
  const current = await readFile(MANIFEST_PATH, "utf8").catch(() => "")
  if (current !== body) await writeFile(MANIFEST_PATH, body)
  console.log(
    `[ok] manifesto: ${playable.length} voz(es) em src/data/spoken-voices.ts`,
  )
}

async function main() {
  await mkdir(TMP, { recursive: true })
  const outDir = path.join(OUT_ROOT, VOICE)
  await mkdir(outDir, { recursive: true })

  console.log(`[info] voz ${VOICE}: lendo o catálogo…`)
  const { texts, words } = await collectSentences()

  const spoken = [...texts].map(cleanText).filter(Boolean)
  const extras = COVER_WORDS
    ? [...words]
        .map((word) => cleanText(word))
        .filter(
          (word) =>
            word && !word.includes(" / ") && word.split(/\s+/).length <= 4,
        )
        .slice(0, MAX_WORDS)
    : []

  const all = [...new Set([...spoken, ...extras])]
  knownTotal = Math.max(knownTotal, all.length)
  for (const text of all) textsByFile.set(fileName(text), text)
  console.log(
    `[info] ${spoken.length} frases + ${extras.length} palavras/extras → ${all.length} áudios únicos`,
  )

  const indexPath = path.join(outDir, "index.json")
  let index = {}
  if (existsSync(indexPath))
    index = JSON.parse(await readFile(indexPath, "utf8"))

  /* ---------------------------------------------------------- o que já está pronto */

  /*
   * A lista de falas é comparada com o índice que já existe ANTES de qualquer
   * gravação. O índice só é reescrito quando o conteúdo muda de verdade: assim uma
   * execução retomada — em que a maioria das falas já está pronta — não mexe em
   * nenhum arquivo do projeto e o site aberto continua no ar, sem recarregar.
   */
  const indexBefore = JSON.stringify(index)

  const pending = all.filter((text) => {
    const key = fileName(text)
    return !index[key] && !existsSync(path.join(outDir, `${key}.mp3`))
  })

  console.log(
    `[info] ${all.length - pending.length} falas já prontas, ${pending.length} a gravar`,
  )

  // Retomada longa: o placar fica fora do projeto, para não acordar o site.
  const statePath = path.join(STATE_DIR, `${VOICE}.json`)
  await mkdir(STATE_DIR, { recursive: true })
  await writeFile(
    statePath,
    JSON.stringify({ voice: VOICE, total: all.length, done: 0 }),
  )

  let done = 0
  let failed = 0

  /** Publica o ponto atual: só aqui um arquivo lido pelo site é reescrito. */
  async function checkpoint() {
    await mkdir(outDir, { recursive: true })
    await writeFile(indexPath, JSON.stringify(index))
    await writeFile(
      statePath,
      JSON.stringify({ voice: VOICE, total: all.length, done }),
    )
  }

  /** A cota do dia acabou: insistir só gasta tempo, então a rodada para. */
  let quotaGone = false

  for (const text of pending) {
    if (quotaGone) break
    const key = fileName(text)
    try {
      const bytes = await generateOne(text)
      await mkdir(outDir, { recursive: true })
      await writeFile(path.join(outDir, `${key}.mp3`), bytes)
      index[key] = text
      textsByFile.set(key, text)
      done += 1
      if (done % BATCH === 0) {
        await checkpoint()
        console.log(`[info] ${done} gerados, último: ${text.slice(0, 60)}`)
      }
    } catch (error) {
      failed += 1
      console.error(`[erro] ${text.slice(0, 60)} → ${error.message}`)
      if (/quota|402|insufficient/i.test(error.message)) {
        quotaGone = true
        console.error(
          "[aviso] cota do provedor esgotada: a rodada para e o que já existe é publicado",
        )
      }
      await sleep(700)
    }
    await sleep(60)
    if (LIMIT && done >= LIMIT) break
  }

  // Ponto final: escreve só o que mudou. Sem mudança, nenhum arquivo é tocado.
  if (JSON.stringify(index) !== indexBefore) await checkpoint()

  // O manifesto é conferido pelo conteúdo, não pela data: gravações antigas que
  // só agora entraram no índice também precisam chegar ao site.
  await writeManifest(all.length)

  console.log(
    `[ok] voz ${VOICE}: ${done} novos, ${failed} falhas, ${Object.keys(index).length} no total · ${all.length - pending.length + done} de ${all.length} falas prontas`,
  )
}

await main()
