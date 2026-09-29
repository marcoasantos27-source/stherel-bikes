export type Product = {
  id: number;
  name: string;
  tag: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'MTB Aro 29',
    tag: 'Performance e versatilidade',
    price: 'Consultar valor',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 2,
    name: 'Bike Urbana',
    tag: 'Praticidade para o dia a dia',
    price: 'Consultar valor',
    image: 'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 3,
    name: 'Capacetes',
    tag: 'Proteção para cada pedal',
    price: 'Consultar valor',
    image: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 4,
    name: 'Pneus e componentes',
    tag: 'Upgrade e manutenção',
    price: 'Consultar valor',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85',
  },
];
