# NextWave — Site Institucional

> Site institucional da **NextWave** com foco no ecossistema **ServOS**.
> Estética dark premium, IA neural animada e deploy estático em HostGator.

🌐 **Produção:** https://www.nextw.com.br
📍 Americana / SP — Brasil
📞 WhatsApp: (19) 99124-0130 · ✉️ contato@nextw.com.br

---

## ✨ Highlights

- **Design dark premium** inspirado em Apple / Vercel / Linear
- **Cérebro neural animado** com seletor **Biológica ↔ Digital** (canvas + IA visualizada)
- **NextWave** orquestra o ecossistema **ServOS** (hierarquia explícita no UI)
- **Performance**: code-splitting, lazy loading, preload, gzip/brotli, splash inline
- **SEO completo**: meta tags, Open Graph, Twitter Card, JSON-LD, sitemap, robots
- **Acessibilidade**: skip-link, focus visível, ARIA, prefers-reduced-motion
- **Segurança**: CSP, HSTS, X-Frame-Options, Permissions-Policy
- **Deploy direto no HostGator Plano M** sem backend

---

## 🚀 Stack

| Camada       | Tecnologia                                |
| ------------ | ----------------------------------------- |
| Build        | Vite 5 (ESM, target es2020)               |
| UI           | React 18, Tailwind 3                      |
| Animação     | Framer Motion 11                          |
| Ícones       | Lucide React                              |
| Fonte única  | `src/config.js`                           |

---

## 📁 Estrutura

```
.
├── index.html              # SEO + splash inline + JSON-LD
├── public/
│   ├── .htaccess           # SPA + cache + gzip/brotli + CSP
│   ├── 3.webp              # Logo NextWave
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── postbuild.mjs       # Copia .htaccess/robots/sitemap para dist/
├── src/
│   ├── config.js           # Dados centralizados (telefone, email, etc.)
│   ├── App.jsx             # Composição + lazy sections + ErrorBoundary
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── Navigation.jsx          # Glass + scroll spy + drawer mobile
│   │   ├── ScrollProgress.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── NeuralBiological.jsx    # Cérebro com dendritos + sinapses
│   │   ├── NeuralDigital.jsx       # Cérebro com hex grid + circuitos
│   │   └── NeuralSelector.jsx      # Toggle entre Biológica / Digital
│   └── sections/
│       ├── Hero.jsx                # Partículas + CTAs + logo
│       ├── Numeros.jsx             # Contadores animados
│       ├── Ecossistema.jsx         # Diagrama NextWave (centro) + 6 módulos
│       ├── Produtos.jsx            # Grid 6 produtos
│       ├── AutomacaoIA.jsx         # Seção IA com NeuralSelector
│       ├── TechStack.jsx           # 12 tecnologias
│       ├── Depoimentos.jsx
│       ├── Contato.jsx             # Formulário → WhatsApp + info cards
│       └── Footer.jsx
├── contexto_ia.md          # Contexto do projeto para IA
├── SPEC.md                 # Especificação original
├── AGENTS.md               # Instruções para IAs no projeto
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🛠️ Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/ com .htaccess + robots + sitemap
npm run preview    # serve dist/ localmente
```

> **Nota:** no Windows, se o build reclamar de `@rollup/rollup-win32-x64-msvc`,
> rode `npm i @rollup/rollup-win32-x64-msvc --save-optional` e reexecute.

---

## 📦 Deploy no HostGator

Há **duas formas** de subir o site:

### Opção A — Automática (GitHub Actions → SFTP)

Já configurado em `.github/workflows/deploy.yml`. A cada `git push` na `main`,
o GitHub faz o build e envia para o servidor via **rsync sobre SSH** (SFTP).
É necessária uma única chave SSH exclusiva para deploy — **nunca expomos a senha
do cPanel**.

#### Passo 1 — Ativar SSH no cPanel

1. cPanel → **SSH Access** (ou **Terminal**)
2. Verifique se o acesso SSH está habilitado para sua conta
3. Anote:
   - **Host SSH** (geralmente `ssh.nextw.com.br` ou `server.nextw.com.br` — confirme no cPanel)
   - **Porta** (HostGator Plano M costuma usar `2222` ou `22` — confirme no cPanel)
   - **Usuário** (o mesmo do cPanel)

#### Passo 2 — Gerar par de chaves SSH no seu Windows

Abra o **PowerShell** e rode:

```powershell
ssh-keygen -t ed25519 -C "github-deploy-nextwave" -f $HOME\.ssh\nextwave_deploy
```

