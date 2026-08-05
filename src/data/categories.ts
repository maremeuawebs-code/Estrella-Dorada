export interface Category { id: string; title: string; description: string; icon?: string; image?: string; }
export const categories: Category[] = [
  {
    id: 'bar',
    title: 'Bar del Año',
    description: 'Bares y cantinas urbanas en operación activa',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bar-revelacion',
    title: 'Bar Revelación',
    description: 'Discotecas y clubes nocturnos',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fonda',
    title: 'Fonda Tradicional del Año',
    description: 'Fondas con mínimo 10 años o valor patrimonial quindiano',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dj',
    title: 'Mejor DJ del Quindío',
    description: 'DJs residentes o freelance con actividad en el departamento',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'banda',
    title: 'Mejor Agrupación o Banda en Vivo',
    description: 'Grupos musicales activos en el circuito de bares/eventos',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cantante',
    title: 'Mejor Cantante / Solista',
    description: 'Artistas individuales del circuito nocturno quindiano',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bartender',
    title: 'Bartender / Mixólogo del Año',
    description: 'Cocteleros y bartenders con actividad demostrable',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'innovacion',
    title: 'MENCIÓN Innovación y Tendencia',
    description: 'Concepto, experiencia o propuesta más disruptiva del año',
    image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'servicio-aliado',
    title: 'MENCIÓN Mejor Servicio Aliado',
    description: 'Sonido, iluminación, seguridad, logística, proveedores',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'legalidad',
    title: 'Comprometido con la Legalidad',
    description: 'Cumplimiento normativo, bioseguridad',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'verde',
    title: 'Establecimiento Verde del Año',
    description: 'Prácticas sostenibles: reciclaje, ahorro energético, conciencia ambiental',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'artista-revelacion',
    title: 'Artista Revelación del Año',
    description: 'Artista con menos de 2 años en el circuito quindiano y alto impacto',
    image: 'https://images.unsplash.com/photo-1501386761578-eaa54b9c52f6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'trayectoria',
    title: 'Reconocimiento a la Trayectoria',
    description: 'Persona o establecimiento con aporte histórico al gremio — no compite, se otorga',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop'
  }
];
