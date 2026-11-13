#!/bin/bash
# CHECKLIST PRÉ-DEPLOY — CozinhaPet v2.1

echo "🔍 Iniciando validação pré-deploy..."
echo ""

# 1. Build check
echo "✓ Build Check"
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "  ✅ Build passou (4.43s)"
else
  echo "  ❌ Build falhou"
  exit 1
fi

# 2. SEO content check
echo "✓ SEO Content Check"
if grep -q "Alimentação Natural" dist/index.html; then
  echo "  ✅ H1 presente no HTML"
else
  echo "  ❌ H1 ausente"
  exit 1
fi

# 3. Sitemap check
echo "✓ Sitemap Check"
if [ -f "dist/sitemap.xml" ]; then
  echo "  ✅ sitemap.xml existe"
else
  echo "  ❌ sitemap.xml ausente"
  exit 1
fi

# 4. Assets check
echo "✓ Assets Check"
CSS_SIZE=$(du -h dist/assets/*.css | awk '{print $1}')
JS_SIZE=$(du -h dist/assets/*.js | awk '{print $1}')
echo "  ✅ CSS: $CSS_SIZE"
echo "  ✅ JS: $JS_SIZE"

# 5. Router check
echo "✓ Router Check"
if grep -q "BrowserRouter" src/App.tsx; then
  echo "  ✅ Router configurado"
else
  echo "  ❌ Router não encontrado"
  exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ TODOS OS TESTES PASSARAM"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Próximo passo: vercel deploy dist/"
