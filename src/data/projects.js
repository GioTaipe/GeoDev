export const projects = [
  {
    id: 1,
    title: "Chrono Task",
    description: {
      es: "Gestor de tareas full-stack con seguimiento de tiempo, tableros drag-and-drop y dashboards de progreso en tiempo real con Vue.js y una API REST en Node.js respaldada por MongoDB.",
      en: "Full-stack task manager with time tracking, drag-and-drop boards, and real-time progress dashboards built with Vue.js and a Node.js REST API backed by MongoDB.",
    },
    technologies: ["Node.js", "Express", "MongoDB", "Vue.js"],
    github: "https://github.com/GioTaipe/TASK_MANAGER",
    demo: "https://task-manager-2-wvfr.onrender.com/",
  },
  {
    id: 2,
    title: "BlogVibe",
    description: {
      es: "Plataforma de blog con autenticación JWT, control de acceso por roles, posts con texto enriquecido, comentarios, sistema de likes y subida de imágenes a AWS S3.",
      en: "Blog platform with JWT authentication, role-based access, rich-text posts, comments, likes system, and AWS S3 image uploads for user profiles.",
    },
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "CLOUD"],
    github: "https://github.com/GioTaipe/blog-project",
    demo: "https://blog-project-1-wrg1.onrender.com/Login",
  },
  {
    id: 3,
    title: "Tech Zone",
    description: {
      es: "API REST de e-commerce con catálogo de productos, gestión de usuarios, carrito de compras, procesamiento de pedidos y despliegue con Docker usando MySQL y autenticación JWT.",
      en: "E-commerce REST API with product catalog, user management, shopping cart, order processing, and Dockerized deployment using MySQL and JWT auth.",
    },
    technologies: ["Node.js", "Express", "MySQL", "JWT", "Docker"],
    github: "https://github.com/GioTaipe/E-commerce",
    demo: "https://e-commerce-1-ap6o.onrender.com/",
  },
  {
    id: 4,
    title: "Trustgate",
    description: {
      es: "KYC en menos de 2 segundos sin documentos ni selfies. TrustGate consulta directamente la red telefónica del operador a través de las APIs de Nokia Network as Code y usa Gemini AI para convertir las señales en un Trust Score 0–100 con explicación en lenguaje natural.",
      en: "KYC in under 2 seconds without documents or selfies. TrustGate directly queries the operator's phone network via Nokia Network as Code APIs and uses Gemini AI to convert the signals into a Trust Score 0–100 with natural language explanation.",
    },
    technologies: ["Node.js", "Express", "MySQL", "JWT", "Docker"],
    github: "https://github.com/GioTaipe/trustgate",
    demo: null,
  },
];
