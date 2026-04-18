"use client";

import * as motion from "motion/react-client";
import { projectList } from "@/lib/constants";
import Items from "@/components/ui/Items";
import ProjectCard from "@/components/cards/ProjectCard";
import Container from "@/components/Container";

const Projects = () => {
  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="w-full p-5 max-w-6xl mx-auto"
    >
      <Items
        Number="02"
        title="Projects"
        des="Explore my featured projects showcasing my expertise in web development and problem-solving capabilities."
      />
      <h1 className="text-5xl font-bold mb-10">
        Like the work I do?{" "}
        <a href="#contact" className="text-blue-500 underline">
          Contact
        </a>
      </h1>
      <div className="space-y-20">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
