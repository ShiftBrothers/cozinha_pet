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

### P03 — Falta de canonical
- **Arquivo:** `index.html`
- **Problema:** Sem `<link rel="canonical">`. Risco de duplicação www/non-www.
- **Evidência:** Zero resultados na busca por "canonical".
- **Solução:** Adicionar `<link rel="canonical" href="https://www.cozinhapets.com.br/" />`.
- **Risco:** Nenhum.
- **Prioridade:** 🔴 P1

### P04 — Falta de og:image e og:url
- **Arquivo:** `index.html`
- **Problema:** `og:image` e `og:url` ausentes. Compartilhamentos sem imagem.
- **Evidência:** Existem og:title, og:description, og:type mas não og:image/og:url.
- **Solução:** Criar imagem OG (1200x630) e adicionar meta tags.
- **Risco:** Nenhum.
- **Prioridade:** 🟡 P1

### P05 — Falta de Twitter Card
- **Arquivo:** `index.html`
- **Problema:** Nenhuma meta tag twitter:card/title/description/image.
- **Solução:** Adicionar tags.
- **Prioridade:** 🟡 P2

### P06 — Title tag genérico
- **Arquivo:** `index.html` (linha 17)
- **Problema:** `<title>CozinhaPet</title>` — sem keywords, localização.
- **Solução:** Expandir: "CozinhaPet — Alimentação Natural para Cães em Curitiba | Nutrição Veterinária"
- **Prioridade:** 🔴 P1

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

### P09 — Sitemap estático
- **Arquivo:** `public/sitemap.xml`
- **Problema:** lastmod fixo em `2026-08-24`. Apenas 1 URL.
- **Solução:** Atualizar lastmod.
- **Prioridade:** 🟢 P3

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

## Items OK ✅

- `robots.txt` — correto (Allow: / + sitemap)
- `<html lang="pt-BR">` — correto
- GTM com noscript fallback — correto
- JSON-LD LocalBusiness + PetStore — presente
- `preconnect` Google Fonts — presente
- `font-display: swap` via URL param — correto
- Viewport meta — correta

