import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section dengan Foto sebagai Background Utama */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-end pb-12 pt-28 overflow-hidden bg-navy">
        {/* Background Foto dengan Posisi Fokus yang Pas & Opacity */}
        <div
          className="absolute inset-0 w-full h-full z-0 opacity-45"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Gradient Overlay agar teks terbaca sangat jelas di atas background */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent z-1" />

        {/* Konten Teks di bagian bawah background */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-4 border border-cyan-accent/30 rounded-full bg-navy/50 backdrop-blur-sm shadow-inner">
            <p className="text-[10px] md:text-xs text-gray-200 font-inter tracking-wide uppercase flex items-center gap-2 justify-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
              </span>
              Website Resmi SMAN 1 Waled
            </p>
          </div>

          <h2 className="text-3xl md:text-6xl font-bold font-poppins text-white mb-4 leading-tight drop-shadow-lg">
            Selamat Datang di <br />
            <span className="text-cyan-accent">SMAN 1 Waled</span>
          </h2>

          <p className="text-sm md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-inter leading-relaxed drop-shadow-md">
            Mewujudkan generasi berprestasi, berkarakter, dan berwawasan global
            di era digital.
          </p>

          <Link
            href="/ppdb"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-semibold text-base md:text-lg font-inter shadow-[0_10px_30px_-10px_rgba(0,82,204,0.5)] hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Informasi PPDB
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Section Pendukung di Bawahnya */}
      <section className="py-16 bg-[#050d1a] border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-navy p-6 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-lg font-bold font-poppins text-white mb-3">
              Sambutan Kepala Sekolah
            </h3>
            <p className="text-gray-400 text-sm font-inter leading-relaxed">
              Selamat datang di portal informasi resmi SMAN 1 Waled...
            </p>
            <Link
              href="/profil"
              className="text-cyan-accent text-xs mt-4 inline-block hover:underline"
            >
              Baca Selengkapnya
            </Link>
          </div>
          <div className="bg-navy p-6 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-lg font-bold font-poppins text-white mb-3">
              Berita Terbaru
            </h3>
            <ul className="text-gray-400 text-sm font-inter space-y-2.5 text-gray-300">
              <li>Pelaksanaan MPLS Tahun Ajaran Baru...</li>
              <li>Tim Ekstrakurikuler SMAN 1 Waled Berprestasi...</li>
            </ul>
          </div>
          <div className="bg-navy p-6 rounded-3xl border border-white/5 shadow-xl">
            <h3 className="text-lg font-bold font-poppins text-white mb-3">
              Jadwal Sekolah
            </h3>
            <p className="text-gray-400 text-sm font-inter leading-relaxed text-gray-300">
              Senin - Jumat: 07.00 - 16.00 WIB
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
