import { motion } from 'framer-motion';

const SocialLinks = ({ variants }) => (
  <motion.div variants={variants} className="flex gap-6 pt-4">
    {[
      { name: 'GitHub', icon: '⌨️' },
      { name: 'LinkedIn', icon: '💼' },
      { name: 'Twitter', icon: '🐦' },
    ].map(({ name, icon }) => (
      <motion.a
        key={name}
        href="#contact"
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </motion.a>
    ))}
  </motion.div>
);

export default SocialLinks;
