import { Wrench } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-6 md:px-12">
      <div className="pt-6">
        <div className="flex gap-2 ">
          <Wrench className="text-green-100" />
          <h2 className="text-2xl font-mono text-slate-500 tracking-widest mb-6">
            {t("skills", "title")}
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {["JS", "TS", "NODE", "REACT", "VUE", "MYSQL", "MONGODB", "DOCKER"].map((tech) => (
            <div
              key={tech}
              className="w-20 h-20 rounded-lg bg-[#161b22] border border-white/5 flex items-center justify-center text-[10px] font-bold text-slate-400 hover:bg-white/10 hover:text-indigo-400 hover:border-indigo-500/30 transition-all cursor-default shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
