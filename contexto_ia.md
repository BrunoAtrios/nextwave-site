# Contexto do Projeto NextWave - Site Institucional

## Resumo do Projeto

Site institucional da **NextWave** (empresa de automação, IA e infraestrutura). A **NextWave é o centro de tudo** — ela orquestra o **ecossistema ServOS** (plataforma/sistemas). Design dark mode premium estilo Apple/Vercel, otimizado para hospedagem compartilhada HostGator Plano M.

---

## Stack Técnica

- React 18 + Vite 5
- Tailwind CSS 3 (dark mode premium)
- Framer Motion (animações avançadas)
- Lucide React (ícones)
- SPA estática com .htaccess para HostGator

---

## Hierarquia de marca

- **NextWave** (Nextw) = marca / centro orquestrador — **é o "cérebro de tudo"**
- **ServOS** = nome do ecossistema/plataforma dos sistemas
- Módulos orbitam o NextWave (central) e rodam sob a plataforma ServOS

## Estrutura do Site (Seções)

1. **Hero** - Particle background animado, logo NextWave, badge "NextWave · Ecossistema ServOS", CTAs
2. **Números** - Contadores animados (150+ projetos, 80+ clientes, 5+ anos, 99% uptime)
3. **Ecossistema ServOS** - Diagrama com **NextWave no centro** e 6 módulos ServOS orbitando (cada módulo exibe selo "via NextWave")
4. **Produtos** - Grid 6 cards (ServOS, Serv Obra, Next Gestão, Automação IA, NFC/UHF, Redes)
5. **Automação com IA** - Seção destaque com visual futurista, features da IA embarcada
6. **Tech Stack** - Grid 12 tecnologias
7. **Depoimentos** - 4 testimonials realistas
8. **Contato** - Formulário + WhatsApp + Email + Localização
9. **Footer** - Links organizados por categoria + redes sociais

## Componentes

- Navigation (fixed, glass, responsive)
- ScrollProgress (barra de progresso no topo)
- WhatsAppFloat (botão flutuante com pulse)
- Badge, Button, Card, SectionTitle

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

---

## Deploy

1. `npm run build` → pasta dist/
2. Upload dist/ para public_html do HostGator
3. .htaccess garante SPA routing

---

## Contatos

- Site: www.nextw.com.br
- WhatsApp: (19) 99124-0130
- Email: contato@nextw.com.br
- Localização: Americana - SP

> Fonte única: `src/config.js` (todos os componentes importam daqui)

---

## Otimizações aplicadas

- Lazy loading de todas as sections (Suspense + code-splitting manual de react/framer-motion/lucide)
- Preload do logo + fontes críticas (reduz LCP/CLS)
- Partículas pausam com `visibilitychange` e respeitam `prefers-reduced-motion`
- Headers de segurança (CSP, HSTS, X-Frame-Options, Permissions-Policy)
- Cache imutável para assets versionados (.htaccess)
- Gzip + fallback Brotli configurados
- Splah inline no `<head>` evita FOUC
- ErrorBoundary para falhas de runtime
- Skip-link, focus visível, aria-labels, prefers-reduced-motion
- JSON-LD Organization + LocalBusiness
- robots.txt + sitemap.xml
- mobileOffset nas âncoras para compensar header fixo
- WhatsApp e e-mail exibidos em todos os pontos de contato com `mailto:`/`wa.me` reais

---

_Última atualização: 2026-08-29_
