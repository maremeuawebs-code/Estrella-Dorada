import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

import Image from 'next/image';

export const MixologiaSection = () => {
  const t = useTranslations('Mixologia');

  return (
    <section id="mixologia" className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.02)_0%,transparent_50%)]" />
      
      <Container className="relative z-10 max-w-5xl mx-auto">
        <div className="bg-neutral-900/50 backdrop-blur-md border border-[#d4af37]/20 p-6 md:p-16 rounded-3xl shadow-[0_15px_50px_-20px_rgba(212,175,55,0.15)] flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Image — appears first on mobile, second on desktop */}
          <div className="w-48 h-48 md:hidden flex justify-center pointer-events-none select-none relative flex-shrink-0">
            <div className="relative w-full h-full drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Image
                src="/images/imagen-mixologia-de-origen.png"
                alt="Mixología de ORIGEN"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-5">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white leading-tight">
              {t('title')} <br />
              <span className="gold-shimmer block mt-2 text-2xl md:text-4xl">{t('subtitle')}</span>
            </h2>
            
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              {t('description')}
            </p>
            
            <div className="pt-2">
              <a
                href={t('formLink')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs md:text-sm rounded-full hover:bg-[#f0d060] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                {t('cta')}
              </a>
            </div>
          </div>

          {/* Image — hidden on mobile (shown above), visible on desktop */}
          <div className="hidden md:flex w-full md:w-1/3 justify-center pointer-events-none select-none relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <Image
                src="/images/imagen-mixologia-de-origen.png"
                alt="Mixología de ORIGEN"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
