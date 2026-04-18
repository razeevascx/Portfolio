import * as motion from "motion/react-client";
import { ReactNode } from "react";

interface ContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variants?: any;
  initial?: any;
  animate?: any;
  transition?: any;
}

export default function Container({
  id,
  children,
  className = "max-w-6xl mx-auto overflow-x-hidden p-4",
  variants,
  initial = "hidden",
  animate = "visible",
  transition,
}: ContainerProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}
