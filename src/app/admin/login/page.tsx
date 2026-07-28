"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  User,
  ShieldCheck,
  ArrowRight,
  Home,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi kredensial (bisa diubah sesuai kebutuhan)
    if (username === "admin" && password === "fazzry") {
      // Simpan status login di browser
      localStorage.setItem("isAdminLoggedIn", "true");
      router.push("/admin");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full mix-blend-multiply filter blur-[250px] opacity-20 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Tombol Kembali */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-accent hover:text-white transition-colors text-sm font-inter mb-8"
        >
          <Home className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        {/* Panel Login */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-cyan-accent/10 border border-cyan-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <ShieldCheck className="w-8 h-8 text-cyan-accent" />
            </div>
            <h1 className="text-2xl font-bold text-white font-poppins mb-2">
              Portal Administrator
            </h1>
            <p className="text-gray-400 text-sm font-inter">
              Silakan masuk untuk mengelola website
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm font-inter"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Input Username */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 font-inter">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white font-inter rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-cyan-accent/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 font-inter">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="sman1waled"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white font-inter rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-cyan-accent/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-cyan-accent hover:bg-white text-navy font-bold font-poppins py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 group cursor-pointer"
            >
              Masuk Sistem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center border-t border-white/10 pt-6">
            <p className="text-xs text-gray-500 font-inter">
              Default Login: <span className="text-cyan-accent">admin</span> /{" "}
              <span className="text-cyan-accent">sman1waled</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
