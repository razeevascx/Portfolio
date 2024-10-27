import { motion } from "framer-motion";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const gradientText =
    "bg-gradient-to-r from-green-600 to-indigo-400 bg-clip-text text-transparent animate-text";

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const emojiVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
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
  };

  return (
    <motion.div
      className="w-full min-h-screen flex justify-center items-center flex-col sm:flex-row p-4 sm:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="w-full sm:w-3/5 flex flex-col space-y-6  p-8 sm:p-12">
        {/* Greeting */}
        <motion.div variants={textVariants} className="space-y-2">
          <motion.div
            className="inline-block  px-4 py-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.h5
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-bold text-xl lg:text-2xl"
            >
              Hello there, I&apos;m
            </motion.h5>
          </motion.div>
        </motion.div>

        {/* Name and Emojis */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className={`flex items-center text-4xl md:text-6xl lg:text-8xl font-extrabold ${gradientText} mb-6`}
        >
          <span className="mr-2">राजीव |</span>
          <span className="text-white inline-flex items-center">
            {["🧞", "🧌"].map((emoji, index) => (
              <motion.span
                key={index}
                variants={emojiVariants}
                whileHover="hover"
                className="cursor-pointer"
              >
                {emoji}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="prose prose-lg md:prose-xl text-gray-300 max-w-none mb-8"
        >
          <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed">
            I&apos;m always eager to level up my
            <span className="text-green-500 font-semibold">
              {" "}
              MERN stack skills 🌱
            </span>
            <span className="text-blue-500 font-bold">
              Open to exciting projects{" "}
            </span>
            that help me grow. I genuinely enjoy taking on new challenges and
            learning along the way 💻🚀
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={textVariants} className="flex flex-wrap gap-4">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="glass-card px-6 py-3 rounded-full font-medium text-lg flex items-center gap-2 group"
          >
            <span>Check out my CV!</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="glass-card px-6 py-3 rounded-full font-medium text-lg flex items-center gap-2"
          >
            <span>View Projects</span>
            <motion.span
              className="inline-block"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ⚡
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={textVariants} className="flex gap-4 pt-4">
          {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              className="text-text/60 hover:text-text transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {platform}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
