import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { certifications, education } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 md:py-32 bg-[#05070e] border-t border-slate-900/80 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

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
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Certifications & Academic Foundation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Continuous industry training in enterprise .NET, cybersecurity, cloud infrastructure, and data systems.
          </p>
        </motion.div>

        {/* 2-Column Section: Certifications Grid (Left/Top) & Education Card (Right) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Certifications Grid (8 Cols) */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#080d1a] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mt-0.5">
                      Issued by: <span className="text-cyan-400">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="truncate max-w-[200px]" title={cert.credentialId}>
                    ID: {cert.credentialId}
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Education Card (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-slate-900/90 to-[#070b16] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                GPA: {education.gpa}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-cyan-400">Higher Education</span>
              <h3 className="text-lg font-bold text-white font-heading mt-1">
                {education.degree}
              </h3>
              <p className="text-xs font-semibold text-slate-300 mt-1">
                {education.university}
              </p>
              <span className="text-[11px] font-mono text-slate-400 block mt-1">
                {education.period}
              </span>
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Academic Focus:
              </h4>
              {education.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={certifications[0]?.credentialId ? "#contact" : "#"}
                className="w-full text-center py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-xs font-mono text-slate-200 hover:text-white border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Request Verified Transcripts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
