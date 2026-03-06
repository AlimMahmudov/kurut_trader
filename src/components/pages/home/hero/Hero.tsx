"use client";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/kurut.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
      </div>

      {/* Световые пятна */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[150px] z-20"></div>

      <div className="relative z-30 text-center px-4">
        {/* Заголовок */}
        <div data-aos="fade-up">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-4 uppercase italic">
            KURUT{" "}
            <span className="text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.7)]">
              TRADER
            </span>
          </h1>
          <p className="text-gray-300 tracking-[0.5em] uppercase text-xs md:text-sm font-bold">
            Kyrgyzstan • Professional Trading • High Volatility
          </p>
        </div>

        {/* Кнопки: Акцент на сигналах и сообществе */}
        <div
          className="mt-12 flex flex-col md:flex-row gap-6 justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 px-12 transition-all duration-300 shadow-[0_0_30px_rgba(234,179,8,0.3)] uppercase tracking-widest text-sm">
            СМОТРЕТЬ СИГНАЛЫ
          </button>
        </div>
      </div>

      {/* Свечи внизу */}
      <div className="absolute bottom-20 flex gap-1.5 opacity-40 z-30 items-end h-[120px]">
        <div className="w-2 bg-red-500 rounded-full animate-pulse-custom-1" />
        <div className="w-2 bg-green-500 rounded-full animate-pulse-custom-2" />
        <div className="w-2 bg-red-500 rounded-full animate-pulse-custom-3" />
        <div className="w-2 bg-green-500 rounded-full animate-pulse-custom-4" />
      </div>

      <style jsx>{`
        @keyframes pulse-h {
          0%,
          100% {
            height: 32px;
          }
          50% {
            height: 60px;
          }
        }
        .animate-pulse-custom-1 {
          animation: pulse-h 2s infinite;
        }
        .animate-pulse-custom-2 {
          animation: pulse-h 2.5s infinite reverse;
        }
        .animate-pulse-custom-3 {
          animation: pulse-h 1.8s infinite;
        }
        .animate-pulse-custom-4 {
          animation: pulse-h 2.2s infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default Hero;
