import { motion } from "framer-motion";
const Project = ({ title, description, link, tech }) => {
  return (
    <div className="project glossy shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-2 ">{title}</h2>
      <p className=" mb-4">{description}</p>
      <p className=" mb-4">
        <strong>Tech:</strong> {tech}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        View Project
      </a>
    </div>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: "School Management System",
      description:
        "A comprehensive system to manage school operations, including student enrollment, attendance tracking, and grade management.",
      link: "https://drive.google.com/file/d/17FeCxwSDwn6E1xAZLi-f313TcjAebRVw/view",
      tech: "React, Node.js, MongoDB , Express , Redux ",
    },
    {
      title: "Telegram Bot",
      description:
        "A bot for automating tasks on Telegram, such as sending scheduled messages, managing groups, and providing information on demand.",
      link: "https://github.com/razeevascx/terabox_bot",
      tech: "Python, Telegram API , Docker, Docker Compose",
    },
    {
      title: "News Temp",
      description:
        "A template for displaying news articles with a clean and responsive design, suitable for news websites and blogs.",
      link: "https://github.com/razeevascx/news-temp",
      tech: "React Js,Tailwind CSS, Vite",
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website to showcase projects, skills, and experiences, with a modern and professional design.",
      link: "https://rajeevpuri.com.np",
      tech: "React, Tailwind CSS , Vite, Framer Motion, React Icons, Tanstack Router,",
    },
    {
      title: "MailRef",
      description:
        "A tool for generating temporary email addresses for receiving emails without revealing your real email address.",
      link: "https://github.com/razeevascx/MailRef",
      tech: "React -SSR, Tailwind CSS, TypeScript, Next.js, Supabase",
    },
  ];

  return (
    <section className="projects py-12 max-w-7xl mx-auto space-y-10 p-6 rounded-lg shadow-lg ">
      <motion.div
        className="border-l-4 border-blue-500 pl-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white">
          <span className="text-blue-500">03.</span> Projects
        </h1>
      </motion.div>
      <div className="text-white">
        <h1 className="text-4xl text-center font-bold">
          Like the work I do?{" "}
          <a href={"#about"} className="text-blue-500 underline">
            Contact
          </a>
        </h1>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-1 gap-8">
        {projectList.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
