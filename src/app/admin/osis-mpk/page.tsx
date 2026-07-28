"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function AdminOsisMpkPage() {
  return (
    <div className="min-h-screen bg-navy p-6 md:p-10 text-white">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-cyan-accent hover:text-white transition-colors mb-6 text-sm font-inter"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Dashboard
        </Link>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl">
          <h1 className="text-2xl font-bold font-poppins mb-4">
            Kelola OSIS & MPK
          </h1>
          <p className="text-gray-400 font-inter text-sm">
            Gunakan tombol tambah dari dashboard utama untuk memasukkan
            pengurus.
          </p>
        </div>
      </div>
    </div>
  );
}
