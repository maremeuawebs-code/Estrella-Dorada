'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingOverlay = ({ progress }: { progress: number }) => {
  return (
    <AnimatePresence>
      {progress < 1 && (
        <motion.div 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
            <motion.div 
              className="h-full bg-gold-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="text-gold-500 font-outfit font-bold tracking-widest uppercase text-sm">
            Cargando Experiencia... {Math.round(progress * 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
