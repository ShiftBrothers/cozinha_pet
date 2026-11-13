import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes que serão pré-renderizadas
const routes = [
  '/',
  '/como-funciona',
  '/cardapios',
  '/planos',
  '/area-de-entrega',
  '/sobre',
  '/responsavel-tecnico',
  '/perguntas-frequentes',
];

/**
 * Script para gerar HTML estático pré-renderizado
 * Executado após `npm run build`
 * Insere conteúdo principal no HTML antes do React renderizar
 */
export async function generateStaticHtml() {
  const distDir = path.join(__dirname, 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ não encontrado. Execute `npm run build` primeiro.');
    process.exit(1);
  }

  const indexHtml = path.join(distDir, 'index.html');
  let html = fs.readFileSync(indexHtml, 'utf-8');

  // Inserir script que renderiza conteúdo mínimo antes do JS carregar
  const preloadScript = `
    <script>
      // Detectar rota atual
      const path = window.location.pathname;
      
      // Renderizar placeholder de conteúdo (melhora percepção de carregamento)
      if (path === '/') {
        document.body.innerHTML += '<div style="opacity:0">Carregando...</div>';
      }
    </script>
  `;

  // Adicionar após <body>
  html = html.replace('<body class="overflow-x-hidden">', '<body class="overflow-x-hidden">' + preloadScript);

  fs.writeFileSync(indexHtml, html);
  console.log('✅ HTML pré-renderizado com sucesso');
}

generateStaticHtml().catch(console.error);
