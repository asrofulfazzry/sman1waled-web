import Link from "next/link";
import { MapPin, Phone, Mail, Globe, Play, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-white/10 pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Profil Singkat */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,82,204,0.5)]">
                W
              </div>
              <span className="text-xl font-bold text-white font-poppins tracking-wide">
                SMAN 1 WALED
              </span>
            </div>
            <p className="font-inter leading-relaxed mb-6 max-w-md text-gray-400">
              Mewujudkan generasi berprestasi, berkarakter, dan berwawasan
              global di era digital. Cerdas, Berkarakter, Berprestasi.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Sosial Media"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-accent hover:text-navy hover:scale-110 transition-all duration-300"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-accent hover:text-navy hover:scale-110 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Video"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-accent hover:text-navy hover:scale-110 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Menu Cepat */}
          <div>
            <h4 className="text-white font-bold font-poppins mb-6 text-lg relative inline-block">
              Menu Cepat
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-accent rounded-full"></span>
            </h4>
            <ul className="space-y-3 font-inter mt-4">
              <li>
                <Link
                  href="/profil"
                  className="hover:text-cyan-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Profil Sekolah
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="hover:text-cyan-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Berita & Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/ppdb"
                  className="hover:text-cyan-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Info PPDB
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/login"
                  className="hover:text-cyan-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">›</span> Portal Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak Kami */}
          <div>
            <h4 className="text-white font-bold font-poppins mb-6 text-lg relative inline-block">
              Kontak Kami
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4 font-inter mt-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-accent shrink-0 mt-1" />
                <span className="text-sm">
                  Jl. Raya Waled, Kec. Waled, Kab. Cirebon, Jawa Barat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-accent shrink-0" />
                <span className="text-sm">(0231) XXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-accent shrink-0" />
                <span className="text-sm">info@sman1waled.sch.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Bawah Hak Cipta */}
        <div className="pt-8 border-t border-white/10 text-center text-sm font-inter flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>© {new Date().getFullYear()} SMAN 1 Waled. All rights reserved.</p>
          <p>
            Didesain dengan <span className="text-red-500">❤</span> untuk
            Pendidikan
          </p>
        </div>
      </div>
    </footer>
  );
}
