import React from "react";
import { Github, Linkedin, Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const { t } = useLanguage();

  return (
    <header className="w-full max-w-full px-6 md:px-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
        <div className="text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
          <Terminal size={12} />
          <span>{t("header", "badge")}</span>
        </div>
          <h1 className="!text-7xl md:!text-8xl font-extrabold text-white tracking-tight leading-tight">
            Fullstack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              Developer
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-md leading-relaxed mx-auto md:mx-2">
            {t("header", "description")}
          </p>

          {/* LINKS */}
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/geovanny-tipan-taipe-47a2371a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition flex items-center gap-2"
            >
              <Linkedin size={16} /> LinkedIn
            </a>

            <a
              href="https://github.com/GioTaipe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition flex items-center gap-2"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* BLOQUE DE CÓDIGO */}
        <div className="relative group w-full max-w-2xl md:ml-auto ">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-[#161b22] border border-white/10 rounded-xl p-6 font-mono text-sm shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
            </div>

            <div className="space-y-1 text-slate-300">
              <div className="text-slate-500">
                {t("header", "codeComment")}
              </div>
              <div>
                <span className="text-purple-400">class</span>{" "}
                <span className="text-yellow-200">Developer</span> {"{"}
              </div>
              <div className="pl-4">
                <span className="text-purple-400">constructor</span>() {"{"}
              </div>
              <div className="pl-8">
                <span className="text-indigo-400">this</span>.
                <span className="text-blue-400">languages</span> = [
                <span className="text-green-400">"Javascript"</span>,{" "}
                <span className="text-green-400">"Typescript"</span>];
              </div>
              <div className="pl-8">
                <span className="text-indigo-400">this</span>.
                <span className="text-blue-400">frameworks</span> = [
                <span className="text-green-400">"Node"</span>,{" "}
                <span className="text-green-400">"Vue"</span>,{" "}
                <span className="text-green-400">"React"</span>];
              </div>
              <div className="pl-8">
                <span className="text-indigo-400">this</span>.
                <span className="text-blue-400">database</span> =[
                <span className="text-green-400">"MySql"</span>,
                <span className="text-green-400">"MongoDB"</span>,
                <span className="text-green-400">"Prisma ORM"</span>];
              </div>
              <div className="pl-8">
                <span className="text-indigo-400">this</span>.
                <span className="text-blue-400">tools</span> =[
                <span className="text-green-400">"Docker"</span>,
                <span className="text-green-400">"Git"</span>,
                <span className="text-green-400">"Github"</span>];,
              </div>
              <div className="pl-8">
                <span className="text-indigo-400">this</span>.
                <span className="text-blue-400">skills</span> =[
                <span className="text-green-400">"Clean Code"</span>,
                <span className="text-green-400">"Testing"</span>,
                <span className="text-green-400">"Debugging"</span>];
              </div>
              <div className="pl-4">{"}"}</div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
