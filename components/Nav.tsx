"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Links", href: "#links" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);

  return (
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
        Zero Origin
      </a>

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
    </motion.header>
  );
}
