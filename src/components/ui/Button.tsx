import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = 'px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d4af37] active:scale-98 select-none';
  
  const variants = {
    primary: 'bg-[#d4af37] hover:bg-[#f0d060] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] border border-transparent',
    outline: 'border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10 bg-transparent'
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
