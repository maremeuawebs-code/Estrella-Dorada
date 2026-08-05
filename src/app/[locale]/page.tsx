import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CinematicSequence } from '@/features/cinematic/CinematicSequence';
import { AboutSection } from '@/features/landing/AboutSection';
import { CategoriesSection } from '@/features/landing/CategoriesSection';
import { TimelineSection } from '@/features/landing/TimelineSection';
import { MixologiaSection } from '@/features/landing/MixologiaSection';
import { NominationsSection } from '@/features/landing/NominationsSection';
import { SponsorsSection } from '@/features/landing/SponsorsSection';
import { GallerySection } from '@/features/landing/GallerySection';
import { NewsSection } from '@/features/landing/NewsSection';
import { FaqSection } from '@/features/landing/FaqSection';
import { LocationSection } from '@/features/landing/LocationSection';
import { ContactSection } from '@/features/landing/ContactSection';

export const metadata: Metadata = {
  title: 'Premios Estrella Dorada 2026 | Asobares Quindío',
  description: 'La distinción más prestigiosa de la industria del entretenimiento, la gastronomía y la vida nocturna en el Eje Cafetero. Gala el 24 de Septiembre de 2026 en Fonda La Floresta, Armenia, Quindío.',
  keywords: ['Estrella Dorada', 'premios', 'Asobares', 'Quindío', 'gala', 'Armenia', 'entretenimiento nocturno', 'gastronomía'],
  openGraph: {
    title: 'Premios Estrella Dorada 2026',
    description: 'Reconociendo el talento de la industria que no descansa. Gala oficial: 24 de Septiembre de 2026.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <CinematicSequence />
      <AboutSection />
      <CategoriesSection />
      <TimelineSection />
      <NominationsSection />
      <MixologiaSection />
      <SponsorsSection />
      <GallerySection />
      <NewsSection />
      <FaqSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
