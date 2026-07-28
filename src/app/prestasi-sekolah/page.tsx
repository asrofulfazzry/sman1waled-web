"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, Search } from "lucide-react";

interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
}

export default function PrestasiSekolahPage() {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/achievements")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAchievements(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat prestasi:", err);
        setLoading(false);
      });
  }, []);

  const filteredAchievements = achievements.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="pt-32 pb-16 bg-navy min-h-screen text-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent font-inter text-sm mb-6">
              <Award className="w-4 h-4" />
              <span>Prestasi Tak Henti, Waled Hebat!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Prestasi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary">
                Sekolah
              </span>
            </h1>
            <p className="text-gray-400 font-inter text-lg">
              Dalam beberapa tahun terakhir, SMAN 1 Waled terus mengukir
              prestasi gemilang di bidang akademik maupun non-akademik.
            </p>
          </div>

          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari prestasi..."
              className="w-full bg-white/5 border border-white/10 text-white font-inter rounded-full pl-12 pr-4 py-3 focus:outline-none focus:border-cyan-accent/50 transition-colors"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400 font-inter">
            Memuat data prestasi...
          </div>
        ) : filteredAchievements.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl max-w-xl mx-auto">
            <p className="text-gray-400 font-inter mb-2">
              Belum ada data prestasi yang tercatat.
            </p>
            <p className="text-xs text-cyan-accent">
              Tambahkan melalui Admin Dashboard.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievements.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-accent/30 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-inter">
                      <Calendar className="w-4 h-4 text-cyan-accent" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-poppins mb-3 leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-inter text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-xs text-cyan-accent/70 font-inter font-semibold pt-4 border-t border-white/5">
                  SMAN 1 Waled
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
