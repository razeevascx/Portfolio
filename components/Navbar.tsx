"use client";
import * as motion from "motion/react-client";
import { quicklink } from "@/lib/constants";
import { useState } from "react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-4 px-4 z-50 sticky top-0 shadow-md backdrop-blur-sm ">
      <Container>
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <a href={"/"}>
              <Logo
                width={100}
                height={60}
                className="hover:opacity-80 transition-opacity"
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
              aria-expanded={isOpen}
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
      </Container>
    </nav>
  );
}

export default Navbar;
