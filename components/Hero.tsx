
import React, { useRef, useEffect } from 'react';
import { ArrowRight, Shield, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Bug do React: `muted` JSX não vira atributo HTML que o iOS Safari lê.
    // Solução: definir via DOM diretamente.
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    const tryPlay = () => {
      video.play().catch(() => { /* bloqueado — sem nada a fazer */ });
    };

    // 1. Tenta imediatamente
    tryPlay();

    // 2. Tenta quando o vídeo tiver dados suficientes para reproduzir
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('loadeddata', tryPlay);

    // 3. Tenta quando o vídeo entrar na área visível (útil após scroll em mobile)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) tryPlay(); },
      { threshold: 0.1 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('loadeddata', tryPlay);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden bg-brand-cream lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* Visual - Top on Mobile */}
        <div className="relative order-1 md:order-2 px-4 md:px-0">
          <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[4/5] shadow-2xl transform md:rotate-2 transition-transform hover:rotate-0 duration-700 border-[6px] md:border-8 border-white">
            {/* video cover: autoplay + loop + muted (obrigatório para autoplay no browser) */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source
                src="/video_bob.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-48 h-48 md:w-80 md:h-80 bg-brand-sage/15 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-brand-red/8 rounded-full blur-3xl -z-0"></div>
          
          {/* Floating Stat Card */}
          <div className="absolute -bottom-4 -right-2 md:-right-6 lg:right-10 bg-white/95 backdrop-blur-xl p-4 md:p-6 rounded-2xl shadow-2xl z-20 max-w-[180px] md:max-w-[240px] border border-brand-sage/20 animate-bounce-subtle">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-brand-sage" />
              <p className="text-[8px] md:text-[10px] font-black text-brand-sage uppercase tracking-widest">Estudo Científico</p>
            </div>
            <p className="font-serif text-brand-blueDark font-normal text-xl md:text-3xl leading-none mb-1">+2.7 <span className="text-base md:text-lg">anos</span></p>
            <p className="text-[9px] md:text-xs text-neutral-800/60 leading-tight">de expectativa de vida com alimentação natural.*</p>
          </div>
        </div>

        {/* Content */}
        <div className="z-10 order-2 md:order-1 text-center md:text-left mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 bg-brand-sageLight text-brand-sageDark px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 md:mb-8 border border-brand-sage/20">
            <Shield size={12} className="sm:w-[14px] sm:h-[14px]" />
            Nutrição de Longevidade • Validada por Veterinários Nutrólogos
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-serif text-neutral-900 leading-[1.1] mb-6 md:mb-8 tracking-tight">
            Cada refeição é uma decisão sobre <span className="italic text-brand-red">quanto tempo</span> ele ficará ao seu lado.
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-neutral-800/65 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
            Dietas personalizadas por nutrólogos veterinários, com ingredientes 100% grau humano. Não é ração. É o plano de longevidade que ele merece.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#calculadora" className="bg-brand-red text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-brand-redDark transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-brand-red/30 group active:scale-95 text-sm md:text-base">
              Descobrir o Plano do Meu Pet
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#metodologia" className="bg-white text-neutral-800 border border-neutral-200 px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold hover:bg-brand-blueLight transition-all text-center shadow-sm active:scale-95 text-sm md:text-base">
              Como funciona
            </a>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 text-xs md:text-sm text-neutral-800/55 justify-center md:justify-start">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=100"
              ].map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-brand-cream object-cover shadow-sm" 
                  alt={`Pet satisfeito ${i + 1}`} 
                />
              ))}
            </div>
            <span className="text-center sm:text-left font-medium">
              <strong className="text-brand-blue">+5.000 pets</strong> vivendo mais e melhor com nutrição natural
            </span>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-50"></div>
    </section>
  );
};
