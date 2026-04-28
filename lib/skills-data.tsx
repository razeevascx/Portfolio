import {
  ReactLight,
  Docker,
  Python,
  TailwindCSS,
  TypeScript,
  Nextjs,
  Vite,
  Nodejs,
  Figma,
  Firebase,
  ExpressjsDark,
  MongoDBDark,
  MySQLDark,
  Supabase,
  Spring,
  FramerDark,
  Git,
  Postman,
  PhpDark,
  Java,
  BashDark,
  C,
  AmazonWebServicesDark,
  ShadcnUiDark,
  PrismaDark,
  Bun,
} from "@ridemountainpig/svgl-react";

export interface Skill {
  label: string;
  icon: React.ReactNode;
  description: string;
}

interface Language {
  label: string;
  icon: React.ReactNode;
  description: string;
}

export const libraries: Skill[] = [
  {
    label: "React",
    icon: <ReactLight className="size-10" />,
    description:
      "A JavaScript library for building user interfaces with component-based architecture.",
  },
  {
    label: "Next.js",
    icon: <Nextjs className="size-10" />,
    description:
      "The React Framework for production with built-in SSR and static generation.",
  },

  {
    label: "Spring Boot",
    icon: <Spring className="size-10" />,
    description:
      "Java-based framework for building production-grade stand-alone Spring applications.",
  },
  {
    label: "Node.js",
    icon: <Nodejs className="size-10" />,
    description:
      "JavaScript runtime built on Chrome's V8 engine for server-side development.",
  },
  {
    label: "Express.js",
    icon: <ExpressjsDark className="size-10" />,
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    label: "TailwindCSS",
    icon: <TailwindCSS className="size-10" />,
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    label: "Shadcn UI",
    icon: <ShadcnUiDark className="size-10" />,
    description:
      "Simple, accessible component library that helps you build apps faster.",
  },
  {
    label: "Framer Motion",
    icon: <FramerDark className="size-10" />,
    description:
      "A production-ready motion library for React with declarative animations.",
  },
  {
    label: "Vite",
    icon: <Vite className="size-10" />,
    description:
      "A build tool that aims to provide a faster and leaner development experience.",
  },
  {
    label: "Prisma",
    icon: <PrismaDark className="size-10" />,
    description:
      "Next-generation ORM for Node.js and TypeScript with a powerful query engine.",
  },
  {
    label: "MongoDB",
    icon: <MongoDBDark className="size-10" />,
    description:
      "A NoSQL document database with scalable, flexible data storage.",
  },
  {
    label: "MySQL",
    icon: <MySQLDark className="size-10" />,
    description: "A popular open-source relational database management system.",
  },
  {
    label: "Firebase",
    icon: <Firebase className="size-10" />,
    description:
      "Google's platform for building web and mobile apps with real-time database.",
  },
  {
    label: "Supabase",
    icon: <Supabase className="size-10" />,
    description:
      "Open source Firebase alternative with PostgreSQL, Auth, and Real-time features.",
  },
  {
    label: "AWS",
    icon: <AmazonWebServicesDark className="size-10" />,
    description:
      "Amazon Web Services - a comprehensive, evolving cloud computing platform.",
  },
  {
    label: "Docker",
    icon: <Docker className="size-10" />,
    description:
      "A platform for developing, shipping, and running applications in containers.",
  },
  {
    label: "Git",
    icon: <Git className="size-10" />,
    description:
      "A distributed version control system for tracking changes in source code.",
  },
  {
    label: "Bun",
    icon: <Bun className="size-10" />,
    description:
      "The package manager for JavaScript and the world's largest software registry.",
  },
  {
    label: "Postman",
    icon: <Postman className="size-10" />,
    description: "A collaboration platform for API development and testing.",
  },
  {
    label: "Figma",
    icon: <Figma className="size-10" />,
    description:
      "A web-based UI/UX design tool for collaborative interface design.",
  },
];

export const language: Language[] = [
  {
    label: "TypeScript",
    icon: <TypeScript className="size-10" />,
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript.",
  },
  {
    label: "Php",
    icon: <PhpDark className="size-10" />,
    description:
      "PHP is a popular general-purpose scripting language that is especially suited to web development.",
  },
  {
    label: "Java",
    icon: <Java className="size-10" />,
    description:
      "Java is a high-level, class-based, object-oriented programming language.",
  },
  {
    label: "Bash",
    icon: <BashDark className="size-10" />,
    description:
      "Bash is a Unix shell and command language that is widely used in Linux and macOS.",
  },
  {
    label: "Python",
    icon: <Python className="size-10" />,
    description:
      "Python is a high-level, interpreted programming language with dynamic semantics.",
  },
  {
    label: "C",
    icon: <C className="size-10" />,
    description:
      "C is a general-purpose programming language created as an extension of the B programming language.",
  },
];

export interface Integration {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export const data: Integration[] = [
  ...libraries.map((lib) => ({
    name: lib.label,
    icon: lib.icon,
    description: lib.description,
  })),
  ...language.map((lang) => ({
    name: lang.label,
    icon: lang.icon,
    description: lang.description,
  })),
];
