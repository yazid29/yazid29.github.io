import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Sparkles, Cpu } from "lucide-react";
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
      className="relative py-24 md:py-32 bg-[#060812] border-t border-slate-900 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Technologies I Work With
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
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
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/10 font-bold"
                    : "bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tech Stack Badges Grid (Ref-2 Inspired) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {filteredTechnologies.map((item, index) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="relative rounded-2xl p-4 bg-gradient-to-b from-slate-900/90 to-[#090e1a] border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/40 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
              >
                {/* Glowing subtle hover orb inside card */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Tech Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <TechIcon name={item.icon} className="w-6 h-6" />
                </div>

                {/* Tech Name */}
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight font-heading">
                  {item.name}
                </h3>

                {/* Tag / Category Subtext */}
                <span className="text-[10px] text-slate-400 font-mono mt-1">
                  {item.tag}
                </span>

                {/* Proficiency Indicator Pill */}
                <span className="mt-2 px-2 py-0.5 rounded-full text-[9px] font-mono bg-slate-800/80 border border-slate-700 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-slate-900/50 to-emerald-950/20 border border-cyan-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-heading">
              Need custom integrations or proprietary enterprise stacks?
            </h4>
            <p className="text-xs text-slate-400">
              Experienced in banking core adapters, microservice orchestration, and high-security compliance workflows.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all shrink-0"
          >
            Discuss Architecture &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
