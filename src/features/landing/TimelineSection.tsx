import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { timelineItems } from '@/data/timeline';

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-32 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block" />

      <Container className="relative z-10">
        <SectionTitle title="Agenda de la Gala" subtitle="Cronograma Oficial" />
        <p className="text-neutral-400 text-center max-w-xl mx-auto mb-20 -mt-8">
          Una noche exclusiva planificada al detalle para honrar a los líderes de la industria.
        </p>

        <div className="max-w-5xl mx-auto relative">
          {/* Main timeline center path */}
          <div className="absolute left-[39px] lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4af37]/40 via-neutral-800 to-transparent" />

          <div className="space-y-16">
            {timelineItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-[34px] lg:left-1/2 lg:-translate-x-1/2 top-2 z-20 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-black border-[3px] border-[#d4af37] shadow-[0_0_15px_#d4af37]" />
                  </div>

                  {/* Left Content Side */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 text-left lg:text-right flex flex-col items-start lg:items-end justify-center">
                    <div className="inline-block px-4 py-1.5 border border-[#d4af37]/20 rounded-full bg-[#d4af37]/5 text-[#d4af37] font-bold font-outfit text-sm tracking-widest mb-3">
                      {item.time}
                    </div>
                  </div>

                  {/* Right Content Card Side */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12">
                    <div className="p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-[#d4af37]/30 transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(212,175,55,0.05)]">
                      <h4 className="text-xl font-bold text-white mb-2 font-outfit tracking-wide group-hover:text-[#d4af37] transition-colors duration-300">
                        {item.event}
                      </h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
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
