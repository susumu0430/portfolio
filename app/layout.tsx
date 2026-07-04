import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 本番URLを明示（OGP画像などの相対パスをどの環境でも絶対URLに解決させる）
  metadataBase: new URL("https://susumu-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "SusumuMind — AI Imagery × Structured Thinking",
  description:
    "AI Imagery × Structured Thinking — 思考法と生成AIを掛け合わせ、どちらにもない価値を生み出すsusumuのポートフォリオ",
  openGraph: {
    title: "SusumuMind — Structured Mind × Infinite Vision",
    description:
      "AI Imagery × Structured Thinking — 思考法と生成AIを掛け合わせるポートフォリオ",
    siteName: "SusumuMind",
    type: "website",
    locale: "ja_JP",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SusumuMind — Structured Mind × Infinite Vision",
    description:
      "AI Imagery × Structured Thinking — 思考法と生成AIを掛け合わせるポートフォリオ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
