"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    stars: "★★★★★",
    text: "Their AI automation saved our team 25 hours every week. The n8n workflows they built are running flawlessly — ROI was visible within the first month.",
    initials: "RK",
    name: "Rahul Kumar",
    role: "CEO, TechScale India",
  },
  {
    stars: "★★★★★",
    text: "The WordPress site loads in under 1 second and the AI chatbot handles 80% of our support tickets automatically. Incredible work, incredible team.",
    initials: "SP",
    name: "Sarah Patel",
    role: "Founder, EcomVault",
  },
  {
    stars: "★★★★★",
    text: "The agentic AI they built now qualifies leads, sends proposals and updates our CRM autonomously. It's like having 3 extra employees at a fraction of the cost.",
    initials: "AJ",
    name: "Arjun Joshi",
    role: "Co-Founder, GrowthLab",
  },
  {
    stars: "★★★★★",
    text: "Fast delivery, clean code, zero excuses. They shipped our entire WooCommerce + AI integration in 10 days. Will hire again for all future projects.",
    initials: "MV",
    name: "Meera Varma",
    role: "Product Manager, Nexora",
  },
];

export default function Testimonials() {
  useScrollReveal();

  return (
    <section className="px-[60px] py-[120px]" style={{ background: "var(--bg)" }}>
      <div className="reveal">
        <div className="section-tag">Client Love</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
          Real Words,<br /><span className="text-outlined">Real Results</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-0.5 mt-16">
        {reviews.map((r, i) => (
          <div
            key={r.name}
            className={`p-10 border transition-all duration-300 hover:border-[rgba(0,232,122,0.3)] reveal ${i === 1 || i === 3 ? "reveal-d1" : ""} ${i === 3 ? "reveal-d2" : ""}`}
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className="text-sm tracking-[2px] mb-5" style={{ color: "var(--green)" }}>{r.stars}</div>
            <p className="text-[15px] leading-[1.75] mb-7 italic" style={{ color: "var(--text)" }}>
              "{r.text}"
            </p>
            <div className="flex items-center gap-3.5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-syne font-extrabold text-[15px] border-2"
                style={{ background: "var(--greensoft)", color: "var(--green)", borderColor: "var(--border)" }}
              >
                {r.initials}
              </div>
              <div>
                <div className="font-syne font-bold text-[14px] text-white">{r.name}</div>
                <div className="text-[12px]" style={{ color: "var(--muted)" }}>{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
