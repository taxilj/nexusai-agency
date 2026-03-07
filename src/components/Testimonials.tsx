"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    stars: "★★★★★",
    text: "Agentryx built our WordPress site and the speed and design quality is absolutely top level. Our clients are always impressed.",
    initials: "RK",
    name: "Raj Kothari",
    role: "Founder, DigiMart India",
  },
  {
    stars: "★★★★★",
    text: "Their AI automation completely transformed our lead follow-up process. Everything runs automatically now — zero manual effort from our team.",
    initials: "SP",
    name: "Sneha Patel",
    role: "CEO, GrowthNest",
  },
  {
    stars: "★★★★★",
    text: "After deploying their AI chatbot, 80% of our customer support became fully automated. Our team saves hours every single day.",
    initials: "AJ",
    name: "Aryan Joshi",
    role: "Co-Founder, TechBridge",
  },
  {
    stars: "★★★★★",
    text: "Fast delivery, clean code and top-class communication. Best agency for AI and WordPress development in India — hands down.",
    initials: "MV",
    name: "Mihir Vora",
    role: "Product Lead, Scalify",
  },
];

export default function Testimonials() {
  useScrollReveal();

  return (
    <section className="px-6 py-16 md:px-[60px] md:py-[120px]" style={{ background: "var(--bg)" }}>
      <div className="reveal">
        <div className="section-tag">Client Love</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
          Real Words,<br /><span className="text-outlined">Real Results</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-10 md:mt-16">
        {reviews.map((r, i) => (
          <div
            key={r.name}
            className={`p-7 md:p-10 border transition-all duration-300 hover:border-[rgba(0,232,122,0.3)] reveal ${i === 1 || i === 3 ? "reveal-d1" : ""} ${i === 3 ? "reveal-d2" : ""}`}
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="text-sm tracking-[2px] mb-4 md:mb-5" style={{ color: "var(--green)" }}>{r.stars}</div>
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
          </div>
        ))}
      </div>
    </section>
  );
}
