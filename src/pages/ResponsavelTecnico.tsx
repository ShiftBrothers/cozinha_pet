import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { generatePersonSchema } from '../lib/schemaGenerators';
import { Award, BookOpen, ArrowRight } from 'lucide-react';

const schema = generatePersonSchema({
  name: '[NOME DO PROFISSIONAL]',
  jobTitle: 'Nutrólogo Veterinário',
  description: 'Responsável técnico pela formulação e acompanhamento dos cardápios da CozinhaPet',
});

export const ResponsavelTecnico: React.FC = () => {
  return (
    <PageLayout pathname="/responsavel-tecnico" schema={schema}>
      <section className="pt-32 pb-16 md:pb-24 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-neutral-900 leading-[1.1] tracking-tight mb-6">
            Responsável Técnico
          </h1>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Conheça o profissional que garante a qualidade técnica e nutricional de cada cardápio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-cream rounded-2xl p-8 md:p-12 mb-12 text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-neutral-200 flex items-center justify-center">
              <span className="text-neutral-500 text-4xl">[FOTO]</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
              [NOME DO PROFISSIONAL]
            </h2>
            <p className="text-brand-red font-semibold mb-6">
              Nutrólogo Veterinário
            </p>
            <div className="bg-white rounded-lg p-4 mb-6 border border-neutral-200">
              <p className="text-neutral-700 font-semibold">
                [INFORMAÇÃO PENDENTE] Registro CRMV e informações profissionais — aguardando detalhes do cliente
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-brand-red" size={24} />
                <h3 className="text-xl font-bold text-neutral-900">Formação Profissional</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                [INFORMAÇÃO PENDENTE] Formação acadêmica, especialidades, certificações — aguardando detalhes do cliente
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-brand-blue" size={24} />
                <h3 className="text-xl font-bold text-neutral-900">Experiência Profissional</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                [INFORMAÇÃO PENDENTE] Histórico profissional, experiência em nutrição veterinária — aguardando detalhes do cliente
              </p>
            </div>

            <div className="bg-brand-cream rounded-lg p-6 border-l-4 border-brand-sage">
              <h3 className="font-bold text-neutral-900 mb-2">Responsabilidade Técnica</h3>
              <p className="text-neutral-600 leading-relaxed">
                Como nutrólogo veterinário responsável, acompanha o desenvolvimento, formulação e revisão de todos os cardápios da CozinhaPet, garantindo que cada refeição atenda aos mais altos padrões nutricionais e de segurança alimentar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-neutral-900 text-white px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Converse com Nossa Equipe
          </h2>
          <p className="text-neutral-300 mb-8">
            Tire todas as dúvidas sobre a formação técnica e o acompanhamento profissional dos nossos cardápios.
          </p>
          <a
            href="https://wa.me/5541988752887?text=Gostaria%20de%20saber%20mais%20sobre%20a%20equipe%20t%C3%A9cnica%20e%20o%20acompanhamento%20nutricional."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-bold hover:bg-brand-redDark transition-all shadow-lg group"
          >
            Fale Com a Equipe
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};
