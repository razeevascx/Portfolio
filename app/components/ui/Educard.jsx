import * as motion from "motion/react-client";
import { educationData } from "@/utils/Constants";
import Button from "@/components/ui/Button";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

function Education() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {educationData.map((education, index) => (
        <motion.div
          key={`${education.school}-${education.year}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative overflow-hidden glass-card shadow-lg group "
        >
          <div className="p-8 relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 glossy rounded-xl">
                  <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <Button
                    variant="link"
                    className="lg:text-4xl text-lg text-wrap"
                    link={education.link}
                    name={education.school}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <p className="lg:text-xl text-lg font-bold ml-4">
                {education.degree}
              </p>
              <div className="flex flex-wrap gap-4 text-sm ">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{education.year}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold  dark:text-white">
                Key Experiences
              </h4>
              <ul className="space-y-2">
                {education.experiences.map((experience, expIndex) => (
                  <motion.li
                    key={`${education.school}-exp-${expIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + expIndex * 0.05 }}
                    className="flex items-start space-x-3 "
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{experience}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Education;
