
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden bg-neutral-50 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* Visual - Top on Mobile for maximum "Vibe" impact */}
        <div className="relative order-1 md:order-2 px-4 md:px-0">
          <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[4/5] shadow-2xl transform md:rotate-2 transition-transform hover:rotate-0 duration-700 border-[6px] md:border-8 border-white">
             <img 
               src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1200" 
               alt="Cachorro saudável e feliz da Cozinha Pet" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent"></div>
          </div>
          
          {/* Decorative elements - Scaled for high res */}
          <div className="absolute -top-10 -right-10 w-48 h-48 md:w-80 md:h-80 bg-brand-blue/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-brand-red/10 rounded-full blur-3xl -z-0"></div>
          
          {/* Floating Card - Responsive positioning */}
          <div className="absolute -bottom-4 -right-2 md:-right-6 lg:right-10 bg-white/95 backdrop-blur p-4 md:p-6 rounded-2xl shadow-2xl z-20 max-w-[160px] md:max-w-[220px] border border-brand-blue/10 animate-bounce-subtle">
            <p className="text-[8px] md:text-[10px] font-black text-brand-red uppercase tracking-widest mb-1 md:mb-2">Destaque do mês</p>
            <p className="font-serif text-brand-blueDark font-bold mb-1 text-base md:text-xl">Frango com Alecrim</p>
            <p className="text-[9px] md:text-xs text-brand-blue/70 leading-tight">Receita autoral rica em fibras e colágeno natural.</p>
          </div>
        </div>

        {/* Content - Bottom on mobile, Left on desktop */}
        <div className="z-10 order-2 md:order-1 text-center md:text-left mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 bg-brand-blueLight text-brand-blue px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6 md:mb-8 border border-brand-blue/10">
            <Star size={12} fill="currentColor" className="sm:w-[14px] sm:h-[14px]" />
            Padrão Ouro em Nutrição Animal
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif text-brand-blueDark leading-[1.1] mb-6 md:mb-8 tracking-tight">
            A ciência da <span className="italic text-brand-red">natureza</span> na tigela dele.
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-brand-blueDark/70 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
            Combinamos o rigor técnico da nutrição clínica com ingredientes frescos 100% grau humano. A dieta que seu pet merece, assinada pela Cozinha Pet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-brand-red text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-brand-redDark transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-brand-red/30 group active:scale-95">
              Montar Cardápio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-brand-blueDark border border-brand-blueLight px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-brand-blueLight transition-all text-center shadow-sm active:scale-95">
              Como funciona
            </button>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 text-xs md:text-sm text-brand-blueDark/60 justify-center md:justify-start">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=100"
              ].map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-neutral-50 object-cover shadow-sm" 
                  alt={`Pet satisfeito ${i + 1}`} 
                />
              ))}
            </div>
            <span className="text-center sm:text-left font-medium">
              <strong className="text-brand-blue">+5.000 pets</strong> felizes e saudáveis com nossa nutrição
            </span>
          </div>
        </div>
      </div>
      
      {/* Visual background details for wide screens */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-50"></div>
    </section>
  );
};
