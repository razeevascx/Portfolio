import { Portfilo } from "../assets/assests";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Project = () => {
  const projects = [
    {
      images: Portfilo,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://razeevasnx.vercel.app/",
      repoLink: "https://github.com/razeevascx/portfolio",
      featured: true,
    },
  ];

  return (
    <section className="w-full text-text py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      className="mb-32 last:mb-0"
    >
      <div className="glass-card p-8 rounded-xl backdrop-blur-sm">
        <div className={`grid md:grid-cols-12 gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          <ProjectImage image={project.images} title={project.title} />
          <ProjectDescription project={project} />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDescription = ({ project }) => (
  <div className="md:col-span-5 flex flex-col justify-center">
    <div className="mb-2">
      {project.featured && (
        <span className="text-primary text-sm font-mono">Featured Project</span>
      )}
    </div>
    <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
      {project.title}
    </h3>
    <div className="glass-card p-6 mb-6 backdrop-blur-sm">
      <p className="text-text/80 leading-relaxed">{project.description}</p>
    </div>
    <TechStack technologies={project.technologies} />
    <ProjectLinks repoLink={project.repoLink} liveLink={project.liveLink} />
  </div>
);

const TechStack = ({ technologies }) => (
  <div className="flex flex-wrap gap-3 mb-8">
    {technologies.map((tech, index) => (
      <span
        key={index}
        className="glass-card px-4 py-2 rounded-full text-primary text-sm font-mono hover:scale-105 transition-transform duration-300"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({ repoLink, liveLink }) => (
  <div className="flex gap-6">
    <LinkButton href={repoLink} label="Source Code" icon={<FaGithub />} />
    <LinkButton href={liveLink} label="Live Demo" icon={<FaExternalLinkAlt />} />
  </div>
);

const LinkButton = ({ href, label, icon }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-text/80 hover:text-primary transition-colors duration-300"
    aria-label={label}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </motion.a>
);

const ProjectImage = ({ image, title }) => (
  <motion.div
    className="md:col-span-7 relative group"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative overflow-hidden rounded-lg glass-card">
      <img
        src={image}
        alt={`${title} Preview`}
        className="w-full h-full object-cover object-center transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

export default Project;