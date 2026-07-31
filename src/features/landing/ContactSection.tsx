import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-neutral-950 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.03)_0%,transparent_60%)]" />
      <Container className="relative z-10 max-w-3xl">
        <SectionTitle title="Contacto & Postulaciones" subtitle="Inscripciones Abiertas" />
        <p className="text-neutral-400 text-center max-w-xl mx-auto mb-16 -mt-8">
          ¿Deseas postular tu establecimiento o tienes dudas sobre el proceso? Escríbenos directamente y nuestro comité te responderá a la brevedad.
        </p>

        <form className="space-y-8 bg-neutral-900/50 p-10 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Nombre Completo</label>
              <input 
                type="text" 
                placeholder="Ej. Juan Pérez" 
                className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300 font-sans" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Correo Electrónico</label>
              <input 
                type="email" 
                placeholder="ejemplo@correo.com" 
                className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300 font-sans" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Asunto / Categoría de Interés</label>
            <input 
              type="text" 
              placeholder="Ej. Postulación a Mejor Gastrobar" 
              className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300 font-sans" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Mensaje / Detalles de la Solicitud</label>
            <textarea 
              placeholder="Cuéntanos acerca de tu establecimiento o consulta..." 
              rows={5} 
              className="w-full bg-black/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all duration-300 font-sans resize-none"
            />
          </div>

          <button 
            type="button" 
            className="w-full py-5 bg-[#d4af37] text-black font-bold rounded-xl hover:bg-[#f0d060] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm uppercase tracking-[0.2em]"
          >
            Enviar Solicitud
          </button>
        </form>
      </Container>
    </section>
  );
};
