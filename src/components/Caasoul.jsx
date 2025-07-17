import { motion } from "framer-motion";

import { skillsData } from "../utils/SkillsData";
function Caasoul() {
  return (
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-40%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="flex gap- w-max"
      >
        {skillsData.frontend.map((skill) => (
          <div
            key={skill.label}
            className="flex items-center gap-4 text-center tracking-wide leading-relaxed"
          >
            <div
              className={`text-4xl ${skill.color} `}

            >
              {skill.icon}
            </div>

              <h4
                className="
            text-lg font-bold "
              >
                {skill.label}
              </h4>



          </div>
        ))}

      </motion.div>
  );
}

export default Caasoul;
