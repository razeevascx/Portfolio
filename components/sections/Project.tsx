"use client";

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
      className="w-full p-5 max-w- mx-auto"
    >
      <Items
        Number="02"
        title="Projects"
        des="Explore my featured projects showcasing my expertise in web development and problem-solving capabilities."
      />

      {projectList.slice(0, 3).map((project, indx) => (
        <ProjectCard key={project.title} {...project} index={indx} />
      ))}
    </Container>
  );
};

export default Projects;
