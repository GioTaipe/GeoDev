import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

function Experience() {
  const { lang } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="px-5 sm:px-8 md:px-16 py-20 sm:py-24 max-w-6xl mx-auto">
      <SectionHeading
        kicker="EXPERIENCE"
        title={lang === "es" ? "Por dónde he pasado" : "Where I've worked"}
        visible={inView}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {experience.map((job, i) => (
          <div
            key={job.id}
            className={`reveal ${inView ? "visible" : ""}`}
            style={{ transitionDelay: `${(i + 1) * 90}ms` }}
          >
            <div className="card-dark h-full rounded-2xl p-6">
              {/* Date row */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span
                  className="text-[10px] font-mono tracking-[0.18em] uppercase"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {job.duration}
                </span>
              </div>

              <h3
                className="font-bold text-lg sm:text-xl tracking-tight mb-1"
                style={{ color: "var(--text)" }}
              >
                {job.role[lang]}
              </h3>

              <p
                className="text-xs font-mono mb-4"
                style={{ color: "var(--accent)" }}
              >
                @ {job.company}
              </p>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {job.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
