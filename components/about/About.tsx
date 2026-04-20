import { useState } from "react";
import * as motion from "motion/react-client";
import Items from "@/components/ui/Items";
import Education from "./Education";
import Container from "@/components/Container";
import { libraries, language } from "@/lib/skills-data";
import SkillCard from "./SkillCard";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <Container
      id="about"
      className="w-full p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w- mx-auto space-y-20 overflow-x-hidden">
        {/* Header */}
        <Items
          Number="03"
          title="About Me"
          des="Full-stack developer crafting digital solutions with clean, scalable code."
        />

        {/* Biography Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-color-text-primary text-base leading-relaxed font-light">
            Full-stack developer focused on building responsive web applications
            with modern technologies. Currently pursuing a Bachelor of Science
            in Computer Science at University of Wolverhampton.
          </p>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-light text-color-text-primary mb-1">
              Languages
            </h3>
            <div className="h-px bg-color-text-secondary opacity-20" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.values(language).map((lang, idx) => (
              <SkillCard
                key={idx}
                skill={lang}
                isHovered={hoveredSkill === lang.label}
                onHover={() => setHoveredSkill(lang.label)}
                onLeave={() => setHoveredSkill(null)}
              />
            ))}
          </div>
        </motion.div>

        {/* Tools & Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-light text-color-text-primary mb-1">
              Tools & Libraries
            </h3>
            <div className="h-px bg-color-text-secondary opacity-20" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {libraries.map((lib, idx) => (
              <SkillCard
                key={idx}
                skill={lib}
                isHovered={hoveredSkill === lib.label}
                onHover={() => setHoveredSkill(lib.label)}
                onLeave={() => setHoveredSkill(null)}
              />
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-light text-color-text-primary mb-1">
              Education
            </h3>
            <div className="h-px bg-color-text-secondary opacity-20" />
          </div>
          <Education />
        </motion.div>
      </div>
    </Container>
  );
};

export default About;
