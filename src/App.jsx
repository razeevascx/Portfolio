import About from "./components/About/About";
import Home from "./components/Home";
import Star from "./components/Star";
import Navbar from "./components/Navbar/Navbar";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Service from "./components/Service";



function App() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <Star />
      </div>

      <div className="z-10">
        <Navbar />
      </div>

      <main className="relative">
        <section id="home" >
          <Home />
        </section>
        
        <section id="about" >
          <About />
        </section>

        <section id="projects" >
          <Project />
        </section>

        <section id="service" >
          <Service/>
        </section>

        <section id="education" >
          <Education />
        </section>

        <section id="contact" >
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;