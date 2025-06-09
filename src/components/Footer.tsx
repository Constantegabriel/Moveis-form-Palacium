
import React from 'react';
import { Phone, Instagram, Facebook, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="/lovable-uploads/a3621fca-91fe-4e2f-bd2a-1dc3c1c0c3d5.png" 
                alt="Palacium Ambientes Logo" 
                className="h-7 w-auto"
              />
              <span className="text-white font-bold text-xl font-inter">Palacium Ambientes</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-inter">
            Há mais de 15 anos transformando ambientes e realizando sonhos através de móveis sob medida únicos e funcionais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/554820123530" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/palaciumambientes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com/palaciumambientes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 font-inter">Navegação</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors font-inter"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-white transition-colors font-inter"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projetos')}
                  className="text-gray-400 hover:text-white transition-colors font-inter"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-white transition-colors font-inter"
                >
                  Contato
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('formulario')}
                  className="text-gray-400 hover:text-white transition-colors font-inter"
                >
                  Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 font-inter">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 font-inter">(48) 2012-3530</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 font-inter">(48) 8823-5120</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 font-inter">contato@palaciumambientes.com.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div className="text-gray-400 font-inter">
                  <p>R. Hipólito Henrique Pfleger, 1025 - sala 1</p>
                  <p>Jardim Janaina, Biguaçu - SC, 88161-850</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 font-inter">Horário de Funcionamento</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div className="text-gray-400 font-inter">
                  <p className="font-medium">Segunda a Sexta</p>
                  <p>09:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div className="text-gray-400 font-inter">
                  <p className="font-medium">Sábado</p>
                  <p>09:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div className="text-gray-400 font-inter">
                  <p className="font-medium">Domingo</p>
                  <p>Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-inter">
              © 2024 Palacium Ambientes. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0 font-inter">
              Página desenvolvida por <span className="text-white font-medium"> <a href="https://instagram.com/rizontec">Rizontec</a></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
