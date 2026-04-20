import { GraduationCap } from "lucide-react";
import { education } from "../data/studies";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

function Education() {
  const { lang } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="px-5 sm:px-8 md:px-16 py-20 sm:py-24 max-w-6xl mx-auto">
      <SectionHeading
        kicker="STUDIES"
        title={lang === "es" ? "Lo que he estudiado" : "What I've studied"}
        visible={inView}
      />

      <div className="flex flex-col gap-3 sm:gap-4">
        {education.map((edu, i) => (
          <div
            key={edu.id}
            className={`reveal ${inView ? "visible" : ""}`}
            style={{ transitionDelay: `${(i + 1) * 90}ms` }}
          >
            <div className="card-dark rounded-2xl p-5 sm:p-6 flex items-start gap-4">
              <div
                className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: "var(--accent-soft)",
                  color: "var(--accent)",
                }}
              >
                <GraduationCap size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h4
                    className="font-bold text-sm sm:text-base tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {edu.degree[lang]}
                  </h4>
                  <span
                    className="text-[10px] font-mono tracking-wider shrink-0"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {edu.duration[lang]}
                  </span>
                </div>
                <p
                  className="text-xs font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  {edu.institution[lang]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
