"use client";

import React from "react";
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from "react-icons/fa";
// Убедись, что твой Button поддерживает стандартные пропсы или используй обычный <button>
import Button from "@/components/ui/button/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Динамическое свечение на фоне через CSS Animation */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px] -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        {/* Левая часть: Инфо */}
        <div className="flex flex-col justify-between">
          <div>
            <span
              data-aos="fade-right"
              className="text-white text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]"
            >
              Live Trading & Signals
            </span>

            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none uppercase mb-8"
            >
              ПОЛУЧИТЕ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                ПРИБЫЛЬ.
              </span>
            </h2>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-gray-400 text-lg max-w-sm mb-12"
            >
              Готовы выйти на новый уровень? Оставьте сообщение или свяжитесь со
              мной в соцсетях.
            </p>
          </div>

          <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
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
              <a
                href="#"
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-green-500 transition group hover:-translate-y-1 duration-300"
              >
                <FaWhatsapp size={16} className="text-yellow-500" /> WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:text-pink-500 transition group hover:-translate-y-1 duration-300"
              >
                <FaInstagram size={16} className="text-yellow-500" /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Правая часть: Форма */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 border border-white/5 relative group hover:border-yellow-500/30 transition-all duration-500"
        >
          {/* Свечи графика на CSS */}
          <div className="absolute top-6 right-8 flex gap-1.5 opacity-30">
            <div className="w-1 bg-green-500 rounded-full animate-pulse-h-1" />
            <div className="w-1 bg-green-500 rounded-full animate-pulse-h-2" />
            <div className="w-1 bg-red-500 rounded-full animate-pulse-h-3" />
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

            <div className="active:scale-95 transition-transform duration-200">
              <Button className="w-full py-6 bg-yellow-500 text-black font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(234,179,8,0.2)] hover:bg-yellow-400 transition-all hover:scale-[1.01]">
                SEND REQUEST
                <FaTelegramPlane className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-h {
          0%,
          100% {
            height: 12px;
          }
          50% {
            height: 28px;
          }
        }
        .animate-pulse-h-1 {
          animation: pulse-h 2s infinite;
        }
        .animate-pulse-h-2 {
          animation: pulse-h 2.5s infinite reverse;
        }
        .animate-pulse-h-3 {
          animation: pulse-h 1.8s infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.15;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
