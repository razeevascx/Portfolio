import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard";
import Education from "./Education";
import { skillsData } from "../../components/utils/SkillsData";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("mernStack");

  const timeline = [
    {
      year: "2024 AD - Present",
      description:
        "Pursuing a Bachelor's Degree in Computer Science at the University of Wolverhampton, UK.",
    },
    {
      year: "2022 AD - 2024 AD",
      description:
        "Successfully completed Higher Secondary Education at Khwopa Higher Secondary School, major in computer science.",
    },
    {
      year: "2022 AD",
      description:
        "Enrolled in Khwopa Higher Secondary School, beginning my academic journey towards higher education.",
    },
    {
      year: "2020 AD - 2022 AD",
      description:
        "Achieved Secondary Level Education with excellent academic performance and extracurricular involvement.",
    },
    {
      year: "2007 AD - 2020 AD",
      description:
        "Completed Basic Level Education at Shree Changunarayan Secondary School.",
    },
    {
      year: "February 22, 2006 AD",
      description:
        "Born and raised in Bhaktapur, Nepal, inspired by its rich cultural heritage and history.",
    },
  ];

  const tabs = [
    { id: "mernStack", label: "MERN Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <motion.section
      className="w-full m-2 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          className="border-l-4 border-blue-500 pl-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white">
            <span className="text-blue-500">01.</span> About Me
          </h1>
        </motion.div>
        {/* Skills Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800"
              }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="sync">
              {skillsData[activeTab].map((skill) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <SkillCard
                    skill={skill}
                    isHovered={hoveredSkill === skill.label}
                    onHover={() => setHoveredSkill(skill.label)}
                    onLeave={() => setHoveredSkill(null)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        {/* Introduction Section */}
        <div className="space-y-12 ">
          <motion.div
            className="p-8 rounded-2xl glossy"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white">Introduction</h2>
            <h3 className="text-xl text-blue-400 mb-2 ">
              Current Role: Student
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Namaste, I&apos;m{" "}
                <span className="text-white font-semibold">Rajeev Puri</span>{" "}
                from
                <span className="text-white font-semibold">
                  {" "}
                  Bhaktapur, Nepal (4480)
                </span>
                . Currently I&apos;m living at
                <span className="text-white font-semibold">
                  {" "}
                  Wolverhampton, UK.
                </span>
              </p>

              <h2 className="text-xl font-bold text-white mb-4">
                Educational Journey
              </h2>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative pl-8"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-transparent" />
                  <div className="absolute -left-2 top-0 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-blue-500 ring-4 ring-white/10 group-hover:ring-white/30 transition-all duration-300" />
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-extrabold mb-2">{item.year}</h3>
                    <p className="text-white leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Education Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white">
            Educational Qualifications
          </h3>
          <Education />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
