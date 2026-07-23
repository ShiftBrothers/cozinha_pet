import React from 'react';
import { Logo } from './Logo';
import { Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Alimentação natural premium desenvolvida por nutrólogos veterinários. Cada refeição é uma decisão sobre quanto tempo ele ficará ao seu lado.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram Cozinha Pet"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: 'Planos', href: '#planos' },
                { label: 'Kit Degustação', href: '#kit-degustacao' },
                { label: 'Parceiros', href: '#parceiros' },
                { label: 'Blog', href: '#conhecimento' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white text-sm flex items-center gap-1 group transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-400 text-sm">
                <Phone size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                <span>(41) 98875-2887</span>
              </li>
              <li className="flex items-start gap-2 text-neutral-400 text-sm">
                <Mail size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                <span>cozinhapetcwb@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-neutral-400 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                <span>Curitiba, PR — Entrega em toda Curitiba e RM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-500 text-xs">
            © {currentYear} Cozinha Pet. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">Política de Privacidade</a>
            <a href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};