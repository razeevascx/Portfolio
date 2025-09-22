import * as motion from "motion/react-client";
import Items from "@/components/Items";
import Educard from "@/ui/Educard";

const About = () => {
  return (
    <motion.section
      id="about"
      className="w-full p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto space-y-10 overflow-x-hidden">
        <Items
          Number="01"
          title="About Me"
          des="Know more about me, my skills, and my educational background."
        />
        {/* Skills Section */}

        {/* Education Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white">
            Educational Qualifications
          </h3>
          <Educard />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
