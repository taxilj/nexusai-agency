export default function CTA() {
  return (
    <section id="contact" className="px-[60px] py-[120px] text-center relative overflow-hidden" style={{ background: "var(--bg2)" }}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(0,232,122,0.12) 0%, transparent 70%)" }}
      />
      <h2
        className="font-syne font-extrabold text-white leading-[1.05] max-w-[700px] mx-auto mb-8 relative"
        style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
      >
        Ready to Build<br />
        Your <span style={{ color: "var(--green)" }}>AI-Powered</span><br />
        Future?
      </h2>
      <p className="text-[16px] max-w-[400px] mx-auto mb-12 leading-[1.7] relative" style={{ color: "var(--muted)" }}>
        Book a free 30-minute discovery call. No pitches — just strategy.
      </p>
      <div className="flex gap-4 justify-center relative">
        <a
          href="mailto:hello@nexusai.agency"
          className="font-syne font-bold text-sm px-8 py-3.5 rounded-full no-underline flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,232,122,0.35)]"
          style={{ background: "var(--green)", color: "#050d0a" }}
        >
          Book Discovery Call ↗
        </a>
        <a
          href="https://wa.me/+91XXXXXXXXXX"
          className="text-sm no-underline flex items-center gap-2 border-b pb-0.5 transition-all duration-200 hover:border-[var(--green)]"
          style={{ color: "var(--text)", borderColor: "var(--border)" }}
        >
          WhatsApp Us →
        </a>
      </div>
    </section>
  );
}
