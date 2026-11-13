export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  canonical: string;
  ogType: string;
}

export const seoData: Record<string, SEOMetadata> = {
  '/': {
    title: 'Alimentação Natural para Cães em Curitiba | CozinhaPet',
    description: 'Alimentação natural para cães em Curitiba. Conheça nossos cardápios, planos e opções de comida natural para oferecer mais cuidado e qualidade na alimentação do seu pet.',
    keywords: 'alimentação natural cães, comida natural cachorro, cardápio alimentação natural, nutrição pet Curitiba, ração natural',
    ogImage: 'https://www.cozinhapets.com.br/logo.png',
    canonical: 'https://www.cozinhapets.com.br/',
    ogType: 'website',
  },
  '/como-funciona': {
    title: 'Como Funciona a Alimentação Natural para Cães | CozinhaPet',
    description: 'Entenda passo a passo como funciona o processo de alimentação natural personalizada para seu cão. Desde a consulta até a entrega e transição alimentar.',
    keywords: 'como funciona alimentação natural cães, processo alimentação pet, plano nutrição cão, consultoria nutricional veterinária',
    ogImage: 'https://www.cozinhapets.com.br/logo.png',
    canonical: 'https://www.cozinhapets.com.br/como-funciona',
    ogType: 'website',
  },
  '/cardapios': {
    title: 'Cardápios de Alimentação Natural para Cães | CozinhaPet',
    description: 'Descubra nossos cardápios personalizados com ingredientes 100% grau humano. Opções para todos os tamanhos e necessidades nutricionais.',
    keywords: 'cardápio alimentação natural cães, comida natural cachorro, receitas pet naturais, opções alimentação saudável cachorro',
    ogImage: 'https://www.cozinhapets.com.br/logo.png',
    canonical: 'https://www.cozinhapets.com.br/cardapios',
    ogType: 'website',
  },
  '/planos': {
    title: 'Planos de Alimentação Natural para Cães | CozinhaPet',
    description: 'Escolha o plano ideal para seu pet. Kit Degustação, Assinatura Mensal e Planos Personalizados com ingredientes naturais e fórmulas veterinárias.',
    keywords: 'planos alimentação natural cães, preços comida natural cachorro, assinatura pet, kit degustação',
    ogImage: 'https://www.cozinhapets.com.br/logo.png',
    canonical: 'https://www.cozinhapets.com.br/planos',
    ogType: 'website',
  },
  '/area-de-entrega': {
    title: 'Área de Entrega | Alimentação Natural para Cães em Curitiba',
    description: 'Confira se entregamos na sua região. Atendimento em Curitiba e Região Metropolitana com prazos e frequência personalizados.',
    keywords: 'área de entrega Curitiba, comida natural cachorro Curitiba, alimentação natural cães Curitiba, entrega pet PR',
    ogImage: 'https://www.cozinhapets.com.br/logo.png',
    canonical: 'https://www.cozinhapets.com.br/area-de-entrega',
    ogType: 'website',
  },
  '/sobre': {
    title: 'Sobre a CozinhaPet | Qualidade e Transparência em Nutrição Natural Pet',
    description: 'Conheça nossa história, missão e compromisso com a qualidade na alimentação natural para cães. Transparência e profissionalismo em cada refeição.',
    keywords: 'sobre CozinhaPet, história marca pet, qualidade ingredientes naturais, alimentação pet premium',
    ogImage: 'https://www.cozinhapets.com.br/logo.png',
    canonical: 'https://www.cozinhapets.com.br/sobre',
    ogType: 'website',
  },
  '/responsavel-tecnico': {
    title: 'Responsável Técnico | CozinhaPet - Nutrição Veterinária',
    description: 'Conheça o profissional responsável pelo desenvolvimento e acompanhamento técnico dos cardápios da CozinhaPet.',
    keywords: 'responsável técnico nutrição pet, nuvem veterinária, especialista alimentação natural cães',
    ogImage: 'https://www.cozinhapets.com.br/logo.png',
    canonical: 'https://www.cozinhapets.com.br/responsavel-tecnico',
    ogType: 'website',
  },
  '/perguntas-frequentes': {
    title: 'Perguntas Frequentes | Alimentação Natural para Cães | CozinhaPet',
    description: 'Respostas para dúvidas sobre alimentação natural, custos, transição alimentar, armazenamento e mais. Informações técnicas de uma equipe especializada.',
    keywords: 'perguntas frequentes pet, dúvidas alimentação natural cães, FAQ nutrição pet, transição alimentar cachorro',
    ogImage: 'https://www.cozinhapets.com.br/logo.png',
    canonical: 'https://www.cozinhapets.com.br/perguntas-frequentes',
    ogType: 'website',
  },
};

export const getSEOMeta = (pathname: string): SEOMetadata => {
  return seoData[pathname] || seoData['/'];
};
