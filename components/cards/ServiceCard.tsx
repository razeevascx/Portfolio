"use client";

import * as motion from "motion/react-client";
import { type Service } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const categoryMap: Record<number, string> = {
    0: "DEVELOPMENT",
    1: "DESIGN",
    2: "DESIGN",
    3: "DATABASE",
  };

  const category = categoryMap[index] || "SERVICE";
  const code = `SRV.${String(index + 1).padStart(3, "0")}`;

  return (
    <motion.div
      className="p-6 border-[1.5px] border-[#333]   hover:border-blue-400/50 transition-all duration-300 group hover:border-2"
      whileHover={{ scale: 1.02 }}
    >
      {/* Monospace Code Label */}
      <div className="font-mono text-xs text-[#555] mb-3">{code}</div>

      {/* Category Badge */}
      <div className="mb-4 inline-block">
        <span className="inline-block bg-white text-black px-3 py-1 text-xs font-bold tracking-wider font-['Syne']">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-3 leading-tight font-['Syne']">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#999] text-sm mb-4 leading-relaxed">
        {service.description}
      </p>

      {/* Technology Tags */}
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
