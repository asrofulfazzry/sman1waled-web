"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050d1a]/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Wadah logo berwarna putih bersih */}
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-md p-1">
            <img
              src="/images/logo.jpg"
              alt="Logo SMAN 1 Waled"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="font-bold font-poppins text-white text-base tracking-wide">
              SMAN 1 WALED
            </h1>
            <p className="text-[10px] text-cyan-accent tracking-widest uppercase">
              Kabupaten Cirebon
            </p>
          </div>
        </Link>

        {/* Desktop Navigasi */}
        <nav className="hidden md:flex items-center gap-7 font-inter text-sm">
          <Link
            href="/profil"
            className="text-gray-300 hover:text-cyan-accent transition-colors"
          >
            Profil
          </Link>
          <Link
            href="/guru"
            className="text-gray-300 hover:text-cyan-accent transition-colors"
          >
            Guru & Staf
          </Link>
          <Link
            href="/berita"
            className="text-gray-300 hover:text-cyan-accent transition-colors"
          >
            Berita
          </Link>
          <Link
            href="/prestasi-sekolah"
            className="text-gray-300 hover:text-cyan-accent transition-colors"
          >
            Prestasi
          </Link>
          <Link
            href="/osis-mpk"
            className="text-gray-300 hover:text-cyan-accent transition-colors"
          >
            OSIS & MPK
          </Link>
          <Link
            href="/ppdb"
            className="text-gray-300 hover:text-gray-100 transition-colors"
          >
            PPDB
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/admin"
            className="px-4 py-2 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent hover:bg-cyan-accent hover:text-navy transition-all font-inter text-xs font-semibold"
          >
            Portal Admin
          </Link>
        </div>

        {/* Tombol Menu Hamburger untuk HP */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-cyan-accent" />
          ) : (
            <Menu className="w-6 h-6 text-cyan-accent" />
          )}
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#050d1a] border-b border-white/10 px-6 py-5 space-y-4 font-inter text-sm shadow-2xl animate-in fade-in slide-in-from-top-4">
          <Link
            href="/profil"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-cyan-accent transition-colors py-2 border-b border-white/5"
          >
            Profil Sekolah
          </Link>
          <Link
            href="/guru"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-cyan-accent transition-colors py-2 border-b border-white/5"
          >
            Data Guru & Staf
          </Link>
          <Link
            href="/berita"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-cyan-accent transition-colors py-2 border-b border-white/5"
          >
            Berita & Artikel
          </Link>
          <Link
            href="/prestasi-sekolah"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-cyan-accent transition-colors py-2 border-b border-white/5"
          >
            Prestasi Sekolah
          </Link>
          <Link
            href="/osis-mpk"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-cyan-accent transition-colors py-2 border-b border-white/5"
          >
            OSIS & MPK
          </Link>
          <Link
            href="/ppdb"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-cyan-accent transition-colors py-2 border-b border-white/5"
          >
            PPDB
          </Link>
          <div className="pt-2">
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full px-4 py-2.5 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent hover:bg-cyan-accent hover:text-navy transition-all font-semibold"
            >
              Portal Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
