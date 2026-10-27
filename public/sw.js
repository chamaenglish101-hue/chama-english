/**
 * Service worker do Chama English — versão estática do template.
 *
 * Guarda um único arquivo público: a tela de aviso (/offline.html). Nada de
 * resposta de API, HTML renderizado pelo servidor ou arquivos com hash do
 * build. Quando a rede falha em uma das telas listadas, o app mostra o aviso
 * amigável em vez do erro do navegador.
 *
 * Rotas de autenticação, /api e funções do servidor ficam fora do intercepto:
 * uma falha de API precisa aparecer como falha.
 */
const CACHE = "chama-english-offline-v1"

/**
 * As falas em inglês que o aluno já ouviu.
 *
 * A voz do app vem do próprio site. Guardando cada fala depois de tocar, a lição
 * seguinte continua funcionando mesmo com a internet oscilando — e o aluno nunca fica
 * sem ouvir a pronúncia certa no meio de um exercício.
 */
const AUDIO_CACHE = "chama-english-audio-v1"
const OFFLINE_URL = "/offline.html"

/** Telas do app que podem mostrar o aviso offline em vez de erro do navegador. */
const OFFLINE_PATHS = new Set([
  "/",
  "/licoes",
  "/estudar",
  "/quiz",
  "/configuracoes",
  "/assinatura",
])

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.add(new Request(OFFLINE_URL, { cache: "reload" })))
      .catch(() => undefined),
  )
})

self.addEventListener("activate", (event) => {
  // Remove somente as versões antigas deste cache; nada além disso é apagado.
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                key.startsWith("chama-english-") &&
                key !== CACHE &&
                key !== AUDIO_CACHE,
            )
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => undefined),
  )
})

self.addEventListener("fetch", (event) => {
  const { request } = event

  // Fala em inglês: toca da rede e fica guardada para a próxima vez.
  if (
    request.method === "GET" &&
    new URL(request.url).pathname.startsWith("/audio/")
  ) {
    event.respondWith(
      caches.open(AUDIO_CACHE).then(async (cache) => {
        const cached = await cache.match(request)
        if (cached) return cached
        const response = await fetch(request)
        if (response.ok) void cache.put(request, response.clone())
        return response
      }),
    )
    return
  }

  if (request.method !== "GET" || request.mode !== "navigate") return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  if (!OFFLINE_PATHS.has(url.pathname)) return

  event.respondWith(
    fetch(request).catch(async () => {
      const cached = await caches.match(OFFLINE_URL)
      return cached ?? Response.error()
    }),
  )
})
