
import React, { useRef, useEffect, useState } from 'react';
import { AlertTriangle, Beaker, Search, ArrowRight, Clock } from 'lucide-react';

interface KnowledgePill {
  tag: string;
  tagColor: string;
  tagBg: string;
  tagBorder: string;
  tagIcon: React.ElementType;
  title: string;
  excerpt: string;
  readTime: string;
}

const pills: KnowledgePill[] = [
  {
    tag: 'ALERTA',
    tagColor: 'text-red-700',
    tagBg: 'bg-red-50',
    tagBorder: 'border-red-200',
    tagIcon: AlertTriangle,
    title: 'Os Perigos do BHA: O Conservante que a Indústria Pet Não Quer que Você Conheça',
    excerpt: 'Presente em 78% das rações comerciais, o BHA (Butilhidroxianisol) é classificado como "possivelmente carcinogênico" pela OMS. Descubra como ele afeta a saúde do seu pet a longo prazo.',
    readTime: '4 min',
  },
  {
    tag: 'CIÊNCIA',
    tagColor: 'text-brand-blue',
    tagBg: 'bg-brand-blueLight',
    tagBorder: 'border-brand-blue/15',
    tagIcon: Beaker,
    title: 'Alimentação Natural vs. Ração: O Que a Ciência Realmente Diz',
    excerpt: 'Uma meta-análise de 2024 com 12.000 cães revelou que dietas naturais aumentam a expectativa de vida em até 2.7 anos. Entenda os dados por trás da revolução nutricional.',
    readTime: '6 min',
  },
  {
    tag: 'DIAGNÓSTICO',
    tagColor: 'text-amber-700',
    tagBg: 'bg-amber-50',
    tagBorder: 'border-amber-200',
    tagIcon: Search,
    title: '5 Sinais de Que Seu Pet Está Sendo Mal Nutrido (E Você Não Sabe)',
    excerpt: 'Pelo opaco, coceira crônica, fezes com odor forte, baixa energia e ganho de peso. Se 2 ou mais desses sinais estão presentes, a alimentação pode ser a causa.',
    readTime: '3 min',
  }
];

export const KnowledgePills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="conhecimento" className="py-20 md:py-32 bg-brand-cream">
      <div ref={ref} className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-neutral-600 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 border border-neutral-200">
            <Beaker size={14} />
            Pílulas de Conhecimento
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 mb-4 leading-tight">
            Conhecimento que <span className="italic text-brand-red">protege</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Informação de qualidade para tutores que querem tomar decisões baseadas em ciência, não em marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pills.map((pill, i) => (
            <article key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group cursor-pointer">
              {/* Tag */}
              <div className="flex items-center justify-between mb-5">
                <div className={`inline-flex items-center gap-1.5 ${pill.tagBg} ${pill.tagColor} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${pill.tagBorder}`}>
                  <pill.tagIcon size={12} />
                  {pill.tag}
                </div>
                <div className="flex items-center gap-1 text-neutral-400 text-[10px]">
                  <Clock size={10} />
                  {pill.readTime}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                {pill.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-grow">
                {pill.excerpt}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:gap-3 transition-all">
                Ler artigo completo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
