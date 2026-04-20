import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const { lang } = useLanguage();

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-16 relative">

      {/* ── Status badge ── */}
      <div
        className="hero-fade inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
          animationDelay: "60ms",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
        />
        {lang === "es" ? "Disponible para nuevos proyectos" : "Available for new projects"}
      </div>

      {/* ── Bracketed role label ── */}
      <p
        className="hero-fade text-[11px] font-mono tracking-[0.2em] mb-4"
        style={{ color: "var(--text-subtle)", animationDelay: "120ms" }}
      >
        [ {lang === "es" ? "BACKEND · FULLSTACK · NODE.JS" : "BACKEND · FULLSTACK · NODE.JS"} ]
      </p>

      {/* ── Big name ── */}
      <div className="overflow-hidden">
        <h1
          className="hero-reveal font-bold tracking-tight text-center"
          style={{
            fontSize: "clamp(48px, 11vw, 132px)",
            lineHeight: 1,
            color: "var(--text)",
            animationDelay: "180ms",
          }}
        >
          Geovanny
        </h1>
      </div>

      <p
        className="hero-fade mt-4 text-base sm:text-lg"
        style={{ color: "var(--accent)", animationDelay: "260ms" }}
      >
        &gt; {lang === "es" ? "Desarrollador Fullstack" : "Fullstack Developer"}
      </p>

      <p
        className="hero-fade max-w-xl text-center text-sm sm:text-[15px] leading-relaxed mt-6"
        style={{ color: "var(--text-muted)", animationDelay: "340ms" }}
      >
        {lang === "es"
          ? "Construyo APIs y servicios backend con Node.js, integro arquitecturas en la nube y diseño sistemas fiables. Me importa el código limpio, el rendimiento y resolver problemas reales de negocio."
          : "I build backend APIs and services with Node.js, integrate cloud architectures and design reliable systems. I care about clean code, performance and solving real business problems."}
      </p>

      {/* ── Action row ── */}
      <div
        className="hero-fade flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8"
        style={{ animationDelay: "440ms" }}
      >
        <a
          href="https://github.com/GioTaipe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-colors"
          style={{
            backgroundColor: "var(--surface)",
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
          }}
        >
          <GithubIcon size={13} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/geovanny-tipan-taipe-47a2371a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-colors"
          style={{
            backgroundColor: "var(--surface)",
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
          }}
        >
          <LinkedinIcon size={13} />
          LinkedIn
        </a>
      </div>

      {/* ── Scroll hint ── */}
      <button
        onClick={scrollToProjects}
        className="hero-fade absolute bottom-10 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 cursor-pointer group"
        style={{ animationDelay: "640ms" }}
      >
        <span
          className="text-[10px] font-mono tracking-[0.3em] uppercase transition-colors"
          style={{ color: "var(--text-subtle)" }}
        >
          {lang === "es" ? "scroll" : "scroll"}
        </span>
        <ArrowDown
          size={14}
          style={{ color: "var(--text-subtle)" }}
          className="animate-bounce"
        />
      </button>
    </div>
  );
}

export default Header;
