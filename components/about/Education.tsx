"use client";
import * as motion from "motion/react-client";
import { useState } from "react";
import { educationData, type Education } from " lib/constants";

interface EducationItemProps {
  education: Education;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const EducationItem = ({
  education,
  index,
  activeIndex,
  setActiveIndex,
}: EducationItemProps) => (
  <motion.button
    className={`text-left p-3 transition-colors duration-300 font-light text-sm
      ${activeIndex === index ? "text-color-primary" : "text-color-text-secondary"}
      hover:text-color-primary`}
    onClick={() => setActiveIndex(index)}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {education.degree}
  </motion.button>
);

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-1">
        {educationData.map((education, index) => (
          <EducationItem
            key={index}
            education={education}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-4 border-t border-color-text-secondary border-opacity-20"
      >
        <div className="space-y-4">
          <a
            href={educationData[activeIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-light text-color-primary hover:opacity-80 transition-opacity block"
          >
            {educationData[activeIndex].school}
          </a>

          <ul className="space-y-2">
            {educationData[activeIndex].experiences.map((experience, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm text-color-text-primary font-light"
              >
                {experience}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Education;
