import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Como Funciona', href: '/como-funciona' },
    { label: 'Cardápios', href: '/cardapios' },
    { label: 'Planos', href: '/planos' },
    { label: 'Área de Entrega', href: '/area-de-entrega' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Dúvidas', href: '/perguntas-frequentes' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-sm py-2 md:py-3'
        : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center group cursor-pointer">
            <Logo className="h-8 md:h-10 transform group-hover:scale-105 transition-transform" />
          </Link>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <div className="flex items-center space-x-3 lg:space-x-4 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              {navLinks.map(link => (
                <Link key={link.href} to={link.href} 
                  className={`hover:text-brand-red transition-colors relative group py-2 ${isActive(link.href) ? 'text-brand-red' : ''}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-red transition-all ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
            <a href="https://wa.me/5541988752887" target="_blank" rel="noopener noreferrer" 
              className="bg-brand-blue text-white px-7 py-3 rounded-full hover:bg-brand-blueDark transition-all flex items-center gap-2 shadow-lg font-bold text-sm">
              Fale Conosco
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-all ${isScrolled || mobileMenuOpen ? 'text-neutral-800' : 'text-white'}`}>
              <Menu size={24} className={mobileMenuOpen ? 'hidden' : 'block'} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[70] md:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-neutral-900/40 transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transition-transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-6 border-b">
            <Logo className="h-9" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-neutral-100 rounded-full">
              <X size={22} className="text-neutral-700" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-6">
            {navLinks.map(link => (
              <Link key={link.href} to={link.href} onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-serif py-4 border-b flex justify-between ${isActive(link.href) ? 'text-brand-red' : 'text-neutral-800'}`}>
                {link.label}
                <ChevronRight size={18} />
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t bg-neutral-50">
            <a href="https://wa.me/5541988752887" target="_blank" rel="noopener noreferrer"
              className="bg-brand-red text-white w-full py-4 rounded-2xl font-bold text-center block hover:bg-brand-redDark">
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
