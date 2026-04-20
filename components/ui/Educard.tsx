import * as motion from "motion/react-client";
import { educationData } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { MapPin, Calendar } from "lucide-react";

function Education() {
  return (
    <motion.div
      className="space-y-6"
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
          className="relative overflow-hidden group border border-white/20 hover:border-white/40 transition-all duration-300 bg-white/5 hover:bg-white/10"
        >
          <div className="p-8 relative z-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-1 min-w-0">
                <Button
                  variant="link"
                  className="text-2xl lg:text-3xl font-black text-white uppercase tracking-wider hover:text-white/80 transition-colors text-wrap"
                  link={education.link}
                  name={education.school}
                />
              </div>
            </div>

            {/* Degree */}
            <div className="mb-6 ">
              <p className="text-lg lg:text-xl font-black text-white uppercase tracking-wide">
                {education.degree}
              </p>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm pl-16">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80 uppercase tracking-wider">
                  {education.location}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-white/60" />
                <span className="text-white/80 uppercase tracking-wider">
                  {education.year}
                </span>
              </div>
            </div>

            {/* Divider */}

            {/* Key Experiences */}
            <div className="pl-16">
              <h4 className="font-black text-white uppercase tracking-wider text-sm mb-4">
                Key Experiences
              </h4>
              <ul className="space-y-3">
                {education.experiences.map((experience, expIndex) => (
                  <motion.li
                    key={`${education.school}-exp-${expIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + expIndex * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-relaxed text-white/80 text-sm">
                      {experience}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Education;
