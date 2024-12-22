import { motion } from 'framer-motion';

const Description = ({ variants }) => (
  <motion.div
    variants={variants}
    className="text-gray-200 max-w-none mb-8"
  >
    <p className="text-lg lg:text-2xl leading-relaxed">
      I can help you turn your creativity into reality through modern web
      development.
      <span className="text-green-500 font-semibold">
        {' '}
        (MERN & Next.js) 🌱{' '}
      </span>
      I love explore new technologies to improve my coding skills.
     I genuinely enjoy taking on new challenges and learning
      along the way 💻🚀
    </p>
  </motion.div>
);

export default Description;
