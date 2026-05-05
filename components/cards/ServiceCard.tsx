import * as motion from "motion/react-client";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  service: any;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const code = `[0${String(index + 1)}]`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8  group border border-slate-800 hover:border-blue-500/50 bg-zinc-900/10 hover:bg-zinc-900/30 transition-all duration-500 flex flex-col h-full border-t-0 first:border-t lg:border-t lg:first:border-l"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-3">
            <span className="font-mono inline-block bg-white text-black px-3 py-1 text-[10px] font-bold tracking-widest uppercase w-fit">
              {code}
            </span>
            {service.category && (
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                {service.category}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white group-hover:text-blue-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 text-[10px] text-zinc-500 border border-zinc-800 bg-zinc-900/50 font-mono uppercase tracking-wider group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
