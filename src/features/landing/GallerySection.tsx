import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { galleryImages } from '@/data/gallery';

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)]" />
      <Container className="relative z-10">
        <SectionTitle title="Momentos Estelares" subtitle="Memorias de la Gala" />
        <p className="text-neutral-400 text-center max-w-xl mx-auto mb-16 -mt-8">
          Una retrospectiva visual del glamur, la pasión y los hitos que definen nuestro certamen.
        </p>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className={`relative overflow-hidden group rounded-2xl border border-white/5 bg-neutral-900 ${img.span || ''}`}
            >
              {/* Background Image with Ken Burns effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
                style={{ backgroundImage: `url(${img.url})` }} 
              />
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" />
              
              {/* Bottom Text Panel */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#d4af37] text-xs uppercase tracking-[0.2em] font-medium mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Gala Oficial
                </span>
                <h3 className="text-white text-lg font-bold font-outfit tracking-wide">
                  {img.title}
                </h3>
              </div>

              {/* Decorative Corner Borders on Hover */}
              <div className="absolute inset-4 border border-[#d4af37]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
