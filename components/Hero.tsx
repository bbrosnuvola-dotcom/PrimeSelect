import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-indigo-900 text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-400 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pink-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          I Migliori Prodotti.<br/>
          <span className="text-indigo-300">Selezionati per te.</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-indigo-100 mb-10">
          Esplora la nostra collezione curata di tecnologia, moda e accessori per la casa. 
          Trova le offerte migliori e le gemme nascoste, tutto in un unico posto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#tech" 
            className="px-8 py-3 rounded-full bg-white text-indigo-900 font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Esplora le Categorie
          </a>
          <a 
            href="#disclaimer" 
            className="px-8 py-3 rounded-full border border-indigo-400 text-white font-medium hover:bg-indigo-800 transition-colors"
          >
            Come funziona
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;