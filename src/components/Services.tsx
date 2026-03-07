"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const services = [
  {
    num: "01 /",
    icon: "🌐",
    name: "WordPress Development",
    desc: "We build fast, beautiful and conversion-focused WordPress websites. From business landing pages to full WooCommerce stores — pixel perfect on every device.",
    tags: ["Custom Themes", "WooCommerce", "Page Speed", "SEO Ready"],
  },
  {
    num: "02 /",
    icon: "🤖",
    name: "AI Agents",
    desc: "We deploy smart AI agents that handle your repetitive tasks — customer support, lead qualification, follow-ups and data processing, all running 24/7.",
    tags: ["GPT-4o", "Claude AI", "Multi-Agent", "RAG Systems"],
  },
  {
    num: "03 /",
    icon: "⚡",
    name: "AI Automation",
    desc: "We connect your tools and automate your workflows using n8n, Make and Zapier — saving your team hours every single week without writing a single line of code.",
    tags: ["n8n", "Make.com", "Zapier", "CRM Automation"],
  },
  {
    num: "04 /",
    icon: "🧠",
    name: "Agentic AI Systems",
    desc: "We build advanced multi-agent AI pipelines that can plan, think and execute complex tasks end-to-end — the most powerful form of business automation available today.",
    tags: ["LangChain", "CrewAI", "AutoGen", "Vector DB"],
  },
];

function ServiceCard({ s, i, prefersReduced }: { s: typeof services[0]; i: number; prefersReduced: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="card-hover p-7 md:p-11 group"
      initial={prefersReduced ? {} : { opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
    >
      <div className="font-mono text-[11px] tracking-[0.1em] mb-5 md:mb-7" style={{ color: "var(--green)" }}>
        {s.num}
      </div>
      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 md:mb-6"
        style={{ background: "var(--greensoft)" }}
        whileHover={prefersReduced ? {} : { rotate: 10, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {s.icon}
      </motion.div>
      <div className="font-syne font-bold text-[20px] md:text-[22px] text-white mb-3 md:mb-3.5">{s.name}</div>
      <p className="text-[13px] md:text-sm leading-[1.75] mb-5 md:mb-7" style={{ color: "var(--muted)" }}>{s.desc}</p>
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
      <motion.span
        className="absolute top-7 right-7 md:top-11 md:right-11 text-xl"
        style={{ color: "var(--border)" }}
        whileHover={prefersReduced ? {} : { x: 6, y: -6, color: "var(--green)" }}
        transition={{ duration: 0.2 }}
      >
        ↗
      </motion.span>
    </motion.div>
  );
}

export default function Services() {
  useScrollReveal();
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section id="services" className="px-6 py-16 md:px-[60px] md:py-[120px]" style={{ background: "var(--bg2)" }}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-16 gap-4">
        <div className="reveal">
          <div className="section-tag">What We Do</div>
          <h2 className="font-syne font-extrabold text-white leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
            Our Core<br />
            <span className="text-outlined">Services</span>
          </h2>
        </div>
        <p className="reveal reveal-d2 max-w-full md:max-w-[340px] text-[14px] md:text-[15px] leading-[1.7]" style={{ color: "var(--muted)" }}>
          From high-converting WordPress websites to fully autonomous AI agents — we build solutions that generate results around the clock.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {services.map((s, i) => (
          <ServiceCard key={s.name} s={s} i={i} prefersReduced={prefersReduced} />
        ))}
      </div>
    </section>
  );
}
