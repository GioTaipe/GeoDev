import { useState, useEffect } from "react";
import { Languages, Menu, X, Download } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const NAV_ITEMS = [
  { id: "hero",       es: "Inicio",       en: "Home"       },
  { id: "projects",   es: "Proyectos",    en: "Projects"   },
  { id: "experience", es: "Experiencia",  en: "Experience" },
  { id: "skills",     es: "Skills",       en: "Skills"     },
  { id: "education",  es: "Estudios",     en: "Studies"    },
];

function TopNav() {
  const { lang, toggleLang } = useLanguage();
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 200;
      let current = "hero";
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Top bar (desktop + mobile) ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">

          {/* Monogram */}
          <button
            onClick={() => scrollTo("hero")}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-mono text-sm font-bold cursor-pointer transition-colors"
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
          >
            GT
          </button>

          {/* Desktop pill nav */}
          <nav
            className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors"
                  style={{
                    backgroundColor: isActive ? "var(--accent)" : "transparent",
                    color: isActive ? "#fff" : "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {lang === "es" ? item.es : item.en}
                </button>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="hidden sm:flex w-10 h-10 sm:w-11 sm:h-11 rounded-xl items-center justify-center cursor-pointer transition-colors"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
              title={lang === "es" ? "EN" : "ES"}
            >
              <Languages size={15} />
            </button>

            <a
              href="/Curriculum_Geovanny.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 h-10 sm:h-11 rounded-xl text-xs font-medium cursor-pointer transition-colors hover:opacity-90"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
            >
              <Download size={14} />
              CV
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex px-4 sm:px-5 h-10 sm:h-11 items-center rounded-xl text-xs font-medium cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              {lang === "es" ? "Contacto" : "Contact"}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{ backgroundColor: "rgba(10,10,10,0.97)", backdropFilter: "blur(8px)" }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-2xl font-bold cursor-pointer transition-colors"
              style={{
                color: active === item.id ? "var(--accent)" : "var(--text-muted)",
              }}
            >
              {lang === "es" ? item.es : item.en}
            </button>
          ))}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => { toggleLang(); setOpen(false); }}
              className="px-4 py-2 rounded-xl text-xs font-mono cursor-pointer"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              <Languages size={13} className="inline mr-1.5" />
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a
              href="/Curriculum_Geovanny.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium cursor-pointer"
              style={{
                backgroundColor: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
            >
              <Download size={13} />
              CV
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2 rounded-xl text-xs font-medium cursor-pointer"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              {lang === "es" ? "Contacto" : "Contact"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TopNav;
