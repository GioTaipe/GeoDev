import Navbar from "./components/layout/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col items-center bg-[#0d1117] min-h-screen w-full">
      {/* Fondo Ambiental (Aurora Gradients - No Grid) */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Círculo superior derecho (Indigo) */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        {/* Círculo inferior izquierdo (Blue) */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>
      <Navbar />
      <Header />
      <Projects />
      <section className="w-full max-w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Columna Izquierda */}
          <div className="flex flex-col gap-12">
            {" "}
            {/* Gap para separar Experiencia de Skills */}
            <Experience />
            <Skills />
          </div>

          {/* Columna Derecha */}
          <div>
            <Education />
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
