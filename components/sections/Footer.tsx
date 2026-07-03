"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Tools", href: "#tools" },
  { label: "Links", href: "#links" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer
      ref={ref}
      style={{
        backgroundColor: "#0A0A0A",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
        paddingRight: "clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      {/* ×回収モチーフ — Preloaderの「中央から開く」に対し、ここでは外から中央へ集まって閉じる */}
      <div
        className="flex items-center"
        style={{
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          gap: "1rem",
          marginBottom: "2.75rem",
        }}
      >
        <motion.div
          className="flex-1 h-px"
          style={{ backgroundColor: "#C9A84C", transformOrigin: "left", opacity: 0.7 }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease }}
        />
        <motion.span
          className="text-sm select-none"
          style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.55, ease }}
        >
          ×
        </motion.span>
        <motion.div
          className="flex-1 h-px"
          style={{ backgroundColor: "#C9A84C", transformOrigin: "right", opacity: 0.7 }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease }}
        />
      </div>

      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", width: "100%" }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.35, ease }}
      >
        <div className="flex flex-col gap-2">
          <p
            className="text-[11px] tracking-[0.5em] uppercase"
            style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
          >
            SusumuMind
          </p>
          <p
            className="text-[9px] tracking-[0.25em]"
            style={{ color: "#777777", fontFamily: "var(--font-inter), sans-serif" }}
          >
            © 2026 SusumuMind. All rights reserved.
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[9px] tracking-[0.3em] uppercase transition-colors duration-300"
              style={{ color: "#777777", fontFamily: "var(--font-inter), sans-serif" }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#F5F0E8";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#777777";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </footer>
  );
}
