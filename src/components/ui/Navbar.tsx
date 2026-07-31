import React from 'react';
export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-700">
          ESTRELLA DORADA
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-neutral-300">
          <a href="#about" className="hover:text-gold-400 transition-colors">El Evento</a>
          <a href="#categories" className="hover:text-gold-400 transition-colors">Categorías</a>
          <a href="#timeline" className="hover:text-gold-400 transition-colors">Agenda</a>
          <a href="#contact" className="text-gold-500 font-bold">Postularse</a>
        </div>
      </div>
    </nav>
  );
};
