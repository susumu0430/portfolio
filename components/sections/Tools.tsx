"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const tools = [
  {
    label: "Image Generation",
    name: "Higgsfield AI",
    usage: "リアル系AI画像生成",
  },
  {
    label: "Image Generation",
    name: "GPT Image",
    usage: "キャラクター画像の生成・編集",
  },
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Tools() {
  return (
    <section
      id="tools"
      className="section-py"
      style={{
        backgroundColor: "#0A0A0A",
        paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
        paddingRight: "clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        <FadeIn>
          <p
            className="text-[9px] tracking-[0.5em] uppercase mb-16"
            style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Tools
          </p>
        </FadeIn>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: "#1E1E1E", maxWidth: "800px" }}
        >
          {tools.map((tool, i) => (
            <FadeIn key={tool.name} delay={0.1 + i * 0.08}>
              <div
                className="p-8 flex flex-col gap-4 h-full"
                style={{ backgroundColor: "#0A0A0A" }}
              >
                <div className="flex flex-col gap-1">
                  <p
                    className="text-[9px] tracking-[0.4em] uppercase"
                    style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {tool.label}
                  </p>
                  <p
                    className="text-lg"
                    style={{
                      color: "#F5F0E8",
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 400,
                    }}
                  >
                    {tool.name}
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#8A8A8A", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {tool.usage}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
