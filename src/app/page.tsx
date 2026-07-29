import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section dengan Background Foto Cerah */}
      <section className="relative w-full h-[90vh] min-h-[650px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Gambar Penuh */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />

        {/* Overlay Tipis agar foto aslinya yang cerah tetap bersinar terang */}
        <div className="absolute inset-0 bg-[#050d1a]/30 z-1" />

        {/* Konten Hero dengan Drop Shadow Kuat pada Teks */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center pt-20">
          <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-accent/40 rounded-full bg-navy/60 backdrop-blur-md shadow-lg">
            <p className="text-xs text-white font-inter tracking-wide uppercase flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
              </span>
              Website Resmi SMAN 1 Waled
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            Selamat Datang di <br />
            <span className="text-cyan-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              SMAN 1 Waled
            </span>
          </h2>

          <p className="text-base md:text-xl text-gray-100 max-w-3xl mx-auto mb-10 font-inter leading-relaxed font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Mewujudkan generasi berprestasi, berkarakter, dan berwawasan global
            di era digital.
          </p>

          <Link
            href="/ppdb"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-semibold text-lg font-inter shadow-[0_10px_30px_-10px_rgba(0,82,204,0.8)] hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Informasi PPDB
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Section Pendukung di bawah */}
      <section className="py-20 bg-navy border-t border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#050d1a] p-8 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">
              Sambutan Kepala Sekolah
            </h3>
            <p className="text-gray-400 text-sm font-inter">
              Selamat datang di portal informasi resmi SMAN 1 Waled...
            </p>
            <Link
              href="/profil"
              className="text-cyan-accent text-xs mt-4 inline-block hover:underline"
            >
              Baca Selengkapnya
            </Link>
          </div>
          <div className="bg-[#050d1a] p-8 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">
              Berita Terbaru
            </h3>
            <ul className="text-gray-400 text-sm font-inter space-y-2">
              <li>Pelaksanaan MPLS Tahun Ajaran Baru...</li>
              <li>Tim Ekstrakurikuler SMAN 1 Waled Berprestasi...</li>
            </ul>
          </div>
          <div className="bg-[#050d1a] p-8 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-xl font-bold font-poppins text-white mb-4">
              Jadwal Sekolah
            </h3>
            <p className="text-gray-400 text-sm font-inter">
              Senin - Jumat: 07.00 - 16.00 WIB
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
