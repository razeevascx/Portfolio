"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { quicklink } from "@/lib/constants";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-4 z-50 sticky top-0 shadow-md backdrop-blur-sm">
      <Container>
        <div className="flex justify-between items-center">
          <motion.div whileTap={{ scale: 1.05 }} className="cursor-pointer">
            <Link href="/">
              <Logo
                width={50}
                height={25}
                className="hover:opacity-80 transition-opacity md:w-15 md:h-7.5"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {quicklink.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                className="flex items-center hover:text-blue-500 text-sm lg:text-base font-semibold transition-colors"
                whileTap={{ scale: 1.1 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:contact@rajeevpuri.com.np"
            className="hidden md:flex items-center hover:text-blue-500"
          >
            <button className="bg-white text-black px-4 lg:px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all">
              Lets Talk <ArrowRight size={14} />
            </button>
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-3 pt-4">
              {quicklink.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  className="flex items-center hover:text-blue-500 text-sm font-semibold transition-colors pl-2"
                  whileTap={{ scale: 1.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </motion.a>
              ))}
              <motion.a
                href="mailto:contact@rajeevpuri.com.np"
                className="flex items-center pt-2"
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full bg-white text-black px-4 py-2 rounded-full text-xs font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all">
                  Lets Talk <ArrowRight size={14} />
                </button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
