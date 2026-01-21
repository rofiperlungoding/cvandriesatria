import React from 'react';
import { Handshake, Award } from 'lucide-react';
import Contact from '../components/Contact';

const ResultsPage = () => {
  const clients = [
    {
      name: 'All Sedayu Hotels & Resorts',
      logo: '/1.png',
      category: 'Perhotelan'
    },
    {
      name: 'Direktorat Jenderal Perbendaharaan',
      logo: '/2.png',
      category: 'Pemerintahan'
    },
    {
      name: 'Mercure Hotels Serpong Alam Sutera',
      logo: '/3.png',
      category: 'Perhotelan'
    },
    {
      name: 'Zinus',
      logo: '/4.png',
      category: 'Retail'
    },
    {
      name: 'Metro TV',
      logo: '/5.png',
      category: 'Media & Penyiaran'
    },
    {
      name: 'Anwa Residence',
      logo: '/6.png',
      category: 'Properti'
    },
    {
      name: 'The 101 Jakarta',
      logo: '/7.png',
      category: 'Perhotelan'
    },
    {
      name: 'Bank Mandiri',
      logo: '/8.png',
      category: 'Perbankan & Keuangan'
    },
    {
      name: 'Suvarna Jakarta Golf Club',
      logo: '/9.png',
      category: 'Rekreasi & Olahraga'
    },
    {
      name: 'BPDPKS',
      logo: '/10.png',
      category: 'Badan Pemerintah'
    }
  ];

  const stats = [
    {
      icon: Handshake,
      value: 'Dipercaya oleh',
      label: '10 Klien Utama',
      color: 'text-electric-blue'
    },
    {
      icon: Award,
      value: '12+',
      label: 'Tahun Pengalaman',
      color: 'text-bolt-accent-blue'
    }
  ];

  return (
    <div className="bg-dark-primary">
      <section className="py-24 bg-dark-secondary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-bolt-accent-blue/5 to-electric-blue/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-r from-neon-blue/5 to-bolt-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-display">
              <span className="block text-gradient shimmer">Klien Kami</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body font-light">
              Dipercaya oleh perusahaan terkemuka di 
              <span className="text-neon-blue font-medium"> berbagai industri</span> untuk solusi merchandise premium.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-bolt-accent-blue/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                      <stat.icon className={`${stat.color} group-hover:scale-110 transition-transform duration-300`} size={32} />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-3 font-display group-hover:text-gradient transition-all duration-300">{stat.value}</div>
                  <div className="text-gray-300 font-medium font-body group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12 font-display">
              Perusahaan Yang <span className="text-gradient">Mempercayai Kami</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-fade-in shadow-soft border border-gray-100"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-bolt-accent-blue/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="rounded-xl min-h-[160px] flex items-center justify-center w-full group-hover:scale-110 transition-transform duration-300 p-4">
                        <img 
                          src={client.logo}
                          alt={client.name}
                          className="max-h-28 w-auto mx-auto object-contain transition-all duration-300"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 font-display group-hover:text-gradient transition-all duration-300">
                      {client.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-body">
                      {client.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </div>
  );
};

export default ResultsPage;