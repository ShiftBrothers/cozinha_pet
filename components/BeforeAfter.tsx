
import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';

interface TransformData {
  petName: string;
  breed: string;
  period: string;
  beforeImg: string;
  afterImg: string;
  quote: string;
  tutorName: string;
  metrics: { label: string; emoji: string; before: number; after: number }[];
}

const transformations: TransformData[] = [
  {
    petName: 'Luna',
    breed: 'Golden Retriever • 4 anos',
    period: '45 dias',
    beforeImg: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=400',
    afterImg: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400',
    quote: 'O brilho do pelo da Luna mudou completamente. Até o veterinário comentou.',
    tutorName: 'Carolina M.',
    metrics: [
      { label: 'Brilho do pelo', emoji: '✨', before: 45, after: 95 },
      { label: 'Nível de energia', emoji: '⚡', before: 50, after: 85 },
      { label: 'Saúde digestiva', emoji: '💚', before: 40, after: 92 },
      { label: 'Peso ideal', emoji: '⚖️', before: 60, after: 100 },
    ]
  },
  {
    petName: 'Thor',
    breed: 'Bulldog Francês • 6 anos',
    period: '60 dias',
    beforeImg: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400',
    afterImg: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
    quote: 'Thor tinha alergias constantes. Em 2 meses, sumiu tudo. Inacreditável.',
    tutorName: 'Rafael S.',
    metrics: [
      { label: 'Brilho do pelo', emoji: '✨', before: 30, after: 88 },
      { label: 'Nível de energia', emoji: '⚡', before: 40, after: 80 },
      { label: 'Redução de alergias', emoji: '🛡️', before: 20, after: 90 },
      { label: 'Odor nas fezes', emoji: '🍃', before: 25, after: 85 },
    ]
  },
  {
    petName: 'Mia',
    breed: 'Gata Siamesa • 3 anos',
    period: '30 dias',
    beforeImg: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400',
    afterImg: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=400',
    quote: 'Mia era super seletiva. Com a Cozinha Pet, lambe o prato em segundos.',
    tutorName: 'Juliana T.',
    metrics: [
      { label: 'Brilho do pelo', emoji: '✨', before: 55, after: 97 },
      { label: 'Nível de energia', emoji: '⚡', before: 60, after: 90 },
      { label: 'Aceitação alimentar', emoji: '😋', before: 30, after: 98 },
      { label: 'Saúde digestiva', emoji: '💚', before: 50, after: 93 },
    ]
  }
];

const ProgressBar: React.FC<{ before: number; after: number; visible: boolean }> = ({ before, after, visible }) => (
  <div className="relative w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
    <div className="absolute inset-0 h-full bg-neutral-200 rounded-full" style={{ width: `${before}%` }}></div>
    <div className="absolute inset-0 h-full bg-gradient-to-r from-brand-sage to-brand-blue rounded-full progress-bar" style={{ width: visible ? `${after}%` : '0%' }}></div>
  </div>
);

export const BeforeAfter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="resultados" className="py-20 md:py-32 bg-brand-cream">
      <div ref={ref} className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-sageLight text-brand-sageDark px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-sage/15">
            <TrendingUp size={14} /> Resultados Reais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 mb-4 leading-tight">
            Transformações que <span className="italic text-brand-red">se medem</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Não são apenas depoimentos. São indicadores reais de saúde monitorados antes e depois da transição para alimentação natural.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {transformations.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-neutral-200/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Images */}
              <div className="grid grid-cols-2 h-48 md:h-56">
                <div className="relative overflow-hidden">
                  <img src={t.beforeImg} alt={`${t.petName} antes`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-neutral-900/20"></div>
                  <span className="absolute bottom-2 left-2 bg-neutral-900/70 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Antes</span>
                </div>
                <div className="relative overflow-hidden">
                  <img src={t.afterImg} alt={`${t.petName} depois`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 bg-brand-sage/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md flex items-center gap-1"><Sparkles size={10} /> Depois</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">{t.petName}</h3>
                    <p className="text-xs text-neutral-500">{t.breed}</p>
                  </div>
                  <div className="bg-brand-sageLight px-3 py-1 rounded-full text-[10px] font-bold text-brand-sageDark">{t.period}</div>
                </div>

                {/* Metrics */}
                <div className="space-y-3 mb-5">
                  {t.metrics.map((m, j) => (
                    <div key={j}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-neutral-600 flex items-center gap-1.5">{m.emoji} {m.label}</span>
                        <span className="text-xs font-bold text-brand-blue">+{m.after - m.before}%</span>
                      </div>
                      <ProgressBar before={m.before} after={m.after} visible={isVisible} />
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-brand-cream rounded-xl p-4 border border-neutral-100">
                  <p className="text-sm text-neutral-700 italic leading-relaxed">"{t.quote}"</p>
                  <p className="text-xs text-neutral-500 mt-2 font-semibold">— {t.tutorName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
