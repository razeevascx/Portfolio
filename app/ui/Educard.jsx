import * as motion from "motion/react-client";
import { educationData } from "@/utils/Constants";
import Button from "@/ui/Button";
import { MapPin, Calendar } from "lucide-react";

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
          <div className="p-8 relative z-10 ">
            {/* Header - Date and University Name */}
            <div className="flex items-start justify-between mb-2">
              <p className="lg:text-xl text-lg font-bold text-center m-4 text-wrap">
                {education.degree}
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{education.year}</span>
              </div>
            </div>

            {/* Location */}
            <div className="">
              <div>
                <Button
                  variant="link"
                  className="lg:text-4xl text-2xl"
                  link={education.link}
                  name={education.school}
                />
              </div>
            </div>

            {/* Bottom - Degree */}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Education;
