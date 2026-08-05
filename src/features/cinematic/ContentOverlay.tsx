'use client';
import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

interface ContentOverlayProps {
  currentViewport: 1 | 2 | 3 | 'landing';
  onExitCinematic: () => void;
}

export const ContentOverlay = ({ currentViewport, onExitCinematic }: ContentOverlayProps) => {
  const tScene2 = useTranslations('Scene2');
  const tScene3 = useTranslations('Scene3');
  
  const isV1 = currentViewport === 1;
  const isV2 = currentViewport === 2;
  const isV3 = currentViewport === 3;

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    onExitCinematic();
    setTimeout(() => {
      if (target && target.startsWith('#')) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Calculate sliding translateY translation offset in vh
  let translateY = 0;
  if (isV1) translateY = 0;
  else if (isV2) translateY = -100;
  else if (isV3 || currentViewport === 'landing') translateY = -200;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none w-full h-full overflow-hidden">
      {/* Vertically sliding master container representing page scroll */}
      <div 
        className="w-full h-[300vh] flex flex-col transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translate3d(0, ${translateY}vh, 0)` }}
      >
        {/* Section 1 Viewport Page */}
        <div className="w-full h-screen flex items-center relative">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full py-16">
            <div className="lg:col-span-6 flex flex-col justify-center pointer-events-auto">
              <div 
                className={`p-10 rounded-3xl bg-black/28 backdrop-blur-[14px] border border-[#d4af37]/12 shadow-2xl space-y-6 max-w-xl transition-all duration-[1200ms] ${
                  isV1 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-40 translate-y-4 blur-[2px]'
                }`}
              >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#d4af37]/25 rounded-full bg-[#d4af37]/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                  <span className="text-[#d4af37] text-[10px] uppercase tracking-[0.25em] font-bold font-outfit">
                    Asobares Quindío · 2026
                  </span>
                </div>
                
                <h1 className="text-5xl xl:text-6xl font-bold leading-[0.95] font-outfit">
                  <span className="block text-white">PREMIOS</span>
                  <span className="block gold-shimmer">ESTRELLA</span>
                  <span className="block text-white">DORADA</span>
                </h1>
                
                <p className="text-neutral-300 text-base leading-relaxed">
                  La distinción más prestigiosa de la industria del entretenimiento, la gastronomía y la vida nocturna en el Eje Cafetero de Colombia.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#categories"
                    onClick={handleAnchorClick}
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-[#d4af37] text-black font-bold rounded-full hover:bg-[#f0d060] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-xs uppercase tracking-wider"
                  >
                    Ver Categorías
                  </a>
                </div>
              </div>
            </div>
          </Container>

          {/* Floating badge for Viewport 1 to bypass watermark */}
          <div className="absolute bottom-8 right-8 z-30 pointer-events-auto">
            <a
              href="#categories"
              onClick={handleAnchorClick}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-black/40 backdrop-blur-md border border-[#d4af37]/35 text-[#d4af37] font-bold rounded-xl hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 text-xs uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Nominados 2026
            </a>
          </div>
        </div>

        {/* Section 2 Viewport Page */}
        <div className="w-full h-screen flex items-center relative">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full py-16">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-6 flex flex-col justify-center items-end pointer-events-auto">
              <div 
                className={`p-10 rounded-3xl bg-black/28 backdrop-blur-[14px] border border-[#d4af37]/12 shadow-2xl space-y-6 max-w-xl text-right items-end flex flex-col transition-all duration-[1200ms] ${
                  isV2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-40 translate-y-4 blur-[2px]'
                }`}
              >

                <h2 className="text-4xl xl:text-5xl font-bold font-outfit text-white leading-[1.05]">
                  {tScene2('title1')}<br />
                  <span className="gold-shimmer">{tScene2('title2')}</span>
                </h2>
                
                <p className="text-neutral-300 text-base leading-relaxed">
                  {tScene2('description')}
                </p>
                
                <div className="flex gap-8 pt-4 border-t border-white/5 w-full justify-end">
                  <div>
                    <div className="text-2xl font-bold text-[#d4af37] font-outfit">{tScene2('date')}</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">{tScene2('dateLabel')}</div>
                  </div>
                  <div className="border-l border-white/10 pl-8">
                    <div className="text-2xl font-bold text-[#d4af37] font-outfit">{tScene2('voting')}</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">{tScene2('votingLabel')}</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Section 3 Viewport Page */}
        <div className="w-full h-screen flex items-center relative">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full py-16">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-6 flex flex-col justify-center items-end pointer-events-auto">
              <div 
                className={`p-10 rounded-3xl bg-black/28 backdrop-blur-[14px] border border-[#d4af37]/12 shadow-2xl space-y-6 max-w-xl text-right items-end flex flex-col transition-all duration-[1200ms] ${
                  isV3 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-40 translate-y-4 blur-[2px]'
                }`}
              >

                <h2 className="text-4xl xl:text-5xl font-bold font-outfit leading-[1.05]">
                  <span className="block text-white">{tScene3('title1')}</span>
                  <span className="block gold-shimmer">{tScene3('title2')}</span>
                </h2>
                
                <p className="text-neutral-300 text-base leading-relaxed">
                  {tScene3('description1')} {tScene3('description2')}
                </p>
                
                <div className="flex gap-6 pt-4 border-t border-white/5">
                  {[
                    { key: 'organizer' },
                    { key: 'venue' },
                    { key: 'date' },
                  ].map(spec => (
                    <div key={spec.key} className="flex-1">
                      <div className="text-[#d4af37] font-bold text-sm font-outfit">{tScene3(`specs.${spec.key}.value`)}</div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">{tScene3(`specs.${spec.key}.label`)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
