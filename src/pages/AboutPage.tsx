import { Award, CheckCircle, Users, Target, Rocket } from 'lucide-react';
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
    <div className="bg-black font-sans text-white">
      <section className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column - Main Content */}
            <div className="space-y-12 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                  Mengenal <span className="text-blue-400">CV Andrie Satria</span>
                </h1>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
                  <p>
                    Berdiri sejak 2013, CV Andrie Satria telah setia menemani perjalanan para pelanggan melalui pemenuhan dan penyediaan barang promosi yang kreatif dan menarik.
                  </p>
                  <p>
                    Menyediakan barang-barang dengan kualitas tinggi dengan jaminan kualitas, CV Andrie Satria selalu memberikan yang terbaik dan berkomitmen untuk menjaga kepercayaan klien dengan kredibilitas yang tinggi.
                  </p>
                  <p>
                    Dengan motto <span className="text-blue-200 italic">"Bekerja dengan jujur, cerdas dan profesional"</span> CV Andrie Satria siap menjadi partner dalam segala kebutuhan percetakan dan barang promosi di bisnis anda.
                  </p>
                </div>
              </div>

              {/* Achievements Grid - Integrated in Left Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="text-blue-400" size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">{achievement.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Vision & Mission (Sticky) */}
            <div className="space-y-8 animate-fade-in lg:pt-12 lg:sticky lg:top-24">

              {/* Visi Misi Card */}
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10" />

                {/* Visi */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <Target className="text-blue-400" size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-semibold text-white">Visi</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed pl-12 border-l border-white/5 ml-5 py-2">
                    Menjadi perusahaan jasa, baik digital printing, offset printing, promotion item dan merchandising dengan mengedepankan mutu dan kualitas.
                  </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

                {/* Misi */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <Rocket className="text-blue-400" size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-2xl font-semibold text-white">Misi</h4>
                  </div>
                  <ul className="space-y-4 text-gray-400 pl-12 border-l border-white/5 ml-5 py-2">
                    {[
                      'Mengutamakan kualitas produk yang dibutuhkan oleh konsumen.',
                      'Memberikan service yang memuaskan bagi konsumen.',
                      'Menjunjung profesionalitas dalam bekerja.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <CheckCircle className="text-blue-500/40 w-5 h-5 mt-0.5 shrink-0 group-hover:text-blue-400 transition-colors" />
                        <span className="leading-relaxed group-hover:text-gray-300 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Motto Card (Accent) */}
              <div className="p-8 rounded-3xl border border-blue-500/20 bg-blue-900/10 group hover:border-blue-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-sm font-medium text-blue-300 uppercase tracking-widest mb-4 relative z-10">Motto Kami</h4>
                <blockquote className="text-2xl md:text-3xl font-bold text-white italic mb-4 leading-normal relative z-10">
                  "Bekerja dengan jujur, cerdas dan profesional"
                </blockquote>
                <p className="text-gray-500 text-sm relative z-10">
                  Prinsip panduan yang mendorong dedikasi kami.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Contact showBadge={false} />
    </div>
  );
};

export default AboutPage;