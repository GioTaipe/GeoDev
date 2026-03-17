import { Download, Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-6x1 px-12 mx-auto h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-white font-bold text-xl tracking-tighter">
          GEO<span className="text-indigo-500">.DEV</span>
        </div>

        {/* LINKS */}
        <div className="flex gap-4 items-center text-sm text-slate-400">
          {/* BOTÓN DE IDIOMA */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-mono hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none"
          >
            <Languages size={16} />
            <span className="uppercase">{lang === "es" ? "EN" : "ES"}</span>
          </button>

          {/* BOTÓN DE DESCARGA */}
          <a
            href="/CV_Geovanny_Tipan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300"
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
