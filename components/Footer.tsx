
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, ShieldCheck, CreditCard, Truck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 md:pt-28 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 md:mb-20 pb-16 md:pb-20 border-b border-neutral-800">
          <div className="flex items-center gap-3 text-neutral-400">
            <ShieldCheck size={24} className="text-brand-sage" />
            <div>
              <div className="text-xs font-bold text-white">Garantia 30 Dias</div>
              <div className="text-[10px]">Dinheiro de volta</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-neutral-400">
            <CreditCard size={24} className="text-brand-sage" />
            <div>
              <div className="text-xs font-bold text-white">Pagamento Seguro</div>
              <div className="text-[10px]">SSL 256-bit</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-neutral-400">
            <Truck size={24} className="text-brand-sage" />
            <div>
              <div className="text-xs font-bold text-white">Frete Grátis</div>
              <div className="text-[10px]">No primeiro pedido</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-20 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-8">
              <Logo className="h-10 brightness-0 invert" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-xs">
              Pioneiros em nutrição de longevidade para pets no Brasil. Cada refeição é formulada para estender a vida do seu melhor amigo.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-brand-blue hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-brand-blue hover:text-white transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.25em]">Explore</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-400">
              <li><a href="#calculadora" className="hover:text-white transition-colors">Calculadora Nutricional</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos de Assinatura</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.25em]">Empresa</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#conhecimento" className="hover:text-white transition-colors">Blog / Conhecimento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ / Suporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.25em]">Contato</h4>
            <ul className="space-y-5 text-sm font-medium text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-sage flex-shrink-0 mt-0.5" />
                <span className="leading-tight">Alameda das Patas, 1234<br/>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-sage flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-sage flex-shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">contato@cozinhapet.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-center">
            © 2026 Cozinha Pet Nutrição Natural LTDA. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-600">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
