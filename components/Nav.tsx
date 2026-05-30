"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tools", href: "#tools" },
  { label: "Links", href: "#links" },
  { label: "Contact", href: "#contact" },
];

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-sm"
        style={{
          backgroundColor: bgOpacity.get() > 0
            ? `rgba(10,10,10,${bgOpacity})`
            : "transparent",
          borderBottom: `1px solid rgba(30,30,30,${borderOpacity})`,
        }}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="#hero"
          className="text-[11px] tracking-[0.5em] uppercase"
          style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
        >
          SusumuMind
        </a>

        {/* PC nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] tracking-[0.3em] uppercase transition-colors duration-300"
              style={{
                color: "#666666",
                fontFamily: "var(--font-inter), sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#F5F0E8";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#666666";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-1.5 w-8 h-8 flex-shrink-0"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-5 h-px" style={{ backgroundColor: "#C9A84C" }} />
          <span className="block w-5 h-px" style={{ backgroundColor: "#C9A84C" }} />
          <span className="block w-5 h-px" style={{ backgroundColor: "#C9A84C" }} />
        </button>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ backgroundColor: "rgba(10,10,10,0.97)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            {/* Logo */}
            <p
              className="absolute top-5 left-6 text-[11px] tracking-[0.5em] uppercase"
              style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
            >
              SusumuMind
            </p>

            {/* Close button */}
            <button
              className="absolute top-4 right-6 flex items-center justify-center w-10 h-10"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                color: "#C9A84C",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              ×
            </button>

            {/* Nav items */}
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="tracking-[0.2em] uppercase"
                  style={{
                    color: "#F5F0E8",
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 300,
                    fontSize: "clamp(2.2rem, 9vw, 3rem)",
                    lineHeight: 1,
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.07, ease }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F5F0E8";
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom gold accent */}
            <motion.div
              className="absolute bottom-10 w-8 h-px"
              style={{ backgroundColor: "#C9A84C" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.42, ease }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
