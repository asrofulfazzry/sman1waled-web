"use client";

import { motion } from "framer-motion";
import {
  Tent,
  Flag,
  HeartPulse,
  Newspaper,
  Mountain,
  BookOpen,
  Palette,
  Music,
  Lightbulb,
  Dumbbell,
} from "lucide-react";

export default function Extracurricular() {
  const exkuls = [
    {
      name: "Pramuka",
      icon: <Tent className="w-7 h-7 text-cyan-accent" />,
      color: "bg-cyan-accent/10",
    },
    {
      name: "Paskibra",
      icon: <Flag className="w-7 h-7 text-primary" />,
      color: "bg-primary/20",
    },
    {
      name: "PMR",
      icon: <HeartPulse className="w-7 h-7 text-cyan-accent" />,
      color: "bg-cyan-accent/10",
    },
    {
      name: "Jurnalistik",
      icon: <Newspaper className="w-7 h-7 text-primary" />,
      color: "bg-primary/20",
    },
    {
      name: "Siwapala",
      icon: <Mountain className="w-7 h-7 text-cyan-accent" />,
      color: "bg-cyan-accent/10",
    },
    {
      name: "Rohis",
      icon: <BookOpen className="w-7 h-7 text-primary" />,
      color: "bg-primary/20",
    },
    {
      name: "Munggaran",
      icon: <Palette className="w-7 h-7 text-cyan-accent" />,
      color: "bg-cyan-accent/10",
    },
    {
      name: "Marching Band",
      icon: <Music className="w-7 h-7 text-primary" />,
      color: "bg-primary/20",
    },
    {
      name: "BinaCerdika",
      icon: <Lightbulb className="w-7 h-7 text-cyan-accent" />,
      color: "bg-cyan-accent/10",
    },
    {
      name: "Olahraga",
      icon: <Dumbbell className="w-7 h-7 text-primary" />,
      color: "bg-primary/20",
    },
  ];

  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4"
          >
            Ekstrakurikuler
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-primary mx-auto rounded-full"
          ></motion.div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-inter">
            Kembangkan bakat, minat, dan potensi diri melalui berbagai pilihan
            kegiatan ekstrakurikuler unggulan di SMAN 1 Waled.
          </p>
        </div>

        {/* Menggunakan grid-cols-5 di layar besar agar 10 kotak terbagi rata menjadi 2 baris */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {exkuls.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all group flex flex-col items-center text-center shadow-lg hover:border-cyan-accent/30"
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 border border-white/5`}
              >
                {item.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-white font-poppins">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
