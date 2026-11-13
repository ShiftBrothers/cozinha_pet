import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Kit Degustação 150g',
    price: 'R$ 40,00',
    desc: 'Para cães pequenos',
    features: ['4 porções de 150g', 'Múltiplos sabores', '100% grau humano', 'Teste sem compromisso'],
    highlighted: false,
  },
  {
    name: 'Kit Degustação 250g',
    price: 'R$ 60,00',
    desc: 'Para cães médios e grandes',
    features: ['4 porções de 250g', 'Múltiplos sabores', '100% grau humano', 'Teste sem compromisso'],
    highlighted: true,
  },
];

export const Planos: React.FC = () => {
  return (
    <PageLayout pathname="/planos">
      <section className="pt-32 pb-16 md:pb-24 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-neutral-900 leading-[1.1] tracking-tight mb-6">
            Escolha o Plano Ideal para Seu Pet
          </h1>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Começe com nosso Kit Degustação e descubra qual sabor seu cão mais gosta.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 flex flex-col transition-all ${
                  plan.highlighted
                    ? 'bg-neutral-900 text-white shadow-2xl ring-2 ring-brand-red/30 scale-105'
                    : 'bg-white border border-neutral-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <Star size={12} fill="white" /> Mais Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {plan.desc}
                </p>
                <div className="mb-8">
                  <span className={`text-5xl font-serif font-bold ${plan.highlighted ? 'text-white' : 'text-neutral-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <Check size={18} className={plan.highlighted ? 'text-brand-sageLight flex-shrink-0' : 'text-brand-sage flex-shrink-0'} />
                      <span className={plan.highlighted ? 'text-neutral-300' : 'text-neutral-700'}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/5541988752887?text=Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20plano%20mencionado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? 'bg-brand-red text-white hover:bg-brand-redDark'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                >
                  Escolher Plano
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          <div className="bg-brand-cream rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              Dúvidas sobre os planos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Posso trocar de plano?</h3>
                <p className="text-neutral-600">Sim, você pode ajustar seu plano a qualquer momento conforme as necessidades do seu pet evoluem.</p>
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Há contrato?</h3>
                <p className="text-neutral-600">Não há contrato vinculado. Você pode pausar ou cancelar quando desejar sem penalidades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
