'use client';
import React from 'react';
import { Container } from '@/components/ui/Container';
import { useTranslations } from 'next-intl';

const WA_LINK = 'https://wa.me/573215549513';
const EMAIL = 'asobaresquindio@asobares.org';

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const ContactSection = () => {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-32 bg-neutral-950 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.04)_0%,transparent_60%)]" />

      <Container className="max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-bold mb-4">
            {t('subtitle')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white leading-tight">
            {t('title')}
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]/40 mx-auto mt-6" />
        </div>

        {/* Two contact cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Email Card */}
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col items-center text-center p-8 md:p-10 rounded-3xl bg-black/40 border border-white/8 hover:border-[#d4af37]/40 transition-all duration-400 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)] hover:bg-black/60"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-6 group-hover:bg-[#d4af37]/20 group-hover:scale-110 transition-all duration-300">
              <EmailIcon />
            </div>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Correo electrónico</p>
            <p className="text-white font-bold text-sm md:text-base break-all group-hover:text-[#d4af37] transition-colors duration-200">
              {EMAIL}
            </p>
            <span className="mt-6 text-xs text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400 transition-colors duration-200">
              Enviar correo →
            </span>
          </a>

          {/* WhatsApp Card */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-10 rounded-3xl bg-black/40 border border-white/8 hover:border-green-500/40 transition-all duration-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.08)] hover:bg-black/60"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
              <WhatsAppIcon />
            </div>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mb-2">WhatsApp</p>
            <p className="text-white font-bold text-lg md:text-xl group-hover:text-green-400 transition-colors duration-200">
              +57 321 5549513
            </p>
            <span className="mt-6 text-xs text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400 transition-colors duration-200">
              Abrir chat →
            </span>
          </a>

        </div>

        {/* Bottom note */}
        <p className="text-center text-neutral-600 text-sm mt-10 max-w-md mx-auto leading-relaxed">
          Para consultas sobre el evento, patrocinios, prensa o información general, estamos disponibles por ambos canales.
        </p>
      </Container>
    </section>
  );
};
