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

1. `npm run build` — gera `dist/` completo (HTML + assets + .htaccess + robots + sitemap).
2. Acesse o **Gerenciador de Arquivos** do cPanel.
3. Envie o **conteúdo** de `dist/` para `public_html/` (sobrescreva).
4. Pronto. O `.htaccess` cuida de:
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