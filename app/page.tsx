import About from "../components/about/About";
import Hero from "../components/ui/Hero";
import Projects from "../components/sections/Project";
import Contact from "../components/sections/Contact";
import Hero1 from "../components/sections/Hero1";
export default function Home() {
  return (
    <>
      <Hero1 />

      <Hero />
      <Projects />
      <Contact />
    </>
  );
}
