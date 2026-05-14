
import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Heart, ShieldCheck, Truck } from 'lucide-react';

const AnimatedCounter: React.FC<{ target: number; suffix?: string; prefix?: string; duration?: number }> = ({ 
  target, suffix = '', prefix = '', duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-serif text-neutral-900">
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </div>
  );
};

export const SocialProof: React.FC = () => {
  const stats = [
    { 
      label: 'Melhora na pelagem em 30 dias', 
      value: 97, 
      suffix: '%',
      icon: TrendingUp,
      color: 'text-brand-sage'
    },
    { 
      label: 'De expectativa de vida a mais', 
      value: 2.7, 
      suffix: ' anos',
      prefix: '+',
      icon: Heart,
      color: 'text-brand-red'
    },
    { 
      label: 'Sem Conservantes', 
      value: 100, 
      suffix: '%',
      icon: ShieldCheck,
      color: 'text-brand-blue'
    },
    { 
      label: 'Refeições entregues por mês', 
      value: 500, 
      suffix: '',
      prefix: '+',
      icon: Truck,
      color: 'text-brand-earth'
    },
  ];

  return (
    <section className="bg-white py-14 md:py-16 border-y border-neutral-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Logos */}
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <p className="text-neutral-400 font-semibold text-[10px] uppercase tracking-[0.25em] mb-6">Reconhecidos por</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-30 grayscale contrast-150">
             <img
               src="/fica_comigo.png"
               alt="Instituto Fica Comigo"
               className="h-16 md:h-20 w-auto object-contain"
             />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl hover:bg-brand-cream/50 transition-colors">
               <div className={`w-10 h-10 md:w-12 md:h-12 bg-neutral-100 rounded-xl flex items-center justify-center ${stat.color} mb-3 md:mb-4`}>
                 <stat.icon size={20} className="md:w-6 md:h-6" />
               </div>
               {stat.value === 2.7 ? (
                 <div className="text-3xl md:text-4xl font-serif text-neutral-900">
                   +2.7 anos
                 </div>
               ) : (
                 <AnimatedCounter 
                   target={stat.value} 
                   suffix={stat.suffix} 
                   prefix={stat.prefix || ''} 
                 />
               )}
               <div className="text-xs md:text-sm text-neutral-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
