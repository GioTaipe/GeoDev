import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

function Projects() {
  const { lang, t } = useLanguage();
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="px-5 sm:px-8 md:px-16 py-20 sm:py-24 max-w-6xl mx-auto">
      <SectionHeading
        kicker="PORTFOLIO"
        title={lang === "es" ? "Cosas que he construido" : "Things I've built"}
        subtitle={lang === "es"
          ? "Proyectos personales y experimentos en producción."
          : "Side projects and production experiments."}
        visible={inView}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`reveal ${inView ? "visible" : ""}`}
            style={{ transitionDelay: `${(i + 1) * 80}ms` }}
          >
            <ProjectCard
              title={project.title}
              description={project.description[lang]}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              demoLabel={t("projects", "liveDemo")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
