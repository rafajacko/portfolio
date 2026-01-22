"use client";

import { motion } from "framer-motion";
import Card from "./card";

export default function Badge() {
  return (
    <div className="relative" style={{ perspective: 1200 }}>
      <motion.div
        initial={{ y: -180, rotateZ: -6, opacity: 0 }}
        animate={{ y: 0, rotateZ: [-3, 3, -3], opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 70, damping: 14 },
          rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.6 },
        }}
        style={{ transformOrigin: "top center" }}
        className="relative"
      >
        <div
          className="
            absolute
            -top-40
            left-[54%]
            sm:left-1/2
            -translate-x-1/2
            w-px
            h-40
            bg-zinc-700
          "
        />

        <div
          className="
            absolute
            -top-1
            left-[54%]
            sm:left-1/2
            -translate-x-1/2
            h-2 w-2
            rounded-full
            bg-zinc-400/60
            shadow
          "
        />

        <Card />
      </motion.div>
    </div>
  );
}
