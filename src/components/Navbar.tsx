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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-5 flex items-center justify-between transition-all duration-300 ${scrolled
            ? "bg-[rgba(5,13,10,0.92)] border-b border-[var(--border)] backdrop-blur-lg"
            : ""
          }`}
      >
        <Link href="/" className="flex items-center gap-2 font-syne font-extrabold text-[22px] text-white no-underline">
          <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse-dot inline-block" />
          Agentryx
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
          className="hidden md:inline-block bg-[var(--green)] text-[#050d0a] font-syne font-bold text-[13px] px-[22px] py-[10px] rounded-full no-underline transition-all duration-200 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,232,122,0.3)]"
        >
          Start a Project →
        </a>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 text-[22px] text-white bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Full screen mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: "rgba(5,13,10,0.97)", backdropFilter: "blur(12px)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-syne font-bold text-[28px] text-white no-underline transition-colors duration-200 hover:text-[var(--green)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[var(--green)] text-[#050d0a] font-syne font-bold text-[15px] px-8 py-3.5 rounded-full no-underline"
          >
            Start a Project →
          </a>
        </div>
      )}
    </>
  );
}
