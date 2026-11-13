# SEO_CHANGELOG.md — Log de Alterações SEO

> Registro cronológico de todas as alterações relacionadas a SEO no CozinhaPet.

---

## Formato

```
## [DATA] — Título
- Alteração realizada
- Arquivo(s) modificado(s)
- Referência: SEO_AUDIT P##
```

---

## [13/11/2026] — Auditoria Inicial

- Criados documentos de auditoria e planejamento
- Arquivos criados:
  - `docs/PROJECT_CONTEXT.md`
  - `docs/SEO_AUDIT.md`
  - `docs/SEO_MASTER_PLAN.md`
  - `docs/SEO_DECISIONS.md`
  - `docs/SEO_CHANGELOG.md`
  - `docs/ROUTES_MAP.md`
  - `docs/TEST_CHECKLIST.md`
- Nenhum código de produção alterado
- Referência: Missão 00 — Auditoria e Preparação

---

---

## [13/11/2026] — Missão 01A.1: Padronização do Domínio

- **Arquivos modificados:** `vercel.json`, `public/sitemap.xml`, `public/robots.txt`, `docs/ROUTES_MAP.md`
- Alterações realizadas:
  - Adicionado redirecionamento permanente 301 de `www.cozinhapets.com.br` para `https://cozinhapets.com.br/` em `vercel.json`
  - Atualizado `sitemap.xml` para utilizar `https://cozinhapets.com.br/` (consistente com canonical)
  - Atualizado `robots.txt` para referenciar o sitemap sem www
  - Atualizado `ROUTES_MAP.md` para URL oficial sem www
- **Build verificado:** `npm run build` — sucesso
- Referência: Missão 01A.1

---
## [13/11/2026] — Missão 01A: SEO Básico e Metadados

- **Arquivos modificados:** `index.html`, `public/sitemap.xml`
- Alterações realizadas:
  - `<title>` atualizado: "Alimentação Natural para Cães em Curitiba | CozinhaPet" (P06)
  - `<meta name="description">` atualizado com texto sem promessas de saúde (P06)
  - `<link rel="canonical">` adicionado: `https://cozinhapets.com.br/` (P03)
  - `og:title`, `og:description` atualizados para consistência com title/description (P04)
  - `og:url` adicionado: `https://cozinhapets.com.br/` (P04)
  - `og:image` adicionado: `https://cozinhapets.com.br/logo.png` (P04)
  - `og:site_name` adicionado: "CozinhaPet" (P04)
  - `og:locale` adicionado: "pt_BR" (P04)
  - `twitter:card` adicionado: "summary" (P05)
  - `twitter:title`, `twitter:description`, `twitter:image` adicionados (P05)
  - `sitemap.xml` lastmod atualizado para 2026-11-13 (P09)
  - Keyword "alimentação natural curitiba" adicionada ao meta keywords
- **Nenhum componente React alterado**
- **Nenhuma dependência instalada**
- **Build verificado:** `npm run build` — sucesso
- Referência: SEO_AUDIT P03, P04, P05, P06, P09

---

*Novas entradas devem ser adicionadas ao final deste arquivo, em ordem cronológica.*
