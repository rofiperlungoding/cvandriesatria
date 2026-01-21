import React from 'react';
import { Mail, Phone, MapPin, Star } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-dark-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-bolt-accent-blue/10 to-neon-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-electric-blue/10 to-bolt-accent-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 font-display">
            Siap Untuk Transformasi
            <span className="block text-gradient shimmer">Bisnis Anda?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body font-light px-2">
            Mari diskusikan bagaimana kami dapat mempercepat pertumbuhan Anda dengan 
            <span className="text-neon-blue font-medium"> solusi marketing strategis</span> yang disesuaikan dengan tujuan Anda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-display">Hubungi Kami</h3>
              <p className="text-gray-300 leading-relaxed font-body max-w-2xl mx-auto px-4">
                Siap untuk membawa marketing Anda ke level selanjutnya? Hubungi kami untuk mendiskusikan tujuan bisnis Anda dan bagaimana kami dapat mencapainya bersama.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="glass-card rounded-xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 group text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-neon transition-shadow duration-300">
                  <Mail className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold font-display text-base sm:text-lg mb-2">Email</div>
                  <a 
                    href="mailto:andriesatriaputrautamacv@gmail.com"
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-body underline decoration-neon-blue/30 hover:decoration-neon-blue/70 underline-offset-2 text-sm sm:text-base break-words leading-relaxed"
                  >
                    andriesatriaputrautamacv@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 group text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-neon transition-shadow duration-300">
                  <Phone className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold font-display text-base sm:text-lg mb-2">Telepon</div>
                  <a 
                    href="tel:+62811180200"
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-body underline decoration-neon-blue/30 hover:decoration-neon-blue/70 underline-offset-2 text-sm sm:text-base"
                  >
                    +62 811-180-200
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 group text-center lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-neon transition-shadow duration-300">
                  <MapPin className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold font-display text-base sm:text-lg mb-2">Lokasi</div>
                  <a 
                    href="https://maps.app.goo.gl/rToWMvnvr4iRNyUJA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-body underline decoration-neon-blue/30 hover:decoration-neon-blue/70 underline-offset-2 text-sm sm:text-base leading-relaxed"
                  >
                    Jl Smp Mabad no. 198 RT.005 RW. 005 Cempaka Putih, Ciputat Timur
                  </a>
                </div>
              </div>
            </div>

            {/* Special Offer Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300 max-w-2xl mx-auto mt-8 sm:mt-12">
              <div className="absolute inset-0 bg-gradient-to-r from-bolt-accent-blue/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 glass-card rounded-full flex items-center justify-center group-hover:shadow-neon transition-shadow duration-300 flex-shrink-0">
                  <Star className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={28} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 sm:mb-3 font-display text-lg sm:text-xl group-hover:text-gradient transition-all duration-300">Sesi Strategi Gratis</h4>
                  <p className="text-gray-300 font-body leading-relaxed text-sm sm:text-base">
                    Pesan konsultasi gratis 30 menit untuk mendiskusikan tantangan dan peluang marketing Anda. Hubungi kami via telepon atau email untuk menjadwalkan sesi Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;