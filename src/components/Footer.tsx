import Link from "next/link";

const footerLinks = {
  Services: ["WordPress Dev", "AI Agents", "AI Automation", "Agentic AI"],
  Company: ["About Us", "Portfolio", "Blog", "Careers"],
  Contact: ["hello@nexusai.agency", "WhatsApp", "LinkedIn", "Twitter / X"],
};

export default function Footer() {
  return (
    <footer className="border-t px-[60px] pt-20 pb-10" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] mb-[60px]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-syne font-extrabold text-[22px] text-white no-underline">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse-dot inline-block" />
            NexusAI
          </Link>
          <p className="text-[13px] leading-[1.75] mt-4 max-w-[260px]" style={{ color: "var(--muted)" }}>
            WordPress & AI Automation Agency building intelligent systems that scale businesses automatically.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <div className="font-syne font-bold text-[13px] text-white uppercase tracking-[0.08em] mb-5">
              {heading}
            </div>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13px] no-underline transition-colors duration-200 hover:text-[var(--green)]"
                    style={{ color: "var(--muted)" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t pt-7 flex justify-between items-center" style={{ borderColor: "var(--border)" }}>
        <div className="text-[12px]" style={{ color: "var(--muted)" }}>
          © 2025 NexusAI Agency. All rights reserved.
        </div>
        <div className="flex gap-3">
          {["𝕏", "in", "▶", "ig"].map((s) => (
            <a
              key={s}
              href="#"
              className="w-9 h-9 border rounded-lg flex items-center justify-center text-[13px] no-underline transition-all duration-200 hover:border-[var(--green)] hover:text-[var(--green)] hover:bg-[rgba(0,232,122,0.08)]"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
