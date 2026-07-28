"use client";

import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  Calendar,
  UserPlus,
  FileBadge,
  PhoneCall,
} from "lucide-react";

export default function PPDBPage() {
  const alurPendaftaran = [
    {
      title: "Pendaftaran Online",
      desc: "Calon siswa mengisi formulir pendaftaran melalui portal PPDB Provinsi/Sekolah.",
    },
    {
      title: "Verifikasi Berkas",
      desc: "Panitia melakukan verifikasi dokumen yang telah diunggah oleh calon siswa.",
    },
    {
      title: "Seleksi & Pemeringkatan",
      desc: "Proses seleksi berdasarkan nilai rapor (Jalur Prestasi) atau jarak (Jalur Zonasi).",
    },
    {
      title: "Pengumuman Hasil",
      desc: "Hasil seleksi diumumkan secara online di website resmi.",
    },
    {
      title: "Daftar Ulang",
      desc: "Siswa yang lolos wajib melakukan daftar ulang dengan membawa berkas asli.",
    },
  ];

  const persyaratan = [
    "Fotokopi Akte Kelahiran",
    "Fotokopi Kartu Keluarga (KK)",
    "Buku Rapor SMP/MTs asli & fotokopi (Semester 1-5)",
    "Surat Keterangan Lulus (SKL)",
    "Pas foto berwarna ukuran 3x4 dan 4x6",
    "Sertifikat/Piagam Prestasi (khusus Jalur Prestasi)",
  ];

  return (
    <div className="pt-32 pb-24 bg-navy min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header PPDB */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <UserPlus className="w-10 h-10 text-cyan-accent" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins mb-6"
          >
            Informasi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary">
              PPDB
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-inter max-w-2xl mx-auto text-lg"
          >
            Pusat informasi Penerimaan Peserta Didik Baru SMAN 1 Waled Tahun
            Ajaran 2026/2027. Persiapkan diri Anda untuk menjadi bagian dari
            generasi berprestasi.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Kolom Kiri: Alur & Jadwal */}
          <div className="lg:col-span-2 space-y-10">
            {/* Alur Pendaftaran */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/20 rounded-xl text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white font-poppins">
                  Alur Pendaftaran
                </h2>
              </div>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.125rem] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {alurPendaftaran.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-navy border border-cyan-accent text-cyan-accent font-bold text-sm z-10 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                      {index + 1}
                    </div>
                    <div className="pl-14 pt-1.5">
                      <h3 className="text-lg font-bold text-white font-poppins mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 font-inter text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Kolom Kanan: Persyaratan & Kontak */}
          <div className="space-y-10">
            {/* Syarat Pendaftaran */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-accent/20 rounded-xl text-cyan-accent">
                  <FileBadge className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white font-poppins">
                  Persyaratan Berkas
                </h2>
              </div>
              <ul className="space-y-4">
                {persyaratan.map((syarat, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-inter text-sm">
                      {syarat}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Kotak Informasi & Bantuan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-primary/20 border border-primary/30 rounded-3xl p-8 backdrop-blur-sm shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <PhoneCall className="w-24 h-24 text-cyan-accent" />
              </div>
              <h3 className="text-lg font-bold text-white font-poppins mb-4 relative z-10">
                Butuh Bantuan?
              </h3>
              <p className="text-gray-300 font-inter text-sm mb-6 relative z-10">
                Jika Anda memiliki pertanyaan seputar proses PPDB, panitia kami
                siap membantu pada jam kerja (08.00 - 14.00 WIB).
              </p>
              <button className="w-full py-3 bg-cyan-accent text-navy font-bold rounded-xl hover:bg-white transition-colors relative z-10 flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" /> Hubungi Panitia
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
