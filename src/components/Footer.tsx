import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "WordPress Dev", href: "#services" },
    { label: "AI Agents", href: "#services" },
    { label: "AI Automation", href: "#services" },
    { label: "Agentic AI", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Contact: [
    { label: "hello@agentryx.com", href: "mailto:hello@agentryx.com" },
    { label: "WhatsApp", href: "https://wa.me/919104980549" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/takshil-prajapati-16bba5298" },
    { label: "Instagram", href: "https://www.instagram.com/takshil52?igsh=ZTZwdW9tcXhqb2w1" },
  ],
};

const socialLinks = [
  { label: "in", href: "https://www.linkedin.com/in/takshil-prajapati-16bba5298" },
  { label: "ig", href: "https://www.instagram.com/takshil52?igsh=ZTZwdW9tcXhqb2w1" },
];

export default function Footer() {
  return (
    <footer className="border-t px-6 py-12 md:px-[60px] md:pt-20 md:pb-10" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-[60px] mb-10 md:mb-[60px]">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-syne font-extrabold text-[22px] text-white no-underline">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse-dot inline-block" />
            Agentryx
          </Link>
          <p className="text-[13px] leading-[1.75] mt-4 max-w-[300px] md:max-w-[260px]" style={{ color: "var(--muted)" }}>
            AI Automation &amp; WordPress Agency building intelligent systems that scale your business completely on autopilot.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <div className="font-syne font-bold text-[12px] md:text-[13px] text-white uppercase tracking-[0.08em] mb-4 md:mb-5">
              {heading}
            </div>
            <ul className="flex flex-col gap-2.5 md:gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") || l.href.startsWith("mailto:") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[12px] md:text-[13px] no-underline transition-colors duration-200 hover:text-[var(--green)] min-h-[44px] flex items-center"
                    style={{ color: "var(--muted)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t pt-6 md:pt-7 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-center md:text-left" style={{ borderColor: "var(--border)" }}>
        <div className="text-[11px] md:text-[12px]" style={{ color: "var(--muted)" }}>
          © 2025 Agentryx. All rights reserved.
        </div>
        <div className="flex gap-3 justify-center">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border rounded-lg flex items-center justify-center text-[13px] no-underline transition-all duration-200 hover:border-[var(--green)] hover:text-[var(--green)] hover:bg-[rgba(0,232,122,0.08)]"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
