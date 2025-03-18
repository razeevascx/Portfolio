import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const quicklink = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Services", url: "/services" },
    { id: 4, title: "Projects", url: "/projects" },
    { id: 5, title: "Contact", url: "/contact" },
  ];

  return (
    <nav className="py-4 px-4 z-50 sticky top-0 shadow-md backdrop-blur-sm ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold gname">
          <a href={"/"}>razeev</a>
        </div>
        <div className="hidden md:flex space-x-4">
          {quicklink.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              className={`hover:gname hover:font-bold `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.title}
            </motion.a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden mt-2"
      >
        {quicklink.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            className={`block text-gray-600 hover:text-gray-800 hover:font-bold py-2`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.title}
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
}

export default Navbar;
