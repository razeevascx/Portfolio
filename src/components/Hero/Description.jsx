import { motion } from 'framer-motion';

const Description = ({ variants }) => (
  <motion.div
    variants={variants}
    className="prose prose-lg md:prose-xl text-gray-300 max-w-none mb-8"
  >
    <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed">
      I&apos;m always eager to level up my
      <span className="text-green-500 font-semibold"> MERN stack skills 🌱 </span>
      and explore new technologies to improve my coding skills.
      <span className="text-blue-500 font-bold"> Open to exciting projects </span>
      that help me grow. I genuinely enjoy taking on new challenges and learning
      along the way 💻🚀
    </p>
  </motion.div>
);

export default Description;
