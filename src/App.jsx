import TopNav from "./components/layout/TopNav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <TopNav />

      <main>
        <section id="hero">
          <Header />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
