import { GraduationCap, CheckCircle2 } from "lucide-react";
import { education } from "../data/studies";
import { useLanguage } from "../context/LanguageContext";

function Education() {
  const { lang, t } = useLanguage();

  return (
    <section className="w-full max-w-full px-6 md:px-12">
      <div className="flex items-center gap-2 border-b border-white/5 pb-4">
        <GraduationCap className="text-green-500" />
        <h2 className="text-2xl font-mono text-white">{t("education", "title")}</h2>
      </div>
      <div className="mt-8">
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-5 rounded-xl bg-[#161b22] border border-white/5 hover:border-green-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-[#0d1117]">
                  {edu.duration[lang]}
                </span>
              </div>
              <h4 className="font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                {edu.degree[lang]}
              </h4>
              <p className="text-xs text-slate-400 font-mono">
                {edu.institution[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
