import { motion } from 'framer-motion';

const CTAButtons = ({ buttonVariants }) => (
  <motion.div className="flex gap-4 flex-wrap">
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      onClick="#"
      whileTap="tap"
      className="glass-card md:px-8 md:py-4 px-6 py-3 rounded-full font-medium text-sm md:text-xl flex items-center gap-2 bg-green-600/10 hover:bg-green-600/20 transition-colors"
    >
      <span>Check out my CV!</span>
      <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 5 }}>
        →
      </motion.span>
    </motion.button>

   <motion.button
  variants={buttonVariants}
  href="#project"
  className="glass-card md:px-8 md:py-4 px-6 py-3 rounded-full font-medium text-sm md:text-xl flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 transition-colors"
>
  <span>Projects</span>
  <motion.span
    className="inline-block"
    animate={{ y: [0, -3, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  >
    ⚡
  </motion.span>
</motion.button>
  </motion.div>
);

export default CTAButtons;