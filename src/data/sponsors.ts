export interface Sponsor {
  name: string;
  role: string;
  glow?: boolean;
}

export const sponsors = {
  diamond: [
    { name: 'LICORERA DE CALDAS', role: 'Patrocinador', glow: true },
    { name: 'LICORERA DE ANTIOQUIA', role: 'Patrocinador', glow: true },
    { name: 'DIAGEO', role: 'Patrocinador', glow: true },
  ],
  gold: [
    { name: 'CAMARA DE COMERCIO', role: 'Aliado' },
    { name: 'ACODRES', role: 'Aliado' },
    { name: 'ANATO', role: 'Aliado' },
    { name: 'COTELCO', role: 'Aliado' },
  ],
  allies: [
    { name: 'FONDA LA FLORESTA', role: 'Sede Oficial' },
  ]
};

export const sponsorKeys = {
  diamond: [{ key: 'licoreraCaldas' }, { key: 'licoreraAntioquia' }, { key: 'diageo' }],
  gold: [{ key: 'camaraComercio' }, { key: 'acodres' }, { key: 'cotelco' }, { key: 'anato' }],
  allies: [{ key: 'fondaLaFloresta' }, { key: 'olimpicaStereo' }]
};
