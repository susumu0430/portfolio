"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { links } from "@/data/links";

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

export default function Links() {
  const activeLinks = links.filter((l) => l.status === "active");
  const futureLinks = links.filter((l) => l.status === "coming-soon");

  return (
    <section
      id="links"
      style={{
        backgroundColor: "#0D0D0D",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
        paddingRight: "clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        {/* Header */}
        <FadeIn>
          <p
            className="text-[9px] tracking-[0.5em] uppercase mb-4"
            style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Links
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2
            className="mb-14 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 300,
              color: "#F5F0E8",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Find me here
          </h2>
        </FadeIn>

        {/* Active links */}
        <div className="flex flex-col gap-px" style={{ backgroundColor: "#1E1E1E" }}>
          {activeLinks.map((link, i) => (
            <FadeIn key={link.platform} delay={0.08 + i * 0.07}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-5 group transition-colors duration-300"
                style={{ backgroundColor: "#0A0A0A" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#111111";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0A0A0A";
                }}
              >
                <div className="flex flex-col gap-1">
                  <p
                    className="text-base transition-colors duration-300"
                    style={{
                      color: "#F5F0E8",
                      fontFamily: "var(--font-cormorant), serif",
                      fontWeight: 400,
                    }}
                  >
                    {link.platform}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#555555", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {link.description}
                  </p>
                </div>
                <span
                  className="text-sm transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: "#C9A84C", display: "inline-block" }}
                >
                  →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Future links */}
        {futureLinks.length > 0 && (
          <div className="mt-px flex flex-col gap-px" style={{ backgroundColor: "#1E1E1E" }}>
            {futureLinks.map((link, i) => (
              <FadeIn key={link.platform} delay={0.2 + i * 0.06}>
                <div
                  className="flex items-center justify-between px-6 py-5"
                  style={{ backgroundColor: "#0A0A0A" }}
                >
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-base"
                      style={{
                        color: "#333333",
                        fontFamily: "var(--font-cormorant), serif",
                        fontWeight: 400,
                      }}
                    >
                      {link.platform}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "#333333", fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {link.description}
                    </p>
                  </div>
                  <p
                    className="text-[8px] tracking-[0.35em] uppercase"
                    style={{ color: "#333333", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Soon
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
