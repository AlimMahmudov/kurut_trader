"use client";

import React from "react";

const strategies = [
  {
    title: "Smart Money",
    description:
      "Анализ ликвидности и институциональных потоков. Отслеживаем действия «крупного игрока» через Order Blocks и Breakers.",
    tag: "Institutional",
  },
  {
    title: "Volume Profile",
    description:
      "Работа с горизонтальными объемами (POC/VAH/VAL). Понимаем, где реально сосредоточен интерес рынка, а не просто цена.",
    tag: "Data Driven",
  },
  {
    title: "Psychology",
    description:
      "Управление рисками и эмоциональный контроль. Трейдинг на 80% состоит из дисциплины и на 20% из стратегии.",
    tag: "Risk Management",
  },
];

const Strategy = () => {
  return (
    <section
      id="strategy"
      className="py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* Фоновый шум */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs mb-4">
            Технология анализа
          </h2>
          <p className="text-5xl md:text-7xl text-white font-black uppercase italic tracking-tighter">
            Торговая{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
              система
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {strategies.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="group relative p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-yellow-500/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative bg-black h-full p-10 flex flex-col justify-between overflow-hidden">
                {/* Номер на фоне */}
                <span className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.03] group-hover:text-yellow-500/[0.05] transition-colors uppercase italic select-none">
                  {i + 1}
                </span>

                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-yellow-500 text-sm font-black tracking-widest uppercase">
                      [ 0{i + 1} ]
                    </div>
                    <div className="px-2 py-1 border border-white/10 text-[8px] uppercase tracking-tighter text-gray-500 group-hover:border-yellow-500/50 group-hover:text-yellow-500 transition-colors">
                      {item.tag}
                    </div>
                  </div>

                  <h3 className="text-2xl text-white font-black mb-4 uppercase italic tracking-tight group-hover:text-yellow-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Индикатор "загрузки" снизу карточки на CSS */}
                <div className="mt-12 relative h-[1px] w-full bg-white/5 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-yellow-500/50 transition-transform duration-[1500ms] ease-out origin-left scale-x-0 group-aos-animate:scale-x-100`}
                    style={{
                      transitionDelay: `${700 + i * 200}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Глобальный стиль для анимации линии при срабатывании AOS */}
      <style jsx global>{`
        [data-aos].aos-animate .group-aos-animate\:scale-x-100 {
          transform: scaleX(1);
        }
      `}</style>
    </section>
  );
};

export default Strategy;
