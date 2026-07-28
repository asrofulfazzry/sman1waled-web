"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Cek apakah halaman saat ini adalah area admin
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {/* Jika bukan halaman admin, tampilkan Navbar */}
      {!isAdmin && <Navbar />}

      <main className="min-h-screen">{children}</main>

      {/* Jika bukan halaman admin, tampilkan Footer */}
      {!isAdmin && <Footer />}
    </>
  );
}
