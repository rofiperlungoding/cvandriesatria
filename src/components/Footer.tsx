import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 text-white py-16 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src="/Untitled design (12).png"
                alt="CV Andrie Satria Logo"
                className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-md text-sm">
              Memberdayakan bisnis dengan solusi merchandise premium yang membangun identitas merek, meningkatkan loyalitas pelanggan, dan mendorong penjualan melalui
              <span className="text-blue-400"> strategi inovatif</span>.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-base tracking-wide">Layanan & Produk</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              {[
                { name: 'Pengembangan Produk', slug: 'pengembangan-produk' },
                { name: 'Merchandise Branding', slug: 'merchandise-branding' },
                { name: 'Solusi Kustom', slug: 'solusi-kustom' },
                { name: 'Jaminan Kualitas', slug: 'jaminan-kualitas' },
                { name: 'Pesanan Jumlah Besar', slug: 'pesanan-jumlah-besar' }
              ].map((item) => (
                <li key={item.slug}>
                  <Link to={`/service/${item.slug}`} className="hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group hover:translate-x-1">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-base tracking-wide">Tautan Cepat</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Layanan & Produk', path: '/services' },
                { name: 'Tentang Kami', path: '/about' },
                { name: 'Klien Kami', path: '/results' },
                { name: 'Kontak', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group hover:translate-x-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs">
              © {currentYear} CV Andrie Satria Putra Utama. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-blue-400 transition-colors duration-300 text-xs">Kebijakan Privasi</Link>
              <Link to="/terms" className="text-gray-600 hover:text-blue-400 transition-colors duration-300 text-xs">Syarat Layanan</Link>

              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <ArrowUp className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300" size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;