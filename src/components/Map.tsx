
import React from 'react';

export const Map = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-300 font-inter">
            Visite nosso estabelecimento e conheça nossos projetos de perto
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl max-w-4xl mx-auto">
          <div className="aspect-square md:aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.74507908173786!2d-48.63799838499747!3d-27.52193047078404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274fab08fff157%3A0xfbe58d6d613bd49b!2sPALACIUM%20AMBIENTES!5e0!3m2!1spt-BR!2sbr!4v1749227836482!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Palacium Ambientes"
              className="rounded-lg"
            ></iframe>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-3 font-inter">Fácil Acesso</h3>
              <p className="text-gray-300 font-inter">Localização central com fácil acesso por transporte público</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3 font-inter">Estacionamento</h3>
              <p className="text-gray-300 font-inter">Estacionamento gratuito disponível para nossos clientes</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3 font-inter">Atendimento</h3>
              <p className="text-gray-300 font-inter">Mais de 15 anos de experiência em móveis sob medida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
