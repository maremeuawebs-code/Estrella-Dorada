import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { timeline } from '@/data/timeline';
import { useTranslations } from 'next-intl';

export const TimelineSection = () => {
  const t = useTranslations('Timeline');
  return (
    <section id="timeline" className="py-32 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block" />

      <Container className="max-w-4xl relative z-10">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} centered />
        <p className="text-neutral-400 text-center max-w-xl mx-auto mb-20 -mt-8">
          Una noche exclusiva planificada al detalle para honrar a los líderes de la industria.
        </p>

        <div className="max-w-5xl mx-auto relative">
          {/* Main timeline center path */}
          <div className="absolute left-[39px] lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4af37]/40 via-neutral-800 to-transparent" />

          <div className="space-y-16">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-[34px] lg:left-1/2 lg:-translate-x-1/2 top-2 z-20 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-black border-[3px] border-[#d4af37] shadow-[0_0_15px_#d4af37]" />
                  </div>

                  {/* Left Content Side */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 text-left lg:text-right flex flex-col items-start lg:items-end justify-center">
                  </div>

                  {/* Right Content Card Side */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12">
                    <div className="bg-black/50 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md group-hover:border-[#d4af37]/30 transition-all duration-300 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                          <path d="M12 6V12L16 14" />
                        </svg>
                      </div>
                      
                      <div className="text-3xl font-bold font-outfit text-[#d4af37] mb-2">{t(`items.${item.key}.time`)}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{t(`items.${item.key}.event`)}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{t(`items.${item.key}.description`)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
