import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

const EMAIL = "giiovannytaipe88@gmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);
  const { lang, t } = useLanguage();
  const [ref, inView] = useInView();

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={ref} className="px-5 sm:px-8 md:px-16 py-20 sm:py-24 max-w-6xl mx-auto">
      <SectionHeading
        kicker="CONTACT"
        title={lang === "es" ? "¿Charlamos?" : "Let's talk"}
        subtitle={t("contact", "subtitle")}
        visible={inView}
      />

      <div
        className={`reveal ${inView ? "visible" : ""}`}
        style={{ transitionDelay: "120ms" }}
      >
        <div className="card-dark rounded-2xl p-6 sm:p-10 text-center">
          <div
            className="inline-flex w-14 h-14 rounded-2xl items-center justify-center mb-6"
            style={{ backgroundColor: "var(--accent-soft)" }}
          >
            <Mail size={22} style={{ color: "var(--accent)" }} />
          </div>

          <button
            onClick={handleCopy}
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-mono cursor-pointer transition-colors active:scale-[0.97]"
            style={{
              backgroundColor: "var(--surface-hi)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hi)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <span className="truncate">{EMAIL}</span>
            {copied ? (
              <Check size={14} style={{ color: "var(--accent)" }} />
            ) : (
              <Copy size={14} style={{ color: "var(--text-subtle)" }} className="group-hover:text-[var(--text)] transition-colors" />
            )}
          </button>

          <p
            className="text-[11px] font-mono mt-4"
            style={{ color: copied ? "var(--accent)" : "var(--text-subtle)" }}
          >
            {copied
              ? t("contact", "copied")
              : lang === "es"
                ? "click para copiar"
                : "click to copy"}
          </p>

          {/* Socials */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <a
              href="https://github.com/GioTaipe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "var(--surface-hi)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <GithubIcon size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/geovanny-tipan-taipe-47a2371a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={{
                backgroundColor: "var(--surface-hi)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <LinkedinIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
