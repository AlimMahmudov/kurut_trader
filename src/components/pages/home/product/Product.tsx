"use client";

import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Product = () => {
  return (
    <section id="product" className="py-32 bg-black relative overflow-hidden">
      {/* Фоновые элементы свечения */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="relative group border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm p-8 md:p-16 lg:p-24 overflow-hidden"
        >
          {/* Анимированная полоса сверху через CSS */}
          <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-0 group-[.aos-animate]:w-full transition-[width] duration-[1500ms] delay-500"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Limited Access
              </div>

              <h2 className="text-white text-5xl md:text-7xl font-black mb-6 uppercase italic leading-[0.9] tracking-tighter">
                VIP{" "}
                <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                  SIGNALS
                </span>{" "}
                GROUP
              </h2>

              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Закрытое комьюнити с проходимостью сделок{" "}
                <span className="text-white font-bold">85%+</span>. Только
                авторская аналитика и точки входа.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Ежедневные сетапы",
                  "Доступ к закрытому чату",
                  "Risk Management сопровождение",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-300 uppercase tracking-wider"
                  >
                    <FaCheckCircle className="text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col items-center lg:items-end">
              <div className="relative z-10 text-center lg:text-right">
                <div className="mb-2 text-gray-500 text-sm uppercase tracking-widest font-bold">
                  Lifetime Access
                </div>
                <div className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">
                  $99<span className="text-2xl text-yellow-500">.00</span>
                </div>

                <button className="group relative flex items-center gap-4 bg-yellow-500 text-black font-black py-6 px-12 uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] active:scale-95 hover:scale-[1.02]">
                  Вступить в группу
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Фоновое слово "PROFIT" */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/[0.02] select-none italic tracking-tighter -z-10">
                PROFIT
              </span>
            </div>
          </div>

          {/* Декоративные линии сетки */}
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Product;
