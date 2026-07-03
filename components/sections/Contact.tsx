"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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

const flowSteps = ["ご連絡", "ヒアリング（チャット）", "制作・納品"];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const showCopied = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    try {
      await navigator.clipboard.writeText(EMAIL);
      showCopied();
    } catch {
      // Clipboard APIが使えない環境向けの旧式コピー
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        if (document.execCommand("copy")) {
          showCopied();
        } else {
          window.location.href = `mailto:${EMAIL}`;
        }
      } catch {
        window.location.href = `mailto:${EMAIL}`;
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  return (
    <section
      id="contact"
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
            style={{ color: "#8A8A8A", fontFamily: "var(--font-inter), sans-serif", lineHeight: 2 }}
          >
            AI画像制作・記事執筆・思考整理サポートなど、お仕事のご依頼・コラボレーション・その他お問い合わせはこちらから。
            <br />
            ご連絡はメール・チャットでのやり取りを中心に対応しています。
          </p>
        </FadeIn>

        {/* ご依頼の流れ */}
        <FadeIn delay={0.11}>
          <div
            className="flex flex-wrap items-center"
            style={{ marginBottom: "3rem", gap: "0.75rem" }}
          >
            {flowSteps.map((step, i) => (
              <span key={step} className="flex items-center" style={{ gap: "0.75rem" }}>
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <span style={{ color: "#C9A84C" }}>{`0${i + 1} `}</span>
                  <span style={{ color: "#8A8A8A" }}>{step}</span>
                </span>
                {i < flowSteps.length - 1 && (
                  <span className="text-xs" style={{ color: "#444444" }}>
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="flex flex-col gap-4">
          <FadeIn delay={0.12}>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="メールアドレスをコピー"
              className="w-full flex items-center justify-between px-6 py-5 border group transition-all duration-300 text-left cursor-pointer"
              style={{ borderColor: "#1E1E1E", backgroundColor: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#1E1E1E";
              }}
            >
              <div className="flex flex-col gap-1">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase"
                  style={{ color: "#555555", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Email — クリックでコピー
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
                style={{ color: "#C9A84C", display: "inline-block", whiteSpace: "nowrap" }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "copied" : "arrow"}
                    style={{ display: "inline-block" }}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2, ease }}
                  >
                    {copied ? "Copied ✓" : "→"}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>
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
