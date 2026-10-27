# Usar o domínio www.chamaenglish.com

O app hoje é servido pela hospedagem da HappySeeds e já se adapta sozinho ao
endereço por onde chega: os links de retorno do pagamento e do login sempre usam
o domínio da própria visita. Ou seja, **não é preciso mudar código** — é preciso
apontar o domínio novo para o app e avisar o Stripe e o Google.

Siga na ordem. Cada bloco só faz sentido depois do anterior.

## 1. Registrar o domínio

No [Registro.br](https://registro.br) (para `.com.br`) ou em um registrador
internacional (para `.com`), registre `chamaenglish.com`. O `.com` costuma ficar
em torno de US$ 10–15 por ano; o `.com.br`, cerca de R$ 40 por ano.

## 2. Colocar o domínio na Cloudflare

1. Crie uma conta em [dash.cloudflare.com](https://dash.cloudflare.com) (plano
   gratuito basta).
2. "Add a site" → digite `chamaenglish.com` → escolha o plano **Free**.
3. A Cloudflare vai mostrar **dois nameservers** (algo como
   `ana.ns.cloudflare.com` e `bob.ns.cloudflare.com`). Copie os dois.
4. No painel do registrador, troque os nameservers do domínio por esses dois.
   A propagação leva de minutos a algumas horas.

## 3. Publicar o app no seu domínio

O endereço atual do app é servido pela hospedagem da HappySeeds, e o painel dela
não está disponível para conectar um domínio próprio. Então, para o
`www.chamaenglish.com` abrir o app, o caminho é publicar o projeto na **sua**
conta Cloudflare:

1. Instale o Wrangler (a ferramenta da Cloudflare) na sua máquina.
2. Faça login: `npx wrangler login`.
3. Na pasta do projeto: `npx wrangler deploy`.
4. Os segredos do app (banco de dados, Stripe, etc.) são cadastrados com
   `npx wrangler secret put NOME_DO_SEGREDO` — nunca ficam no código.
5. No painel da Cloudflare, em **Workers & Pages → o seu Worker → Settings →
   Domains & Routes**, adicione o domínio `www.chamaenglish.com` (e também
   `chamaenglish.com`, redirecionando para o `www`).

Enquanto isso não for feito, o app continua funcionando no endereço atual.

## 4. Avisar o Stripe (obrigatório para o pagamento)

O Stripe precisa saber o endereço novo, senão o site de pagamento não devolve a
pessoa para o lugar certo depois de pagar.

Em **Stripe → Developers → Webhooks**, abra o endpoint que recebe os eventos e:

- troque a URL para `https://www.chamaenglish.com/api/stripe/webhook`;
- confira se os eventos abaixo estão marcados:
  - `checkout.session.completed`
  - `checkout.session.async_payment_succeeded` (é o aviso de que o Pix foi pago)
  - `customer.subscription.created` / `.updated` / `.deleted`
  - `invoice.paid`
  - `invoice.payment_failed`

Depois de salvar, o Stripe mostra um novo **Signing secret** (`whsec_...`). Esse
valor é um segredo: guarde-o como `STRIPE_WEBHOOK_SECRET` do novo ambiente, junto
com a chave secreta do Stripe (`STRIPE_SECRET_KEY`).

Se a sua conta Stripe ainda estiver em modo de teste, o pagamento continua sendo
de teste até você concluir a ativação da conta no painel do Stripe.

## 5. Avisar o Google (login)

Em [console.cloud.google.com](https://console.cloud.google.com) → **APIs e
serviços → Credenciais → OAuth 2.0 Client IDs**, adicione:

- Origens JavaScript autorizadas: `https://www.chamaenglish.com`
- URIs de redirecionamento autorizados: `https://www.chamaenglish.com/login/callback`

Sem isso, o login com Google recusa a volta para o domínio novo.

## 6. E-mail no seu domínio (opcional)

Hoje os e-mails do app saem como `chamaenglish101@gmail.com`. Para enviar de
`contato@chamaenglish.com`, o domínio precisa ter DNS ativo (passos 1 e 2) e o
domínio precisa ser verificado no serviço de e-mail. A chave de envio atual
ainda não tem permissão de enviar, então isso fica pendente até você liberar.

## 7. Pix

### Por que o Pix ainda não aparece para o aluno

Hoje o app roda com uma **chave de teste** do Stripe (`sk_test_…`). Isso tem duas
consequências que não dependem de código nenhum:

1. **A conta de teste não permite Pix de verdade.** No painel do próprio Stripe, a
   conta aparece com `charges_enabled: false` e sem a capacidade `pix_payments`
   ativa. Uma conta de teste nunca vai cobrar Pix real.
2. **O QR Code de teste é simulado.** Ele existe e aparece na tela, mas o código
   copia-e-cola é um texto de exemplo (`123456789br.gov.bcb.pix…`), não um código
   EMV de verdade — nenhum app de banco consegue pagar. Clicar em "pagar" ali é a
   experiência de "simular compra" que ninguém deve ver.

Por isso **o app se recusa a oferecer Pix enquanto a chave for de teste**: ele
detecta o prefixo `sk_test_` e nem chega a criar a cobrança. É uma trava de
segurança, não um recurso faltando.

### Como o Pix liga de verdade

Nesta ordem, sem pular etapa:

1. **Conclua a ativação da conta Stripe.** No painel: *Ativar conta*, dados da
   empresa/pessoa, conta bancária. É a ativação que tira a conta do modo de teste.
2. **Ative o Pix.** Painel do Stripe → **Configurações → Métodos de pagamento** →
   habilite **Pix**. Essa chave é do dono da conta; a API não consegue ligar.
   Se o Pix aparecer bloqueado, é porque a Stripe pede histórico de cobrança
   antes de liberar — o cartão e o boleto contam para esse histórico.
3. **Troque as chaves que o app usa.** As chaves de produção começam com `sk_live_`
   e `pk_live_`. Publique-as como segredos no ambiente de produção
   (`STRIPE_SECRET_KEY` e `STRIPE_PUBLISHABLE_KEY`).
4. **Recrie o webhook em modo de produção.** O webhook de teste não recebe eventos
   de produção. Em **Developers → Webhooks**, crie um endpoint novo para
   `https://www.chamaenglish.com/api/stripe/webhook` com os mesmos eventos:
   `checkout.session.completed`, `checkout.session.async_payment_succeeded`,
   `customer.subscription.created/.updated/.deleted`, `invoice.paid`,
   `invoice.payment_failed`.
5. **Atualize o `STRIPE_WEBHOOK_SECRET`** com o novo `whsec_…` que o Stripe mostrar.

Feito isso, o app passa a oferecer Pix sozinho, **sem nenhuma mudança de código**:
a detecção do prefixo `sk_test_` deixa de valer e o Pix entra na frente do boleto.

Enquanto o passo 2 não for feito, o app continua oferecendo **boleto**: mesmo preço
(R$ 15), mesmos 30 dias de acesso, também sem renovação automática.

### O que já está garantido no código

- O QR Code é sempre gerado pela Stripe no checkout hospedado — o app nunca
  desenha um QR próprio.
- O acesso só é liberado pelo webhook assinado da Stripe, com
  `payment_status == "paid"`. Pix não pago, cancelado ou expirado não libera nada.
- Recarregar a página depois de iniciar o pagamento não libera nada.

