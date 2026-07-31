'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Accordion = ({ items }: { items: { question: string, answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-black/30">
          <button 
            className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:text-gold-400 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-medium">{item.question}</span>
            <span>{openIndex === i ? '−' : '+'}</span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }} 
                animate={{ height: 'auto', opacity: 1 }} 
                exit={{ height: 0, opacity: 0 }}
                className="px-6 pb-4 text-neutral-400"
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
