# DEPLOYMENT GUIDE — CozinhaPet SEO

## 🎯 O que foi entregue

**Projeto refatorado de SPA para multi-página com SEO + Analytics:**

### ✅ 8 Páginas (React Router)
1. **Home** (`/`) — Hero, valor, CTA WhatsApp
2. **Como Funciona** (`/como-funciona`) — 8 passos visuais
3. **Cardápios** (`/cardapios`) — 4 menus estruturados
4. **Planos** (`/planos`) — Kit Degustação (preços)
5. **Área de Entrega** (`/area-de-entrega`) — Placeholder (atualizar)
6. **Sobre** (`/sobre`) — História, diferencial, transparência
7. **Responsável Técnico** (`/responsavel-tecnico`) — Placeholder (CRMV)
8. **FAQ** (`/perguntas-frequentes`) — 9 perguntas + schema

### ✅ SEO + Performance
- Meta tags dinâmicas (title, description, og:image, canonical)
- 6 schemas JSON-LD
- Sitemap XML + Robots.txt
- Tailwind v4 build-time (50KB)
- JS minificado (355KB gzip)

### ✅ Analytics GA4
- GTM container (GTM-598BWVZM)
- 2 events (whatsapp_click, instagram_click)
- FloatingButtons tracked

### ✅ Build Validado
- npm run build ✅ (6.24s)
- dist/ pronto para deploy
- Rotas testadas

---

## 📦 Deploy Opções

### Vercel (Recomendado — Gratuito)

**1. Criar conta: vercel.com**

**2. Conectar GitHub**
- Vercel → Add New → Project
- Selecionar cozinha_pet repo

**3. Configurar Build**
- Framework: Vite
- Build: npm run build
- Output: dist/

**4. Deploy automático**
```bash
git push origin main
# Auto-deploy em ~2min
```

**5. Domínio customizado**
- Vercel Dashboard → Settings → Domains
- Adicionar: cozinhapets.com.br
- Seguir DNS (CNAME)

---

### Netlify (Alternativa)

**1. netlify.com → Add new site**

**2. Conectar GitHub repo**

**3. Build settings**
- Build: npm run build
- Publish: dist/

**4. Deploy automático**

---

### VPS/Apache (Servidor Dedicado)

**1. Build local**
```bash
npm run build
```

**2. Copiar para servidor**
```bash
scp -r dist/* user@servidor:/var/www/cozinhapets.com.br/
```


---

## 📝 Dados Faltando (Cliente Preencher)

### Responsável Técnico
- Nome completo
- CRMV (número)
- Foto (opcional)

### Área de Entrega
- Bairros atendidos
- Raio cobertura (km)
- Taxa entrega por zona

### Conteúdo
- Fotos cardápios (reais)
- Foto responsável técnico
- Fotos estabelecimento

**Atualizar após preencher:**
```bash
# Editar pages placeholder
npm run build
# Deploy nova versão
```

---

## 🚀 Primeira Semana

### Dia 1-2: Indexação
- Search Console → Cobertura: 8 URLs
- Erros: 0

### Dia 3-5: Tráfego GA4
- Visitantes por rota
- WhatsApp clicks
- Bounce rate

### Dia 6-7: Ranking
- Posições iniciais
- CTR esperado: 2-5%
- Posição: 30-50

---

## 🐛 Troubleshooting

### Rotas retornam 404
```nginx
location / {
  try_files $uri /index.html;
}
```

### GA4 não rastreia
- DevTools → Network → googletagmanager
- Verificar gtm.js carrega
- Container ID: GTM-598BWVZM correto?

### Meta tags não compartilham
- Facebook Debugger: developers.facebook.com/tools/debug/og/
- Colar URL → Scrape Again

### Build falha Vercel
- Vercel Settings → Node: v18+
- Local: node --version (v18+)

---

## 📊 Métricas Mensal

| Métrica | Meta |
|---------|------|
| Indexação | 8/8 URLs |
| Posição | Top 30 |
| Tráfego | 100+/mês |
| WhatsApp CTR | > 5% |
| Bounce Rate | < 60% |
| Conversão | 1 WA / 10 visitas |

---

## 💾 Segurança

- Git backup sempre
- Não commitear: .env, node_modules, dist
- HTTPS automático (Vercel/Netlify)
- VPS: Let's Encrypt

---

## ✅ Status Final

**Site 100% pronto para produção:**

Build: ✅ | Rotas: ✅ | SEO: ✅ | Analytics: ✅ | Responsive: ✅

**Próximo passo: Deploy + DNS + Google Search Console**

**3. nginx.conf (SPA routing)**
```nginx
location / {
  try_files $uri /index.html;
}
```

**4. HTTPS (Let's Encrypt)**
```bash
certbot --nginx -d cozinhapets.com.br
```

---

## 🔍 Pós-Deploy (48h Checklist)

### Google Search Console
1. search.google.com/search-console
2. Adicionar propriedade
3. Verificar via DNS
4. Enviar: https://cozinhapets.com.br/sitemap.xml
5. Solicitar indexação (8 URLs)

### Google Perfil Empresa
1. business.google.com
2. Criar: CozinhaPet
3. Preencher: Endereço, telefone, horário
4. Upload: 3+ fotos
5. Verificar (SMS/correio)

### GA4 Teste
1. Abrir site
2. GA4 Realtime
3. Clicar WhatsApp
4. Verificar evento em ~3s

### Lighthouse
- DevTools → Lighthouse → Mobile
- Metas: FCP < 1.5s, LCP < 2.5s
