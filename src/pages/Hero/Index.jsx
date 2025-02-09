import { motion } from 'framer-motion';
import Greeting from './Name';
import Description from './Description';
import Skills from './Skill';
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
          ease: 'easeOut',
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
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
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

  return (
    <motion.div
      className="flex justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={variants.container}
    >
      <motion.div className="w-full sm:w-3/5 flex flex-col space-y-4 ">
        <Greeting variants={variants.emoji} />
        <Description variants={variants.text} />
        <Skills variants={variants.text} />
      </motion.div>
    </motion.div>
  );
}
export default Home;
