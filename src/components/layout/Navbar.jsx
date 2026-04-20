import { useState, useEffect } from "react";
import { Download, Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-white/10 bg-black/75 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
          : "border-white/5 bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl px-12 mx-auto h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-white font-bold text-xl tracking-tighter">
          GEO<span className="text-amber-500">.DEV</span>
        </div>

        {/* LINKS */}
        <div className="flex gap-4 items-center text-sm text-slate-400">
          {/* BOTÓN DE IDIOMA */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-mono hover:bg-white/10 hover:text-white transition duration-150 cursor-pointer focus:outline-none active:scale-[0.97]"
          >
            <Languages size={16} />
            <span className="uppercase">{lang === "es" ? "EN" : "ES"}</span>
          </button>

          {/* BOTÓN DE DESCARGA */}
          <a
            href="/Curriculum_Geovanny.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500 hover:text-white transition duration-150 active:scale-[0.97]"
          >
            <Download size={16} />
            <span>{t("navbar", "downloadCV")}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
