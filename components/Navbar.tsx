
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
        ? 'bg-white/95 backdrop-blur-lg shadow-md py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Logo className="w-12 h-12 transform group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-blueDark leading-none">
              Cozinha<span className="text-brand-red italic">Pet</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue/60 leading-tight">
              Nutrição Natural
            </span>
          </div>
        </div>

        {/* Desktop Links - High Contrast Update */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8 text-xs font-bold uppercase tracking-[0.15em] text-brand-blueDark">
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
          
          <button className="bg-brand-blue text-white px-7 py-3 rounded-full hover:bg-brand-blueDark transition-all flex items-center gap-2 group shadow-lg hover:shadow-brand-blue/20 font-bold text-sm">
            Iniciar Plano
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-brand-blueDark p-2 hover:bg-brand-blueLight rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-brand-blueLight p-8 flex flex-col space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#" className="text-xl font-bold text-brand-blueDark border-b border-brand-blueLight pb-2" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
          <a href="#" className="text-xl font-bold text-brand-blueDark border-b border-brand-blueLight pb-2" onClick={() => setMobileMenuOpen(false)}>Metodologia</a>
          <a href="#" className="text-xl font-bold text-brand-blueDark border-b border-brand-blueLight pb-2" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</a>
          <a href="#" className="text-xl font-bold text-brand-blueDark border-b border-brand-blueLight pb-2" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <button className="bg-brand-blue text-white w-full py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-brand-blueDark transition-colors">
            Assine Agora
          </button>
        </div>
      )}
    </nav>
  );
};
