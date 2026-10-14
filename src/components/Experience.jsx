import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Building2,
  ChevronRight
} from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-[#05070e] border-t border-slate-900/80 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering mission-critical enterprise systems, microservices, and client-centric software engineering.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon / Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#05070e] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300 shadow-md shadow-cyan-500/30">
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-emerald-400"></span>
              </div>

              {/* Timestamp label on left for md+ screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-semibold text-cyan-400 block">
                  {exp.period.split("–")[0]?.trim()}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {exp.badge}
                </span>
              </div>

              {/* Main Experience Card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/80 to-[#080d19] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4"
              >
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        {exp.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 md:hidden">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>{exp.company}</span>
                    </h4>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs font-mono text-slate-400">
                    <span className="hidden md:flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed text-justify">
                  {exp.description}
                </p>

                {/* Achievement Bullets */}
                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Deliverables & Responsibilities:
                  </h5>
                  <div className="grid gap-2">
                    {exp.achievements.map((item, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">
                    Stack:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/70 border border-slate-700/80 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}