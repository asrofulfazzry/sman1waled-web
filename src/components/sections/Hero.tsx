"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy text-white pt-20">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
      <div
        className="absolute top-0 -right-4 w-72 h-72 bg-cyan-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-accent animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-gray-200">
              Website Resmi SMAN 1 Waled
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins">
            Selamat Datang di <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-primary mt-2 inline-block">
              SMAN 1 Waled
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Mewujudkan generasi berprestasi, berkarakter, dan berwawasan global
            di era digital.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/ppdb"
              className="px-8 py-4 bg-primary hover:bg-primary-dark transition-all rounded-full font-semibold flex items-center gap-2"
            >
              Info PPDB <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
