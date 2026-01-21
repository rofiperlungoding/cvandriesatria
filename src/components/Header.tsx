import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card shadow-glass' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="glass-card rounded-2xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-neon group-hover:bg-white/5">
              <img 
                src="/Untitled design (12).png" 
                alt="CV Andrie Satria Logo" 
                className="h-12 w-auto transition-all duration-300"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(1) invert(0)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(0) invert(1)';
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-all duration-300 font-medium font-body relative group ${
                isActive('/') 
                  ? 'text-neon-blue' 
                  : 'text-gray-300 hover:text-neon-blue'
              }`}
            >
              Beranda
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-bolt-accent-blue to-neon-blue transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/services"
              className={`transition-all duration-300 font-medium font-body relative group ${
                isActive('/services') 
                  ? 'text-neon-blue' 
                  : 'text-gray-300 hover:text-neon-blue'
              }`}
            >
              Product & Service
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-bolt-accent-blue to-neon-blue transition-all duration-300 ${
                isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/about"
              className={`transition-all duration-300 font-medium font-body relative group ${
                isActive('/about') 
                  ? 'text-neon-blue' 
                  : 'text-gray-300 hover:text-neon-blue'
              }`}
            >
              Tentang Kami
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-bolt-accent-blue to-neon-blue transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/results"
              className={`transition-all duration-300 font-medium font-body relative group ${
                isActive('/results') 
                  ? 'text-neon-blue' 
                  : 'text-gray-300 hover:text-neon-blue'
              }`}
            >
              Klien Kami
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-bolt-accent-blue to-neon-blue transition-all duration-300 ${
                isActive('/results') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/contact"
              className="glass-button text-white px-6 py-2 rounded-xl font-medium font-body hover:scale-105 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Hubungi Kami
                <div className="w-2 h-2 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-neon-blue transition-colors duration-200 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card shadow-glass border-t border-glass-blue-border animate-slide-up">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/"
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors duration-200 font-medium py-2 font-body ${
                  isActive('/') 
                    ? 'text-neon-blue' 
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
              >
                Beranda
              </Link>
              <Link 
                to="/services"
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors duration-200 font-medium py-2 font-body ${
                  isActive('/services') 
                    ? 'text-neon-blue' 
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
              >
                Product & Service
              </Link>
              <Link 
                to="/about"
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors duration-200 font-medium py-2 font-body ${
                  isActive('/about') 
                    ? 'text-neon-blue' 
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
              >
                Tentang Kami
              </Link>
              <Link 
                to="/results"
                onClick={closeMobileMenu}
                className={`block w-full text-left transition-colors duration-200 font-medium py-2 font-body ${
                  isActive('/results') 
                    ? 'text-neon-blue' 
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
              >
                Klien Kami
              </Link>
              <Link 
                to="/contact"
                onClick={closeMobileMenu}
                className="block w-full glass-button text-white px-6 py-3 rounded-xl font-medium text-center mt-4 transition-all duration-300 hover:scale-105 font-body"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;