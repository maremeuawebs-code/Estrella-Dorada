import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useTranslations } from 'next-intl';

export const LocationSection = () => {
  const t = useTranslations('Location');
  return (
    <section id="location" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02)_0%,transparent_70%)]" />
      
      <Container>
        <SectionTitle title="La Sede del Prestigio" subtitle="El Escenario" />
        
        <div className="bg-gradient-to-br from-neutral-900 to-black rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-[0_15px_50px_-20px_rgba(212,175,55,0.15)] border border-white/5 max-w-5xl mx-auto p-12 gap-12">
          {/* Information panel */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-4 leading-tight">
              {t('title')}<br />
              <span className="gold-shimmer">{t('venue')}</span>
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              {t('description')}
            </p>

            <a
              href="https://maps.google.com/?q=Fonda+La+Floresta+Armenia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center lg:justify-start gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#f0d060] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] w-fit"
            >
              {t('directions')}
            </a>
          </div>

          {/* Google Maps Container */}
          <div className="w-full lg:w-1/2 min-h-[400px] rounded-2xl overflow-hidden relative border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <iframe 
              src="https://maps.google.com/maps?q=Fonda%20La%20Floresta,%20Armenia,%20Quindio&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
