import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { useTranslations } from 'next-intl';

export const NewsSection = () => {
  const t = useTranslations('News');
  
  const socials = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@asobaresquindio',
      link: 'https://www.instagram.com/asobaresquindio/',
      color: 'from-pink-500 via-red-500 to-yellow-500',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'Asobares Quindío',
      link: 'https://www.facebook.com/profile.php?id=61572302045801',
      color: 'from-blue-600 to-blue-400',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '+57 321 5549513',
      link: 'https://wa.me/573215549513',
      color: 'from-green-500 to-emerald-400',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="news" className="py-24 bg-neutral-900/50">
      <Container>
        <div className="mb-12">
          <div className="max-w-2xl">
            <SectionTitle title={t('title')} subtitle="Conéctate con Nosotros" />
            <p className="text-neutral-400 mt-4 text-sm md:text-base">
              Síguenos en nuestras redes sociales para conocer las últimas novedades, ver nuestros posteos más recientes y enterarte de todo el proceso de los Premios Estrella Dorada.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map(social => (
            <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="p-8 flex flex-col items-center justify-center text-center h-full border border-white/5 bg-black/40 hover:bg-black/60 transition-all duration-300 hover:border-[#d4af37]/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {social.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{social.name}</h3>
                <p className="text-[#d4af37] font-medium tracking-wide">{social.handle}</p>
                <div className="mt-6 flex items-center text-xs text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">
                  Visitar perfil <span className="ml-2">→</span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};
