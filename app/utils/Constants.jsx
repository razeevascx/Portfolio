import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaDatabase,
  FaPalette,
  FaLayerGroup,
} from "react-icons/fa";
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
import {
  Github,
  Linkedin,
  Twitter,
  Home,
  User,
  Rocket,
  Mail,
} from "lucide-react";
import { PiPinterestLogo } from "react-icons/pi";
import { BiCodeBlock } from "react-icons/bi";

export const quicklink = [
  {
    id: "home",
    title: "Home",
    url: "#home",
    icon: <Home className="w-5 h-5 mr-2" />,
  },
  // {
  //   id: "about",
  //   title: "About",
  //   url: "#about",
  //   icon: <User className="w-5 h-5 mr-2" />,
  // },
  {
    id: "projects",
    title: "Projects",
    url: "#projects",
    icon: <Rocket className="w-5 h-5 mr-2" />,
  },
  {
    id: "contact",
    title: "Contact",
    url: "#contact",
    icon: <Mail className="w-5 h-5 mr-2" />,
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
    hoverColor: "hover:text-white-500",
    bgColor: "bg-white-500/10",
    description: "Check out my projects",
  },
  {
    name: "Pinterest",
    url: "https://uk.pinterest.com/razeevpuree/_created/",
    icon: <PiPinterestLogo size={30} />,
    hoverColor: "hover:text-red-500",
    bgColor: "bg-red-500/10",
    description: "Check out my pins",
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

export const educationData = [
  {
    degree: "Bachelor of Science",
    school: "University of Wolverhampton",
    logo: "https://www.wlv.ac.uk/media/2019-template-assets/graphics/logo.svg",
    location: "Wolverhampton, UK",
    year: "2025 - 2028",
    experiences: [
      "Gained in-depth knowledge in Computer Science.",
      "Became IBM Student Ambassador.",
      "Became Treasurer of Mainframe Student Society.",
    ],
    link: "https://www.wlv.ac.uk/",
  },
];

export const projectList = [
  {
    title: "Portfolio",
    description:
      "Portfolio website to showcase my ideas - A modern, responsive personal portfolio built with Next.js, featuring smooth animations and professional design.",
    link: "https://github.com/razeevascx/Portfolio",
    liveLink: "https://rajeevpuri.com.np",
    tech: {
      nextjs: {
        id: "Next.js",
        icon: <SiNextdotjs className="text-[#000000] dark:text-white" />,
      },
      react: { id: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      tailwind: {
        id: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      typescript: {
        id: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
      framer: {
        id: "Framer Motion",
        icon: <SiFramer className="text-[#0055FF]" />,
      },
    },
    featured: true,
  },
  {
    title: "TeraBox Bot",
    description:
      "Telegram bot for TeraBox automation - An advanced bot with 1 star and 2 forks, featuring file management and download assistance.",
    link: "https://github.com/razeevascx/terabox_bot",
    tech: {
      python: { id: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      docker: { id: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    },
    featured: true,
    stars: 1,
    forks: 2,
  },
  {
    title: "MailRef",
    description:
      "A temporary email service built with Next.js and Supabase, allowing users to generate disposable email addresses for privacy protection.",
    link: "https://github.com/razeevascx/MailRef",
    tech: {
      nextjs: {
        id: "Next.js",
        icon: <SiNextdotjs className="text-[#000000] dark:text-white" />,
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
  {
    title: "Simple Bank Management System",
    description:
      "A banking system using Java - Comprehensive banking application with account management, transactions, and user authentication.",
    link: "https://github.com/razeevascx/Bank_Management_System",
    tech: {
      java: { id: "Java", icon: <FaLayerGroup className="text-[#ED8B00]" /> },
      database: {
        id: "Database",
        icon: <FaDatabase className="text-[#4DB33D]" />,
      },
    },
  },
  {
    title: "News Template",
    description:
      "A modern, responsive news website template with clean design, article management, and optimized reading experience.",
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
    title: "School Management System",
    description:
      "A comprehensive system to manage school operations, including student enrollment, attendance tracking, and grade management.",
    link: "https://drive.google.com/file/d/17FeCxwSDwn6E1xAZLi-f313TcjAebRVw/view",
    tech: {
      react: { id: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      nodejs: { id: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      mongodb: {
        id: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" />,
      },
      express: {
        id: "Express",
        icon: <SiExpress className="text-white" />,
      },
      redux: { id: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    },
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
