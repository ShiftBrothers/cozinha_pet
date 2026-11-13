import React, { useEffect } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { FloatingButtons } from '../FloatingButtons';
import { getSEOMeta } from '../../lib/seoData';

interface PageLayoutProps {
  children: React.ReactNode;
  pathname: string;
  schema?: Record<string, any>;
  breadcrumb?: Array<{ name: string; url: string }>;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, pathname, schema, breadcrumb }) => {
  const meta = getSEOMeta(pathname);

  useEffect(() => {
    // Atualizar title
    document.title = meta.title;

    // Atualizar meta description
    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement('meta');
      descEl.setAttribute('name', 'description');
      document.head.appendChild(descEl);
    }
    descEl.setAttribute('content', meta.description);

    // Atualizar canonical
    let canonEl = document.querySelector('link[rel="canonical"]');
    if (!canonEl) {
      canonEl = document.createElement('link');
      canonEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonEl);
    }
    canonEl.setAttribute('href', meta.canonical);

    // Atualizar og:title
    let ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (!ogTitleEl) {
      ogTitleEl = document.createElement('meta');
      ogTitleEl.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleEl);
    }
    ogTitleEl.setAttribute('content', meta.title);

    // Atualizar og:description
    let ogDescEl = document.querySelector('meta[property="og:description"]');
    if (!ogDescEl) {
      ogDescEl = document.createElement('meta');
      ogDescEl.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescEl);
    }
    ogDescEl.setAttribute('content', meta.description);

    // Atualizar og:image
    let ogImageEl = document.querySelector('meta[property="og:image"]');
    if (!ogImageEl) {
      ogImageEl = document.createElement('meta');
      ogImageEl.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageEl);
    }
    ogImageEl.setAttribute('content', meta.ogImage);

    // Atualizar og:type
    let ogTypeEl = document.querySelector('meta[property="og:type"]');
    if (!ogTypeEl) {
      ogTypeEl = document.createElement('meta');
      ogTypeEl.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeEl);
    }
    ogTypeEl.setAttribute('content', meta.ogType);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [meta, pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        )}
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};
