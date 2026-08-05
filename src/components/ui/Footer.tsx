import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/ISOTIPO.png" alt="Estrella Dorada" width={32} height={32} className="w-8 h-auto object-contain" />
            <h3 className="text-xl font-outfit font-bold text-[#d4af37]">ESTRELLA DORADA</h3>
          </div>
          <p className="text-neutral-400 text-sm">{t('description')}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">{t('quickLinks')}</h4>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li><a href="#about" className="hover:text-[#d4af37] transition-colors duration-200">{t('about')}</a></li>
            <li><a href="#categories" className="hover:text-[#d4af37] transition-colors duration-200">{t('categories')}</a></li>
            <li><a href="#timeline" className="hover:text-[#d4af37] transition-colors duration-200">{t('agenda')}</a></li>
            <li><a href="#mixologia" className="hover:text-[#d4af37] transition-colors duration-200">Mixología</a></li>
            <li><a href="#contact" className="hover:text-[#d4af37] transition-colors duration-200">{t('contact')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contacto & Redes</h4>
          <div className="space-y-3">
            <a href="https://wa.me/573215549513" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-[#d4af37] transition-colors text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              +57 321 5549513
            </a>
            <a href="https://www.instagram.com/asobaresquindio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-[#d4af37] transition-colors text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              @asobaresquindio
            </a>
            <a href="https://www.facebook.com/profile.php?id=61572302045801" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 hover:text-[#d4af37] transition-colors text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              Asobares Quindío
            </a>
            <a href="mailto:asobaresquindio@asobares.org" className="flex items-center gap-2 text-neutral-400 hover:text-[#d4af37] transition-colors text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              asobaresquindio@asobares.org
            </a>
          </div>
          <p className="text-neutral-500 text-xs mt-4 uppercase tracking-widest">Organiza Asobares Quindío</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-neutral-600 text-xs space-y-2">
        <p>© 2026 Premios Estrella Dorada · Asobares Quindío. Todos los derechos reservados.</p>
        <p>
          Diseñado por{' '}
          <a
            href="https://maremeuaestudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-[#d4af37] transition-colors duration-200 underline underline-offset-2"
          >
            Mare-Meua Estudio
          </a>
        </p>
      </div>
    </footer>
  );
};
