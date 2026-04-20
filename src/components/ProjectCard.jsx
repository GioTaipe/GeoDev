import { Github, ArrowUpRight } from "lucide-react";

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
  demoLabel,
}) {
  return (
    <div className="card-dark group h-full flex flex-col rounded-2xl overflow-hidden hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10", backgroundColor: "var(--bg)" }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          draggable={false}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.6) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-base sm:text-lg tracking-tight mb-2" style={{ color: "var(--text)" }}>
          {title}
        </h3>

        <p className="text-xs sm:text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono rounded-md"
              style={{
                backgroundColor: "var(--surface-hi)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <Github size={12} />
              code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono ml-auto transition-colors"
              style={{ color: "var(--accent)" }}
            >
              {demoLabel}
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
