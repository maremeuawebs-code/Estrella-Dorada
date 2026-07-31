export interface Sponsor {
  name: string;
  role: string;
  glow?: boolean;
}

export const sponsors = {
  diamond: [
    { name: 'ASOBARES COLOMBIA', role: 'Organizador Oficial', glow: true },
    { name: 'GOBIERNO DEL QUINDÍO', role: 'Apoyo Institucional' },
  ],
  gold: [
    { name: 'RON MEDELLÍN', role: 'Patrocinador Oficial' },
    { name: 'CHAMPAGNE DOM PÉRIGNON', role: 'Aliado de Lujo' },
    { name: 'AGUARDIENTE ANTIOQUEÑO', role: 'Patrocinador Plata' },
    { name: 'HOTEL MOCAWA PLAZA', role: 'Hospedaje Oficial' },
  ],
  allies: [
    { name: 'Cámara de Comercio de Armenia', role: 'Aliado Estratégico' },
    { name: 'Quindío Turismo Regional', role: 'Promotor Oficial' },
    { name: 'Eje Cafetero Gourmet', role: 'Prensa Oficial' },
  ]
};
