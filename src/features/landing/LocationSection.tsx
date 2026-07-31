import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const LocationSection = () => {
  return (
    <section id="location" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02)_0%,transparent_70%)]" />
      
      <Container>
        <SectionTitle title="La Sede del Prestigio" subtitle="El Escenario" />
        
        <div className="bg-gradient-to-br from-neutral-900 to-black rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-[0_15px_50px_-20px_rgba(212,175,55,0.15)] border border-white/5 max-w-5xl mx-auto">
          {/* Information panel */}
          <div className="p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span className="text-[#d4af37] text-xs uppercase tracking-[0.2em] font-medium">Armenia, Quindío</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6 font-outfit tracking-wide">
              Centro de Convenciones de Armenia
            </h3>
            
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Un hito arquitectónico en el corazón de la ciudad. Con una estructura de vanguardia y espacios diseñados para albergar los eventos de etiqueta y alta costura más importantes del país.
            </p>
            
            <div className="space-y-4 border-t border-white/5 pt-6">
              <div className="flex gap-4">
                <span className="text-[#d4af37] font-bold">Dirección:</span>
                <span className="text-neutral-300">Calle 26 Norte # 11-21, Armenia, Quindío</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#d4af37] font-bold">Acceso:</span>
                <span className="text-neutral-300">Entrada principal VIP con Alfombra Dorada</span>
              </div>
            </div>
          </div>
          
          {/* Map mockup panel */}
          <div className="relative h-80 lg:h-auto lg:w-1/2 bg-neutral-950 flex flex-col items-center justify-center p-8 border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden">
            {/* Map styling circles representing locations */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 animate-pulse" />
            <div className="absolute w-[260px] h-[260px] rounded-full border border-[#d4af37]/10" />
            
            {/* Pin locator icon */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-bold">Centro de Convenciones</span>
                <p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">Coordenadas de la Gala</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
