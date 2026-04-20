import * as motion from "motion/react-client";
import Link from "next/link";
import Container from "@/components/Container";

export default function BrutalistHero() {
  return (
    <Container>
      <div className=" max-w-7xl mx-auto px-6  py-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <motion.h1 className="text-5xl md:text-5xl lg:text-8xl font-bold text-gray-400  hover:text-white ">
              <br />
              Hello There, <br /> I'm{" "}
              <span className="mr-2 text-blue-500">Rajeev Puri</span>
              <br />
              Currently a BSc Student and a software engineer
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-full bg-white"
            style={{ transformOrigin: "left" }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-6 pt-8"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-3 text-lg font-bold transition-all duration-300"
            >
              VIEW PROJECTS
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 text-lg font-bold  transition-opacity border-white hover:bg-white hover:text-black  px-8 py-4 border-2 "
            >
              CONTACT
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}
