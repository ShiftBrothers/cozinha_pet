
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <BentoGrid />
        
        {/* Call to Action Section - Highly responsive and visually impactful */}
        <section className="py-20 md:py-32 bg-brand-blue text-neutral-50 px-4 sm:px-6 relative overflow-hidden">
          {/* Decorative Red Accents for Wide Screens */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-red/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-[1440px] mx-auto text-center relative z-10 px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-8 leading-tight tracking-tight">
              Pronto para transformar a <br className="hidden sm:block" /> vida do seu melhor amigo?
            </h2>
            <p className="text-brand-blueLight text-lg md:text-2xl max-w-3xl mx-auto mb-12 opacity-90 leading-relaxed font-light">
              Junte-se a milhares de tutores que já escolheram o rigor técnico e o carinho da Cozinha Pet. Dietas personalizadas para cada fase da vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-brand-red text-white px-12 py-5 rounded-full font-black text-lg hover:bg-brand-redDark transition-all shadow-2xl hover:shadow-brand-red/40 transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
                Montar Meu Plano
              </button>
              <button className="bg-transparent border-2 border-brand-blueLight/30 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                Ver Cardápio
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
