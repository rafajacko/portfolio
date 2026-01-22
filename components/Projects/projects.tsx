"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: {
    demo?: string;
    github?: string;
  };
};

const projects: Project[] = [
  {
    title: "Dataclick — Coletor de Leads Offline",
    description:
      "Aplicação web para coleta de leads em ambientes sem internet, com armazenamento local em cache e sincronização automática com o servidor quando a conexão é restabelecida.",
    tech: ["React", "TypeScript", "Java", "MongoDB"],
    links: {
      github: "https://github.com/pedro-anunziato-simoes/DataClick",
    },
  },
  {
    title: "Solar Economy — Calculadora de Economia Solar",
    description:
      "Aplicação web que permite simular a economia gerada pela instalação de painéis solares em residências, calculando estimativas de redução de custos a partir dos dados informados pelo usuário.",
    tech: ["React", "TypeScript", "Java Spring Boot"],
    links: {
      github: "https://github.com/rafajacko/solar-economy",
    },
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 bg-zinc-950 text-zinc-100 px-6 pt-40 pb-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="h-px w-full bg-zinc-800/50 mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-400">
            Projects
          </h2>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Alguns projetos que representam meu estilo de desenvolvimento,
            organização de código e preocupação com qualidade, usabilidade e
            manutenção.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={item}
              className="
                group
                rounded-2xl
                border border-zinc-800
                bg-zinc-900/40
                p-6
                shadow-2xl
                transition
                hover:border-zinc-600
                hover:bg-zinc-900/60
                hover:-translate-y-0.5
                hover:shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
              "
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-zinc-100">{p.title}</h3>
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400/70 group-hover:bg-violet-400/80 transition" />
              </div>

              <div className="h-px w-full bg-zinc-800/60 my-4" />

              <p className="text-zinc-300 leading-relaxed">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-zinc-700 text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {p.links?.github && (
                <div className="mt-6 flex gap-3">
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-sm
                      text-zinc-300
                      hover:text-zinc-100
                      transition
                      underline underline-offset-4
                      decoration-zinc-700
                      hover:decoration-zinc-400
                    "
                  >
                    GitHub
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
