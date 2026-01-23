
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 pt-24 pb-12 border-t border-brand-blueLight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-12 h-12" />
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-blueDark">
                Cozinha<span className="text-brand-red italic">Pet</span>
              </span>
            </div>
            <p className="text-brand-blueDark/70 text-sm leading-relaxed mb-8 max-w-xs">
              Pioneiros em nutrição clínica natural no Brasil. Transformando vidas através de dietas personalizadas de alto rigor técnico.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white border border-brand-blueLight rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm hover:shadow-md">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white border border-brand-blueLight rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm hover:shadow-md">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-brand-blueDark mb-8 uppercase text-xs tracking-[0.25em]">Explore</h4>
            <ul className="space-y-5 text-sm font-medium text-brand-blueDark/60">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Nossos Cardápios</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Planos de Assinatura</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Calculadora Nutricional</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Unidades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-blueDark mb-8 uppercase text-xs tracking-[0.25em]">Empresa</h4>
            <ul className="space-y-5 text-sm font-medium text-brand-blueDark/60">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">FAQ / Suporte</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Seja Parceiro</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-blueDark mb-8 uppercase text-xs tracking-[0.25em]">Contato</h4>
            <ul className="space-y-6 text-sm font-medium text-brand-blueDark/70">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-red flex-shrink-0" />
                <span className="leading-tight">Alameda das Patas, 1234<br/>São Paulo, SP - 01234-567</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-brand-red flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-brand-red flex-shrink-0" />
                <span className="underline underline-offset-4 decoration-brand-blueLight">contato@cozinhapet.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-blueLight pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-brand-blue/40 text-[10px] uppercase tracking-[0.2em] font-black">
            © 2024 Cozinha Pet Nutrição Natural LTDA. Todos os direitos reservados.
          </p>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue/40">
            <a href="#" className="hover:text-brand-blueDark transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-blueDark transition-colors">Termos</a>
            <a href="#" className="hover:text-brand-blueDark transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
