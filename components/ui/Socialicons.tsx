import * as motion from "motion/react-client";
import { socialLinks } from "@/lib/constants";

interface SocialiconProps {
  size?: "sm" | "md" | "lg";
  gap?: string;
}

function Socialicons({
  size = "md",
  gap = "gap-4",
}: Readonly<SocialiconProps>) {
  const sizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <div className={`flex ${gap}`}>
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} text-gray-400 hover:text-blue-500 transition-colors duration-300 ${link.hoverColor}`}
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
