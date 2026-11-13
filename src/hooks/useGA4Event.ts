import React from 'react';

interface GA4EventProps {
  eventName: string;
  eventParams?: Record<string, any>;
}

// Hook para enviar eventos GA4
export const useGA4Event = () => {
  const trackEvent = (props: GA4EventProps) => {
    if (window.gtag) {
      window.gtag('event', props.eventName, props.eventParams || {});
    }
  };
  return { trackEvent };
};

// Declare gtag globally
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: any) => void;
  }
}
