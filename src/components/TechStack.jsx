import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";
import { techStack, techStackCategories } from "../data/portfolioData";
import TechIcon from "./TechIcon";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTechnologies =
    activeCategory === "all"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-[#09100b] border-t border-[#162e20] overflow-hidden"
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
            Technologies I Work With
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Enterprise frameworks, cloud tools, databases, and AI libraries applied across production systems.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {techStackCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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

        {/* Tech Stack Monospace Badges Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {filteredTechnologies.map((item, index) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.015 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="relative rounded-2xl p-4 bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/70 hover:shadow-xl hover:shadow-black/60 transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-default"
              >
                {/* Tech Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#13281d] border border-[#1e3b2b] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                  <TechIcon name={item.icon} className="w-6 h-6" />
                </div>

                {/* Tech Name */}
                <h3 className="text-xs sm:text-sm font-bold text-[#f3f4f6] group-hover:text-[#80d4a6] transition-colors tracking-tight font-heading">
                  {item.name}
                </h3>

                {/* Tag / Category Subtext */}
                <span className="text-[10px] text-[#8fa596] font-mono mt-1">
                  {item.tag}
                </span>

                {/* Proficiency Indicator Pill */}
                <span className="mt-2 px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#13281d] border border-[#1e3b2b] text-[#80d4a6] group-hover:border-[#388562]/50 transition-colors">
                  {item.level}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enterprise Stack Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 rounded-2xl bg-[#0f2017] border border-[#1e3b2b] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#f3f4f6] font-heading">
              Need custom integrations or proprietary enterprise stacks?
            </h4>
            <p className="text-xs text-[#8fa596]">
              Experienced in banking core adapters, microservice orchestration, and high-security compliance workflows.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#13281d] hover:bg-[#1a3828] text-[#80d4a6] border border-[#234b34] transition-all shrink-0 cursor-pointer"
          >
            Discuss Architecture &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
