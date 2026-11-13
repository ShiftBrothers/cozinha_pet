# CozinhaPet — Documentação Técnica SEO + Analytics

## 📋 Status de Implementação

### ✅ Concluído (Fases 1-7)

#### Fase 1: Arquitetura & Routing
- React Router v6 implementado (8 rotas principais)
- SPA com suporte multi-página
- PageLayout wrapper injeita meta tags dinâmicas por rota

#### Fase 2: SEO On-Page
- **Meta Tags:** title, description, og:image, canonical (dinâmicos)
- **Schemas JSON-LD:** Organization, LocalBusiness, FAQPage, HowTo, Person, WebSite
- **H1-H3 Hierarchy:** Respeitada em todas páginas
- **Internal Links:** Navbar com 6 rotas navegáveis

#### Fase 3: SEO Técnico
- **Sitemap XML:** 8 URLs com priority/changefreq
- **Robots.txt:** Allow all, sitemap configurada
- **Canonical URLs:** Preventivo de duplicação
- **Mobile Responsiveness:** 100% (Tailwind fluid)

#### Fase 4: Performance
- Tailwind v4 compilado estático (50KB CSS)
- JS bundled + minificado (355KB gzip)
- Fonts preconnect + display=swap
- Sem Tailwind CDN (build-time only)

#### Fase 5: Conteúdo & Conversão
- 8 páginas com conteúdo estruturado
- WhatsApp pre-filled links (Fase 1)
- CTA buttons estratégicos
- Links internos em Navbar

#### Fase 6: Analytics GA4
- GTM container (GTM-598BWVZM) injetado no index.html
- Hook useGA4Event criado (`src/hooks/useGA4Event.ts`)
- FloatingButtons com tracking:
  - `whatsapp_click` event (página + timestamp)
  - `instagram_click` event (página + timestamp)

#### Fase 7: Build & Validação
- ✅ Build produção completou (6.24s)
- ✅ Dist atualizado com assets versioned
- ✅ index.html contém meta tags iniciais
- ✅ Sitemap + Robots válidos

---

## 🗂️ Estrutura de Arquivos

