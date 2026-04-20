import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

const FOLDERS = {
  es: [
    { id: "projects",   label: "Proyectos",  color: "blue"   },
    { id: "experience", label: "Experiencia", color: "green"  },
    { id: "skills",     label: "Skills",     color: "purple" },
    { id: "education",  label: "Educación",  color: "pink"   },
  ],
  en: [
    { id: "projects",   label: "Projects",   color: "blue"   },
    { id: "experience", label: "Experience", color: "green"  },
    { id: "skills",     label: "Skills",     color: "purple" },
    { id: "education",  label: "Education",  color: "pink"   },
  ],
};

const COLORS = {
  blue:   { tab: "#93c5fd", body: "#bfdbfe", shade: "#60a5fa" },
  green:  { tab: "#86efac", body: "#bbf7d0", shade: "#4ade80" },
  purple: { tab: "#c4b5fd", body: "#ddd6fe", shade: "#a78bfa" },
  pink:   { tab: "#f9a8d4", body: "#fbcfe8", shade: "#f472b6" },
};

function Folder({ color }) {
  const c = COLORS[color];
  return (
    <svg viewBox="0 0 80 64" className="w-full h-auto drop-shadow-sm">
      {/* tab */}
      <path d="M4 10 Q4 4 10 4 L30 4 L36 12 L70 12 Q76 12 76 18 L76 22 L4 22 Z" fill={c.tab} />
      {/* body */}
      <path d="M4 18 L76 18 Q76 18 76 24 L76 56 Q76 60 72 60 L8 60 Q4 60 4 56 Z" fill={c.body} />
      {/* shade strip */}
      <rect x="4" y="18" width="72" height="3" fill={c.shade} opacity="0.5" />
    </svg>
  );
}

function Folders() {
  const { lang } = useLanguage();
  const items = FOLDERS[lang];
  const [ref, inView] = useInView();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const isMobile = window.innerWidth < 1024;
    const offset = isMobile ? 64 : 24;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div ref={ref} className="px-5 sm:px-8 md:px-16 pb-12 sm:pb-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
        {items.map((f, i) => (
          <button
            key={f.id}
            onClick={() => scrollTo(f.id)}
            className={`group flex flex-col items-center gap-3 reveal ${inView ? "visible" : ""} cursor-pointer`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-20 sm:w-24 transition-transform duration-300 group-hover:-translate-y-1.5 group-active:scale-95">
              <Folder color={f.color} />
            </div>
            <span className="text-xs sm:text-sm font-mono text-zinc-600 group-hover:text-zinc-900 transition-colors">
              {f.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Folders;
