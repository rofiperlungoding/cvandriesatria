import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
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
                            Kebijakan<br />Privasi
                        </h1>
                    </div>

                    {/* Scrolling Content Column */}
                    <div className="lg:col-span-5 lg:col-start-8 space-y-16 pt-2">
                        {/* Main Description */}
                        <div className="prose prose-lg xl:prose-xl prose-invert text-gray-400 leading-relaxed font-light text-justify">
                            <p>
                                Di CV Andrie Satria, kami sangat menghargai privasi Anda. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">1. Informasi yang Kami Kumpulkan</h3>
                            <p>
                                Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti saat membuat akun, memesan produk, atau menghubungi layanan pelanggan. Informasi ini dapat mencakup nama, alamat email, nomor telepon, dan detail pembayaran.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">2. Penggunaan Informasi</h3>
                            <p>
                                Kami menggunakan informasi yang kami kumpulkan untuk:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>Memproses dan mengirimkan pesanan Anda.</li>
                                <li>Mengirimkan pemberitahuan terkait transaksi dan layanan.</li>
                                <li>Meningkatkan kualitas layanan dan produk kami.</li>
                                <li>Mencegah penipuan dan aktivitas ilegal lainnya.</li>
                            </ul>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">3. Perlindungan Data</h3>
                            <p>
                                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda dari akses yang tidak sah, penggunaan yang salah, atau pengungkapan.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">4. Berbagi Informasi</h3>
                            <p>
                                Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi Anda dengan penyedia layanan tepercaya yang membantu kami dalam operasional bisnis, seperti pemrosesan pembayaran dan pengiriman.
                            </p>

                            <h3 className="text-white font-bold mt-12 mb-6 text-xl">5. Perubahan Kebijakan</h3>
                            <p>
                                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Setiap perubahan akan diberitahukan melalui situs web kami. Penggunaan berkelanjutan Anda atas layanan kami setelah perubahan tersebut merupakan persetujuan Anda terhadap kebijakan yang baru.
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

export default PrivacyPage;
