"use client";

import { motion } from "framer-motion";

export default function Card() {
  return (
    <div
      className="relative w-64 aspect-[2.5/3.5]"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full rounded-xl shadow-2xl"
        style={{ transformStyle: "preserve-3d", transformOrigin: "top center" }}
        animate={{ rotateY: [0, 180, 360] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="/badgefront.jpg"
            alt="Badge Front"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src="/badgeback.jpg"
            alt="Badge Back"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
