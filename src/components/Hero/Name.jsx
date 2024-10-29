import { motion } from "framer-motion";

function Greeting({textVariants, emojiVariants}) {
  const gradientText = "bg-gradient-to-r from-green-600 to-indigo-400 bg-clip-text text-transparent animate-text";

  return (
    <motion.div variants={textVariants} className="space-y-2">
      {/* Greeting Text */}
      <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
        <h5 className="font-bold text-[2vh] lg:text-2xl">
          Hello There, I'm
        </h5>
      </motion.div>

      {/* Name with Emojis */}
      <motion.h1
        className={`flex items-center text-5xl md:text-7xl lg:text-8xl font-extrabold ${gradientText} mb-6`}
      >
        <span className="mr-2 font-extrabold">राजीव |</span>
        <span className="text-white inline-flex items-center">
          {["🧞", "🧌"].map((emoji, index) => (
            <motion.span
              key={index}
              variants={emojiVariants}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              {emoji}
            </motion.span>
          ))}
        </span>
      </motion.h1>
    </motion.div>
  );
}

export default Greeting;