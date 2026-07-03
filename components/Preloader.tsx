"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => onComplete(), 1500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
      exit={{ y: "-100%", transition: { duration: 0.9, ease } }}
    >
      {/* Left line — grows from center-left outward */}
      <motion.div
        className="absolute top-1/2 h-px"
        style={{
          backgroundColor: "#C9A84C",
          width: "44%",
          left: "3%",
          transformOrigin: "right",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 0.6, ease }}
      />

      {/* Right line — grows from center-right outward */}
      <motion.div
        className="absolute top-1/2 h-px"
        style={{
          backgroundColor: "#C9A84C",
          width: "44%",
          right: "3%",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 0.6, ease }}
      />

      {/* Center dot — appears at intersection */}
      <motion.div
        className="absolute rounded-full"
        style={{
          backgroundColor: "#C9A84C",
          width: 6,
          height: 6,
          top: "calc(50% - 3px)",
          left: "calc(50% - 3px)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: phase >= 1 ? 1 : 0,
          opacity: phase >= 1 ? 1 : 0,
        }}
        transition={{ duration: 0.3, delay: 0.45 }}
      />

      {/* Logo + tagline */}
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 14 }}
        animate={{
          opacity: phase >= 2 ? 1 : 0,
          y: phase >= 2 ? 0 : 14,
        }}
        transition={{ duration: 0.5, ease }}
      >
        <p
          className="text-[11px] tracking-[0.55em] uppercase"
          style={{
            color: "#C9A84C",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          SusumuMind
        </p>
        <p
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{
            color: "#444444",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          AI Imagery × Structured Thinking
        </p>
      </motion.div>
    </motion.div>
  );
}
