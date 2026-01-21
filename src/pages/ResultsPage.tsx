import { Handshake, Award } from 'lucide-react';
import Contact from '../components/Contact';

const ResultsPage = () => {
  const clients = [
    { name: 'All Sedayu Hotels & Resorts', logo: '/1.png', category: 'Perhotelan' },
    { name: 'Direktorat Jenderal Perbendaharaan', logo: '/2.png', category: 'Pemerintahan' },
    { name: 'Mercure Hotels', logo: '/3.png', category: 'Perhotelan' },
    { name: 'Zinus', logo: '/4.png', category: 'Retail' },
    { name: 'Metro TV', logo: '/5.png', category: 'Media & Penyiaran' },
    { name: 'Anwa Residence', logo: '/6.png', category: 'Properti' },
    { name: 'The 101 Jakarta', logo: '/7.png', category: 'Perhotelan' },
    { name: 'Bank Mandiri', logo: '/8.png', category: 'Perbankan & Keuangan' },
    { name: 'Suvarna Jakarta Golf Club', logo: '/9.png', category: 'Rekreasi & Olahraga' },
    { name: 'BPDPKS', logo: '/10.png', category: 'Badan Pemerintah' }
  ];

  const stats = [
    {
      icon: Handshake,
      value: '10+',
      label: 'Klien Enterprise',
      description: 'Mitra jangka panjang'
    },
    {
      icon: Award,
      value: '12+',
      label: 'Tahun Pengalaman',
      description: 'Dedikasi kualitas sejak 2013'
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-24 font-sans text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Dipercaya Oleh <span className="text-blue-400">Industri Terkemuka</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            Kami bangga menjadi mitra strategis bagi berbagai perusahaan dalam memperkuat identitas brand mereka melalui merchandise berkualitas.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 font-medium tracking-wide">{stat.label}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <stat.icon size={24} strokeWidth={1.5} className="text-white group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Clients Grid */}
        <h2 className="text-2xl font-semibold text-center mb-12">Daftar Klien Kami</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-32">
          {clients.map((client, index) => (
            <div key={index} className="w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] p-2 rounded-3xl border-2 border-white/10 bg-white/[0.03] hover:border-blue-500 transition-all duration-300 group flex flex-col items-center justify-between min-h-[200px] text-center shadow-lg shadow-black/20">
              <div className="flex items-center justify-center w-full bg-white rounded-2xl transition-colors h-[180px] p-6">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-24 w-auto object-contain opacity-100 transition-all duration-500"
                />
              </div>
              <div className="py-4">
                <h3 className="text-sm font-medium text-white mb-1">{client.name}</h3>
                <p className="text-xs text-gray-500">{client.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact showBadge={false} />
    </div>
  );
};

export default ResultsPage;