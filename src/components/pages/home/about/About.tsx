"use client";

import React from "react";
import freeman from "@/assets/images/free.webp";
import Image from "next/image";
// Добавили импорт типа Variants
import { motion, Variants } from "framer-motion";

const About = () => {
  // Явно указываем тип Variants для устранения ошибки билда
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const photoVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      className="py-32 bg-black px-6 relative overflow-hidden"
    >
      {/* Анимированный блик на фоне */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-24 w-80 h-80 bg-yellow-500 rounded-full blur-[120px] -z-10"
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        {/* Фотография */}
        <motion.div
          variants={photoVariants}
          className="relative flex justify-center md:justify-start order-2 md:order-1"
        >
          {/* Декоративные уголки */}
          <motion.div
            initial={{ width: 0, height: 0 }}
            whileInView={{ width: 48, height: 48 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-[-10px] left-[-10px] border-t border-l border-yellow-500/60 hidden md:block"
          ></motion.div>

          <div className="relative w-full max-w-[380px] aspect-[3/4] overflow-hidden group border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 transition-opacity group-hover:opacity-40"></div>

            <Image
              src={freeman}
              alt="Kurut Trader Portrait"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-in-out"
              priority
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 left-6 z-20"
            >
              <span className="text-yellow-500 text-[9px] uppercase tracking-[0.4em] font-black drop-shadow-lg">
                Kyrgyzstan • Expert
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Контентная часть */}
        <div className="order-1 md:order-2">
          <motion.span
            variants={itemVariants}
            className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block"
          >
            Inside the Market
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1] uppercase italic tracking-tighter"
          >
            Путь от <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.25)]">
              Новичка до PRO
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6 max-w-md">
            <p className="text-gray-400 text-base leading-relaxed">
              Моя специализация — симбиоз{" "}
              <span className="text-white font-bold">технического анализа</span>{" "}
              и <span className="text-white font-bold">психологии толпы</span>.
              Я пришел в эту сферу, чтобы изменить представление о трейдинге.
            </p>
            <motion.p
              whileHover={{ x: 5 }}
              className="text-gray-500 text-sm italic border-l-2 border-yellow-500/50 pl-4 py-1 cursor-default transition-colors hover:text-gray-300"
            >
              "Трейдинг — это не игра в угадывание, это строгая математика и
              железная дисциплина."
            </motion.p>
          </motion.div>

          {/* Сетка статистики */}
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-sm">
            {[
              { label: "Опыт", value: "5+ ЛЕТ" },
              { label: "Win Rate", value: "80%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group border-b border-white/5 pb-2 transition-colors hover:border-yellow-500/40"
              >
                <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1 group-hover:text-yellow-500/60 transition-colors">
                  {stat.label}
                </p>
                <p className="text-xl font-black text-white group-hover:text-yellow-500 transition-colors">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
