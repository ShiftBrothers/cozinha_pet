import React, { useState, useRef, useEffect } from 'react';
import { Award, BadgeCheck, Instagram, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="parceiros" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-blueLight/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-sageLight/20 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4"></div>

      <div ref={ref} className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-sageLight text-brand-sageDark px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-sage/10">
            <Award size={14} /> Validação Profissional
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 mb-4 leading-tight">
            Veterinários e <span className="italic text-brand-red">Nutricionistas Parceiros</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Nossos cardápios são formulados e validados por especialistas em nutrição veterinária, garantindo o equilíbrio perfeito para a vitalidade do seu pet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Dra. Carol Cattani - Featured Spotlight */}
          <div className="bg-gradient-to-br from-brand-cream/80 to-white rounded-3xl p-8 md:p-10 border border-neutral-200/60 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            {/* Visual glow on card hover */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-sage/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500"></div>

            <div>
              {/* Photo Area */}
              <div className="relative mb-8 text-center">
                <a
                  href="https://www.instagram.com/vetcarolcattani?igsh=MXJsMXpxaDUzOHJ2aA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-brand-sageLight hover:border-brand-sage shadow-2xl transition-all duration-300 active:scale-95 group/photo"
                  title="Ver Instagram da Dra. Carol"
                >
                  <img
                    src="/carol_cattani.jpg"
                    alt="Dra. Carol Cattani"
                    className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover/photo:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="text-white text-center">
                      <Instagram size={24} className="mx-auto mb-1 animate-bounce" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Ver Instagram</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <h3 className="text-2xl font-bold text-neutral-900">Dra. Carol Cattani</h3>
                  <BadgeCheck size={20} className="text-brand-blue" />
                </div>
                <p className="text-brand-sageDark font-semibold text-sm mb-1">Médica Veterinária & Nutricionista Parceira</p>
                <p className="text-xs text-neutral-400 font-mono mb-6">CRMV-PR 11.458</p>

                <div className="relative overflow-hidden mb-6">
                  <p
                    className={`text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto transition-all duration-500 ${
                      showFeedback ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100 relative'
                    }`}
                  >
                    "Dedicada à nutrição clínica de cães, atuo na elaboração de planos alimentares individualizados que promovem saúde, qualidade de vida e longevidade. Meu trabalho é baseado na ciência da nutrição, respeitando as necessidades específicas de cada paciente, desde filhotes até cães idosos ou com condições clínicas que exigem cuidados especiais.

                    Acredito que uma alimentação equilibrada é uma das ferramentas mais importantes para a prevenção de doenças e para a manutenção da saúde dos cães em todas as fases da vida."
                  </p>
                  <p
                    className={`text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto transition-all duration-500 ${
                      showFeedback ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    "Minha experiência com a CozinhaPet tem sido muito positiva. A empresa demonstra um compromisso genuíno com a qualidade dos ingredientes, segurança alimentar e respeito às formulações nutricionais. É gratificante trabalhar com uma equipe que valoriza a nutrição veterinária e busca oferecer refeições naturais equilibradas, contribuindo para mais saúde, bem-estar e qualidade de vida para os cães."
                  </p>
                </div>
                <div className="flex justify-center mb-2">
                  <button
                    onClick={() => setShowFeedback((prev) => !prev)}
                    className="inline-flex items-center gap-2 bg-brand-blue text-white hover:bg-brand-blueDark px-6 py-2.5 rounded-full font-bold text-xs transition-all shadow-md hover:shadow-brand-blue/20 active:scale-95"
                  >
                    {showFeedback ? 'Sobre' : 'Feedback'}
                  </button>
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {['Fisiatria & Reabilitação', 'Acupuntura Vet', 'Terapias Naturais'].map((spec) => (
                  <span key={spec} className="bg-white border border-brand-sage/20 text-brand-sageDark px-4 py-1.5 rounded-full text-xs font-semibold">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center mt-auto">
              <a
                href="https://www.instagram.com/vetcarolcattani?igsh=MXJsMXpxaDUzOHJ2aA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-sage text-white hover:bg-brand-sageDark px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-brand-sage/20 active:scale-95"
              >
                <Instagram size={18} /> Acompanhar no Instagram
              </a>
            </div>
          </div>

          {/* Dra. Daniela Facanali - Featured Spotlight */}
          <div className="bg-gradient-to-br from-brand-cream/80 to-white rounded-3xl p-8 md:p-10 border border-neutral-200/60 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            {/* Visual glow on card hover */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-sage/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500"></div>

            <div>
              {/* Photo Area */}
              <div className="relative mb-8 text-center">
                <a
                  href="https://www.instagram.com/daninutrivet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-brand-sageLight hover:border-brand-sage shadow-2xl transition-all duration-300 active:scale-95 group/photo"
                  title="Ver Instagram da Dra. Daniela"
                >
                  <img
                    src="/daniela_facanali.jpg"
                    alt="Dra. Daniela Facanali"
                    className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover/photo:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="text-white text-center">
                      <Instagram size={24} className="mx-auto mb-1 animate-bounce" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Ver Instagram</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <h3 className="text-2xl font-bold text-neutral-900">Dra. Daniela Facanali</h3>
                  <BadgeCheck size={20} className="text-brand-blue" />
                </div>
                <p className="text-brand-sageDark font-semibold text-sm mb-1">Médica Veterinária & Nutricionista Parceira</p>
                <p className="text-xs text-neutral-400 font-mono mb-6">CRMV-SP 35.845</p>

                <p className="text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto mb-6">
                  "Dedicada à Nutrição Clínica de cães e gatos, atua diretamente no desenvolvimento e validação técnica dos cardápios da Cozinha Pet. Assegura que cada porção forneça a biodisponibilidade exata de vitaminas, minerais e aminoácidos que promovem a saúde intestinal, brilho na pelagem e a longevidade ativa do seu melhor amigo."
                </p>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {['Nutrição Clínica Vet', 'Formulações Científicas', 'Dieta Natural Customizada'].map((spec) => (
                  <span key={spec} className="bg-white border border-brand-sage/20 text-brand-sageDark px-4 py-1.5 rounded-full text-xs font-semibold">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center mt-auto">
              <a
                href="https://www.instagram.com/daninutrivet/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-sage text-white hover:bg-brand-sageDark px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-brand-sage/20 active:scale-95"
              >
                <Instagram size={18} /> Acompanhar no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
