'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { nominadosData, Nominado } from '@/data/nominados';
import { NominadoCard } from './NominadoCard';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export const NominadosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNominado, setSelectedNominado] = useState<Nominado | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // AUTOMATION A: Horizontal Carousel
  useEffect(() => {
    if (isPaused || selectedNominado) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % nominadosData.length);
    }, 4000); // Change nominee every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, selectedNominado]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % nominadosData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? nominadosData.length - 1 : prev - 1));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext(); // Swipe left
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev(); // Swipe right
    }
  };

  const openModal = (nominado: Nominado) => {
    setSelectedNominado(nominado);
    setModalImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedNominado(null);
    document.body.style.overflow = '';
  };

  const handleModalNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedNominado) return;
    setModalImageIndex((prev) => (prev + 1) % selectedNominado.images.length);
  };

  const handleModalPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedNominado) return;
    setModalImageIndex((prev) => (prev === 0 ? selectedNominado.images.length - 1 : prev - 1));
  };

  // Touch swipe for modal
  const modalTouchStartX = useRef(0);
  const handleModalTouchStart = (e: React.TouchEvent) => {
    modalTouchStartX.current = e.changedTouches[0].screenX;
  };
  const handleModalTouchEnd = (e: React.TouchEvent) => {
    const diff = modalTouchStartX.current - e.changedTouches[0].screenX;
    if (diff > 50) handleModalNext();
    if (diff < -50) handleModalPrev();
  };

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!selectedNominado) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') handleModalNext();
      if (e.key === 'ArrowLeft') handleModalPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNominado, modalImageIndex]);

  return (
    <section id="nominados" className="py-24 bg-neutral-950 overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionTitle 
          title="Establecimientos Nominados" 
          subtitle="La Excelencia 2026" 
          centered 
        />
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mt-4 mb-16">
          Conoce los establecimientos que están redefiniendo el estándar de hospitalidad y entretenimiento en el Quindío.
        </p>
      </Container>

      {/* Carousel Container */}
      <div 
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 h-[450px] md:h-[600px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {nominadosData.map((nominado, index) => {
            let offset = index - currentIndex;
            const total = nominadosData.length;
            
            // Circular wraparound
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Use CSS custom property for responsive offset — avoids window access during SSR
            const translateXMobile = offset * 160;
            const translateXDesktop = offset * 310;
            const zIndex = 50 - Math.abs(offset);
            
            return (
              <div 
                key={nominado.id}
                className="absolute transition-all duration-700 ease-in-out flex items-center justify-center"
                style={{
                  // translateX via CSS calc with responsive values using clamp
                  transform: `translateX(clamp(${translateXMobile}px, ${translateXDesktop * 0.5}vw, ${translateXDesktop}px))`,
                  zIndex: zIndex,
                }}
              >
                <NominadoCard 
                  nominado={nominado} 
                  isActive={isCenter} 
                  onClick={() => openModal(nominado)}
                />
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all z-40 backdrop-blur-md"
          aria-label="Anterior nominado"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all z-40 backdrop-blur-md"
          aria-label="Siguiente nominado"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {selectedNominado && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleModalTouchStart}
              onTouchEnd={handleModalTouchEnd}
              className="flex flex-col w-full max-w-6xl h-[85vh] max-h-[900px] bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
            >
              
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent z-20 flex justify-between items-center pointer-events-none">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white gold-shimmer pointer-events-auto">
                    {selectedNominado.name}
                  </h3>
                  <p className="text-neutral-300 text-sm mt-1 pointer-events-auto">
                    Fotografía {modalImageIndex + 1} de {selectedNominado.images.length}
                  </p>
                </div>
                <button 
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors pointer-events-auto"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              {/* Main Image Area */}
              <div className="flex-1 relative w-full h-full flex items-center justify-center bg-black">
                {selectedNominado.images.map((src, i) => (
                  <div 
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-500 ${i === modalImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                  >
                    <Image 
                      src={src}
                      alt={`${selectedNominado.name} - Imagen ${i + 1}`}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority={i === modalImageIndex}
                    />
                  </div>
                ))}

                {/* Navigation Overlays */}
                {selectedNominado.images.length > 1 && (
                  <>
                    <div className="absolute left-0 top-0 bottom-0 w-1/4 z-20 cursor-pointer flex items-center px-4 md:px-8 hover:bg-gradient-to-r from-black/30 to-transparent group" onClick={handleModalPrev}>
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                      </div>
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-1/4 z-20 cursor-pointer flex items-center justify-end px-4 md:px-8 hover:bg-gradient-to-l from-black/30 to-transparent group" onClick={handleModalNext}>
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {selectedNominado.images.length > 1 && (
                <div className="h-24 bg-neutral-900 border-t border-white/10 p-3 flex gap-3 overflow-x-auto items-center justify-start sm:justify-center hide-scrollbar">
                  {selectedNominado.images.map((src, i) => (
                    <button 
                      key={src}
                      onClick={() => setModalImageIndex(i)}
                      className={`relative h-full w-24 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                        i === modalImageIndex ? 'ring-2 ring-[#d4af37] opacity-100' : 'opacity-40 hover:opacity-100'
                      }`}
                    >
                      <Image src={src} alt="thumbnail" fill className="object-cover" sizes="100px" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
