"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Tools from "@/components/sections/Tools";
import Links from "@/components/sections/Links";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [skipped, setSkipped] = useState(false);

  // セッション中の再訪はプリローダーをスキップ
  // （exitアニメーションを介さずAnimatePresenceごと外す）
  useEffect(() => {
    if (sessionStorage.getItem("preloader-shown")) {
      setSkipped(true);
      setPreloaderDone(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("preloader-shown", "1");
    setPreloaderDone(true);
  };

  return (
    <>
      {!skipped && (
        <AnimatePresence>
          {!preloaderDone && (
            <Preloader onComplete={handlePreloaderComplete} />
          )}
        </AnimatePresence>
      )}

      {preloaderDone && (
        <>
          <Nav />
          <main>
            <Hero />
            <About />
            <Gallery />
            <Tools />
            <Links />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
