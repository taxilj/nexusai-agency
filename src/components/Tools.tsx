"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const tools = [
  "🔷 WordPress", "🟢 OpenAI GPT-4o", "🟣 Claude AI",
  "⚡ n8n", "🔴 Make.com", "🔗 Zapier",
  "🧠 LangChain", "👥 CrewAI", "🗄️ Pinecone",
  "🐍 Python", "🔥 WooCommerce", "📊 Supabase",
  "🚀 AutoGen", "💬 Voiceflow", "📡 REST APIs",
  "🐋 Docker", "🔐 Webhook", "📬 ActiveCampaign",
];

export default function Tools() {
  useScrollReveal();
  const prefersReduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-16 md:px-[60px] md:py-[120px]" style={{ background: "var(--bg)" }}>
      <div className="reveal">
        <div className="section-tag">Tech Stack</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
          Tools We<br /><span className="text-outlined">Master</span>
        </h2>
      </div>

      <div ref={ref} className="flex flex-wrap gap-2 md:gap-3 mt-10 md:mt-12">
        {tools.map((t, i) => (
          <motion.div
            key={t}
            className="flex items-center gap-2 md:gap-2.5 px-3 py-2 md:px-5 md:py-3 rounded-full text-[12px] md:text-sm border cursor-default"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.04, type: "spring", stiffness: 200, damping: 15 }}
            whileHover={prefersReduced ? {} : { scale: 1.05, borderColor: "rgba(0,232,122,0.5)" }}
          >
            {t}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
