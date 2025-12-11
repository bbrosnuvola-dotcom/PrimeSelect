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
    title: 'Apple iPhone 17',
    description: 'Apple iPhone 17 256 GB: display 6,3" con ProMotion, chip A19, fotocamera frontale Center Stage per selfie di gruppo più facili, più resistenza ai graffi, un giorno intero di batteria; Nero',
    price: 979.00,
    rating: 4.6,
    reviewCount: 186,
    // Nota: Usa l'URL dell'immagine reale di Amazon (tasto destro sull'immagine > copia indirizzo immagine)
    imageUrl: 'https://m.media-amazon.com/images/I/61X5FknDWuL._AC_SX522_.jpg', 
    affiliateLink: 'https://amzn.to/3KzVOra', // <-- INSERISCI QUI IL TUO LINK
    isPrime: true,
    isBestSeller: true,
  },
  {
    id: 'tech-2',
    categoryId: 'tech',
    title: 'Samsung Galaxy Book3 360',
    description: 'Samsung Galaxy Book3 360 Laptop, 3 anni di garanzia, 13.3" Super AMOLED, S Pen, Intel Core i5, 8GB RAM, 256GB SSD, Windows 11 Home, Graphite',
    price: 749.00,
    rating: 4.3,
    reviewCount: 20,
    imageUrl: 'https://m.media-amazon.com/images/I/71P2Ef9JTDL._AC_SX679_.jpg',
    affiliateLink: 'https://amzn.to/44RLtgX',
    isPrime: true,
    isBestSeller: false,
  },
  {
    id: 'tech-3',
    categoryId: 'tech',
    title: 'Cover Compatibile con Nothing Phone 3a Pro',
    description: 'Cover Compatibile con Nothing Phone 3a Pro, Protezione Completa,Telaio Rigido in PC + TPU, Anticaduta, Custodia Compatibile con Nothing Phone 3a Pro.(Grigio Trasparente)',
    price: 8.99,
    rating: 3.0,
    reviewCount: 1,
    imageUrl: 'https://m.media-amazon.com/images/I/61WUKedVreL._AC_SL1500_.jpg',
    affiliateLink: 'https://amzn.to/3MDoq3f',
    isPrime: false,
    isBestSeller: false,
  },
  {
    id: 'tech-4',
    categoryId: 'tech',
    title: 'Motorola moto g56 5G 8/256GB',
    description: 'Motorola moto g56 5G 8/256GB, Fotocamera 50MP + sensore antisfarfallio, Display 6.72" FHD+ 120Hz, batteria 5200mAh, MediaTek Dimensity 7060, Android 15, PANTONE Dill',
    price: 147.90,
	  originalPrice: 269.00,
    rating: 4.5,
    reviewCount: 322,
    imageUrl: 'https://m.media-amazon.com/images/I/51lVBJ8WJRL._AC_SX679_.jpg',
    affiliateLink: 'https://amzn.to/4pwSegH',
    isPrime: true,
    isBestSeller: false,
  },

  // --- CATEGORIA CASA ---
  {
    id: 'home-1',
    categoryId: 'home',
    title: 'Klighten Applique da Parete Interno LED',
    description: 'Klighten Applique da Parete Interno LED, 24W, 1960LM, Lampada Decorative Mordern, per Camera da Letto, Soggiorno, Corridoio, 110-240V, Bianco Neutro 4000K, Bianco.',
    price: 54.99,
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
    title: 'Moulinex Easy Fry & Grill XXL',
    description: 'Moulinex Easy Fry & Grill XXL Friggitrice ad Aria, 6,5Litri/2Kg, 2 Pietanze in 1, Cottura ad Aria e Griglia, Capacità fino a 8 Persone,1830W, 8 Programmi, App Ricette, EZ8018',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.6,
    reviewCount: 2815,
    imageUrl: 'https://m.media-amazon.com/images/I/61xBMoQF+UL._AC_SX679_.jpg',
    affiliateLink: 'https://amzn.to/3KQizai',
    isPrime: true,
    isBestSeller: false,
  },
  {
    id: 'home-3',
    categoryId: 'home',
    title: 'Filtri, Sostituzione per Brita Maxtra+ Plus',
    description: 'Filtri, Sostituzione per Brita Maxtra+ Plus, Maxtra Pro All-in-1 Filtro, Filtro per Bollitore Compatibile Con Brita Mavea Filtri per acqua, Riducono Cloro,Odori (12, Classic)',
    price: 29.99,
    rating: 4.2,
    reviewCount: 1586,
    imageUrl: 'https://m.media-amazon.com/images/I/714g6zAtSuL._AC_SX679_.jpg',
    affiliateLink: 'https://amzn.to/494JzMx',
    isPrime: true,
    isBestSeller: false,
  },

  // --- CATEGORIA FASHION ---
  {
    id: 'fashion-1',
    categoryId: 'fashion',
    title: 'Coppola in Tweed Irlandese',
    description: 'Borges & Scott Lo Sloan - Coppola in Tweed Irlandese e Pelle Nubuck',
    price: 74.95, 
    originalPrice: 79.95,
    rating: 4.3,
    reviewCount: 103,
    imageUrl: 'https://m.media-amazon.com/images/I/81OrR6D76zL._AC_SX679_.jpg',
    affiliateLink: 'https://amzn.to/3KQyjtQ',
    isPrime: true,
    isBestSeller: false,
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
