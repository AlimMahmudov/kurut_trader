"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Переключаем состояние, если проскроллили больше 50px
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "О нас", href: "#about" },
    { name: "Стратегия", href: "#strategy" },
    { name: "Продукты", href: "#product" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black py-4" // Чистый черный фон без размытия
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <span className="text-white font-black text-2xl tracking-tighter italic uppercase transition-transform duration-300 group-hover:scale-105">
            KURUT{" "}
            <span className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
              TRADER
            </span>
          </span>
        </div>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] w-10 h-10 flex flex-col justify-center items-center group outline-none"
          aria-label="Menu"
        >
          <span
            className={`w-8 h-[2px] bg-white mb-2 transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-[10px] bg-yellow-500" : ""
            }`}
          />
          <span
            className={`w-8 h-[2px] bg-white mb-2 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-8 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-[10px] bg-yellow-500" : ""
            }`}
          />
        </button>

        {/* Fullscreen Overlay Menu (Тоже чистый черный) */}
        <div
          className={`fixed inset-0 bg-black transition-all duration-500 flex flex-col items-center justify-center ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-5xl md:text-7xl font-black italic uppercase transition-all duration-500 hover:text-yellow-500 text-white tracking-tighter hover:skew-x-[-10deg] ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div
            className={`mt-20 text-gray-700 tracking-[0.8em] text-[10px] uppercase transition-all duration-1000 delay-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Elite Trading Community
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
