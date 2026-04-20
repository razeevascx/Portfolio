import {
  ReactLight,
  Nodejs,
  Python,
  Docker,
  MongoDBLight,
  Redux,
  TailwindCSS,
  MotionDark,
  Vite,
  TypeScript,
  Nextjs,
  Supabase,
  Vue,
} from "@ridemountainpig/svgl-react";
import { Github, Home, Mail, Twitter, Linkedin } from "lucide-react";

interface QuickLink {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
  bgColor: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  logo: string;
  location: string;
  year: string;
  experiences: string[];
  link: string;
}

interface TechStack {
  [key: string]: {
    id: string;
    icon: React.ReactNode;
  };
}

export interface Project {
  title: string;
  description: string;
  link: string;
  liveLink?: string;
  tech: TechStack;
  featured?: boolean;
  stars?: number;
  forks?: number;
  list?: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}

export const quicklink: QuickLink[] = [
  {
    id: "services",
    title: "Services",
    url: "/services",
    icon: <Home className="w-5 h-5 mr-2" />,
  },
  {
    id: "projects",
    title: "Projects",
    url: "/projects",
    icon: <Github className="w-5 h-5 mr-2" />,
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
    icon: <Mail className="w-5 h-5 mr-2" />,
  },
];

export const socialLinks: SocialLink[] = [
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
    name: "Mail",
    url: "mailto:contact@rajeevpuri.com.np",
    icon: <Mail size={30} />,
    hoverColor: "hover:text-blue-400",
    bgColor: "text-blue-400/10",
    description: "Mail service",
  },
];

