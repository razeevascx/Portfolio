import * as motion from "motion/react-client";
import Button from "../ui/Button";
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
import Socialicons from "@/components/Socialicons";

function Hero() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="m-4 max-w-7xl mx-auto "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center">
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.h6
            variants={itemVariants}
            className="text-2xl font-medium text-gray-400 hover:text-white tracking-wide"
          >
            Welcome to my space on internet
          </motion.h6>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-5xl lg:text-8xl font-bold text-blue-500"
          >
            <span className="mr-2 text-gray-400 hover:text-white">
              I&apos;m{" "}
            </span>
            Rajeev Puri
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 hover:text-white leading-relaxed max-w-3xl text-xl"
          >
            I can help you turn your creativity into code through use of{" "}
            <motion.span variants={buttonVariants} className="inline-block">
              <Button
                name="TypeScript"
                icon={<SiTypescript aria-label="TypeScript Icon" />}
                color="border-[#3178C6] hover:bg-[#3178C6]/20"
                iconColor="#3178C6"
              />
            </motion.span>
            {" , "}
            <motion.span variants={buttonVariants} className="inline-block">
              <Button
                name="React"
                icon={<SiReact aria-label="React Icon" />}
                color="border-[#61DAFB] hover:bg-[#61DAFB]/20"
                iconColor="#61DAFB"
              />
            </motion.span>
            {" , "}
            <motion.span variants={buttonVariants} className="inline-block">
              <Button
                name="Next.js"
                icon={<SiNextdotjs aria-label="Next.js Icon" />}
                color="border-white hover:bg-white/20"
                iconColor="#000000"
              />
            </motion.span>
            {" , "}
            <motion.span variants={buttonVariants} className="inline-block">
              <Button
                name="Node js"
                icon={<SiNodedotjs aria-label="Node.js Icon" />}
                color="border-[#339933] hover:bg-[#339933]/20"
                iconColor="#339933"
              />
            </motion.span>
            {" , "} and{" "}
            <motion.span variants={buttonVariants} className="inline-block">
              <Button
                name="PostgreSQL"
                icon={<SiPostgresql aria-label="PostgreSQL Icon" />}
                color="border-[#336791] hover:bg-[#336791]/20"
                iconColor="#336791"
              />
            </motion.span>
            {", "} With a focus on{" "}
            <motion.span variants={buttonVariants} className="inline-block">
              <Button
                name="UI Design"
                icon={<FaPalette aria-label="Palette Icon" />}
                color="border-[#E75480] hover:bg-[#E75480]/20"
                iconColor="#E75480"
              />
            </motion.span>
            . Enthusiastic about{" "}
            <motion.span variants={buttonVariants} className="inline-block">
              <Button
                name="DevSec Ops"
                icon={<SiOpslevel aria-label="DevSec Ops Icon" />}
                color="border-[#00B2A9] hover:bg-[#00B2A9]/20"
                iconColor="#00B2A9"
              />
            </motion.span>{" "}
            and{" "}
            <motion.span variants={buttonVariants} className="inline-block">
              <Button
                name="Linux"
                icon={<SiLinux aria-label="Linux Icon" />}
                color="border-[#FCC624] hover:bg-[#FCC624]/20"
                iconColor="#FCC624"
              />
            </motion.span>
            .
          </motion.p>
          <motion.div variants={itemVariants}>
            <Socialicons />
          </motion.div>
        </motion.div>

        <motion.div variants={imageVariants} className="hidden md:block ">
          <motion.img
            className="object-cover hover:scale-105 transition-transform duration-300  "
            src="11102.png"
            whileTap={{ scale: 2 }}
            alt="github_avatar"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
