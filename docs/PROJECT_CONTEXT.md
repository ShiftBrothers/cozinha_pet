# PROJECT_CONTEXT.md — CozinhaPet

> Documento gerado por auditoria técnica em 13/11/2026. Dados verificados no código-fonte.

---

## 1. Visão Geral

- **Nome do projeto:** cozinha-pet-institutional
- **Versão:** 0.0.0
- **URL de produção:** https://cozinhapets.com.br/
- **Repositório:** https://github.com/ShiftBrothers/cozinha_pet
- **Deploy:** Vercel (branch `main` apenas — `vercel.json`)
- **Tipo:** Site institucional single-page (SPA) para venda de alimentação natural para pets

---

## 2. Stack Tecnológica

| Tecnologia | Versão | Observação |
|---|---|---|
| React | ^19.2.3 | Última major, sem React Router |
| React DOM | ^19.2.3 | CSR (Client-Side Rendering) |
| Vite | ^6.2.0 | Bundler e dev server |
| TypeScript | ~5.8.2 | Configurado com `ESNext` modules |
| Tailwind CSS | **CDN (play)** | `cdn.tailwindcss.com` — NÃO instalado via npm |
| lucide-react | ^0.562.0 | Biblioteca de ícones |
| @vitejs/plugin-react | ^5.0.0 | Plugin React para Vite |

### Observações Críticas sobre Tailwind

O Tailwind é carregado via `<script src="https://cdn.tailwindcss.com">` no `index.html` (linha 27), com configuração inline (linhas 31-135). **Não existe** `tailwind.config.js`, `postcss.config.js`, nem Tailwind como dependência npm. Isso significa:

- Nenhum tree-shaking de CSS (todo o Tailwind é carregado ~300KB+)
- Configuração não portável
- Não adequado para produção segundo a própria documentação do Tailwind

---

## 3. Arquitetura do Projeto

### Estrutura de diretórios

```
cozinha_pet/
├── index.html              # Entry point HTML com meta tags, GTM, Tailwind CDN, JSON-LD
├── index.tsx               # React entry point (createRoot)
├── App.tsx                 # Componente raiz — orquestra todas as seções
├── metadata.json           # Metadados do projeto (AI Studio)
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json             # Deploy config — só branch main
├── setup_project.py        # Script auxiliar para criação de pastas
├── README.md
├── components/
│   ├── Navbar.tsx           # Navegação fixa com drawer mobile
│   ├── Hero.tsx             # Seção hero com vídeo autoplay
│   ├── Logo.tsx             # Componente de logo (img /logo.png)
│   ├── SocialProof.tsx      # Contadores animados e logos de parceiros
│   ├── NutritionalCalculator.tsx  # Calculadora nutricional (955 linhas)
│   ├── PricingComparison.tsx      # Kits de degustação
│   ├── Testimonials.tsx     # Cards de parceiros (vets e estabelecimentos)
│   ├── KnowledgePills.tsx   # Pílulas de conhecimento (sem links reais)
│   ├── Footer.tsx           # Rodapé com contato
│   └── FloatingButtons.tsx  # Botões flutuantes WhatsApp e Instagram
└── public/
    ├── robots.txt
    ├── sitemap.xml
    ├── logo.png
    ├── logo_guia.png
    ├── logo_parkpet.webp
    ├── fica_comigo.png
    ├── fica_comigo.webp
    ├── dnaanimal-icon.webp
    ├── autentica.webp
    ├── daniela_facanali.webp
    ├── carol_cattani.webp
    └── video1.mp4
```

### Renderização

- **100% Client-Side Rendering (CSR)** via `ReactDOM.createRoot`
- Não existe SSR, SSG, ou pré-renderização
- Google bot deve executar JS para ver conteúdo
- Sem React Router — SPA de página única com navegação por anchor (#)

### Seções/Rotas (anchor-based)

| Anchor | Componente | Seção |
|---|---|---|
| `#hero` | Hero.tsx | Hero com vídeo |
| (sem id) | SocialProof.tsx | Prova social |
| `#calculadora` | NutritionalCalculator.tsx | Calculadora |
| `#planos` | PricingComparison.tsx | Wrapper section |
| `#kit-degustacao` | PricingComparison.tsx | Kits degustação |
| `#parceiros` | Testimonials.tsx | Parceiros |
| `#conhecimento` | KnowledgePills.tsx | Pílulas |

---

## 4. Integrações Externas

| Integração | Endpoint/ID | Arquivo |
|---|---|---|
| Google Tag Manager | GTM-598BWVZM | index.html (linhas 6-13, 287-289) |
| Webhook formulário | `https://webhook.shiftbrothers.com.br/webhook/forms_site_cozinhapet` | NutritionalCalculator.tsx (linha 510) |
| WhatsApp API | `wa.me/5541988752887` | FloatingButtons.tsx |
| Instagram | `instagram.com/cozinhapet_` | FloatingButtons.tsx, JSON-LD |
| Google Fonts | Roboto Slab | index.html (linhas 28-30) |
| Unsplash (imagens externas) | URLs diretas | Hero.tsx (linhas 134-137) |

### GEMINI_API_KEY

- Referenciada em `vite.config.ts` e `README.md`
- **Não é usada por nenhum componente** — resíduo de scaffold do AI Studio
- Pode ser removida sem impacto

---

## 5. Dados de Negócio (verificados no código)

- **Telefone:** (41) 98875-2887 / +554198875288 (JSON-LD)
- **Email:** cozinhapetcwb@gmail.com
- **Localização:** Curitiba, PR
- **Área de entrega:** Curitiba e Região Metropolitana
- **Instagram:** @cozinhapet_
- **Pagamento:** Pix, Cartão de Crédito

### Produtos

- Kit Degustação 150g — R$ 40,00 (4 porções, cães pequeno porte)
- Kit Degustação 250g — R$ 60,00 (4 porções, médio/grande porte)
- Cardápios personalizados (adulto, sênior, filhote)
- 4 sabores adulto: Frangolino, Procurando Nemo, Mr. Músculo, Baby o Porquinho
- 3 sabores sênior: Sr. Músculo, Frangolino Sênior, Suíno Sênior

---

## 6. Observações Técnicas Relevantes

1. **NutritionalCalculator.tsx** tem 955 linhas — componente monolítico com lógica de negócio, UI, e integração misturadas
2. Imagens do Hero vêm do Unsplash (dependência externa) — podem quebrar
3. KnowledgePills tem "Ler artigo completo" sem link/destino funcional
4. Footer tem links "Política de Privacidade" e "Termos de Uso" apontando para `#` (não existem)
5. Footer Instagram link aponta para `#` em vez do perfil real
6. `setup_project.py` é script auxiliar, não é necessário em produção
7. `metadata.json` é resíduo do AI Studio, sem uso no build
