"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Импорт компонентов
import Hero from "./hero/Hero";
import About from "./about/About";
import Product from "./product/Product";
import Strategy from "./strategy/Strategy";
import Contact from "./contact/Contact";

const HomeComponents = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // длительность анимации (мс)
      once: true, // анимация срабатывает только один раз при скролле
      easing: "ease-in-out",
      offset: 100, // отступ от границы экрана для срабатывания
    });
  }, []);

  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Strategy />
      <Product />
      <Contact />
    </main>
  );
};

export default HomeComponents;
