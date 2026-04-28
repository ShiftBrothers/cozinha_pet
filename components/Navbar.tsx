
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
      
      // Scroll spy
      const sections = ['hero', 'calculadora', 'metodologia', 'planos', 'resultados', 'conhecimento'];
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

  const navLinks = [
    { label: 'Metodologia', href: '#metodologia', id: 'metodologia' },
    { label: 'Planos', href: '#planos', id: 'planos' },
    { label: 'Resultados', href: '#resultados', id: 'resultados' },
    { label: 'Blog', href: '#conhecimento', id: 'conhecimento' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
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

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-neutral-800 p-2 hover:bg-neutral-100 rounded-full transition-colors active:scale-95"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col p-8 transition-all duration-500 ease-in-out transform ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } md:hidden`}>
        <div className="flex justify-between items-center mb-12">
          <Logo className="h-10" />
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-neutral-100 rounded-full">
            <X size={24} className="text-neutral-800" />
          </button>
        </div>
        
        <div className="flex flex-col space-y-8 flex-grow">
          {navLinks.map(link => (
            <a key={link.id} href={link.href} className="text-3xl font-serif text-neutral-900" onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
          ))}
        </div>

        <div className="mt-auto">
          <a href="#calculadora" onClick={() => setMobileMenuOpen(false)} className="bg-brand-red text-white w-full py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-brand-redDark transition-colors block text-center">
            Descobrir Meu Plano
          </a>
          <p className="text-center mt-6 text-neutral-400 font-semibold uppercase text-[10px] tracking-widest">
            Fale conosco: (11) 99999-9999
          </p>
        </div>
      </div>
    </nav>
  );
};
