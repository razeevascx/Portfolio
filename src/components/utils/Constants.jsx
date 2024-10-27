// src/components/Contact/utils/constants.js
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/razeev.asnx/",
    icon: <FaInstagram size={30} />,
    hoverColor: "hover:text-pink-500",
    bgColor: "bg-pink-500/10",
    description: "Follow my creative journey",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/about_razeev",
    icon: <RiTwitterXLine size={30} />,
    hoverColor: "hover:text-white",
    bgColor: "bg-white/10",
    description: "Latest updates & thoughts",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/razeevasnx",
    icon: <FaLinkedin size={30} />,
    hoverColor: "hover:text-blue-600",
    bgColor: "bg-blue-600/10",
    description: "Professional network",
  },
  {
    name: "GitHub",
    url: "https://github.com/razeevascx/",
    icon: <FaGithub size={30} />,
    hoverColor: "hover:text-gray-500",
    bgColor: "bg-gray-500/10",
    description: "Check out my projects",
  },
];

export const animations = {
  // Page level animations
  pageVariants: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  // Container animations with stagger effect
  containerVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  },

  // Individual item animations
  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },

  // Hover animations
  hoverScale: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export const toastConfig = {
  position: "bottom-center",
  toastOptions: {
    success: {
      style: {
        background: "#1e293b",
        color: "#fff",
        padding: "16px",
        borderRadius: "10px",
        border: "1px solid rgba(148, 163, 184, 0.1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      },
      iconTheme: {
        primary: "#60a5fa",
        secondary: "#fff",
      },
    },
    error: {
      style: {
        background: "#1e293b",
        color: "#fff",
        padding: "16px",
        borderRadius: "10px",
        border: "1px solid rgba(148, 163, 184, 0.1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#fff",
      },
    },
    duration: 3000,
    className: "",
  },
};

// Additional animation presets
export const transitionPresets = {
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
  smooth: {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  },
};
