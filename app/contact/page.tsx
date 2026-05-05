import Contact from "@/components/sections/Contact";
import Container from "@/components/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Clock, Globe, Shield, Sparkles, Target, Zap, ArrowRight, Terminal } from "lucide-react";

export default function page() {
  return (
    <main className="pb-20">
      {/* Original Contact Info Section */}
      <Contact />

      <Container className="px-5 mt-16 space-y-16">
        
        {/* Availability & Global Context - Refined to match "Code" aesthetic */}
        <div className="grid md:grid-cols-2 gap-px bg-slate-800/50 border border-slate-800/50">
          <div className="p-8 md:p-12 bg-[#0a0a0a] space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">status.log</span>
            </div>
            <SectionHeading className="text-xl md:text-2xl">Current Availability</SectionHeading>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
              Available for high-impact collaborations and architectural consulting. Operating primarily from the UK, serving a global client base.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono text-zinc-400">RESPONSE_WINDOW: &lt; 24H</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-zinc-400">CURRENT_TIMEZONE: GMT/BST</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-[#0a0a0a] border-l border-slate-800/50 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">partnership.md</span>
            </div>
            <SectionHeading className="text-xl md:text-2xl">Core Commitments</SectionHeading>
            <ul className="space-y-3">
              {[
                "End-to-end technical ownership",
                "Scalable architectural decisions",
                "Direct and transparent communication",
                "Long-term post-launch support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs text-zinc-500">
                  <ArrowRight className="w-3 h-3 text-blue-500/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Discovery Guide - Refined to match "Dashed" aesthetic */}
        <section className="border-2 border-dashed border-slate-800/50 p-8 md:p-16 space-y-12 group hover:border-blue-500/20 transition-colors">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-500">discovery_phase</span>
              <SectionHeading>Before reaching out...</SectionHeading>
            </div>
            <p className="text-zinc-600 text-xs font-mono max-w-xs md:text-right">
              /// Providing these details in your initial email accelerates the discovery process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Target, label: "GOALS", desc: "Clearly defined problem statement and success metrics." },
              { icon: Zap, label: "CORE_FEATURES", desc: "Primary functionalities required for the MVP or v1.0." },
              { icon: Clock, label: "TIMELINE", desc: "Anticipated milestones and hard deadlines." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-zinc-700" />
                  <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-widest">{item.label}</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Professional Statement - Tighter and more integrated */}
        <section className="text-center py-10 space-y-6">
           <div className="h-px w-24 bg-blue-500/30 mx-auto" />
           <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Ready to Build.</h3>
           <p className="text-zinc-500 text-sm max-w-lg mx-auto leading-relaxed">
             Currently reviewing opportunities for Q2-Q3 2026. 
             If you have a project that requires deep technical expertise and a design-first mindset, let's start the conversation.
           </p>
           <div className="flex items-center justify-center gap-2 text-blue-500/50 font-mono text-[10px] uppercase tracking-[0.5em] pt-4">
              awaiting_inquiry <span className="animate-pulse">_</span>
           </div>
        </section>

      </Container>
    </main>
  );
}
