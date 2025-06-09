
import React from 'react';

export const Gallery = () => {
  const projects = [
    {
      title: "Cozinha Moderna",
      image: "/kitchen.jpg",
      description: "Cozinha planejada com design contemporâneo"
    },
    {
      title: "Closet Funcional", 
      image: "/roupeiro.jpg",
      description: "Closet otimizado com máximo aproveitamento"
    },
    {
      title: "Quarto Sob Medida",
      image: "/moveis2.jpg",
      description: "Quarto funcional e elegante"
    },
    {
      title: "Sala de Estar",
      image: "/moveis1.jpg",
      description: "Móveis sob medida para sala de estar"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-black">
      <div className="container mx-auto px-12 lg:px-20 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos realizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
