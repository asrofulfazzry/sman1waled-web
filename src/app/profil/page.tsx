"use client";

import { motion } from "framer-motion";
import {
  History,
  Building2,
  MapPin,
  GraduationCap,
  Phone,
  Mail,
} from "lucide-react";
import VisionMission from "@/components/sections/VisionMission";

export default function ProfilPage() {
  return (
    <div className="pt-32 pb-16 bg-navy min-h-screen">
      {/* Header Halaman */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins mb-6"
        >
          Profil{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary">
            Sekolah
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-primary mx-auto rounded-full"
        ></motion.div>
      </div>

      {/* Bagian Sejarah */}
      <div className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm max-w-4xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group hover:border-cyan-accent/30 transition-colors"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <History className="w-40 h-40 text-cyan-accent" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                <History className="w-7 h-7 text-cyan-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-poppins">
                Sejarah Singkat
              </h2>
            </div>
            <div className="space-y-4 text-gray-300 font-inter leading-relaxed text-lg">
              <p>
                SMA Negeri 1 Waled pertama kali menerima peserta didik pada tahun 2002/2003
                tanggal 17 Juli 2002 yang saat itu merupakan filial dari SMA Negeri 1 Ciledug Kelas Jauh.

                Angkatan pertama menerima tiga rombongan belajar,dengan pelaksana KBM pad siang hari yang
                menempati ruangan kelas yang digunakan SMA Negeri 1 Ciledug pada pagi hari.              </p>
              <p>
                Keputusan BUPATI Cirebon tanggal 15 September 2003 tentang putusan peningkatan Status SMA Negeri 1 Waled.

                Perkembangan jumlah siswa dan kelengkapan sarana terus meningkat setiap tahun, serta mengalami estafeta 
                kepemimpinan yang sangat dinamis hingga pada tahun pelajaran 2018/2019 SMA Negeri 1 Waled memiliki
                26 rombongan belajar dengan fasilitas yang cukup memadai.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bagian Identitas Sekolah */}
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white font-poppins mb-8 text-center">
            Identitas Sekolah
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                label: "Nama Sekolah",
                value: "SMAN 1 Waled",
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                label: "Akreditasi",
                value: "A (Amat Baik)",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                label: "Alamat",
                value: "Jalan Raya  Dewi Sartika No. 03 Waled Kota",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                label: "Telepon",
                value: "(0231) 8303284",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                label: "Email",
                value: "sman1waled @yahoo.co.id",
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                label: "Status",
                value: "Negeri",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 hover:border-cyan-accent/20 transition-all shadow-lg group"
              >
                <div className="text-cyan-accent shrink-0 mt-1 p-2 bg-cyan-accent/10 rounded-lg group-hover:bg-cyan-accent group-hover:text-navy transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-inter mb-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-white font-poppins">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Kita panggil ulang Visi Misi di sini agar halamannya lengkap! */}
      <VisionMission />
    </div>
  );
}
