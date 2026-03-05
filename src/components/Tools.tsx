"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tools = [
  "🔷 WordPress", "🟢 OpenAI GPT-4o", "🟣 Claude AI",
  "⚡ n8n", "🔴 Make.com", "🔗 Zapier",
  "🧠 LangChain", "👥 CrewAI", "🗄️ Pinecone",
  "🐍 Python", "🔥 WooCommerce", "📊 Supabase",
  "🚀 AutoGen", "💬 Voiceflow", "📡 REST APIs", "🐋 Docker",
];

export default function Tools() {
  useScrollReveal();

  return (
    <section className="px-[60px] py-[120px]" style={{ background: "var(--bg)" }}>
      <div className="reveal">
        <div className="section-tag">Tech Stack</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
          Tools We<br /><span className="text-outlined">Master</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-3 mt-12 reveal">
        {tools.map((t) => (
          <div
            key={t}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full text-sm border transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(0,232,122,0.07)]"
            style={{
              background: "var(--card)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,232,122,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
