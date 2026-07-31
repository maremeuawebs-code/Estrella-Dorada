import React from 'react';
import { Container } from '@/components/ui/Container';

export const AboutSection = () => {
  const metrics = [
    { value: '3ª', label: 'Edición Oficial', desc: 'Desde 2024 celebrando la excelencia' },
    { value: '12+', label: 'Categorías', desc: 'Cubriendo toda la industria nocturna' },
    { value: '200+', label: 'Nominados', desc: 'Los mejores del Eje Cafetero' },
    { value: '500+', label: 'Asistentes', desc: 'Una gala de clase mundial' },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Narrative */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-[#d4af37] text-xs uppercase tracking-[0.3em]">Sobre el Evento</span>
              <div className="w-12 h-px bg-[#d4af37]/40" />
            </div>

            <h2 className="text-5xl font-bold font-outfit text-white leading-tight mb-6">
              La Distinción que<br />
              <span className="gold-shimmer">Define una Industria</span>
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Los Premios Estrella Dorada nacieron de la convicción de que la industria del 
              entretenimiento nocturno y la gastronomía en el Quindío merece su propio 
              reconocimiento internacional.
            </p>
            <p className="text-neutral-500 leading-relaxed mb-10">
              Organizados por <span className="text-[#d4af37]">Asobares Quindío</span>, estos premios 
              reúnen cada año a los líderes del sector para celebrar la excelencia, la innovación y 
              el impacto económico que genera la vida nocturna en toda la región cafetera.
            </p>

            <a
              href="#nominations"
              className="inline-flex items-center gap-3 text-[#d4af37] font-medium group"
            >
              <span className="text-sm uppercase tracking-wider">Conocer el Proceso de Postulación</span>
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
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent" />
    </section>
  );
};