Isso gera dois arquivos:
- `~/.ssh/nextwave_deploy` → **chave privada** (vai pro GitHub)
- `~/.ssh/nextwave_deploy.pub` → **chave pública** (vai pro cPanel)

> Não digite passphrase (deixe vazio) — o GitHub Actions não tem como digitá-la.

#### Passo 3 — Adicionar a chave pública no cPanel

1. cPanel → **SSH Access → Manage SSH Keys → Import Key**
2. Cole o conteúdo de `nextwave_deploy.pub` (exiba com `Get-Content $HOME\.ssh\nextwave_deploy.pub` no PowerShell)
3. Clique em **Import** e depois em **Manage → Authorize**

#### Passo 4 — Cadastrar secrets no GitHub

Acesse: **https://github.com/BrunoAtrios/nextwave-site/settings/secrets/actions**

Crie **5 secrets**:

| Nome                | Valor                                          |
| ------------------- | ---------------------------------------------- |
| `SSH_HOST`          | `ssh.nextw.com.br` (ou o host do cPanel)       |
| `SSH_PORT`          | `2222` (ou a porta que o cPanel indicou)       |
| `SSH_USER`          | seu usuário do cPanel                          |
| `SSH_REMOTE_DIR`    | `/home/USUARIO/public_html` (ver abaixo)       |
| `SSH_PRIVATE_KEY`   | conteúdo **completo** de `nextwave_deploy`     |

Para o secret `SSH_PRIVATE_KEY`, copie **inclusive** as linhas `-----BEGIN...`
e `-----END...`.

Para descobrir o `SSH_REMOTE_DIR`:
- cPanel → **File Manager** → navegue até a pasta do site
- Olhe a barra de endereço — geralmente é `/home/SEU_USER/public_html`
- Se `nextw.com.br` é domínio adicional: `/home/SEU_USER/public_html/nextw.com.br`

#### Passo 5 — Testar o deploy

```bash
git commit --allow-empty -m "chore: trigger deploy"
git push
```

Acompanhe em: **https://github.com/BrunoAtrios/nextwave-site/actions**

### Opção B — Manual (upload via cPanel)

1. `npm run build` — gera `dist/` completo.
2. Acesse o **Gerenciador de Arquivos** do cPanel.
3. Envie o **conteúdo** de `dist/` para `public_html/` (sobrescreva).

---

### O que o `.htaccess` cuida

- SPA routing (qualquer rota cai no `index.html`)
- Cache imutável para assets com hash (1 ano)
- Compressão gzip (e fallback Brotli quando disponível)
- Headers de segurança (CSP, HSTS, X-Frame-Options, Permissions-Policy)
- MIME types (`.webp`, `.woff2`, etc.)

### Configurar DNS

Aponte o domínio `nextw.com.br` para os nameservers da HostGator e crie o
subdomínio/www no cPanel. O SSL é ativado pelo **AutoSSL** da HostGator
(Let's Encrypt gratuito).

---

## ⚙️ Configuração

Toda informação de contato / marca fica em **um único lugar**:

```js
// src/config.js
export const siteConfig = {
  brand: { name, short, tagline, description, url, logo },
  contact: { whatsappNumber, whatsappDisplay, email, phone, city, state, country },
  social: { instagram, linkedin, youtube },
  seo: { author, keywords, ogImage, locale },
};
```

Para **mudar WhatsApp/e-mail/telefone** em todo o site: edite `src/config.js`
e rode `npm run build`.

---

## 🧠 Hierarquia de marca

- **NextWave** = marca / centro orquestrador ("cérebro de tudo")
- **ServOS** = nome do ecossistema/sistema onde rodam os módulos
- **Módulos** orbitam o NextWave e rodam sob a plataforma ServOS

Essa hierarquia está explícita em:
- Hero (badge "NextWave · Ecossistema ServOS")
- Ecossistema (núcleo central = NextWave, módulos com selo "via NextWave")
- Copy da seção IA

---

## 📊 Performance esperada

| Métrica          | Valor aprox. |
| ---------------- | ------------ |
| JS total (gzip)  | ~95 kB       |
| CSS (gzip)       | ~8 kB        |
| HTML             | ~6 kB        |
| LCP              | < 2.5s       |
| CLS              | < 0.05       |

---

## 📄 Licença

© 2026 NextWave Engenharia e Automação. Todos os direitos reservados.
Desenvolvido por Bruno Ferreira.