"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/80 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-white backdrop-blur-sm">
            W
          </div>
          <span className="text-xl font-bold text-white font-poppins tracking-wide">
            SMAN 1 WALED
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
          <Link
            href="/profil"
            className="hover:text-cyan-accent transition-colors"
          >
            Profil
          </Link>
          <Link
            href="/guru"
            className="hover:text-cyan-accent transition-colors"
          >
            Guru & Staf
          </Link>
          <Link
            href="/berita"
            className="hover:text-cyan-accent transition-colors"
          >
            Berita
          </Link>
          <Link
            href="/ppdb"
            className="hover:text-cyan-accent transition-colors"
          >
            PPDB
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-gray-200 hover:text-cyan-accent transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <Link
            href="/admin/login"
            className="px-5 py-2 text-sm bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white backdrop-blur-sm transition-all"
          >
            Portal Admin
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
