"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Principal() {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Efek Cahaya di Background */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-20 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl flex flex-col md:flex-row gap-10 items-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          {/* Garis Glow di atas Kartu */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-accent to-transparent opacity-50"></div>

          {/* Area Foto Kepala Sekolah (Sementara Kotak Kosong Beranimasi) */}
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 relative shadow-2xl group flex items-center justify-center bg-gray-800">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-navy animate-pulse"></div>
            <span className="relative z-10 text-gray-400 text-sm font-medium border border-gray-600 px-3 py-1 rounded-full text-center">
              [Foto Kepsek]
            </span>
            {/* Efek Hover */}
            <div className="absolute inset-0 bg-cyan-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Area Teks Sambutan */}
          <div className="flex-1 space-y-6 relative z-10">
            <Quote className="w-10 h-10 text-cyan-accent/50" />

            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">
              Sambutan Kepala Sekolah
            </h2>

            <p className="text-gray-300 leading-relaxed font-inter text-lg">
              Puji syukur kepada Alloh SWT, Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerahNya sehingga website SMA N 1 WALED ini dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab akan setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada. Kami sadar sepenuhnya dalam rangka memajukan pendidikan di era berkembangnya Teknologi Informasi yang begitu pesat, sangat diperlukan berbagai sarana prasarana yang kondusif, kebutuhan berbagai informasi siswa, guru, orangtua maupun masyarakat, sehingga kami berusaha mewujudkan hal tersebut semaksimal mungkin. Semoga dengan adanya website ini dapat membantu dan bermanfaat, terutama informasi yang berhubungan dengan pendidikan, ilmu pengetahuan dan informasi seputar SMA N 1 WALED .
            Besar harapan kami, sarana ini dapat memberi manfaat bagi semua pihak yang ada dilingkup pendidikan dan pemerhati pendidikan secara khusus bagi SMA N 1 WALED .
            Terima kasih atas kerjasamanya, maju terus untuk mencapai SMA N 1 WALED  yang lebih baik lagi.
            </p>

            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-blue-400 font-manrope">
                [Didi Winardi S.Pd.]
              </h4>
              <p className="text-sm text-gray-400 mt-1 font-inter uppercase tracking-widest">
                Kepala SMAN 1 Waled
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
