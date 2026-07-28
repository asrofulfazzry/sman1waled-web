"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function News() {
  const newsList = [
    {
      title: "Pendaftaran PPDB Jalur Prestasi Telah Dibuka",
      date: "12 Mei 2024",
      excerpt:
        "Informasi lengkap mengenai persyaratan dan alur pendaftaran PPDB jalur prestasi tahun ajaran baru.",
      category: "Pengumuman",
    },
    {
      title: "Tim Pramuka SMAN 1 Waled Juara Umum Tingkat Provinsi",
      date: "28 April 2024",
      excerpt:
        "Prestasi membanggakan kembali ditorehkan oleh siswa-siswi kita di ajang kepramukaan bergengsi tingkat provinsi.",
      category: "Prestasi",
    },
    {
      title: "Pelaksanaan Ujian Akhir Semester Berbasis Digital",
      date: "15 April 2024",
      excerpt:
        "Mendukung program literasi digital, ujian semester ini diselenggarakan sepenuhnya secara online di lab komputer.",
      category: "Akademik",
    },
  ];

  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4"
            >
              Berita & Pengumuman
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-primary rounded-full"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/berita"
              className="group flex items-center gap-2 text-cyan-accent hover:text-white transition-colors font-inter font-medium"
            >
              Lihat Semua Berita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {newsList.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-cyan-accent/30 hover:-translate-y-2 transition-all duration-300 shadow-lg flex flex-col h-full"
            >
              {/* Gambar Berita (Placeholder) */}
              <div className="h-48 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-navy group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 left-4 bg-cyan-accent text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {news.category}
                </div>
              </div>

              {/* Konten Berita */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3 font-inter">
                  <Calendar className="w-4 h-4 text-primary" />
                  {news.date}
                </div>

                <h3 className="text-xl font-bold text-white font-poppins mb-3 group-hover:text-cyan-accent transition-colors leading-snug">
                  {news.title}
                </h3>

                <p className="text-gray-400 font-inter text-sm mb-6 flex-1 line-clamp-3">
                  {news.excerpt}
                </p>

                <button className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-cyan-accent transition-colors mt-auto">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
