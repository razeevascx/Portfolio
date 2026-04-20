"use client";

import * as motion from "motion/react-client";
import { type Skill } from "@/lib/skills-data";

interface SkillCardProps {
  skill: Skill;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const SkillCard = ({ skill, isHovered, onHover, onLeave }: SkillCardProps) => {
  return (
    <motion.div
      className="transition-all duration-300"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2">
        <motion.div
          className={`text-xl transition-colors duration-300 ${skill.color}`}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {skill.icon}
        </motion.div>

        <h4
          className={`text-sm font-light transition-colors duration-300
            ${isHovered ? "text-color-primary" : "text-color-text-primary"}
          `}
        >
          {skill.label}
        </h4>
      </div>
    </motion.div>
  );
};

export default SkillCard;
