"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black pt-10 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Линия сверху */}
        <div className="w-full h-[1px] bg-white/5 mb-6"></div>

        {/* Инфо-слой */}
        <div className="flex justify-between items-center text-[10px] font-black uppercase italic tracking-[0.2em] text-white/90">
          <Link
            href="/"
            target="_blank"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Developed by <span className="text-red-600">TwinCore</span>
          </Link>

          <p>
            © 2026 <span className="text-red-600">Sultan</span>
          </p>
        </div>
      </div>

      {/* Огромный текст, уходящий вниз */}
      <div className="flex justify-center items-center select-none pointer-events-none transition-transform duration-700">
        <h2 className="text-[20vw] font-black italic leading-[0.8] text-[#080808] uppercase tracking-[-0.07em] mb-[-100px]">
          CONNECT
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
