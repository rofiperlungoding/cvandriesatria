import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
    return (
        <div className="bg-black min-h-screen pt-32 pb-24 px-6 md:px-12 font-sans relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div
                className="fixed inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-16 group uppercase tracking-widest text-xs font-bold">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Kembali</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Sticky Hero Column - Typography Only */}
                    <div className="lg:col-span-6 lg:sticky lg:top-32">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-none mb-0">
                            Syarat<br />Layanan
                        </h1>
                    </div>

                    {/* Scrolling Content Column */}
                    <div className="lg:col-span-5 lg:col-start-8 space-y-16 pt-2">
                        {/* Main Description */}
                        <div className="prose prose-lg xl:prose-xl prose-invert text-gray-400 leading-relaxed font-light text-justify">
                            <p>
                                Selamat datang di CV Andrie Satria. Dengan mengakses atau menggunakan situs web dan layanan kami, Anda menyetujui syarat dan ketentuan berikut.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">1. Ketentuan Umum</h3>
                            <p>
                                Layanan ini disediakan oleh CV Andrie Satria, yang berlokasi di Indonesia. Kami berhak untuk mengubah, menangguhkan, atau menghentikan layanan (atau bagian mana pun) kapan saja tanpa pemberitahuan.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">2. Hak Kekayaan Intelektual</h3>
                            <p>
                                Semua konten yang ditampilkan di situs ini, termasuk namun tidak terbatas pada teks, grafik, logo, gambar, dan perangkat lunak, adalah properti eksklusif CV Andrie Satria atau pemberi lisensinya dan dilindungi oleh undang-undang hak cipta.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">3. Pemesanan dan Pembayaran</h3>
                            <p>
                                Harga produk dan layanan kami dapat berubah tanpa pemberitahuan. Kami berhak untuk menolak pesanan apa pun yang Anda tempatkan kepada kami. Kami dapat, atas kebijakan kami sendiri, membatasi atau membatalkan jumlah yang dibeli per orang, per rumah tangga, atau per pesanan.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">4. Batasan Tanggung Jawab</h3>
                            <p>
                                CV Andrie Satria tidak akan bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, atau konsekuensial yang diakibatkan dari penggunaan atau ketidakmampuan untuk menggunakan layanan kami.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">5. Hukum yang Berlaku</h3>
                            <p>
                                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia.
                            </p>

                            <div className="mt-16 pt-8 border-t border-white/10">
                                <p className="text-sm text-gray-500">
                                    Terakhir diperbarui: Januari 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
