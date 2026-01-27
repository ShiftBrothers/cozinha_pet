
import React from 'react';
import { Zap, Shield, Heart, Package, Leaf, Microscope } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-brand-blueDark mb-6 leading-tight">
            Compromisso com o rigor <br className="hidden sm:block"/>
            <span className="italic text-brand-red underline underline-offset-8">nutricional absoluto.</span>
          </h2>
          <p className="text-brand-blueDark/70 max-w-2xl text-base md:text-lg mx-auto md:mx-0">
            Nossa cozinha opera sob os mais altos padrões de segurança alimentar, transformando a marca em promessa: qualidade técnica e carinho em cada porção.
          </p>
        </div>

        {/* Adaptive Grid: 1 col mobile -> 2 col tablet -> 12 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 md:auto-rows-[220px] lg:auto-rows-[240px]">
          {/* Main Feature: Nutrição - Span more space on large screens */}
          <div className="sm:col-span-2 lg:col-span-8 lg:row-span-2 bg-brand-blueDark rounded-[2rem] md:rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between text-neutral-50 overflow-hidden relative group">
             <div className="z-10">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-10">
                 <Microscope size={28} className="text-brand-blueLight" />
               </div>
               <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 lg:mb-6">Nutrição de Precisão</h3>
               <p className="text-brand-blueLight/70 max-w-md text-sm md:text-base leading-relaxed">
                 Cada receita é balanceada por nutrólogos veterinários, garantindo micronutrientes biodisponíveis e o suporte metabólico que seu pet precisa para viver mais e melhor.
               </p>
             </div>
             <div className="mt-10 flex flex-wrap gap-2 lg:gap-3 z-10">
               <span className="bg-white/5 border border-white/10 px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium">Equilíbrio Cálcio/Fósforo</span>
               <span className="bg-white/5 border border-white/10 px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium">Zero Conservantes</span>
               <span className="bg-white/5 border border-white/10 px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium">Biodisponível</span>
             </div>
             {/* Background Red Accent */}
             <div className="absolute -bottom-20 -right-20 w-80 h-80 md:w-[400px] md:h-[400px] bg-brand-red/10 rounded-full blur-[100px] group-hover:bg-brand-red/20 transition-all duration-700"></div>
          </div>

          {/* Feature: Higiene */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center border border-brand-blueLight bento-inner-shadow sm:col-span-1 lg:col-span-4 lg:row-span-1 hover:shadow-xl transition-shadow">
             <Shield className="text-brand-blue mb-4" size={32} />
             <h3 className="text-xl font-bold text-brand-blueDark mb-2">Higiene Farmacêutica</h3>
             <p className="text-xs md:text-sm text-brand-blueDark/60 leading-relaxed">Padrões sanitários hospitalares para garantir a pureza de cada refeição.</p>
          </div>

          {/* Feature: Entrega */}
          <div className="bg-brand-blueLight rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center border border-brand-blue/10 sm:col-span-1 lg:col-span-4 lg:row-span-1 hover:shadow-xl transition-shadow">
             <div className="flex items-center gap-3 mb-4">
                <Package className="text-brand-blue" size={32} />
                <span className="font-bold text-brand-blueDark text-lg">Logística Fria</span>
             </div>
             <p className="text-xs md:text-sm text-brand-blueDark/70 leading-relaxed">Entregas programadas e refrigeradas em toda a região metropolitana.</p>
          </div>

          {/* Feature: Amor/Comunidade - Visual Hero Card */}
          <div className="sm:col-span-1 lg:col-span-4 lg:row-span-2 bg-brand-red rounded-[2rem] md:rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-end relative overflow-hidden group min-h-[300px] md:min-h-0">
             <img 
               src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=600" 
               className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
               alt="Gato saudável sendo cuidado"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-redDark/90 via-brand-redDark/20 to-transparent"></div>
             <div className="relative z-10">
               <Heart className="text-white mb-4" size={32} fill="white" />
               <h3 className="text-2xl font-serif text-white mb-2">Amor Científico</h3>
               <p className="text-white/80 text-sm leading-relaxed">O cuidado artesanal da cozinha aliado ao rigor estatístico do laboratório.</p>
             </div>
          </div>

          {/* Feature: Sustentabilidade */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center border border-brand-blueLight bento-inner-shadow sm:col-span-1 lg:col-span-4 lg:row-span-1 hover:shadow-xl transition-shadow">
             <Leaf className="text-brand-red mb-4" size={32} />
             <h3 className="text-xl font-bold text-brand-blueDark mb-2">Impacto Mínimo</h3>
             <p className="text-xs md:text-sm text-brand-blueDark/60">Embalagens ecológicas e redução de desperdício em toda a cadeia.</p>
          </div>

           {/* Feature: Consulta (Tablet/Desktop only extra space or just consistent card) */}
           <div className="bg-brand-blueDark rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center text-white sm:col-span-1 lg:col-span-4 lg:row-span-1 hover:shadow-xl transition-shadow">
             <Zap className="text-brand-red mb-4" size={32} fill="currentColor" />
             <h3 className="text-xl font-bold mb-2">Suporte Veterinário</h3>
             <p className="text-xs md:text-sm text-brand-blueLight/60">Canal direto para dúvidas nutricionais com nossa equipe técnica.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
