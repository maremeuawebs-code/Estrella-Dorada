import React from 'react';
export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return <div className={`bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-gold-500/50 transition-colors duration-500 ${className}`}>{children}</div>;
};
