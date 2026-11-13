# SEO_MASTER_PLAN.md — Plano de Evolução SEO

> CozinhaPet — 6 fases de evolução. Nenhuma requer migração de framework.

---

## Fase 1 — Fundação Técnica e Indexação

**Objetivo:** Garantir que Google indexe conteúdo completo.

| # | Tarefa | Referência Audit |
|---|---|---|
| 1.1 | Migrar Tailwind CDN → npm + PostCSS | P02 |
| 1.2 | Implementar pré-renderização (prerender plugin) | P01 |
| 1.3 | Adicionar `<link rel="canonical">` | P03 |
| 1.4 | Expandir `<title>` com keywords | P06 |
| 1.5 | Corrigir telefone no JSON-LD | P07 |
| 1.6 | Adicionar og:image, og:url | P04 |
| 1.7 | Adicionar Twitter Card tags | P05 |
| 1.8 | Corrigir links mortos (href="#") | P12 |
| 1.9 | Atualizar sitemap.xml lastmod | P09 |
| 1.10 | Limpar GEMINI_API_KEY não usada | P15 |

**Critério de conclusão:** HTML estático gerado no build contém todo conteúdo textual. Meta tags completas. Lighthouse SEO ≥ 90.

---

## Fase 2 — Desempenho e Experiência Mobile

**Objetivo:** Core Web Vitals verdes. LCP < 2.5s.

| # | Tarefa | Referência Audit |
|---|---|---|
| 2.1 | Otimizar imagens (WebP, lazy load) | P10 |
| 2.2 | Adicionar poster ao vídeo Hero | P11 |
| 2.3 | Self-host Roboto Slab (eliminar Google Fonts requests) | P16 |
| 2.4 | Mover CSS inline para arquivo separado | P17 |
| 2.5 | Analisar bundle size (vite-bundle-analyzer) | — |
| 2.6 | Lazy load componentes abaixo do fold | — |

**Critério:** Lighthouse Performance ≥ 85 mobile. CLS < 0.1.

---

## Fase 3 — Estrutura de Páginas e Arquitetura SEO

**Objetivo:** Preparar estrutura para múltiplas páginas indexáveis.

| # | Tarefa |
|---|---|
| 3.1 | Avaliar necessidade de React Router para páginas futuras |
| 3.2 | Criar página dedicada de Política de Privacidade |
| 3.3 | Criar página dedicada de Termos de Uso |
| 3.4 | Definir URL structure para futuro blog/conteúdo |
| 3.5 | Implementar breadcrumbs schema quando houver páginas |

**Critério:** URLs limpas, sitemap atualizado, hierarquia navegável.

---

## Fase 4 — SEO Local e Credibilidade

**Objetivo:** Dominar buscas locais em Curitiba.

| # | Tarefa | Referência Audit |
|---|---|---|
| 4.1 | Adicionar geo coordinates ao JSON-LD | P08 |
| 4.2 | Adicionar openingHoursSpecification | P08 |
| 4.3 | Criar/otimizar Google Business Profile | — |
| 4.4 | Adicionar FAQPage schema (perguntas frequentes) | — |
| 4.5 | Adicionar review/rating schema com depoimentos reais | — |

**Critério:** Aparecer no Google Maps pack para "alimentação natural pet Curitiba".

---

## Fase 5 — Conteúdo Estratégico (sem blog)

**Objetivo:** Conteúdo indexável sem implementar blog.

| # | Tarefa | Referência Audit |
|---|---|---|
| 5.1 | Tornar KnowledgePills conteúdo expandível real | P13 |
| 5.2 | Adicionar seção FAQ expandível com Schema | — |
| 5.3 | Adicionar conteúdo sobre ingredientes/cardápio | — |
| 5.4 | Adicionar depoimentos textuais indexáveis | — |

**Critério:** Conteúdo textual rico na página, indexável, com schema.

---

## Fase 6 — Conversão e Monitoramento

**Objetivo:** Medir e otimizar funil.

| # | Tarefa |
|---|---|
| 6.1 | Configurar eventos GTM para steps da calculadora |
| 6.2 | Implementar Google Analytics 4 (se não via GTM) |
| 6.3 | Configurar conversion tracking (formulário enviado) |
| 6.4 | A/B test em CTAs |
| 6.5 | Monitorar Search Console (indexação, CTR, posições) |

**Critério:** Dashboard de métricas ativo. Funil mapeado.
