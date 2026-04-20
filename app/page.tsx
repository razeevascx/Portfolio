import Projects from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Service from "@/components/sections/Service";
import Hero1 from "@/components/sections/Hero/Hero1";
export default function Home() {
  return (
    <>
      <Hero1 />
      <Service />
      <Projects />
      <Contact />
    </>
  );
}
