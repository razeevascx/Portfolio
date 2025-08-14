import * as motion from "motion/react-client";
import { projectList } from "@/utils/Constants";
import Items from "@/components/Items";
import ProjectCard2 from "@/components/ProjectCard2";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      id="project"
      className="w-full p-5 max-w-7xl mx-auto"
    >
      <Items
        Number="02"
        title="Projects"
        des="Explore my featured projects showcasing my expertise in web development and problem-solving capabilities."
      />
      <h1 className="text-5xl font-bold mb-10">
        Like the work I do?{" "}
        <a href="/contact" className="text-blue-500 underline">
          Contact
        </a>
      </h1>
      <div className="space-y-20">
        {projectList.map((project, index) => (
          <ProjectCard2 key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
