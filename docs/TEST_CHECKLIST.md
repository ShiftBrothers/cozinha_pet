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

## Testes de SEO

- [ ] `<title>` contém keywords relevantes
- [ ] `<meta name="description">` presente e adequada
- [ ] `<link rel="canonical">` aponta para URL correta
- [ ] `og:title`, `og:description`, `og:image`, `og:url` presentes
- [ ] Twitter card tags presentes
- [ ] JSON-LD válido (testar em https://validator.schema.org/)
- [ ] JSON-LD telefone correto (+5541988752887)
- [ ] robots.txt acessível em /robots.txt
- [ ] sitemap.xml acessível em /sitemap.xml
- [ ] HTML pré-renderizado contém conteúdo textual (após Fase 1)

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
