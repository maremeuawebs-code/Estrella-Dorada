export interface Category { id: string; title: string; description: string; icon?: string; image?: string; }
export const categories: Category[] = [
  { id: 'gastrobar', title: 'Mejor Gastrobar', description: 'Reconociendo la excelencia culinaria y la innovación en el mundo de los gastrobares, ofreciendo experiencias gastronómicas únicas.', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop' },
  { id: 'discoteca', title: 'Mejor Discoteca', description: 'Premiando el ambiente, la música y la energía inigualable de la mejor discoteca del Eje Cafetero.', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop' },
  { id: 'cocteleria', title: 'Excelencia en Coctelería', description: 'Celebrando el arte de la mixología y la creación de cócteles excepcionales con los mejores ingredientes.', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop' },
  { id: 'servicio', title: 'Mejor Servicio al Cliente', description: 'Destacando el compromiso inquebrantable con la satisfacción y la atención impecable al cliente.', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop' }
];
