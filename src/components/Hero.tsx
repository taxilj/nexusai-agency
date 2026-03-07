const stats = [
  { number: "40", suffix: "+", label: "Projects Delivered" },
  { number: "95", suffix: "%", label: "Client Satisfaction" },
  { number: "5", suffix: "x", label: "Avg. Efficiency Gain" },
  { number: "24", suffix: "/7", label: "AI Agents Running" },
];

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 pt-28 pb-12 md:px-[60px] md:pt-[140px] md:pb-20 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Glows */}
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,232,122,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute left-[10%] bottom-[10%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,232,122,0.07) 0%, transparent 70%)" }}
      />

      {/* Tag */}
      <div className="animate-fadeUp flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] rounded-full px-4 py-2 w-fit mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse-dot" />
        <span className="font-mono text-[12px] text-[var(--green)] tracking-[0.05em]">
          🤖 Available for New Projects — 2026
        </span>
      </div>

      {/* Title */}
      <h1 className="animate-fadeUp-1 font-syne font-extrabold leading-[1.0] text-white max-w-[800px]"
        style={{ fontSize: "clamp(40px, 8vw, 96px)" }}>
        We Automate<br />
        <span className="text-outlined">Your Business</span><br />
        <span style={{ color: "var(--green)" }}>With AI.</span>
      </h1>

      {/* Sub */}
      <p className="animate-fadeUp-2 text-[15px] md:text-[17px] text-[var(--muted)] max-w-[460px] leading-[1.7] mt-7 font-light">
        WordPress Development, AI Agents &amp; Agentic AI Automation — we build intelligent systems that work for your business 24/7, even while you sleep.
      </p>

      {/* Buttons */}
      <div className="animate-fadeUp-3 flex flex-col md:flex-row gap-4 items-start md:items-center mt-11">
        <a
          href="#contact"
          className="w-full md:w-auto text-center bg-[var(--green)] text-[#050d0a] font-syne font-bold text-sm px-8 py-3.5 rounded-full no-underline flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,232,122,0.35)]"
        >
          Start a Project ↗
        </a>
        <a
          href="#services"
          className="w-full md:w-auto text-center text-[var(--text)] text-sm no-underline flex items-center justify-center gap-2 border-b border-[var(--border)] pb-0.5 transition-all duration-200 hover:text-[var(--green)] hover:border-[var(--green)]"
        >
          Explore Services →
        </a>
      </div>

      {/* Stats */}
      <div
        className="animate-fadeUp-4 grid grid-cols-2 md:flex gap-0 mt-14 md:mt-20 border-t pt-8 md:pt-12"
        style={{ borderColor: "var(--border)" }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex-1 px-4 md:px-10 py-4 md:py-0 ${i < 2 ? "border-b md:border-b-0" : ""
              } ${i < stats.length - 1 ? "md:border-r" : ""
              }`}
            style={{
              paddingLeft: i === 0 ? 0 : undefined,
              borderColor: "var(--border)",
            }}
          >
            <div className="font-syne font-extrabold text-[32px] md:text-[42px] text-white leading-none">
              {s.number}<span style={{ color: "var(--green)" }}>{s.suffix}</span>
            </div>
            <div className="text-[12px] md:text-[13px] text-[var(--muted)] mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

