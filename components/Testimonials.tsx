import React, { useState, useRef, useEffect } from 'react';
import { Award, BadgeCheck, Instagram } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface Partner {
  id: string;
  name: string;
  role: string;
  credentials?: string;
  description: string;
  feedback?: string;
  specialties: string[];
  image: string;
  instagram?: string;
  whatsapp?: string;
  type: 'veterinarian' | 'establishment';
  address?: string;
  addressLink?: string;
}

const PartnerCard: React.FC<{
  partner: Partner;
  showFeedback?: boolean;
  onToggleFeedback?: () => void;
}> = ({ partner, showFeedback = false, onToggleFeedback }) => {
  const isVet = partner.type === 'veterinarian';
  const hasFeedback = isVet && partner.feedback;

  return (
    <div className="bg-gradient-to-br from-brand-cream/80 to-white rounded-3xl p-8 md:p-10 border border-neutral-200/60 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-sage/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500"></div>

      <div>
        <div className="relative mb-8 text-center">
          <a
            href={partner.instagram || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-brand-sageLight hover:border-brand-sage shadow-2xl transition-all duration-300 active:scale-95 group/photo"
            title={`Ver Instagram de ${partner.name}`}
          >
            <img
              src={partner.image}
              alt={partner.name}
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

        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h3 className="text-2xl font-bold text-neutral-900">{partner.name}</h3>
            {isVet && <BadgeCheck size={20} className="text-brand-blue" />}
          </div>
          <p className="text-brand-sageDark font-semibold text-sm mb-1">{partner.role}</p>
          {partner.credentials && (
            <p className="text-xs text-neutral-400 font-mono mb-6">{partner.credentials}</p>
          )}
          {partner.address && (
            <p className="text-xs text-neutral-500 mb-2">{partner.address}</p>
          )}

          <div className="relative overflow-hidden mb-6">
            <p
              className={`text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto transition-all duration-500 ${
                hasFeedback && showFeedback ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100 relative'
              }`}
            >
              {partner.description}
            </p>
            {hasFeedback && (
              <p
                className={`text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto transition-all duration-500 ${
                  showFeedback ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                {partner.feedback}
              </p>
            )}
          </div>
          {hasFeedback && (
            <div className="flex justify-center mb-2">
              <button
                onClick={onToggleFeedback}
                className="inline-flex items-center gap-2 bg-brand-blue text-white hover:bg-brand-blueDark px-6 py-2.5 rounded-full font-bold text-xs transition-all shadow-md hover:shadow-brand-blue/20 active:scale-95"
              >
                {showFeedback ? 'Sobre' : 'Feedback'}
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {partner.specialties.map((spec) => (
            <span
              key={spec}
              className="bg-white border border-brand-sage/20 text-brand-sageDark px-4 py-1.5 rounded-full text-xs font-semibold"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center mt-auto flex flex-col items-center gap-3">
        {partner.whatsapp && (
          <a
            href={partner.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1ebe5d] px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-[#25D366]/30 active:scale-95"
          >
            <WhatsAppIcon /> Falar no WhatsApp
          </a>
        )}
        {partner.addressLink && (
          <a
            href={partner.addressLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-sage text-white hover:bg-brand-sageDark px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-brand-sage/20 active:scale-95"
          >
            📍 Ver no Maps
          </a>
        )}
        {partner.instagram && !partner.addressLink && (
          <a
            href={partner.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-sage text-white hover:bg-brand-sageDark px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-brand-sage/20 active:scale-95"
          >
            <Instagram size={18} /> Acompanhar no Instagram
          </a>
        )}
      </div>
    </div>
  );
};

const veterinarians: Partner[] = [
  {
    id: 'carol',
    name: 'Dra. Carol Cattani',
    role: 'Médica Veterinária & Nutricionista Parceira',
    credentials: 'CRMV-PR 11.458',
    description: '"Dedicada à nutrição clínica de cães, atuo na elaboração de planos alimentares individualizados que promovem saúde, qualidade de vida e longevidade. Meu trabalho é baseado na ciência da nutrição, respeitando as necessidades específicas de cada paciente, desde filhotes até cães idosos ou com condições clínicas que exigem cuidados especiais.\n\nAcredito que uma alimentação equilibrada é uma das ferramentas mais importantes para a prevenção de doenças e para a manutenção da saúde dos cães em todas as fases da vida."',
    feedback: '"Minha experiência com a CozinhaPet tem sido muito positiva. A empresa demonstra um compromisso genuíno com a qualidade dos ingredientes, segurança alimentar e respeito às formulações nutricionais. É gratificante trabalhar com uma equipe que valoriza a nutrição veterinária e busca oferecer refeições naturais equilibradas, contribuindo para mais saúde, bem-estar e qualidade de vida para os cães."',
    specialties: ['Fisiatria & Reabilitação', 'Acupuntura Vet', 'Terapias Naturais'],
    image: '/carol_cattani.webp',
    instagram: 'https://www.instagram.com/vetcarolcattani?igsh=MXJsMXpxaDUzOHJ2aA%3D%3D',
    whatsapp: 'https://api.whatsapp.com/send/?phone=554199851567&text=Olá%20%21%20Vim%20pela%20CozinhaPet%20gostaria%20de%20montar%20um%20cardápio%20🐾',
    type: 'veterinarian',
  },
  {
    id: 'daniela',
    name: 'Dra. Daniela Facanali',
    role: 'Médica Veterinária & Nutricionista Parceira',
    credentials: 'CRMV-SP 35.845',
    description: '"Dedicada à Nutrição Clínica de cães e gatos, atua diretamente no desenvolvimento e validação técnica dos cardápios da CozinhaPet. Assegura que cada porção forneça a biodisponibilidade exata de vitaminas, minerais e aminoácidos que promovem a saúde intestinal, brilho na pelagem e a longevidade ativa do seu melhor amigo."',
    specialties: ['Nutrição Clínica Vet', 'Formulações Científicas', 'Dieta Natural Customizada'],
    image: '/daniela_facanali.webp',
    instagram: 'https://www.instagram.com/daninutrivet/',
    type: 'veterinarian',
  },
];

const establishments: Partner[] = [
  {
    id: 'autentica',
    name: 'Creche Autêntica',
    role: 'Estabelecimento Parceiro',
    description: '"Dedicado ao cuidado e bem-estar do seu pet, oferecendo serviços de creche com atenção personalizada e ambiente seguro. Nosso compromisso é garantir conforto, diversão e saúde para o seu companheiro durante o dia."',
    specialties: ['Creche Premium', 'Cuidado Diário', 'Ambiente Seguro'],
    image: '/autentica.webp',
    address: 'R. Alm. Gonçalves, 1215 - Rebouças',
    addressLink: 'https://maps.app.goo.gl/HhbDePyAB1Grh8156?g_st=aw',
    instagram: 'https://www.instagram.com/crecheautentica/',
    whatsapp: 'https://api.whatsapp.com/send/?phone=554187784624&text=Olá%2C+vim+pela+CozinhaPet%21+Gostaria+de+mais+informações+sobre+vocês%21+%23COZINHAPET10&type=phone_number&app_absent=0',
    type: 'establishment',
  },
  {
    id: 'parkpet',
    name: 'Park Pet',
    role: 'Estabelecimento Parceiro',
    description: '"Seu pet merece mais do que passar o dia sozinho em casa. Na nossa creche, ele encontra um ambiente seguro, diversão monitorada e muito carinho. Enquanto você trabalha tranquilo, seu melhor amigo gasta energia, faz novos amigos e recebe atenção personalizada. Garanta o dia feliz do seu pet. Entre em contato e agende uma visita!"',
    specialties: ['Creche Premium', 'Cuidado Diário', 'Ambiente Seguro'],
    image: '/logo_parkpet.webp',
    address: 'Av. Anita Garibaldi, 3776 - Juvevê',
    addressLink: 'https://maps.app.goo.gl/385i4FReAuDEKTEd6',
    instagram: 'https://www.instagram.com/parkpetcreche/',
    whatsapp: 'https://api.whatsapp.com/send/?phone=554196930070&text=Olá%2C+vim+pela+CozinhaPet%21+Gostaria+de+mais+informações+sobre+vocês%21+&type=phone_number&app_absent=0',
    type: 'establishment',
  },
];

export const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [feedbackStates, setFeedbackStates] = useState<{ [key: string]: boolean }>({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const toggleFeedback = (partnerId: string) => {
    setFeedbackStates((prev) => ({
      ...prev,
      [partnerId]: !prev[partnerId],
    }));
  };

  return (
    <section id="parceiros" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-blueLight/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-sageLight/20 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4"></div>

      <div
        ref={ref}
        className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-sageLight text-brand-sageDark px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-sage/10">
            <Award size={14} /> Validação Profissional
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 mb-4 leading-tight">
            Conheça Nossos Parceiros
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Conectados pelo mesmo propósito: a saúde e a felicidade do seu pet!
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">Veterinários</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {veterinarians.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                showFeedback={feedbackStates[partner.id] || false}
                onToggleFeedback={() => toggleFeedback(partner.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">Estabelecimentos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {establishments.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                showFeedback={feedbackStates[partner.id] || false}
                onToggleFeedback={() => toggleFeedback(partner.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};