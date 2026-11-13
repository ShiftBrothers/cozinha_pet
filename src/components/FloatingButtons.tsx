import React, { useEffect } from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  useEffect(() => {
    // GA4 tracking on mount
    if (window.gtag) {
      window.gtag('event', 'page_view');
    }
  }, []);

  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'social',
        event_label: 'floating_button'
      });
    }
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const handleInstagramClick = () => {
    if (window.gtag) {
      window.gtag('event', 'instagram_click', {
        event_category: 'social',
        event_label: 'floating_button'
      });
    }
    window.open('https://instagram.com/cozinhapets', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      {/* WhatsApp */}
      <div className="group relative">
        <button
          onClick={handleWhatsAppClick}
          aria-label="Chat com WhatsApp"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all hover:scale-110"
        >
          <MessageCircle size={24} />
        </button>
        <span className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
          Falar no WhatsApp
        </span>
      </div>

      {/* Instagram */}
      <div className="group relative">
        <button
          onClick={handleInstagramClick}
          aria-label="Siga no Instagram"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#004ea1] hover:bg-[#003d7a] text-white shadow-lg transition-all hover:scale-110"
        >
          <Instagram size={24} />
        </button>
        <span className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
          Instagram
        </span>
      </div>
    </div>
  );
};

