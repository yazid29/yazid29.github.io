import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  X
} from "lucide-react";
import { projects } from "../data/portfolioData";
import { SiGithub } from "react-icons/si";

const PROJECT_CATEGORIES = [
  { id: "featured", label: "Featured" },
  { id: "all", label: "All Projects" },
  { id: "salesforce", label: "Salesforce" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "ai-data", label: "AI & Data Engineering" }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("featured");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "featured"
      ? projects.filter((p) => p.featured)
      : selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 bg-[#09100b] border-t border-[#162e20] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Production & Research Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Featured Projects & Architecture
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Real-world enterprise solutions, self-hosted AI microservices, and end-to-end data systems.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${isActive
                  ? "bg-[#2d6a4f] text-[#f3f4f6] font-bold border border-[#388562] shadow-md shadow-[#1b3b2b]/40"
                  : "bg-[#0f2017] hover:bg-[#13271d] text-[#8fa596] hover:text-[#f3f4f6] border border-[#1e3b2b]"
                  }`}
              >
                {cat.id === "featured" && (
                  <Sparkles className={`w-3.5 h-3.5 ${isActive ? "text-[#f3f4f6]" : "text-[#d4af37]"}`} />
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid - Smooth Category Switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.02, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="relative rounded-3xl p-6 bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/60 transition-colors duration-200 shadow-xl flex flex-col justify-between group overflow-hidden"
              >
                {/* Featured indicator bar */}
                {project.featured && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#52b788]" />
                )}

                <div className="space-y-4">
                  {/* Top Header Badge & Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#13281d] border border-[#234b34] text-[#80d4a6] font-semibold">
                      {project.badge}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-[#d4af37] bg-[#222115] border border-[#443f25] px-2 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3 text-[#d4af37]" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#f3f4f6] group-hover:text-[#80d4a6] transition-colors font-heading">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#8fa596] font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9dafa3] leading-relaxed text-justify">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-[#1b3627]">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-[11px] text-[#c2d1c7] font-mono"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#52b788] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack Chips & Action Links */}
                <div className="mt-6 pt-4 border-t border-[#1b3627] space-y-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#13281d] text-[#c2d1c7] border border-[#1e3b2b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-[#52b788] hover:text-[#80d4a6] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Architecture Details</span>
                      <span>&rarr;</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#13281d] hover:bg-[#1a3828] text-[#c2d1c7] hover:text-white transition-colors border border-[#1e3b2b]"
                          title="View Repository"
                        >
                          <SiGithub className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#13281d] hover:bg-[#1a3828] text-[#c2d1c7] hover:text-[#52b788] transition-colors border border-[#1e3b2b]"
                          title="View Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Architecture Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0f2017] border border-[#1e3b2b] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#13281d] text-[#8fa596] hover:text-white hover:bg-[#1a3828] transition-all cursor-pointer border border-[#1e3b2b]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#13281d] border border-[#234b34] text-[#80d4a6]">
                    {activeModalProject.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#f3f4f6] font-heading mt-2">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs text-[#8fa596] font-mono mt-1">
                    {activeModalProject.subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#09100b] border border-[#1b3627] text-sm text-[#c2d1c7] leading-relaxed">
                  {activeModalProject.description}
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#8fa596] font-semibold mb-3">
                    Architectural & Technical Highlights
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-[#09100b] border border-[#1b3627] text-xs sm:text-sm text-[#e2e8f0]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#8fa596] font-semibold mb-2">
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#13281d] text-[#80d4a6] border border-[#1e3b2b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1b3627] flex items-center justify-end gap-3">
                  {activeModalProject.links?.github && (
                    <a
                      href={activeModalProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#13281d] hover:bg-[#1a3828] text-white flex items-center gap-2 border border-[#1e3b2b] cursor-pointer"
                    >
                      <SiGithub className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-[#2d6a4f] hover:bg-[#388562] text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
