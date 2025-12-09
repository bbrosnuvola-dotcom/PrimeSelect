import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="disclaimer" className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-slate-700 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <ShoppingCart size={24} />
              <span className="font-bold text-xl">PrimeSelect</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              La tua guida fidata per trovare i migliori prodotti su Amazon. 
              Recensioni, confronti e le migliori offerte aggiornate.
            </p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Disclaimer Affiliazione</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              <strong>PrimeSelect partecipa al Programma Affiliazione Amazon EU</strong>, 
              un programma di affiliazione che consente ai siti di percepire una commissione pubblicitaria 
              pubblicizzando e fornendo link al sito Amazon.it.
              <br/><br/>
              I prezzi e la disponibilità dei prodotti sono accurati alla data/ora indicata e sono 
              soggetti a modifiche. Qualsiasi informazione su prezzo e disponibilità visualizzata 
              su Amazon al momento dell'acquisto si applicherà all'acquisto di questo prodotto.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} PrimeSelect. Tutti i diritti riservati.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;