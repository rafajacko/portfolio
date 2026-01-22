"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Badge from "./Badge/badge";
import Navbar from "./navbar";

export default function Hero() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 260], [1, 0]);
  const y = useTransform(scrollY, [0, 260], [0, -40]);

  return (
    <section className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      <Navbar />

      <div className="flex items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
          className="
            absolute inset-0 z-0
            flex items-center justify-center
            px-3 text-center select-none
            font-serif tracking-tight text-zinc-800/70 leading-none
            text-[clamp(44px,14vw,180px)]
          "
        >
          PORTFÓLIO
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="
          absolute z-20
          right-2 top-20 scale-[0.58]
          min-[375px]:right-4 min-[375px]:scale-[0.68]
          sm:right-10 sm:top-24 sm:scale-90
          lg:right-20 lg:top-24 lg:scale-100
          origin-top
        "
        style={{ opacity, y }}
      >
        <Badge />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="
          absolute z-10
          bottom-8 left-1/2 -translate-x-1/2
          text-zinc-500 text-[10px]
          tracking-widest uppercase
          select-none
        "
      >
        Scroll
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent to-zinc-950" />
    </section>
  );
}
