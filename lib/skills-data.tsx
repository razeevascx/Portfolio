import {
  ReactLight,
  Docker,
  Python,
  TailwindCSS,
  TypeScript,
  Nextjs,
  Vue,
  Vite,
  Redux,
  Nodejs,
  Angular,
  Figma,
  Jest,
  Cypress,
  Postman,
  Netlify,
  Heroku,
  AWS,
  Firebase,
  Vercel,
  SocketIO,
  Expressjs,
  Java,
  Go,
  GitHub,
  Git,
  Prettier,
  ESLint,
  Npm,
} from "@ridemountainpig/svgl-react";
import {
  Code2,
  Package,
  Coffee,
  Bootstrap,
  Zap,
  Cloud,
  FileCode,
  Wand2,
  Globe,
  TestTube2,
  AlertCircle,
  Terminal,
  Server,
  Lightbulb,
} from "lucide-react";

export interface Skill {
  label: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface Language {
  label: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export const libraries: Skill[] = [
  {
    label: "React.js",
    icon: <ReactLight width={24} height={24} className="text-blue-500" />,
    color: "text-blue-500",
    description:
      "A JavaScript library for building user interfaces with component-based architecture.",
  },
  {
    label: "Redux",
    icon: <Redux width={24} height={24} className="text-purple-600" />,
    color: "text-purple-600",
    description:
      "A predictable state container for JavaScript apps, commonly used with React.",
  },
  {
    label: "Framer Motion",
    icon: <Lightbulb width={24} height={24} className="text-pink-500" />,
    color: "text-pink-500",
    description:
      "A production-ready motion library for React with declarative animations.",
  },
  {
    label: "Socket.io",
    icon: <SocketIO width={24} height={24} className="text-gray-800" />,
    color: "text-gray-800",
    description:
      "A library that enables real-time bidirectional event-based communication.",
  },
  {
    label: "Express.js",
    icon: <Expressjs width={24} height={24} className="text-yellow-500" />,
    color: "text-yellow-500",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    label: "Next.js",
    icon: (
      <Nextjs width={24} height={24} className="text-black dark:text-white" />
    ),
    color: "text-black dark:text-white",
    description:
      "The React Framework for production with built-in SSR and static generation.",
  },
  {
    label: "Vue.js",
    icon: <Vue width={24} height={24} className="text-green-500" />,
    color: "text-green-500",
    description:
      "The Progressive JavaScript Framework for building user interfaces.",
  },
  {
    label: "Angular",
    icon: <Angular width={24} height={24} className="text-red-600" />,
    color: "text-red-600",
    description:
      "A platform for building mobile and desktop web applications using TypeScript.",
  },
  {
    label: "Tailwind CSS",
    icon: <TailwindCSS width={24} height={24} className="text-blue-400" />,
    color: "text-blue-400",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    label: "Bootstrap",
    icon: <Bootstrap width={24} height={24} className="text-purple-600" />,
    color: "text-purple-600",
    description:
      "The world's most popular CSS Framework for building responsive, mobile-first sites.",
  },
  {
    label: "Sass",
    icon: <FileCode width={24} height={24} className="text-pink-500" />,
    color: "text-pink-500",
    description:
      "CSS with superpowers - the most mature, stable, and powerful professional grade CSS extension language.",
  },
  {
    label: "Git",
    icon: <Git width={24} height={24} className="text-red-500" />,
    color: "text-red-500",
    description:
      "A distributed version control system for tracking changes in source code.",
  },
  {
    label: "GitHub",
    icon: <GitHub width={24} height={24} className="text-gray-700" />,
    color: "text-gray-700",
    description: "A platform for version control and collaboration using Git.",
  },
  {
    label: "Docker",
    icon: <Docker width={24} height={24} className="text-blue-400" />,
    color: "text-blue-400",
    description:
      "A platform for developing, shipping, and running applications in containers.",
  },
  {
    label: "Vite",
    icon: <Vite width={24} height={24} className="text-yellow-500" />,
    color: "text-yellow-500",
    description:
      "A build tool that aims to provide a faster and leaner development experience.",
  },
  {
    label: "Webpack",
    icon: <Globe width={24} height={24} className="text-blue-600" />,
    color: "text-blue-600",
    description: "A static module bundler for modern JavaScript applications.",
  },
  {
    label: "VS Code",
    icon: <Terminal width={24} height={24} className="text-blue-500" />,
    color: "text-blue-500",
    description:
      "A lightweight but powerful source code editor with rich ecosystem.",
  },
  {
    label: "Postman",
    icon: <Server width={24} height={24} className="text-orange-500" />,
    color: "text-orange-500",
    description: "A collaboration platform for API development and testing.",
  },
  {
    label: "Figma",
    icon: <Figma width={24} height={24} className="text-pink-500" />,
    color: "text-pink-500",
    description:
      "A web-based UI/UX design tool for collaborative interface design.",
  },
  {
    label: "npm",
    icon: <Npm width={24} height={24} className="text-red-500" />,
    color: "text-red-500",
    description:
      "The package manager for JavaScript and the world's largest software registry.",
  },
  {
    label: "Jest",
    icon: <Jest width={24} height={24} className="text-red-600" />,
    color: "text-red-600",
    description:
      "A delightful JavaScript testing framework with a focus on simplicity.",
  },
  {
    label: "Cypress",
    icon: <Cypress width={24} height={24} className="text-green-600" />,
    color: "text-green-600",
    description:
      "Fast, easy and reliable testing for anything that runs in a browser.",
  },
  {
    label: "ESLint",
    icon: <ESLint width={24} height={24} className="text-purple-600" />,
    color: "text-purple-600",
    description:
      "A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.",
  },
  {
    label: "Prettier",
    icon: <Prettier width={24} height={24} className="text-pink-600" />,
    color: "text-pink-600",
    description:
      "An opinionated code formatter that supports many languages and integrates with most editors.",
  },
  {
    label: "Vercel",
    icon: (
      <Vercel width={24} height={24} className="text-black dark:text-white" />
    ),
    color: "text-black dark:text-white",
    description:
      "A platform for frontend frameworks and static sites, built to integrate with headless content.",
  },
  {
    label: "Netlify",
    icon: <Netlify width={24} height={24} className="text-teal-500" />,
    color: "text-teal-500",
    description:
      "A web developer platform that multiplies productivity with deploy previews and serverless functions.",
  },
  {
    label: "Heroku",
    icon: <Heroku width={24} height={24} className="text-purple-700" />,
    color: "text-purple-700",
    description:
      "A platform as a service that enables developers to build, run, and operate applications entirely in the cloud.",
  },
  {
    label: "AWS",
    icon: <AWS width={24} height={24} className="text-orange-600" />,
    color: "text-orange-600",
    description:
      "Amazon Web Services - a comprehensive, evolving cloud computing platform.",
  },
];

export const language: Record<string, Language> = {
  TypeScript: {
    label: "TypeScript",
    icon: <TypeScript width={24} height={24} className="text-blue-600 " />,
    color: "text-blue-600",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript.",
  },
  Javascript: {
    label: "JavaScript",
    icon: <Code2 width={24} height={24} className="text-yellow-500 " />,
    color: "text-yellow-500",
    description:
      "JavaScript is a high-level, dynamic, and interpreted programming language for web development.",
  },
  Java: {
    label: "Java",
    icon: <Java width={24} height={24} className="text-orange-600 " />,
    color: "text-red-600",
    description:
      "Java is a high-level, class-based, object-oriented programming language.",
  },
  Go: {
    label: "Go",
    icon: <Go width={24} height={24} className="text-blue-300 " />,
    color: "text-blue-500",
    description:
      "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
  },
  Python: {
    label: "Python",
    icon: <Python width={24} height={24} className="text-yellow-400 " />,
    color: "text-yellow-600",
    description:
      "Python is a high-level, interpreted programming language with dynamic semantics.",
  },
};
