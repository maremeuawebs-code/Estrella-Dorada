import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export const NominationsSection = () => {
  const t = useTranslations('Nominations');

  // Muted temporarily as requested by the user
  if (true) return null;

  return (
    <section id="nominations" className="py-24 bg-gradient-to-b from-black to-neutral-900">
      <Container className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6 leading-tight">
          {t('title')}
        </h2>

        <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#f0d060] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            {t('cta')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};
