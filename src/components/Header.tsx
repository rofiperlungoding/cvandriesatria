import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { GlowButton } from './ui/GlowButton';

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

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/services', label: 'Layanan' },
    { path: '/about', label: 'Tentang' },
    { path: '/results', label: 'Portfolio' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between relative">
          <Link to="/" className="flex items-center group relative z-50">
            {/* Logo Container - Kept exactly as user requested */}
            <div className="p-2 transition-transform duration-300">
              <img
                src="/Untitled design (12).png"
                alt="CV Andrie Satria Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
            <div className="flex items-center bg-surface/50 rounded-full p-1.5 border border-white/5 backdrop-blur-sm shadow-2xl shadow-black/20">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300",
                      isActive ? "text-white" : "text-secondary hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/5"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA & Mobile Toggle - Right */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:block relative z-50">
              <GlowButton>Hubungi Kami</GlowButton>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 relative z-50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-4 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={cn(
                    "p-4 rounded-xl text-center transition-colors font-medium",
                    location.pathname === link.path
                      ? "bg-white/10 text-white"
                      : "text-secondary hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={closeMobileMenu} className="mt-4">
                <GlowButton className="w-full justify-center">Hubungi Kami</GlowButton>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;