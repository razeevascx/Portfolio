import {
  FaReact,
  FaGit,
  FaDocker,
  FaGithub,
  FaJs,
  FaFigma,
  FaNpm,
  FaPython,
  FaJava,
  FaBootstrap,
  FaSass,
  FaAngular,
  FaVuejs,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostman,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiNextdotjs,
  SiVite,
  SiWebpack,
  SiFramer,
  SiRedux,
  SiExpress,
  SiSocketdotio,
  SiJest,
  SiCypress,
  SiEslint,
  SiPrettier,
  SiVercel,
  SiNetlify,
  SiHeroku,
} from "react-icons/si";

export const libraries = [
  {
    label: "React.js",
    icon: <FaReact className="text-blue-500" />,
    color: "text-blue-500",
    description:
      "A JavaScript library for building user interfaces with component-based architecture.",
  },
  {
    label: "Redux",
    icon: <SiRedux className="text-purple-600" />,
    color: "text-purple-600",
    description:
      "A predictable state container for JavaScript apps, commonly used with React.",
  },
  {
    label: "Framer Motion",
    icon: <SiFramer className="text-pink-500" />,
    color: "text-pink-500",
    description:
      "A production-ready motion library for React with declarative animations.",
  },
  {
    label: "Socket.io",
    icon: <SiSocketdotio className="text-gray-800" />,
    color: "text-gray-800",
    description:
      "A library that enables real-time bidirectional event-based communication.",
  },
  {
    label: "Express.js",
    icon: <SiExpress className="text-yellow-500" />,
    color: "text-yellow-500",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    color: "text-black dark:text-white",
    description:
      "The React Framework for production with built-in SSR and static generation.",
  },
  {
    label: "Vue.js",
    icon: <FaVuejs className="text-green-500" />,
    color: "text-green-500",
    description:
      "The Progressive JavaScript Framework for building user interfaces.",
  },
  {
    label: "Angular",
    icon: <FaAngular className="text-red-600" />,
    color: "text-red-600",
    description:
      "A platform for building mobile and desktop web applications using TypeScript.",
  },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-400" />,
    color: "text-blue-400",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    label: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600" />,
    color: "text-purple-600",
    description:
      "The world's most popular CSS Framework for building responsive, mobile-first sites.",
  },
  {
    label: "Sass",
    icon: <FaSass className="text-pink-500" />,
    color: "text-pink-500",
    description:
      "CSS with superpowers - the most mature, stable, and powerful professional grade CSS extension language.",
  },
  {
    label: "Git",
    icon: <FaGit className="text-red-500" />,
    color: "text-red-500",
    description:
      "A distributed version control system for tracking changes in source code.",
  },
  {
    label: "GitHub",
    icon: <FaGithub className="text-gray-700" />,
    color: "text-gray-700",
    description: "A platform for version control and collaboration using Git.",
  },
  {
    label: "Docker",
    icon: <FaDocker className="text-blue-400" />,
    color: "text-blue-400",
    description:
      "A platform for developing, shipping, and running applications in containers.",
  },
  {
    label: "Vite",
    icon: <SiVite className="text-yellow-500" />,
    color: "text-yellow-500",
    description:
      "A build tool that aims to provide a faster and leaner development experience.",
  },
  {
    label: "Webpack",
    icon: <SiWebpack className="text-blue-600" />,
    color: "text-blue-600",
    description: "A static module bundler for modern JavaScript applications.",
  },
  {
    label: "VS Code",
    icon: <FaJs className="text-blue-500" />,
    color: "text-blue-500",
    description:
      "A lightweight but powerful source code editor with rich ecosystem.",
  },
  {
    label: "Postman",
    icon: <SiPostman className="text-orange-500" />,
    color: "text-orange-500",
    description: "A collaboration platform for API development and testing.",
  },
  {
    label: "Figma",
    icon: <FaFigma className="text-pink-500" />,
    color: "text-pink-500",
    description:
      "A web-based UI/UX design tool for collaborative interface design.",
  },
  {
    label: "npm",
    icon: <FaNpm className="text-red-500" />,
    color: "text-red-500",
    description:
      "The package manager for JavaScript and the world's largest software registry.",
  },
  {
    label: "Jest",
    icon: <SiJest className="text-red-600" />,
    color: "text-red-600",
    description:
      "A delightful JavaScript testing framework with a focus on simplicity.",
  },
  {
    label: "Cypress",
    icon: <SiCypress className="text-green-600" />,
    color: "text-green-600",
    description:
      "Fast, easy and reliable testing for anything that runs in a browser.",
  },
  {
    label: "ESLint",
    icon: <SiEslint className="text-purple-600" />,
    color: "text-purple-600",
    description:
      "A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.",
  },
  {
    label: "Prettier",
    icon: <SiPrettier className="text-pink-600" />,
    color: "text-pink-600",
    description:
      "An opinionated code formatter that supports many languages and integrates with most editors.",
  },
  {
    label: "Vercel",
    icon: <SiVercel className="text-black dark:text-white" />,
    color: "text-black dark:text-white",
    description:
      "A platform for frontend frameworks and static sites, built to integrate with headless content.",
  },
  {
    label: "Netlify",
    icon: <SiNetlify className="text-teal-500" />,
    color: "text-teal-500",
    description:
      "A web developer platform that multiplies productivity with deploy previews and serverless functions.",
  },
  {
    label: "Heroku",
    icon: <SiHeroku className="text-purple-700" />,
    color: "text-purple-700",
    description:
      "A platform as a service that enables developers to build, run, and operate applications entirely in the cloud.",
  },
  {
    label: "AWS",
    icon: <FaAws className="text-orange-600" />,
    color: "text-orange-600",
    description:
      "Amazon Web Services - a comprehensive, evolving cloud computing platform.",
  },
];

export const language = {
  Javascript: {
    label: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
    color: "text-yellow-500",
    description:
      "JavaScript is a high-level, dynamic, and interpreted programming language for web development.",
  },
  TypeScript: {
    label: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    color: "text-blue-600",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript.",
  },
  Java: {
    label: "Java",
    icon: <FaJava className="text-red-600" />,
    color: "text-red-600",
    description:
      "Java is a high-level, class-based, object-oriented programming language.",
  },
  Go: {
    label: "Go",
    icon: <SiGo className="text-blue-500" />,
    color: "text-blue-500",
    description:
      "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
  },
  Python: {
    label: "Python",
    icon: <FaPython className="text-green-600" />,
    color: "text-green-600",
    description:
      "Python is a high-level, interpreted programming language with dynamic semantics.",
  },
};
