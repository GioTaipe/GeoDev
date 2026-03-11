import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "giiovannytaipe88@gmail.com";
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full max-w-full px-6 md:px-12 ">
      <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-8">
        <Mail className="text-indigo-500" size={24} />
        <h2 className="text-2xl text-white font-mono">{t("contact", "title")}</h2>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-slate-400 text-center">
          {t("contact", "subtitle")}
        </p>

        <button
          onClick={handleCopy}
          className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer"
        >
          <Mail size={18} className="text-indigo-400" />
          <span className="text-white font-mono text-sm md:text-base">{email}</span>
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
          )}
        </button>

        {copied && (
          <span className="text-green-400 text-sm font-mono animate-pulse">
            {t("contact", "copied")}
          </span>
        )}
      </div>
    </section>
  );
}

export default Contact;
