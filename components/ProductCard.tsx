import React from 'react';
import { Star, Check, ExternalLink, Award } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden h-full relative">
      {/* Badge Overlay */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.isBestSeller && (
          <span className="bg-orange-400 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
            <Award size={12} /> BEST SELLER
          </span>
        )}
        {discountPercentage > 0 && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
            -{discountPercentage}%
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-50 p-4">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="object-contain w-full h-full mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-slate-800 text-sm md:text-base leading-tight mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.round(product.rating) ? "currentColor" : "none"} 
                className={i < Math.round(product.rating) ? "text-yellow-400" : "text-slate-300"}
              />
            ))}
          </div>
          <span className="text-xs text-slate-400">({product.reviewCount})</span>
        </div>

        {/* Price Area */}
        <div className="mt-auto pt-2">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg md:text-xl font-bold text-slate-900">
              €{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                €{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {product.isPrime && (
             <div className="flex items-center gap-1 text-xs text-cyan-600 font-medium mb-3">
               <Check size={12} strokeWidth={3} />
               <span>Prime</span>
             </div>
          )}

          {/* CTA Button */}
          <a 
            href={product.affiliateLink} 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-sm font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            Vedi su Amazon <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;