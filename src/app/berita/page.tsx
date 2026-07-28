"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, Newspaper } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

export default function BeritaPage() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Ambil data dari API Database saat halaman dimuat
  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNewsList(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat berita:", err);
        setLoading(false);
      });
  }, []);

  // Filter pencarian berita
  const filteredNews = newsList.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="pt-32 pb-16 bg-navy min-h-screen">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-accent rounded-full mix-blend-multiply filter blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent font-inter text-sm mb-6"
            >
              <Newspaper className="w-4 h-4" />
              <span>Portal Berita Resmi</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins mb-6"
            >
              Berita &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary">
                Artikel
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-inter text-lg"
            >
              Dapatkan informasi terbaru seputar kegiatan, prestasi, dan
              pengumuman penting dari SMAN 1 Waled.
            </motion.p>
          </div>

          {/* Search Bar Fungsional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-80 relative"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari berita..."
              className="w-full bg-white/5 border border-white/10 text-white font-inter rounded-full pl-12 pr-4 py-3 focus:outline-none focus:border-cyan-accent/50 transition-colors"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </motion.div>
        </div>

        {/* Loading / Empty State */}
        {loading ? (
          <div className="text-center py-20 text-gray-400 font-inter">
            Memuat berita dari database...
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl max-w-xl mx-auto">
            <p className="text-gray-400 font-inter mb-2">
              Belum ada berita yang tersimpan atau ditemukan.
            </p>
            <Link
              href="/admin/berita/tambah"
              className="text-cyan-accent font-semibold hover:underline text-sm"
            >
              + Tambah berita pertama lewat Admin Dashboard
            </Link>
          </div>
        ) : (
          /* Grid Berita Dinamis */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredNews.map((news, index) => (
              <motion.div
                key={news.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-cyan-accent/30 hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col h-full"
              >
                <div className="h-52 bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-navy group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {news.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3 font-inter">
                    <Calendar className="w-4 h-4 text-cyan-accent" />
                    {news.date}
                  </div>

                  <h3 className="text-xl font-bold text-white font-poppins mb-3 group-hover:text-cyan-accent transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-gray-400 font-inter text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-cyan-accent transition-colors mt-auto w-fit"
                  >
                    Baca Selengkapnya{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
