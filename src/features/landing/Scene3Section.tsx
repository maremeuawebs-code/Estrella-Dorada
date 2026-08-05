'use client';
import React, { useRef, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export const Scene3Section = () => {
  const t = useTranslations('Scene3');
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.008;
      if (starRef.current) {
        const scale = 1 + Math.sin(t) * 0.03;
        const rotate = Math.sin(t * 0.5) * 3;
        starRef.current.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="scene3" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Deep gold glow from right */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-15"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 80% 50%, rgba(212,175,55,0.5) 0%, transparent 60%)' }} />
      {/* Subtle particle lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(212,175,55,0.02) 0px, rgba(212,175,55,0.02) 1px, transparent 1px, transparent 80px)',
      }} />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>

          <h2 className="text-5xl xl:text-7xl font-bold font-outfit leading-[0.95] mb-6">
            <span className="block text-white">{t('title1')}</span>
            <span className="block gold-shimmer">{t('title2')}</span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent mb-8" />

          <p className="text-neutral-300 text-xl leading-relaxed mb-6 max-w-sm">
            {t('description1')}
          </p>
          <p className="text-neutral-500 leading-relaxed mb-10 max-w-sm">
            {t('description2')}
          </p>

          <div className="flex gap-6">
            {[
              { key: 'organizer' },
              { key: 'venue' },
              { key: 'date' },
            ].map(spec => (
              <div key={spec.key} className="border-t border-[#d4af37]/20 pt-4">
                <div className="text-[#d4af37] font-bold text-sm font-outfit">{t(`specs.${spec.key}.value`)}</div>
                <div className="text-neutral-600 text-xs uppercase tracking-wider mt-1">{t(`specs.${spec.key}.label`)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Iconic trophy visual */}
        <div className="hidden lg:flex items-center justify-center relative h-[580px]">
          {/* Outer rings */}
          <div className="absolute w-72 h-72 rounded-full border border-[#d4af37]/8" />
          <div className="absolute w-96 h-96 rounded-full border border-[#d4af37]/4" />
          <div className="absolute w-[480px] h-[480px] rounded-full border border-[#d4af37]/2" />

          {/* Main trophy */}
          <div ref={starRef} className="relative z-10" style={{ willChange: 'transform' }}>
            <svg
              width="220" height="260"
              viewBox="0 0 220 260"
              fill="none"
              className="drop-shadow-[0_0_60px_rgba(212,175,55,0.5)]"
            >
              {/* Trophy cup */}
              <path d="M70 60 L150 60 L158 90 L175 90 L175 110 C175 148 150 168 110 175 C70 168 45 148 45 110 L45 90 L62 90 Z"
                fill="url(#trophyGrad)" />
              {/* Trophy stem */}
              <rect x="100" y="175" width="20" height="40" fill="url(#stemGrad)" rx="2"/>
              {/* Trophy base */}
              <rect x="75" y="213" width="70" height="14" fill="url(#baseGrad)" rx="3"/>
              <rect x="85" y="225" width="50" height="6" fill="url(#baseGrad)" rx="2"/>
              {/* Star on top */}
              <path d="M110 38 l4.5 9.2 10.1 1.5 -7.3 7.1 1.7 10.1 -9-4.8 -9 4.8 1.7-10.1 -7.3-7.1 10.1-1.5z"
                fill="#f0d060" stroke="#d4af37" strokeWidth="0.5"/>
              {/* Highlight sheen */}
              <path d="M82 70 Q88 85 85 110 Q82 130 85 148"
                stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
              {/* Handles */}
              <path d="M45 95 Q20 95 20 115 Q20 135 45 135" stroke="url(#handleGrad)" strokeWidth="5" fill="none" strokeLinecap="round"/>
              <path d="M175 95 Q200 95 200 115 Q200 135 175 135" stroke="url(#handleGrad)" strokeWidth="5" fill="none" strokeLinecap="round"/>

              <defs>
                <linearGradient id="trophyGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f0d060"/>
                  <stop offset="40%" stopColor="#d4af37"/>
                  <stop offset="100%" stopColor="#8a6c0a"/>
                </linearGradient>
                <linearGradient id="stemGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#9a7d0a"/>
                  <stop offset="50%" stopColor="#d4af37"/>
                  <stop offset="100%" stopColor="#9a7d0a"/>
                </linearGradient>
                <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d4af37"/>
                  <stop offset="100%" stopColor="#7d6408"/>
                </linearGradient>
                <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d4af37"/>
                  <stop offset="100%" stopColor="#b8960c"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-8 text-center">
            <div className="text-[#d4af37] text-xs uppercase tracking-[0.5em] opacity-60">{t('bottomLabel')}</div>
          </div>
        </div>
      </Container>

      {/* Transition fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950" />
    </section>
  );
};
