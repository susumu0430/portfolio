"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const EMAIL = "susumu01250430@gmail.com";
const X_URL = "https://x.com/SusumuMind";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32"
      style={{
        backgroundColor: "#0A0A0A",
        paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
        paddingRight: "clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        <FadeIn>
          <p
            className="text-[9px] tracking-[0.5em] uppercase mb-4"
            style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2
            className="mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              color: "#F5F0E8",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Get in touch
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="mb-14 text-sm leading-relaxed"
            style={{ color: "#666666", fontFamily: "var(--font-inter), sans-serif", lineHeight: 2 }}
          >
            お仕事のご依頼・コラボレーション・その他お問い合わせはこちらから。
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          <FadeIn delay={0.12}>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-between px-6 py-5 border group transition-all duration-300"
              style={{ borderColor: "#1E1E1E" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E1E1E";
              }}
            >
              <div className="flex flex-col gap-1">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase"
                  style={{ color: "#555555", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Email
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#F5F0E8", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {EMAIL}
                </p>
              </div>
              <span
                className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "#C9A84C", display: "inline-block" }}
              >
                →
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.16}>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-5 border group transition-all duration-300"
              style={{ borderColor: "#1E1E1E" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E1E1E";
              }}
            >
              <div className="flex flex-col gap-1">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase"
                  style={{ color: "#555555", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  X (Twitter)
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#F5F0E8", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  DM open
                </p>
              </div>
              <span
                className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "#C9A84C", display: "inline-block" }}
              >
                →
              </span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
