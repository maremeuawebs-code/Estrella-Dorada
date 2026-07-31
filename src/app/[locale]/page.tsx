import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { CinematicSequence } from '@/features/cinematic/CinematicSequence';
import { AboutSection } from '@/features/landing/AboutSection';
import { CategoriesSection } from '@/features/landing/CategoriesSection';
import { TimelineSection } from '@/features/landing/TimelineSection';
import { NominationsSection } from '@/features/landing/NominationsSection';
import { SponsorsSection } from '@/features/landing/SponsorsSection';
import { GallerySection } from '@/features/landing/GallerySection';
import { NewsSection } from '@/features/landing/NewsSection';
import { FaqSection } from '@/features/landing/FaqSection';
import { LocationSection } from '@/features/landing/LocationSection';
import { ContactSection } from '@/features/landing/ContactSection';

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <CinematicSequence />
      <AboutSection />
      <CategoriesSection />
      <TimelineSection />
      <NominationsSection />
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


