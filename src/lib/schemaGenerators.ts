export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CozinhaPet',
  alternateName: 'CozinhaPets',
  url: 'https://www.cozinhapets.com.br',
  logo: 'https://www.cozinhapets.com.br/logo.png',
  description: 'Alimentação natural premium para cães desenvolvida por nutrólogos veterinários.',
  telephone: '+554198875288',
  email: 'cozinhapetcwb@gmail.com',
  sameAs: [
    'https://www.instagram.com/cozinhapet_/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
});

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'PetStore'],
  name: 'CozinhaPet',
  url: 'https://www.cozinhapets.com.br',
  telephone: '+554198875288',
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: ['Pix', 'Cartão de Crédito'],
  areaServed: [
    {
      '@type': 'City',
      name: 'Curitiba',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Região Metropolitana de Curitiba',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Paraná',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
  image: 'https://www.cozinhapets.com.br/logo.png',
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateFAQPageSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  price?: string;
  currency?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  brand: {
    '@type': 'Brand',
    name: 'CozinhaPet',
  },
  ...(product.price && product.currency && {
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: 'https://schema.org/InStock',
      url: 'https://www.cozinhapets.com.br/planos',
    },
  }),
});

export const generatePersonSchema = (person: {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  sameAs?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: person.jobTitle,
  description: person.description,
  image: person.image,
  sameAs: person.sameAs || [],
});

export const generateHowToSchema = (steps: Array<{ name: string; text: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como Funciona a Alimentação Natural para Cães',
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
});
