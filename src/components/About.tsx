import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-black">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        
        {/* Nossa História */}
        <div className="max-w-5xl mb-16 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-inter">
            Nossa História
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Há mais de 15 anos transformando ambientes e realizando sonhos através de móveis sob medida únicos e funcionais.
          </p>
        </div>

        {/* Nossa Missão */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-6 font-inter">
                Nossa Missão
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
                Criar móveis sob medida que combinam funcionalidade, beleza e qualidade excepcional, 
                transformando cada espaço em um ambiente único que reflete a personalidade e necessidades de nossos clientes.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-inter">
                Acreditamos que cada projeto é uma oportunidade de criar algo especial, 
                trabalhando sempre com dedicação e atenção aos detalhes.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2 font-inter">500+</h4>
                  <p className="text-gray-300 font-inter">Clientes Satisfeitos</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2 font-inter">15+</h4>
                  <p className="text-gray-300 font-inter">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl text-center md:text-left">
              <Target className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                Nossos Valores
              </h3>
              <ul className="text-gray-300 space-y-3 font-inter">
                <li>• Qualidade em cada detalhe</li>
                <li>• Atendimento personalizado</li>
                <li>• Pontualidade na entrega</li>
                <li>• Transparência nos processos</li>
                <li>• Inovação constante</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl text-center md:text-left">
              <Heart className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                Nosso Compromisso
              </h3>
              <p className="text-gray-300 leading-relaxed font-inter">
                Estamos comprometidos em superar expectativas, oferecendo móveis sob medida 
                que combinam design excepcional, funcionalidade inteligente e acabamento impecável. 
                Cada projeto é tratado com carinho e dedicação únicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};