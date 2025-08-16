import * as motion from "motion/react-client";
import Items from "@/components/Items";
import Educard from "@/ui/Educard";
import Lancrd from "@/ui/Skill/Lancrd";

const About = () => {
  return (
    <motion.section
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl font-bold text-white mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Introduction
          </motion.h2>
          <motion.h3
            className="text-xl text-blue-400 mb-4 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Current Role: Student
          </motion.h3>
          <motion.div
            className="space-y-4 text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg">
              Namaste, I&apos;m{" "}
              <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Rajeev Puri
              </span>{" "}
              from{" "}
              <span className="text-white font-semibold">
                Bhaktapur, Nepal (4480)
              </span>
              . Currently I&apos;m living at{" "}
              <span className="text-white font-semibold">
                Wolverhampton, UK
              </span>{" "}
              and pursuing a{" "}
              <span className="text-white font-semibold">
                BSc (Hons) Degree
              </span>{" "}
              in Computer Science at the{" "}
              <span className="text-white font-semibold hover:text-blue-400 transition-colors">
                University of Wolverhampton
              </span>
              .
            </p>
          </motion.div>
        </motion.div>
        {/* Skills Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          <ul className="text-lg font-bold text-white">Languages</ul>
          <Lancrd />
          <ul className="text-lg font-bold text-white">Framework</ul>
        </div>
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
