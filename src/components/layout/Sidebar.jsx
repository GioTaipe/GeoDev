import { useState, useEffect, useRef } from "react";
import { Download, Menu, X, Languages } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import { useLanguage } from "../../context/LanguageContext";

const NAV_ITEMS = [
  { id: "projects",   label: "projects"   },
  { id: "experience", label: "experience" },
  { id: "skills",     label: "skills"     },
  { id: "education",  label: "education"  },
];

function Sidebar() {
  const { lang, toggleLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef(null);

  /* ── Scroll to section with offset ── */
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const isMobile = window.innerWidth < 1024;
    const offset = isMobile ? 64 : 24;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  /* ── Active section + progress bar (single scroll listener) ── */
  useEffect(() => {
    const handleScroll = () => {
      /* Active section */
      const offset = window.scrollY + 140;
      let current = "";
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActive(current);

      /* Scroll progress bar — update DOM directly, no React state */
      if (progressRef.current) {
        const total = document.body.scrollHeight - window.innerHeight;
        const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
        progressRef.current.style.height = `${pct}%`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-full w-[220px] flex-col z-40 p-8"
        style={{ backgroundColor: "var(--bg)", borderRight: "1px solid rgba(0,0,0,0.08)" }}
      >
        {/* Scroll progress bar — right edge of sidebar */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-zinc-900/[0.04]">
          <div
            ref={progressRef}
            className="w-full"
            style={{ backgroundColor: "var(--accent)", height: "0%", opacity: 0.5 }}
          />
        </div>

        {/* Logo */}
        <div
          className="font-mono font-black text-lg mb-14 tracking-tight text-zinc-900"
          style={{ animation: "slideInLeft 500ms var(--ease-out) both" }}
        >
          GEO<span style={{ color: "var(--accent)" }}>.DEV</span>
        </div>

        {/* Nav — staggered entrance */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {NAV_ITEMS.map(({ id, label }, i) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="group relative flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left font-mono text-xs tracking-wide cursor-pointer transition-colors duration-150"
                style={{
                  color: isActive ? "#18181b" : "#71717a",
                  animation: `slideInLeft 400ms var(--ease-out) ${120 + i * 60}ms both`,
                }}
              >
                {/* Active indicator bar */}
                <span
                  className="w-[3px] rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: "var(--accent)",
                    height: isActive ? "14px" : "4px",
                    opacity: isActive ? 1 : 0.25,
                  }}
                />
                <span className="group-hover:text-zinc-900 transition-colors duration-150">
                  ./{label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div
          className="flex flex-col gap-2 mt-6"
          style={{ animation: "slideInLeft 400ms var(--ease-out) 400ms both" }}
        >
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-200 text-zinc-500 text-xs font-mono hover:text-zinc-900 hover:border-zinc-400 transition duration-150 cursor-pointer active:scale-[0.97]"
          >
            <Languages size={13} />
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://github.com/GioTaipe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2 rounded-lg border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 transition duration-150 active:scale-[0.97]"
            >
              <GithubIcon size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/geovanny-tipan-taipe-47a2371a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2 rounded-lg border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 transition duration-150 active:scale-[0.97]"
            >
              <LinkedinIcon size={13} />
            </a>
          </div>

          <a
            href="/Curriculum_Geovanny.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-[11px] font-mono font-bold text-white transition duration-150 active:scale-[0.97]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <Download size={12} />
            {t("navbar", "downloadCV")}
          </a>
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-6 border-b border-zinc-200 backdrop-blur-md"
        style={{ backgroundColor: "rgba(245,245,240,0.92)" }}
      >
        <div className="font-mono font-black text-base tracking-tight text-zinc-900">
          GEO<span style={{ color: "var(--accent)" }}>.DEV</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-zinc-500 hover:text-zinc-900 transition-colors p-1"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile overlay menu ── */}
      {open && (
        <div
          className="menu-overlay lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{ backgroundColor: "rgba(245,245,240,0.97)", backdropFilter: "blur(8px)" }}
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-mono text-2xl font-bold text-zinc-600 hover:text-zinc-900 transition-colors duration-150"
            >
              {label}
            </button>
          ))}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => { toggleLang(); setOpen(false); }}
              className="px-4 py-2 rounded-lg border border-zinc-200 text-zinc-600 text-xs font-mono hover:text-zinc-900 transition"
            >
              <Languages size={13} className="inline mr-1.5" />
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a
              href="/Curriculum_Geovanny.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold text-white"
              style={{ backgroundColor: "var(--accent)" }}
            >
              CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
