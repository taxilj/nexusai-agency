"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const plans = [
  {
    badge: "Starter",
    name: "WordPress Essentials",
    desc: "Best for businesses who need a fast, modern and professional website online quickly.",
    price: "₹24,999",
    period: "one-time project",
    features: ["Custom WordPress Design", "Up to 5 Pages", "Mobile Responsive", "Basic SEO Setup", "Speed Optimization", "30-Day Support"],
    hot: false,
    btnText: "Get Started",
  },
  {
    badge: "🔥 Most Popular",
    name: "AI Growth Bundle",
    desc: "Complete package — professional website plus AI chatbot and automation workflows.",
    price: "₹74,999",
    period: "one-time + setup",
    features: ["Everything in Starter", "1 Custom AI Chatbot", "3 Automation Workflows", "CRM Integration", "Lead Capture System", "60-Day Priority Support"],
    hot: true,
    btnText: "Start Now",
  },
  {
    badge: "Enterprise",
    name: "Agentic AI System",
    desc: "Full autonomous multi-agent AI pipeline for complex business operations at scale.",
    price: "Custom",
    period: "scoped per project",
    features: ["Multi-Agent Architecture", "RAG + Vector Database", "Custom AI Model Training", "Full API Integrations", "Dedicated Slack Channel", "Ongoing Retainer Available"],
    hot: false,
    btnText: "Book a Call",
  },
];

export default function Pricing() {
  useScrollReveal();
  const prefersReduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="px-6 py-16 md:px-[60px] md:py-[120px]" style={{ background: "var(--bg2)" }}>
      <div className="reveal text-center">
        <div className="section-tag justify-center">Transparent Pricing</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
          Simple Plans,<br /><span className="text-outlined">Real Value</span>
        </h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-10 md:mt-16">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            className={`p-7 md:p-11 border transition-colors duration-300 ${p.hot ? "order-first md:order-none" : ""} ${!p.hot ? "hover:border-[rgba(0,232,122,0.4)]" : ""}`}
            style={{
              background: p.hot ? "var(--green)" : "var(--card)",
              borderColor: p.hot ? "var(--green)" : "var(--border)",
            }}
            initial={prefersReduced ? {} : { opacity: 0, y: 60, scale: p.hot ? 0.95 : 1 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              ease: "easeOut",
              ...(p.hot ? { type: "spring", stiffness: 200, damping: 12 } : {}),
            }}
          >
            {/* Featured card pulse glow */}
            {p.hot && !prefersReduced && (
              <motion.div
                className="absolute inset-0 rounded-none pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0,232,122,0)",
                    "0 0 30px rgba(0,232,122,0.3)",
                    "0 0 0px rgba(0,232,122,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <div
              className="font-mono text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full inline-block mb-5 md:mb-6"
              style={{
                background: p.hot ? "rgba(5,13,10,0.2)" : "rgba(0,232,122,0.12)",
                color: p.hot ? "#050d0a" : "var(--green)",
              }}
            >
              {p.badge}
            </div>
            <div className="font-syne font-extrabold text-[20px] md:text-[22px] mb-2" style={{ color: p.hot ? "#050d0a" : "white" }}>
              {p.name}
            </div>
            <p className="text-[12px] md:text-[13px] leading-[1.6] mb-5 md:mb-7" style={{ color: p.hot ? "rgba(5,13,10,0.6)" : "var(--muted)" }}>
              {p.desc}
            </p>
            <div className="font-syne font-extrabold text-[40px] md:text-[48px] leading-none" style={{ color: p.hot ? "#050d0a" : "white" }}>
              {p.price}
            </div>
            <div className="text-[12px] md:text-[13px] mb-6 md:mb-8" style={{ color: p.hot ? "rgba(5,13,10,0.5)" : "var(--muted)" }}>
              {p.period}
            </div>
            <div className="h-px mb-5 md:mb-7" style={{ background: p.hot ? "rgba(5,13,10,0.2)" : "var(--border)" }} />
            <ul className="flex flex-col gap-3 md:gap-3.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-[12px] md:text-[13px] leading-relaxed" style={{ color: p.hot ? "rgba(5,13,10,0.8)" : "var(--text)" }}>
                  <span style={{ color: p.hot ? "#050d0a" : "var(--green)", flexShrink: 0 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              className="block mt-7 md:mt-9 text-center py-3.5 rounded-full font-syne font-bold text-sm no-underline border min-h-[44px] flex items-center justify-center"
              style={
                p.hot
                  ? { background: "#050d0a", color: "var(--green)", borderColor: "transparent" }
                  : { background: "transparent", color: "var(--text)", borderColor: "var(--border)" }
              }
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {p.btnText}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
