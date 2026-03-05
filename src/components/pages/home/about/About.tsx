"use client";

import React, { useEffect, useState, useRef } from "react";
import freeman from "@/assets/images/free.webp";
import Image from "next/image";

// Мини-компонент для счетчика чисел
const Counter = ({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return <span ref={countRef}>{count}</span>;
};

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-black px-6 relative overflow-hidden"
    >
      {/* Статичный блик (AOS не анимирует циклы, поэтому оставляем просто декор) */}
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-yellow-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Фотография */}
        <div
          className="relative flex justify-center md:justify-start order-2 md:order-1"
          data-aos="fade-right"
        >
          {/* Декоративные уголки */}
          <div className="absolute top-[-10px] left-[-10px] border-t border-l border-yellow-500/60 w-12 h-12 hidden md:block"></div>

          <div className="relative w-full max-w-[380px] aspect-[3/4] overflow-hidden group border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 transition-opacity group-hover:opacity-40"></div>

            <Image
              src={freeman}
              alt="Kurut Trader Portrait"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-in-out"
              priority
            />

            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-yellow-500 text-[9px] uppercase tracking-[0.4em] font-black drop-shadow-lg">
                Kyrgyzstan • Expert
              </span>
            </div>
          </div>
        </div>

        {/* Контентная часть */}
        <div className="order-1 md:order-2">
          <span
            className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block"
            data-aos="fade-up"
          >
            Inside the Market
          </span>

          <h2
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1] uppercase italic tracking-tighter"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Путь от <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
              Новичка до PRO
            </span>
          </h2>

          <div
            className="space-y-6 max-w-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-gray-400 text-base leading-relaxed">
              Моя специализация — симбиоз{" "}
              <span className="text-white font-bold">технического анализа</span>{" "}
              и <span className="text-white font-bold">психологии толпы</span>.
            </p>
            <p className="text-gray-500 text-sm italic border-l-2 border-yellow-500/50 pl-4 py-1">
              "Трейдинг — это не игра в угадывание, это строгая математика."
            </p>
          </div>

          {/* Сетка статистики с коунтом */}
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-sm">
            <div
              className="group border-b border-white/5 pb-2 transition-colors hover:border-yellow-500/40"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">
                Опыт
              </p>
              <p className="text-xl font-black text-white">
                <Counter target={5} />+ ЛЕТ
              </p>
            </div>

            <div
              className="group border-b border-white/5 pb-2 transition-colors hover:border-yellow-500/40"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">
                Win Rate
              </p>
              <p className="text-xl font-black text-white">
                <Counter target={80} />%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
