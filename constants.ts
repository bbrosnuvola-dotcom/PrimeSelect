import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'tech',
    name: 'Elettronica & Tech',
    slug: 'tech',
    description: 'Gadget imperdibili e accessori smart.'
  },
  {
    id: 'home',
    name: 'Casa & Cucina',
    slug: 'home',
    description: 'Tutto il necessario per una casa moderna.'
  },
  {
    id: 'fashion',
    name: 'Moda & Accessori',
    slug: 'fashion',
    description: 'Stile e comfort per ogni occasione.'
  },
  {
    id: 'sports',
    name: 'Sport & Tempo Libero',
    slug: 'sports',
    description: 'Attrezzatura per il tuo benessere.'
  }
];

// ELENCO MANUALE DEI PRODOTTI
// Copia e incolla gli oggetti qui sotto per aggiungere nuovi prodotti.
// Assicurati che l'ID sia univoco per ogni prodotto.

export const ALL_PRODUCTS: Product[] = [
  // --- CATEGORIA TECH ---
  {
    id: 'tech-1',
    categoryId: 'tech',
    title: 'Apple AirPods Pro (2ª generazione) con custodia MagSafe',
    description: 'Cancellazione attiva del rumore fino a 2 volte più efficace, modalità Trasparenza e Audio spaziale personalizzato.',
    price: 239.00,
    originalPrice: 279.00,
    rating: 4.8,
    reviewCount: 15420,
    // Nota: Usa l'URL dell'immagine reale di Amazon (tasto destro sull'immagine > copia indirizzo immagine)
    imageUrl: 'https://images.unsplash.com/photo-1603351154351-5cf99bc5f16d?auto=format&fit=crop&q=80&w=1740', 
    affiliateLink: 'https://www.amazon.it/dp/B0BDHWDR12?tag=TUO_TAG_AFFILIATO', // <-- INSERISCI QUI IL TUO LINK
    isPrime: true,
    isBestSeller: true,
  },
  {
    id: 'tech-2',
    categoryId: 'tech',
    title: 'Kindle Paperwhite (16 GB)',
    description: 'Ora con schermo da 6,8" e tonalità della luce regolabile, batteria che dura fino a 10 settimane.',
    price: 169.99,
    rating: 4.7,
    reviewCount: 8500,
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1974',
    affiliateLink: 'https://www.amazon.it/dp/B09TMSMQGL?tag=TUO_TAG_AFFILIATO',
    isPrime: true,
    isBestSeller: false,
  },

  // --- CATEGORIA CASA ---
  {
    id: 'home-1',
    categoryId: 'home',
    title: 'Klighten Applique da Parete Interno LED',
    description: 'Klighten Applique da Parete Interno LED, 24W, 1960LM, Lampada Decorative Mordern, per Camera da Letto, Soggiorno, Corridoio, 110-240V, Bianco Neutro 4000K, Bianco.',
    price: 54,99,
    rating: 4.5,
    reviewCount: 520,
    imageUrl: 'https://m.media-amazon.com/images/I/51ow0ZYT-AL._AC_SX679_.jpg',
    affiliateLink: 'https://amzn.to/48Fhom2',
    isPrime: true,
    isBestSeller: true,
  },
  {
    id: 'home-2',
    categoryId: 'home',
    title: 'Nespresso Inissia Macchina Caffè',
    description: 'Macchina per caffè espresso, design compatto e leggero, riscaldamento veloce in 25 secondi.',
    price: 54.99,
    rating: 4.5,
    reviewCount: 41000,
    imageUrl: 'https://images.unsplash.com/photo-1517080319525-244365775f54?auto=format&fit=crop&q=80&w=1776',
    affiliateLink: '#',
    isPrime: true,
    isBestSeller: false,
  },

  // --- CATEGORIA FASHION ---
  {
    id: 'fashion-1',
    categoryId: 'fashion',
    title: 'Zaino Eastpak Padded Pak\'r',
    description: 'Lo zaino iconico per il lavoro, il tempo libero e la scuola. Comfort e stile imbattibili.',
    price: 45.00,
    originalPrice: 55.00,
    rating: 4.7,
    reviewCount: 56000,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=987',
    affiliateLink: '#',
    isPrime: true,
    isBestSeller: true,
  },

  // --- CATEGORIA SPORT ---
  {
    id: 'sports-1',
    categoryId: 'sports',
    title: 'Tappetino Yoga Antiscivolo',
    description: 'Tappetino ecologico in TPE, perfetto per Yoga, Pilates e fitness a casa. Include tracolla.',
    price: 24.99,
    rating: 4.4,
    reviewCount: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=1760',
    affiliateLink: '#',
    isPrime: true,
    isBestSeller: false,
  },
];
