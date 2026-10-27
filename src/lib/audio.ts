/**
 * Spoken audio.
 *
 * Every English sentence, word and instruction is recorded on the server and served
 * from the site itself (`/audio/Cherry/…`), so the app sounds the same on a phone with
 * several English voices and on one with none. The device's own `speechSynthesis` is
 * never used to read English: it can fall back to a Portuguese voice, and it is also
 * what the microphone listener asks for (`en-US`).
 */

/** A voz deste app. O inglês sai da gravação do site — nunca do aparelho. */
const VOICE_ID = "Cherry"
const ENGLISH = "en-US"

interface SpeakOptions {
  /** Called once the recording ends, is cancelled, or fails to open. */
  onEnd?: () => void
  /** Tells the screen whether the line really came from the recorded voice. */
  onSource?: (source: "recorded" | "device") => void
}

/* -------------------------------------------------------- a voz gravada (servidor) */

/**
 * O catálogo de gravações: texto → arquivo. Vem uma vez por sessão da rota
 * `/api/audio` e é o que faz o app tocar a mesma voz em qualquer aparelho.
 */
let recordedByText = new Map<string, string>()
let recordedReady: Promise<void> | null = null

/** A voz gravada em uso — o mesmo nome de pasta que aparece em `/audio/<voz>/`. */
export function recordedVoiceName(): string {
  return VOICE_ID
}

/** Carrega o catálogo de gravações da Cherry (uma vez por sessão). */
export function loadRecordedAudio(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (recordedReady) return recordedReady

  recordedReady = fetch(`/api/audio?voice=${encodeURIComponent(VOICE_ID)}`)
    .then((response) => (response.ok ? response.json() : null))
    .then((payload: unknown) => {
      // A lista chega invertida, de texto para arquivo: é assim que a busca é feita
      // depois, uma vez por frase falada, e varrer o objeto a cada fala seria lento.
      const files =
        (payload as { files?: Record<string, string> } | null)?.files ?? {}
      recordedByText = new Map(
        Object.entries(files).map(([file, text]) => [text, file]),
      )
      const progress = (
        payload as { progress?: { ready: number; total: number } } | null
      )?.progress
      recordedProgress = progress ?? { ready: recordedByText.size, total: 0 }
    })
    .catch(() => {
      // Sem catálogo não há inglês para tocar; a tela mostra a frase escrita.
      recordedByText = new Map()
    })

  return recordedReady
}

/** Quanto do inglês falado já tem gravação e quanto ainda falta. */
let recordedProgress: { ready: number; total: number } | null = null

/** O progresso das gravações, para a tela ser honesta sobre o que já toca. */
export function recordingProgress(): { ready: number; total: number } | null {
  return recordedProgress
}

/** Quantas gravações esta voz tem, para a tela explicar o que já está pronto. */
export function recordedCount(): number {
  return recordedByText.size
}

/** O arquivo que diz exatamente este texto, quando ele já foi gravado. */
function recordedUrl(text: string): string | null {
  const key = recordedByText.get(text)
  return key ? `/audio/${VOICE_ID}/${key}.mp3` : null
}

/** A fala em curso, para poder interrompê-la ao sair da tela. */
let current: { stop: () => void } | null = null

/**
 * A linha falada por último: tocar de novo reaproveita o áudio já baixado.
 *
 * O iPhone, em especial, só deixa tocar som depois de um toque; criar um elemento
 * novo a cada repetição perdia essa permissão e a segunda vez ficava em silêncio.
 */
let audioElement: HTMLAudioElement | null = null
let loadedUrl = ""

/** Toca uma gravação do servidor; devolve false se o arquivo não abrir. */
function playRecorded(url: string, options: SpeakOptions): boolean {
  try {
    if (!audioElement) audioElement = new Audio()
    const audio = audioElement
    audio.preload = "auto"
    audio.loop = false

    // Um arquivo novo só quando a fala muda; repetir a mesma frase não recarrega.
    if (loadedUrl !== url) {
      audio.src = url
      audio.load()
      loadedUrl = url
    } else {
      audio.currentTime = 0
    }

    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      options.onEnd?.()
    }
    audio.onended = finish
    audio.onerror = () => {
      // Arquivo que não abre: a próxima tentativa recarrega em vez de insistir nele.
      loadedUrl = ""
      finish()
    }

    current = {
      stop: () => {
        finished = true
        audio.pause()
      },
    }
    options.onSource?.("recorded")
    void audio.play().catch(() => {
      // Navegador bloqueou o som: a tela mostra a frase escrita e avisa.
      finish()
    })
    return true
  } catch {
    return false
  }
}

/**
 * Speaks one piece of English text.
 *
 * The voice is always the Cherry recording served by this site: the reader hears the
 * same English on a phone, a tablet or a borrowed laptop, at the pace a learner can
 * follow. A line that has not been recorded yet is not spoken at all — the device voice
 * is never used, because it can sound like Portuguese reading English — and the caller
 * shows the sentence written out instead.
 *
 * Calling it again stops the previous line first: without that, tapping "Ouvir" twice
 * queues the sentence and the learner hears it twice over.
 */
