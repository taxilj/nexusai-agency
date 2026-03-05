"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#whyus" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-[60px] py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(5,13,10,0.92)] border-b border-[var(--border)] backdrop-blur-lg"
          : ""
      }`}
    >
      <Link href="/" className="flex items-center gap-2 font-syne font-extrabold text-[22px] text-white no-underline">
        <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse-dot inline-block" />
        NexusAI
      </Link>

      <ul className="hidden md:flex gap-9 list-none">
        {navLinks.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-[var(--muted)] no-underline hover:text-[var(--green)] transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="bg-[var(--green)] text-[#050d0a] font-syne font-bold text-[13px] px-[22px] py-[10px] rounded-full no-underline transition-all duration-200 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,232,122,0.3)]"
      >
        Start a Project →
      </a>
    </nav>
  );
}
