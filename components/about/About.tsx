"use client";

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
      <div className="max-w-6xl mx-auto space-y-16 overflow-x-hidden">
        {/* Header with Items component */}
        <Items
          Number="03"
          title="About Me"
          des="Passionate full-stack developer with expertise in modern web technologies, cloud infrastructure, and building scalable applications."
        />

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a dedicated developer who loves transforming ideas into
              digital solutions. With a strong foundation in full-stack
              development, I specialize in building responsive, user-centric
              web applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently pursuing a Bachelor of Science in Computer Science at
              the University of Wolverhampton, I actively contribute to open
              source projects and stay updated with emerging technologies.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm border border-purple-500/20">
                IBM Student Ambassador
              </span>
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
                Open Source Enthusiast
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl p-8 border border-blue-500/10">
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Experience</span>
                  <span className="text-blue-400 font-semibold">5+ Years</span>
                </div>
                <div className="h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Projects Completed</span>
                  <span className="text-purple-400 font-semibold">50+</span>
                </div>
                <div className="h-px bg-gradient-to-r from-purple-500/20 to-transparent" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Technologies</span>
                  <span className="text-cyan-400 font-semibold">20+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Programming Languages
            </h2>
            <p className="text-gray-400">
              Core languages I use for development
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

        {/* Tools & Libraries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Tools & Libraries
            </h2>
            <p className="text-gray-400">
              Technologies and frameworks I work with regularly
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Educational Journey
            </h2>
            <p className="text-gray-400">
              My academic background and achievements
            </p>
          </div>
          <Education />
        </motion.div>
      </div>
    </Container>
  );
};

export default About;
