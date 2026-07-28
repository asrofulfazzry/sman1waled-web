"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Search, BookOpen, Award } from "lucide-react";

interface Teacher {
  id: string;
  name: string;
  nip: string | null;
  subject: string;
  position: string;
}

export default function GuruPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/teachers")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTeachers(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat data guru:", err);
        setLoading(false);
      });
  }, []);

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="pt-32 pb-16 bg-navy min-h-screen">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent font-inter text-sm mb-6"
            >
              <Users className="w-4 h-4" />
              <span>Direktori Sekolah</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins mb-6"
            >
              Guru &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary">
                Staf Pendidik
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-inter text-lg"
            >
              Tenaga pendidik profesional dan berdedikasi tinggi dalam
              membimbing siswa-siswi SMAN 1 Waled.
            </motion.p>
          </div>

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
              placeholder="Cari nama guru / mapel..."
              className="w-full bg-white/5 border border-white/10 text-white font-inter rounded-full pl-12 pr-4 py-3 focus:outline-none focus:border-cyan-accent/50 transition-colors"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </motion.div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400 font-inter">
            Memuat data guru dari database...
          </div>
        ) : filteredTeachers.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl max-w-xl mx-auto">
            <p className="text-gray-400 font-inter mb-2">
              Belum ada data guru atau staf yang tersimpan.
            </p>
            <p className="text-xs text-cyan-accent">
              Tambahkan data melalui Admin Dashboard.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-accent/30 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-cyan-accent flex items-center justify-center text-white font-bold font-poppins text-xl shadow-lg mb-6">
                    {teacher.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins mb-1 leading-snug">
                    {teacher.name}
                  </h3>
                  <p className="text-cyan-accent text-sm font-inter mb-4">
                    {teacher.position}
                  </p>

                  <div className="space-y-2 py-3 border-t border-b border-white/10 text-sm font-inter text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-accent" />
                      <span>
                        Mapel: <strong>{teacher.subject}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>NIP: {teacher.nip || "Honorer"}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 font-inter">
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
