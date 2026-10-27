/**
 * Registro do service worker (somente no navegador e somente em produção).
 *
 * O app é renderizado no servidor; sem este registro a tela de aviso offline
 * nunca apareceria. Em desenvolvimento nada é registrado, então o preview em
 * iframe permanece igual ao ambiente de produção sem service worker antigo.
 */
export function registerPwa() {
  if (typeof window === "undefined") return
  if (!import.meta.env.PROD) return
  if (!("serviceWorker" in navigator)) return

  const register = () => {
    void navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .catch(() => {
        // Registro é opcional: se falhar, o app segue funcionando online.
      })
  }

  if (document.readyState === "complete") {
    register()
    return
  }

  window.addEventListener("load", register, { once: true })
}
