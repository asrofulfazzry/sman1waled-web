"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Users } from "lucide-react";
import Link from "next/link";

export default function AddOrganizationMemberPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [division, setDivision] = useState("OSIS");
  const [studentClass, setStudentClass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/organization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, position, division, class: studentClass }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        alert("Gagal menambahkan pengurus");
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
              Tambah Pengurus OSIS / MPK
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 font-inter">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Contoh: Muhammad Rizky"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Divisi / Organisasi
                </label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
                >
                  <option value="OSIS" className="bg-navy">
                    OSIS (Eksekutif)
                  </option>
                  <option value="MPK" className="bg-navy">
                    MPK (Legislatif / Pengawas)
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kelas
                </label>
                <input
                  type="text"
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  required
                  placeholder="Contoh: XI IPS 2"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Jabatan
              </label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                placeholder="Contoh: Ketua OSIS / Sekretaris 1 / Anggota"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-accent hover:bg-white text-navy font-bold font-poppins py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-5 h-5" />{" "}
              {loading ? "Menyimpan..." : "Simpan Pengurus"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
