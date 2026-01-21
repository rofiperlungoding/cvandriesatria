import { Briefcase, Shirt, Printer, TrendingUp, Handshake, Building2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlowButton } from '../components/ui/GlowButton';

const HomePage = () => {
    return (
        <div className="space-y-0 pb-24">
            {/* Hero Section */}
            <section className="relative flex items-center pt-32 md:pt-48 pb-16 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 center w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm animate-fade-in mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-blue-200/80 text-xs font-medium tracking-wide uppercase">
                                Spesialis Merchandise Premium sejak 2013
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] animate-slide-up">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                                Tingkatkan Citra Brand
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                                Dengan Merchandise Eksklusif
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Solusi one-stop untuk kebutuhan promosi perusahaan Anda. Kualitas premium, desain inovatif, dan pengerjaan tepat waktu.
                        </p>

                        <div className="flex items-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <Link to="/contact">
                                <GlowButton className="px-8 py-4 text-lg">Mulai Konsultasi</GlowButton>
                            </Link>
                            <Link to="/results">
                                <GlowButton variant="outline" className="px-8 py-4 text-lg">Lihat Portfolio</GlowButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Logos / Trust Section */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
                    {[
                        { name: 'Bank Mandiri', src: '/8.png' },
                        { name: 'Metro TV', src: '/5.png' },
                        { name: 'All Sedayu Hotels', src: '/1.png' },
                        { name: 'Mercure Hotels', src: '/3.png' },
                        { name: 'The 101 Jakarta', src: '/7.png' },
                    ].map((client, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={client.src}
                                alt={client.name}
                                className="h-16 md:h-24 w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Services & Stats Section (Enterprise Rigid Grid) */}
            <section className="max-w-7xl mx-auto px-6 space-y-8">
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Merchandise Korporat',
                            desc: 'Barang promosi premium untuk memaksimalkan visibilitas merek Anda secara elegan.',
                            icon: Briefcase
                        },
                        {
                            title: 'Apparel Kustom',
                            desc: 'Kaos, polo shirt, dan seragam profesional dengan standar kualitas ekspor.',
                            icon: Shirt
                        },
                        {
                            title: 'Digital & Offset Printing',
                            desc: 'Solusi percetakan dokumen & marketing collateral berkualitas tinggi untuk bisnis.',
                            icon: Printer
                        }
                    ].map((service, idx) => (
                        <div key={idx} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)] group-hover:border-blue-500/40 transition-all duration-300">
                                <service.icon className="text-blue-400" size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { val: '12+', label: 'Tahun Pengalaman', icon: TrendingUp },
                        { val: '150+', label: 'Klien Puas', icon: Handshake },
                        { val: '10+', label: 'Mitra Korporat', icon: Building2 },
                        { val: '100%', label: 'Jaminan Kualitas', icon: ShieldCheck }
                    ].map((stat, idx) => (
                        <div key={idx} className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-4 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                                <stat.icon className="text-gray-400 group-hover:text-blue-400 transition-colors" size={24} strokeWidth={1.5} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.val}</div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            <div className="mt-2 w-8 h-1 bg-blue-500/20 group-hover:bg-blue-500 rounded-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </section>

            {/* SPACER TO FORCE SEPARATION */}
            <div className="h-32 md:h-56 w-full" aria-hidden="true" />

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 mb-32 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Siap Meningkatkan Branding Perusahaan?</h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                    Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis mengenai kebutuhan merchandise Anda.
                </p>
                <div className="flex justify-center">
                    <Link to="/contact">
                        <GlowButton className="px-12 py-5 text-lg font-semibold shadow-lg shadow-blue-500/20">Hubungi Kami via WhatsApp</GlowButton>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
