"use client";

import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const leftWords = ["Structured", "Mind"];
const rightWords = ["Infinite", "Vision"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Left half */}
      <div
        className="absolute inset-0 right-1/2 flex flex-col items-end justify-center"
        style={{ paddingRight: "clamp(3rem, 8vw, 10rem)" }}
      >
        {leftWords.map((word, i) => (
          <motion.h1
            key={word}
            className="leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              color: "#F5F0E8",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.1 + i * 0.14, ease }}
          >
            {word}
          </motion.h1>
        ))}
        <motion.p
          className="mt-5 text-[9px] tracking-[0.4em] uppercase"
          style={{
            color: "#555555",
            fontFamily: "var(--font-inter), sans-serif",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
        >
          Structured Thinking
        </motion.p>
      </div>

      {/* Center divider */}
      <div className="absolute left-1/2 top-[20%] bottom-[20%] flex flex-col items-center pointer-events-none">
        <motion.div
          className="flex-1 w-px"
          style={{ backgroundColor: "#C9A84C", originY: 0 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
        />
        <motion.span
          className="py-3 text-base select-none"
          style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease }}
        >
          ×
        </motion.span>
        <motion.div
          className="flex-1 w-px"
          style={{ backgroundColor: "#C9A84C", originY: 1 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
        />
      </div>

      {/* Right half */}
      <div
        className="absolute inset-0 left-1/2 flex flex-col items-start justify-center"
        style={{ paddingLeft: "clamp(3rem, 8vw, 10rem)" }}
      >
        {rightWords.map((word, i) => (
          <motion.h1
            key={word}
            className="leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              color: i === 1 ? "#C9A84C" : "#F5F0E8",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.15 + i * 0.14, ease }}
          >
            {word}
          </motion.h1>
        ))}
        <motion.p
          className="mt-5 text-[9px] tracking-[0.4em] uppercase"
          style={{
            color: "#555555",
            fontFamily: "var(--font-inter), sans-serif",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
        >
          AI Imagery
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3, ease }}
      >
        <p
          className="text-[8px] tracking-[0.4em] uppercase"
          style={{ color: "#444444", fontFamily: "var(--font-inter), sans-serif" }}
        >
          scroll
        </p>
        <motion.div
          className="w-px h-8"
          style={{ backgroundColor: "#333333", originY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
        />
      </motion.div>
    </section>
  );
}
