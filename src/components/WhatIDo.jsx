import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Code2,
  Cpu,
  BrainCircuit,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { whatIDo } from "../data/portfolioData";

const ICON_MAP = {
  Server: { icon: Server, color: "text-[#52b788]", bg: "bg-[#142c1f]", border: "border-[#234b34]" },
  Code2: { icon: Code2, color: "text-[#80d4a6]", bg: "bg-[#142c1f]", border: "border-[#234b34]" },
  Cpu: { icon: Cpu, color: "text-[#a3e635]", bg: "bg-[#142c1f]", border: "border-[#234b34]" },
  BrainCircuit: { icon: BrainCircuit, color: "text-[#72c999]", bg: "bg-[#142c1f]", border: "border-[#234b34]" }
};

export default function WhatIDo() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#09100b] border-t border-[#162e20] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            What I Bring To The Table
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Architecting mission-critical backend systems, seamless cloud deployments, and intelligent AI microservices.
          </p>
        </motion.div>

        {/* 2x2 Feature Cards Grid (1px thin border border-[#1e3b2b] & subtle hover scaling) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {whatIDo.map((item, index) => {
            const iconConfig = ICON_MAP[item.iconName] || ICON_MAP.Server;
            const IconComponent = iconConfig.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.015 }}
                className="relative rounded-3xl p-8 bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/60 transition-all duration-300 shadow-xl group flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-5">
                  {/* Top Bar: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-13 h-13 rounded-2xl ${iconConfig.bg} ${iconConfig.border} border flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${iconConfig.color}`} />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#5c7866] group-hover:text-[#52b788] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#f3f4f6] group-hover:text-[#80d4a6] transition-colors font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#52b788] font-mono mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[#9dafa3] text-sm leading-relaxed text-justify">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 space-y-2 border-t border-[#1b3627]">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs text-[#c2d1c7] font-mono"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 flex items-center justify-between text-xs font-mono text-[#5c7866] group-hover:text-[#9dafa3] transition-colors border-t border-[#162e20]">
                  <span>Enterprise Ready</span>
                  <span className="flex items-center gap-1 text-[#52b788] font-semibold group-hover:translate-x-1 transition-transform">
                    Learn Details &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
