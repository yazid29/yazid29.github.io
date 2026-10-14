import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Briefcase,
  Sparkles,
  Code2,
  GraduationCap,
  Layers,
  ShieldCheck
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-[#09100b] border-t border-[#162e20] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 space-y-2.5 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1d15] border border-[#234b34] text-[#52b788] text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] tracking-tight font-heading">
            Who is <span className="text-[#52b788]">Ahmad Yazid Munif</span>?
          </h2>
          <p className="text-[#9dafa3] text-sm sm:text-base leading-relaxed">
            Delivering secure backends, scalable CRM architectures, and automated deployments.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Technical Profile & Specifications Card (No Photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-lg group">
              {/* Main Technical Card */}
              <div className="relative rounded-3xl bg-[#0f2017] border border-[#1e3b2b] p-6 sm:p-7 overflow-hidden shadow-2xl">
                {/* Corner Accent Tech Ticks */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#52b788]/60 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#52b788]/60 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#52b788]/60 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#52b788]/60 pointer-events-none" />

                {/* Identity Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#1b3627]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#142d1f] border border-[#234b34] flex items-center justify-center text-[#52b788] shadow-inner">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#f3f4f6] font-heading">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-[#52b788] font-mono">
                        {personalInfo.role}
                      </p>
                    </div>
                  </div>
                  {/* <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#132d1f] border border-[#234b34] text-[#80d4a6] shrink-0">
                    Enterprise
                  </span> */}
                </div>

                {/* Technical Specifications Rows */}
                <div className="py-5 space-y-3 font-mono text-xs">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[#8fa596] shrink-0 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#52b788]" />
                      Company:
                    </span>
                    <span className="text-[#f3f4f6] text-right font-medium">
                      PT Mitra Integrasi Informatika
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[#8fa596] shrink-0 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#52b788]" />
                      Location:
                    </span>
                    <span className="text-[#e2e8f0] text-right">
                      {personalInfo.workLocation}
                    </span>
                  </div>

                  {/* <div className="flex items-start justify-between gap-3">
                    <span className="text-[#8fa596] shrink-0 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#52b788]" />
                      Education:
                    </span>
                    <span className="text-[#e2e8f0] text-right">
                      B.Comp.Sc (S.Kom.) · GPA 3.41
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[#8fa596] shrink-0 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#52b788]" />
                      Domains:
                    </span>
                    <span className="text-[#e2e8f0] text-right">
                      Banking, Insurance, Telco
                    </span>
                  </div> */}

                  {/* <div className="flex items-start justify-between gap-3">
                    <span className="text-[#8fa596] shrink-0 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#52b788]" />
                      Focus:
                    </span>
                    <span className="text-[#e2e8f0] text-right">
                      Clean Architecture & CI/CD
                    </span>
                  </div> */}
                </div>

                {/* Core Competencies Quick Badges */}
                <div className="pt-4 border-t border-[#1b3627]">
                  <p className="text-[11px] font-mono text-[#8fa596] mb-2.5">
                    Engineering Highlights:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "RESTful APIs",
                      "Unit Testing",
                      "Code Reviews",
                      "Microservices",
                      "Git & Version Control",
                      "Agile Methodologies",
                    ].map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#132d1f] border border-[#234b34] text-[10px] font-mono text-[#c2d1c7]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#f3f4f6] leading-tight font-heading">
                Bridging Clean Code and Reliable Production Delivery
              </h3>

              {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#9dafa3] text-sm sm:text-base leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                {
                  title: "Enterprise Architecture",
                  desc: "Robust .NET Core & Python microservices for banking & telco"
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
                  className="p-3.5 rounded-xl bg-[#0f2017] border border-[#1e3b2b] hover:border-[#388562]/50 transition-all flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-[#52b788] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#e2e8f0]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#8fa596] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}