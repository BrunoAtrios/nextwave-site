# Contexto do Projeto NextWave - Site Institucional

## Resumo do Projeto

Site institucional da **NextWave** (empresa de automação, IA e infraestrutura). A **NextWave é o centro de tudo** — ela orquestra o **ecossistema ServOS** (plataforma/sistemas). Design dark mode premium estilo Apple/Vercel, otimizado para hospedagem compartilhada **HostGator Plano M**.

**Site no ar:** http://www.nextw.com.br (HTTPS pendente — ativar AutoSSL no cPanel)

---

## Stack Técnica

- React 18 + Vite 5 (target es2020, code-splitting manual)
- Tailwind CSS 3 (dark mode premium)
- Framer Motion 11 (animações)
- Lucide React (ícones)
- SPA estática com .htaccess para HostGator
- Sharp (geração de PNGs do favicon)

---

## Repositório & Deploy

- **GitHub:** https://github.com/BrunoAtrios/nextwave-site
- **Branch principal:** `main`
- **Deploy automático:** GitHub Actions → FTP HostGator (SamKirkland/FTP-Deploy-Action@v4.4.0)
- **Workflows:**
  - `.github/workflows/deploy.yml` — build + deploy FTP (push na main)
  - `.github/workflows/build.yml` — validação do build (PRs)

### Configuração FTP (HostGator)

- **Host:** `sh00066.hostgator.com.br`
- **User:** `ftpadmin@nextw.com.br`
- **Remote Dir:** `/` (FTP aponta pra `/home1/brun6929/public_html/`)
- **Senha:** ⚠️ **TROCAR** (foi exposta em texto plano durante setup)

### Secrets cadastrados no GitHub

| Secret | Valor |
|---|---|
| `FTP_HOST` | `sh00066.hostgator.com.br` |
| `FTP_USERNAME` | `ftpadmin@nextw.com.br` |
| `FTP_PASSWORD` | ⚠️ trocar |
| `FTP_REMOTE_DIR` | `/` |

---

## DNS e Servidor

- **Domínio:** `nextw.com.br` (Domínio Principal na HostGator)
- **Document Root:** `/home1/brun6929/public_html/`
- **IP do servidor:** `69.6.213.154`
- **DNS Cloudflare:** registros A com proxy **DNS only (cinza)** apontando pro IP
- **Status HTTP:** ✅ Funcionando
- **Status HTTPS:** ⏳ Pendente (rodar AutoSSL no cPanel)

### Pendências DNS/SSL

1. Ativar **AutoSSL** no cPanel → Security → SSL/TLS Status → Run AutoSSL
2. Ativar **Force HTTPS Redirect** → cPanel → Domains → toggle
3. Configurar subdomínios no Cloudflare (atualmente usam DNS da HostGator direto)

---

## Hierarquia de marca

- **NextWave** (Nextw) = marca / centro orquestrador — **é o "cérebro de tudo"**
- **ServOS** = nome do ecossistema/plataforma dos sistemas
- Módulos orbitam o NextWave (central) e rodam sob a plataforma ServOS

Essa hierarquia está explícita em:
- Hero (badge "NextWave · Ecossistema ServOS")
- Ecossistema (núcleo central = NextWave, módulos com selo "via NextWave")
- Copy da seção IA

---

## Estrutura do Site (Seções)

1. **Hero** - Particle background animado, logo NextWave, badge "NextWave · Ecossistema ServOS", CTAs
2. **Números** - Contadores animados (150+ projetos, 80+ clientes, 5+ anos, 99% uptime)
3. **Ecossistema ServOS** - Diagrama com **NextWave no centro** e 6 módulos ServOS orbitando (cada módulo exibe selo "via NextWave")
4. **Produtos** - Grid 6 cards (ServOS, Serv Obra, Next Gestão, Automação IA, NFC/UHF, Redes)
5. **Automação com IA** - Seção destaque com **cérebro neural animado** e seletor Biológica/Digital
6. **Tech Stack** - Grid 12 tecnologias
7. **Depoimentos** - 4 testimonials realistas
8. **Contato** - Formulário → WhatsApp + 3 cards (WhatsApp, Email, Localização)
9. **Footer** - Links organizados por categoria + redes sociais + assinatura Bruno Ferreira

