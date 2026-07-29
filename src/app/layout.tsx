import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Website Resmi SMAN 1 Waled",
  description: "Portal Informasi Resmi SMAN 1 Waled",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-navy text-white font-inter antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-[#050d1a] border-t border-white/10 py-12 text-gray-400 font-inter text-sm">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold font-poppins text-base mb-3">
                SMAN 1 WALED
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Mewujudkan generasi berprestasi, berkarakter, dan berwawasan
                global di era digital.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold font-poppins text-sm mb-3">
                Tautan Cepat
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/profil"
                    className="hover:text-cyan-accent transition-colors"
                  >
                    Profil Sekolah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guru"
                    className="hover:text-cyan-accent transition-colors"
                  >
                    Data Guru & Staf
                  </Link>
                </li>
                <li>
                  <Link
                    href="/berita"
                    className="hover:text-cyan-accent transition-colors"
                  >
                    Berita & Artikel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/prestasi-sekolah"
                    className="hover:text-cyan-accent transition-colors"
                  >
                    Prestasi Sekolah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/osis-mpk"
                    className="hover:text-cyan-accent transition-colors"
                  >
                    OSIS & MPK
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold font-poppins text-sm mb-3">
                Kontak
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Jl. Kh. Hasyim Asy'ari No. 1 Waled, Kab. Cirebon, Jawa Barat.
              </p>
            </div>
          </div>
          <div className="container mx-auto px-6 border-t border-white/5 pt-6 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} SMAN 1 Waled. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
