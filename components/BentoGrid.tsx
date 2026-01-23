
import React from 'react';
import { Zap, Shield, Heart, Package, Leaf, Microscope } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-blueDark mb-6">Compromisso com o rigor <br/><span className="italic text-brand-red underline underline-offset-8">nutricional.</span></h2>
          <p className="text-brand-blueDark/70 max-w-2xl text-lg">Nossa cozinha opera sob os mais altos padrões de segurança alimentar, transformando a logo em promessa: qualidade técnica e carinho em cada porção.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
          {/* Main Feature: Nutrição */}
          <div className="md:col-span-8 md:row-span-2 bg-brand-blueDark rounded-[2.5rem] p-10 flex flex-col justify-between text-neutral-50 overflow-hidden relative group">
             <div className="z-10">
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                 <Microscope size={24} className="text-brand-blueLight" />
               </div>
               <h3 className="text-3xl font-serif mb-4">Nutrição de Precisão</h3>
               <p className="text-brand-blueLight/70 max-w-md leading-relaxed">
                 Cada receita é balanceada por nutrólogos veterinários, garantindo micronutrientes biodisponíveis e o suporte metabólico que seu pet precisa.
               </p>
             </div>
             <div className="mt-8 flex gap-3 z-10">
               <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium">Equilíbrio Cálcio/Fósforo</span>
               <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium">Sem Conservantes</span>
             </div>
             {/* Abstract background shape using red accent */}
             <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl group-hover:bg-brand-red/20 transition-colors"></div>
          </div>

          {/* Feature: Higiene */}
          <div className="md:col-span-4 md:row-span-1 bg-white rounded-[2.5rem] p-8 flex flex-col justify-center border border-brand-blueLight bento-inner-shadow">
             <Shield className="text-brand-blue mb-4" size={32} />
             <h3 className="text-xl font-bold text-brand-blueDark mb-2">Higiene Farmacêutica</h3>
             <p className="text-sm text-brand-blueDark/60">Controle sanitário rigoroso, espelhando a seriedade da nossa marca.</p>
          </div>

          {/* Feature: Amor/Comunidade */}
          <div className="md:col-span-4 md:row-span-2 bg-brand-red rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=400" 
               className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
               alt="Pet Care"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-redDark/90 via-brand-redDark/30 to-transparent"></div>
             <div className="relative z-10">
               <Heart className="text-white mb-4" size={32} fill="white" />
               <h3 className="text-2xl font-serif text-white mb-2">Amor em Cada Detalhe</h3>
               <p className="text-white/80 text-sm">O chapéu de chef na nossa logo representa o cuidado artesanal em escala industrial.</p>
             </div>
          </div>

          {/* Feature: Entrega */}
          <div className="md:col-span-4 md:row-span-1 bg-brand-blueLight rounded-[2.5rem] p-8 flex flex-col justify-center border border-brand-blue/10">
             <div className="flex items-center gap-3 mb-4">
                <Package className="text-brand-blue" size={32} />
                <span className="font-bold text-brand-blueDark">Entrega Inteligente</span>
             </div>
             <p className="text-sm text-brand-blueDark/70">Logística pontual para que o estoque de saúde do seu pet nunca acabe.</p>
          </div>

           {/* Feature: Sustentabilidade */}
           <div className="md:col-span-4 md:row-span-1 bg-white rounded-[2.5rem] p-8 flex flex-col justify-center border border-brand-blueLight bento-inner-shadow">
             <Leaf className="text-brand-red mb-4" size={32} />
             <h3 className="text-xl font-bold text-brand-blueDark mb-2">Impacto Mínimo</h3>
             <p className="text-sm text-brand-blueDark/60">Compromisso com o planeta através de embalagens 100% recicláveis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
