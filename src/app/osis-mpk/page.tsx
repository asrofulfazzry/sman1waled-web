"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Shield, Award, BookOpen } from "lucide-react";

interface Member {
  id: string;
  name: string;
  position: string;
  division: string;
  class: string;
}

export default function OsisMpkPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/organization")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const osisMembers = members.filter((m) => m.division === "OSIS");
  const mpkMembers = members.filter((m) => m.division === "MPK");

  return (
    <div className="pt-32 pb-16 bg-navy min-h-screen text-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent font-inter text-sm mb-6">
            <Users className="w-4 h-4" />
            <span>Keluarga Besar Siswa</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            OSIS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary">MPK SMAN 1 Waled</span>
          </h1>
          <p className="text-gray-400 font-inter text-base md:text-lg leading-relaxed">
            Pusat kepemimpinan, kreativitas, dan aspirasi siswa-siswi SMAN 1 Waled dalam mewujudkan lingkungan sekolah yang aktif, berkarakter, dan berprestasi.
          </p>
        </div>

        {/* Penjelasan OSIS & MPK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-2xl bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center text-cyan-accent mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-poppins mb-3">Apa itu OSIS?</h3>
            <p className="text-gray-300 font-inter text-sm leading-relaxed mb-4">
              <strong>Organisasi Siswa Intra Sekolah (OSIS)</strong> bertindak sebagai badan eksekutif di sekolah. OSIS memegang peran utama dalam merancang, mengkoordinir, dan melaksanakan berbagai program kerja kesiswaan, event seni/olahraga, serta memimpin kegiatan ekstrakurikuler.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-cyan-accent mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-poppins mb-3">Apa itu MPK?</h3>
            <p className="text-gray-300 font-inter text-sm leading-relaxed mb-4">
              <strong>Majelis Perwakilan Kelas (MPK)</strong> bertindak sebagai badan legislatif dan pengawas. MPK mengawasi kinerja kepengurusan OSIS, menyerap serta menyalurkan aspirasi seluruh siswa kepada pihak sekolah, serta memastikan program OSIS berjalan sesuai aturan.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-400 font-inter">Memuat struktur organisasi...</div>
        ) : (
          <div className="space-y-16">
            {/* Struktur OSIS */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8 pb-3 border-b border-white/10 flex items-center gap-3">
                <span className="w-3 h-3 bg-cyan-accent rounded-full"></span> Struktur Pengurus OSIS
              </h2>
              {osisMembers.length === 0 ? (
                <p className="text-gray-400 font-inter text-sm">Belum ada data pengurus OSIS yang dimasukkan.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {osisMembers.map((m) => (
                    <div key={m.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
                      <h4 className="text-lg font-bold font-poppins text-white mb-1">{m.name}</h4>
                      <p className="text-cyan-accent font-inter text-sm font-semibold mb-2">{m.position}</p>
                      <p className="text-gray-400 font-inter text-xs">Kelas: {m.class}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Struktur MPK */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8 pb-3 border-b border-white/10 flex items-center gap-3">
                <span className="w-3 h-3 bg-primary rounded-full"></span> Struktur Pengurus MPK
              </h2>
              {mpkMembers.length === 0 ? (
                <p className="text-gray-400 font-inter text-sm">Belum ada data pengurus MPK yang dimasukkan.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mpkMembers.map((m) => (
                    <div key={m.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
                      <h4 className="text-lg font-bold font-poppins text-white mb-1">{m.name}</h4>
                      <p className="text-cyan-accent font-inter text-sm font-semibold mb-2">{m.position}</p>
                      <p className="text-gray-400 font-inter text-xs">Kelas: {m.class}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}