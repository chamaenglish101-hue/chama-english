import { SPOKEN_TOTAL, SPOKEN_VOICE_CATALOG } from "#/data/spoken-voices.ts"

/**
 * O áudio em inglês gravado no servidor.
 *
 * Cada voz publicada tem uma pasta em `public/audio/<nome>/`: um mp3 por fala, mais um
 * `index.json` com o nome do arquivo de cada texto. O catálogo é reunido no build em
 * `src/data/spoken-voices.ts`, porque o app roda empacotado e não enxerga a pasta do
 * projeto em tempo de execução.
 *
 * Só os nomes dos arquivos chegam ao navegador. Os mp3 ficam em `public/audio/` e o
 * aluno baixa apenas o que ouvir.
 */

export interface SpokenVoice {
  /** Nome da pasta, usado na URL: `/audio/<id>/…`. */
  id: string
  /** Como a voz aparece na tela. */
  label: string
  /** Sotaque, em uma palavra, para a etiqueta. */
  accent: string
}

/** As vozes realmente publicadas. */
export function listVoices(): SpokenVoice[] {
  return SPOKEN_VOICE_CATALOG.map(({ id, label, accent }) => ({
    id,
    label,
    accent,
  }))
}

/** O índice de uma voz: `{ arquivo: texto }`. Vazio quando ela não existe. */
export function readAudioIndex(voice: string): Record<string, string> {
  const found = SPOKEN_VOICE_CATALOG.find((entry) => entry.id === voice)
  return found ? found.files : {}
}

/**
 * Quanto do inglês falado já tem gravação.
 *
 * A voz é publicada em lotes, então esta conta é o que permite à tela ser honesta:
 * em vez de prometer uma cobertura que não existe, ela mostra quantas falas já estão
 * prontas e quantas faltam.
 */
export function recordingProgress(voice = "Cherry"): {
  ready: number
  total: number
} {
  const found = SPOKEN_VOICE_CATALOG.find((entry) => entry.id === voice)
  return {
    ready: found ? Object.keys(found.files).length : 0,
    total: SPOKEN_TOTAL,
  }
}
