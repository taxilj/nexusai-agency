"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const stats = [
  { number: 40, suffix: "+", label: "Projects Delivered", duration: 2 },
  { number: 95, suffix: "%", label: "Client Satisfaction", duration: 2 },
  { number: 5, suffix: "x", label: "Avg. Efficiency Gain", duration: 1.5 },
  { number: 24, suffix: "/7", label: "AI Agents Running", duration: 1.5 },
];

function CountUpStat({ end, duration }: { end: number; duration: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) motionValue.set(end);
  }, [isInView, motionValue, end]);

  useEffect(() => {
    const unsub = spring.on("change", (v: number) => setDisplay(Math.round(v).toString()));
    return unsub;
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

const headingLine1 = "We Automate";

export default function Hero() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section
      className="md:min-h-screen flex flex-col justify-start md:justify-center px-6 pt-24 pb-10 md:px-[60px] md:pt-[140px] md:pb-20 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Glows with pulse */}
      <motion.div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,232,122,0.12) 0%, transparent 70%)" }}
        animate={prefersReduced ? {} : { scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[10%] bottom-[10%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full pointer-events-none hidden md:block"
        style={{ background: "radial-gradient(circle, rgba(0,232,122,0.07) 0%, transparent 70%)" }}
        animate={prefersReduced ? {} : { scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Tag */}
      <motion.div
        className="flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] rounded-full px-4 py-2 w-fit mb-8"
        initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse-dot" />
        <span className="font-mono text-[12px] text-[var(--green)] tracking-[0.05em]">
          🤖 Available for New Projects — 2026
        </span>
      </motion.div>

      {/* Title with typing effect */}
      <motion.h1
        className="font-syne font-extrabold leading-[1.0] text-white max-w-[800px]"
        style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span>
          {prefersReduced
            ? headingLine1
            : headingLine1.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 0.3 + i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
        </span>
        <br />
        <motion.span
          className="text-outlined"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Your Business
        </motion.span>
        <br />
        <motion.span
          style={{ color: "var(--green)" }}
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          With AI.
        </motion.span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        className="text-[15px] md:text-[17px] text-[var(--muted)] max-w-[460px] leading-[1.7] mt-7 font-light"
        initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        WordPress Development, AI Agents &amp; Agentic AI Automation — we build intelligent systems that work for your business 24/7, even while you sleep.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 items-start md:items-center mt-11"
        initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.a
          href="#contact"
          className="w-full md:w-auto text-center bg-[var(--green)] text-[#050d0a] font-syne font-bold text-sm px-8 py-3.5 rounded-full no-underline flex items-center justify-center gap-2 transition-shadow duration-200"
          whileHover={prefersReduced ? {} : { scale: 1.05, boxShadow: "0 12px 32px rgba(0,232,122,0.35)" }}
          whileTap={{ scale: 0.98 }}
        >
          Start a Project ↗
        </motion.a>
        <a
          href="#services"
          className="w-full md:w-auto text-center text-[var(--text)] text-sm no-underline flex items-center justify-center gap-2 border-b border-[var(--border)] pb-0.5 transition-all duration-200 hover:text-[var(--green)] hover:border-[var(--green)]"
        >
          Explore Services →
        </a>
      </motion.div>

      {/* Stats with count-up */}
      <motion.div
        className="grid grid-cols-2 md:flex gap-0 mt-14 md:mt-20 border-t pt-8 md:pt-12"
        style={{ borderColor: "var(--border)" }}
        initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7 }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex-1 px-4 md:px-10 py-4 md:py-0 ${i < 2 ? "border-b md:border-b-0" : ""
              } ${i < stats.length - 1 ? "md:border-r" : ""
              }`}
            style={{
              paddingLeft: i === 0 ? 0 : undefined,
              borderColor: "var(--border)",
            }}
          >
            <div className="font-syne font-extrabold text-[32px] md:text-[42px] text-white leading-none">
              {prefersReduced ? (
                s.number
              ) : (
                <CountUpStat end={s.number} duration={s.duration} />
              )}
              <span style={{ color: "var(--green)" }}>{s.suffix}</span>
            </div>
            <div className="text-[12px] md:text-[13px] text-[var(--muted)] mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
