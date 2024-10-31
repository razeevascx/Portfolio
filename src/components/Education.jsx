import { motion } from "framer-motion";
import { useState } from 'react';

const EducationItem = ({ education, index, activeIndex, setActiveIndex }) => (
  <motion.div
    className={`sidebar-item ${activeIndex === index ? 'active' : ''}`}
    onClick={() => setActiveIndex(index)}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {education.school}
  </motion.div>
);

function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  const educationData = [
    {
      school: "Khwopa Higher Secondary School",
      role: "Major in Computer Science",
      location: "Dekocha 06, Bhaktapur 44800",
      year: "2022 - 2024",
      experiences: [
        "Completed +2 with Computer Science as major subject",
        
      ],
      link: "https://www.facebook.com/khwopahss"
    },
    {
      school: "Shree Saraswati Secondary School",
      role: "Secondary Education",
      location: "Changunaryan-08, Bhaktapur 44800",
      year: "2022",
      experiences: [
       ""
      ],
      link: "https://www.facebook.com/100064233663286"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className=" text-[#D9D9D9]">
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Sidebar */}
        <div className="w-full md:w-[200px] md:mr-8 mb-8 md:mb-0">
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

        {/* Content */}
        <div className="flex-1">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card"
          >
            <div className="p-8">
              <h3 className="education-title mb-2">{educationData[activeIndex].role}</h3>
              <a 
                href={educationData[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="education-school mb-2 inline-block"
              >
                {educationData[activeIndex].school}
              </a>
              <p className="education-year mb-4">{educationData[activeIndex].year}</p>
              
              {/* Experiences List */}
              <ul className="space-y-3">
                {educationData[activeIndex].experiences.map((experience, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-primary text-lg">📍</span>
                    <span className="education-description">{experience}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