export function speakEnglish(
  text: string,
  options: SpeakOptions = {},
): boolean {
  const line = text.trim()
  if (!line) {
    options.onEnd?.()
    return false
  }

  stopSpeaking()

  // A fala pode ter chegado antes do catálogo: o mapa só existe depois da primeira
  // resposta de `/api/audio`, então ele é conferido de novo a cada chamada.
  const url = recordedUrl(line)
  if (url && playRecorded(url, options)) return true

  // Ainda não há gravação desta linha: nada é falado, e a tela mostra o texto.
  options.onEnd?.()
  return false
}

/** Stops whatever is being spoken — used when leaving a question. */
export function stopSpeaking(): void {
  current?.stop()
  current = null
}

/**
 * Destrava o som no primeiro toque da pessoa.
 *
 * Navegadores de celular só liberam áudio depois de um gesto de verdade. Como o app
 * muitas vezes tenta tocar uma frase sozinho (a pergunta de escuta fala ao aparecer),
 * o som chegava bloqueado e o aluno ficava sem voz. Um toque em qualquer ponto libera
 * o elemento que o app usa para falar.
 */
export function unlockAudio(): void {
  if (typeof window === "undefined") return
  if (!audioElement) audioElement = new Audio()
  audioElement.muted = true
  void audioElement
    .play()
    .then(() => {
      audioElement?.pause()
      if (audioElement) audioElement.muted = false
    })
    .catch(() => {
      if (audioElement) audioElement.muted = false
    })
}

/* --------------------------------------------- pronunciation self-assessment */

export interface TranscriptMatch {
  /** 0–1: how much of the target sentence the learner actually said. */
  score: number
  /** The target word that was missed first, for a specific, actionable hint. */
  missed: string | null
  /** True when every target word was heard. */
  perfect: boolean
}

const FILLERS = new Set([
  "a",
  "an",
  "the",
  "to",
  "of",
  "is",
  "am",
  "are",
  "do",
  "does",
  "did",
  "you",
  "i",
  "we",
  "it",
  "'s",
  "s",
])

/** Normalises a word for comparison: lowercase, no punctuation, no accents. */
function normaliseWord(word: string): string {
  return word
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9']/g, "")
}

function words(text: string): string[] {
  return text.split(/\s+/).map(normaliseWord).filter(Boolean)
}

/**
 * Two words match when they are equal, or when one is the other plus a plural or
 * verb ending. Recognition engines drop endings all the time — "wants" comes back
 * as "want" — and failing a learner for that would be dishonest, not strict.
 */
function sameWord(target: string, said: string): boolean {
  if (target === said) return true
  if (!target || !said) return false
  const trim = (word: string, endings: string[]) => {
    for (const ending of endings) {
      if (word.endsWith(ending) && word.length - ending.length >= 3) {
        return word.slice(0, word.length - ending.length)
      }
    }
    return word
  }
  const endings = ["s", "es", "ed", "ing", "'s", "d"]
  return trim(target, endings) === trim(said, endings)
}

/**
 * Compares what the microphone heard with the sentence the lesson asked for.
 *
 * The engine's own confidence score is ignored on purpose: it varies wildly between
 * devices and would pass or fail the same pronunciation on two phones. Word overlap
 * is stable, explainable, and can point at the exact word to practise.
 *
 * Ordinary connecting words are forgiven — a learner who says "I like coffee" for
 * "I'd like a coffee" understood the sentence. Content words are not: those are what
 * the lesson is teaching.
 */
export function matchTranscript(
  target: string,
  heard: string,
): TranscriptMatch {
  const targetWords = words(target)
  const heardWords = words(heard)

  if (!targetWords.length) return { score: 0, missed: null, perfect: false }
  if (!heardWords.length) {
    return { score: 0, missed: targetWords[0], perfect: false }
  }

  const remaining = [...heardWords]
  const results = targetWords.map((word) => {
    const index = remaining.findIndex((candidate) => sameWord(word, candidate))
    if (index >= 0) {
      remaining.splice(index, 1)
      return { word, hit: true }
    }
    return { word, hit: false }
  })

  const misses = results.filter((result) => !result.hit)
  const scored = results.filter((result) => !FILLERS.has(result.word))
  const scoredHits = scored.filter((result) => result.hit)

  // A sentence made only of connecting words still has to be measured somehow.
  const total = scored.length || results.length
  const hits = scored.length
    ? scoredHits.length
    : results.length - misses.length
  // A skipped connecting word is forgiven: a recogniser that drops an unstressed "of"
  // is reporting its own limits, not the learner's pronunciation.
  const score = total ? hits / total : 0

  // Measured again with every word counted. The difference between the two scores is
  // what the forgiveness actually bought, and that is what gets capped: forgiving a
  // dropped unstressed word is fine, letting it carry half a sentence is not.
  const rawTotal = results.length
  const rawScore = rawTotal ? (rawTotal - misses.length) / rawTotal : 0
  const borrowed = score - rawScore
  const forgivenessBudget = Math.max(score - Math.max(rawScore, 0.6), 0)
  const capped = Math.min(
    score,
    rawScore + Math.min(borrowed, forgivenessBudget, 0.2),
  )

  const contentMisses = misses.filter((result) => !FILLERS.has(result.word))
  const firstMiss = contentMisses[0] ?? misses[0] ?? null

  return {
    score: capped,
    missed: firstMiss ? firstMiss.word : null,
    perfect: misses.length === 0,
  }
}

