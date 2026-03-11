import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    header: {
      badge: "Construyendo sistemas escalables",
      description:
        "Desarrollador de software con experiencia en el desarrollo de aplicaciones web. Proactivo, resolutivo y enfocado en aportar valor en entornos colaborativos utilizando metodologías ágiles.",
      contactMe: "Contáctame",
      codeComment: "// Inicializar Arquitecto Backend",
    },
    projects: {
      title: "Repositorios Destacados",
      branch: "rama",
      liveDemo: "Demo en vivo",
    },
    experience: {
      title: "Historial Profesional",
    },
    education: {
      title: "Formación",
    },
    skills: {
      title: "Stack Principal",
    },
    contact: {
      title: "Contáctame",
      subtitle: "No dudes en escribirme — haz clic para copiar mi email.",
      copied: "¡Copiado!",
    },
    navbar: {
      downloadCV: "Descargar CV",
    },
  },
  en: {
    header: {
      badge: "Building scalable systems",
      description:
        "Software developer with experience building web applications. Proactive, problem-solver, and focused on delivering value in collaborative environments using agile methodologies.",
      contactMe: "Contact Me",
      codeComment: "// Initialize Backend Architect",
    },
    projects: {
      title: "Select Repositories",
      branch: "branch",
      liveDemo: "Live Demo",
    },
    experience: {
      title: "Career Changelog",
    },
    education: {
      title: "Build Info",
    },
    skills: {
      title: "Core Stack",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Feel free to reach out — click to copy my email.",
      copied: "Copied!",
    },
    navbar: {
      downloadCV: "Download CV",
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = (section, key) => translations[lang]?.[section]?.[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
