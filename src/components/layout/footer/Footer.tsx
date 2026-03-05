import Link from "next/link";
import { FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion"; // Добавим для легкой анимации

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Декоративный элемент — затухающее золото в углу */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Колонка 1: Брендинг */}
          <div className="md:col-span-2">
            <Link href="/" className="group inline-block mb-6">
              <span className="text-3xl font-black tracking-[0.3em] uppercase group-hover:text-yellow-500 transition-colors">
                KURUT <span className="text-yellow-500">TRADER</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed tracking-wide">
              Профессиональный взгляд на финансовые рынки. Обучение, аналитика и
              торговые стратегии, проверенные временем. Измените свой подход к
              трейдингу уже сегодня.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-yellow-500 font-bold mb-6">
              Навигация
            </h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest text-gray-400">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link href="#strategy" className="hover:text-white transition">
                  Стратегия
                </Link>
              </li>
              <li>
                <Link href="#product" className="hover:text-white transition">
                  Обучение
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Соцсети */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-yellow-500 font-bold mb-6">
              Сообщество
            </h4>
            <div className="flex gap-6">
              {[
                { icon: <FaTelegramPlane size={24} />, href: "#" },
                { icon: <FaInstagram size={24} />, href: "#" },
                { icon: <FaYoutube size={24} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-gray-400 hover:text-yellow-500 transition-all transform hover:-translate-y-1 shadow-yellow-500/20 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя часть: Копирайт и TwinCore */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-gray-600">
            <span>© {currentYear} KURUT TRADER</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full hidden md:block"></span>
            <span>Bishkek, Kyrgyzstan</span>
          </div>

          {/* Ссылка на разработчика TwinCore */}
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-medium text-gray-500 group">
            <span>Разработал</span>
            <a
              href="https://twincore.kg" // Добавь свою ссылку
              target="_blank"
              rel="noopener noreferrer"
              className="text-white group-hover:text-white transition-colors duration-300"
            >
              <span className="text-yellow-500 font-black tracking-widest group-hover:drop-shadow-[0_0_5px_rgba(234,179,8,0.6)]">
                TWIN
              </span>
              CORE
            </a>
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-700 flex gap-8">
            <Link href="/privacy" className="hover:text-gray-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400 transition">
              Risk Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
