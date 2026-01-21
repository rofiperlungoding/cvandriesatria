import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-secondary text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/3 w-64 h-64 bg-gradient-to-r from-bolt-accent-blue/5 to-neon-blue/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-gradient-to-r from-electric-blue/5 to-bolt-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 animate-fade-in">
            <Link to="/" className="inline-block mb-6 group">
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
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md font-body">
              Memberdayakan bisnis dengan solusi merchandise premium yang membangun identitas merek, meningkatkan loyalitas pelanggan, dan mendorong penjualan melalui 
              <span className="text-neon-blue"> strategi produk yang inovatif</span>.
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-6 text-white font-display text-lg">Layanan & Produk</h4>
            <ul className="space-y-3 text-gray-400 font-body">
              <li>
                <Link to="/services" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Pengembangan Produk
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Merchandise Branding
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Solusi Kustom
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Jaminan Kualitas
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Pesanan Jumlah Besar
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-6 text-white font-display text-lg">Tautan Cepat</h4>
            <ul className="space-y-3 text-gray-400 font-body">
              <li>
                <Link to="/" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Layanan & Produk
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Klien Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-blue-border pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-body">
              © {currentYear} CV Andrie Satria Putra Utama. Semua hak dilindungi. Dibuat dengan dedikasi untuk keunggulan produk.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm font-body">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm font-body">Syarat Layanan</a>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="glass-card w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group hover:shadow-neon"
              >
                <ArrowUp className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;