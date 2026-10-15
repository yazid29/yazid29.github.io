import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  GitBranch,
  BrainCircuit,
  Layers,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { engineeringImpact } from "../data/portfolioData";

const ICON_MAP = {
  Server: Server,
  GitBranch: GitBranch,
  BrainCircuit: BrainCircuit,
  Layers: Layers
};

export default function ProfileImpact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      className="relative py-10 sm:py-24 md:py-10 bg-[#09100b] border-t border-[#162e20] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-[#1b3b2b]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with glowing line accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
            <span>{engineeringImpact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Engineering Profile & <span className="text-[#52b788]">Impact</span>
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            What I do
          </p>
          {/* Distinctive Subtle Glowing Line Accent */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="h-px w-16 sm:w-24 bg-linear-to-r from-transparent to-[#52b788]/60" />
            <div className="w-2 h-2 rounded-full bg-[#52b788] shadow-sm shadow-[#52b788]" />
            <div className="h-px w-16 sm:w-24 bg-linear-to-l from-transparent to-[#52b788]/60" />
          </div>
        </motion.div>

        {/* The Narrative (Fades in first) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 px-2"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1c14]/80 border border-[#1b3827] shadow-xl backdrop-blur-xs">
            <p className="text-[#d8e2dc] text-base sm:text-md md:text-md leading-relaxed sm:leading-loose font-normal">
              {engineeringImpact.narrative}
            </p>
          </div>
        </motion.div>

        {/* 4 Achievement Cards (2x2 Grid) - Staggered entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {engineeringImpact.achievementCards.map((card) => {
            const IconComponent = ICON_MAP[card.iconName] || Server;

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ scale: 1.015 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/70 hover:shadow-xl hover:shadow-[#1b3b2b]/30 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle corner tech tick */}
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#52b788]/40 group-hover:border-[#52b788] transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar: Icon and Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#142d1f] border border-[#234b34] flex items-center justify-center text-[#52b788] group-hover:text-white group-hover:bg-[#234b34] transition-all shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8fa596] group-hover:text-[#c2d1c7] px-3 py-1 rounded-full bg-[#132d1f] border border-[#1e3b2b] transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#f3f4f6] font-heading group-hover:text-[#52b788] transition-colors mb-3">
                    {card.title}
                  </h3>

                  {/* Body Text (Soft cream tone) */}
                  <p className="text-[#cbd5e1] text-sm sm:text-[15px] leading-relaxed">
                    {card.text}
                  </p>
                </div>

                {/* Footer Tech Indicator */}
                <div className="pt-5 mt-5 border-t border-[#183323] flex items-center justify-between text-xs font-mono text-[#8fa596]">
                  <span className="text-[11px] text-[#718b7b] group-hover:text-[#a0b8a9] transition-colors">
                    {card.tech}
                  </span>
                  {/* <span className="text-[#52b788] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px]">
                    Production Tested <ArrowUpRight className="w-3.5 h-3.5" />
                  </span> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
