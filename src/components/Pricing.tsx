"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    badge: "Starter",
    name: "WordPress Essentials",
    desc: "Perfect for businesses needing a fast, professional online presence.",
    price: "$499",
    period: "one-time project",
    features: ["Custom WordPress Design", "Up to 5 Pages", "Mobile Responsive", "Basic SEO Setup", "30-Day Support"],
    hot: false,
    btnText: "Get Started",
  },
  {
    badge: "🔥 Most Popular",
    name: "AI Growth Bundle",
    desc: "WordPress site + AI agent + automation workflows. The full stack.",
    price: "$1,499",
    period: "one-time + setup",
    features: ["Everything in Starter", "1 Custom AI Chatbot", "3 Automation Workflows", "CRM Integration", "60-Day Priority Support"],
    hot: true,
    btnText: "Start Now",
  },
  {
    badge: "Enterprise",
    name: "Agentic AI System",
    desc: "Full autonomous AI pipeline for complex business processes at scale.",
    price: "Custom",
    period: "scoped per project",
    features: ["Multi-Agent Architecture", "RAG + Vector Database", "Custom AI Training", "Full API Integrations", "Ongoing Retainer Available"],
    hot: false,
    btnText: "Book a Call",
  },
];

export default function Pricing() {
  useScrollReveal();

  return (
    <section id="pricing" className="px-[60px] py-[120px]" style={{ background: "var(--bg2)" }}>
      <div className="reveal text-center">
        <div className="section-tag justify-center">Transparent Pricing</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
          Simple Plans,<br /><span className="text-outlined">Real Value</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-0.5 mt-16">
        {plans.map((p, i) => (
          <div
            key={p.name}
            className={`p-11 border reveal reveal-d${i} transition-all duration-300 ${!p.hot ? "hover:-translate-y-1 hover:border-[rgba(0,232,122,0.4)]" : ""}`}
            style={{
              background: p.hot ? "var(--green)" : "var(--card)",
              borderColor: p.hot ? "var(--green)" : "var(--border)",
            }}
          >
            <div
              className="font-mono text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full inline-block mb-6"
              style={{
                background: p.hot ? "rgba(5,13,10,0.2)" : "rgba(0,232,122,0.12)",
                color: p.hot ? "#050d0a" : "var(--green)",
              }}
            >
              {p.badge}
            </div>
            <div className="font-syne font-extrabold text-[22px] mb-2" style={{ color: p.hot ? "#050d0a" : "white" }}>
              {p.name}
            </div>
            <p className="text-[13px] leading-[1.6] mb-7" style={{ color: p.hot ? "rgba(5,13,10,0.6)" : "var(--muted)" }}>
              {p.desc}
            </p>
            <div className="font-syne font-extrabold text-[48px] leading-none" style={{ color: p.hot ? "#050d0a" : "white" }}>
              {p.price}
            </div>
            <div className="text-[13px] mb-8" style={{ color: p.hot ? "rgba(5,13,10,0.5)" : "var(--muted)" }}>
              {p.period}
            </div>
            <div className="h-px mb-7" style={{ background: p.hot ? "rgba(5,13,10,0.2)" : "var(--border)" }} />
            <ul className="flex flex-col gap-3.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-[13px] leading-relaxed" style={{ color: p.hot ? "rgba(5,13,10,0.8)" : "var(--text)" }}>
                  <span style={{ color: p.hot ? "#050d0a" : "var(--green)", flexShrink: 0 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block mt-9 text-center py-3.5 rounded-full font-syne font-bold text-sm no-underline border transition-all duration-200"
              style={
                p.hot
                  ? { background: "#050d0a", color: "var(--green)", borderColor: "transparent" }
                  : { background: "transparent", color: "var(--text)", borderColor: "var(--border)" }
              }
            >
              {p.btnText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
