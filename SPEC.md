# Next - Site Institucional
## Engenharia e Automação Além do Óbvio

---

## 1. Concept & Vision

Site institucional da Next com estética **dark mode premium** inspirada em Apple/Vercel. O visual deve comunicar precisão tecnológica, confiabilidade enterprise e inovação. A experiência é fluida, com animações sutis mas impactantes que reforçam a identidade de marca high-end. O ecossistema ServOS é o protagonista central.

---

## 2. Design Language

### Aesthetic Direction
Dark premium tech — inspirado em Vercel, Linear, Raycast. surfaces escuras com profundidade através de gradientes sutis e glassmorphism.

### Color Palette
```
--bg-primary:      #0a0a0f      (fundo principal)
--bg-secondary:   #12121a      (cards/surfaces)
--bg-tertiary:    #1a1a24      (hover states)
--accent-primary: #6366f1      (indigo - primary actions)
--accent-glow:    #818cf8      (indigo light - glows)
--accent-cyan:    #22d3ee      (cyan - highlights)
--text-primary:   #f8fafc      (texto principal)
--text-secondary: #94a3b8      (texto secundário)
--text-muted:    #64748b      (texto terciário)
--border:         #1e293b      (bordas)
--gradient-start: #6366f1
--gradient-end:   #22d3ee
```

### Typography
- **Headings**: Inter (700, 600) — clean, geometric
- **Body**: Inter (400, 500) — legibilidade
- **Monospace**: JetBrains Mono — para tech stack/code

### Spatial System
- Base unit: 4px
- Section padding: 80px-120px vertical
- Container max-width: 1280px
- Card border-radius: 16px
- Button border-radius: 8px

### Motion Philosophy
- **Entrance**: fade-in + translateY(20px), staggered 100ms
- **Hover**: scale(1.02) + shadow elevation, 200ms ease-out
- **Scroll**: parallax sutil em backgrounds, intersection observer para reveals
- **Micro**: button press scale(0.98), glow pulse on accent elements

### Visual Assets
- Icons: Lucide React (consistente, clean)
- Decorative: Grid patterns, gradient orbs, noise texture
- No images — todo visual é construído com CSS/SVG

---

## 3. Layout & Structure

### Hero Section
- Full viewport height
- Título em duas linhas com gradient text no "Beyond"
- Badge "Powered by ServOS"
- CTA button com glow effect
- Grid pattern background com floating orbs

### Soluções Section
- Grid 3 colunas (responsive: 1 → 2 → 3)
- Cards com glassmorphism, hover elevation
- Icon + título + descrição + "Learn more" link
- 4 módulos: ServOS, ESP32/RFID, Redes/Segurança, Infraestrutura

### Tech Stack Section
- Logo grid com nomes das tecnologias
- Python, PHP, React, JavaScript, Linux, Docker
- Badges estilo GitHub

### CTA Section
- Full-width gradient background
- Título + botão secundário

### Footer
- Logo + tagline
- Links de navegação
- Copyright

### Responsive Strategy
- Mobile first
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Grid collapse: 3 → 2 → 1
- Typography scale down 10-15%

---

## 4. Features & Interactions

### Navigation
- Fixed header com blur backdrop
- Logo + nav links + CTA button
- Scroll behavior: transparent → solid background
- Mobile: hamburger menu com slide-in

### Hero Animations
- Title: word-by-word fade-in staggered
- Subtext: fade-in after title completes
- CTA: pulse glow, scale on hover
- Background orbs: floating animation continuous

### Card Interactions
- Hover: translateY(-4px) + shadow increase + border glow
- Click: scale(0.98) press feedback

### Scroll Animations
- Sections fade-in on viewport entry
- Stagger children elements
- Using Intersection Observer via Framer Motion

---

## 5. Component Inventory

### Button
- Variants: primary (gradient), secondary (outline), ghost
- States: default, hover (glow + scale), active (scale down), disabled
- Sizes: sm, md, lg

### Card
- Glass effect background
- Border with gradient on hover
- Icon, title, description, link

### Badge
- Small pill shape
- Gradient background
- Used for "Powered by ServOS"

### Navigation
- Desktop: horizontal links
- Mobile: slide-in drawer
- States: transparent, scrolled (blur bg)

### SectionTitle
- Gradient text option
- Subtitle below

---

## 6. Technical Approach

### Stack
- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11
- React Router DOM (SPA routing)
- Lucide React (icons)

### Build Configuration (vite.config.js)
```javascript
base: './'  // Relative paths for HostGator
build: {
  assetsDir: 'assets',
  cssMinify: 'light' // Faster build
}
```

### .htaccess (auto-generated on build)
- SPA fallback to index.html
- Cache-Control headers for assets
- GZIP compression hints

### Deployment
- `npm run build` → dist folder
- Drag & drop to public_html
- No server-side required

---

## 7. File Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── SectionTitle.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Solucoes.jsx
│   │   ├── TechStack.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .htaccess
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```