export const educationData: Education[] = [
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
        icon: (
          <Nextjs
            width={24}
            height={24}
            className="text-[#000000] dark:text-white"
          />
        ),
      },
      react: {
        id: "React",
        icon: <ReactLight width={24} height={24} className="text-[#61DAFB]" />,
      },
      tailwind: {
        id: "Tailwind CSS",
        icon: <TailwindCSS width={24} height={24} className="text-[#06B6D4]" />,
      },
      typescript: {
        id: "TypeScript",
        icon: <TypeScript width={24} height={24} className="text-[#3178C6]" />,
      },
      framer: {
        id: "Framer Motion",
        icon: <MotionDark width={24} height={24} className="text-[#0055FF]" />,
      },
    },
    featured: true,
  },
  {
    title: "TeraBox Bot",
    description:
      "Telegram bot for TeraBox automation - An advanced bot with 2 stars and 3 forks, featuring file management and download assistance.",
    link: "https://github.com/razeevascx/terabox_bot",
    tech: {
      python: {
        id: "Python",
        icon: <Python width={24} height={24} className="text-[#3776AB]" />,
      },
      docker: {
        id: "Docker",
        icon: <Docker width={24} height={24} className="text-[#2496ED]" />,
      },
    },
    featured: true,
    stars: 2,
    forks: 3,
  },
  {
    title: "MailRef",
    description:
      "A temporary email service built with Next.js and Supabase, allowing users to generate disposable email addresses for privacy protection.",
    link: "https://github.com/razeevascx/MailRef",
    tech: {
      nextjs: {
        id: "Next.js",
        icon: (
          <Nextjs
            width={24}
            height={24}
            className="text-[#000000] dark:text-white"
          />
        ),
      },
      tailwind: {
        id: "Tailwind CSS",
        icon: <TailwindCSS width={24} height={24} className="text-[#06B6D4]" />,
      },
      typescript: {
        id: "TypeScript",
        icon: <TypeScript width={24} height={24} className="text-[#3178C6]" />,
      },
      supabase: {
        id: "Supabase",
        icon: <Supabase width={24} height={24} className="text-[#3ECF8E]" />,
      },
    },
  },
  {
    title: "Simple Bank Management System",
    description:
      "A banking system using Java - Comprehensive banking application with account management, transactions, and user authentication.",
    link: "https://github.com/razeevascx/Bank_Management_System",
    tech: {
      java: {
        id: "Java",
        icon: <Python width={24} height={24} className="text-[#ED8B00]" />,
      },
      database: {
        id: "Database",
        icon: (
          <MongoDBLight width={24} height={24} className="text-[#4DB33D]" />
        ),
      },
    },
  },
  {
    title: "News Template",
    description:
      "A modern, responsive news website template with clean design, article management, and optimized reading experience.",
    link: "https://github.com/razeevascx/news-temp",
    tech: {
      react: {
        id: "React",
        icon: <ReactLight width={24} height={24} className="text-[#61DAFB]" />,
      },
      tailwind: {
        id: "Tailwind CSS",
        icon: <TailwindCSS width={24} height={24} className="text-[#06B6D4]" />,
      },
      vite: {
        id: "Vite",
        icon: <Vite width={24} height={24} className="text-[#646CFF]" />,
      },
    },
  },
  {
    title: "School Management System",
    description:
      "A comprehensive system to manage school operations, including student enrollment, attendance tracking, and grade management.",
    link: "https://drive.google.com/file/d/17FeCxwSDwn6E1xAZLi-f313TcjAebRVw/view",
    tech: {
      react: {
        id: "React",
        icon: <ReactLight width={24} height={24} className="text-[#61DAFB]" />,
      },
      nodejs: {
        id: "Node.js",
        icon: <Nodejs width={24} height={24} className="text-[#339933]" />,
      },
      mongodb: {
        id: "MongoDB",
        icon: (
          <MongoDBLight width={24} height={24} className="text-[#47A248]" />
        ),
      },
      express: {
        id: "Express",
        icon: <Nodejs width={24} height={24} className="text-white" />,
      },
      redux: {
        id: "Redux",
        icon: <Redux width={24} height={24} className="text-[#764ABC]" />,
      },
    },
  },
  {
    title: "Qwizzed",
    description:
      "An interactive quiz application for testing knowledge with real-time scoring and detailed analytics. Built with modern TypeScript technologies.",
    link: "https://github.com/razeevascx/qwizzed",
    tech: {
      typescript: {
        id: "TypeScript",
        icon: <TypeScript width={24} height={24} className="text-[#3178C6]" />,
      },
      react: {
        id: "React",
        icon: <ReactLight width={24} height={24} className="text-[#61DAFB]" />,
      },
      tailwind: {
        id: "Tailwind CSS",
        icon: <TailwindCSS width={24} height={24} className="text-[#06B6D4]" />,
      },
    },
    stars: 1,
  },
  {
    title: "Z Xplore",
    description:
      "IBM Z Xplore Dev Container - Packages core tooling for IBM Z Xplore mainframe development without manual setup, enabling streamlined containerized development.",
    link: "https://github.com/razeevascx/z-xplore",
    tech: {
      docker: {
        id: "Docker",
        icon: <Docker width={24} height={24} className="text-[#2496ED]" />,
      },
    },
  },
  {
    title: "New Tab",
    description:
      "A beautiful and customizable new tab page extension. Provides an elegant dashboard with quick access to frequently used features and personalization options.",
    link: "https://github.com/razeevascx/new-tab",
    tech: {
      vue: {
        id: "Vue",
        icon: <Vue width={24} height={24} className="text-[#4FC08D]" />,
      },
    },
  },
  {
    title: "Passkey Demo",
    description:
      "A demonstration project showcasing passwordless authentication using passkeys. Implements modern security standards for user authentication.",
    link: "https://github.com/razeevascx/passkey-demo",
    tech: {
      typescript: {
        id: "TypeScript",
        icon: <TypeScript width={24} height={24} className="text-[#3178C6]" />,
      },
    },
  },
];

export const services: Service[] = [
  {
    icon: (
      <ReactLight width={40} height={40} aria-label="MERN Stack Development" />
    ),
    title: "MERN Stack Development",
    description:
      "Specialized in building full-stack applications using MongoDB, Express.js, React.js, and Node.js. Creating scalable and modern web solutions with the latest technologies.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
  },
  {
    icon: <TailwindCSS width={40} height={40} aria-label="Graphic Design" />,
    title: "Graphic Design",
    description:
      "Creating stunning visual content including logos, brand identity, marketing materials, and social media graphics. Focusing on unique and memorable designs.",
    technologies: ["Photoshop", "Illustrator", "Figma"],
  },
  {
    icon: <ReactLight width={40} height={40} aria-label="UI/UX Design" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and user-centered interfaces with a focus on user experience. Creating wireframes, prototypes, and implementing responsive designs.",
    technologies: ["Figma"],
  },
  {
    icon: (
      <MongoDBLight width={40} height={40} aria-label="Database Management" />
    ),
    title: "Database Management",
    description:
      "Expert in database design, optimization, and management. Handling both SQL and NoSQL databases with a focus on performance and security.",
    technologies: ["MongoDB", "MySQL"],
  },
];
