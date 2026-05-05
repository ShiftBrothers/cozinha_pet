
import React, { useRef, useEffect, useState } from 'react';
import { Microscope, Shield, Package, Heart, Leaf, Zap } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="metodologia" className="py-20 md:py-32 bg-brand-cream">
      <div ref={ref} className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-blueLight text-brand-blue px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-blue/10">
            <Microscope size={14} />
            Nossa Metodologia
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
            Não é sobre ingredientes. <br className="hidden sm:block"/>
            É sobre <span className="italic text-brand-red">resultados.</span>
          </h2>
          <p className="text-neutral-500 max-w-2xl text-base md:text-lg mx-auto md:mx-0">
            Enquanto outros falam sobre "carne selecionada", nós medimos a biodisponibilidade proteica, o equilíbrio mineral e o impacto metabólico real em cada lote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 md:auto-rows-[220px] lg:auto-rows-[240px]">
          {/* Main Feature */}
          <div className="sm:col-span-2 lg:col-span-8 lg:row-span-2 bg-neutral-900 rounded-[2rem] md:rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between text-neutral-50 overflow-hidden relative group">
            <div className="z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-10">
                <Microscope size={28} className="text-brand-sageLight" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 lg:mb-6">Proteína de Alta<br/>Biodisponibilidade</h3>
              <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
                Articulações 3x mais fortes com colágeno tipo II. Cada receita segue protocolos NRC/FEDIAF, garantindo absorção máxima de aminoácidos essenciais para a saúde estrutural do seu pet.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2 lg:gap-3 z-10">
              <span className="bg-white/5 border border-white/10 px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium">Colágeno Tipo II</span>
              <span className="bg-white/5 border border-white/10 px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium">Zero Conservantes</span>
              <span className="bg-white/5 border border-white/10 px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium">95% Digestibilidade</span>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 md:w-[400px] md:h-[400px] bg-brand-sage/15 rounded-full blur-[100px] group-hover:bg-brand-sage/25 transition-all duration-700"></div>
          </div>

          {/* Zero Risco */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center border border-neutral-200/60 sm:col-span-1 lg:col-span-4 lg:row-span-1 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
             <Shield className="text-brand-blue mb-4" size={32} />
             <h3 className="text-xl font-bold text-neutral-900 mb-2">Zero Risco Microbiológico</h3>
             <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">Controle HACCP em cada lote. Padrões sanitários hospitalares para pureza absoluta.</p>
          </div>

          {/* Frescor */}
          <div className="bg-brand-sageLight rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center border border-brand-sage/15 sm:col-span-1 lg:col-span-4 lg:row-span-1 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
             <div className="flex items-center gap-3 mb-4">
                <Package className="text-brand-sage" size={32} />
                <span className="font-bold text-neutral-800 text-lg">Frescor na Porta</span>
             </div>
             <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">Da cozinha ao freezer em menos de 4 horas. Entregas programadas e refrigeradas.</p>
          </div>

          {/* Formulação Card */}
          <div className="sm:col-span-1 lg:col-span-4 lg:row-span-2 bg-brand-red rounded-[2rem] md:rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-end relative overflow-hidden group min-h-[300px] md:min-h-0">
             <img 
               src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=600" 
               className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
               alt="Preparação de refeição natural para pet"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-redDark/95 via-brand-redDark/40 to-transparent"></div>
             <div className="relative z-10">
               <Heart className="text-white mb-4" size={32} fill="white" />
               <h3 className="text-2xl font-serif text-white mb-2">Formulação Individualizada</h3>
               <p className="text-white/80 text-sm leading-relaxed">Cada receita segue protocolos NRC/FEDIAF. O rigor do laboratório com o carinho da cozinha.</p>
             </div>
          </div>

          {/* Sustentabilidade */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center border border-neutral-200/60 sm:col-span-1 lg:col-span-4 lg:row-span-1 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
             <Leaf className="text-brand-sage mb-4" size={32} />
             <h3 className="text-xl font-bold text-neutral-900 mb-2">Sustentabilidade Rastreável</h3>
             <p className="text-xs md:text-sm text-neutral-500">100% embalagens compostáveis. Cadeia de fornecimento transparente e auditável.</p>
          </div>

           {/* Suporte */}
           <div className="bg-neutral-900 rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center text-white sm:col-span-1 lg:col-span-4 lg:row-span-1 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
             <Zap className="text-brand-red mb-4" size={32} fill="currentColor" />
             <h3 className="text-xl font-bold mb-2">Acompanhamento Nutricional</h3>
             <p className="text-xs md:text-sm text-neutral-400">Nutrólogo veterinário dedicado no seu WhatsApp. Suporte contínuo, não apenas na venda.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
