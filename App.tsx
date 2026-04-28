
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { NutritionalCalculator } from './components/NutritionalCalculator';
import { BentoGrid } from './components/BentoGrid';
import { PricingComparison } from './components/PricingComparison';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { KnowledgePills } from './components/KnowledgePills';
import { Footer } from './components/Footer';
import { ArrowRight, Shield, RotateCcw, Truck } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <NutritionalCalculator />
        <BentoGrid />
        <PricingComparison />
        <BeforeAfter />
        <Testimonials />
        <KnowledgePills />
        
        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-neutral-900 text-white px-4 sm:px-6 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-red/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-sage/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-[1440px] mx-auto text-center relative z-10 px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-6 leading-tight tracking-tight">
              A saúde dele <span className="italic text-brand-red">não pode</span><br className="hidden sm:block" /> esperar mais um dia.
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Cada dia com ração industrial é um dia a menos ao lado dele. Junte-se a milhares de tutores que escolheram investir em longevidade.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium">
                <Shield size={16} className="text-brand-sage" />
                Garantia 30 dias
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium">
                <RotateCcw size={16} className="text-brand-sage" />
                Cancele quando quiser
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium">
                <Truck size={16} className="text-brand-sage" />
                Frete grátis no 1º pedido
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#calculadora" className="bg-brand-red text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-redDark transition-all shadow-2xl hover:shadow-brand-red/30 transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-3 group">
                Começar o Plano de Vitalidade
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="bg-transparent border border-neutral-700 text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-white/5 transition-all w-full sm:w-auto text-center">
                Falar com Nutricionista
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
