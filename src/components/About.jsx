import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  Award,
  Layers,
  Sparkles,
  MapPin,
  Briefcase,
  Terminal
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import developerPhoto from "../assets/foto2.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#060810] border-t border-slate-900 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Who is <span className="text-cyan-400">Ahmad Yazid Munif</span>?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering secure enterprise backends, scalable CRM architectures, and automated cloud deployments.
          </p>
        </motion.div>

        {/* 2-Column Layout: Visual Card (Left/Top) + Narrative & Details (Right) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Professional Portrait Card (Ref-1 & Ref-2 hybrid aesthetic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-emerald-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-[#090e1a] border border-slate-800 p-6 md:p-8 overflow-hidden shadow-2xl">
                {/* Image Container with Dark Gradient Mask */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-slate-900 border border-slate-800/80 mb-6">
                  <img
                    src={developerPhoto}
                    alt="Ahmad Yazid Munif - Software Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a] via-transparent to-transparent opacity-60" />

                  {/* Corner Accent Tech Ticks */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
                </div>

                {/* Developer Metadata */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono">
                        {personalInfo.role}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      Verified Engineer
                    </span>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate">PT MII (Enterprise)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight font-heading">
                Engineering High-Impact Systems From Architecture to Cloud Delivery
              </h3>
              
              {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                {
                  title: "Enterprise Architecture",
                  desc: "Robust .NET Core & Python microservices for banking/telco"
                },
                {
                  title: "Salesforce CRM Systems",
                  desc: "Complex Apex business logic, LWC & automated flows"
                },
                {
                  title: "Automated CI/CD & Docker",
                  desc: "Zero-downtime releases via GitHub Actions pipelines"
                },
                {
                  title: "High Code Quality & Tests",
                  desc: "Rigorous unit testing, code reviews, and maintainable design"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visually Striking Stats Row (Inspired by Ref-1 & Ref-2) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#080c16]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl overflow-hidden group text-center"
            >
              {/* Subtle hover gradient indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white font-heading">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}