/** How a score reads on screen. */
export function scoreVerdict(score: number): "great" | "close" | "retry" {
  if (score >= 0.85) return "great"
  if (score >= 0.5) return "close"
  return "retry"
}

/* --------------------------------------------- microphone and speech input */

type RecognitionResult = {
  results: ArrayLike<ArrayLike<{ transcript: string }>>
}

interface Recognition {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  continuous: boolean
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((event: RecognitionResult) => void) | null
  onerror: ((event: { error: string }) => void) | null
  onend: (() => void) | null
}

type RecognitionConstructor = new () => Recognition

function recognitionConstructor(): RecognitionConstructor | null {
  if (typeof window === "undefined") return null
  const scope = window as unknown as {
    SpeechRecognition?: RecognitionConstructor
    webkitSpeechRecognition?: RecognitionConstructor
  }
  return scope.SpeechRecognition ?? scope.webkitSpeechRecognition ?? null
}

/** Whether this device can listen at all. */
export function speechInputSupported(): boolean {
  return recognitionConstructor() !== null
}

export interface ListenOptions {
  /** Called with the best transcript once the learner stops talking. */
  onResult: (transcript: string) => void
  /** Called with a readable Portuguese explanation when nothing arrived. */
  onError: (reason: "denied" | "unsupported" | "no-speech" | "failed") => void
  /** Longest the microphone stays open, in ms. */
  timeoutMs?: number
}

export interface Listening {
  stop: () => void
  abort: () => void
}

/**
 * Opens the microphone for one sentence.
 *
 * Listening is always started by a tap and always ends on silence or on the timeout,
 * because a microphone that stays open without a visible record is exactly the kind
 * of surprise a learner should never get. Every exit path reports exactly once, so
 * the caller can always show "tente de novo" instead of a spinner that never stops.
 */
export function listenOnce(options: ListenOptions): Listening | null {
  const Constructor = recognitionConstructor()
  if (!Constructor) {
    options.onError("unsupported")
    return null
  }

  let settled = false
  const finish = (run: () => void) => {
    if (settled) return
    settled = true
    window.clearTimeout(timeout)
    run()
  }

  const recognition = new Constructor()
  recognition.lang = ENGLISH
  recognition.interimResults = false
  recognition.continuous = false
  recognition.maxAlternatives = 1

  const timeout = window.setTimeout(() => {
    finish(() => {
      try {
        recognition.stop()
      } catch {
        /* already closed */
      }
      options.onError("no-speech")
    })
  }, options.timeoutMs ?? 8000)

  recognition.onresult = (event) => {
    const first = event.results?.[0]?.[0]
    const transcript = first?.transcript?.trim() ?? ""
    if (!transcript) {
      finish(() => options.onError("no-speech"))
      return
    }
    finish(() => options.onResult(transcript))
  }

  recognition.onerror = (event) => {
    const denied =
      event.error === "not-allowed" || event.error === "service-not-allowed"
    const silent = event.error === "no-speech" || event.error === "aborted"
    finish(() =>
      options.onError(denied ? "denied" : silent ? "no-speech" : "failed"),
    )
  }

  // Some browsers end the session without a result; that must not hang the screen.
  recognition.onend = () => finish(() => options.onError("no-speech"))

  try {
    recognition.start()
  } catch {
    finish(() => options.onError("failed"))
    return null
  }

  return {
    stop: () => {
      try {
        recognition.stop()
      } catch {
        /* already closed */
      }
    },
    abort: () => {
      settled = true
      window.clearTimeout(timeout)
      try {
        recognition.abort()
      } catch {
        /* already closed */
      }
    },
  }
}

/** Portuguese messages for every way listening can fail. */
export const LISTEN_ERRORS: Record<
  "denied" | "unsupported" | "no-speech" | "failed",
  string
> = {
  denied:
    "O navegador não deixou usar o microfone. Você pode liberar nas permissões do site ou pular esta pergunta.",
  unsupported:
    "Este navegador não ouve pelo microfone. Pule esta pergunta: o resto da lição funciona normalmente.",
  "no-speech":
    "Não ouvimos nada. Aproxime-se do microfone e tente de novo, ou pule esta pergunta.",
  failed: "Algo deu errado ao ouvir. Tente de novo ou pule esta pergunta.",
}

/* ------------------------------------------------------ as vozes que o site oferece */

/** O que o app fala fora das lições: as instruções dos exercícios. */
export const SPOKEN_VOICE_LABEL = "Cherry · inglês americano"
