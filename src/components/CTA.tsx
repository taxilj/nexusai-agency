"use client";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const headingWords = ["Ready", "to", "Build", "Your", "AI-Powered", "Future?"];

export default function CTA() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section id="contact" className="px-6 py-16 md:px-[60px] md:py-[120px] text-center relative overflow-hidden" style={{ background: "var(--bg2)" }}>
      {/* Rotating glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[400px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(0,232,122,0.12) 0%, transparent 70%)" }}
        animate={prefersReduced ? {} : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Heading word by word */}
      <h2
        className="font-syne font-extrabold text-white leading-[1.05] max-w-[700px] mx-auto mb-6 md:mb-8 relative"
        style={{ fontSize: "clamp(36px, 8vw, 80px)" }}
      >
        {headingWords.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.3em]"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={word === "AI-Powered" ? { color: "var(--green)" } : {}}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <motion.p
        className="text-[14px] md:text-[16px] max-w-[400px] mx-auto mb-8 md:mb-12 leading-[1.7] relative"
        style={{ color: "var(--muted)" }}
        initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Book a free 30-minute strategy call. No sales pitch — just pure value and a clear action plan.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-center items-center relative"
        initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <motion.a
          href="mailto:hello@agentryx.com"
          className="w-full md:w-auto font-syne font-bold text-sm px-8 py-3.5 rounded-full no-underline flex items-center justify-center gap-2 min-h-[44px]"
          style={{ background: "var(--green)", color: "#050d0a" }}
          whileHover={prefersReduced ? {} : { scale: 1.05, boxShadow: "0 12px 32px rgba(0,232,122,0.35)" }}
          whileTap={{ scale: 0.98 }}
        >
          Book Free Call ↗
        </motion.a>
        <a
          href="https://wa.me/919104980549"
          className="w-full md:w-auto text-sm no-underline flex items-center justify-center gap-2 border-b pb-0.5 transition-all duration-200 hover:border-[var(--green)] min-h-[44px]"
          style={{ color: "var(--text)", borderColor: "var(--border)" }}
        >
          WhatsApp Us →
        </a>
      </motion.div>
    </section>
  );
}
