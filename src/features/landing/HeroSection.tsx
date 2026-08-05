'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

export const HeroSection = () => {
  const t = useTranslations('Hero');
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouseX(x);
      setMouseY(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 60% at ${50 + mouseX * 0.5}% ${50 + mouseY * 0.5}%, rgba(212,175,55,0.35) 0%, transparent 70%)`,
          transition: 'background 0.3s ease',
        }}
      />
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 pb-16">
        {/* Left: Content */}
        <div>
          <h1 className="text-6xl xl:text-8xl font-bold leading-[0.9] mb-6 font-outfit">
            <span className="block text-white">{t('title1')}</span>
            <span className="block gold-shimmer">{t('title2')}</span>
            <span className="block text-white">{t('title3')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 max-w-xl leading-relaxed mb-10 border-l-2 border-[#d4af37]/50 pl-6">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#categories" className="px-8 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#f0d060] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 text-center">
              {t('cta')}
            </a>
          </div>

          {/* Info bar */}
          <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/5">
            {[
              { num: '24 Sep 2026', label: 'Fecha' },
              { num: 'Fonda La Floresta', label: 'Lugar' },
              { num: 'Armenia, Quindío', label: 'Ciudad' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-[#d4af37] font-outfit">{stat.num}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cinematic Trofeo Visual */}
        <div className="hidden lg:flex items-center justify-center relative h-[600px]">
          {/* Outer glow ring */}
          <div className="absolute w-80 h-80 rounded-full border border-[#d4af37]/10 animate-pulse" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#d4af37]/5" />

          {/* Central trophy placeholder — cinematic canvas will replace this */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Gold star / award symbol */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-transparent"
              style={{ transform: `translate(${mouseX * 0.5}px, ${mouseY * 0.5}px)`, transition: 'transform 0.4s ease' }}
            />
            <svg
              className="relative z-10 drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              style={{ transform: `translate(${mouseX * 0.3}px, ${mouseY * 0.3}px)`, transition: 'transform 0.3s ease' }}
              width="180" height="180" viewBox="0 0 24 24" fill="none"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="#d4af37"
                stroke="#f0d060"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Floating label */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <div className="text-[#d4af37]/60 text-xs uppercase tracking-[0.4em]">La Máxima Distinción</div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#d4af37]/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
