import React from 'react';
import { Award, CheckCircle, Users } from 'lucide-react';
import Contact from '../components/Contact';

const AboutPage = () => {
  const achievements = [
    {
      icon: Award,
      title: '12+ Tahun Pengalaman',
      description: 'Pengalaman teruji sejak 2013'
    },
    {
      icon: CheckCircle,
      title: 'Kualitas Terjamin',
      description: 'Produk berkualitas tinggi dengan jaminan mutu'
    },
    {
      icon: Users,
      title: '150+ Klien Terlayani',
      description: 'Melayani berbagai skala bisnis'
    },
    {
      icon: Award,
      title: 'Komitmen & Profesional',
      description: 'Bekerja dengan jujur, cerdas, dan profesional'
    }
  ];

  return (
    <div className="bg-dark-primary">
      <section className="py-16 sm:py-24 bg-dark-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 sm:right-20 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-neon-blue/5 to-electric-blue/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-bolt-accent-blue/5 to-neon-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            
            {/* Left Column - Main Content */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 font-display">
                  Mengenal
                  <span className="block text-gradient shimmer">CV Andrie Satria</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 font-body font-light">
                  Berdiri sejak 2013, CV Andrie Satria telah setia menemani perjalanan para pelanggan melalui pemenuhan dan penyediaan barang promosi yang kreatif dan menarik.
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6 font-body">
                  Menyediakan barang-barang dengan kualitas tinggi dengan jaminan kualitas, CV Andrie Satria selalu memberikan yang terbaik dan berkomitmen untuk menjaga kepercayaan klien dengan kredibilitas yang tinggi.
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-body">
                  Dengan motto "Bekerja dengan jujur, cerdas dan profesional" CV Andrie Satria siap menjadi partner dalam segala kebutuhan percetakan dan barang promosi di bisnis anda.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="glass-card rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-neon transition-shadow duration-300">
                        <achievement.icon className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1 sm:mb-2 font-display group-hover:text-gradient transition-all duration-300 text-sm sm:text-base">{achievement.title}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm font-body">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Vision & Mission */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">Visi & Misi</h3>
              
              <div className="glass-card rounded-xl p-6 sm:p-8 space-y-6 sm:space-y-8">
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-neon-blue mb-3 sm:mb-4 font-display">Visi:</h4>
                  <p className="text-gray-300 leading-relaxed font-body text-base sm:text-lg">
                    Menjadi perusahaan jasa, baik digital printing, offset printing, promotion item dan merchandising dengan mengedepankan mutu dan kualitas.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-neon-blue mb-3 sm:mb-4 font-display">Misi:</h4>
                  <ul className="space-y-3 sm:space-y-4 text-gray-300 font-body">
                    <li className="flex items-start gap-3 sm:gap-4">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-bolt-accent-blue to-neon-blue rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base sm:text-lg leading-relaxed">Mengutamakan kualitas produk yang dibutuhkan oleh konsumen.</span>
                    </li>
                    <li className="flex items-start gap-3 sm:gap-4">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-bolt-accent-blue to-neon-blue rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base sm:text-lg leading-relaxed">Memberikan service yang memuaskan bagi konsumen.</span>
                    </li>
                    <li className="flex items-start gap-3 sm:gap-4">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-bolt-accent-blue to-neon-blue rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base sm:text-lg leading-relaxed">Menjunjung profesionalitas dalam bekerja.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Company Values Card */}
              <div className="glass-card rounded-xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 font-display group-hover:text-gradient transition-all duration-300">Motto Kami</h4>
                  <blockquote className="text-xl sm:text-2xl font-bold text-gradient italic font-display mb-3 sm:mb-4">
                    "Bekerja dengan jujur, cerdas dan profesional"
                  </blockquote>
                  <p className="text-gray-400 font-body text-sm sm:text-base">
                    Prinsip panduan yang mendorong segala yang kami lakukan di CV Andrie Satria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </div>
  );
};

export default AboutPage;