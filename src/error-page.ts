export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Esta página não carregou</title>
    <style>
      * { box-sizing: border-box; }
      html, body {
        margin: 0;
        min-height: 100vh;
        min-height: 100dvh;
      }
      body {
        display: grid;
        place-items: center;
        background: #0b1220;
        color: #f8fafc;
        font-family: "Manrope", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main {
        width: min(100% - 32px, 28rem);
        text-align: center;
      }
      .flame {
        font-size: 40px;
        line-height: 1;
      }
      h1 {
        margin: 16px 0 0;
        font-size: 22px;
        line-height: 1.25;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      p {
        margin: 8px 0 0;
        color: #94a3b8;
        font-size: 15px;
        line-height: 1.625;
      }
      .actions {
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
      }
      a, button {
        display: inline-flex;
        min-height: 44px;
        align-items: center;
        justify-content: center;
        border: 1px solid #334155;
        border-radius: 14px;
        padding: 10px 18px;
        color: #f8fafc;
        background: #131c2e;
        font: inherit;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
      }
      a:hover, button:hover { background: #1c2740; }
      button.primary {
        border-color: #38bdf8;
        background: #38bdf8;
        color: #07131f;
      }
      button.primary:hover { background: #7dd3fc; border-color: #7dd3fc; }
    </style>
  </head>
  <body>
    <main>
      <div class="flame" aria-hidden="true">🔥</div>
      <h1>Esta página não carregou</h1>
      <p>Algo impediu esta tela de aparecer. Tentar de novo costuma resolver.</p>
      <div class="actions">
        <button class="primary" type="button" onclick="window.location.reload()">Tentar de novo</button>
        <a href="/">Ir para o início</a>
      </div>
    </main>
  </body>
</html>`
}
