import { ExternalLink, Globe } from "lucide-react";

function ProjectCard({ title, description, technologies, github, demo, demoLabel }) {
  return (
    <article className="rounded-lg p-6 flex flex-col justify-between max-w-md hover:shadow-lg transition">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#161b22] min-h-[220px] border border-white/5 rounded-xl p-6 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer overflow-hidden block"
      >
        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={16} />
        </div>
        <h3 className="text-xl font-mono text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed">{description}</p>
        <ul className="flex flex-wrap gap-2 font-mono">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded"
            >
              {tech}
            </li>
          ))}
        </ul>
        {demo && (
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(demo, "_blank", "noopener,noreferrer");
            }}
            className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-lg hover:bg-emerald-500/20 transition-all"
          >
            <Globe size={12} />
            {demoLabel}
          </span>
        )}
      </a>
    </article>
  );
}

export default ProjectCard;
