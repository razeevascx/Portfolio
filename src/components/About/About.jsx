import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiSpeakerHighFill } from "react-icons/pi";
import SkillCard from "./SkillCard";
import { skillsData } from "../utils/SkillsData";

const About = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('mernStack');

  const speakName = useCallback(() => {
    if (isSpeaking) return;
    try {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance("Ruh-jeev");
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => {
        setIsSpeaking(false);
        alert("Speech synthesis failed. Please try again."); // User feedback
      };
      utterance.rate = 0.9;
      window.speechSynthesis.cancel(); // Cancel any previous utterances
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Speech synthesis error:", error);
      setIsSpeaking(false);
    }
  }, [isSpeaking]);

  const tabs = [
    { id: 'mernStack', label: 'MERN Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' }
  ];

  return (
    <motion.section 
      className="w-full py-10 px-4 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate full-stack developer specializing in modern web technologies.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Profile Info */}
          <motion.div
            className="p-6 rounded-xl glossy backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <h2 className="text-3xl font-bold text-white">Rajeev</h2>
              <span className="ml-2 text-gray-400">(Ruh-jeev)</span>
              <motion.button
                aria-label="Speak name"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-2"
                onClick={speakName}
              >
                <PiSpeakerHighFill
                  className={`${isSpeaking ? "text-blue-500" : "text-gray-400"}`}
                  size={24}
                />
              </motion.button>
            </div>
            <h3 className="text-xl text-blue-500 mb-4">MERN Stack Developer</h3>
            <p className="text-gray-300 leading-relaxed">
  Passionate about creating efficient and scalable web applications.
              Specialized in full-stack development with modern technologies.
              Always eager to learn and implement new technologies.
              My journey as a developer has been a continuous learning process, from building small projects to working on complex applications, I've always strived to improve my skills and stay up-to-date with the latest technologies.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="p-6 rounded-xl glossy backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 glass-card rounded-lg">
                <h4 className="text-blue-400">Experience</h4>
                <p className="text-2xl font-bold text-white">10+ Months</p>
              </div>
              {/* <div className="p-4 glass-card rounded-lg"> */}
                {/* <h4 className="text-blue-400">Projects</h4>
                <p className="text-2xl font-bold text-white">15+</p> */}
              {/* </div> */}
              <div className="p-4 glass-card rounded-lg">
                <h4 className="text-blue-400">Technologies</h4>
                <p className="text-2xl font-bold text-white">20+</p>
              </div>
              {/* <div className="p-4 glass-card rounded-lg"> */}
                {/* <h4 className="text-blue-400">Clients</h4> */}
                {/* <p className="text-2xl font-bold text-white">10+</p> */}
              {/* </div>  */}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeTab === tab.id 
                    ? 'bg-blue-500 text-white' 
                    : 'glass-card text-gray-400 hover:glossy'}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View ${tab.label} skills`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="sync">
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
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

        {/* Call to Action */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Want to collaborate on a project or just say hi? Feel free to reach out!
          </p>
          <motion.button
            className="mt-4 px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
