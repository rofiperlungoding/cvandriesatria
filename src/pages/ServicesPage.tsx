import React, { useState } from 'react';
import { Package, Coffee, Usb, Clock, BookOpen, Shirt, Briefcase, ShoppingBag, PenTool, Gift, Users, Award, Volume2, Battery, Zap, Umbrella, ShoppingCart, Pin, Key, Archive, Circle } from 'lucide-react';
import Contact from '../components/Contact';
import ServiceProductToggle from '../components/ServiceProductToggle';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState<'services' | 'products'>('services');

  const services = [
    {
      icon: Package,
      title: 'General Merchandise',
      description: 'Solusi merchandise komprehensif untuk semua kebutuhan promosi dan branding Anda dengan jaminan kualitas.',
      features: ['Branding Kustom', 'Material Berkualitas', 'Pesanan Besar', 'Pengiriman Cepat']
    },
    {
      icon: Coffee,
      title: 'Tumbler & Drinkware',
      description: 'Tumbler dan drinkware berkualitas tinggi sempurna untuk hadiah korporat dan kampanye promosi.',
      features: ['Tumbler Stainless Steel', 'Cetak Logo Kustom', 'Berbagai Ukuran', 'Desain Anti Bocor']
    },
    {
      icon: Usb,
      title: 'Flashdisk & Item Teknologi',
      description: 'USB drive kustom dan aksesoris teknologi dengan branding Anda untuk kebutuhan promosi modern.',
      features: ['Berbagai Kapasitas Penyimpanan', 'Casing Kustom', 'Ukiran Logo', 'Preload Data']
    },
    {
      icon: Clock,
      title: 'Jam Dinding',
      description: 'Jam dinding dan timepiece kustom sempurna untuk ruang kantor dan hadiah promosi.',
      features: ['Jam Dinding', 'Jam Meja', 'Desain Kustom', 'Gerakan Senyap']
    },
    {
      icon: BookOpen,
      title: 'Buku Agenda & ATK',
      description: 'Planner profesional, notebook, dan item ATK dengan branding kustom dan tata letak sesuai kebutuhan.',
      features: ['Planner Kustom', 'Notebook', 'Cover Bermerek', 'Kertas Berkualitas']
    },
    {
      icon: Shirt,
      title: 'T-Shirt & Apparel',
      description: 'T-shirt dan casual wear kualitas premium dengan opsi cetak kustom dan bordir.',
      features: ['T-Shirt Katun', 'Cetak Kustom', 'Berbagai Warna', 'Pilihan Ukuran']
    },
    {
      icon: Users,
      title: 'Polo Shirt',
      description: 'Polo shirt profesional sempurna untuk seragam korporat dan workwear bermerek.',
      features: ['Polo Shirt Korporat', 'Opsi Bordir', 'Desain Kerah', 'Set Seragam']
    },
    {
      icon: Package,
      title: 'Jacket & Outerwear',
      description: 'Jacket kustom dan outerwear untuk acara korporat, tim, dan kampanye promosi.',
      features: ['Jacket Korporat', 'Tahan Cuaca', 'Bordir Kustom', 'Seragam Tim']
    },
    {
      icon: Briefcase,
      title: 'Tempat Kartu Nama',
      description: 'Tempat kartu nama elegan dan aksesoris meja untuk lingkungan kerja profesional.',
      features: ['Tempat Kartu Nama', 'Aksesoris Meja', 'Material Premium', 'Ukiran Kustom']
    },
    {
      icon: ShoppingBag,
      title: 'Tas & Handbag',
      description: 'Tas kustom dan handbag untuk acara promosi, hadiah korporat, dan tujuan branding.',
      features: ['Tas Belanja', 'Tas Laptop', 'Tas Promosi', 'Cetak Kustom']
    },
    {
      icon: PenTool,
      title: 'Pulpen & Alat Tulis',
      description: 'Pulpen profesional dan alat tulis dengan branding kustom untuk hadiah korporat.',
      features: ['Pulpen Ballpoint', 'Pulpen Eksekutif', 'Ukiran Kustom', 'Set Hadiah']
    },
    {
      icon: Gift,
      title: 'Gift Set & Paket',
      description: 'Gift set yang dikurasi dan paket korporat yang menggabungkan berbagai item untuk acara khusus.',
      features: ['Set Hadiah Korporat', 'Kemasan Kustom', 'Koleksi Bertema', 'Box Presentasi']
    }
  ];

  const products = [
    {
      icon: Coffee,
      title: 'Tumbler',
      description: 'Tumbler stainless steel kualitas premium sempurna untuk hadiah korporat dan kampanye promosi.',
      features: ['Desain Anti Bocor', 'Cetak Logo Kustom', 'Teknologi Insulasi', 'Berbagai Ukuran'],
      image: '/1 copy.png'
    },
    {
      icon: ShoppingBag,
      title: 'Handbag',
      description: 'Handbag dan pouch profesional ideal untuk acara korporat dan giveaway promosi.',
      features: ['Material Tahan Lama', 'Banyak Kompartemen', 'Branding Kustom', 'Tahan Air'],
      image: '/2 copy.png'
    },
    {
      icon: Shirt,
      title: 'T-Shirt',
      description: 'T-shirt katun berkualitas tinggi dengan opsi cetak kustom untuk seragam dan pakaian promosi.',
      features: ['100% Katun', 'Cetak Kustom', 'Berbagai Warna', 'Ukuran S-XXL'],
      image: '/3 copy.png'
    },
    {
      icon: Users,
      title: 'Polo Shirt',
      description: 'Polo shirt profesional sempurna untuk seragam korporat dan workwear bermerek.',
      features: ['Kain Premium', 'Siap Bordir', 'Desain Kerah', 'Gaya Korporat'],
      image: '/4 copy.png'
    },
    {
      icon: Volume2,
      title: 'Speaker Kustom',
      description: 'Speaker Bluetooth dengan branding kustom sempurna untuk hadiah korporat dan promosi teknologi.',
      features: ['Konektivitas Bluetooth', 'Logo Kustom', 'Desain Portabel', 'Suara Berkualitas Tinggi'],
      image: '/5 copy.png'
    },
    {
      icon: Battery,
      title: 'Power Bank',
      description: 'Power bank portabel dengan branding kustom ideal untuk hadiah korporat modern dan aksesoris teknologi.',
      features: ['Baterai Kapasitas Tinggi', 'Pengisian Cepat', 'Cetak Logo Kustom', 'Port USB Banyak'],
      image: '/6 copy.png'
    },
    {
      icon: Coffee,
      title: 'Mug',
      description: 'Mug keramik premium sempurna untuk penggunaan kantor dan kampanye promosi dengan cetak kustom.',
      features: ['Material Keramik', 'Aman Dishwasher', 'Cetak Kustom', 'Berbagai Ukuran'],
      image: '/7 copy.png'
    },
    {
      icon: Gift,
      title: 'Metal Giftset',
      description: 'Set hadiah metal elegan yang menggabungkan notebook dan pulpen dalam kemasan premium untuk hadiah eksekutif.',
      features: ['Finishing Metal Premium', 'Kemasan Eksekutif', 'Set Notebook & Pulpen', 'Ukiran Kustom'],
      image: '/Untitled design (13).png'
    },
    {
      icon: ShoppingCart,
      title: 'Tote Bag',
      description: 'Tote bag kanvas ramah lingkungan sempurna untuk acara promosi dan kampanye branding berkelanjutan.',
      features: ['Material Kanvas', 'Ramah Lingkungan', 'Screen Printing Kustom', 'Handle Tahan Lama'],
      image: '/9 copy.png'
    },
    {
      icon: Umbrella,
      title: 'Payung',
      description: 'Payung profesional dengan branding kustom sempurna untuk hadiah korporat dan item promosi.',
      features: ['Tahan Cuaca', 'Cetak Logo Kustom', 'Buka Otomatis', 'Tahan Angin'],
      image: '/10 copy.png'
    },
    {
      icon: Usb,
      title: 'Flashdisk',
      description: 'USB flash drive kustom dengan branding Anda sempurna untuk penyimpanan data dan hadiah promosi teknologi.',
      features: ['Berbagai Kapasitas Penyimpanan', 'Ukiran Logo Kustom', 'Desain Tahan Lama', 'Transfer Data Cepat'],
      image: '/11.png'
    },
    {
      icon: Shirt,
      title: 'Hoodie',
      description: 'Hoodie nyaman sempurna untuk casual corporate wear dan seragam tim.',
      features: ['Campuran Katun Premium', 'Bordir Kustom', 'Kantong Kangguru', 'Hood Adjustable'],
      image: '/12.png'
    },
    {
      icon: Pin,
      title: 'Pin',
      description: 'Pin enamel kustom dan badge sempurna untuk brand recognition dan identitas korporat.',
      features: ['Desain Kustom', 'Finishing Enamel', 'Backing Metal', 'Brand Recognition'],
      image: '/14.png'
    },
    {
      icon: Key,
      title: 'Gantungan Kunci',
      description: 'Gantungan kunci kustom dan key holder ideal untuk giveaway promosi dan visibilitas merek.',
      features: ['Bentuk & Desain Kustom', 'Material Tahan Lama', 'Cetak Logo', 'Penggunaan Praktis'],
      image: '/15.png'
    },
    {
      icon: Archive,
      title: 'Tempat Kartu Nama Meja',
      description: 'Organizer kartu nama desktop elegan sempurna untuk lingkungan kantor profesional dan networking.',
      features: ['Desain Profesional', 'Penyimpanan Kartu Banyak', 'Material Premium', 'Organisasi Meja'],
      image: '/13 copy.png'
    },
    {
      icon: Circle,
      title: 'Topi',
      description: 'Topi kustom dengan opsi bordir sempurna untuk seragam korporat dan pakaian promosi.',
      features: ['Ukuran Adjustable', 'Bordir Kustom', 'Berbagai Warna', 'Kain Breathable'],
      image: '/16.png'
    },
    {
      icon: Clock,
      title: 'Jam Dinding',
      description: 'Jam dinding kustom dengan cetak logo sempurna untuk dekorasi kantor dan hadiah korporat.',
      features: ['Gerakan Senyap', 'Cetak Logo Kustom', 'Desain Modern', 'Instalasi Mudah'],
      image: '/17.png'
    }
  ];

  const renderServices = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className="glass-card rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-bolt-accent-blue/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          
          <div className="relative z-10">
            <div className="mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 glass-card rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-neon">
                <service.icon className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-display group-hover:text-gradient transition-all duration-300">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed font-body text-sm sm:text-base">{service.description}</p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2 sm:gap-3 group/feature">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-bolt-accent-blue to-neon-blue rounded-full group-hover/feature:scale-125 transition-transform duration-200 flex-shrink-0" />
                  <span className="text-gray-300 font-medium font-body group-hover:text-white transition-colors duration-300 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProducts = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {products.map((product, index) => (
        <div 
          key={index}
          className="glass-card rounded-2xl hover:scale-105 transition-all duration-500 group relative overflow-hidden animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-bolt-accent-blue/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          
          <div className="relative z-10">
            {/* Seamless Product Image Header */}
            <div className="w-full h-36 sm:h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center p-3 sm:p-4">
              <img 
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6">
              {/* Header with Icon and Title */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <product.icon className="text-neon-blue group-hover:text-electric-blue transition-colors duration-300 flex-shrink-0" size={18} />
                <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-gradient transition-all duration-300">{product.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-body mb-3 sm:mb-4">{product.description}</p>

              {/* Features */}
              <div className="space-y-1.5 sm:space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 group/feature">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-bolt-accent-blue to-neon-blue rounded-full group-hover/feature:scale-125 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-gray-400 text-xs font-medium font-body group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-dark-primary">
      <section className="py-16 sm:py-24 bg-dark-secondary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-r from-bolt-accent-blue/5 to-neon-blue/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-electric-blue/5 to-bolt-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 font-display">
              Solusi Kami Yang Memberikan
              <span className="block text-gradient shimmer">Hasil Nyata</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body font-light px-2">
              Komprehensif {activeTab === 'services' ? 'layanan merchandise' : 'solusi produk'} dirancang untuk meningkatkan visibilitas merek Anda dan 
              <span className="text-neon-blue font-medium"> memperkuat hubungan bisnis</span> Anda.
            </p>
          </div>

          {/* Toggle Component */}
          <ServiceProductToggle 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />

          {/* Content based on active tab */}
          {activeTab === 'services' ? renderServices() : renderProducts()}
        </div>
      </section>
      
      <Contact />
    </div>
  );
};

export default ServicesPage;