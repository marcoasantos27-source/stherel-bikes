export const store = {
  name: 'Stherel Bikes',
  whatsapp: '5579988083405',
  instagram: 'https://www.instagram.com/stherelbikes/',
  address: 'Av. Josino José de Almeida, 628 — Farolândia, Aracaju/SE',
  maps: 'https://www.google.com/maps/search/?api=1&query=Av.+Josino+Jos%C3%A9+de+Almeida+628+Farol%C3%A2ndia+Aracaju+SE',
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;
