import React, { useState } from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { generateFAQPageSchema } from '../lib/schemaGenerators';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'O que é alimentação natural para cães?',
    answer: 'Alimentação natural para cães é uma dieta baseada em ingredientes frescos e inteiros, sem processamento industrial, conservantes artificiais ou aditivos químicos. Diferentemente das rações comerciais, a alimentação natural é preparada com ingredientes 100% grau humano, selecionados especificamente para as necessidades nutricionais do seu cão.',
  },
  {
    question: 'Quanto custa a alimentação natural da CozinhaPet?',
    answer: 'Começamos com o Kit Degustação a partir de R$ 40,00 (150g) ou R$ 60,00 (250g). Para planos mensais, o valor varia conforme o tamanho e necessidades específicas do seu pet. Converse com nossa equipe para um orçamento personalizado.',
  },
  {
    question: 'Como fazer a transição alimentar?',
    answer: 'A transição deve ser gradual ao longo de 7-10 dias, misturando aumentando proporções da nova alimentação natural enquanto reduz a anterior. Fornecemos orientações completas no momento da entrega. Um processo abrupto pode causar desconforto digestivo.',
  },
  {
    question: 'Qual quantidade de comida meu cachorro deve consumir?',
    answer: 'A quantidade varia conforme peso, idade, nível de atividade e metabolismo do cão. Em geral, recomenda-se 2-3% do peso corporal por dia. Nossa equipe faz a recomendação personalizada durante a consulta inicial.',
  },
  {
    question: 'A alimentação natural pode ser personalizada?',
    answer: 'Sim! Todos os nossos cardápios são 100% personalizados conforme raça, idade, peso, alergias, preferências e restrições alimentares do seu cão. Nenhum plano é genérico.',
  },
  {
    question: 'Como armazenar os alimentos?',
    answer: 'As refeições podem ser mantidas na geladeira por até 3 dias ou congeladas por até 3 meses sem perder qualidade nutricional. Fornecemos instruções detalhadas de armazenamento em cada entrega.',
  },
  {
    question: 'Como funciona a entrega?',
    answer: 'Entregamos em Curitiba e Região Metropolitana com frequência semanal ou quinzenal, conforme seu plano. Preparamos as refeições em até 48 horas após aprovação e entregamos em sua casa.',
  },
  {
    question: 'Como escolher o plano adequado?',
    answer: 'Comece com o Kit Degustação para conhecer os sabores favoritos do seu pet. Após, você pode optar por um plano mensal personalizado. Nossa equipe ajuda você a escolher a melhor opção.',
  },
  {
    question: 'Como solicitar um cardápio?',
    answer: 'Entre em contato via WhatsApp, telefone ou email. Converse com nossa equipe sobre as necessidades do seu pet e receba um cardápio personalizado com sugestões nutricionais.',
  },
];

const schema = generateFAQPageSchema(faqs);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-brand-cream transition-colors text-left"
      >
        <h3 className="font-bold text-neutral-900 pr-4">{question}</h3>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-brand-red transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 md:px-6 pb-4 md:pb-6 bg-brand-cream/50 border-t border-neutral-200">
          <p className="text-neutral-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export const PerguntasFrequentes: React.FC = () => {
  return (
    <PageLayout pathname="/perguntas-frequentes" schema={schema}>
      <section className="pt-32 pb-16 md:pb-24 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-neutral-900 leading-[1.1] tracking-tight mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Respostas técnicas para suas dúvidas sobre alimentação natural para cães.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 leading-tight mb-6">
            Ainda tem dúvidas?
          </h2>
          <p className="text-neutral-600 mb-8">
            Nossa equipe está à disposição para responder qualquer pergunta sobre nutrição natural para seu pet.
          </p>
          <a
            href="https://wa.me/5541988752887?text=Tenho%20uma%20d%C3%BAvida%20sobre%20alimenta%C3%A7%C3%A3o%20natural%20para%20meu%20pet."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-bold hover:bg-brand-redDark transition-all shadow-lg group"
          >
            Fale Conosco no WhatsApp
            <ChevronDown size={20} className="group-hover:translate-x-1 transition-transform rotate-270" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};