```
cozinha_pet/
├── src/
│   ├── hooks/
│   │   └── useGA4Event.ts          # GA4 event tracking hook
│   ├── lib/
│   │   ├── seoData.ts             # Meta tags por rota
│   │   └── schemaGenerators.ts    # Schema.org generators
│   ├── pages/
│   │   ├── Home.tsx               # Homepage
│   │   ├── ComoFunciona.tsx        # How-to + 8 steps
## 📊 SEO Schema Gerado

### Organization (Global)
```json
{
  "@type": "Organization",
  "name": "CozinhaPet",
  "url": "https://www.cozinhapets.com.br",
  "logo": "https://www.cozinhapets.com.br/logo.png",
  "sameAs": [
    "https://www.instagram.com/cozinhapet_/",
    "https://www.facebook.com/cozinhapet"
  ],
  "contactPoint": {
    "telephone": "+55 41 98875-2887",
    "contactType": "Customer Support"
  }
}
```

### LocalBusiness (/sobre)
- areaServed: Curitiba, PR, RM Curitiba
- Telefone + WhatsApp
- Endereço estruturado

### FAQPage (/perguntas-frequentes)
- 9 FAQs com @type MainEntity
- Cada item: question + answer (texto)

### HowTo (/como-funciona)
- 8 steps estruturados
- Cada step: name + description + image

### Product (/cardapios)
- 4 products (Cardápios)
- Cada um: name + description + price + image

---

## 🎯 Analytics GA4

### GTM Container
- **ID:** GTM-598BWVZM
- **Localização:** index.html (head + noscript fallback)

### Custom Events

#### whatsapp_click
```typescript
trackEvent({
  eventName: 'whatsapp_click',
  eventParams: {
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  }
})
```

#### instagram_click
```typescript
trackEvent({
  eventName: 'instagram_click',
  eventParams: {
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  }
})
```

**Triggers:** FloatingButtons (fixo), footer links (pendente)

---

## 🔧 Build & Deploy

### Dev Server
```bash
npm run dev
# http://localhost:5173
```

### Production Build
```bash
npm run build
# Output: dist/
# Compiled em 6.24s
```

### Preview Build
```bash
npm run preview
# Simula produção localmente
```

### Deploy (Static Hosting)
```bash
# Copiar dist/ para host:
# - Vercel: npm run build → auto-deploy
# - Netlify: npm run build → drag-drop dist/
# - Apache/Nginx: dist/ como root
```

**Rewrite Rules (SPA routing):**
```nginx
location / {
  try_files $uri /index.html;
}
```

---

## ✅ Checklist Pré-Produção

### SEO
- [ ] Google Search Console: Propriedade verificada
- [ ] Search Console: Sitemap enviado
- [ ] Search Console: Mobile-friendly test (passar)
- [ ] PageSpeed Insights: Score > 90 (mobile)
- [ ] Rich Results: Schema validado

### Analytics
- [ ] GTM: Container publicado
- [ ] GA4: Propriedade criada
- [ ] GA4: Events testados em realtime
- [ ] GA4: View criado

### Local Listings
- [ ] Google Perfil Empresa: Criado + verificado
- [ ] Google Perfil: Fotos, horário, telefone, endereço
- [ ] Meta: ~30 avaliações em 90 dias

### Performance
- [ ] Lighthouse: FCP < 1.5s, LCP < 2.5s
- [ ] Core Web Vitals: Green
- [ ] CSS: 50KB (otimizado)
- [ ] JS: 355KB gzip

### Mobile
- [ ] Navbar mobile: Menu funcional
- [ ] FloatingButtons: Visível + funcional
- [ ] Touch targets: Min 48x48px

### Content
- [ ] Responsável Técnico: Nome + CRMV
- [ ] Área de Entrega: Lista real de bairros
- [ ] Imagens: Otimizadas
- [ ] Cardápios: Conteúdo real

│   │   ├── Cardapios.tsx           # Menu showcase
│   │   ├── Planos.tsx             # Pricing + packages
│   │   ├── AreaDeEntrega.tsx       # Delivery zones (placeholder)
│   │   ├── Sobre.tsx              # About + values
│   │   ├── ResponsavelTecnico.tsx  # Tech responsible (placeholder)
│   │   └── PerguntasFrequentes.tsx # FAQ + FAQPage schema
│   ├── components/
│   │   ├── shared/
│   │   │   └── PageLayout.tsx      # Meta tag injector
│   │   ├── Navbar.tsx             # Router-aware nav
│   │   ├── Footer.tsx             # Footer
│   │   ├── FloatingButtons.tsx     # WhatsApp + Instagram (GA4 tracked)
│   │   └── ... (outros)
│   ├── styles/
│   │   └── globals.css            # Tailwind @import
│   ├── App.tsx                    # BrowserRouter + Routes
│   └── index.tsx                  # Entry point
├── public/
│   ├── sitemap.xml                # 8 URLs
│   └── robots.txt                 # SEO robots rules
├── index.html                     # HTML template + GTM
├── tailwind.config.js             # Tailwind config (cores customizadas)
├── postcss.config.js              # PostCSS + Tailwind v4 plugin
├── vite.config.ts                 # Vite config
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
└── dist/                          # Production build
    ├── index.html                 # Compiled HTML
    ├── assets/
    │   ├── index-*.css           # Tailwind compiled
    │   └── index-*.js            # React bundled
    ├── sitemap.xml               # Copied
    └── ... (images, videos)
```

---

## 🚀 Rotas Implementadas

| Rota | Arquivo | Status |
|------|---------|--------|
| `/` | `Home.tsx` | ✅ Completo |
| `/como-funciona` | `ComoFunciona.tsx` | ✅ Completo |
| `/cardapios` | `Cardapios.tsx` | ✅ Completo |
| `/planos` | `Planos.tsx` | ✅ Placeholder |
| `/area-de-entrega` | `AreaDeEntrega.tsx` | ⚠️ Placeholder |
| `/sobre` | `Sobre.tsx` | ✅ Completo |
| `/responsavel-tecnico` | `ResponsavelTecnico.tsx` | ⚠️ Placeholder |
| `/perguntas-frequentes` | `PerguntasFrequentes.tsx` | ✅ Completo |
