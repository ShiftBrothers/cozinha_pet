
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 pt-20 md:pt-32 pb-12 border-t border-brand-blueLight">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-8">
              <Logo className="h-10" />
            </div>
            <p className="text-brand-blueDark/70 text-sm md:text-base leading-relaxed mb-8 max-w-xs">
              Pioneiros em nutrição clínica natural no Brasil. Transformando vidas através de dietas personalizadas de alto rigor técnico.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white border border-brand-blueLight rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm hover:shadow-md active:scale-90" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white border border-brand-blueLight rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm hover:shadow-md active:scale-90" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-black text-brand-blueDark mb-8 uppercase text-xs tracking-[0.25em]">Explore</h4>
            <ul className="space-y-4 md:space-y-5 text-sm md:text-base font-medium text-brand-blueDark/60">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Nossos Cardápios</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Planos de Assinatura</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Calculadora Nutricional</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Unidades Cozinha Pet</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-black text-brand-blueDark mb-8 uppercase text-xs tracking-[0.25em]">Empresa</h4>
            <ul className="space-y-4 md:space-y-5 text-sm md:text-base font-medium text-brand-blueDark/60">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">FAQ / Suporte</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Canal de Transparência</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-black text-brand-blueDark mb-8 uppercase text-xs tracking-[0.25em]">Contato</h4>
            <ul className="space-y-6 text-sm md:text-base font-medium text-brand-blueDark/70">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-red flex-shrink-0 mt-1" />
                <span className="leading-tight">Alameda das Patas, 1234<br/>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-brand-red flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-brand-red flex-shrink-0" />
                <span className="underline underline-offset-4 decoration-brand-blueLight/50 hover:decoration-brand-red transition-all cursor-pointer">contato@cozinhapet.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-blueLight pt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-brand-blue/40 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-center">
            © 2024 Cozinha Pet Nutrição Natural LTDA. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue/40">
            <a href="#" className="hover:text-brand-blueDark transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-blueDark transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-blueDark transition-colors">Configurações de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
