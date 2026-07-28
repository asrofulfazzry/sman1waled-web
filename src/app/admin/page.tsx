"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Newspaper,
  Users,
  Award,
  LogOut,
  TrendingUp,
  Bell,
  PlusCircle,
  ArrowUpRight,
  Trash2,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NewsItem {
  id: string;
  title: string;
  category: string;
}
interface TeacherItem {
  id: string;
  name: string;
  subject: string;
}
interface AchievementItem {
  id: string;
  title: string;
  category: string;
}
interface OrgItem {
  id: string;
  name: string;
  position: string;
  division: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [teachersList, setTeachersList] = useState<TeacherItem[]>([]);
  const [achievementsList, setAchievementsList] = useState<AchievementItem[]>(
    [],
  );
  const [orgList, setOrgList] = useState<OrgItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [newsRes, teacherRes, achievementRes, orgRes] = await Promise.all([
        fetch("/api/news"),
        fetch("/api/teachers"),
        fetch("/api/achievements"),
        fetch("/api/organization"),
      ]);

      const newsData = await newsRes.json();
      const teacherData = await teacherRes.json();
      const achievementData = await achievementRes.json();
      const orgData = await orgRes.json();

      if (Array.isArray(newsData)) setNewsList(newsData);
      if (Array.isArray(teacherData)) setTeachersList(teacherData);
      if (Array.isArray(achievementData)) setAchievementsList(achievementData);
      if (Array.isArray(orgData)) setOrgList(orgData);
    } catch (err) {
      console.error("Gagal memuat data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }
    loadData();
  }, [router]);

  const handleDelete = async (endpoint: string, id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus item ini?")) return;
    try {
      const res = await fetch(`/api/${endpoint}?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        loadData();
      } else {
        alert("Gagal menghapus data");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    router.push("/admin/login");
  };

  const stats = [
    {
      title: "Total Berita",
      count: newsList.length.toString(),
      icon: <Newspaper className="w-6 h-6 text-cyan-accent" />,
      change: "Database Aktif",
    },
    {
      title: "Total Guru",
      count: teachersList.length.toString(),
      icon: <Users className="w-6 h-6 text-primary" />,
      change: "Database Aktif",
    },
    {
      title: "Total Prestasi",
      count: achievementsList.length.toString(),
      icon: <Award className="w-6 h-6 text-cyan-accent" />,
      change: "Database Aktif",
    },
    {
      title: "Pengurus OSIS & MPK",
      count: orgList.length.toString(),
      icon: <Shield className="w-6 h-6 text-primary" />,
      change: "Database Aktif",
    },
  ];

  return (
    <div className="min-h-screen bg-navy flex">
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
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-accent text-navy font-semibold"
              href="/admin"
            >
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              href="/berita"
              target="_blank"
            >
              <Newspaper className="w-5 h-5" /> Lihat Berita
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              href="/guru"
              target="_blank"
            >
              <Users className="w-5 h-5" /> Lihat Guru
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              href="/osis-mpk"
              target="_blank"
            >
              <Shield className="w-5 h-5" /> Lihat OSIS & MPK
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

        {/* Kotak Pengelolaan (Berita, Guru, Prestasi, OSIS & MPK) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Berita */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-white font-poppins">
                  Berita
                </h3>
                <Link
                  className="flex items-center gap-1 bg-cyan-accent text-navy px-2.5 py-1 rounded-lg font-bold text-xs hover:bg-white transition-colors"
                  href="/admin/berita/tambah"
                >
                  <PlusCircle className="w-3 h-3" /> Tambah
                </Link>
              </div>
              {loading ? (
                <p className="text-gray-400 text-xs py-2">Memuat...</p>
              ) : newsList.length === 0 ? (
                <p className="text-gray-400 text-xs py-2">Kosong.</p>
              ) : (
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {newsList.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5"
                    >
                      <span className="text-white text-xs truncate max-w-[120px]">
                        {item.title}
                      </span>
                      <button
                        onClick={() => handleDelete("news", item.id)}
                        className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Guru */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-white font-poppins">
                  Guru
                </h3>
                <Link
                  className="flex items-center gap-1 bg-cyan-accent text-navy px-2.5 py-1 rounded-lg font-bold text-xs hover:bg-white transition-colors"
                  href="/admin/guru/tambah"
                >
                  <PlusCircle className="w-3 h-3" /> Tambah
                </Link>
              </div>
              {loading ? (
                <p className="text-gray-400 text-xs py-2">Memuat...</p>
              ) : teachersList.length === 0 ? (
                <p className="text-gray-400 text-xs py-2">Kosong.</p>
              ) : (
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {teachersList.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5"
                    >
                      <span className="text-white text-xs truncate max-w-[120px]">
                        {item.name}
                      </span>
                      <button
                        onClick={() => handleDelete("teachers", item.id)}
                        className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Prestasi */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-white font-poppins">
                  Prestasi
                </h3>
                <Link
                  className="flex items-center gap-1 bg-cyan-accent text-navy px-2.5 py-1 rounded-lg font-bold text-xs hover:bg-white transition-colors"
                  href="/admin/prestasi/tambah"
                >
                  <PlusCircle className="w-3 h-3" /> Tambah
                </Link>
              </div>
              {loading ? (
                <p className="text-gray-400 text-xs py-2">Memuat...</p>
              ) : achievementsList.length === 0 ? (
                <p className="text-gray-400 text-xs py-2">Kosong.</p>
              ) : (
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {achievementsList.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5"
                    >
                      <span className="text-white text-xs truncate max-w-[120px]">
                        {item.title}
                      </span>
                      <button
                        onClick={() => handleDelete("achievements", item.id)}
                        className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* OSIS & MPK */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-bold text-white font-poppins">
                  OSIS & MPK
                </h3>
                <Link
                  className="flex items-center gap-1 bg-cyan-accent text-navy px-2.5 py-1 rounded-lg font-bold text-xs hover:bg-white transition-colors"
                  href="/admin/osis-mpk/tambah"
                >
                  <PlusCircle className="w-3 h-3" /> Tambah
                </Link>
              </div>
              {loading ? (
                <p className="text-gray-400 text-xs py-2">Memuat...</p>
              ) : orgList.length === 0 ? (
                <p className="text-gray-400 text-xs py-2">Kosong.</p>
              ) : (
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {orgList.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5"
                    >
                      <span className="text-white text-xs truncate max-w-[100px]">
                        {item.name} ({item.division})
                      </span>
                      <button
                        onClick={() => handleDelete("organization", item.id)}
                        className="p-1.5 text-red-400 hover:bg-red-500/10 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/20 to-cyan-accent/10 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-xl flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white font-poppins mb-1">
              Pratinjau Website Publik
            </h3>
            <p className="text-gray-300 font-inter text-sm">
              Lihat langsung hasil perubahan data di halaman utama website.
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
