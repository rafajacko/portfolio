import Hero from "@/components/hero";
import About from "@/components/About/about";
import Projects from "@/components/Projects/projects";
import Contact from "@/components/Contact/contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
