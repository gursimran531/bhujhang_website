import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sword } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/branches', label: 'Branches' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-lg border border-white border-opacity-10 relative overflow-hidden">
        {/* Saffron blur effects */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-l from-orange-500/8 to-yellow-500/8 rounded-full blur-lg"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Bhujhang Jatha Logo" 
             className="w-25 h-auto rounded-full object-contain shadow-lg"
             style={{ imageRendering: 'crisp-edges' }}
            />
            <div>
             <h1 className="text-2xl font-bold text-white">Bhujhang Jatha</h1>
              <p className="text-sm text-yellow-400">Gatka Warriors</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 font-medium ${
                  isActive(item.path)
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white border-opacity-20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-4 transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-yellow-400 bg-white bg-opacity-10'
                    : 'text-white hover:text-yellow-400 hover:bg-white hover:bg-opacity-5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;