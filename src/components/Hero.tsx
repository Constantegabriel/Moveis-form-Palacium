
import React from 'react';

export const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/554820123530', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="overflow-x-hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/kitchen.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-8 lg:px-16 xl:px-24 pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 font-inter leading-tight">
          Móveis Sob Medida
        </h1>
        
        {/* Linha divisória */}
        <div className="w-72 h-px bg-white mx-auto mb-3"></div>
        
        {/* Nome da empresa */}
        <p className="text-lg md:text-xl text-gray-300 mb-3  font-inter">
          Palacium Ambientes
        </p>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
          Transformamos seus ambientes com Moveis únicos e funcionais, 
          criados especialmente para o seu espaço e necessidades.
        </p>

        <button 
          onClick={openWhatsApp}
          className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-inter"
        >
          Orçamento Gratuito
        </button>
      </div>
    </section>
  );
};
