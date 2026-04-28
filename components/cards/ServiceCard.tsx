import * as motion from "motion/react-client";
import { type Service } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const code = `[0${String(index + 1)}]`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6   group border   border-slate-600/50 hover:border-primary group transition-all duration-500 border-t-0 first:border-t lg:border-t"
    >
      <div className="flex justify-between items-start mb-6">
        <span className=" mb-3 font-mono inline-block bg-white text-black px-3 py-1 text-xs tracking-wider">
          {code}
        </span>
        <ArrowUpRight
          size={16}
          className="text-zinc-600 group-hover:text-primary group-hover:rotate-45 transition-all"
        />
      </div>

      <h3 className="text-lg font-bold  mb-3 leading-tight group-hover:text-primary transition-colors">
        {service.title}
      </h3>

      <p className=" text-wrap text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
        {service.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="inline-block px-2.5 py-1 text-xs text-white border-[1.5px] border-[#333] bg-transparent font-mono uppercase tracking-tighter group-hover:text-zinc-300 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
