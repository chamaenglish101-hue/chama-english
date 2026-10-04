# Publicar o Chama English na Galaxy Store

O app já está pronto para virar um pacote Android: tem manifest de instalação,
ícone, tela de aviso offline e funciona como app de tela cheia. O que falta é um
passo que **roda no seu computador**, não aqui: gerar o arquivo **AAB** com o
Android Studio. Esta plataforma constrói aplicações web; compilar um pacote
Android exige o kit de desenvolvimento do Google instalado na sua máquina.

Guia rápido, na ordem:

```
seu site  →  app Android (TWA) → arquivo .aab  →  Galaxy Store
```

## 0. Antes de começar: o app precisa estar publicado no seu domínio

O pacote Android é uma "casca" que abre o seu site. Se o site estiver só no
endereço de prévia, o app da loja vai abrir um endereço que não é seu.
Siga primeiro o `DOMINIO.md` (registrar o domínio, apontar para a Cloudflare e
publicar). Só depois gere o AAB — assim ele já nasce apontando para
`https://www.chamaenglish.com`.

## 1. Instale as ferramentas (uma vez)

- **Node.js** (versão LTS): [nodejs.org](https://nodejs.org)
- **Android Studio**: [developer.android.com/studio](https://developer.android.com/studio)
  — na instalação, aceite o **Android SDK** e o **JDK** que ele oferece.
- **JDK 17** (o Android Studio costuma trazer junto; se pedir, instale o
  [Temurin 17](https://adoptium.net)).

## 2. Gere o AAB com o Bubblewrap

O Bubblewrap é a ferramenta oficial do Google para transformar um site instalável
em app Android (a tecnologia se chama TWA — Trusted Web Activity).

```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://www.chamaenglish.com/manifest.json
```

Ele vai fazer algumas perguntas. Responda assim:

| Pergunta | O que responder |
| --- | --- |
| Domain | `www.chamaenglish.com` |
| Application name | `Chama English` |
| Short name | `Chama English` |
| Application ID | `com.chamaenglish.app` |
| Display mode | `standalone` |
| Status bar color | `#0B1220` |
| Splash screen color | `#0B1220` |
| Keystore | deixe criar um novo |

**Importante:** ele vai pedir uma senha para assinar o app. Anote essa senha e
guarde o arquivo `.keystore` em lugar seguro — sem eles você não consegue
publicar atualizações depois. Não coloque senha nem keystore no projeto.

Depois:

```bash
bubblewrap build
```

No fim, a pasta terá dois arquivos:

- `app-release-bundle.aab` → **é este que vai para a Galaxy Store**
- `app-release-signed.apk` → serve para você testar no seu celular antes

## 3. Teste no seu celular antes de publicar

Copie o `.apk` para o celular, instale (o Android vai pedir para permitir
instalação de fontes desconhecidas) e abra. Confira:

- o ícone aparece certo na tela inicial;
- abre em tela cheia, sem barra de navegador;
- login com Google funciona;
- as lições abrem e o progresso é salvo.

Se o app abrir mostrando a barra do navegador em cima, é porque a "Digital Asset
Links" não foi validada. A correção é publicar o arquivo gerado
`assetlinks.json` em `https://www.chamaenglish.com/.well-known/assetlinks.json`
(o Bubblewrap mostra o conteúdo exato no fim do `init`).

## 4. Crie a conta de vendedor na Galaxy Store

1. Acesse [seller.samsungapps.com](https://seller.samsungapps.com) e crie a
   conta de vendedor (Samsung Account).
2. Preencha os dados da conta e aceite o contrato de distribuição.
3. Verifique se a criação de apps está liberada para o Brasil — a Samsung libera
   isso por país, e a lista muda com o tempo. Se o país não aparecer, é preciso
   pedir liberação no suporte da Samsung antes de conseguir enviar.

A Galaxy Store não cobra a taxa anual de US$ 25 que a Play Store cobra, mas os
requisitos de revisão mudam com frequência — confira a página oficial de
distribuição antes de enviar.

## 5. Envie o app

Em **Seller Portal → Add New Application**:

- binário: `app-release-bundle.aab`
- nome: `Chama English`
- categoria: Educação
- idioma principal: Português (Brasil)
- descrição curta e longa: use os textos abaixo
- ícone da loja: `public/store-icon-512.png`, já pronto em 512×512 com fundo
  opaco e sem transparência
- capturas de tela: pelo menos 2, em celular (retrato)

### Textos prontos

**Nome:** Chama English — inglês para brasileiros

**Descrição curta (até 80 caracteres):**
Aprenda inglês do zero ao avançado com a Chama, em 130 lições curtas.

**Descrição completa:**
> O Chama English ensina inglês para brasileiros de um jeito direto: 130 lições
> curtas, com explicação em português, exemplos com tradução, vocabulário-chave e
> prática corrigida na hora.
>
> A Chama, a chama azul mascote, acompanha você do iniciante ao avançado. As 10
> primeiras lições iniciantes são gratuitas para sempre, com a aula completa.
> Para liberar as outras 130, a assinatura custa R$ 15 por mês no cartão — ou
> R$ 15 por 30 dias no boleto, sem renovação automática.
>
> - 130 lições com explicação, exemplos e prática corrigida
> - Vocabulário-chave e dica de fixação em cada lição
> - Seu progresso fica salvo no seu aparelho
> - Funciona instalado, como um app

**Política de privacidade:** use a página pública do seu domínio que descreva o
que o app guarda (progresso no aparelho; e-mail, se você entrar com o Google).
A loja exige esse endereço no cadastro.

## 6. Depois de publicado

- Cada melhoria no site **já aparece** no app instalado, sem reenviar nada para a
  loja — o app abre o seu site.
- Reenvie um AAB novo apenas quando mudar ícone, nome ou permissões.
- Guarde keystore + senha. Sem eles, uma atualização futura é impossível.

## Sobre pagamentos dentro do app

Uma observação importante para não perder tempo: a sua cobrança acontece no site
(Stripe), não dentro do app. Entregar o app como está é o caminho normal para
cursos, mas vale checar as regras da Galaxy Store para conteúdo digital assim que
você for enviar — se a revisão apontar algo, o ajuste costuma ser na descrição e
no fluxo de compra, não no app em si.
