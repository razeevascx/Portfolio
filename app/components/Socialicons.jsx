import * as motion from "motion/react-client";
import { socialLinks } from "../utils/Constants";
function Socialicons() {
  return (
    <div className="flex gap-4 ">
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 hover:text-blue-500 transition-colors duration-300 ${link.hoverColor}`}
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
