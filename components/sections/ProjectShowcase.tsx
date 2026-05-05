"use client";

import { useState, useMemo } from "react";
import * as motion from "motion/react-client";
import { projectList } from "@/lib/constants";
import Items from "@/components/ui/Items";
import Container from "@/components/Container";
import { ChevronDown } from "lucide-react";

interface ProjectShowcaseProps {
  list?: number;
}

type TechStackType = Record<string, { id: string; icon: React.ReactNode }>;

interface ExtendedProject {
  title: string;
  description: string;
  link: string;
  liveLink?: string;
  tech: TechStackType;
  featured?: boolean;
  stars?: number;
  forks?: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ list = 15 }) => {
  const projects = projectList.slice(0, list) as ExtendedProject[];
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Extract unique techs for filter
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      Object.values(project.tech).forEach(item => {
        if (item) techSet.add(item.id);
      });
    });
    return ["All", ...Array.from(techSet).sort()];
  }, [projects]);

  // Filter projects based on selected tech
  const filteredProjects = useMemo(() => {
    if (selectedTech === "All") return projects;
    return projects.filter(project =>
      Object.values(project.tech).some(item => item?.id === selectedTech)
    );
  }, [projects, selectedTech]);

  return (
    <Container
      animate={{ opacity: 1, y: 0 }}
      id="projects"
      className="w-full p-5 mx-auto"
    >
      <Items
        Number="02"
        title="Projects"
        des="Explore my featured projects showcasing my expertise in web development and problem-solving capabilities."
      />

      {/* Sticky Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 mb-12 -mx-5 px-5 py-4 backdrop-blur-md bg-white/5 border-b border-slate-600/20 rounded-b-2xl"
      >
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap flex-shrink-0">
            Filter:
          </span>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {allTechs.map(tech => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedTech === tech
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/40"
                    : "bg-slate-700/40 text-slate-300 border border-slate-600/50 hover:border-slate-500/80 hover:bg-slate-600/40"
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => {
          const isExpanded = expandedId === project.title;
          const techItems = Object.values(project.tech).filter(
            (item): item is NonNullable<typeof item> => item !== undefined
          );

          return (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ margin: "-50px" }}
              onClick={() =>
                setExpandedId(isExpanded ? null : project.title)
              }
              className={`group relative cursor-pointer transition-all duration-400 ${
                isExpanded ? "lg:col-span-3" : ""
              }`}
            >
              {/* Glass Background Card */}
              <div
                className={`relative h-full rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-900/60 via-blue-900/20 to-slate-900/40 backdrop-blur-xl p-6 overflow-hidden transition-all duration-400 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-blue-900/30 hover:to-slate-900/50 ${
                  isExpanded ? "ring-1 ring-blue-400/30" : ""
                }`}
              >
                {/* Gradient Orb Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                </div>

                <div className="relative z-10">
                  {/* Header with Featured Badge */}
                  <div className="flex items-start justify-between mb-4">
                    {project.featured && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 text-xs font-semibold text-yellow-300 uppercase tracking-wider"
                      >
                        ⭐ Featured
                      </motion.span>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(isExpanded ? null : project.title);
                      }}
                      className="p-2 rounded-lg bg-slate-700/40 border border-slate-600/50 text-slate-300 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </motion.button>
                  </div>

                  {/* Project Title */}
                  <motion.h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {project.title}
                  </motion.h3>

                  {/* Description - Truncated or Full */}
                  <motion.p
                    animate={{ maxHeight: isExpanded ? "100%" : "60px" }}
                    transition={{ duration: 0.4 }}
                    className={`text-sm leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors mb-4 overflow-hidden ${
                      !isExpanded ? "line-clamp-2" : ""
                    }`}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack Badges */}
                  <motion.div
                    layout
                    className={`flex flex-wrap gap-2 mb-4 ${
                      isExpanded ? "flex-wrap" : ""
                    }`}
                  >
                    {techItems.slice(0, isExpanded ? undefined : 3).map(
                      (item, i) => (
                        <motion.span
                          key={item.id}
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:border-blue-400/50 hover:bg-slate-700/70 transition-all duration-300"
                        >
                          <span className="text-base">{item.icon}</span>
                          <span className="text-xs font-medium text-slate-300 group-hover:text-slate-100">
                            {item.id}
                          </span>
                        </motion.span>
                      )
                    )}
                    {!isExpanded && techItems.length > 3 && (
                      <span className="text-xs text-slate-400 py-1.5 px-1">
                        +{techItems.length - 3}
                      </span>
                    )}
                  </motion.div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-slate-600/30 space-y-4"
                    >
                      {/* All Techs */}
                      {techItems.length > 3 && (
                        <div>
                          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            All Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {techItems.map(item => (
                              <span
                                key={item.id}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-700/30 border border-slate-600/40 text-xs text-slate-300"
                              >
                                <span className="text-sm">{item.icon}</span>
                                {item.id}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Stats */}
                      {(project.stars || project.forks) && (
                        <div>
                          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            Stats
                          </h4>
                          <div className="flex gap-4">
                            {project.stars && (
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-yellow-400">⭐</span>
                                <span className="text-slate-300">
                                  {project.stars} stars
                                </span>
                              </div>
                            )}
                            {project.forks && (
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-blue-400">🔀</span>
                                <span className="text-slate-300">
                                  {project.forks} forks
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Action Links */}
                      <div className="flex gap-3 pt-2">
                        <motion.a
                          whileHover={{ scale: 1.05, x: 4 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-blue-400/50 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 font-medium text-sm transition-all duration-300"
                        >
                          View Code
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </motion.a>
                        {project.liveLink && (
                          <motion.a
                            whileHover={{ scale: 1.05, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                          >
                            Live Demo
                            <span className="group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-slate-400 text-lg">
            No projects found with{" "}
            <span className="text-blue-400 font-semibold">{selectedTech}</span>
          </p>
        </motion.div>
      )}
    </Container>
  );
};

export default ProjectShowcase;
