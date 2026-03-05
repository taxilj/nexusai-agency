"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Discovery Call", desc: "We map your goals, pain points & existing stack to define the perfect solution." },
  { num: "02", title: "Strategy & Design", desc: "Architecture, wireframes & workflow diagrams delivered in 3–5 days." },
  { num: "03", title: "Build & Integrate", desc: "Agile development with weekly demos. Full integrations & testing included." },
  { num: "04", title: "Launch & Scale", desc: "Deploy, monitor & iterate. Ongoing support to keep your AI systems sharp." },
];

export default function Process() {
  useScrollReveal();

  return (
    <section id="process" className="px-[60px] py-[120px]" style={{ background: "var(--bg)" }}>
      <div className="reveal">
        <div className="section-tag">How It Works</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
          Idea to<br /><span className="text-outlined">Deployment</span>
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-0.5 mt-16">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className={`p-8 border relative transition-all duration-300 hover:border-[rgba(0,232,122,0.4)] reveal reveal-d${i}`}
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div
              className="font-syne font-extrabold text-[56px] leading-none absolute top-4 right-5"
              style={{ color: "rgba(0,232,122,0.07)" }}
            >
              {s.num}
            </div>
            <div className="font-syne font-bold text-[18px] text-white mb-3 relative">{s.title}</div>
            <p className="text-[13px] leading-[1.7] relative" style={{ color: "var(--muted)" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
