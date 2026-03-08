import React from "react";
import Link from "next/link";

const serviceLinks = [
  { label: "WordPress Dev", href: "#services" },
  { label: "AI Agents", href: "#services" },
  { label: "AI Automation", href: "#services" },
  { label: "Agentic AI", href: "#services" },
];

const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#whyus" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const contactLinks = [
  { label: "hello@agentryx.com", href: "mailto:hello@agentryx.com", external: true },
  { label: "WhatsApp", href: "https://wa.me/919104980549", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/takshil-prajapati-16bba5298", external: true },
  { label: "Instagram", href: "https://www.instagram.com/takshil52?igsh=ZTZwdW9tcXhqb2w1", external: true },
];

const socialIcons: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/takshil-prajapati-16bba5298",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/takshil52?igsh=ZTZwdW9tcXhqb2w1",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z" />
      </svg>
    ),
  },
];

const footerColumns = [
  { heading: "Services", links: serviceLinks },
  { heading: "Company", links: companyLinks },
  { heading: "Contact", links: contactLinks },
];

export default function Footer() {
  return (
    <footer className="border-t px-6 py-12 md:px-[60px] md:pt-20 md:pb-10" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      {/* Top section: Logo + 3 link columns */}
      <div className="mb-10 md:mb-[60px]">
        {/* Logo & Tagline */}
        <div className="mb-10 md:mb-0 md:float-left md:w-[280px] md:mr-[60px]">
          <Link href="/" className="flex items-center gap-2 font-syne font-extrabold text-[22px] text-white no-underline">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse-dot inline-block" />
            Agentryx
          </Link>
          <p className="text-[13px] leading-[1.75] mt-4 max-w-[280px]" style={{ color: "var(--muted)" }}>
            AI Automation &amp; WordPress Agency building intelligent systems that scale your business completely on autopilot.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <div className="font-syne font-bold text-[12px] md:text-[13px] text-white uppercase tracking-[0.08em] mb-4 md:mb-5">
                {col.heading}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={"external" in l && l.external ? "_blank" : undefined}
                      rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                      className="text-[13px] no-underline transition-colors duration-200 hover:text-[var(--green)] py-1 inline-block"
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
        <div className="clear-both" />
      </div>

      {/* Bottom bar */}
      <div className="border-t pt-6 md:pt-7 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-center md:text-left" style={{ borderColor: "var(--border)" }}>
        <div className="text-[11px] md:text-[12px]" style={{ color: "var(--muted)" }}>
          © 2025 Agentryx. All rights reserved.
        </div>
        <div className="flex gap-3 justify-center">
          {socialIcons.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 border rounded-lg flex items-center justify-center no-underline transition-all duration-200 hover:border-[var(--green)] hover:text-[var(--green)] hover:bg-[rgba(0,232,122,0.08)]"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
