'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

export const FormularioOrcamento = () => {
  const [formData, setFormData] = useState<{
    nome: string;
    telefone: string;
    cidade: string;
    tipo: string[];
    orcamento: string;
    prazo: string;
    descricao: string;
  }>({
    nome: '',
    telefone: '',
    cidade: '',
    tipo: [],
    orcamento: '',
    prazo: '',
    descricao: ''
  });

  const { toast } = useToast();

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTipoToggle = (valor: string) => {
    setFormData(prev => {
      const tipos = prev.tipo.includes(valor)
        ? prev.tipo.filter(item => item !== valor)
        : [...prev.tipo, valor];
      return { ...prev, tipo: tipos };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.tipo.length || !formData.orcamento) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha todos os campos obrigatórios.',
        variant: 'destructive'
      });
      return;
    }

    const mensagem = `
*NOVO ORÇAMENTO - MOVEIS SOB MEDIDA*

👤 *Nome:* ${formData.nome}
📱 *Telefone:* ${formData.telefone}
📍 *Cidade:* ${formData.cidade}

🛠️ *Tipos de Moveis:* ${formData.tipo.join(', ')}
💰 *Orçamento:* ${formData.orcamento}
⏰ *Prazo Desejado:* ${formData.prazo}

📝 *Descrição:*
${formData.descricao}

---
*Solicitação enviada via formulário do site*
    `.trim();

    const whatsappUrl = `https://wa.me/5548998143419?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecionando para WhatsApp',
      description: 'Você será redirecionado para o WhatsApp com suas informações.'
    });
  };

  return (
    <section id="formulario" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 max-w-4xl">
        <Card className="bg-gray-800 border-gray-700 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-white font-inter">
            Solicite seu Orçamento Gratuito
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contato */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2 font-inter">
                Informações de Contato
              </h3>

              <div>
                <Label htmlFor="nome" className="text-white font-inter">Nome Completo *</Label>
                <Input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 font-inter"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefone" className="text-white font-inter">WhatsApp *</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 font-inter"
                    placeholder="(48) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="cidade" className="text-white font-inter">Cidade</Label>
                  <Input
                    id="cidade"
                    type="text"
                    value={formData.cidade}
                    onChange={(e) => handleInputChange('cidade', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 font-inter"
                    placeholder="Sua cidade"
                  />
                </div>
              </div>
            </div>

            {/* Tipos de Cortinas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2 font-inter">
                Tipos de Moveis *
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'cozinha', label: 'Cozinha' },
                  { id: 'closet', label: 'Closet' },
                  { id: 'banheiro', label: 'Banheiro' },
                  { id: 'sala', label: 'Sala' },
                  { id: 'home-office', label: 'Home-office' },
                  { id: 'outros', label: 'Outros' },
                ].map(({ id, label }) => (
                  <label
                    key={id}
                    htmlFor={id}
                    className="flex items-center space-x-2 bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-white/50 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={id}
                      value={id}
                      checked={formData.tipo.includes(id)}
                      onChange={() => handleTipoToggle(id)}
                      className="accent-white w-5 h-5 rounded-lg"
                    />
                    <span className="text-white font-medium font-inter">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Orçamento */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2 font-inter">
                Orçamento Disponível *
              </h3>

              <Select onValueChange={(value) => handleInputChange('orcamento', value)}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white font-inter">
                  <SelectValue placeholder="Selecione sua faixa de orçamento" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="ate-2000" className="text-white font-inter">Até R$ 2.000</SelectItem>
                  <SelectItem value="2000-5000" className="text-white font-inter">R$ 2.000 - R$ 5.000</SelectItem>
                  <SelectItem value="5000-10000" className="text-white font-inter">R$ 5.000 - R$ 10.000</SelectItem>
                  <SelectItem value="10000-20000" className="text-white font-inter">R$ 10.000 - R$ 20.000</SelectItem>
                  <SelectItem value="acima-20000" className="text-white font-inter">Acima de R$ 20.000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Prazo */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2 font-inter">
                Prazo Desejado
              </h3>

              <Select onValueChange={(value) => handleInputChange('prazo', value)}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white font-inter">
                  <SelectValue placeholder="Quando precisa ficar pronto?" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="urgente" className="text-white font-inter">Urgente (até 15 dias)</SelectItem>
                  <SelectItem value="1-mes" className="text-white font-inter">Até 1 mês</SelectItem>
                  <SelectItem value="2-meses" className="text-white font-inter">Até 2 meses</SelectItem>
                  <SelectItem value="3-meses" className="text-white font-inter">Até 3 meses</SelectItem>
                  <SelectItem value="sem-pressa" className="text-white font-inter">Sem pressa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Descrição */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2 font-inter">
                Detalhes do Projeto
              </h3>

              <div>
                <Label htmlFor="descricao" className="text-white font-inter">
                  Conte-nos mais sobre o que você precisa
                </Label>
                <Textarea
                  id="descricao"
                  value={formData.descricao}
                  onChange={(e) => handleInputChange('descricao', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 font-inter min-h-[100px]"
                  placeholder="Descreva seu projeto: ambiente, medidas aproximadas, estilo preferido, etc."
                />
              </div>
            </div>

            {/* Botão */}
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 text-lg transition-all duration-300 transform hover:scale-105 font-inter"
            >
              📱 Enviar pelo WhatsApp
            </Button>
          </form>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs opacity-60 font-inter">
            Página desenvolvida por{' '}
            <a
              href="https://instagram.com/rizontec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 underline transition-colors"
            >
              Rizontec
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
