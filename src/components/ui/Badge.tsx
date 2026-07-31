import React from 'react';
export const Badge = ({ children }: { children: React.ReactNode }) => {
  return <span className="px-3 py-1 border border-gold-500 text-gold-400 text-xs uppercase tracking-wider rounded-full bg-black/50 backdrop-blur-sm">{children}</span>;
};
