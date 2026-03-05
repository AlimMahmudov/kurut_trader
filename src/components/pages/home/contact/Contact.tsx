"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Button from "@/components/ui/button/Button";

const Contact = () => {
  // Анимация для текстовых блоков
  const textVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Динамическое свечение на фоне */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-500 rounded-full blur-[150px] -z-10"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        {/* Левая часть: Инфо с анимацией появления */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <motion.span
              variants={textVariant}
              className="text-white text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            >
              Live Trading & Signals
            </motion.span>

            <motion.h2
              variants={textVariant}
              className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none uppercase mb-8"
            >
              ПОЛУЧИТЕ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                ПРИБЫЛЬ.
              </span>
            </motion.h2>

            <motion.p
              variants={textVariant}
              className="text-gray-400 text-lg max-w-sm mb-12"
            >
              Готовы выйти на новый уровень? Оставьте сообщение или свяжитесь со
              мной в соцсетях.
            </motion.p>
          </div>

          <motion.div variants={textVariant} className="space-y-8">
            <div className="group cursor-pointer">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2 group-hover:text-yellow-500 transition-colors">
                My Telegram Channel
              </span>
              <a
                href="#"
                className="text-xl md:text-3xl font-bold hover:text-yellow-500 transition-all flex items-center gap-3"
              >
                @kurut_trader{" "}
                <FaTelegramPlane
                  size={20}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>

            <div className="flex gap-8 items-center">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-green-500 transition group"
              >
                <FaWhatsapp size={16} className="text-yellow-500" /> WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-pink-500 transition group"
              >
                <FaInstagram size={16} className="text-yellow-500" /> Instagram
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Правая часть: Форма с эффектом стекла */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 border border-white/5 relative group hover:border-yellow-500/30 transition-all duration-500"
        >
          {/* Декоративные свечи графика, которые "пульсируют" */}
          <div className="absolute top-6 right-8 flex gap-1.5 opacity-30">
            <motion.div
              animate={{ height: [12, 24, 12] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 bg-green-500 rounded-full"
            />
            <motion.div
              animate={{ height: [30, 15, 30] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 bg-green-500 rounded-full"
            />
            <motion.div
              animate={{ height: [20, 35, 20] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1 bg-red-500 rounded-full"
            />
          </div>

          <form className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2 group-focus-within:text-yellow-500 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-yellow-500 transition-colors placeholder:text-gray-800 text-white"
                />
              </div>
              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2 group-focus-within:text-yellow-500 transition-colors">
                  Telegram / WhatsApp
                </label>
                <input
                  type="text"
                  placeholder="@handle / +996"
                  className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-yellow-500 transition-colors placeholder:text-gray-800 text-white"
                />
              </div>
            </div>

            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2 group-focus-within:text-yellow-500 transition-colors">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Какая ваша цель?"
                className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-yellow-500 transition-colors resize-none placeholder:text-gray-800 text-white"
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full py-6 bg-yellow-500 text-black font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(234,179,8,0.2)] hover:bg-yellow-400 transition-all">
                SEND REQUEST
                <FaTelegramPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
