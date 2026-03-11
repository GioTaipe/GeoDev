import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section className="w-full max-w-full px-6 md:px-12">
      {/* Contenedor centrado */}
      <div className="flex justify-between border-b border-white/5 pb-4">
        {/* Título */}
        <h2 className="text-2xl text-white font-mono gap-2 flex items-center">
          <FolderGit2 className="text-indigo-500" />
          {t("projects", "title")}
        </h2>
        <div className="text-xs font-mono text-slate-500 hidden sm:block">
          git {t("projects", "branch")}: <span className="text-indigo-400">main</span>
        </div>
      </div>
      {/* Grid de proyectos */}
      <div className="grid gap-6 sm:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description[lang]}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            demoLabel={t("projects", "liveDemo")}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
