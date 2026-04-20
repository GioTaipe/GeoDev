import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

const half = Math.ceil(skills.length / 2);
const row1 = skills.slice(0, half);
const row2 = skills.slice(half);

function Chip({ label }) {
  return (
    <span
      className="px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-colors"
      style={{
        backgroundColor: "var(--surface)",
        color: "var(--text-muted)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.borderColor = "rgba(249,115,22,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {label}
    </span>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden group/marquee">
      <div
        className="marquee-track flex gap-3 w-max group-hover/marquee:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "marqueeReverse" : "marquee"} ${items.length * 4}s linear infinite`,
        }}
      >
        {doubled.map((tech, i) => (
          <Chip key={`${tech}-${i}`} label={tech} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const { lang } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="px-5 sm:px-8 md:px-16 py-20 sm:py-24 max-w-6xl mx-auto">
      <SectionHeading
        kicker="STACK"
        title={lang === "es" ? "Mi caja de herramientas" : "My toolbox"}
        visible={inView}
      />

      <div
        className={`flex flex-col gap-3 reveal ${inView ? "visible" : ""}`}
        style={{ transitionDelay: "120ms" }}
      >
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </div>
  );
}

export default Skills;
