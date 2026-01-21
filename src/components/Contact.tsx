import { Mail, Phone, MapPin, Handshake } from 'lucide-react';

const Contact = ({ showBadge = true }: { showBadge?: boolean }) => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          {showBadge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-200/80 text-xs font-medium tracking-wide uppercase">
                Hubungi Kami
              </span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Transformasi <span className="text-blue-400">Bisnis Anda?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Mari diskusikan bagaimana solusi merchandise kami dapat mempercepat pertumbuhan brand Anda.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Email */}
            <a
              href="mailto:andriesatriaputrautamacv@gmail.com"
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-blue-500/[0.05] hover:border-blue-500/40 transition-all duration-300 group text-center flex flex-col items-center cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 relative z-10">
                <Mail className="text-blue-400 group-hover:text-blue-300 transition-colors" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors relative z-10">Email</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm break-all relative z-10">
                andriestsatriaputrautamacv@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+62811180200"
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-blue-500/[0.05] hover:border-blue-500/40 transition-all duration-300 group text-center flex flex-col items-center cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 relative z-10">
                <Phone className="text-blue-400 group-hover:text-blue-300 transition-colors" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors relative z-10">Telepon</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm relative z-10">
                +62 811-180-200
              </p>
            </a>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/rToWMvnvr4iRNyUJA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-blue-500/[0.05] hover:border-blue-500/40 transition-all duration-300 group text-center flex flex-col items-center cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 relative z-10">
                <MapPin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors relative z-10">Lokasi</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed relative z-10">
                Cempaka Putih, Ciputat Timur
              </p>
            </a>
          </div>

          {/* Special Offer Card */}
          <a
            href="mailto:andriesatriaputrautamacv@gmail.com?subject=Consultation%20Request"
            className="mt-12 p-8 rounded-3xl border border-blue-500/20 bg-blue-900/10 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-300 group max-w-3xl mx-auto text-center sm:text-left flex flex-col sm:flex-row items-center gap-8 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-transform duration-300 relative z-10">
              <Handshake className="text-blue-300 group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <h4 className="text-white font-bold text-xl mb-2 group-hover:text-blue-200 transition-colors">Sesi Konsultasi Gratis</h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                Dapatkan analisis kebutuhan merchandise perusahaan Anda secara cuma-cuma. Hubungi kami untuk menjadwalkan sesi 30 menit dengan ahli branding kami.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;