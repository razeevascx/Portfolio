import About from "@/components/about/About.jsx";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/Project.jsx";
import Contact from "@/components/Contact.jsx";
export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
