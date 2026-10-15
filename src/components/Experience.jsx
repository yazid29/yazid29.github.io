import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2
} from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-16 md:py-16 bg-[#09100b] border-t border-[#162e20] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Professional Experience
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Delivering mission-critical enterprise systems, microservices, and client-centric software engineering.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#1b3828] ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 w-6 h-6 rounded-full bg-[#09100b] border-2 border-[#52b788] flex items-center justify-center group-hover:scale-110 transition-all duration-200 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#52b788]"></span>
              </div>

              {/* Timestamp label on left for md+ screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-semibold text-[#52b788] block">
                  {exp.period.split("–")[0]?.trim()}
                </span>
                <span className="text-[10px] font-mono text-[#6d8876]">
                  {exp.badge}
                </span>
              </div>

              {/* Main Experience Card in Deep Pine */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-3xl p-6 sm:p-8 bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/60 transition-all duration-200 shadow-xl space-y-4"
              >
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1b3627] pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#14281e] border border-[#234b34] text-[#80d4a6]">
                        {exp.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#14281e] border border-[#234b34] text-[#52b788] md:hidden">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#f3f4f6] font-heading group-hover:text-[#80d4a6] transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-[#e2e8f0] flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-[#52b788]" />
                      <span>{exp.company}</span>
                    </h4>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs font-mono text-[#8fa596]">
                    <span className="hidden md:flex items-center gap-1 text-[#c2d1c7]">
                      <Calendar className="w-3.5 h-3.5 text-[#52b788]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-[#8fa596]">
                      <MapPin className="w-3.5 h-3.5 text-[#6d8876]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9dafa3] leading-relaxed text-justify">
                  {exp.description}
                </p>

                {/* Achievement Bullets */}
                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-[#8fa596] font-semibold">
                    Key Deliverables & Responsibilities:
                  </h5>
                  <div className="grid gap-2">
                    {exp.achievements.map((item, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c2d1c7]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-[#1b3627] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-[#8fa596] mr-1">
                    Stack:
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#14281e] border border-[#1e3b2b] text-[#c2d1c7]"
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