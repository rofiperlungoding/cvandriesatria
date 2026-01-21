import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Coffee, Usb, Clock, BookOpen, Shirt, Briefcase, ShoppingBag, PenTool, Gift, Users, Volume2, Battery, Umbrella, ShoppingCart, Pin, Key, Archive, Circle } from 'lucide-react';
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group flex flex-col"
        >
          <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.4)] transition-all duration-300">
            <service.icon className="text-blue-400" size={28} strokeWidth={1.5} />
          </div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">{service.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

          <div className="space-y-2 pt-6 border-t border-white/5">
            {service.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                <span className="text-gray-400 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderProducts = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group flex flex-col"
        >
          {/* Product Image */}
          <div className="w-full h-48 rounded-2xl bg-white/[0.03] border border-white/5 p-4 mb-6 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain transition-transform duration-500"
            />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
              <product.icon className="text-blue-400" size={16} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white truncate">{product.title}</h3>
          </div>

          <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{product.description}</p>

          <div className="space-y-1.5 mt-auto">
            {product.features.slice(0, 3).map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500/40" />
                <span className="text-gray-400 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-black min-h-screen pt-24 font-sans text-white">
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Solusi Kami Yang Memberikan <span className="text-blue-400">Hasil Nyata</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Komprehensif {activeTab === 'services' ? 'layanan merchandise' : 'solusi produk'} dirancang untuk meningkatkan visibilitas merek Anda dan memperkuat hubungan bisnis Anda.
          </p>
        </div>

        {/* Toggle Component */}
        <ServiceProductToggle
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Content based on active tab */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {activeTab === 'services' ? renderServices() : renderProducts()}
            </motion.div>
          </AnimatePresence>
        </div>

      </section>

      <Contact showBadge={false} />
    </div>
  );
};

export default ServicesPage;