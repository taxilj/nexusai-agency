"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const steps = [
  { num: "01", title: "Discovery Call", desc: "We understand your business, your goals and your current tools — then we plan the perfect solution." },
  { num: "02", title: "Strategy & Design", desc: "We create a detailed roadmap, architecture and wireframes — delivered within 3 to 5 business days." },
  { num: "03", title: "Build & Integrate", desc: "We develop your solution with weekly progress updates, full testing and seamless integrations included." },
  { num: "04", title: "Launch & Scale", desc: "We go live, monitor performance and continue to optimize — keeping your AI systems sharp and growing." },
];

const slideDirections = [
  { x: -60, y: 0 },
  { x: 0, y: 60 },
  { x: 0, y: 60 },
  { x: 60, y: 0 },
];

export default function Process() {
  useScrollReveal();
  const prefersReduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="px-6 py-16 md:px-[60px] md:py-[120px]" style={{ background: "var(--bg)" }}>
      <div className="reveal">
        <div className="section-tag">How It Works</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
          Idea to<br /><span className="text-outlined">Deployment</span>
        </h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-0.5 mt-10 md:mt-16">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="p-7 md:p-8 border relative transition-colors duration-300 hover:border-[rgba(0,232,122,0.4)]"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
            initial={prefersReduced ? {} : { opacity: 0, x: slideDirections[i].x, y: slideDirections[i].y }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
          >
            <motion.div
              className="font-syne font-extrabold text-[48px] md:text-[56px] leading-none absolute top-4 right-5"
              animate={prefersReduced ? {} : { opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
              style={{ color: "rgba(0,232,122,1)" }}
            >
              {s.num}
            </motion.div>
            <div className="font-syne font-bold text-[18px] text-white mb-3 relative">{s.title}</div>
            <p className="text-[13px] leading-[1.7] relative" style={{ color: "var(--muted)" }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
