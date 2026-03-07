"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const reviews = [
  {
    stars: 5,
    text: "Agentryx built our WordPress site and the speed and design quality is absolutely top level. Our clients are always impressed.",
    initials: "RK",
    name: "Raj Kothari",
    role: "Founder, DigiMart India",
  },
  {
    stars: 5,
    text: "Their AI automation completely transformed our lead follow-up process. Everything runs automatically now — zero manual effort from our team.",
    initials: "SP",
    name: "Sneha Patel",
    role: "CEO, GrowthNest",
  },
  {
    stars: 5,
    text: "After deploying their AI chatbot, 80% of our customer support became fully automated. Our team saves hours every single day.",
    initials: "AJ",
    name: "Aryan Joshi",
    role: "Co-Founder, TechBridge",
  },
  {
    stars: 5,
    text: "Fast delivery, clean code and top-class communication. Best agency for AI and WordPress development in India — hands down.",
    initials: "MV",
    name: "Mihir Vora",
    role: "Product Lead, Scalify",
  },
];

function StarRating({ count, delay, prefersReduced }: { count: number; delay: number; prefersReduced: boolean }) {
  return (
    <div className="flex tracking-[2px] mb-4 md:mb-5" style={{ color: "var(--green)" }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="text-sm"
          initial={prefersReduced ? {} : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 12, delay: delay + i * 0.1 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  useScrollReveal();
  const prefersReduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-16 md:px-[60px] md:py-[120px]" style={{ background: "var(--bg)" }}>
      <div className="reveal">
        <div className="section-tag">Client Love</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
          Real Words,<br /><span className="text-outlined">Real Results</span>
        </h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-10 md:mt-16">
        {reviews.map((r, i) => {
          const fromLeft = i % 2 === 0;
          return (
            <motion.div
              key={r.name}
              className="p-7 md:p-10 border transition-colors duration-300 hover:border-[rgba(0,232,122,0.3)]"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
              initial={prefersReduced ? {} : { opacity: 0, x: fromLeft ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              {isInView && <StarRating count={r.stars} delay={i * 0.1 + 0.3} prefersReduced={prefersReduced} />}
              <p className="text-[14px] md:text-[15px] leading-[1.75] mb-5 md:mb-7 italic" style={{ color: "var(--text)" }}>
                &quot;{r.text}&quot;
              </p>
              <div className="flex items-center gap-3 md:gap-3.5">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-syne font-extrabold text-[14px] md:text-[15px] border-2"
                  style={{ background: "var(--greensoft)", color: "var(--green)", borderColor: "var(--border)" }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-syne font-bold text-[13px] md:text-[14px] text-white">{r.name}</div>
                  <div className="text-[11px] md:text-[12px]" style={{ color: "var(--muted)" }}>{r.role}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
