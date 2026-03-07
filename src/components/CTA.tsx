export default function CTA() {
  return (
    <section id="contact" className="px-6 py-16 md:px-[60px] md:py-[120px] text-center relative overflow-hidden" style={{ background: "var(--bg2)" }}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[400px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(0,232,122,0.12) 0%, transparent 70%)" }}
      />
      <h2
        className="font-syne font-extrabold text-white leading-[1.05] max-w-[700px] mx-auto mb-6 md:mb-8 relative"
        style={{ fontSize: "clamp(36px, 8vw, 80px)" }}
      >
        Ready to Build<br />
        Your <span style={{ color: "var(--green)" }}>AI-Powered</span><br />
        Future?
      </h2>
      <p className="text-[14px] md:text-[16px] max-w-[400px] mx-auto mb-8 md:mb-12 leading-[1.7] relative" style={{ color: "var(--muted)" }}>
        Book a free 30-minute strategy call. No sales pitch — just pure value and a clear action plan.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative">
        <a
          href="mailto:hello@agentryx.com"
          className="w-full md:w-auto font-syne font-bold text-sm px-8 py-3.5 rounded-full no-underline flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,232,122,0.35)] min-h-[44px]"
          style={{ background: "var(--green)", color: "#050d0a" }}
        >
          Book Free Call ↗
        </a>
        <a
          href="https://wa.me/919104980549"
          className="w-full md:w-auto text-sm no-underline flex items-center justify-center gap-2 border-b pb-0.5 transition-all duration-200 hover:border-[var(--green)] min-h-[44px]"
          style={{ color: "var(--text)", borderColor: "var(--border)" }}
        >
          WhatsApp Us →
        </a>
      </div>
    </section>
  );
}
