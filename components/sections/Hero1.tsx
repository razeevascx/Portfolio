"use client";

import * as motion from "motion/react-client";
import Button from "@/components/ui/Button";
import Cbutton from "@/components/ui/Cbutton";
import Container from "@/components/Container";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiLinux,
  SiOpslevel,
} from "react-icons/si";
import { FaPalette } from "react-icons/fa";
import Socialicons from "@/components/ui/Socialicons";

export default function Hero1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const navLinks = ["Work", "About", "Contact", "Blog"];
  const techStack = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "DevSecOps",
    "Linux",
    "UI Design",
  ];

  return (
    <Container className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}

      {/* Hero Body */}
      <div className="flex flex-1">
        {/* Left Column */}
        <div className="flex-1 px-12 py-12 flex flex-col">
          {/* Eyebrow */}{" "}
          <motion.div
            variants={itemVariants as any}
            className="text-xs text-stone-500 uppercase tracking-widest mb-8"
          >
            Welcome to my space on internet
          </motion.div>
          {/* Name Display */}{" "}
          <motion.div variants={itemVariants as any} className="mb-12">
            <h1 className="text- md:text- lg:text-8xl font-bold leading-tight">
              I&apos;m <span className="text-blue-500">Rajeev</span>
              <br />
              Puri
            </h1>
          </motion.div>
          {/* Tech Stack with Motion */}
          <motion.p
            variants={itemVariants as any}
            className="text-stone-400 text-lg leading-relaxed max-w-2xl mb-8"
          >
            I can help you turn your creativity into code through use of{" "}
            <motion.span
              variants={buttonVariants as any}
              className="inline-block"
            >
              <Cbutton
                name="TypeScript"
                icon={<SiTypescript aria-label="TypeScript Icon" />}
                color="border-[#3178C6] hover:bg-[#3178C6]/20"
                iconColor="#3178C6"
              />
            </motion.span>
            {" , "}
            <motion.span
              variants={buttonVariants as any}
              className="inline-block"
            >
              <Cbutton
                name="React"
                icon={<SiReact aria-label="React Icon" />}
                color="border-[#61DAFB] hover:bg-[#61DAFB]/20"
                iconColor="#61DAFB"
              />
            </motion.span>
            {" , "}
            <motion.span
              variants={buttonVariants as any}
              className="inline-block"
            >
              <Cbutton
                name="Next.js"
                icon={<SiNextdotjs aria-label="Next.js Icon" />}
                color="border-white hover:bg-white/20"
                iconColor="#000000"
              />
            </motion.span>
            {" , "}
            <motion.span
              variants={buttonVariants as any}
              className="inline-block"
            >
              <Cbutton
                name="Node js"
                icon={<SiNodedotjs aria-label="Node.js Icon" />}
                color="border-[#339933] hover:bg-[#339933]/20"
                iconColor="#339933"
              />
            </motion.span>
            {" , "} and{" "}
            <motion.span
              variants={buttonVariants as any}
              className="inline-block"
            >
              <Cbutton
                name="PostgreSQL"
                icon={<SiPostgresql aria-label="PostgreSQL Icon" />}
                color="border-[#336791] hover:bg-[#336791]/20"
                iconColor="#336791"
              />
            </motion.span>
            {", "} With a focus on{" "}
            <motion.span
              variants={buttonVariants as any}
              className="inline-block"
            >
              <Cbutton
                name="UI Design"
                icon={<FaPalette aria-label="Palette Icon" />}
                color="border-[#E75480] hover:bg-[#E75480]/20"
                iconColor="#E75480"
              />
            </motion.span>
            . Enthusiastic about{" "}
            <motion.span
              variants={buttonVariants as any}
              className="inline-block"
            >
              <Cbutton
                name="DevSec Ops"
                icon={<SiOpslevel aria-label="DevSec Ops Icon" />}
                color="border-[#00B2A9] hover:bg-[#00B2A9]/20"
                iconColor="#00B2A9"
              />
            </motion.span>{" "}
            and{" "}
            <motion.span
              variants={buttonVariants as any}
              className="inline-block"
            >
              <Cbutton
                name="Linux"
                icon={<SiLinux aria-label="Linux Icon" />}
                color="border-[#FCC624] hover:bg-[#FCC624]/20"
                iconColor="#FCC624"
              />
            </motion.span>
            .
          </motion.p>
          {/* Social Icons */}{" "}
          <motion.div variants={itemVariants as any} className="mb-8">
            <Socialicons />
          </motion.div>
          {/* CTA Buttons */}{" "}
          <motion.div variants={itemVariants as any} className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-px bg-stone-800" />

        {/* Right Column */}
        <div className="flex-1 px-12 py-12 flex flex-col">
          {/* Tech Stack Pills */}{" "}
          <motion.div
            variants={itemVariants as any}
            className="flex flex-wrap gap-3 mb-12"
          >
            {techStack.map((tech) => (
              <div
                key={tech}
                className="border border-blue-900 text-blue-500 px-3 py-2 text-xs uppercase tracking-tighter"
              >
                {tech}
              </div>
            ))}
          </motion.div>
          {/* Bio Text */}{" "}
          <motion.div
            variants={itemVariants as any}
            className="text-stone-500 text-sm leading-relaxed max-w-sm"
          >
            <p>
              Crafting digital solutions with precision. Full-stack developer
              specializing in modern web technologies, cloud infrastructure, and
              security-first design. Building fast, scalable, and maintainable
              systems.
            </p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
