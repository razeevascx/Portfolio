import About from "@/components/sections/About";
import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Coffee, Code, Heart, Zap, Target, Book, Milestone, GraduationCap, Briefcase, Trophy, Globe } from "lucide-react";

export default function page() {
  return (
    <main className="min-h-screen pb-20">
      {/* Existing About Section (contains Profile, Certs, Skills) */}
      <About />

      {/* Additional Engagement Sections */}
      <Container className="px-5 mt-16 space-y-32">
        
        {/* Biography / My Story */}
        <section className="max-w-4xl">
          <SectionHeading className="mb-8">My Journey</SectionHeading>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              I am a passionate developer currently pursuing my degree at the 
              <span className="text-blue-400 font-medium"> University of Wolverhampton</span>. 
              My journey into the world of technology started with a simple curiosity about how things work on the web, 
              which quickly evolved into a deep-seated passion for building high-performance applications.
            </p>
            <p>
              I believe that software engineering is more than just writing code; it's about solving real-world 
              problems and creating meaningful experiences for users. I specialize in the 
              <span className="text-zinc-200"> MERN stack</span> but I'm always eager to explore new technologies 
              and architectures that push the boundaries of what's possible.
            </p>
          </div>
        </section>

        {/* Milestones / Timeline */}
        <section>
          <SectionHeading className="mb-16">Professional Milestones</SectionHeading>
          <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-12 pb-12">
            {[
              {
                year: "2024",
                title: "University of Wolverhampton",
                description: "Started degree in Computer Science, focusing on advanced software engineering and system architecture.",
                icon: GraduationCap,
                color: "text-blue-500"
              },
              {
                year: "2023",
                title: "Independent Development",
                description: "Deep-dived into full-stack web development, mastering React, Node.js, and modern CSS frameworks.",
                icon: Code,
                color: "text-purple-500"
              },
              {
                year: "2022",
                title: "First Lines of Code",
                description: "Discovered the power of programming through Python and basic web technologies, sparking a lifelong interest.",
                icon: Milestone,
                color: "text-green-500"
              }
            ].map((milestone, i) => (
              <div key={i} className="relative pl-12 md:pl-16 group">
                <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-blue-500 transition-colors z-10`} />
                <div className="absolute left-[-2px] top-4 bottom-[-48px] w-px bg-zinc-800 group-last:hidden" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
                  <span className="text-sm font-mono text-zinc-500 group-hover:text-blue-400 transition-colors">{milestone.year}</span>
                  <div className="flex items-center gap-3">
                    <milestone.icon className={`w-5 h-5 ${milestone.color}`} />
                    <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl group-hover:text-zinc-400 transition-colors">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values / Philosophy */}
        <section>
          <SectionHeading className="mb-12">Core Philosophy</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/20 transition-all group">
              <Zap className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Performance First</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                I prioritize speed and efficiency in every line of code, ensuring applications are snappy and responsive.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/20 transition-all group">
              <Target className="w-10 h-10 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">User Centric</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Design is not just what it looks like, but how it works. I focus on creating intuitive and accessible interfaces.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/20 transition-all group">
              <Book className="w-10 h-10 text-green-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Lifelong Learner</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                The tech landscape is ever-changing. I dedicate time daily to learn new patterns, tools, and best practices.
              </p>
            </div>
          </div>
        </section>

        {/* By the Numbers / Fun Stats */}
        <section>
          <SectionHeading className="mb-12">By the Numbers</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Hours of Coding", value: "2,500+", icon: Code },
              { label: "Cups of Coffee", value: "850+", icon: Coffee },
              { label: "Projects Completed", value: "15+", icon: Trophy },
              { label: "Open Source", value: "100+", icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 flex flex-col items-center justify-center text-center gap-3 hover:border-zinc-800 transition-all">
                <stat.icon className="w-6 h-6 text-zinc-600" />
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Life Beyond Code */}
        <section className="bg-zinc-950/50 border border-zinc-900 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading className="mb-6">Beyond the Terminal</SectionHeading>
              <p className="text-zinc-400 leading-relaxed mb-8">
                When I'm not debugging or architecting systems, you can find me exploring new coffee shops, 
                diving into sci-fi literature, or experimenting with digital design. I believe a balanced life 
                fuels creativity and problem-solving skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-zinc-300 text-sm border border-zinc-800">
                  <Coffee className="w-4 h-4 text-orange-400" />
                  Coffee Enthusiast
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-zinc-300 text-sm border border-zinc-800">
                  <Heart className="w-4 h-4 text-red-400" />
                  Open Source Lover
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-zinc-300 text-sm border border-zinc-800">
                  <Code className="w-4 h-4 text-blue-400" />
                  UI Enthusiast
                </div>
              </div>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800 aspect-square flex items-center justify-center text-center">
               <div className="space-y-4">
                 <p className="text-zinc-500 text-sm uppercase tracking-[0.2em]">Status</p>
                 <p className="text-2xl font-bold text-white">Always building,<br/>Always growing.</p>
                 <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full" />
               </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="text-center py-12">
           <h2 className="text-4xl font-bold text-white mb-6">Let's connect.</h2>
           <p className="text-zinc-500 max-w-xl mx-auto mb-10">
             Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
           </p>
           <a 
            href="/contact" 
            className="inline-flex items-center px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-blue-500/20"
           >
             Get In Touch
           </a>
        </section>
      </Container>
    </main>
  );
}
