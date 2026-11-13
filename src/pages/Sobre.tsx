import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { generateOrganizationSchema } from '../lib/schemaGenerators';
import { Heart, Leaf, Shield, ArrowRight } from 'lucide-react';

const schema = generateOrganizationSchema();

export const Sobre: React.FC = () => {
  return (
    <PageLayout pathname="/sobre" schema={schema}>
      <section className="pt-32 pb-16 md:pb-24 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-neutral-900 leading-[1.1] tracking-tight mb-6">
            Sobre a CozinhaPet
          </h1>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Nossa missão é oferecer alimentação natural de qualidade premium, desenvolvida por profissionais especializados.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">Nossa História</h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              CozinhaPet nasceu da paixão por oferecer o melhor para os nossos pets. Percebemos que a alimentação industrial não atendia às necessidades reais dos cães e decidimos desenvolver uma alternativa segura, prática e nutritiva.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">Nosso Propósito</h2>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Transformar a qualidade de vida dos cães através de nutrição natural personalizada, desenvolvida por nutrólogos veterinários. Cada refeição é uma decisão sobre quanto tempo ele ficará ao seu lado.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">Diferenciais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-brand-cream rounded-lg p-6">
                <Heart className="text-brand-red mb-3" size={28} />
                <h3 className="font-bold text-neutral-900 mb-2">Ingredientes Premium</h3>
                <p className="text-sm text-neutral-600">100% grau humano, frescos e selecionados com cuidado.</p>
              </div>
              <div className="bg-brand-cream rounded-lg p-6">
                <Shield className="text-brand-blue mb-3" size={28} />
                <h3 className="font-bold text-neutral-900 mb-2">Transparência Total</h3>
                <p className="text-sm text-neutral-600">Sabemos exatamente o que entra em cada refeição.</p>
              </div>
              <div className="bg-brand-cream rounded-lg p-6">
                <Leaf className="text-brand-sage mb-3" size={28} />
                <h3 className="font-bold text-neutral-900 mb-2">Natureza Pura</h3>
                <p className="text-sm text-neutral-600">Sem conservantes artificiais, corantes ou aditivos.</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">Processo de Preparação</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Cada refeição é preparada seguindo rigorosos protocolos de higiene e segurança alimentar. Utilizamos apenas ingredientes frescos de fornecedores verificados, garantindo a qualidade e segurança de cada porção.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">Cuidados com Ingredientes</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Selecionamos cuidadosamente cada ingrediente, considerando não apenas a qualidade nutricional, mas também a procedência e o tratamento aplicado. Preferimos fornecedores locais e que compartilham nossos valores de qualidade e sustentabilidade.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">Armazenamento e Conservação</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              As refeições são entregues em embalagens seguras com orientações completas de armazenamento. A maioria de nossas preparações pode ser congelada por até 3 meses, mantendo toda a qualidade nutricional.
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">Contato</h2>
            <div className="bg-brand-cream rounded-lg p-6 space-y-3">
              <div>
                <p className="font-semibold text-neutral-900">Telefone</p>
                <p className="text-neutral-600">(41) 98875-2887</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Email</p>
                <p className="text-neutral-600">cozinhapetcwb@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Localização</p>
                <p className="text-neutral-600">Curitiba, PR — Entrega em Curitiba e RM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">Quer conhecer mais?</h2>
          <p className="text-neutral-600 mb-8">
            Converse com nossa equipe e descubra como podemos ajudar seu pet a viver uma vida mais longa e saudável.
          </p>
          <a
            href="https://wa.me/5541988752887?text=Gostaria%20de%20saber%20mais%20sobre%20a%20CozinhaPet%20e%20como%20voc%C3%AAs%20trabalham."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-bold hover:bg-brand-redDark transition-all shadow-lg group"
          >
            Fale Conosco
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};
