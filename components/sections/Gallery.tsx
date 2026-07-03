"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

// kairos_06 (顔アップ) を下段中央 (index 4) に配置
const images = [
  { src: "/gallery/kairos_01.jpg", alt: "ピンクヘアの女性がピースサインをする街角のリアル系AIポートレート" },
  { src: "/gallery/kairos_02.jpg", alt: "青い背景で頬に手を添えた女性のリアル系AIポートレート（顔アップ)" },
  { src: "/gallery/kairos_03.jpg", alt: "制服姿の女性が壁の前に立つストリート調のリアル系AIポートレート" },
  { src: "/gallery/kairos_04.jpg", alt: "桜の下でポーズをとるセーラー服の女性のリアル系AIポートレート" },
  { src: "/gallery/kairos_06.jpg", alt: "ミントのカーディガンと白いスカートの女性のリアル系AIポートレート" }, // 下段中央
  { src: "/gallery/kairos_05.jpg", alt: "白いシャツで椅子に座る女性のスタジオ調リアル系AIポートレート" },
];

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
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="overflow-hidden"
      style={{ position: "relative", aspectRatio: "3/4" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-py-gallery"
      style={{
        backgroundColor: "#0A0A0A",
        paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
        paddingRight: "clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        {/* Header */}
        <div className="gallery-header flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <FadeIn>
              <p
                className="text-[9px] tracking-[0.5em] uppercase mb-4"
                style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Gallery
              </p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2
                className="leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  color: "#F5F0E8",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                }}
              >
                Original Characters
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <p
              className="text-xs"
              style={{ color: "#8A8A8A", fontFamily: "var(--font-inter), sans-serif" }}
            >
              最新作はXで更新中
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <FadeIn key={img.src} delay={0.05 + i * 0.06}>
              <ImageCard src={img.src} alt={img.alt} />
            </FadeIn>
          ))}
        </div>

        {/* X誘導 */}
        <FadeIn delay={0.15}>
          <div className="mt-12 flex justify-center">
            <a
              href="https://x.com/SusumuMind"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border transition-colors duration-300 text-[10px] tracking-[0.4em] uppercase"
              style={{
                borderColor: "#1E1E1E",
                color: "#666666",
                fontFamily: "var(--font-inter), sans-serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#C9A84C";
                el.style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#1E1E1E";
                el.style.color = "#666666";
              }}
            >
              View More on X
              <span style={{ color: "#C9A84C" }}>→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
