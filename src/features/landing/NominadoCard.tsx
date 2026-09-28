'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Nominado } from '@/data/nominados';
import { motion, AnimatePresence } from 'framer-motion';

interface NominadoCardProps {
  nominado: Nominado;
  isActive: boolean;
  onClick: () => void;
}

export const NominadoCard = ({ nominado, isActive, onClick }: NominadoCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Stabilize the random interval so it doesn't change on every render
  const intervalTimeRef = useRef(3000 + Math.random() * 2000);

  // AUTOMATION B: Independent photo cycling inside the card
  useEffect(() => {
    if (nominado.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % nominado.images.length);
    }, intervalTimeRef.current);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nominado.id]); // Re-init only if the nominado itself changes

  return (
    <div 
      className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-700 ease-in-out ${
        isActive 
          ? 'w-[280px] md:w-[400px] h-[400px] md:h-[550px] shadow-[0_0_40px_rgba(212,175,55,0.3)] z-20 scale-100 opacity-100' 
          : 'w-[220px] md:w-[300px] h-[300px] md:h-[400px] shadow-xl z-10 scale-95 opacity-50 hover:opacity-80'
      }`}
      onClick={onClick}
    >
      {/* Images with Fade Transition */}
      <div className="absolute inset-0 bg-neutral-900">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={nominado.images[currentImageIndex]}
              alt={`${nominado.name} - Foto ${currentImageIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={isActive}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
        <h3 className={`font-outfit font-bold text-white transition-all duration-500 ${
          isActive ? 'text-2xl md:text-3xl mb-2 gold-shimmer' : 'text-xl'
        }`}>
          {nominado.name}
        </h3>
        {isActive && (
          <span className="text-[#d4af37] text-xs uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-[#d4af37]/30">
            Ver Galería
          </span>
        )}
      </div>
      
      {/* Image counter indicator (dots) */}
      {isActive && nominado.images.length > 1 && (
        <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5 z-30">
          {nominado.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentImageIndex ? 'w-4 bg-[#d4af37]' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
