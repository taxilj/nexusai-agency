"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: "⚡", title: "Ship Fast, Ship Right", desc: "Most projects live in under 2 weeks. No bloated timelines, no excuses." },
  { icon: "🎯", title: "ROI-Focused Builds", desc: "Every feature tied to a business outcome — traffic, leads or saved hours." },
  { icon: "🔒", title: "Secure & Scalable", desc: "Enterprise-grade architecture from day one. Handles 10x growth easily." },
  { icon: "📞", title: "Direct Communication", desc: "No middlemen. You talk directly to the builder — fast updates, real ownership." },
];

const metrics = [
  { val: "20+", label: "Hours Saved / Week" },
  { val: "3x", label: "Faster Workflows" },
  { val: "99%", label: "Uptime SLA" },
  { val: "∞", label: "Scalability" },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);
  useScrollReveal();

  return (
    <section id="whyus" className="px-[60px] py-[120px]" style={{ background: "var(--bg2)" }}>
      <div className="reveal">
        <div className="section-tag">Why Choose Us</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
          Built for Results,<br /><span className="text-outlined">Not Just Demos</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-20 items-center mt-16">
        {/* Feature list */}
        <div className="flex flex-col gap-0.5 reveal">
          {features.map((f, i) => (
            <div
              key={f.title}
              onClick={() => setActive(i)}
              className="flex gap-5 items-start p-7 border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: active === i ? "rgba(0,232,122,0.4)" : "var(--border)",
                background: active === i ? "var(--card2)" : "var(--card)",
              }}
            >
              <div
                className="w-10 h-10 flex-shrink-0 rounded-[10px] flex items-center justify-center text-lg transition-all duration-300"
                style={{ background: active === i ? "var(--green)" : "var(--greensoft)" }}
              >
                {f.icon}
              </div>
              <div>
                <div className="font-syne font-bold text-[16px] text-white mb-1.5">{f.title}</div>
                <p className="text-[13px] leading-[1.65]" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics card */}
        <div className="reveal reveal-d2 relative">
          <div
            className="rounded-[20px] p-11 relative overflow-hidden border"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,232,122,0.1) 0%, transparent 70%)" }}
            />
            <div className="font-mono text-[10px] tracking-[0.1em] mb-4" style={{ color: "var(--green)" }}>
              // Real Impact
            </div>
            <div className="font-syne font-extrabold text-[26px] text-white leading-[1.2] mb-4">
              Clients save 20+ hours per week with our AI automations
            </div>
            <p className="text-[13px] leading-[1.7]" style={{ color: "var(--muted)" }}>
              Our agentic systems handle lead follow-up, content creation, CRM updates and reporting — fully automated.
            </p>
            <div className="grid grid-cols-2 gap-0.5 mt-8">
              {metrics.map((m) => (
                <div key={m.label} className="p-5 border" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
                  <div className="font-syne font-extrabold text-[30px]" style={{ color: "var(--green)" }}>{m.val}</div>
                  <div className="text-[12px] mt-1" style={{ color: "var(--muted)" }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div
              className="absolute bottom-[-20px] left-1/2 animate-float font-syne font-bold text-[12px] px-[18px] py-[10px] rounded-full whitespace-nowrap shadow-[0_8px_24px_rgba(0,232,122,0.4)]"
              style={{ background: "var(--green)", color: "#050d0a" }}
            >
              🟢 AI Systems Live Right Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
