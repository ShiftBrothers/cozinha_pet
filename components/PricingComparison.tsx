
import React, { useRef, useEffect, useState } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Kit Degustação 150g',
    price: 'R$ 40,00',
    period: '/kit',
    desc: 'Porções ideais para cães de pequeno porte.',
    features: [
      'Contém 4 porções de 150g',
      'Mr. Músculo (bovino)',
      'Frangolino (frango)',
      'Baby o Porquinho (suíno)',
      'Procurando Nemo (peixe)',
      'Ingredientes 100% grau humano',
      'Livre de conservantes artificiais'
    ],
    highlighted: false,
    cta: 'Experimentar Kit 150g'
  },
  {
    name: 'Kit Degustação 250g',
    price: 'R$ 60,00',
    period: '/kit',
    desc: 'Porções ideais para cães de médio e grande porte.',
    features: [
      'Contém 4 porções de 250g',
      'Mr. Músculo (bovino)',
      'Frangolino (frango)',
      'Baby o Porquinho (suíno)',
      'Procurando Nemo (peixe)',
      'Ingredientes 100% grau humano',
      'Livre de conservantes artificiais'
    ],
    highlighted: true,
    cta: 'Experimentar Kit 250g'
  }
];

interface PricingComparisonProps {
  onSelectKit?: (kit: 'kit_degust_150' | 'kit_degust_250') => void;
}

export const PricingComparison: React.FC<PricingComparisonProps> = ({ onSelectKit }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="planos" className="py-20 md:py-32 bg-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-red/3 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/4"></div>

      <div ref={ref} className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>


        {/* Pricing Cards / Kit Degustação Section */}
        <div id="kit-degustacao" className="scroll-mt-24 pt-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 mb-4 leading-tight">
              Conheça nosso <span className="italic text-brand-red">kit degustação</span>
            </h2>
            <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
              O jeito mais fácil de descobrir os sabores favoritos do seu pet. Disponível em dois tamanhos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`relative rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${plan.highlighted
                ? 'bg-neutral-900 text-white shadow-2xl shadow-neutral-900/20 ring-2 ring-brand-red/30 scale-[1.02] md:scale-105'
                : 'bg-white border border-neutral-200 hover:shadow-xl'
                }`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Star size={12} fill="white" /> Mais Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>{plan.name}</h3>
                  <p className={`text-xs ${plan.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className={`text-4xl font-serif ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>{plan.period}</span>
                </div>
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <Check size={16} className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-brand-sageLight' : 'text-brand-sage'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-neutral-300' : 'text-neutral-600'}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group active:scale-95 ${plan.highlighted
                    ? 'bg-brand-red text-white hover:bg-brand-redDark shadow-lg'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                    }`}
                  id={`plan-${plan.name.toLowerCase().replace(/\s+/g, '-')}-cta`}
                  onClick={() => onSelectKit?.(plan.name.includes('150g') ? 'kit_degust_150' : 'kit_degust_250')}
                >
                  {plan.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
