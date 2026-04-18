"use client";
import * as motion from "motion/react-client";
import { quicklink } from "@/utils/Constants";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-4 px-4 z-50 sticky top-0 shadow-md backdrop-blur-sm ">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 2 }}
          className="text-2xl gname"
        >
          <a href={"/"}>
            <img
              className="w-10 border rounded-[100%]"
              src="https://avatars.githubusercontent.com/u/154011772"
              alt="github_avtar"
            />
          </a>
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {quicklink.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              className="flex items-center hover:text-blue-500  text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
            >
              <span className="font-bold">{link.title}</span>
            </motion.a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
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
        className="overflow-hidden md:hidden mt-2 mx-auto flex gap-4 justify-center items-center"
      >
        {quicklink.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            className={`block  hover:font-bold py-2`}
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
