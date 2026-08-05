import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { sponsorKeys as sponsors } from '@/data/sponsors';
import { useTranslations } from 'next-intl';

export const SponsorsSection = () => {
  const t = useTranslations('Sponsors');

  return (
    <section id="sponsors" className="py-32 bg-neutral-950 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:100%_40px]" />
      
      <Container className="text-center relative z-10">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} centered />
        <p className="text-neutral-400 max-w-2xl mx-auto mb-16 -mt-8">
          {t('description')}
        </p>
        
        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Diamond Level */}
          <div>
            <div className="text-center text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Patrocinio Diamante
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {sponsors.diamond.map((s) => (
                <div
                  key={s.key}
                  className="bg-black/40 border border-[#d4af37]/30 rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] group"
                >
                  <h4 className="text-xl md:text-3xl font-bold font-outfit text-white mb-3 group-hover:scale-105 group-hover:text-[#d4af37] transition-all duration-500">
                    {t(`items.${s.key}.name`)}
                  </h4>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest mt-2">{t(`items.${s.key}.role`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Level */}
          <div>
            <div className="text-center text-neutral-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Patrocinadores Oro
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sponsors.gold.map((s) => (
                <div
                  key={s.key}
                  className="bg-black/20 border border-white/5 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.05)] group"
                >
                  <h4 className="text-sm md:text-lg font-bold font-outfit text-neutral-300 tracking-wider group-hover:text-white transition-colors duration-300">
                    {t(`items.${s.key}.name`)}
                  </h4>
                  <span className="text-[10px] text-neutral-600 uppercase tracking-widest mt-2">{t(`items.${s.key}.role`)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Allies Level */}
          <div>
            <div className="text-center text-neutral-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Aliados Institucionales & Prensa
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsors.allies.map((s) => (
                <div 
                  key={s.key} 
                  className="bg-black/10 border border-white/5 rounded-lg px-6 py-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-white/20"
                >
                  <span className="text-sm font-semibold text-neutral-400 tracking-wide">{t(`items.${s.key}.name`)}</span>
                  <span className="text-[9px] text-neutral-600 uppercase tracking-wider mt-1">{t(`items.${s.key}.role`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
