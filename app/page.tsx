"use client";

import { useState } from "react";
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

  return (
    <>
      <AnimatePresence>
        {!preloaderDone && (
          <Preloader onComplete={() => setPreloaderDone(true)} />
        )}
      </AnimatePresence>

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
