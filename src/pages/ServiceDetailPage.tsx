import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Package, PenTool, Settings, ShieldCheck, Truck } from 'lucide-react';
import Contact from '../components/Contact';

const ServiceDetailPage = () => {
    const { slug } = useParams();

    // Content Registry
    const contentMap: Record<string, any> = {
        'pengembangan-produk': {
            title: 'Pengembangan Produk',
            subtitle: 'Inovasi yang Mengubah Konsep Menjadi Realitas',
            description: 'Di CV Andrie Satria, kami tidak hanya mencetak logo; kami membantu Anda mengembangkan produk merchandise yang benar-benar unik. Tim R&D kami bekerja bersama Anda mulai dari sketsa awal hingga prototipe fungsional.',
            features: [
                'Konsultasi Konsep & Desain',
                'Prototyping Cepat',
                'Pemilihan Material Eksklusif',
                'Uji Kelayakan Produksi'
            ],
            details: 'Layanan pengembangan produk kami dirancang untuk brand yang ingin tampil beda. Kami menggabungkan tren pasar terkini dengan identitas unik perusahaan Anda untuk menciptakan item yang tidak bisa ditemukan di katalog standar.'
        },
        'merchandise-branding': {
            title: 'Merchandise Branding',
            subtitle: 'Memperkuat Identitas Visual Perusahaan Anda',
            description: 'Branding adalah tentang konsistensi. Layanan merchandise branding kami memastikan setiap item yang Anda bagikan secara akurat mencerminkan panduan visual dan nilai-nilai inti perusahaan Anda.',
            features: [
                'Color Matching (Pantone)',
                'Penempatan Logo Strategis',
                'Panduan Visual Merek',
                'Konsistensi Multi-Produk'
            ],
            details: 'Kami memahami betapa pentingnya warna dan proporsi logo. Teknologi cetak kami dikalibrasi untuk memastikan akurasi warna yang presisi, menjaga integritas visual brand Anda di berbagai media, dari tekstil hingga logam.'
        },
        'solusi-kustom': {
            title: 'Solusi Kustom',
            subtitle: 'Ketika Katalog Standar Tidak Cukup',
            description: 'Punya ide gila? Kami siap mewujudkannya. Solusi kustom kami melayani permintaan spesifik yang membutuhkan rekayasa khusus, bentuk unik, atau fungsionalitas tambahan.',
            features: [
                'Cetakan (Mold) Kustom',
                'Rekayasa Produk',
                'Integrasi Teknologi',
                'Solusi Kemasan Bespoke'
            ],
            details: 'Dari power bank berbentuk logo hingga gift set dengan mekanisme pembukaan unik, tim engineer dan desainer kami siap menaklukkan tantangan teknis apa pun untuk memberikan "wow factor" pada klien Anda.'
        },
        'jaminan-kualitas': {
            title: 'Jaminan Kualitas',
            subtitle: 'Standar Tinggi Tanpa Kompromi',
            description: 'Kualitas adalah reputasi kami. Setiap batch produksi melalui proses Quality Control (QC) yang ketat untuk memastikan tidak ada cacat sebelum sampai ke tangan Anda.',
            features: [
                'Inspeksi Bahan Baku',
                'QC In-Line Produksi',
                'Pemeriksaan Akhir 100%',
                'Garansi Produk'
            ],
            details: 'Kami menerapkan standar toleransi nol terhadap cacat kritis. Tim QC kami memeriksa detail terkecil, mulai dari kerapian jahitan hingga daya tahan cetakan, memberikan Anda ketenangan pikiran total.'
        },
        'pesanan-jumlah-besar': {
            title: 'Pesanan Jumlah Besar',
            subtitle: 'Kapasitas Produksi Skala Industri',
            description: 'Menangani event nasional atau distribusi kantor cabang? Infrastruktur produksi kami siap menangani volume besar dengan deadline ketat tanpa mengorbankan kualitas.',
            features: [
                'Kapasitas Ribuan Unit/Hari',
                'Manajemen Logistik Terpadu',
                'Harga Grosir Kompetitif',
                'Jadwal Pengiriman Bertahap'
            ],
            details: 'Kami berpengalaman menangani pesanan ribuan unit untuk klien multinasional. Sistem manajemen produksi kami memastikan setiap unit identik dan dikirim tepat waktu sesuai jadwal distribusi Anda.'
        }
    };

    const content = slug ? contentMap[slug] : null;

    if (!content) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Halaman Tidak Ditemukan</h2>
                    <Link to="/" className="text-blue-400 hover:text-blue-300">Kembali ke Beranda</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen font-sans text-white selection:bg-blue-500/30">
            {/* Minimal Grid Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
                <Link to="/" className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-colors mb-16 group tracking-widest text-xs uppercase">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Kembali</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-6 lg:sticky lg:top-32">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-none mb-0">
                            {content.title}
                        </h1>
                    </div>

                    {/* Scrolling Content Column */}
                    {/* Spacer handled by col-start logic or explicit gap, using col-start-8 ensures strict 1-col gap */}

                    <div className="lg:col-span-5 lg:col-start-8 space-y-16 pt-2">
                        {/* Main Description */}
                        <div className="prose prose-lg xl:prose-xl prose-invert text-gray-400 leading-relaxed font-light text-justify">
                            <p className="text-white">
                                {content.description}
                            </p>
                            <p className="text-lg">
                                {content.details}
                            </p>
                        </div>

                        {/* Minimal Feature List */}
                        <div className="">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-8 mb-6">Fitur Utama</h3>
                            <div className="flex flex-col">
                                {content.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="py-6 border-b border-white/10 flex items-start gap-4 hover:bg-white/[0.02] transition-colors pl-2">
                                        <div className="mt-2.5 w-1 h-1 rounded-full bg-white/50" />
                                        <span className="text-xl text-gray-200 font-light">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contact showBadge={false} />
        </div>
    );
};

export default ServiceDetailPage;
