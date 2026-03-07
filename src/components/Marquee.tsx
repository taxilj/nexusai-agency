const items = [
  "WordPress Development", "AI Agents", "Agentic AI Systems",
  "Business Automation", "n8n Workflows", "OpenAI Integration",
  "Custom Chatbots", "API Integration", "Lead Automation",
  "CRM Integration",
];

export default function Marquee() {
  const all = [...items, ...items];

  return (
    <div
      className="py-6 md:py-8 overflow-hidden border-t border-b"
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <div className="animate-marquee flex w-max">
        {all.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 md:gap-4 px-6 md:px-9 font-syne text-[12px] md:text-sm font-semibold tracking-[0.06em] uppercase whitespace-nowrap"
            style={{ color: "var(--muted)" }}
          >
            <span style={{ color: "var(--green)" }}>●</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
