"use client";

import { motion } from "framer-motion";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const linkClass = `
  inline-block
  bg-transparent
  p-0
  m-0
  border-0
  appearance-none
  font-inherit
  leading-none
  cursor-pointer
  text-sm
  uppercase
  tracking-widest
  text-zinc-400
  hover:text-zinc-100
  transition
`;

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        absolute top-10 left-1/2 -translate-x-1/2 z-50
        w-[300px] min-[375px]:w-[320px] sm:w-[360px]
        grid grid-cols-3 items-center
      "
    >
      <button
        type="button"
        onClick={() => scrollToId("about")}
        className={`${linkClass} justify-self-center`}
      >
        About
      </button>

      <button
        type="button"
        onClick={() => scrollToId("projects")}
        className={`${linkClass} justify-self-center`}
      >
        Projects
      </button>

      <button
        type="button"
        onClick={() => scrollToId("contact")}
        className={`${linkClass} justify-self-center`}
      >
        Contact
      </button>
    </motion.nav>
  );
}
