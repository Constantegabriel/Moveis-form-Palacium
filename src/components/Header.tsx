import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMenuOpen && window.scrollY > 50) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/554820123530', '_blank');
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  const shouldShowBackground = isScrolled || isMenuOpen;

  return (
    <header className={`fixed top-0 w-full z-50 border-gray-800 transition-all duration-300 ${
      shouldShowBackground 
        ? 'bg-black/70 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-12 lg:px-20 xl:px-32">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-4">
            <button onClick={handleLogoClick} className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/a3621fca-91fe-4e2f-bd2a-1dc3c1c0c3d5.png" 
                alt="Palacium Ambientes" 
                className="h-6 w-auto"
              />
            </button>
            <span className="hidden md:inline text-white text-lg font-semibold font-inter">
              Palacium Ambientes
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('projetos')} className="text-gray-300 hover:text-white transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-white transition-colors">
              Contato
            </button>
            <button onClick={openWhatsApp} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Orçamento
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white transition-transform duration-200 hover:scale-110">
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
              }`} />
              <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-75'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className={`text-gray-300 hover:text-white transition-all duration-300 text-left transform hover:translate-x-2 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}>
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className={`text-gray-300 hover:text-white transition-all duration-300 text-left transform hover:translate-x-2 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}>
                Sobre
              </button>
              <button onClick={() => scrollToSection('projetos')} className={`text-gray-300 hover:text-white transition-all duration-300 text-left transform hover:translate-x-2 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}>
                Projetos
              </button>
              <button onClick={() => scrollToSection('contato')} className={`text-gray-300 hover:text-white transition-all duration-300 text-left transform hover:translate-x-2 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}>
                Contato
              </button>
              <button onClick={openWhatsApp} className={`bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium text-left w-fit transform hover:scale-105 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}>
                Orçamento
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