---

## Componentes (src/components/)

- `Navigation.jsx` — Fixed glass, scroll spy, drawer mobile
- `ScrollProgress.jsx` — Barra de progresso no topo
- `WhatsAppFloat.jsx` — Botão flutuante com pulse-ring
- `ErrorBoundary.jsx` — Captura erros de runtime
- `Badge.jsx`, `Button.jsx`, `Card.jsx`, `SectionTitle.jsx` — UI base
- `NeuralBiological.jsx` — Cérebro com dendritos + sinapses (canvas)
- `NeuralDigital.jsx` — Cérebro com hex grid + circuitos (canvas)
- `NeuralSelector.jsx` — Toggle entre Biológica/Digital com AnimatePresence

---

## Produtos da Empresa

| Produto                | Descrição                                                      |
| ---------------------- | -------------------------------------------------------------- |
| ServOS                 | Plataforma central de gestão (cérebro do ecossistema)          |
| Serv Obra              | Gestor de obras online (estoque, financeiro, equipes, módulos) |
| Next Gestão            | ERP para processo fabril (produção, estoque, financeiro)       |
| Automação Residencial  | IA personalizada embarcada, orquestrador, assistente pessoal   |
| NFC & UHF              | Identificação por proximidade e longo alcance                  |
| Redes & Infraestrutura | Redes corporativas, firewall, VPN, monitoramento               |

---

## Efeitos Visuais

- Particle canvas com conexões no Hero
- Gradient mesh backgrounds
- Glassmorphism (glass, glass-strong)
- Card shine effect
- Border gradient hover
- Scroll progress bar
- Animated counters
- Floating gradient orbs
- Noise texture overlay
- Neural canvas animations (Biológica + Digital)
- Floating metrics cards na seção IA
- AI feature cards com hover shine

---

## Contatos

- Site: www.nextw.com.br
- WhatsApp: (19) 99124-0130 (DDI+55: 5519991240130)
- Email: contato@nextw.com.br
- Localização: Americana - SP

> Fonte única: `src/config.js` (todos os componentes importam daqui)

---

## Otimizações aplicadas

- Lazy loading de todas as sections (Suspense + code-splitting manual de react/framer-motion/lucide)
- Preload do logo + fontes críticas (reduz LCP/CLS)
- Splash inline no `<head>` evita FOUC
- Partículas pausam com `visibilitychange` + respeitam `prefers-reduced-motion`
- Headers de segurança (CSP, HSTS, X-Frame-Options, Permissions-Policy)
- Cache imutável para assets versionados (.htaccess)
- Gzip + fallback Brotli configurados
- ErrorBoundary para falhas de runtime
- Skip-link, focus visível, aria-labels, prefers-reduced-motion
- JSON-LD Organization + LocalBusiness
- robots.txt + sitemap.xml
- Mobile offset nas âncoras para compensar header fixo
- WhatsApp e e-mail exibidos em todos os pontos de contato com `mailto:`/`wa.me` reais

---

## Favicon

- **SVG:** Letra "N" estilizada com gradiente NextWave (`#6366f1` → `#818cf8` → `#22d3ee`) sobre fundo dark (`#0a0a0f` → `#12121a`)
- **PNGs gerados:** 16, 32, 48, 64, 128, 192, 256, 512px
- **Script gerador:** `scripts/gen-favicon.mjs` (usa `sharp`)

---

## Workflow de Trabalho (resumo)

```bash
# Editar código...

git add -A
git commit -m "feat: minha mudança"
git push  # → GitHub Actions faz build + FTP deploy automático
```

Acompanhar deploys em: https://github.com/BrunoAtrios/nextwave-site/actions

---

## ⚠️ Pendências

1. **Ativar AutoSSL** no cPanel (5 min)
2. **Trocar senha do FTP** `ftpadmin@nextw.com.br` (segurança)
3. Configurar **Force HTTPS Redirect**
4. **DNS dos subdomínios** (servobras, teste, atagestao) — atualmente funcionam via DNS HostGator direto, podem precisar de atenção se algo mudar
5. Chaves SSH geradas no Windows (`~/.ssh/nextwave_deploy*`) — deletar do cPanel se não usadas (Auth ainda autorizada)

---

_Última atualização: 2026-08-30_