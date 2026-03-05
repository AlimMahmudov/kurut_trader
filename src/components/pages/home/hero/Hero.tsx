"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50" // Прозрачность 50% для глубины
        >
          <source src="/kurut.mp4" type="video/mp4" />
        </video>
        {/* Затемнение и градиент поверх видео */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
      </div>

      {/* Световые пятна (оставляем для доп. объема) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[150px] z-20"></div>

      <div className="relative z-30 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-4 uppercase italic">
            KURUT{" "}
            <span className="text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.7)]">
              TRADER
            </span>
          </h1>
          <p className="text-gray-300 tracking-[0.5em] uppercase text-xs md:text-sm font-bold">
            Kyrgyzstan • Professional Trading
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col md:flex-row gap-6 justify-center"
        >
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 px-12 transition-all duration-300 shadow-[0_0_30px_rgba(234,179,8,0.3)] uppercase tracking-widest text-sm">
            НАЧАТЬ ОБУЧЕНИЕ
          </button>
          <button className="border border-white/20 hover:bg-white/10 text-white font-bold py-4 px-12 transition-all backdrop-blur-md uppercase tracking-widest text-sm">
            СМОТРЕТЬ СИГНАЛЫ
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-20 flex gap-1.5 opacity-40 z-30 items-end h-[120px]">
        <motion.div
          animate={{ height: [32, 44, 32] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 bg-red-500 rounded-full"
        />
        <motion.div
          animate={{ height: [50, 35, 50] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-2 bg-green-500 rounded-full"
        />
        <motion.div
          animate={{ height: [40, 55, 40] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-2 bg-red-500 rounded-full"
        />
        <motion.div
          animate={{ height: [32, 44, 32] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 bg-green-500 rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
