import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiFramer,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Home, User, Zap, Rocket, Mail } from "lucide-react";
import { FaDatabase, FaPalette, FaLayerGroup } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";


export const quicklink = [
  {
    id: "home",
    title: "Home",
    url: "/",
    icon: <Home className="w-5 h-5 mr-2" />,
  },
  {
    id: "about",
    title: "About",
    url: "/about",
    icon: <User className="w-5 h-5 mr-2" />,
  },
  {
    id: "projects",
    title: "Projects",
    url: "/projects",
    icon: <Rocket className="w-5 h-5 mr-2" />,
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
    icon: <Mail className="w-5 h-5 mr-2" />,
  },
];
export const projectList = [
  {
    title: "School Management System",
    description:
      "A comprehensive system to manage school operations, including student enrollment, attendance tracking, and grade management.",
    link: "https://drive.google.com/file/d/17FeCxwSDwn6E1xAZLi-f313TcjAebRVw/view",
    // image:"127.0.0.1_3000_.png",
    tech: {
      react: { id: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      nodejs: { id: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      mongodb: {
        id: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" />,
      },
      express: {
        id: "Express",
        icon: <SiExpress className="text-white " />,
      },
      redux: { id: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    },
  },
  {
    title: "Telegram Bot",
    description:
      "A bot for automating tasks on Telegram, such as sending scheduled messages, managing groups, and providing information on demand.",
    link: "https://github.com/razeevascx/terabox_bot",
    tech: {
      python: { id: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      docker: { id: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    },
  },
  {
    title: "News Temp",
    description:
      "A template for displaying news articles with a clean and responsive design, suitable for news websites and blogs.",
    link: "https://github.com/razeevascx/news-temp",
    tech: {
      react: { id: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      tailwind: {
        id: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      vite: { id: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
    },
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website to showcase projects, skills, and experiences, with a modern and professional design.",
    link: "https://rajeevpuri.com.np",
    image:"127.0.0.1_3000_.png",
    tech: {
      react: { id: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      tailwind: {
        id: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      vite: { id: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
      framer: {
        id: "Framer Motion",
        icon: <SiFramer className="text-[#0055FF]" />,
      },
    },
  },
  {
    title: "MailRef",
    description:
      "A tool for generating temporary email addresses for receiving emails without revealing your real email address.",
    link: "https://github.com/razeevascx/MailRef",
    tech: {
      nextjs: {
        id: "Next.js",
        icon: <SiNextdotjs className="text-[#000000]" />,
      },
      tailwind: {
        id: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      typescript: {
        id: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
      supabase: {
        id: "Supabase",
        icon: <SiSupabase className="text-[#3ECF8E]" />,
      },
    },
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/razeev_asnx",
    icon: <Twitter className="w-6 h-6" />,
    hoverColor: "hover:text-white",
    bgColor: "bg-white/10",
    description: "Latest updates & thoughts",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/razeevasnx",
    icon: <Linkedin className="w-6 h-6" />,
    hoverColor: "hover:text-blue-600",
    bgColor: "bg-blue-600/10",
    description: "Professional network",
  },
  {
    name: "GitHub",
    url: "https://github.com/razeevascx/",
    icon: <Github size={30} />,
    hoverColor: "hover:text-gray-500",
    bgColor: "bg-gray-500/10",
    description: "Check out my projects",
  },
  {
    name: "Mail",
    url: "mailto:contact@rajeevpuri.com.np",
    icon: <Mail size={30} />,
    hoverColor: "hover:text-blue-400",
    bgColor: "text-blue-400/10",
    description: "Mail service",
  },
];

export const animations = {
  // Page level animations
  pageVariants: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  // Container animations with stagger effect
  containerVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  },

  // Individual item animations
  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },

  // Hover animations
  hoverScale: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};


export const educationData = [
  {
    degree: "Bsc (Hons) Computer Science",
    school: "University of Wolverhampton",
    role: "Major in Computer Science",
    location: "Wolverhampton, UK",
    year: "2025 - 2028",
    experiences: [
      "Gained in-depth knowledge in Computer Science.",
      "Developed skills in software development, data analysis, and problem-solving.",
      "Participated in various tech-related projects and workshops.",
    ],
    link: "https://www.wlv.ac.uk/",
  },
  {
    degree: "Higher Secondary Education",
    school: "Khwopa Higher Secondary School",
    role: "Major in Computer Science",
    location: "Dekocha 06, Bhaktapur 44800",
    year: "2022 - 2024",
    experiences: [
      "Gained foundational knowledge in Computer Science.",
      "Developed skills in problem-solving, coding, and data analysis.",
      "Participated in academic projects and tech-based workshops.",
    ],
    link: "https://www.facebook.com/khwopahss",
  },
];

export const services = [
  {
    icon: <BiCodeBlock size={40} aria-label="MERN Stack Development" />,
    title: "MERN Stack Development",
    description:
      "Specialized in building full-stack applications using MongoDB, Express.js, React.js, and Node.js. Creating scalable and modern web solutions with the latest technologies.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
  },
  {
    icon: <FaPalette size={40} aria-label="Graphic Design" />,
    title: "Graphic Design",
    description:
      "Creating stunning visual content including logos, brand identity, marketing materials, and social media graphics. Focusing on unique and memorable designs.",
    technologies: ["Photoshop", "Illustrator", "Figma"],
  },
  {
    icon: <FaLayerGroup size={40} aria-label="UI/UX Design" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and user-centered interfaces with a focus on user experience. Creating wireframes, prototypes, and implementing responsive designs.",
    technologies: ["Figma"],
  },
  {
    icon: <FaDatabase size={40} aria-label="Database Management" />,
    title: "Database Management",
    description:
      "Expert in database design, optimization, and management. Handling both SQL and NoSQL databases with a focus on performance and security.",
    technologies: ["MongoDB", "MySQL"],
  },
];
