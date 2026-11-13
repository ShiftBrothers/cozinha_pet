# SEO_AUDIT.md — Auditoria SEO do CozinhaPet

> Auditoria técnica realizada em 13/11/2026 sobre o código-fonte do repositório.

---

## Resumo Executivo

Site SPA React com CSR puro e Tailwind via CDN. Crawlers sem JS veem `<div id="root"></div>` vazio. Meta tags incompletas. JSON-LD existe mas tem erros.

**Pontuação geral estimada: 25/100** (SEO técnico)

---

## Problemas Identificados

### P01 — Renderização 100% CSR (Crítico)
- **Arquivo:** `index.tsx`, `App.tsx`
- **Problema:** Todo conteúdo via `ReactDOM.createRoot`. Crawlers sem JS veem página vazia.
- **Evidência:** `index.html` body contém apenas `<div id="root"></div>` (linha 290).
- **Solução:** Pré-renderização via plugin Vite (`vite-plugin-prerender` ou similar).
- **Risco:** Médio — testar interatividade (calculadora, vídeo).
- **Prioridade:** 🔴 P0

### P02 — Tailwind CSS via CDN (Crítico)
- **Arquivo:** `index.html` (linha 27)
- **Problema:** `cdn.tailwindcss.com` carrega ~300KB+ não otimizado. Bloqueio de renderização.
- **Evidência:** Script CDN + config inline (linhas 31-135). Sem npm install.
- **Solução:** Instalar Tailwind via npm + PostCSS. Purge no build.
- **Risco:** Baixo.
- **Prioridade:** 🔴 P0

### P03 — ~~Falta de canonical~~ ✅ RESOLVIDO (Missão 01A)
- **Arquivo:** `index.html`
- **Correção:** `<link rel="canonical" href="https://cozinhapets.com.br/" />` adicionado (linha 22).
- **Data:** 13/11/2026

### P04 — ~~Falta de og:image e og:url~~ ✅ RESOLVIDO (Missão 01A)
- **Arquivo:** `index.html`
- **Correção:** og:url, og:image, og:site_name, og:locale adicionados. og:title e og:description atualizados.
- **Imagem utilizada:** `/logo.png` (existente em `public/`, 39KB)
- **Data:** 13/11/2026

### P05 — ~~Falta de Twitter Card~~ ✅ RESOLVIDO (Missão 01A)
- **Arquivo:** `index.html`
- **Correção:** twitter:card, twitter:title, twitter:description, twitter:image adicionados.
- **Data:** 13/11/2026

### P06 — ~~Title tag genérico~~ ✅ RESOLVIDO (Missão 01A)
- **Arquivo:** `index.html` (linha 17)
- **Correção:** Title atualizado para "Alimentação Natural para Cães em Curitiba | CozinhaPet". Description atualizada sem promessas de saúde.
- **Data:** 13/11/2026

### P07 — Telefone incorreto no JSON-LD
- **Arquivo:** `index.html` (linha 301)
- **Problema:** `"+554198875288"` — faltam dígitos. Correto: `"+5541988752887"`.
- **Evidência:** Comparar com FloatingButtons (`wa.me/5541988752887`) e Footer (`(41) 98875-2887`).
- **Prioridade:** 🔴 P1

### P08 — JSON-LD sem geo/openingHours
- **Arquivo:** `index.html` (linhas 291-343)
- **Problema:** LocalBusiness sem latitude/longitude e sem horário.
- **Solução:** Adicionar `geo` e `openingHoursSpecification`.
- **Prioridade:** 🟡 P2

### P09 — ~~Sitemap estático~~ ✅ RESOLVIDO (Missão 01A)
- **Arquivo:** `public/sitemap.xml`
- **Correção:** lastmod atualizado para 2026-11-13 (data real da alteração de conteúdo).
- **Data:** 13/11/2026

### P10 — Imagens externas Unsplash
- **Arquivo:** `components/Hero.tsx` (linhas 134-137)
- **Problema:** 4 imagens do Unsplash. Dependência externa, sem cache local.
- **Solução:** Baixar, otimizar WebP, hospedar em `/public`.
- **Prioridade:** 🟡 P2

### P11 — Vídeo sem poster
- **Arquivo:** `components/Hero.tsx` (linhas 66-82)
- **Problema:** `<video>` sem `poster`. Tela preta em conexões lentas.
- **Solução:** Adicionar poster image.
- **Prioridade:** 🟡 P2

### P12 — Links mortos (href="#")
- **Arquivo:** `Footer.tsx` (linhas 23, 81, 82), `App.tsx` (linha 75)
- **Problema:** Política de Privacidade, Termos de Uso, Instagram footer, Falar com Nutricionista — todos `href="#"`.
- **Solução:** Apontar para destinos reais ou remover.
- **Prioridade:** 🟡 P1

### P13 — KnowledgePills sem links
- **Arquivo:** `components/KnowledgePills.tsx` (linhas 77-105)
- **Problema:** "Ler artigo completo" sem link/ação real.
- **Solução:** Remover CTA falso ou implementar conteúdo expandível.
- **Prioridade:** 🟡 P2

### P14 — H1 só visível após JS
- **Arquivo:** `components/Hero.tsx` (linha 116)
- **Solução:** Resolvido por P01 (pré-renderização).
- **Prioridade:** 🟢 P3

### P15 — GEMINI_API_KEY sem uso
- **Arquivo:** `vite.config.ts` (linhas 14-15)
- **Solução:** Remover de vite.config.ts e README.
- **Prioridade:** 🟢 P3

### P16 — Preload/self-host fontes
- **Arquivo:** `index.html` (linhas 28-30)
- **Solução:** Considerar self-hosting da fonte Roboto Slab.
- **Prioridade:** 🟢 P3

### P17 — CSS inline extenso
- **Arquivo:** `index.html` (linhas 136-281)
- **Problema:** ~145 linhas de CSS inline no head.
- **Solução:** Mover para arquivo CSS separado.
- **Prioridade:** 🟢 P3

---
### P18 — ~~Domínio www vs non-www sem redirecionamento~~ ✅ RESOLVIDO (Missão 01A.1)
- **Arquivo:** `vercel.json`, `sitemap.xml`, `robots.txt`
- **Correção:** Adicionado redirecionamento 301 www → non-www em `vercel.json`. Sitemap e robots.txt ajustados para `https://cozinhapets.com.br/`.
- **Data:** 13/11/2026



## Items OK ✅

- `robots.txt` — correto (Allow: / + sitemap)
- `<html lang="pt-BR">` — correto
- GTM com noscript fallback — correto
- JSON-LD LocalBusiness + PetStore — presente
- `preconnect` Google Fonts — presente
- `font-display: swap` via URL param — correto
- Viewport meta — correta

