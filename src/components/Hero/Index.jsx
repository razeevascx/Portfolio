import { motion } from 'framer-motion';
import Greeting  from './Name';
import LocationAndRole from './Location';
import Description from './Description';
import Skills from './Skill';
import CTAButtons from './Ctabtn';
import SocialLinks from './SocialLinks';

function Home() {
  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2,
        },
      },
    },
    text: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    },
    emoji: {
      hover: {
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: {
          duration: 0.5,
        },
      },
    },
    button: {
      hover: {
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: {
          duration: 0.3,
        },
      },
      tap: {
        scale: 0.95,
        transition: {
          duration: 0.3,
        },
      },
    },
  };


  const skills = [
    { name: "React", color: "blue" },
    { name: "Node", color: "green" },
    { name: "MongoDB", color: "orange" },
    { name: "Express", color: "red" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "", href: "https://github.com" },
    { name: "LinkedIn", icon: "", href: "https://linkedin.com" },
    { name: "Twitter", icon: "", href: "https://twitter.com" },
  ];

  return (
    <motion.div
      className="w-full min-h-screen flex justify-center items-center flex-col sm:flex-row p-4 sm:p-8"
      initial="hidden"
      animate="visible"
      variants={variants.container}
    >
      <motion.div className="w-full sm:w-3/5 flex flex-col space-y-4 p-2">
        <Greeting  variants={variants.emoji} />
        <LocationAndRole variants={variants.text} />
        <Description variants={variants.text} />
        <Skills skills={skills} variants={variants.text} />
        <CTAButtons variants={variants.button} />
        <SocialLinks socialLinks={socialLinks} variants={variants.button} />
      </motion.div>
    </motion.div>
  );
}
export default Home;