import { projectList } from "@/lib/constants";
import Items from "@/components/ui/Items";
import ProjectCard from "@/components/cards/ProjectCard";
import Container from "@/components/Container";

interface ProjectsProps {
  list?: number;
}

const Projects: React.FC<ProjectsProps> = ({ list = 3 }) => {
  return (
    <Container
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="w-full p-5 mx-auto"
    >
      <Items
        Number="02"
        title="Projects"
        des="Explore my featured projects showcasing my expertise in web development and problem-solving capabilities."
      />

      {projectList.slice(0, list).map((project, indx) => (
        <ProjectCard key={project.title} {...project} index={indx} />
      ))}
    </Container>
  );
};

export default Projects;
