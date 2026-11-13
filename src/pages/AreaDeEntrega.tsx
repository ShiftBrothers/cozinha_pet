import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { MapPin, Truck, Clock, ArrowRight } from 'lucide-react';

export const AreaDeEntrega: React.FC = () => {
  return (
    <PageLayout pathname="/area-de-entrega">
      <section className="pt-32 pb-16 md:pb-24 bg-brand-cream px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-neutral-900 leading-[1.1] tracking-tight mb-6">
            Área de Entrega
          </h1>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            Servimos Curitiba e região metropolitana com prazos personalizados e entrega rápida.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Regiões Atendidas</h3>
              <p className="text-neutral-600">Curitiba e Região Metropolitana</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Entrega</h3>
              <p className="text-neutral-600">Semanal ou quinzenal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Prazo</h3>
              <p className="text-neutral-600">48h após aprovação</p>
            </div>
          </div>

          <div className="bg-brand-cream rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
              Bairros e Cidades
            </h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Atendemos os principais bairros de Curitiba e cidades da Região Metropolitana. Para confirmar se sua região é atendida, favor consultar nosso time pelo WhatsApp.
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-brand-red">
              <p className="text-neutral-700 font-semibold">
                [INFORMAÇÃO PENDENTE] Lista completa de bairros atendidos — aguardando detalhes da operação
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                Você pode consultar a disponibilidade diretamente pelo WhatsApp.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Consulte Disponibilidade
            </h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Tire dúvidas sobre entrega em sua região e conheça nossos prazos personalizados.
            </p>
            <a
              href="https://wa.me/5541988752887?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20se%20voc%C3%AAs%20entregam%20na%20minha%20regi%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-bold hover:bg-brand-redDark transition-all shadow-lg group"
            >
              Consultar Área de Entrega
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
