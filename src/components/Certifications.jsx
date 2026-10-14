import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ExternalLink
} from "lucide-react";
import { certifications, education } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Certifications & Academic Foundation
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Continuous industry training in enterprise .NET, cybersecurity, cloud infrastructure, and data systems.
          </p>
        </motion.div>

        {/* 2-Column Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Certifications Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/60 transition-all duration-200 shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#13281d] border border-[#234b34] text-[#80d4a6] font-semibold">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#8fa596] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#52b788]" />
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#f3f4f6] group-hover:text-[#80d4a6] transition-colors font-heading">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#c2d1c7] mt-0.5">
                      Issued by: <span className="text-[#80d4a6]">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1b3627] flex items-center justify-between text-[10px] font-mono text-[#8fa596]">
                  <span className="truncate max-w-[200px]" title={cert.credentialId}>
                    ID: {cert.credentialId}
                  </span>
                  <span className="text-[#52b788] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 rounded-3xl p-6 sm:p-7 bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/60 transition-all duration-200 shadow-xl space-y-5"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-[#142c1f] border border-[#234b34] flex items-center justify-center text-[#52b788]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#142e1f] border border-[#234b34] text-[#80d4a6] font-bold">
                GPA: {education.gpa}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-[#52b788]">Higher Education</span>
              <h3 className="text-lg font-bold text-[#f3f4f6] font-heading mt-1">
                {education.degree}
              </h3>
              <p className="text-xs font-semibold text-[#c2d1c7] mt-1">
                {education.university}
              </p>
              <span className="text-[11px] font-mono text-[#8fa596] block mt-1">
                {education.period}
              </span>
            </div>

            <div className="pt-3 border-t border-[#1b3627] space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#8fa596] font-semibold">
                Academic Focus:
              </h4>
              {education.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#c2d1c7] leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#52b788] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full text-center py-2.5 rounded-xl bg-[#13281d] hover:bg-[#1a3828] text-xs font-mono text-[#c2d1c7] hover:text-white border border-[#1e3b2b] flex items-center justify-center gap-2 transition-colors cursor-pointer"
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
