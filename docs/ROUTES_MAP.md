# ROUTES_MAP.md — Mapa de Rotas e Seções

> CozinhaPet — SPA single-page. Sem React Router. Navegação 100% via anchors.

---

## URL de Produção

`https://cozinhapets.com.br/`

---

## Mapa de Seções

| # | Anchor | Componente | Descrição | ID HTML |
|---|---|---|---|---|
| 1 | `#hero` | `Hero.tsx` | Hero com vídeo, h1, CTA principal | `hero` |
| 2 | (nenhum) | `SocialProof.tsx` | Logos parceiros + contadores animados | — |
| 3 | `#calculadora` | `NutritionalCalculator.tsx` | Calculadora nutricional de 4 steps + formulário de lead | `calculadora` |
| 4 | `#planos` | `PricingComparison.tsx` | Wrapper section (contém kit-degustacao) | `planos` |
| 5 | `#kit-degustacao` | `PricingComparison.tsx` | Cards dos kits degustação (150g e 250g) | `kit-degustacao` |
| 6 | `#parceiros` | `Testimonials.tsx` | Cards de veterinários e estabelecimentos parceiros | `parceiros` |
| 7 | `#conhecimento` | `KnowledgePills.tsx` | 3 pílulas de conhecimento (sem link funcional) | `conhecimento` |
| 8 | (nenhum) | `App.tsx` inline | CTA final "A saúde dele não pode esperar" | — |
| 9 | (nenhum) | `Footer.tsx` | Rodapé com navegação, contato, copyright | — |

---

## Navegação (Navbar)

| Label | Anchor | Aparece em |
|---|---|---|
| Kit Degustação | `#kit-degustacao` | Desktop + Mobile |
| Parceiros | `#parceiros` | Desktop + Mobile |
| Blog | `#conhecimento` | Desktop + Mobile |
| Descobrir Meu Plano (CTA) | `#calculadora` | Desktop + Mobile |

---

## Links Externos

| Destino | URL | Componente |
|---|---|---|
| WhatsApp | `wa.me/5541988752887` | FloatingButtons, Testimonials |
| Instagram CozinhaPet | `instagram.com/cozinhapet_` | FloatingButtons |
| Instagram (footer) | `#` ⚠️ morto | Footer |
| Instituto Fica Comigo | `institutoficacomigo.org.br` | SocialProof |
| DNA Animal | `dnaanimal.com.br` | SocialProof |
| Webhook formulário | `webhook.shiftbrothers.com.br/webhook/forms_site_cozinhapet` | NutritionalCalculator |
| Política de Privacidade | `#` ⚠️ morto | Footer |
| Termos de Uso | `#` ⚠️ morto | Footer |
| Falar com Nutricionista | `#` ⚠️ morto | App.tsx CTA final |

---

## Observações

1. Site **não tem rotas reais** — tudo é anchor na mesma página
2. `window.location.hash` é tratado em `App.tsx` para scroll automático
3. Para futuro SEO com páginas separadas, será necessário React Router ou framework com routing
