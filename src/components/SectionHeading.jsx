function SectionHeading({ kicker, title, subtitle, visible = true }) {
  return (
    <div className={`mb-10 sm:mb-12 reveal ${visible ? "visible" : ""}`}>
      <span className="section-kicker">{kicker}</span>
      <h2
        className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm max-w-xl" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
