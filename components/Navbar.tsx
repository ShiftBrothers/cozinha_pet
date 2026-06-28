
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = ['hero', 'calculadora', 'planos', 'parceiros', 'conhecimento'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Planos', href: '#planos', id: 'planos' },
    { label: 'Parceiros', href: '#parceiros', id: 'parceiros' },
    { label: 'Blog', href: '#conhecimento', id: 'conhecimento' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-sm py-2 md:py-3'
        : 'bg-transparent py-4 md:py-6'
        }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <a href="#hero">
              <Logo className="h-8 md:h-10 transform group-hover:scale-105 transition-transform" />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <div className="flex items-center space-x-6 lg:space-x-8 text-[11px] lg:text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700">
              {navLinks.map(link => (
                <a key={link.id} href={link.href} className={`hover:text-brand-red transition-colors relative group py-2 ${activeSection === link.id ? 'text-brand-red' : ''}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              ))}
            </div>

            <a href="#calculadora" className="bg-brand-blue text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-full hover:bg-brand-blueDark transition-all flex items-center gap-2 group shadow-lg hover:shadow-brand-blue/20 font-bold text-xs lg:text-sm">
              Descobrir Meu Plano
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle — always has a visible background */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 active:scale-90 ${isScrolled || mobileMenuOpen
                ? 'text-neutral-800 hover:bg-neutral-100'
                : 'text-neutral-900 bg-white/85 backdrop-blur-sm shadow-sm hover:bg-white'
                }`}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <Menu size={24} className={`transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — rendered as a sibling to nav, fully independent of nav's opacity/bg */}
      <div
        className={`fixed inset-0 z-[70] md:hidden transition-all duration-400 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        aria-hidden={!mobileMenuOpen}
        aria-modal={mobileMenuOpen}
        role="dialog"
      >
        {/* Dark scrim backdrop */}
        <div
          className={`absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity duration-400 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer panel — slides in from the right */}
        <div className={`absolute top-0 right-0 h-full w-[85vw] max-w-xs bg-white flex flex-col shadow-2xl transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          {/* Drawer header */}
          <div className="flex justify-between items-center p-6 border-b border-neutral-100">
            <Logo className="h-9" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors active:scale-90"
              aria-label="Fechar menu"
            >
              <X size={22} className="text-neutral-700" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 pt-6 flex-grow overflow-y-auto">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-xl font-serif text-neutral-800 py-4 border-b border-neutral-100 flex items-center justify-between transition-all duration-300 hover:text-brand-red group ${activeSection === link.id ? 'text-brand-red' : ''
                  }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${80 + i * 50}ms` : '0ms',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(16px)',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                <ChevronRight size={18} className="text-neutral-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>

          {/* CTA at bottom of drawer */}
          <div className="p-6 border-t border-neutral-100 bg-neutral-50/80">
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-red text-white w-full py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-brand-redDark transition-colors block text-center active:scale-[0.98]"
            >
              Descobrir Meu Plano
            </a>
            <p className="text-center mt-4 text-neutral-400 font-semibold uppercase text-[9px] tracking-widest">
              Fale conosco: (41) 98875-2887
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
