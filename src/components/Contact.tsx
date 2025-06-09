
import React from 'react';
import { Phone, Instagram, Facebook, MessageCircle, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-black">
      <div className="container mx-auto px-12 lg:px-20 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para transformar seus sonhos em realidade. Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Fale Conosco</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white font-medium">Telefone</p>
                      <p className="text-gray-300">(48) 2012-3530</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white font-medium">WhatsApp</p>
                      <a 
                        href="https://wa.me/5548201235300" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        (48) 2012-3530
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">palacium.adm@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Horário de Funcionamento</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-white" />
                    <div>
                      <span className="text-white font-medium">Segunda a Sábado:</span>
                      <span className="text-gray-300 ml-2">09:00 - 17:00</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-white" />
                    <div>
                      <span className="text-white font-medium">Domingo:</span>
                      <span className="text-gray-300 ml-2">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Nossas Redes Sociais</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="https://wa.me/554820123530" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span className="text-white font-bold">Palacium</span>
                </a>

                <a 
                  href="https://wa.me/554888235120" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span className="text-white font-bold">Alexander</span>
                </a>

                <a 
                  href="https://instagram.com/palaciumambientes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="w-6 h-6 text-white" />
                  <span className="text-white font-bold">Instagram</span>
                </a>

                <a 
                  href="https://www.facebook.com/share/1B2nD4vtzW/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="w-6 h-6 text-white" />
                  <span className="text-white font-bold">Facebook</span>
                </a>
              </div>

              <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-3">💬 Dica</h4>
                <p className="text-gray-300 text-sm">
                  Para um atendimento mais rápido, envie suas fotos e medidas pelo WhatsApp. 
                  Assim conseguimos dar um pré-orçamento mais preciso!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
