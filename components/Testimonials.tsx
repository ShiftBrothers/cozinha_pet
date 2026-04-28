
import React, { useState, useRef, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  petName: string;
  petBreed: string;
  avatar: string;
  text: string;
  result: string;
  rating: number;
  category: 'dog' | 'cat' | 'vet';
}

const testimonials: Testimonial[] = [
  {
    name: 'Mariana Costa',
    petName: 'Bob',
    petBreed: 'Labrador',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    text: 'Bob tinha problemas de digestão há anos. Com 3 semanas de Cozinha Pet, as fezes normalizaram e ele parou de ter gases. O veterinário ficou impressionado.',
    result: 'Digestão normalizada em 3 semanas',
    rating: 5,
    category: 'dog'
  },
  {
    name: 'Pedro Oliveira',
    petName: 'Nina',
    petBreed: 'Gata Persa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    text: 'Nina sempre foi difícil para comer. Testei 3 marcas de AN sem sucesso. Na Cozinha Pet, ela lambe o pote. O pelo está irreconhecível de tão bonito.',
    result: 'Aceitação alimentar em 5 dias',
    rating: 5,
    category: 'cat'
  },
  {
    name: 'Dra. Ana Paula Reis',
    petName: '',
    petBreed: 'Veterinária Nutróloga — CRMV-SP 18.442',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100',
    text: 'Recomendo a Cozinha Pet para meus pacientes com segurança. O controle de qualidade e a formulação seguem padrões que raramente vejo no mercado de AN brasileiro.',
    result: 'Recomendada por profissionais',
    rating: 5,
    category: 'vet'
  },
  {
    name: 'Fernanda Lima',
    petName: 'Simba',
    petBreed: 'SRD',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    text: 'Simba é alérgico a frango e soja. A Cozinha Pet fez uma fórmula sem esses ingredientes. Em 40 dias, zero coceira. Ele voltou a brincar como filhote.',
    result: 'Alergias eliminadas em 40 dias',
    rating: 5,
    category: 'dog'
  },
  {
    name: 'Lucas Mendes',
    petName: 'Mel',
    petBreed: 'Shih Tzu',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    text: 'A praticidade me conquistou. Chega congelado, descongelo e sirvo. Mel ama, come tudo em segundos. O pelo dela brilha de um jeito que nunca vi com ração.',
    result: 'Pelagem renovada em 25 dias',
    rating: 5,
    category: 'dog'
  },
];

const FILTER_LABELS = { all: 'Todos', dog: 'Cães', cat: 'Gatos', vet: 'Veterinários' };

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat' | 'vet'>('all');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = filter === 'all' ? testimonials : testimonials.filter(t => t.category === filter);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div ref={ref} className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-blueLight text-brand-blue px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-blue/10">
            <Quote size={14} /> Depoimentos Reais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 mb-4 leading-tight">
            O que nossos <span className="italic text-brand-red">tutores dizem</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto">
            Resultados específicos e mensuráveis. Não apenas "adorei".
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10">
          {(Object.entries(FILTER_LABELS) as [string, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key as typeof filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === key
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors hidden md:flex border border-neutral-100 -ml-3" aria-label="Anterior">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors hidden md:flex border border-neutral-100 -mr-3" aria-label="Próximo">
            <ChevronRight size={20} />
          </button>

          <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {filtered.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] md:w-[350px] snap-start bg-brand-cream rounded-2xl p-6 border border-neutral-200/50 hover:shadow-lg transition-all">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-neutral-900 truncate">{t.name}</span>
                      <BadgeCheck size={14} className="text-brand-blue flex-shrink-0" />
                    </div>
                    <span className="text-xs text-neutral-500">{t.petName ? `Tutor(a) de ${t.petName} • ${t.petBreed}` : t.petBreed}</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#da1f26" className="text-brand-red" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-neutral-700 leading-relaxed mb-4">"{t.text}"</p>

                {/* Result Tag */}
                <div className="bg-brand-sageLight px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-brand-sageDark uppercase tracking-wider">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
