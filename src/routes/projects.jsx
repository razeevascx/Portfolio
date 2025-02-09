import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Project from "../components/Project";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="max-w-7xl mx-auto space-y-10 p-6 rounded-lg shadow-lg ">
      <motion.div
        className="border-l-4 border-blue-500 pl-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white">
          <span className="text-blue-500">03.</span> Projects
        </h1>
      </motion.div>
      <div className="text-white">
        <h1 className="text-4xl text-center font-bold">
          Like the work I do?{" "}
          <Link to="/contact" className="text-blue-500 underline">
            Contact
          </Link>
        </h1>
      </div>
      <Project />
    </section>
  );
}
