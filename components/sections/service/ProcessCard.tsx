import { CheckCircle2 } from "lucide-react";
import * as motion from "motion/react-client";
import type { ComponentType } from "react";

type ProcessCardProps = {
  step: string | number;
  title: string;
  detail: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  status: string;
};

export default function ProcessCard({
  step,
  title,
  detail,
  icon: Icon,
  status,
}: Readonly<ProcessCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="hidden lg:block absolute top-[40px] left-full w-full h-[1px] bg-gradient-to-r from-blue-500/30 to-transparent -z-10 group-last:hidden"></div>

      <div className="relative h-full bg-[#0a0a0a] border border-white/10 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-500 flex flex-col gap-6 overflow-hidden">
        {/* Visual Accent Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-zinc-800 group-hover:bg-blue-500 transition-colors duration-500"></div>

        {/* Header Area */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
              <Icon
                size={18}
                className="text-zinc-500 group-hover:text-blue-400"
              />
            </div>
            <div>
              <p className="text-[9px] font-mono font-bold text-blue-500 tracking-widest uppercase italic">
                Step {step}
              </p>
              <h3 className="text-sm font-black tracking-widest uppercase text-white group-hover:translate-x-1 transition-transform">
                {title}
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter">
              {status}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse mt-1 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative py-4 border-t border-white/5">
          <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors italic">
            "{detail}"
          </p>
        </div>

        {/* Footer Meta */}
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1 w-3 rounded-full ${i <= Number(step) ? "bg-blue-500" : "bg-zinc-800"}`}
              ></div>
            ))}
          </div>
          <CheckCircle2
            size={12}
            className="text-zinc-800 group-hover:text-blue-500 transition-colors"
          />
        </div>
      </div>
    </motion.div>
  );
}
