import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <ShoppingBag size={20} />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              PrimeSelect
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {CATEGORIES.map((cat) => (
              <a 
                key={cat.id}
                href={`#${cat.slug}`} 
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {CATEGORIES.map((cat) => (
              <a 
                key={cat.id}
                href={`#${cat.slug}`}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;