import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Code2,
  Cpu,
  BrainCircuit,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { whatIDo } from "../data/portfolioData";

const ICON_MAP = {
  Server: { icon: Server, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  Code2: { icon: Code2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  Cpu: { icon: Cpu, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  BrainCircuit: { icon: BrainCircuit, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" }
};

export default function WhatIDo() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#05070e] border-t border-slate-900/80 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            What I Bring To The Table
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Architecting mission-critical backend systems, seamless cloud deployments, and intelligent AI microservices.
          </p>
        </motion.div>

        {/* 2x2 Feature Cards Grid (Ref-2 Clean Layout with Ref-1 Premium Vibe) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {whatIDo.map((item, index) => {
            const iconConfig = ICON_MAP[item.iconName] || ICON_MAP.Server;
            const IconComponent = iconConfig.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl p-8 bg-gradient-to-b from-slate-900/80 via-[#0a0f1d]/90 to-[#070b14] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-950/30 group flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-5">
                  {/* Top Bar: Icon & Number Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl ${iconConfig.bg} ${iconConfig.border} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-7 h-7 ${iconConfig.color}`} />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/90 font-mono mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed text-justify">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 space-y-2 border-t border-slate-800/80">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-300 font-mono"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors border-t border-slate-800/50">
                  <span>Enterprise Ready</span>
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
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
