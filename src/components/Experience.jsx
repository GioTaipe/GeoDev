import { GitBranch, Briefcase } from "lucide-react";
import { experience } from "../data/experience";
import { useLanguage } from "../context/LanguageContext";

function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section className="w-full max-w-full px-6 md:px-12">
      <div className="flex items-center gap-2 border-b border-white/5 pb-4">
        <GitBranch className="text-purple-500" />
        <h2 className="text-2xl font-mono text-white">{t("experience", "title")}</h2>
      </div>
      <div className="mt-8">
        <div className="relative pl-8.5">
          <div className="absolute left-3 top-2 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30"></div>
          {experience.map((job) => (
            <div key={job.id} className="relative">
              <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
              </div>
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {job.role[lang]}
                  </h3>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20 w-fit">
                    {job.duration}
                  </span>
                </div>
                <div className="text-sm font-mono text-purple-400 mb-2 flex items-center gap-2">
                  <Briefcase size={12} />
                  {job.company}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 border-l-2 border-white/5 pl-4 group-hover:border-indigo-500/30 transition-colors">
                  {job.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
