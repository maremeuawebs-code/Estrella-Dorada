import React from 'react';
import { Container } from '@/components/ui/Container';
import { presenters } from '@/data/presenters';
import { useTranslations } from 'next-intl';

export const AboutSection = () => {
  const t = useTranslations('About');
  
  const metrics = [
    { value: t('metrics.categories.value'), label: t('metrics.categories.label'), desc: t('metrics.categories.desc') },
    { value: t('metrics.date.value'), label: t('metrics.date.label'), desc: t('metrics.date.desc') },
    { value: t('metrics.location.value'), label: t('metrics.location.label'), desc: t('metrics.location.desc') },
    { value: t('metrics.voting.value'), label: t('metrics.voting.label'), desc: t('metrics.voting.desc') },
  ];

  return (
    <section id="about" className="py-32 bg-neutral-950 relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Narrative */}
          <div>

            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white leading-tight mb-6">
              {t('title')}<br />
              <span className="gold-shimmer">{t('titleHighlight')}</span>
            </h2>

            <p className="text-neutral-300 text-base md:text-xl leading-relaxed mb-6">
              {t('description1')}
            </p>
            <p className="text-neutral-500 leading-relaxed mb-10">
              {t('description2')}
            </p>

            <a
              href="#mixologia"
              className="inline-flex items-center gap-3 text-[#d4af37] font-medium group"
            >
              <span className="text-sm uppercase tracking-wider">Conocer Mixología de Origen</span>
              <span className="w-8 h-px bg-[#d4af37] group-hover:w-16 transition-all duration-300" />
            </a>
          </div>

          {/* Right: Metric cards */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-black border border-white/5 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
              >
                <div className="text-4xl font-bold font-outfit text-[#d4af37] mb-2 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all duration-300">
                  {m.value}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
                <div className="text-neutral-600 text-xs leading-relaxed">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Presenters Subsection */}
        <div className="mt-32 border-t border-white/5 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-outfit text-white mb-4">
              <span className="gold-shimmer">{t('presentersTitle')}</span>
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              {t('presentersDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {presenters.map((presenter) => (
              <div key={presenter.key} className="bg-black border border-white/5 rounded-2xl p-8 hover:border-[#d4af37]/30 transition-all duration-300 flex flex-col items-center text-center group hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]">
                <h4 className="text-2xl font-bold font-outfit text-[#d4af37] mb-2">{t(`presenters.${presenter.key}.name`)}</h4>
                <div className="text-white font-semibold text-sm mb-1">{t(`presenters.${presenter.key}.role`)}</div>
                <div className="text-neutral-500 text-xs mb-4">{t(`presenters.${presenter.key}.company`)}</div>
                <a href={`https://instagram.com/${t(`presenters.${presenter.key}.instagram`).replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] text-sm hover:underline">
                  {t(`presenters.${presenter.key}.instagram`)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
    </section>
  );
};
