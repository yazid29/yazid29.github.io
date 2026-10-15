import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ChevronDown, ChevronUp } from "lucide-react";
import { techStack, techStackCategories } from "../data/portfolioData";
import TechIcon from "./TechIcon";

const INITIAL_VISIBLE_COUNT = 12;

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("backend");
  const [isExpanded, setIsExpanded] = useState(false);

  // Reset expansion whenever user changes tab
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setIsExpanded(false);
  };

  const allFilteredTechnologies =
    activeCategory === "all"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  const displayedTechnologies = isExpanded
    ? allFilteredTechnologies
    : allFilteredTechnologies.slice(0, INITIAL_VISIBLE_COUNT);

  const hasMore = allFilteredTechnologies.length > INITIAL_VISIBLE_COUNT;

  return (
    <section
      id="skills"
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
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Technologies I've Worked With
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Languages, frameworks, and tools I have utilized across enterprise client projects, freelance work, and personal development.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {techStackCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#2d6a4f] text-[#f3f4f6] font-bold border border-[#388562] shadow-md shadow-[#1b3b2b]/40"
                    : "bg-[#0f2017] hover:bg-[#13271d] text-[#8fa596] hover:text-[#f3f4f6] border border-[#1e3b2b]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Ultra-Minimalist Dense Tech Badge Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
          >
            {displayedTechnologies.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.18, delay: index * 0.015, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative rounded-xl px-4 py-3 bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/70 hover:shadow-xl hover:shadow-black/60 transition-colors duration-150 flex items-center gap-3 group cursor-default"
              >
                {/* Tech Icon Container (Left) */}
                <div className="w-8 h-8 rounded-lg bg-[#13281d] border border-[#1e3b2b] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <TechIcon name={item.icon} className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>

                {/* Tech Name (Right) */}
                <span className="text-sm font-medium text-[#f3f4f6] group-hover:text-[#80d4a6] transition-colors tracking-tight font-heading truncate">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More / Show Less Button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0f2017] hover:bg-[#152e22] text-[#e2e8f0] hover:text-white border border-[#234b34] hover:border-[#388562] text-xs font-mono font-medium shadow-md shadow-[#1b3b2b]/30 transition-all duration-200 cursor-pointer"
            >
              <span>
                {isExpanded
                  ? "Show Less"
                  : `Show More (${allFilteredTechnologies.length - INITIAL_VISIBLE_COUNT} more)`}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#52b788]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#52b788]" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
