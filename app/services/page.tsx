import ServiceCard from "@/components/cards/ServiceCard";
import ProcessCard from "@/components/sections/service/ProcessCard";
import SectionBlock from "@/components/SectionBlock";
import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import { processSteps, services } from "@/lib/constants";
import { MessageSquare, ArrowRight, Zap, Shield, Sparkles } from "lucide-react";

export default function page() {
  return (
    <main className="pb-20">
      <SectionBlock
        number="01"
        title=" services"
        description="Going beyond high-level concepts. Expertise spans the entire product
            lifecycle, from atomic units to complex ecosystems."
      >
        <div className="flex flex-col flex-1">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </SectionBlock>

      {/* Commitment Section */}
      <Container className="px-5 my-24">
        <div className="bg-zinc-950 border border-zinc-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading className="mb-6">Commitment to Excellence</SectionHeading>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                I don't just build software; I craft digital experiences that drive growth and solve complex problems. 
                My approach combines technical rigor with a deep understanding of user behavior.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "High-performance code as standard", color: "text-blue-500" },
                  { icon: Shield, text: "Security-first development approach", color: "text-green-500" },
                  { icon: Sparkles, text: "Modern aesthetics and intuitive UX", color: "text-purple-500" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-zinc-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-zinc-900/50 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center p-6 text-center group hover:border-blue-500/30 transition-all">
                <span className="text-3xl font-bold text-white mb-2">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">Quality Assured</span>
              </div>
              <div className="aspect-square bg-zinc-900/50 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center p-6 text-center group hover:border-blue-500/30 transition-all">
                <span className="text-3xl font-bold text-white mb-2">24/7</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">System Monitoring</span>
              </div>
              <div className="aspect-square bg-zinc-900/50 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center p-6 text-center group hover:border-blue-500/30 transition-all">
                <span className="text-3xl font-bold text-white mb-2">Clean</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">Architecture</span>
              </div>
              <div className="aspect-square bg-zinc-900/50 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center p-6 text-center group hover:border-blue-500/30 transition-all">
                <span className="text-3xl font-bold text-white mb-2">Agile</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">Methodology</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <SectionBlock
        number="02"
        title="How i Work ?"
        description="A refined methodology ensuring transparency, speed, and exceptional
            quality at every step."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
          {processSteps.map((item) => (
            <ProcessCard
              key={item.step}
              step={item.step}
              title={item.title}
              detail={item.detail}
              icon={item.icon}
              status={item.status}
            />
          ))}
        </div>
      </SectionBlock>

      {/* Tech Stack Marquee */}
      <div className="mt-32">
        <div className="text-center mb-16">
          <SectionHeading className="mb-4">Tools of the Trade</SectionHeading>
          <p className="text-zinc-500 max-w-xl mx-auto">
            The modern stack I use to deliver high-performance solutions.
          </p>
        </div>
        <Marquee />
      </div>

      {/* FAQ Section */}
      <Container className="px-5 mt-32">
        <div className="text-center mb-16">
          <SectionHeading className="mb-4">Common Questions</SectionHeading>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Everything you need to know about starting a project together.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "What is your typical project timeline?",
              a: "Timeline varies by complexity. A standard MVP typically takes 4-8 weeks, while larger enterprise solutions may take 3-6 months. I prioritize hitting key milestones early."
            },
            {
              q: "Do you offer post-launch support?",
              a: "Absolutely. I provide ongoing maintenance, security updates, and performance monitoring to ensure your product continues to evolve and stay secure."
            },
            {
              q: "Can you work with existing codebases?",
              a: "Yes. I have extensive experience in auditing, refactoring, and extending existing applications while ensuring minimal downtime and regression."
            }
          ].map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:border-zinc-700 transition-all group">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                {faq.q}
              </h4>
              <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-400 transition-colors">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Final CTA */}
      <Container className="px-5 mt-40">
        <div className="text-center bg-blue-600/5 border border-blue-500/10 rounded-[3rem] py-20 px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/5" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to bring your<br/><span className="text-blue-500">idea to life?</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg">
              I'm currently accepting new projects and consulting opportunities. Let's discuss how we can build something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/contact" 
                className="group flex items-center gap-3 bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/projects" 
                className="text-zinc-400 hover:text-white font-bold transition-colors"
              >
                View Past Work
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
