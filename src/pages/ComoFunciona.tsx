import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { generateHowToSchema } from '../lib/schemaGenerators';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    name: 'Conhecer o Serviço',
    text: 'Explore nossos cardápios, planos e diferenciais. Saiba como funciona a nutrição natural para cães.',
  },
  {
    name: 'Consulta Inicial',
    text: 'Converse com nossa equipe sobre as necessidades do seu pet. Raça, idade, peso, preferências e restrições alimentares.',
  },
  {
    name: 'Escolha do Plano',
    text: 'Selecione o plano que melhor se encaixa no seu orçamento e necessidades. Kit Degustação ou Assinatura Mensal.',
  },
  {
    name: 'Definição do Cardápio',
    text: 'Nossos nutrólogos veterinários definem o cardápio personalizado com ingredientes selecionados para seu cão.',
  },
  {
    name: 'Preparação',
    text: 'Preparamos as refeições com ingredientes 100% grau humano, respeitando todos os protocolos de higiene e segurança.',
  },
  {
    name: 'Armazenamento e Conservação',
    text: 'Embalamos com cuidado em recipientes seguros. Orientações completas sobre armazenamento e congelamento.',
  },
  {
    name: 'Entrega',
    text: 'Entregamos na sua casa dentro da região atendida. Prazos e frequência personalizados conforme seu plano.',
  },
  {
    name: 'Transição Alimentar',
    text: 'Guiamos você através da transição gradual de sua alimentação anterior para a nutrição natural. Suporte completo.',
  },
];

const schema = generateHowToSchema(steps);

export const ComoFunciona: React.FC = () => {
  return (
    <PageLayout pathname="/como-funciona" schema={schema}>
      <section className="pt-32 pb-16 md:pb-24 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-neutral-900 leading-[1.1] tracking-tight mb-6">
              Como Funciona a Alimentação Natural para Cães
            </h1>
            <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
              Entenda cada etapa do processo, desde o primeiro contato até desfrutar de uma alimentação saudável e personalizada para seu pet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-red text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                    {step.name}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
