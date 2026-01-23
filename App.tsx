
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <BentoGrid />
        <section className="py-24 bg-brand-blue text-neutral-50 px-6 relative overflow-hidden">
          {/* Decorative Red Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Pronto para transformar a vida do seu melhor amigo?
            </h2>
            <p className="text-brand-blueLight text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
              Dietas personalizadas formuladas por especialistas com ingredientes de verdade e o rigor que seu pet merece.
            </p>
            <button className="bg-brand-red text-white px-10 py-4 rounded-full font-bold hover:bg-brand-redDark transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0">
              Falar com Especialista
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
