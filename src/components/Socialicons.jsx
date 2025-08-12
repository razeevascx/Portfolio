import { motion } from "framer-motion";
import { socialLinks } from "../utils/Constants";
function Socialicons() {
  return (
    <div className="flex gap-4 pt-4">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
export default Socialicons;
