"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const strengths = [
  {
    label: "Structured Thinking",
    ja: "構造化思考",
    desc: "心理学・行動科学をベースに、複雑な問題を粒度分解してシンプルな答えを導く",
  },
  {
    label: "AI Imagery",
    ja: "AI画像制作",
    desc: "リアル系キャラクターを中心に、プロンプト設計と複数AIツールの実戦的使い分け",
  },
  {
    label: "Synthesis",
    ja: "組み合わせる力",
    desc: "異質な2つの要素を掛け合わせることで、どちらにもない価値を生み出す",
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

export default function About() {
  return (
    <section
      id="about"
      className="section-py"
      style={{
        backgroundColor: "#0A0A0A",
        paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
        paddingRight: "clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        {/* Section label */}
        <FadeIn>
          <p
            className="text-[9px] tracking-[0.5em] uppercase mb-16"
            style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
          >
            About
          </p>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.05}>
          <h2
            className="leading-snug mb-12"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              color: "#F5F0E8",
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            組み合わせる思考で、
            <br />
            可能性を設計する。
          </h2>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={0.1}>
          <p
            className="leading-loose mb-20 max-w-2xl"
            style={{
              color: "#888888",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.875rem",
              lineHeight: 2,
            }}
          >
            思考法と生成AIを掛け合わせ、どちらにもない価値を生み出す。心理学と習慣設計を土台に、新しい表現を追求しています。
          </p>
        </FadeIn>

        {/* Strength cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "#1E1E1E" }}>
          {strengths.map((s, i) => (
            <FadeIn key={s.label} delay={0.12 + i * 0.08}>
              <div
                className="p-8 flex flex-col gap-4 h-full"
                style={{ backgroundColor: "#0A0A0A" }}
              >
                <div className="flex flex-col gap-1">
                  <p
                    className="text-[9px] tracking-[0.4em] uppercase"
                    style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-lg"
                    style={{
                      color: "#F5F0E8",
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 400,
                    }}
                  >
                    {s.ja}
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#666666", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
