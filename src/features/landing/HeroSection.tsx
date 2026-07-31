'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';

export const HeroSection = () => {
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
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-medium">
              Asobares Quindío · 2026
            </span>
          </div>

          <h1 className="text-6xl xl:text-8xl font-bold leading-[0.9] mb-6 font-outfit">
            <span className="block text-white">PREMIOS</span>
            <span className="block gold-shimmer">ESTRELLA</span>
            <span className="block text-white">DORADA</span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-md">
            La distinción más prestigiosa de la industria del entretenimiento, 
            la gastronomía y la vida nocturna en el Eje Cafetero de Colombia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#nominations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold rounded-full hover:bg-[#f0d060] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-sm uppercase tracking-wider"
            >
              Postularse Ahora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#d4af37]/40 text-[#d4af37] font-medium rounded-full hover:bg-[#d4af37]/10 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Ver Categorías
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-14 pt-8 border-t border-white/5">
            {[
              { num: '12+', label: 'Categorías' },
              { num: '200+', label: 'Nominados' },
              { num: '3ª', label: 'Edición' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#d4af37] font-outfit">{stat.num}</div>
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
