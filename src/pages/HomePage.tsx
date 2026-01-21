import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Package, Award, Calendar, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Calendar, value: '12+', label: 'Tahun Pengalaman', delay: '0.2s' },
    { icon: Users, value: '150+', label: 'Klien Puas', delay: '0.4s' },
    { icon: Building2, value: '10+', label: 'Mitra Korporat', delay: '0.6s' },
    { icon: Award, value: '100%', label: 'Jaminan Kualitas', delay: '0.8s' },
  ];

  const featuredServices = [
    {
      title: 'Merchandise Korporat',
      description: 'Barang promosi premium untuk visibilitas merek',
      icon: Package
    },
    {
      title: 'Apparel Kustom',
      description: 'Kaos, polo shirt, dan seragam profesional',
      icon: Star
    },
    {
      title: 'Digital & Offset Printing',
      description: 'Percetakan berkualitas tinggi untuk semua kebutuhan bisnis',
      icon: TrendingUp
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-animated-gradient floating-elements pt-20 sm:pt-24">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
          }}
        />
        <div 
          className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-2xl animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.01}%`,
            bottom: `${20 + mousePosition.y * 0.01}%`,
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center w-full">
          
          {/* Main Content */}
          <div className={`space-y-6 sm:space-y-8 md:space-y-12 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
            
            {/* Company Badge */}
            <div className="flex justify-center px-4 mt-4 sm:mt-8 mb-6 sm:mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 sm:gap-3 glass-card rounded-full px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-center max-w-full">
                <Award className="text-neon-blue flex-shrink-0" size={16} />
                <span className="text-gray-300 font-medium font-body text-xs sm:text-sm md:text-base leading-tight">
                  Berdiri 2013 • Terpercaya 12+ Tahun
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white font-display">
                CV Andrie Satria
                <span className="block text-gradient shimmer">Keunggulan Promosi</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body font-light">
                Mitra terpercaya untuk <span className="text-neon-blue font-medium">merchandise promosi premium</span>, 
                percetakan kustom, dan produk bermerek. Melayani 150+ klien dengan 
                <span className="text-electric-blue font-medium"> kualitas dan profesionalisme</span> sejak 2013.
              </p>
            </div>

            {/* Company Values */}
            <div className="max-w-3xl mx-auto py-2 sm:py-4 md:py-6 px-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-400 font-body italic">
                "Bekerja dengan jujur, cerdas dan profesional"
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-body mt-1 sm:mt-2">Motto panduan kami</p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col gap-3 sm:gap-4 md:gap-6 justify-center items-center pt-2 sm:pt-4 px-4 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-bolt-accent-blue to-electric-blue text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-2xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon overflow-hidden w-full max-w-xs sm:max-w-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  Konsultasi Gratis
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <Link 
                to="/services"
                className="glass-button text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-2xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 group flex items-center justify-center gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm"
              >
                <span className="flex items-center gap-2 sm:gap-3">
                  Lihat Produk Kami
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Featured Services Preview */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-6xl mx-auto px-4 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              {featuredServices.map((service, index) => (
                <div key={index} className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 glass-card rounded-xl flex items-center justify-center group-hover:shadow-neon transition-shadow duration-300">
                      <service.icon className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={20} />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-display group-hover:text-gradient transition-all duration-300">{service.title}</h3>
                  <p className="text-gray-400 font-body leading-relaxed text-xs sm:text-sm md:text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-16 sm:mt-20 md:mt-24 px-4 max-w-6xl mx-auto ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`glass-card rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: stat.delay }}
              >
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-bolt-accent-blue/20 to-electric-blue/20 rounded-xl flex items-center justify-center group-hover:from-bolt-accent-blue/30 group-hover:to-electric-blue/30 transition-all duration-300">
                    <stat.icon className="text-neon-blue group-hover:scale-110 transition-transform duration-300" size={16} />
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2 md:mb-3 font-display">{stat.value}</div>
                <div className="text-gray-400 font-body text-xs sm:text-sm md:text-base leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trusted By Section */}
          <div className={`mt-16 sm:mt-20 md:mt-24 lg:mt-32 pb-12 sm:pb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            <p className="text-gray-400 font-body mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base md:text-lg px-4">Dipercaya oleh perusahaan terkemuka</p>
            <div className="flex justify-start sm:justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 opacity-70 overflow-x-auto whitespace-nowrap scrollbar-hide px-4 pb-2">
              <div className="text-gray-400 font-semibold font-body text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-300 flex-shrink-0">Bank Mandiri</div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
              <div className="text-gray-400 font-semibold font-body text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-300 flex-shrink-0">Metro TV</div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
              <div className="text-gray-400 font-semibold font-body text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-300 flex-shrink-0">All Sedayu Hotels</div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
              <div className="text-gray-400 font-semibold font-body text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-300 flex-shrink-0">Mercure Hotels</div>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full flex-shrink-0"></div>
              <div className="text-gray-400 font-semibold font-body text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300 transition-colors duration-300 flex-shrink-0">The 101 Jakarta</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-dark-primary to-transparent" />
    </section>
  );
};

export default HomePage;