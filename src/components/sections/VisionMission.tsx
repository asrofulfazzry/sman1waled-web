"use client";

import { motion } from "framer-motion";
import { Target, Compass, CheckCircle2, Rocket, Sparkles } from "lucide-react";

export default function VisionMission() {
  const missions = [
    "Menyiapkan peserta didik yang berkualitas, kreatif, inovatif, produktif, dan berakhlaqul karimah.",
    "Meningkatkan kualitas penyelenggaraan pendidikan untuk mencapai prestasi akademik maupun non akademik melalui penerapan program kegiatan intrakurikuler dan kegiatan ekstrakurikuler yang terpadu, terorganisisr, terarah, dan berkesinambungan.",
    "Menciptakan suasana lingkungan sekolah yang kondusif melalui peningkatan pelayanan prima terhadap seluruh unsure civitas academika sekolah dan masyarakat.",
    "Menumbuhkembangkan kesadaran dari seluruh civitas akademika untuk senantiasa peduli dan mengembangkan rasa cinta pada kebersihan, keindahan, dan kenyamanan lingkungan sekolah.",
    "Menumbuhkembangkan kesadaran seluruh unsur civitas academika sekolah untuk mengikuti, melaksanakan , dan menggunakan  ilmu pengetahuan dan teknologi.",
  ];

  const tujuans = [
    "Menciptakan sekolah yang berkualitas dan mewujudkan siswa yang beriman dan bertaqwa, berprestasi, serta menguasai ilmu pengetahuan dan teknologi.",
    "Menciptakan generasi yang santun dalam berbahasa, inovatif dalam berkarya, agamis dalam sikap dan berprestasi dalam setiap kegiatan.",
    "Meningkatkan pembinaan bidang akademis terhadap peserta didik melalui kegiatan intrakulikuler secara lebih efektif dan maksimal.",
    "Meningkatkan pembinaan bidang non akademis terhadap peserta didik melalui kegiatan ekstrakulikuler yang terarah dan terorganisir.",
    "Meningkatkan prestasi peserta didik di bidang olahraga, seni, dan budaya.",
    "Menumbuhkan pribadi peserta didik yang berbudi luhur melalui kegiatan pembiasaan yang bersifat sosial dan agamis.",
    "Meningkatkan kemampuan, keterampilan, dan profesionalisme pendidik dan tenaga kependidikan melalui pembinaan profesi dan pendelegasian peserta pendidikan dan pelatihan."
  ];

  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-accent rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4"
          >
            Visi, Misi & Tujuan
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-cyan-accent to-primary mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Row 1: Visi & Misi */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-12">
          {/* Card Visi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-accent/30 transition-colors shadow-xl"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Target className="w-40 h-40 text-cyan-accent" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30">
                <Target className="w-7 h-7 text-cyan-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white font-poppins mb-4">Visi Utama</h3>
              <p className="text-xl text-gray-300 font-inter leading-relaxed italic">
                "Terwujudnya peserta didik yang beriman dan bertaqwa, berprestasi, peduli terhadap lingkungan serta menguasai ilmu pengetahuan dan teknologi"
              </p>
            </div>
          </motion.div>

          {/* Card Misi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 transition-colors shadow-xl"
          >
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Compass className="w-40 h-40 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-cyan-accent/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-accent/20">
                <Compass className="w-7 h-7 text-cyan-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white font-poppins mb-6">Misi Sekolah</h3>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start gap-3 text-gray-300 font-inter"
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{mission}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Tujuan (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-blue-400/30 transition-colors shadow-xl mb-16"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <Rocket className="w-40 h-40 text-blue-400" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
              <Rocket className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white font-poppins mb-6">Tujuan Sekolah</h3>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {tujuans.map((tujuan, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-3 text-gray-300 font-inter"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-sm md:text-base">{tujuan}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Row 3: Motto Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-accent/10 via-primary/10 to-cyan-accent/10 border border-cyan-accent/20 rounded-2xl p-8 text-center relative overflow-hidden backdrop-blur-md shadow-[0_0_30px_rgba(0,229,255,0.1)]"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-accent to-transparent opacity-50"></div>
          <Sparkles className="w-8 h-8 text-cyan-accent mx-auto mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-white font-poppins tracking-wider uppercase mb-1">
            Motto SMAN 1 Waled
          </h3>
          <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-blue-400 mt-2 mb-4 font-poppins tracking-tight">
            "SIAP"
          </p>
          <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto leading-relaxed">
            (<span className="text-white font-bold">S</span>antun dalam bahasa, <span className="text-white font-bold">I</span>novatif dalam karya, <span className="text-white font-bold">A</span>gamis dalam krida, dan <span className="text-white font-bold">P</span>restasi dalam cipta)
          </p>
        </motion.div>
      </div>
    </section>
  );
}