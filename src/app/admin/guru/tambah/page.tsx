"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Users } from "lucide-react";
import Link from "next/link";

export default function AddTeacherPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [nip, setNip] = useState("");
  const [subject, setSubject] = useState("");
  const [position, setPosition] = useState("Guru Mata Pelajaran");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, nip, subject, position }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        alert("Gagal menambahkan data guru");
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
              <Users className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold font-poppins">
              Tambah Tenaga Pendidik / Guru
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 font-inter">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nama Lengkap & Gelar
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Contoh: Dr. H. Ahmad Sutisna, M.Pd."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  NIP (Opsional / Kosongkan jika Honorer)
                </label>
                <input
                  type="text"
                  value={nip}
                  onChange={(e) => setNip(e.target.value)}
                  placeholder="Contoh: 198301202... atau -"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mata Pelajaran
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="Contoh: Matematika / Biologi"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Jabatan / Posisi
              </label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                placeholder="Contoh: Guru Mata Pelajaran / Wali Kelas"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-accent hover:bg-white text-navy font-bold font-poppins py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-5 h-5" />{" "}
              {loading ? "Menyimpan..." : "Simpan Data Guru"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
