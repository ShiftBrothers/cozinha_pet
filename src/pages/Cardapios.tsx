import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { generateProductSchema } from '../lib/schemaGenerators';
import { Check, ArrowRight } from 'lucide-react';

const cardapios = [
  {
    name: 'Mr. Músculo (Bovino)',
    description: 'Carne bovina premium com vegetais orgânicos selecionados. Rico em proteína e ferro.',
    features: ['100% grau humano', 'Sem conservantes', 'Alto em proteína', 'Ideal para cães ativos'],
  },
  {
    name: 'Frangolino (Frango)',
    description: 'Peito de frango com ervas naturais. Leve e nutritivo para todos os tamanhos.',
    features: ['100% grau humano', 'Proteína magra', 'Fácil digestão', 'Recomendado para sensibilidade'],
  },
  {
    name: 'Baby o Porquinho (Suíno)',
    description: 'Carne suína com raízes e vegetais. Sabor único e altamente palatável.',
    features: ['100% grau humano', 'Vitamina B rica', 'Altamente nutritivo', 'Excelente palatabilidade'],
  },
  {
    name: 'Procurando Nemo (Peixe)',
    description: 'Peixe fresco com ômega 3 natural. Saúde da pele e pelagem garantida.',
    features: ['100% grau humano', 'Ômega 3 natural', 'Beneficia pelagem', 'Anti-inflamatório'],
  },
];

export const Cardapios: React.FC = () => {
  return (
    <PageLayout pathname="/cardapios">
      <section className="pt-32 pb-16 md:pb-24 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-neutral-900 leading-[1.1] tracking-tight mb-6">
            Nossos Cardápios Personalizados
          </h1>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Cada cardápio é desenvolvido por nutrólogos veterinários com ingredientes 100% grau humano.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {cardapios.map((card, i) => (
              <div key={i} className="bg-brand-cream rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-all">
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-3">
                  {card.name}
                </h2>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {card.description}
                </p>
                <div className="space-y-2">
                  {card.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Check size={18} className="text-brand-red flex-shrink-0" />
                      <span className="text-neutral-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Quer conhecer nossos cardápios em detalhes?
            </h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Converse com nossa equipe sobre as melhores opções para seu pet.
            </p>
            <a
              href="https://wa.me/5541988752887?text=Gostaria%20de%20conhecer%20mais%20detalhes%20sobre%20os%20card%C3%A1pios%20da%20CozinhaPet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-bold hover:bg-brand-redDark transition-all shadow-lg group"
            >
              Conhecer Cardápios
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
