import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { categories } from '@/data/categories';

export const CategoriesSection = () => {
  return (
    <section id="categories" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
      <Container className="relative z-10">
        <SectionTitle title="Categorías de Premiación" subtitle="Donde la excelencia brilla" />
        <p className="text-neutral-400 text-center max-w-xl mx-auto mb-16 -mt-8">
          Reconocemos el talento, la dedicación y el valor de los establecimientos que lideran la industria en el Quindío.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <Card key={cat.id} className="group relative overflow-hidden h-[420px] flex flex-col justify-end p-0 border border-white/5 bg-neutral-950 rounded-2xl transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.25)]">
              {/* Image Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" 
                style={{ backgroundImage: `url(${cat.image})` }} 
              />
              {/* Overlay shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
              
              {/* Category Number Accent */}
              <div className="absolute top-6 right-6 font-outfit text-5xl font-bold text-white/5 select-none transition-colors duration-300 group-hover:text-[#d4af37]/10">
                {(idx + 1).toString().padStart(2, '0')}
              </div>
              
              {/* Content Panel */}
              <div className="relative z-10 p-6 flex flex-col transition-all duration-300 translate-y-8 group-hover:translate-y-0">
                {/* Accent Icon/Dot */}
                <div className="w-8 h-8 rounded-full border border-[#d4af37]/30 bg-black/40 flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-outfit tracking-wide group-hover:text-[#d4af37] transition-colors duration-300">
                  {cat.title}
                </h3>
                
                <p className="text-sm text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden leading-relaxed">
                  {cat.description}
                </p>
                
                {/* Bottom line decorator */}
                <div className="w-full h-px bg-white/5 mt-4 group-hover:bg-[#d4af37]/30 transition-all duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
