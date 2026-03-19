
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-md py-2 md:py-3' 
        : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
          <Logo className="h-8 md:h-10 transform group-hover:scale-105 transition-transform" />
        </div>

        {/* Desktop Links - Optimized for HD displays */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <div className="flex items-center space-x-6 lg:space-x-8 text-[11px] lg:text-xs font-bold uppercase tracking-[0.15em] text-brand-blueDark">
            <a href="#" className="hover:text-brand-red transition-colors relative group py-2">
              Produtos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-brand-red transition-colors relative group py-2">
              Metodologia
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-brand-red transition-colors relative group py-2">
              Sobre Nós
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-brand-red transition-colors relative group py-2">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
            </a>
          </div>
          
          <button className="bg-brand-blue text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-full hover:bg-brand-blueDark transition-all flex items-center gap-2 group shadow-lg hover:shadow-brand-blue/20 font-bold text-xs lg:text-sm">
            Iniciar Plano
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-brand-blueDark p-2 hover:bg-brand-blueLight rounded-full transition-colors active:scale-95"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full height for better phone experience */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col p-8 transition-all duration-500 ease-in-out transform ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } md:hidden`}>
        <div className="flex justify-between items-center mb-12">
          <Logo className="h-10" />
          <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-brand-blueLight rounded-full">
            <X size={24} className="text-brand-blueDark" />
          </button>
        </div>
        
        <div className="flex flex-col space-y-8 flex-grow">
          <a href="#" className="text-3xl font-serif font-bold text-brand-blueDark" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
          <a href="#" className="text-3xl font-serif font-bold text-brand-blueDark" onClick={() => setMobileMenuOpen(false)}>Metodologia</a>
          <a href="#" className="text-3xl font-serif font-bold text-brand-blueDark" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
          <a href="#" className="text-3xl font-serif font-bold text-brand-blueDark" onClick={() => setMobileMenuOpen(false)}>Blog</a>
        </div>

        <div className="mt-auto">
          <button className="bg-brand-blue text-white w-full py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-brand-blueDark transition-colors">
            Iniciar Plano Agora
          </button>
          <p className="text-center mt-6 text-brand-blueDark/40 font-bold uppercase text-[10px] tracking-widest">
            Fale conosco: (11) 99999-9999
          </p>
        </div>
      </div>
    </nav>
  );
};
