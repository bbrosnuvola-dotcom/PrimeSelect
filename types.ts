export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  affiliateLink: string;
  categoryId: string;
  isPrime: boolean;
  isBestSeller: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string; // Used for anchor tags
  description: string;
}