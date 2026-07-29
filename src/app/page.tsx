import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section dengan Background Foto */}
      <section className="relative w-full h-[85vh] min-h-[650px] flex items-center justify-center text-center overflow-hidden pt-20">
        {/* Background Gambar */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-[#050d1a]/70 to-[#050d1a]/40 z-1" />

        {/* Konten Utama */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center drop-shadow-xl">
          <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-accent/30 rounded-full bg-navy/30 backdrop-blur-sm shadow-inner">
            <p className="text-xs text-gray-200 font-inter tracking-wide uppercase flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
              </span>
              Website Resmi SMAN 1 Waled
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight drop-shadow-2xl">
            Selamat Datang di <br />
            <span className="text-cyan-accent">SMAN 1 Waled</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-12 font-inter leading-relaxed font-medium">
            Mewujudkan generasi berprestasi, berkarakter, dan berwawasan global
            di era digital.
          </p>

          <Link
            href="/ppdb"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-white font-semibold text-xl font-inter shadow-[0_10px_30px_-10px_rgba(0,82,204,0.5)] hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Informasi PPDB
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Section Pendukung di bawah */}
      <section className="py-20 bg-navy">
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
