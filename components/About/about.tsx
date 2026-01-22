"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiMysql,
  SiGithub,
  SiGit,
  SiLinux,
  SiGrafana,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Sass", icon: SiSass },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PHP", icon: SiPhp },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "MySQL", icon: SiMysql },
  { name: "NoSQL", icon: FiDatabase },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Linux", icon: SiLinux },
  { name: "Grafana", icon: SiGrafana },
  { name: "React Native", icon: FaMobileAlt },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-zinc-950 text-zinc-100 px-6 pt-40 pb-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="h-px w-full bg-zinc-800/50 mb-16" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16"
        >
          <div className="flex flex-col gap-12">
            <motion.div variants={item}>
              <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
                About Me
              </h3>
              <p className="text-zinc-200 leading-relaxed">
                Desenvolvedor focado em criar interfaces limpas, funcionais e
                bem pensadas, com atenção a código organizado e boas práticas
                que melhoram a experiência do usuário. Busco alinhar teoria e
                prática para construir soluções tecnológicas escaláveis e
                otimizadas. Sou movido por aprendizado contínuo, gosto de
                explorar novas tecnologias e colaborar em equipes para entregar
                produtos que gerem impacto real para usuários e empresas.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
                Education
              </h3>
              <p className="text-zinc-200 leading-relaxed">
                Graduado em Análise e Desenvolvimento de Sistemas pela
                Unicesumar, com foco em desenvolvimento de software e construção
                de aplicações web.
              </p>
            </motion.div>
          </div>
          <motion.div variants={item}>
            <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-6">
              Technical Skills
            </h3>

            <ul className="grid grid-cols-3 sm:grid-cols-5 gap-5 sm:gap-6">
              {skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  title={name}
                  className="flex flex-col items-center gap-2 text-zinc-400 hover:text-zinc-100 transition"
                >
                  <Icon size={28} />
                  <span className="text-[11px] tracking-wide text-center">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
