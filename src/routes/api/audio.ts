import { createFileRoute } from "@tanstack/react-router"
import "@tanstack/react-start"
import {
  listVoices,
  readAudioIndex,
  recordingProgress,
} from "#/lib/english-audio.server.ts"

/**
 * Catálogo de vozes do app: quais vozes existem e a lista de tudo que já está
 * gravado.
 *
 * O áudio é gravado no servidor e servido pelo próprio site — o app não depende da
 * voz que o aparelho do aluno tem instalado. Este caminho só devolve os nomes dos
 * arquivos e o texto de cada fala; os mp3 ficam em `/audio/<voz>/<arquivo>.mp3` e são
 * baixados um a um, na hora de falar.
 */
export const Route = createFileRoute("/api/audio")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const voice = url.searchParams.get("voice") ?? ""
        const voices = listVoices()

        if (!voice) {
          // Sem voz: a tela de Configurações mostra quanto do curso já tem voz.
          return Response.json(
            { voices, progress: recordingProgress() },
            { headers: { "Cache-Control": "no-store" } },
          )
        }

        return Response.json(
          {
            voices,
            voice,
            progress: recordingProgress(voice),
            files: readAudioIndex(voice),
          },
          {
            headers: {
              // A lista só muda quando um novo lote de áudio é publicado.
              "Cache-Control": "public, max-age=3600",
            },
          },
        )
      },
    },
  },
})
