"use client";

import * as motion from "motion/react-client";
import { type Service } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const code = `[0${String(index + 1)}]`;

  return (
    <motion.div className="p-6  duration-300 group border hover:border-2   border-slate-600/50 hover:border-blue-400/50 group">
      <div className="font-mono text-xs text-[#555] mb-3">{code}</div>

      <h3 className="text-lg font-bold text-white mb-3 leading-tight ">
        {service.title}
      </h3>

      <p className="text-[#999] text-sm mb-4 leading-relaxed text-wrap">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="inline-block px-2.5 py-1 text-xs text-white border-[1.5px] border-[#333] bg-transparent font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
