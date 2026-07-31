import React from 'react';
export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-outfit font-bold text-gold-500 mb-4">ESTRELLA DORADA</h3>
          <p className="text-neutral-400 text-sm">El galardón más prestigioso de la industria del entretenimiento nocturno y gastronómico.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li><a href="#about" className="hover:text-gold-500">Sobre Nosotros</a></li>
            <li><a href="#categories" className="hover:text-gold-500">Categorías</a></li>
            <li><a href="#nominations" className="hover:text-gold-500">Nominaciones</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contacto</h4>
          <p className="text-neutral-400 text-sm mb-2">Armenia, Quindío</p>
          <p className="text-neutral-400 text-sm">info@estrelladorada.com</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-neutral-600 text-xs">
        © 2026 Premios Estrella Dorada. Todos los derechos reservados.
      </div>
    </footer>
  );
};
