const stats = [
  { number: "50", suffix: "+", label: "Projects Delivered" },
  { number: "98", suffix: "%", label: "Client Satisfaction" },
  { number: "3", suffix: "x", label: "Avg. Efficiency Gain" },
  { number: "24", suffix: "/7", label: "AI Agents Running" },
];

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-[60px] pt-[140px] pb-20 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Glows */}
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,232,122,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute left-[10%] bottom-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,232,122,0.07) 0%, transparent 70%)" }}
      />

      {/* Tag */}
      <div className="animate-fadeUp flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] rounded-full px-4 py-2 w-fit mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse-dot" />
        <span className="font-mono text-[12px] text-[var(--green)] tracking-[0.05em]">
          🤖 Available for New Projects — 2025
        </span>
      </div>

      {/* Title */}
      <h1 className="animate-fadeUp-1 font-syne font-extrabold leading-[1.0] text-white max-w-[800px]"
        style={{ fontSize: "clamp(52px, 7vw, 96px)" }}>
        We Build<br />
        <span className="text-outlined">Intelligent</span><br />
        <span style={{ color: "var(--green)" }}>Automations.</span>
      </h1>

      {/* Sub */}
      <p className="animate-fadeUp-2 text-[17px] text-[var(--muted)] max-w-[460px] leading-[1.7] mt-7 font-light">
        WordPress Development, AI Agents & Agentic AI Systems — crafted to scale your business on autopilot.
      </p>

      {/* Buttons */}
      <div className="animate-fadeUp-3 flex gap-4 items-center mt-11">
        <a
          href="#contact"
          className="bg-[var(--green)] text-[#050d0a] font-syne font-bold text-sm px-8 py-3.5 rounded-full no-underline flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,232,122,0.35)]"
        >
          Start a Project ↗
        </a>
        <a
          href="#services"
          className="text-[var(--text)] text-sm no-underline flex items-center gap-2 border-b border-[var(--border)] pb-0.5 transition-all duration-200 hover:text-[var(--green)] hover:border-[var(--green)]"
        >
          Explore Services →
        </a>
      </div>

      {/* Stats */}
      <div
        className="animate-fadeUp-4 flex gap-0 mt-20 border-t pt-12"
        style={{ borderColor: "var(--border)" }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex-1 px-10"
            style={{
              paddingLeft: i === 0 ? 0 : undefined,
              borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div className="font-syne font-extrabold text-[42px] text-white leading-none">
              {s.number}<span style={{ color: "var(--green)" }}>{s.suffix}</span>
            </div>
            <div className="text-[13px] text-[var(--muted)] mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
