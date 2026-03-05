"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// 1. Импортируем тип Variants
import { motion, AnimatePresence, Variants } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Strategy", href: "#strategy" },
    { name: "Product", href: "#product" },
    { name: "Contact", href: "#contact" },
  ];

  // 2. Явно указываем тип Variants для menuVariants
  const menuVariants: Variants = {
    closed: {
      clipPath: "circle(0% at 95% 5%)",
      transition: {
        type: "tween",
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      clipPath: "circle(150% at 95% 5%)",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // 3. Для динамических вариантов (с аргументом i) используем тип Variants
  const linkVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      x: 10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[70] bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col items-start group relative z-[80]"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white">
                KURUT{" "}
                <span className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                  TRADER
                </span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.5em] text-gray-500 -mt-1 ml-0.5 font-bold">
                Kyrgyzstan
              </span>
            </motion.div>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[80] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white rounded-full block origin-center transition-colors group-hover:bg-yellow-500"
              style={{ backgroundColor: isOpen ? "#EAB308" : "white" }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              className="w-8 h-0.5 bg-white rounded-full block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white rounded-full block origin-center"
              style={{ backgroundColor: isOpen ? "#EAB308" : "white" }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[60] bg-[#080808] flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <nav className="relative z-10 flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i} // Передаем индекс для linkVariants
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter transition-all hover:italic"
                  >
                    <span className="relative z-10 group-hover:text-yellow-500 transition-colors duration-300">
                      {link.name}
                    </span>
                    <span className="absolute left-0 top-0 -z-10 text-white/5 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                      {link.name}
                    </span>
                    <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-bold text-yellow-500 tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <div className="flex gap-8 text-gray-500 uppercase text-[10px] tracking-[0.4em] font-black">
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Telegram
                </a>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Instagram
                </a>
              </div>
              <div className="w-10 h-[1px] bg-yellow-500/20"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
