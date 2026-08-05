import React from 'react';
export const SectionTitle = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && <span className="text-[#d4af37] text-xs uppercase tracking-[0.2em] font-bold mb-3 block">{subtitle}</span>}
      <h2 className="text-4xl font-bold font-outfit text-white mb-4">{title}</h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-[#d4af37] to-transparent mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};
