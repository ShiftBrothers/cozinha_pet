
import React from 'react';
import { ShieldCheck, Truck, Heart, Beaker } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const stats = [
    { label: 'Ingredientes Grau Humano', value: '100%', icon: ShieldCheck },
    { label: 'Dietas Formuladas', value: '+5.000', icon: Beaker },
    { label: 'Tutores Satisfeitos', value: '98%', icon: Heart },
    { label: 'Entregas Mensais', value: '12k', icon: Truck },
  ];

  return (
    <section className="bg-white py-16 border-y border-brand-blueLight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <p className="text-brand-blue/40 font-bold text-xs uppercase tracking-widest mb-6">Parceiros em Excelência</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
             <div className="text-3xl font-serif font-black text-brand-blueDark">VETCARE</div>
             <div className="text-2xl font-sans font-bold text-brand-blueDark">PetZine</div>
             <div className="text-2xl font-serif italic text-brand-blueDark tracking-tighter">NUTRIDOG</div>
             <div className="text-3xl font-sans font-extrabold text-brand-blueDark">ANIMALIA</div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border-r last:border-r-0 border-brand-blueLight md:border-r">
               <div className="w-12 h-12 bg-brand-blueLight rounded-xl flex items-center justify-center text-brand-blue mb-4">
                 <stat.icon size={24} />
               </div>
               <div className="text-3xl font-serif font-bold text-brand-blueDark mb-1">{stat.value}</div>
               <div className="text-sm text-brand-blue/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
