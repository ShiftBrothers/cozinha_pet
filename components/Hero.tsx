
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column: Content */}
        <div className="z-10 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-brand-blueLight text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-brand-blue/10">
            <Star size={14} fill="currentColor" />
            Padrão Ouro em Nutrição Animal
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif text-brand-blueDark leading-[1.1] mb-8">
            A ciência da <span className="italic text-brand-red">natureza</span> na tigela dele.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-blueDark/70 mb-10 leading-relaxed max-w-lg">
            Combinamos o rigor técnico da nutrição clínica com ingredientes frescos 100% grau humano. A dieta que seu pet merece, assinada pela Cozinha Pet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-red text-white px-10 py-5 rounded-full font-bold hover:bg-brand-redDark transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group">
              Montar Cardápio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-brand-blueDark border border-brand-blueLight px-10 py-5 rounded-full font-bold hover:bg-brand-blueLight transition-all text-center shadow-sm">
              Como funciona
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-brand-blueDark/60">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 40}/64/64`} 
                  className="w-10 h-10 rounded-full border-2 border-neutral-50 object-cover" 
                  alt="Customer avatar" 
                />
              ))}
            </div>
            <span><strong className="text-brand-blue">+5.000 tutores</strong> confiam na nossa cozinha</span>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative order-1 md:order-2">
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl transform md:rotate-2 transition-transform hover:rotate-0 duration-700 border-8 border-white">
             <img 
               src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=800" 
               alt="Cachorro saudável e feliz" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent"></div>
          </div>
          
          {/* Decorative elements using brand colors */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl -z-0"></div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-6 -right-6 md:right-10 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-xl z-20 max-w-[200px] border border-brand-blue/10">
            <p className="text-[10px] font-black text-brand-red uppercase tracking-widest mb-2">Destaque do mês</p>
            <p className="font-serif text-brand-blueDark font-bold mb-1 text-lg">Frango com Alecrim</p>
            <p className="text-[10px] text-brand-blue/70 leading-tight">Receita autoral rica em fibras e colágeno natural.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
