'use client';
import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export const Scene2Section = () => {
  const t = useTranslations('Scene2');
  return (
    <section id="scene2" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Subtle gradient divider */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-950 to-black" />
      <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-20"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 70%)' }} />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Cinematic visual */}
        <div className="hidden lg:flex items-center justify-center relative h-[500px]">
          {/* Award presentation visual */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#d4af37]/10"
            style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1410 100%)' }}>
            {/* Atmospheric light beam */}
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse 50% 80% at 30% 50%, rgba(212,175,55,0.12) 0%, transparent 60%)'
            }} />
            {/* Silhouette hands holding trophy */}
            <div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end justify-center pb-8">
              <svg width="260" height="280" viewBox="0 0 260 280" fill="none" className="drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                {/* Trophy */}
                <path d="M110 80 L150 80 L155 100 L170 100 L170 115 C170 140 150 155 130 160 C110 155 90 140 90 115 L90 100 L105 100 Z"
                  fill="#d4af37" opacity="0.9"/>
                <rect x="120" y="160" width="20" height="30" fill="#b8960c"/>
                <rect x="108" y="188" width="44" height="8" rx="2" fill="#d4af37"/>
                {/* Star on top */}
                <path d="M130 70 l2.5 5 5.5 0 -4.5 3.5 1.7 5.5 -5.2-3.3 -5.2 3.3 1.7-5.5 -4.5-3.5 5.5 0z"
                  fill="#f0d060"/>
                {/* Hands holding */}
                <path d="M60 200 Q80 180 95 190 L115 196 L115 210 Q95 205 75 220 Z"
                  fill="#2a1f0a" stroke="#3d2e0f" strokeWidth="1"/>
                <path d="M200 200 Q180 180 165 190 L145 196 L145 210 Q165 205 185 220 Z"
                  fill="#2a1f0a" stroke="#3d2e0f" strokeWidth="1"/>
                {/* Glow lines */}
                <line x1="130" y1="40" x2="130" y2="65" stroke="#d4af37" strokeWidth="1" opacity="0.5" strokeDasharray="4 4"/>
              </svg>
            </div>
            {/* Bokeh circles */}
            {[{x:20,y:15,r:6},{x:70,y:25,r:3},{x:85,y:60,r:4},{x:15,y:55,r:5},{x:50,y:80,r:3}].map((b,i) => (
              <div key={i} className="absolute rounded-full bg-[#d4af37] opacity-10 blur-sm"
                style={{ left:`${b.x}%`, top:`${b.y}%`, width:`${b.r * 4}px`, height:`${b.r * 4}px` }} />
            ))}
          </div>
        </div>

        {/* Right: Content */}
        <div className="text-left lg:text-right flex flex-col justify-center">

          <h2 className="text-5xl xl:text-6xl font-bold font-outfit text-white leading-[1.05] mb-6">
            {t('title1')}<br />
            <span className="gold-shimmer">{t('title2')}</span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md ml-auto">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-row-reverse gap-6 lg:justify-start">
            <div className="border-l-2 lg:border-l-0 lg:border-r-2 border-[#d4af37]/30 pl-4 lg:pl-0 lg:pr-4">
              <div className="text-3xl font-bold text-[#d4af37] font-outfit">{t('date')}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">{t('dateLabel')}</div>
            </div>
            <div className="border-l-2 lg:border-l-0 lg:border-r-2 border-[#d4af37]/30 pl-4 lg:pl-0 lg:pr-4">
              <div className="text-3xl font-bold text-[#d4af37] font-outfit">{t('voting')}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">{t('votingLabel')}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
