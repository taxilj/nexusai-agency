"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    num: "01 /",
    icon: "🌐",
    name: "WordPress Development",
    desc: "Custom, blazing-fast WordPress websites with pixel-perfect design. From landing pages to full e-commerce & membership platforms.",
    tags: ["Custom Themes", "WooCommerce", "Performance", "SEO Ready"],
  },
  {
    num: "02 /",
    icon: "🤖",
    name: "AI Agents",
    desc: "Deploy intelligent agents that handle tasks autonomously — customer support, lead qualification, data processing & more 24/7.",
    tags: ["GPT-4o", "Claude AI", "Multi-Agent", "RAG Systems"],
  },
  {
    num: "03 /",
    icon: "⚡",
    name: "AI Automation",
    desc: "End-to-end workflow automation using n8n, Make & Zapier. Connect your tools, eliminate repetitive work, scale operations 10x.",
    tags: ["n8n", "Make.com", "CRM Integration", "Zapier"],
  },
  {
    num: "04 /",
    icon: "🧠",
    name: "Agentic AI Systems",
    desc: "Advanced autonomous AI pipelines that plan, reason & execute complex multi-step tasks — the next level of business intelligence.",
    tags: ["LangChain", "CrewAI", "AutoGen", "Vector DB"],
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="services" className="px-[60px] py-[120px]" style={{ background: "var(--bg2)" }}>
      <div className="flex justify-between items-end mb-16">
        <div className="reveal">
          <div className="section-tag">What We Do</div>
          <h2 className="font-syne font-extrabold text-white leading-[1.1]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
            Our Core<br />
            <span className="text-outlined">Services</span>
          </h2>
        </div>
        <p className="reveal reveal-d2 max-w-[340px] text-[15px] leading-[1.7]" style={{ color: "var(--muted)" }}>
          From intelligent websites to fully autonomous AI agents — we engineer solutions that work while you sleep.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-0.5">
        {services.map((s, i) => (
          <div
            key={s.name}
            className={`card-hover p-11 reveal ${i === 1 || i === 3 ? "reveal-d1" : i === 3 ? "reveal-d2" : ""}`}
          >
            <div className="font-mono text-[11px] tracking-[0.1em] mb-7" style={{ color: "var(--green)" }}>
              {s.num}
            </div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ background: "var(--greensoft)" }}
            >
              {s.icon}
            </div>
            <div className="font-syne font-bold text-[22px] text-white mb-3.5">{s.name}</div>
            <p className="text-sm leading-[1.75] mb-7" style={{ color: "var(--muted)" }}>{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-3 py-1 rounded-full border"
                  style={{
                    color: "var(--green)",
                    background: "rgba(0,232,122,0.08)",
                    borderColor: "rgba(0,232,122,0.2)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <span
              className="absolute top-11 right-11 text-xl transition-all duration-300"
              style={{ color: "var(--border)" }}
            >
              ↗
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
