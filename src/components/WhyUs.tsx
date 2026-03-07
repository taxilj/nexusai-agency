"use client";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: "⚡", title: "Fast Delivery", desc: "Most of our projects go live in under 2 weeks. No long timelines, no delays, no excuses." },
  { icon: "🎯", title: "ROI-First Approach", desc: "Every feature we build is directly tied to a real business outcome — more leads, more sales, saved time." },
  { icon: "🔒", title: "Secure & Scalable", desc: "We build with enterprise-grade standards from day one so your systems grow without breaking." },
  { icon: "📞", title: "Direct Communication", desc: "You speak directly with the person building your product — no middlemen, no miscommunication." },
];

const cardData = [
  {
    tag: "// Speed Matters",
    title: "Most projects go live in under 2 weeks",
    description: "We follow a lean agile process — no bloated planning phases, no unnecessary meetings. You get a working product fast without sacrificing quality.",
    metrics: [
      { val: "2 Weeks", label: "Avg. Delivery Time" },
      { val: "100%", label: "On-Time Delivery" },
      { val: "0", label: "Missed Deadlines" },
      { val: "Day 1", label: "Work Starts" },
    ],
    badge: "⚡ Currently Accepting Projects",
  },
  {
    tag: "// Real Business Impact",
    title: "Every rupee you invest comes back multiplied",
    description: "We don't build features for the sake of it. Every decision is tied to a measurable outcome — more leads, more revenue or hours saved.",
    metrics: [
      { val: "5x", label: "Avg. ROI Reported" },
      { val: "95%", label: "Client Retention" },
      { val: "3x", label: "Lead Increase" },
      { val: "₹0", label: "Wasted Budget" },
    ],
    badge: "🎯 ROI Guaranteed Approach",
  },
  {
    tag: "// Enterprise Grade",
    title: "Built to handle 10x growth without breaking",
    description: "We architect every system with scalability in mind from day one — so when your business grows, your tech grows with it seamlessly.",
    metrics: [
      { val: "99%", label: "Uptime SLA" },
      { val: "10x", label: "Scale Ready" },
      { val: "256", label: "Bit Encryption" },
      { val: "24/7", label: "Monitoring" },
    ],
    badge: "🔒 Enterprise Security Standards",
  },
  {
    tag: "// Real Impact",
    title: "Our clients save 20+ hours every single week",
    description: "Our AI automation systems handle lead follow-up, content scheduling, CRM updates and reporting — completely on autopilot.",
    metrics: [
      { val: "20+", label: "Hours Saved / Week" },
      { val: "5x", label: "Faster Workflows" },
      { val: "99%", label: "Uptime SLA" },
      { val: "∞", label: "Scalability" },
    ],
    badge: "🟢 AI Systems Running Live",
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false), 300);
    return () => clearTimeout(timeout);
  }, [active]);

  const card = cardData[active];

  return (
    <section id="whyus" className="px-6 py-16 md:px-[60px] md:py-[120px]" style={{ background: "var(--bg2)" }}>
      <div className="reveal">
        <div className="section-tag">Why Choose Us</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
          Built for Results,<br /><span className="text-outlined">Not Just Demos</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start md:items-center mt-10 md:mt-16">
        {/* Feature list */}
        <div className="flex flex-col gap-0.5 reveal">
          {features.map((f, i) => (
            <div
              key={f.title}
              onClick={() => setActive(i)}
              className="flex gap-4 md:gap-5 items-start p-5 md:p-7 border transition-all duration-300 cursor-pointer"
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
                <div className="font-syne font-bold text-[15px] md:text-[16px] text-white mb-1.5">{f.title}</div>
                <p className="text-[12px] md:text-[13px] leading-[1.65]" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic right card */}
        <div className="reveal reveal-d2 relative">
          <div
            ref={cardRef}
            className="rounded-[16px] md:rounded-[20px] p-7 pb-10 md:p-11 md:pb-[44px] relative overflow-hidden border flex flex-col"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="absolute top-[-100px] right-[-100px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,232,122,0.1) 0%, transparent 70%)" }}
            />

            <div
              style={{
                transition: "opacity 300ms ease, transform 300ms ease",
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(12px)" : "translateY(0)",
              }}
              className="flex flex-col flex-1"
            >
              <div className="font-mono text-[10px] tracking-[0.1em] mb-3 md:mb-4" style={{ color: "var(--green)" }}>
                {card.tag}
              </div>
              <div className="font-syne font-extrabold text-[20px] md:text-[26px] text-white leading-[1.2] mb-3 md:mb-4">
                {card.title}
              </div>
              <p className="text-[12px] md:text-[13px] leading-[1.7]" style={{ color: "var(--muted)" }}>
                {card.description}
              </p>
              <div className="grid grid-cols-2 gap-0.5 mt-6 md:mt-8">
                {card.metrics.map((m) => (
                  <div key={m.label} className="p-3 md:p-5 border" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
                    <div className="font-syne font-extrabold text-[22px] md:text-[30px]" style={{ color: "var(--green)" }}>{m.val}</div>
                    <div className="text-[10px] md:text-[12px] mt-1" style={{ color: "var(--muted)" }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Badge — inside card, centered */}
              <div className="pt-6 md:pt-8 mt-auto text-center">
                <span
                  className="inline-block font-syne font-bold text-[10px] md:text-[12px] px-[14px] md:px-[18px] py-[8px] md:py-[10px] rounded-full whitespace-nowrap shadow-[0_8px_24px_rgba(0,232,122,0.4)]"
                  style={{ background: "var(--green)", color: "#050d0a" }}
                >
                  {card.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
