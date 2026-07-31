import React from 'react';
export const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold font-outfit text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gold-500 uppercase tracking-widest text-sm">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent mx-auto mt-6"></div>
    </div>
  );
};
