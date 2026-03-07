"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

  return (
    <section className="px-6 py-16 md:px-[60px] md:py-[120px]" style={{ background: "var(--bg)" }}>
      <div className="reveal">
        <div className="section-tag">Tech Stack</div>
        <h2 className="font-syne font-extrabold text-white leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
          Tools We<br /><span className="text-outlined">Master</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 md:gap-3 mt-10 md:mt-12 reveal">
        {tools.map((t) => (
          <div
            key={t}
            className="flex items-center gap-2 md:gap-2.5 px-3 py-2 md:px-5 md:py-3 rounded-full text-[12px] md:text-sm border transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(0,232,122,0.07)]"
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
