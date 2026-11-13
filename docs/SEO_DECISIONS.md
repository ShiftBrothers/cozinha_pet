# SEO_DECISIONS.md — Registro de Decisões Técnicas

> Decisões documentadas durante a evolução SEO do CozinhaPet.

---

## Formato

Cada decisão segue: **Data | Decisão | Contexto | Alternativas | Resultado**.

---

## D001 — Manter Vite + React (sem migração de framework)

- **Data:** 13/11/2026
- **Decisão:** Não migrar para Next.js, Remix, ou Astro.
- **Contexto:** Site é SPA single-page institucional. Migração de framework implica reescrever tudo. Pré-renderização via plugin Vite resolve o problema de indexação sem migração.
- **Alternativas consideradas:** Next.js (SSR/SSG nativo), Astro (static-first). Ambos exigiriam reescrita completa.
- **Resultado:** Evolução incremental com menor risco.

## D002 — Pré-renderização em vez de SSR

- **Data:** 13/11/2026
- **Decisão:** Usar pré-renderização (static HTML no build) em vez de SSR em runtime.
- **Contexto:** Site não tem conteúdo dinâmico por usuário. Conteúdo é o mesmo para todos. Pré-render é mais simples e não requer servidor Node.
- **Alternativas:** SSR com Vite SSR plugin. Mais complexo, desnecessário para site institucional.
- **Resultado:** Deploy estático na Vercel mantido.

## D003 — Migrar Tailwind CDN → npm

- **Data:** 13/11/2026
- **Decisão:** Instalar Tailwind via npm para produção otimizada.
- **Contexto:** CDN Play não faz tree-shaking. Envia ~300KB+ de CSS desnecessário. Impacto direto em Core Web Vitals.
- **Alternativas:** Manter CDN (inaceitável para performance).
- **Resultado:** A implementar na Fase 1.

---

*Novas decisões devem ser adicionadas ao final deste arquivo.*
