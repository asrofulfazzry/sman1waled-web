"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Award } from "lucide-react";
import Link from "next/link";

export default function AddAchievementPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Akademik");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/achievements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, description, date }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        alert("Gagal menambahkan prestasi");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy p-6 md:p-10 text-white">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-cyan-accent hover:text-white transition-colors mb-6 text-sm font-inter"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Dashboard
        </Link>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-cyan-accent/10 rounded-2xl border border-cyan-accent/20 text-cyan-accent">
              <Award className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold font-poppins">
              Tambah Prestasi Sekolah
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 font-inter">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nama / Judul Prestasi
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Contoh: Juara 1 Olimpiade Matematika Tingkat Provinsi"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kategori
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
                >
                  <option value="Akademik" className="bg-navy">
                    Akademik
                  </option>
                  <option value="Non-Akademik" className="bg-navy">
                    Non-Akademik
                  </option>
                  <option value="Olahraga" className="bg-navy">
                    Olahraga
                  </option>
                  <option value="Seni & Kreativitas" className="bg-navy">
                    Seni & Kreativitas
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Waktu / Tanggal
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  placeholder="Contoh: Mei 2026"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Deskripsi / Keterangan
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                placeholder="Tulis detail prestasi siswa..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-accent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-accent hover:bg-white text-navy font-bold font-poppins py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-5 h-5" />{" "}
              {loading ? "Menyimpan..." : "Simpan Prestasi"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
