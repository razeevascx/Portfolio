import {
  ReactLight,
  Nodejs,
  Python,
  Docker,
  Redux,
  TailwindCSS,
  MotionDark,
  Vite,
  Java,
  TypeScript,
  Nextjs,
  Supabase,
  Vue,
  MongoDBDark,
  XDark,
} from "@ridemountainpig/svgl-react";
import {
  GithubIcon,
  Mail,
  LinkedinIcon,
  X,
  Code2,
  Palette,
  Layout,
  Database,
  Cpu,
  ShieldCheck,
  Search,
  Pencil,
  LayoutDashboard,
  Rocket,
} from "lucide-react";

interface QuickLink {
  id: string;
  title: string;
  url: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
  bgColor: string;
  description: string;
  username?: string;
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
  },
  {
    id: "projects",
    title: "Projects",
    url: "/projects",
  },
  {
    id: "about",
    title: "About",
    url: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/razeev_asnx",
    icon: <XDark className="w-6 h-6" />,
    hoverColor: "hover:text-white",
    bgColor: "bg-white/10",
    description: "Latest updates & thoughts",
    username: "@razeev_asnx",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/razeevasnx",
    icon: <LinkedinIcon className="w-6 h-6" />,
    hoverColor: "hover:text-blue-600",
    bgColor: "bg-blue-600/10",
    description: "Professional network",
    username: "Rajeev Puri",
  },
  {
    name: "GitHub",
    url: "https://github.com/razeevascx/",
    icon: <GithubIcon size={30} />,
    hoverColor: "hover:text-white",
    bgColor: "bg-white/10",
    description: "Check out my projects",
    username: "razeevascx",
  },
  {
    name: "Mail",
    url: "mailto:contact@rajeevpuri.com.np",
    icon: <Mail size={30} />,
    hoverColor: "hover:text-blue-400",
    bgColor: "bg-blue-400/10",
    description: "Mail service",
    username: "contact@rajeevpuri.com.np",
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
        icon: <Java width={24} height={24} className="text-[#ED8B00]" />,
      },
      database: {
        id: "Database",
        icon: <MongoDBDark width={24} height={24} className="text-[#4DB33D]" />,
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
        icon: <MongoDBDark width={24} height={24} className="text-[#47A248]" />,
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

import {
  FullStackIllustration,
  BrandingIllustration,
  UIUXIllustration,
  DatabaseIllustration,
  ArchitectureIllustration,
  DevOpsIllustration,
} from "@/components/illustration/ServiceIllustrations";

export const services = [
  {
    id: "01",
    icon: <FullStackIllustration />,
    title: "Full-Stack Development",
    description:
      "End-to-end applications built with scalability and performance in mind. I deliver robust backends paired with high-fidelity, interactive frontends that provide a seamless user experience across all devices.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
    ],
    category: "Engineering",
    type: "core",
  },
  {
    id: "02",
    icon: <BrandingIllustration />,
    title: "Brand & Visual Identity",
    description:
      "Strategic visual systems that tell your unique story. From logo design to comprehensive brand guidelines, I create cohesive identities that build trust and ensure long-term recognition in your market.",
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
      "Typography Systems",
      "Design Systems",
    ],
    category: "Branding",
    type: "capable",
  },
  {
    id: "03",
    icon: <UIUXIllustration />,
    title: "UI/UX Design",
    description:
      "User-centered interfaces that people actually enjoy using. I transform complex requirements into intuitive, high-fidelity prototypes, focusing on accessibility, usability, and modern aesthetic standards.",
    technologies: [
      "Figma",
      "Framer",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Design Systems",
    ],
    category: "Design",
    type: "core",
  },
  {
    id: "04",
    icon: <DatabaseIllustration />,
    title: "Database Design & Optimization",
    description:
      "Fast, reliable data management at any scale. I design optimized schemas and write efficient queries for both SQL and NoSQL environments, ensuring your application remains snappy under heavy load.",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Indexing",
      "Query Optimization",
      "Data Modeling",
    ],
    category: "Data",
    type: "core",
  },
  {
    id: "05",
    icon: <ArchitectureIllustration />,
    title: "System Design & Architecture",
    description:
      "Future-proof systems designed for the long haul. I apply clean architecture principles and proven design patterns to build infrastructure that grows with your user base and business needs.",
    technologies: [
      "Microservices",
      "Event-Driven Architecture",
      "REST APIs",
      "GraphQL",
      "System Design Patterns",
      "Load Balancing",
      "Caching Strategies",
    ],
    category: "Architecture",
    type: "core",
  },
  {
    id: "06",
    icon: <DevOpsIllustration />,
    title: "DevOps & Cloud Security",
    description:
      "Ship fast, stay secure. I implement automated CI/CD pipelines and containerized environments with security baked in from the start, allowing you to focus on features while I handle the infrastructure.",
    technologies: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "AWS",
      "CI/CD Pipelines",
      "Cloud Security",
      "Monitoring (Prometheus/Grafana)",
    ],
    category: "DevOps",
    type: "capable",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    detail:
      "We dive deep into your business goals, user needs, and market landscape to define a clear, actionable roadmap for success.",
    icon: Search,
    status: "Planning",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    detail:
      "We craft intuitive interfaces and distinct visual systems, iterating rapidly on high-fidelity prototypes to validate concepts.",
    icon: Pencil,
    status: "Designing",
  },
  {
    step: "03",
    title: "Engineering",
    detail:
      "Our engineers build robust, scalable architectures using modern tech stacks, ensuring pixel-perfect implementation.",
    icon: LayoutDashboard,
    status: "Building",
  },
  {
    step: "04",
    title: "Launch & Scale",
    detail:
      "We deploy with confidence, monitor real-world usage, and provide ongoing support to evolve the product.",
    icon: Rocket,
    status: "Releasing",
  },
];
