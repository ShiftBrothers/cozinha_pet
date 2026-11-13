import React, { useState } from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { NutritionalCalculator } from '../components/NutritionalCalculator';
import { PricingComparison } from '../components/PricingComparison';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '../lib/schemaGenerators';

const schema = [
  generateOrganizationSchema(),
  generateLocalBusinessSchema(),
];

export const Home: React.FC = () => {
  const [degustationKit, setDegustationKit] = useState<'kit_degust_150' | 'kit_degust_250' | null>(null);

  const handleSelectKit = (kit: 'kit_degust_150' | 'kit_degust_250') => {
    setDegustationKit(kit);
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageLayout
      pathname="/"
      schema={schema[0]}
    >
      <Hero />
      <SocialProof />
      <NutritionalCalculator
        degustationKit={degustationKit}
        clearDegustationKit={() => setDegustationKit(null)}
      />
      <PricingComparison onSelectKit={handleSelectKit} />
      <Testimonials />

      {/* Seção de CTA final */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-red/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-sage/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1440px] mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-6 leading-tight tracking-tight">
            A saúde dele <span className="italic text-brand-red">não pode</span><br className="hidden sm:block" /> esperar mais um dia.
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Cada dia com ração industrial é um dia a menos ao lado dele. Junte-se a milhares de tutores que escolheram investir em longevidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#calculadora" className="bg-brand-red text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-redDark transition-all shadow-2xl hover:shadow-brand-red/30 transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-3 group">
              Começar o Plano de Vitalidade
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/5541988752887?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20nutricionista%20sobre%20o%20melhor%20plano%20para%20meu%20pet." target="_blank" rel="noopener noreferrer" className="bg-brand-blue text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-brand-blueDark transition-all w-full sm:w-auto text-center focus:outline-2 focus:outline-offset-2 focus:outline-white">
              Falar com Nutricionista
            </a>
          </div>

          {/* Links para outras páginas */}
          <div className="mt-16 pt-16 border-t border-neutral-700">
            <p className="text-neutral-400 text-sm mb-8">Explore mais sobre nossa nutrição natural:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/como-funciona" className="text-white hover:text-brand-red transition-colors font-semibold text-sm">
                Como Funciona
              </a>
              <a href="/cardapios" className="text-white hover:text-brand-red transition-colors font-semibold text-sm">
                Cardápios
              </a>
              <a href="/area-de-entrega" className="text-white hover:text-brand-red transition-colors font-semibold text-sm">
                Área de Entrega
              </a>
              <a href="/perguntas-frequentes" className="text-white hover:text-brand-red transition-colors font-semibold text-sm">
                Dúvidas Frequentes
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
