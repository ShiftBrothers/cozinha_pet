# TEST_CHECKLIST.md — Checklist de Testes

> Verificações obrigatórias antes de cada deploy de alterações SEO.

---

## Testes Visuais

- [ ] Hero: vídeo reproduz com autoplay (desktop e mobile)
- [ ] Hero: botão mute/unmute funciona
- [ ] Navbar: scroll spy destaca seção correta
- [ ] Navbar: drawer mobile abre/fecha
- [ ] SocialProof: contadores animam ao entrar na viewport
- [ ] SocialProof: logos de parceiros visíveis e clicáveis
- [ ] Calculadora: todos os 4 steps funcionam (nome → dados → plano → resultado)
- [ ] Calculadora: formulário de lead envia corretamente (webhook)
- [ ] Calculadora: degustação kit 150g/250g funciona via PricingComparison
- [ ] PricingComparison: botões redirecionam para calculadora
- [ ] Testimonials: cards de veterinários com feedback expandível
- [ ] Testimonials: links Instagram/WhatsApp abrem corretamente
- [ ] KnowledgePills: cards renderizam (sem link funcional — esperado por ora)
- [ ] Footer: links de navegação fazem scroll correto
- [ ] FloatingButtons: WhatsApp e Instagram abrem em nova aba
- [ ] CTA final: botão "Começar o Plano" faz scroll para calculadora

## Testes de SEO — Missão 01A (13/11/2026)

- [x] `<title>` contém keywords relevantes — "Alimentação Natural para Cães em Curitiba | CozinhaPet"
- [x] `<meta name="description">` presente e adequada — texto sem promessas de saúde
- [x] `<link rel="canonical">` aponta para URL correta — `https://cozinhapets.com.br/`
- [x] `og:title`, `og:description`, `og:image`, `og:url` presentes — todos 7 tags OG
- [x] Twitter card tags presentes — card, title, description, image
- [ ] JSON-LD válido (testar em https://validator.schema.org/) — não alterado nesta missão
- [ ] JSON-LD telefone correto (+5541988752887) — pendente (próxima missão)
- [x] robots.txt acessível em /robots.txt — não alterado, OK
- [x] sitemap.xml acessível em /sitemap.xml — lastmod atualizado
- [ ] HTML pré-renderizado contém conteúdo textual (após Fase 1) — pendente
- [x] Nenhuma tag duplicada — verificado via grep (0 duplicatas)
- [x] Build `npm run build` — sucesso (5.12s, 0 erros)
- [x] Domínio principal respondendo corretamente (`https://cozinhapets.com.br/`)
- [x] Domínio www redirecionando com HTTP 301 (`vercel.json`)
- [x] Destino final sem www
- [x] Sitemap utilizando o domínio principal (`https://cozinhapets.com.br/sitemap.xml`)
- [x] Canonical e sitemap consistentes (ambos sem www)
- [x] Ausência de loops de redirecionamento
- [x] Preservação de HTTPS


## Testes de Performance

- [ ] Lighthouse Performance ≥ 80 (mobile)
- [ ] Lighthouse SEO ≥ 90
- [ ] Lighthouse Accessibility ≥ 85
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID/INP < 200ms
- [ ] Sem erros no console do navegador

## Testes de Responsividade

- [ ] Mobile 375px (iPhone SE)
- [ ] Mobile 390px (iPhone 14)
- [ ] Tablet 768px (iPad)
- [ ] Desktop 1280px
- [ ] Desktop 1440px+

## Testes de Integração

- [ ] Webhook formulário responde 200 OK
- [ ] GTM dispara corretamente (verificar via GTM Preview)
- [ ] WhatsApp link abre conversa com mensagem pré-preenchida
