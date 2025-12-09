import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { CATEGORIES, ALL_PRODUCTS } from './constants';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Categories Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
          {CATEGORIES.map((category) => {
            const categoryProducts = ALL_PRODUCTS.filter(p => p.categoryId === category.id);
            
            return (
              <section key={category.id} id={category.slug} className="scroll-mt-24">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      {category.name}
                    </h2>
                    <p className="text-slate-500 text-lg">
                      {category.description}
                    </p>
                  </div>
                  <a 
                    href={`#${category.slug}`} 
                    className="flex items-center gap-1 text-indigo-600 font-medium hover:text-indigo-800 transition-colors self-start md:self-auto"
                  >
                    Vedi tutti <ArrowRight size={16} />
                  </a>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        
        {/* Newsletter / Bottom CTA */}
        <div className="bg-indigo-50 mt-20 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Non perdere le prossime offerte!</h2>
            <p className="text-slate-600 mb-8">
              Iscriviti per ricevere aggiornamenti sulle migliori selezioni Amazon direttamente nella tua casella di posta.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Iscriviti
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;