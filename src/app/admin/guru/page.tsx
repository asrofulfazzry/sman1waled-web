"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Newspaper,
  Users,
  UserPlus,
  Settings,
  LogOut,
  TrendingUp,
  Bell,
  PlusCircle,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

interface TeacherItem {
  id: string;
  name: string;
  subject: string;
  position: string;
  nip: string | null;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [teachersList, setTeachersList] = useState<TeacherItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }

    // Ambil data berita dan guru secara bersamaan
    Promise.all([
      fetch("/api/news").then((res) => res.json()),
      fetch("/api/teachers").then((res) => res.json()),
    ])
      .then(([newsData, teacherData]) => {
        if (Array.isArray(newsData)) setNewsList(newsData);
        if (Array.isArray(teacherData)) setTeachersList(teacherData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat data:", err);
        setLoading(false);
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    router.push("/admin/login");
  };

  const stats = [
    {
      title: "Total Berita & Artikel",
      count: newsList.length.toString(),
      icon: <Newspaper className="w-6 h-6 text-cyan-accent" />,
      change: "Database Aktif",
    },
    {
      title: "Total Tenaga Pendidik",
      count: teachersList.length.toString(),
      icon: <Users className="w-6 h-6 text-primary" />,
      change: "Database Aktif",
    },
    {
      title: "Pendaftar PPDB",
      count: "156",
      icon: <UserPlus className="w-6 h-6 text-cyan-accent" />,
      change: "Jalur Zonasi & Prestasi",
    },
    {
      title: "Pengunjung Website",
      count: "2,430",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      change: "+15% minggu ini",
    },
  ];

  return (
    <div className="min-h-screen bg-navy flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#050d1a] border-r border-white/10 hidden md:flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,82,204,0.5)]">
              W
            </div>
            <div>
              <h3 className="text-white font-bold font-poppins text-sm">
                SMAN 1 WALED
              </h3>
              <p className="text-xs text-cyan-accent font-inter">Admin Panel</p>
            </div>
          </div>

          <nav className="space-y-2 font-inter text-sm">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-accent text-navy font-semibold"
            >
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </Link>
            <Link
              href="/berita"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Newspaper className="w-5 h-5" /> Lihat Berita Publik
            </Link>
            <Link
              href="/guru"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Users className="w-5 h-5" /> Lihat Direktori Guru
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors font-inter text-sm text-left cursor-pointer"
          >
            <LogOut className="w-5 h-5" /> Keluar Sistem
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white font-poppins">
              Selamat Datang, Administrator
            </h1>
            <p className="text-gray-400 font-inter text-sm mt-1">
              Kelola konten website SMAN 1 Waled melalui panel ini.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-cyan-accent rounded-full animate-pulse"></span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-accent to-primary flex items-center justify-center text-navy font-bold font-poppins">
              AD
            </div>
          </div>
        </header>

        {/* Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                  {stat.icon}
                </div>
                <span className="text-xs font-inter text-cyan-accent bg-cyan-accent/10 px-2.5 py-1 rounded-full border border-cyan-accent/20">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white font-poppins mb-1">
                {stat.count}
              </h3>
              <p className="text-gray-400 text-sm font-inter">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Bagian Pengelolaan (Berita & Guru) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Kelola Berita */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white font-poppins">
                Kelola Berita
              </h3>
              <Link
                href="/admin/berita/tambah"
                className="flex items-center gap-2 bg-cyan-accent text-navy px-3.5 py-2 rounded-xl font-bold text-xs hover:bg-white transition-colors cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" /> Tambah Berita
              </Link>
            </div>

            {loading ? (
              <p className="text-gray-400 font-inter text-sm py-4">Memuat...</p>
            ) : newsList.length === 0 ? (
              <p className="text-gray-400 font-inter text-sm py-4">
                Belum ada berita tersimpan.
              </p>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                {newsList.map((news) => (
                  <div
                    key={news.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div>
                      <h4 className="text-white font-medium text-sm mb-0.5 line-clamp-1">
                        {news.title}
                      </h4>
                      <p className="text-xs text-cyan-accent">
                        {news.category} • {news.date}
                      </p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                      Aktif
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Kelola Data Guru */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white font-poppins">
                Kelola Data Guru
              </h3>
              <Link
                href="/admin/guru/tambah"
                className="flex items-center gap-2 bg-cyan-accent text-navy px-3.5 py-2 rounded-xl font-bold text-xs hover:bg-white transition-colors cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" /> Tambah Guru
              </Link>
            </div>

            {loading ? (
              <p className="text-gray-400 font-inter text-sm py-4">Memuat...</p>
            ) : teachersList.length === 0 ? (
              <div className="text-center py-6 border border-dashed border-white/10 rounded-2xl">
                <p className="text-gray-400 font-inter text-sm mb-2">
                  Belum ada data guru tersimpan.
                </p>
                <Link
                  href="/admin/guru/tambah"
                  className="text-cyan-accent text-xs font-semibold hover:underline"
                >
                  + Klik di sini untuk menambah guru pertama
                </Link>
              </div>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                {teachersList.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div>
                      <h4 className="text-white font-medium text-sm mb-0.5">
                        {teacher.name}
                      </h4>
                      <p className="text-xs text-cyan-accent">
                        {teacher.subject} • {teacher.position}
                      </p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20">
                      Tugas
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pintasan Samping */}
        <div className="bg-gradient-to-br from-primary/20 to-cyan-accent/10 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-xl flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white font-poppins mb-1">
              Pratinjau Website Publik
            </h3>
            <p className="text-gray-300 font-inter text-sm">
              Lihat langsung hasil perubahan data berita dan guru pada halaman
              utama.
            </p>
          </div>
          <Link
            href="/"
            target="_blank"
            className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-colors flex items-center gap-2 font-poppins text-sm whitespace-nowrap"
          >
            Buka Website <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
