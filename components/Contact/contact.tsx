"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-zinc-950 text-zinc-100 px-6 pt-40 pb-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="h-px w-full bg-zinc-800/50 mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            rounded-2xl border border-zinc-800 bg-zinc-900/40
            p-7 sm:p-10
            text-center shadow-2xl transition hover:border-zinc-700
          "
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-400">
            Contact
          </h2>

          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Se você curtiu meu trabalho e quer conversar sobre oportunidades,
            projetos ou parcerias, pode me chamar.
          </p>

          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/rafaeljacksonfalcomer"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                h-12 w-12 rounded-xl
                border border-zinc-700
                grid place-items-center
                text-zinc-200
                transition
                hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/40
              "
            >
              <FaLinkedinIn size={24} />
            </a>

            <a
              href="https://github.com/rafajacko"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                h-12 w-12 rounded-xl
                border border-zinc-700
                grid place-items-center
                text-zinc-200
                transition
                hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/40
              "
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://instagram.com/jcknrafael"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="
                h-12 w-12 rounded-xl
                border border-zinc-700
                grid place-items-center
                text-zinc-200
                transition
                hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/40
              "
            >
              <FaInstagram size={24} />
            </a>
          </div>

          <div className="mt-8 text-sm text-zinc-400">
            <span className="text-zinc-500">Ou copie:</span>{" "}
            <span className="select-all underline underline-offset-4 decoration-zinc-700">
              rafaelfalcomer@hotmail.com
            </span>
          </div>
        </motion.div>

        <div className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} — Rafael Jackson. Desenvolvido com Next.js,
          Tailwind CSS e Framer Motion.
        </div>
      </div>
    </section>
  );
}
