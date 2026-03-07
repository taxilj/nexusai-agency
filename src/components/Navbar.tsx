"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useAnimations";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#whyus" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a
        href={href}
        className="relative text-sm text-[var(--muted)] no-underline hover:text-[var(--green)] transition-colors duration-200 pb-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
        <motion.span
          className="absolute bottom-0 left-0 h-[1.5px] w-full"
          style={{ background: "var(--green)", transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </a>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-[60px] py-5 flex items-center justify-between transition-all duration-300 ${scrolled
            ? "bg-[rgba(5,13,10,0.92)] border-b border-[var(--border)] backdrop-blur-lg"
            : ""
          }`}
        initial={prefersReduced ? {} : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Link href="/" className="flex items-center gap-2 font-syne font-extrabold text-[22px] text-white no-underline">
          <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse-dot inline-block" />
          Agentryx
        </Link>

        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map((l) => (
            <NavLink key={l.label} label={l.label} href={l.href} />
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="hidden md:inline-block bg-[var(--green)] text-[#050d0a] font-syne font-bold text-[13px] px-[22px] py-[10px] rounded-full no-underline transition-shadow duration-200"
          whileHover={prefersReduced ? {} : { scale: 1.05, boxShadow: "0 8px 24px rgba(0,232,122,0.3)" }}
          whileTap={{ scale: 0.97 }}
        >
          Start a Project →
        </motion.a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 text-[22px] text-white bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </motion.nav>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: "rgba(5,13,10,0.97)", backdropFilter: "blur(12px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-syne font-bold text-[28px] text-white no-underline transition-colors duration-200 hover:text-[var(--green)]"
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              {l.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[var(--green)] text-[#050d0a] font-syne font-bold text-[15px] px-8 py-3.5 rounded-full no-underline"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Start a Project →
          </motion.a>
        </motion.div>
      )}
    </>
  );
}
